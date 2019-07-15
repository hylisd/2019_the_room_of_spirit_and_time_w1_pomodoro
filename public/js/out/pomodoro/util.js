// Compiled by ClojureScript 1.10.520 {}
goog.provide('pomodoro.util');
goog.require('cljs.core');
pomodoro.util.calc_circle = (function pomodoro$util$calc_circle(r,deg){
var R = (((2) * r) * Math.PI);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((deg * R))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((R * ((1) - deg)))].join('');
});
pomodoro.util.calc_circle_stroke_offset = (function pomodoro$util$calc_circle_stroke_offset(r,deg){
var R = (((2) * r) * Math.PI);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((deg * R));
});
pomodoro.util.counter_to_string = (function pomodoro$util$counter_to_string(counter){
if((counter <= (0))){
return "00:00";
} else {
var m = (counter / (60));
var s = cljs.core.mod.call(null,counter,(60));
return goog.string.format("%02d:%02d",m,s);
}
});

//# sourceMappingURL=util.js.map?rel=1563208754603
