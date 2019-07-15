(ns pomodoro.util)


(defn calc-circle [r deg]
  (let [R (* 2 r js/Math.PI)]
    (str (* deg R) " " (* R (- 1 deg)))))

(defn calc-circle-stroke-offset [r deg]
  (let [R (* 2 r js/Math.PI)]
    (str (* deg R))))

(defn counter-to-string [counter]
  (if (<= counter 0)
    "00:00"
    (let [m (/ counter 60)
          s (mod counter 60)]
      (goog.string/format "%02d:%02d" m s))))
