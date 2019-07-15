// Compiled by ClojureScript 1.10.520 {}
goog.provide('pomodoro.ringtones');
goog.require('cljs.core');
goog.require('pomodoro.style');
goog.require('pomodoro.util');
goog.require('stylefy.core');
pomodoro.ringtones.play = (function pomodoro$ringtones$play(path){
return (new Audio(path)).play();
});
pomodoro.ringtones.sounds = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"alarm","alarm",2066206946),new cljs.core.Keyword(null,"bird","bird",-1252014845),new cljs.core.Keyword(null,"music","music",-1063514396),new cljs.core.Keyword(null,"ring","ring",-974350330),new cljs.core.Keyword(null,"horn","horn",1544635847),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"drop","drop",364481611),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"bridge","bridge",1678116882),new cljs.core.Keyword(null,"bell","bell",419679286),new cljs.core.Keyword(null,"beep","beep",-1120313130),new cljs.core.Keyword(null,"whistle","whistle",961092761),new cljs.core.Keyword(null,"digital","digital",-1901053828),new cljs.core.Keyword(null,"none","none",1333468478)],[(function (){
return pomodoro.ringtones.play.call(null,"sounds/Alarm_Clock.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Crow_Call.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Instrument_Strum.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Magic_Chime.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Clown_Horn.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Factory_Background.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Bowl_spin.map3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Record_Alert.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Spaceship_Alarm.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Practice_Shuffling_Cards.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Jingle_bells.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Beep_Short.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Falling_whistle.mp3");
}),(function (){
return pomodoro.ringtones.play.call(null,"sounds/Radiation_Meter.mp3");
}),(function (){
return cljs.core.List.EMPTY;
})]);
pomodoro.ringtones.middle_part = (function pomodoro$ringtones$middle_part(){
var radio_fn = (function (radio_name){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0",new cljs.core.Keyword(null,"padding","padding",1660304693),"0 0"], null)], null),(function (){var iter__4523__auto__ = (function pomodoro$ringtones$middle_part_$_iter__46334(s__46335){
return (new cljs.core.LazySeq(null,(function (){
var s__46335__$1 = s__46335;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__46335__$1);
if(temp__5735__auto__){
var s__46335__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46335__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__46335__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__46337 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__46336 = (0);
while(true){
if((i__46336 < size__4522__auto__)){
var vec__46338 = cljs.core._nth.call(null,c__4521__auto__,i__46336);
var n = cljs.core.nth.call(null,vec__46338,(0),null);
var play_fn = cljs.core.nth.call(null,vec__46338,(1),null);
cljs.core.chunk_append.call(null,b__46337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"work-sound",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,n)], null)], null),clojure.string.upper_case.call(null,cljs.core.name.call(null,n))], null));

var G__46344 = (i__46336 + (1));
i__46336 = G__46344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46337),pomodoro$ringtones$middle_part_$_iter__46334.call(null,cljs.core.chunk_rest.call(null,s__46335__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46337),null);
}
} else {
var vec__46341 = cljs.core.first.call(null,s__46335__$2);
var n = cljs.core.nth.call(null,vec__46341,(0),null);
var play_fn = cljs.core.nth.call(null,vec__46341,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"work-sound",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.name.call(null,n)], null)], null),clojure.string.upper_case.call(null,cljs.core.name.call(null,n))], null),pomodoro$ringtones$middle_part_$_iter__46334.call(null,cljs.core.rest.call(null,s__46335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,pomodoro.ringtones.sounds);
})()], null);
});
return ((function (radio_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"WORK",radio_fn.call(null,"work-sound")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"DNOE",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),radio_fn.call(null,"done-sound")], null)], null)], null);
});
;})(radio_fn))
});
pomodoro.ringtones.ringtones_page = (function pomodoro$ringtones$ringtones_page(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,pomodoro.style.pomodoro_config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left","div#left",281759308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"475px",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.menu_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_circle], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#middle","div#middle",1636924837),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.ringtones.middle_part], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#right","div#right",-1698882541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.exit_to_main], null)], null)], null);
});
});

//# sourceMappingURL=ringtones.js.map?rel=1563208754740
