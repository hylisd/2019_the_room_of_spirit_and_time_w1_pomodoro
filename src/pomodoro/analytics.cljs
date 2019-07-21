(ns pomodoro.analytics
  (:require [pomodoro.style :as style]
            [pomodoro.util :as util]
            [pomodoro.highchart :refer [home]]
            [stylefy.core :as stylefy]))


(defn small-wrap [{:keys [title children top]}]
  (fn []
    [:div {:style {:position "absolute"
                   :cursor "pointer"
                   :top top
                   }}
     [:div {:style {:padding "8px 0 8px 16px"
                    :font-size "24px"
                    :weight "bold"
                    :color "#FFFF"
                    :font-weight "bold"
                    :vertical-align "top"
                    :background "rgba(255, 255, 255, 0.2)"
                    :height "28px"
                    :width "445px"
                    }} title]
     [:div {:style {:position "relative"
                    }}
      [children]]
     ]))

(defn tomato-count []
  (fn []
    [:div
     [:div
      [:span "TODAY"]
      [:span "20"] [:span "/TOMATO"]]
     ]))

(defn analytics-panel []
  (fn []
    [:div {:style {:height "100px" :width "200px" :background-color "red"}}
     [tomato-count]
     [tomato-count]
     ]))

(defn analytics-page []
  (fn []
    [:div (stylefy/use-style style/pomodoro-config)
     [:div#left {:style {:width "475px"
                         :height "800px"
                         :position "relative"}}
      [pomodoro.todo-list/menu-list]
      [pomodoro.todo-list/clock-circle]]
     [:div#middle {:style {:width "500px" :height "800px"
                           ;; :position "relative"
                           :display "flex"}}
      [small-wrap
       {:title "FOCUS TIME" :children tomato-count :top "45px"}]
      [small-wrap {:title "CHART" :children home :top "245px"}]]
     [pomodoro.main/logo]
     [pomodoro.todo-list/exit-to-main]]))
