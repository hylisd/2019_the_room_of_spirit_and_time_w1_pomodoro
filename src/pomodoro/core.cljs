(ns pomodoro.core
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [pomodoro.style :as style]))

(defonce todos (r/atom (sorted-map)))
(defonce state (r/atom :work))          ; :work and :break
(defonce counter-base 1500)
(defonce counter (r/atom 1500))
(defonce start-count (r/atom false))

(defonce page (r/atom :main)) ; :todo-list :analytics :ringtones


(defonce todo-list (r/atom ["THE FIRST THING TO DO TODAY"
                            "THE SECOOND THINGS TO DO TODAY 2"
                            "THE THIRD THING TO DO TODAY 3"
                            ]))

;; --------------------------------------------------
;; State change function
;;

(defn save [id title]
  (swap! todos assoc-in [id :title] title))

;; -------------------------
;; Views

(defn todo-input [{:keys [title on-save on-stop]}]
  (let [val (r/atom title)
        stop #(do (reset! val "")
                  (on-stop))
        save #(let [v (-> @val str clojure.string/trim)]
                (if-not (empty? v) (on-save v))
                (swap! todos assoc-in [v :title] "test title")
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


(def app-style
  {:background-image "url('/img/sicp.jpg')"
   :margin "0 0 0 0"})

(defn counter-to-string [counter]
  (let [m (/ counter 60)
        s (mod counter 60)]
    (goog.string/format "%02d:%02d" m s)))

(defn timer-digital []
  [:div {:style {:display "block" :color "#FF4384" :font-size "176px"}}
   (counter-to-string @counter)])

(defn count-circle [deg]
  (let [R (* 2 255 js/Math.PI)]
    (str (* deg R) " " (* R (- 1 deg)))))

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
               :stroke-dasharray (count-circle (- 1 (/ @counter counter-base)))
               :stroke-dashoffset 401   ; 轉 0.25 個長度單位
               }]
     [:circle (merge {:cx 270 :cy 270 :r 250
                      :fill "#FF4384"}
                     (when @start-count {:fill "#FFF" :r 247 :stroke-width 5 :stroke "#FF4384"}))]]
    [:div (merge (stylefy/use-style style/inner-circle)
                 (when @start-count {:style {:background-color "#FF4384"}})
                 {:on-click (fn [] (do (js/console.log "click start")
                                       (swap! start-count not)))})
     (if @start-count
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
                 :on-save #(swap! todo-list conj %)}]]
   [:div {:style {:height "100px" :display "flex"}}
    [:div#title-circle {:style {:width "48px" :hight "48px"}}
     [:svg {:width 48 :height 48}
      [:circle {:cx 24 :cy 24 :r 23 :fill "none" :stroke "#003164" :stroke-width 2}]]]
    [:div#title-block {:style {:padding-left "16px"}}
     (first @todo-list)
     [:div#pomorodo-list]]]
   [:div {:style {:height "100px" :padding "35px 0"}}
    [timer-digital]]
   [:div [:ul {:style {:list-style-type "none" :padding-left "0" :padding-top "50px"}}
          (for [todo (->> @todo-list (drop 1) (take 3))]
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
   [:div {:style {:margin-left "400px" :color "#FF4384"}} "MORE"]]
  )

(defn page-banner []
  [:div#page-banner {:style {:height "800px"
                             :width "36px"
                             :display "flex"
                             :flex-direction "column"
                             :margin-left "65px"
                             :color "white"}}
   [:div#menu {:style {:margin-top "48px" :width "36px"}}
    [:div {:style {:margin-top "48px" :cursor "pointer"}} [:i.material-icons {:style {:font-size "36px"}} "format_list_bulleted"]]
    [:div {:style {:margin-top "48px" :cursor "pointer"}} [:i.material-icons {:style {:font-size "36px"}} "insert_chart"]]
    [:div {:style {:margin-top "48px" :cursor "pointer"}} [:i.material-icons {:style {:font-size "36px"}} "library_music"]]]
   [:div#logo {:style {:position "absolute" :padding-top "15px" :bottom "220px" :font-size "24px" :width "48px" :transform "rotate(90deg)"}} "POMODORO"]]
  )

(defn sub-main []
  (fn []
    [:div#container {:style {:position "relative" :display "flex"}}
     [task-board]
     [timer-circle]
     [page-banner]
     ]))

(defn pomodoro-main []
  (fn []
    [:div (stylefy/use-style style/pomodoro-main)
     [:div (stylefy/use-style style/main-sider)]
     [sub-main]]
    ))

(defn todo-list-page []
  (fn []
    [:div (stylefy/use-style style/pomodoro-main)]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [pomodoro-main] (.getElementById js/document "app"))
  (add-watch page :watcher
             (let [route-page {:main pomodoro-main
                               :todo-list todo-list-page}]
               (fn [key atom old-state new-state]
                 (r/render [(new-state route-page)] (.getElementById js/document "app")))))
  )

(defn init-counter []
  (js/window.setInterval
   (fn []
     (when (not= false @start-count)
       (when (<= @counter 0)
         (swap! start-count not))
       (swap! counter dec)))
   1000))


(defn init! []
  ;; (app-routes)
  (stylefy/init)
  (init-counter)
  (mount-root))
