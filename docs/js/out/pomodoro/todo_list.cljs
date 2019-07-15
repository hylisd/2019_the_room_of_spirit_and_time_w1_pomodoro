(ns pomodoro.todo-list
  (:require [stylefy.core :as stylefy]))

(defn todo-list-page []
  (fn []
    [:div (stylefy/use-style style/pomodoro-main)]))
