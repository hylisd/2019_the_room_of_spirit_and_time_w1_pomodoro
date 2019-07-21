(ns pomodoro.todo-list
  (:require [reagent.core :as r]
            [pomodoro.style :as style]
            [pomodoro.util :as util]
            [stylefy.core :as stylefy]))

;; color define
;; ----------------------------
(def blue "#003164")
(def red "#FF4384")
(def pink "#FFEDF7")
(def white "#FFFFFF")
;; ----------------------------

(defn menu-list []
  (fn [props]
    [:ul {:style {:list-style-type "none" :padding-left "85px" :padding-top "45px" :margin "0 0"}}
     (let [current @pomodoro.core/current-page]
       (for [item [{:name "TO-DO LIST" :icon "format_list_bulleted" :key :todo-list}
                   {:name "ANALYTICS" :icon "insert_chart" :key :analytics}
                   {:name "RINGTONES" :icon "library_music" :key :ringtones}]]
         [:li {:key (:key item)
               :style {:margin-top "42px"
                       :color (if (= current (:key item)) red white)
                       :opacity (if (= current (:key item)) 1 0.2)
                       :cursor "pointer"
                       }
               :on-click (fn [] (reset! pomodoro.core/current-page (:key item)))
               }
          [:div
           [:i.material-icons {:style {:font-size "28px" :vertical-align "middle"}} (:icon item)]
           [:div {:style {:width "8px" :display "inline-block"}}]
           [:div
            {:style {:display "inline-block" :font-size "36px" :vertical-align "text-top" :weight "bold"}}
            (:name item)]]]))]))

(defn clock-digital []
  [:div {:style {:position "absolute"
                 :top "170px" :left "90px"
                 :color red :font-size "64px"}}
   (util/counter-to-string @pomodoro.core.counter)])

(defn clock-circle []
  (fn [props]
    [:div {:style {:position "absolute"
                   :left "85px"
                   :bottom "-10px"}}
     [:div {:style {:position "absolute"
                    :cursor "pointer"
                    :width "45px"
                    :height "45px"
                    :left "155px"
                    :top "73px"}
            :on-click (fn [] (do (js/console.log "click start")
                                 (swap! pomodoro.core.start-count not)))}
      (if @pomodoro.core.start-count
        [:i.material-icons (stylefy/use-style (merge style/circle-icon-2
                                                     style/white-color))
         "pause"]
        [:i.material-icons (stylefy/use-style (merge style/circle-icon-2
                                                     style/white-color))
         "play_arrow"])]
     [clock-digital]
     [:div {:style {:position "absolute"
                    :font-size "16px"
                    :font-weight "bold"
                    :top "220px"
                    :left "60px"
                    :color blue}} (first @pomodoro.core.todo-list)]
     [:svg {:width "350" :height "271"}
      [:defs [:clipPath#cut-off-bottom [:rec {:x 0 :y 0 :width 20 :height 10}]]]
      [:circle {:cx 175 :cy 271 :r 175 :fill pink}]
      [:circle {:cx 175 :cy 95 :r 47.5 :fill blue}]
      [:circle {:cx 175 :cy 95 :r 45 :fill red}]
      [:circle {:cx 175 :cy 95 :r 43 :fill blue}]
      [:circle {:cx 175 :cy 95 :r 41 :fill red}]
      [:circle {:cx 175 :cy 95 :r 42 :fill "none" :stroke-width 5
                :stroke "#FF4384"
                :stroke-dasharray (util/calc-circle 42 (- 1 (/ @pomodoro.core.counter pomodoro.core.counter-base)))
                :stroke-dashoffset (util/calc-circle-stroke-offset 42 0.25)}]]]))

(defn exit-to-main []
  (fn []
    [:div {:style {:position "absolute" :top "48px" :right "85px"}}
     [:i.material-icons {:style {:font-size "36px" :cursor "pointer":color white}
                         :on-click #(reset! pomodoro.core/current-page :main)} "clear"]]))

(defn collapse [{:keys [title data collapse-status]}]
  (let [is-collapse (r/atom collapse-status)]
    (fn []
      [:div {:style {:position "absolute" :cursor "pointer"}
             :on-click #(swap! is-collapse not)}
       [:div {:style {:color white
                      :padding "8px 0 8px 16px"
                      :font-size "24px"
                      :weight "bold"
                      :vertical-align "top"
                      :background "rgba(255, 255, 255, 0.2)"
                      :height "28px"
                      :width "445px"
                      }
              }
        title
        [:span {:style {:margin-top "5px" :position "absolute" :right "10px"}}
         (if @is-collapse
           [:i.material-icons {:style {:font-size "22px" :vertical-align "top-text"}} "arrow_drop_down"]
           [:i.material-icons {:style {:font-size "22px" :vertical-align "top-text"}} "arrow_drop_up"])]
        ]
       (when @is-collapse
         [:ul {:style {:list-style-type "none" :padding-left "0" :margin "0 0"}}
          (for [todo @data]
            [:li {:key todo :draggable true
                  :on-drag-start #(js/console.log "drag start")
                  :on-drag-enter #(js/console.log "drag enter: " %)
                  :on-drag-over #(js/console.log "drag over: " %)
                  :on-drag-leave #(js/console.log "drap leave : " %)
                  }
             [:div {:style {:height "36px" :color white :border-bottom "1px solid #FFF" :margin-top "8px" :font-size "16px" :weight "bold"}}
              [:i.material-icons "radio_button_unchecked"]
              [:div {:style {:vertical-align "top" :display "inline-block" :margin-left "5px"}} todo]
              [:i.material-icons {:style {:position "absolute" :right "10px"}}"play_circle_outline"]]])])]
      )))

(defn middle-part []
  (fn []
    [:div {:style {:position "relative" :top "48px"}}
     [pomodoro.main/todo-input {:placeholder "ADD A NEW MISSION..."
                                :on-stop #(js/console.log "stop")
                                :on-save #(swap! pomodoro.core.todo-list conj %)}]
     [:div {:style {:position "relative" :top "54px"}}
      [collapse {:title "TO-DO" :data pomodoro.core/todo-list :collapse-status true}]]
     ;; [:div {:style {:position "relative" :top "396px"}}
     ;;  [collapse {:title "TO-DO" :data @pomodoro.core/todo-list :collapse-status true}]]
     ;; [:div {:style {:position "relative" :display "block"}}
     ;;  [collapse {:title "DONE" :data @pomodoro.core/todo-list :collapse-status false}]]
     ;; [:div "TO-DO"
     ;;  [:ul {:style {:list-style-type "none" :padding-left "0" :margin "0 0"}}
     ;;   (for [todo @pomodoro.core/todo-list]
     ;;     [:li {:key todo :draggable true
     ;;           :on-drag-start #(js/console.log "drag start")
     ;;           :on-drag-enter #(js/console.log "drag enter: " %)
     ;;           :on-drag-over #(js/console.log "drag over: " %)
     ;;           :on-drag-leave #(js/console.log "drap leave : " %)
     ;;           }
     ;;      [:i.material-icons "radio_button_unchecked"]
     ;;      todo
     ;;      [:i.material-icons "play_circle_outline"]])]]
     ;; [:div "DONE"
     ;;  [:ul {:style {:list-style-type "none" :padding-left "0" :margin "0 0"}}]]
     ]))

(defn todo-list-page []
  (fn []
    [:div (stylefy/use-style style/pomodoro-config)
     [:div#left {:style {:width "475px"
                         :height "800px"
                         :position "relative"}}
      [menu-list]
      [clock-circle]]
     [:div#middle {:style {:width "500px" :height "800px" :position "relative"}}
      [middle-part]]
     [:div#right {:style {:width "100px"
                          :height "800px"
                          :position "relative"}}]
     [pomodoro.main/logo]
     [exit-to-main]]))
