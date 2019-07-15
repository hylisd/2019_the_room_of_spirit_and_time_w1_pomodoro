// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.ringtones');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.style');
goog.require('pomodoro.util');
goog.require('stylefy.core');
pomodoro.ringtones.play = (function pomodoro$ringtones$play(path){
return (new Audio(path)).play();
});
pomodoro.ringtones.sounds = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$alarm,cljs.core.cst$kw$bird,cljs.core.cst$kw$music,cljs.core.cst$kw$ring,cljs.core.cst$kw$horn,cljs.core.cst$kw$default,cljs.core.cst$kw$drop,cljs.core.cst$kw$alert,cljs.core.cst$kw$warning,cljs.core.cst$kw$bridge,cljs.core.cst$kw$bell,cljs.core.cst$kw$beep,cljs.core.cst$kw$whistle,cljs.core.cst$kw$digital,cljs.core.cst$kw$none],[(function (){
return pomodoro.ringtones.play("sounds/Alarm_Clock.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Crow_Call.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Instrument_Strum.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Magic_Chime.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Clown_Horn.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Factory_Background.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Bowl_spin.map3");
}),(function (){
return pomodoro.ringtones.play("sounds/Record_Alert.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Spaceship_Alarm.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Practice_Shuffling_Cards.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Jingle_bells.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Beep_Short.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Falling_whistle.mp3");
}),(function (){
return pomodoro.ringtones.play("sounds/Radiation_Meter.mp3");
}),(function (){
return cljs.core.List.EMPTY;
})]);
pomodoro.ringtones.middle_part = (function pomodoro$ringtones$middle_part(){
var radio_fn = (function (radio_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$margin,"0 0",cljs.core.cst$kw$padding,"0 0"], null)], null),(function (){var iter__4523__auto__ = (function pomodoro$ringtones$middle_part_$_iter__33183(s__33184){
return (new cljs.core.LazySeq(null,(function (){
var s__33184__$1 = s__33184;
while(true){
var temp__5737__auto__ = cljs.core.seq(s__33184__$1);
if(temp__5737__auto__){
var s__33184__$2 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33184__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__33184__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__33186 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__33185 = (0);
while(true){
if((i__33185 < size__4522__auto__)){
var vec__33187 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__33185);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187,(0),null);
var play_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33187,(1),null);
cljs.core.chunk_append(b__33186,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,"work-sound",cljs.core.cst$kw$value,cljs.core.name(n)], null)], null),clojure.string.upper_case(cljs.core.name(n))], null));

var G__33193 = (i__33185 + (1));
i__33185 = G__33193;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33186),pomodoro$ringtones$middle_part_$_iter__33183(cljs.core.chunk_rest(s__33184__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33186),null);
}
} else {
var vec__33190 = cljs.core.first(s__33184__$2);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33190,(0),null);
var play_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33190,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,"work-sound",cljs.core.cst$kw$value,cljs.core.name(n)], null)], null),clojure.string.upper_case(cljs.core.name(n))], null),pomodoro$ringtones$middle_part_$_iter__33183(cljs.core.rest(s__33184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(pomodoro.ringtones.sounds);
})()], null);
});
return ((function (radio_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"WORK",radio_fn("work-sound")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"DNOE",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,radio_fn("done-sound")], null)], null)], null);
});
;})(radio_fn))
});
pomodoro.ringtones.ringtones_page = (function pomodoro$ringtones$ringtones_page(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pomodoro.style.pomodoro_config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"475px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.menu_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_circle], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_middle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"500px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.ringtones.middle_part], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.exit_to_main], null)], null)], null);
});
});
