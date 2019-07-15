(ns pomodoro.main
  (:require [reagent.core :as r]
            [pomodoro.style :as style]
            [pomodoro.util :as util]
            [stylefy.core :as stylefy]))


(defn goto-page [page-name]
  #(reset! pomodoro.core.current-page page-name))
;; -------------------------
;;
;;


(defn todo-input [{:keys [title on-save on-stop]}]
  (let [val (r/atom title)
        stop #(do (reset! val "")
                  (on-stop))
        save #(let [v (-> @val str clojure.string/trim)]
                (if-not (empty? v) (on-save v))
                (swap! pomodoro.core.todos assoc-in [v :title] "test title")
                (stop)
                )]
    (fn [props]
      [:input (merge (dissoc props :on-save :on-stop)
                     (stylefy/use-style style/main-input)
                     {:value @val
                      :on-blur save
                      :on-change #(reset! val (-> % .-target .-value))
                      :on-key-down #(case (.-which %)
                                      13 (save)
                                      27 (stop)
                                      nil )})])))

(defn timer-digital []
  [:div {:style {:display "block" :color "#FF4384" :font-size "176px"}}
   (util/counter-to-string @pomodoro.core.counter)])


(defn timer-circle []
  [:div#timer-circle {:style {:display "block"
                              :height "800px"
                              :width "540px"}}
   [:div {:style {:width "540px"
                  :height "540px"
                  :border-radius "25px"
                  :margin-top "130px"
                  :margin-bottom "130px"
                  :position "relative"
                  }}
    [:svg {:width "540" :height "540" :view-box "0 0 540 540"}
     [:circle {:cx 270 :cy 270 :r 265
               :fill "none"
               :stroke "#FF4384"
               :stroke-width 5
               }]
     [:circle {:cx 270 :cy 270 :r 255
               :fill "none"
               :stroke "#FF4384"
               :stroke-width 18
               :stroke-dasharray (util/calc-circle 255 (- 1 (/ @pomodoro.core.counter pomodoro.core.counter-base)))
               :stroke-dashoffset  (util/calc-circle-stroke-offset 255 0.25) ;; 401   ; 轉 0.25 個長度單位
               }]
     [:circle (merge {:cx 270 :cy 270 :r 250
                      :fill "#FF4384"}
                     (when @pomodoro.core.start-count {:fill "#FFF" :r 247 :stroke-width 5 :stroke "#FF4384"}))]]
    [:div (merge (stylefy/use-style style/inner-circle)
                 (when @pomodoro.core.start-count {:style {:background-color "#FF4384"}})
                 {:on-click (fn [] (do (js/console.log "click start")
                                       (swap! pomodoro.core.start-count not)))})
     (if @pomodoro.core.start-count
       [:i.material-icons (stylefy/use-style (merge style/circle-icon
                                                    style/white-color))
        "pause"]
       [:i.material-icons (stylefy/use-style (merge style/circle-icon
                                                    style/main-color))
        "play_arrow"])
     ]]
   ])


(defn task-board []
  [:div#task-board {:style {:width "475px"
                            :height "800px"
                            :display "flex"
                            :flex-direction "column"
                            :padding-left "85px"
                            :padding-top "48px"
                            }}
   [:div {:style {:height "56px" :margin-bottom "145px"}}
    [todo-input {:placeholder "ADD A NEW MISSION..."
                 :on-stop #(js/console.log "stop")
                 :on-save #(swap! pomodoro.core.todo-list conj %)}]]
   [:div {:style {:height "100px" :display "flex"}}
    [:div#title-circle {:style {:width "48px" :hight "48px"}}
     [:svg {:width 48 :height 48}
      [:circle {:cx 24 :cy 24 :r 23 :fill "none" :stroke "#003164" :stroke-width 2}]]]
    [:div#title-block {:style {:padding-left "16px"}}
     (first @pomodoro.core.todo-list)
     [:div#pomorodo-list]]
    ;; TODO icon brightness_1 可以用在用過的 pomotoro
    ]
   [:div {:style {:height "100px" :padding "35px 0"}}
    [timer-digital]]
   [:div [:ul {:style {:list-style-type "none" :padding-left "0" :padding-top "50px"}}
          (for [todo (->> @pomodoro.core.todo-list (drop 1) (take 3))]
            ^{:key todo} [:li {:style {:display "inline-box"
                                       :width "445px"
                                       :margin-top "5px"}}
                          [:div {:style {:color "#003164"
                                         :display "flex"
                                         :border-bottom "2px solid #003164"
                                         }}
                           [:div {:style {:padding-top "3px"
                                          :margin-right "5px"
                                          }}
                            [:svg {:width "20" :height "20"}
                             [:circle {:cx 10 :cy 10 :r 8
                                       :fill "none"
                                       :stroke "#003164"
                                       :stroke-width 2
                                       }]]]
                           [:div {:style {:width "391px"}} todo]
                           [:div
                            [:i.material-icons "play_circle_outline"]]]])]]
   [:div {:style {:margin-left "400px" :color "#FF4384" :cursor "pointer"}
          :on-click (goto-page :todo-list)}
    "MORE"]])

(defn nav-icon [{:keys [name on-click]}]
  (fn [props]
    [:div (merge (dissoc props :name)
                 {:style {:margin-top "48px" :cursor "pointer"}})
     [:i.material-icons {:style {:font-size "36px"}} name]]
    ))

(defn page-banner []
  [:div#page-banner {:style {:height "800px"
                             :width "36px"
                             :display "flex"
                             :flex-direction "column"
                             :margin-left "65px"
                             :color "white"}}
   [:div#menu {:style {:margin-top "48px" :width "36px"}}
    [nav-icon {:name "format_list_bulleted" :on-click #(reset! pomodoro.core.current-page :todo-list)}]
    [nav-icon {:name "insert_chart" :on-click #(reset! pomodoro.core.current-page :analytics)}]
    [nav-icon {:name "library_music" :on-click #(reset! pomodoro.core.current-page :ringtones)}]]
   [:div#logo {:style {:position "absolute" :padding-top "15px" :bottom "220px" :font-size "24px" :width "48px" :transform "rotate(90deg)"}} "POMODORO"]])


(defn sub-main []
  (fn []
    [:div#container {:style {:position "relative" :display "flex"}}
     [task-board]
     [timer-circle]
     [page-banner]]))

(defn main-page []
  (fn []
    [:div (stylefy/use-style style/pomodoro-main)
     [:div (stylefy/use-style style/main-sider)]
     [sub-main]]
    ))
