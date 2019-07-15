(ns pomodoro.core
  (:require [reagent.core :as r]
            [stylefy.core :as stylefy]
            [pomodoro.main :refer [main-page]]
            [pomodoro.todo-list :refer [todo-list-page]]
            [pomodoro.analytics :refer [analytics-page]]
            [pomodoro.ringtones :refer [ringtones-page]]))

(defonce todos (r/atom (sorted-map)))
(defonce state (r/atom :work))          ; :work and :break

(defonce counter-base 1500)
(defonce break-counter-base 300) ; 5 minutes
(defonce counter (r/atom counter-base))

(defonce start-count (r/atom false)) ; TODO rename pause counter

(defonce current-page (r/atom :main)) ; :todo-list :analytics :ringtones

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
;; Initialize app
;;
(defonce route {:main main-page
                :todo-list todo-list-page
                :analytics analytics-page
                :ringtones ringtones-page
                })

(defn render-component-to-app [component]
  (r/render [component] (.getElementById js/document "app")))

(defn mount-root []
  (render-component-to-app (@current-page route)))

(defn init-router []
  (add-watch current-page :watcher
             (fn [key atom old-state new-state]
               (render-component-to-app (new-state route)))))


(defn init-counter []
  (js/window.setInterval
   (fn []
     (when (not= false @start-count)
       (swap! counter dec)
       (when (< @counter 0)
         (swap! start-count not))))
   1000))

(defn init! []
  (stylefy/init)
  (init-router)
  (init-counter)
  (mount-root))
