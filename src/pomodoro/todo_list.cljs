(ns pomodoro.todo-list
  (:require [pomodoro.style :as style]
            [pomodoro.util :as util]
            [stylefy.core :as stylefy]))

(defn menu-list []
  (fn [props]
    [:ul {:style {:list-style-type "none" :padding-left "0" :margin "0 0"}}
     (for [item [{:name "TO-DO LIST" :icon "format_list_bulleted"}
                 {:name "ANALYTICS" :icon "insert_chart"}
                 {:name "RINGTONES" :icon "library_music"}]]
       [:li {:key (:name item) :style {:font-size "36px"}} [:i.material-icons {:style {:font-size "36px"}} (:icon item)]
        (:name item)])]))

(defn clock-digital []
  [:div {:style {:position "absolute"}}
   (util/counter-to-string @pomodoro.core.counter)])

(defn clock-circle []
  (fn [props]
    [:div {:position "relative"}
     [:div {:style {:position "absolute" :cursor "pointer"}
            :on-click (fn [] (do (js/console.log "click start")
                                 (swap! pomodoro.core.start-count not)))}
      (if @pomodoro.core.start-count
        [:i.material-icons (stylefy/use-style (merge style/circle-icon
                                                     style/white-color))
         "pause"]
        [:i.material-icons (stylefy/use-style (merge style/circle-icon
                                                     style/main-color))
         "play_arrow"])]
     [clock-digital]
     [:div {:style {:position "absolute"}} (first @pomodoro.core.todo-list)]
     [:svg {:width "350" :height "271"}
      [:defs [:clipPath#cut-off-bottom [:rec {:x 0 :y 0 :width 20 :height 10}]]]
      [:circle {:cx 175 :cy 271 :r 175 }]
      [:circle {:cx 175 :cy 95 :r 47.5}]
      [:circle {:cx 175 :cy 95 :r 40 :fill "none" :stroke-width 5
                :stroke "#FF4384"
                :stroke-dasharray (util/calc-circle 40 (- 1 (/ @pomodoro.core.counter pomodoro.core.counter-base)))
                :stroke-dashoffset (util/calc-circle-stroke-offset 40 0.25)}]]]))

(defn exit-to-main []
  (fn []
    [:div [:i.material-icons {:style {:font-size "36px" :cursor "pointer"}
                              :on-click #(reset! pomodoro.core/current-page :main)} "clear"]]))

(defn middle-part []
  (fn []
    [:div
       [pomodoro.main/todo-input {:placeholder "ADD A NEW MISSION..."
                                  :on-stop #(js/console.log "stop")
                                  :on-save #(swap! pomodoro.core.todo-list conj %)}]
       [:div "TO-DO"
        [:ul {:style {:list-style-type "none" :padding-left "0" :margin "0 0"}}
         (for [todo @pomodoro.core/todo-list]
           [:li {:key todo :draggable true
                 :on-drag-start #(js/console.log "drag start")
                 :on-drag-enter #(js/console.log "drag enter: " %)
                 :on-drag-over #(js/console.log "drag over: " %)
                 :on-drag-leave #(js/console.log "drap leave : " %)
                 }
            [:i.material-icons "radio_button_unchecked"]
            todo
            [:i.material-icons "play_circle_outline"]])]]
       [:div "DONE"
        [:ul {:style {:list-style-type "none" :padding-left "0" :margin "0 0"}}]]]))

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
                          :position "relative"}}
      [exit-to-main]]]))
