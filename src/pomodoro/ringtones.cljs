(ns pomodoro.ringtones
  (:require [pomodoro.style :as style]
            [pomodoro.util :as util]
            [stylefy.core :as stylefy]))

(defn play [path]
  (.play (js/Audio. path )))

(def sounds {:none #()
             :default #(play "sounds/Factory_Background.mp3")
             :alarm #(play "sounds/Alarm_Clock.mp3")
             :alert #(play "sounds/Record_Alert.mp3")
             :beep #(play "sounds/Beep_Short.mp3")
             :bell #(play "sounds/Jingle_bells.mp3")
             :bird #(play "sounds/Crow_Call.mp3")
             :bridge #(play "sounds/Practice_Shuffling_Cards.mp3")
             :digital #(play "sounds/Radiation_Meter.mp3")
             :drop #(play "sounds/Bowl_spin.map3")
             :horn #(play "sounds/Clown_Horn.mp3")
             :music #(play "sounds/Instrument_Strum.mp3")
             :ring #(play "sounds/Magic_Chime.mp3")
             :warning #(play "sounds/Spaceship_Alarm.mp3")
             :whistle #(play "sounds/Falling_whistle.mp3")
             })

(defn middle-part []
  (let [radio-fn (fn [radio-name]
                   [:ul {:style {:list-style-type "none" :margin "0 0" :padding "0 0"}}
                    (for [[n play-fn] sounds]
                      [:li
                       [:input {:type "radio" :name "work-sound" :value (name n)}]
                       (clojure.string/upper-case (name n))])])]
    (fn []
      [:div
       [:div "WORK"
        (radio-fn "work-sound")]
       [:div "DNOE"
        [:div
         (radio-fn "done-sound")]]])))

(defn ringtones-page []
  (fn []
    [:div (stylefy/use-style style/pomodoro-config)
     [:div#left {:style {:width "475px"
                         :height "800px"
                         :position "relative"}}
      [pomodoro.todo-list/menu-list]
      [pomodoro.todo-list/clock-circle]]
     [:div#middle {:style {:width "500px" :height "800px" :position "relative"}}
      [middle-part]]
     [pomodoro.main/logo]
     [pomodoro.todo-list/exit-to-main]]))
