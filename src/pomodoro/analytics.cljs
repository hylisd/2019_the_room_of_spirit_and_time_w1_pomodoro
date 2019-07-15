(ns pomodoro.analytics
  (:require [pomodoro.style :as style]
            [pomodoro.util :as util]
            [pomodoro.highchart :refer [home]]
            [stylefy.core :as stylefy]))


(defn analytics-page []
  (fn []
    [:div (stylefy/use-style style/pomodoro-config)
     [:div#left {:style {:width "475px"
                         :height "800px"
                         :position "relative"}}
      [pomodoro.todo-list/menu-list]
      [pomodoro.todo-list/clock-circle]]
     [:div#middle {:style {:width "500px" :height "800px" :position "relative"}}
      [home]]
     [:div#right {:style {:width "100px"
                          :height "800px"
                          :position "relative"}}
      [pomodoro.todo-list/exit-to-main]]]))
