(ns pomodoro.style
  (:require [stylefy.core :as stylefy]))


;; color
(def white-color
  {:color "white"})
(def main-color
  {:color "#FF4384"})

(def pomodoro-main
  {:background-color "#FFEDF7" :display "block" :width "1280px" :height "800px"
   :margin "0 auto" :position "relative"})

(def main-sider
  {:width "450px"
   :height "800px"
   :background-color "#003164"
   :display "block"
   :position "absolute"
   :right "0px"})


(def circle
  {
   :position "absolute"
   :display "block"
   :width "510px"
   :height "510px"
   :border-radius "510px"
   :background-color "#777"
   :transition "background-color .3s"

   ::stylefy/mode {:before {:content ""
                            :display "block"
                            :width "540px"
                            :height "540px"
                            :border "5px solid #777"
                            :border-radius "540px"
                            :box-sizing "border-box"
                            :transition "border .3s"
                            }}})

(def main-input
  {:width "445px"
   :height "56px"
   :color "#FF4384"
   :font-size "16px"
   ::stylefy/mode {:placeholder
                   {:color "#FF4384"}
                   }})

(def inner-circle
  {:position "absolute"
   :display "block"
   :width "90px"
   :height "90px"
   :margin-left "-45px"
   :margin "0 auto"
   :margin-top "-45px"
   :border-radius "90px"
   :background-color "#fff"
   :left "50%"
   :top "50%"
   :cursor "pointer"
   :transition "transform .5s,background-color .3s"
   })


(def circle-icon
  {:font-size "50px"
   :position "absolute"
   :left "22%"
   :top "22%"})
