// Compiled by ClojureScript 1.10.520 {}
goog.provide('pomodoro.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('pomodoro.style');
goog.require('pomodoro.util');
goog.require('stylefy.core');
pomodoro.main.goto_page = (function pomodoro$main$goto_page(page_name){
return (function (){
return cljs.core.reset_BANG_.call(null,pomodoro.core.current_page,page_name);
});
});
pomodoro.main.todo_input = (function pomodoro$main$todo_input(p__49796){
var map__49797 = p__49796;
var map__49797__$1 = (((((!((map__49797 == null))))?(((((map__49797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49797.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49797):map__49797);
var title = cljs.core.get.call(null,map__49797__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.call(null,map__49797__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.call(null,map__49797__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.call(null,title);
var stop = ((function (val,map__49797,map__49797__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_.call(null,val,"");

return on_stop.call(null);
});})(val,map__49797,map__49797__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__49797,map__49797__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val)));
if((!(cljs.core.empty_QMARK_.call(null,v)))){
on_save.call(null,v);
} else {
}

cljs.core.swap_BANG_.call(null,pomodoro.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,new cljs.core.Keyword(null,"title","title",636505583)], null),"test title");

return stop.call(null);
});})(val,stop,map__49797,map__49797__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__49797,map__49797__$1,title,on_save,on_stop){
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"on-save","on-save",1618176266),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515)),stylefy.core.use_style.call(null,pomodoro.style.main_input),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save,map__49797,map__49797__$1,title,on_save,on_stop){
return (function (p1__49794_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__49794_SHARP_.target.value);
});})(val,stop,save,map__49797,map__49797__$1,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,stop,save,map__49797,map__49797__$1,title,on_save,on_stop){
return (function (p1__49795_SHARP_){
var G__49799 = p1__49795_SHARP_.which;
switch (G__49799) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(val,stop,save,map__49797,map__49797__$1,title,on_save,on_stop))
], null))], null);
});
;})(val,stop,save,map__49797,map__49797__$1,title,on_save,on_stop))
});
pomodoro.main.timer_digital = (function pomodoro$main$timer_digital(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"color","color",1011675173),"#FF4384",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"176px"], null)], null),pomodoro.util.counter_to_string.call(null,cljs.core.deref.call(null,pomodoro.core.counter))], null);
});
pomodoro.main.timer_circle = (function pomodoro$main$timer_circle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#timer-circle","div#timer-circle",-635938650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"width","width",-384071477),"540px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"540px",new cljs.core.Keyword(null,"height","height",1025178622),"540px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"25px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"130px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"130px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"540",new cljs.core.Keyword(null,"height","height",1025178622),"540",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 540 540"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(270),new cljs.core.Keyword(null,"cy","cy",755331060),(270),new cljs.core.Keyword(null,"r","r",-471384190),(265),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FF4384",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cx","cx",1272694324),(270),new cljs.core.Keyword(null,"cy","cy",755331060),(270),new cljs.core.Keyword(null,"r","r",-471384190),(255),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FF4384",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(18),new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),pomodoro.util.calc_circle.call(null,(255),((1) - (cljs.core.deref.call(null,pomodoro.core.counter) / pomodoro.core.counter_base))),new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),pomodoro.util.calc_circle_stroke_offset.call(null,(255),0.25)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),(270),new cljs.core.Keyword(null,"cy","cy",755331060),(270),new cljs.core.Keyword(null,"r","r",-471384190),(250),new cljs.core.Keyword(null,"fill","fill",883462889),"#FF4384"], null),(cljs.core.truth_(cljs.core.deref.call(null,pomodoro.core.start_count))?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",883462889),"#FFF",new cljs.core.Keyword(null,"r","r",-471384190),(247),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FF4384"], null):null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,stylefy.core.use_style.call(null,pomodoro.style.inner_circle),(cljs.core.truth_(cljs.core.deref.call(null,pomodoro.core.start_count))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#FF4384"], null)], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
console.log("click start");

return cljs.core.swap_BANG_.call(null,pomodoro.core.start_count,cljs.core.not);
})], null)),(cljs.core.truth_(cljs.core.deref.call(null,pomodoro.core.start_count))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_style.call(null,cljs.core.merge.call(null,pomodoro.style.circle_icon,pomodoro.style.white_color)),"pause"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_style.call(null,cljs.core.merge.call(null,pomodoro.style.circle_icon,pomodoro.style.main_color)),"play_arrow"], null))], null)], null)], null);
});
pomodoro.main.task_board = (function pomodoro$main$task_board(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#task-board","div#task-board",-1553145675),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"475px",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"85px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"56px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"145px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"ADD A NEW MISSION...",new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),(function (){
return console.log("stop");
}),new cljs.core.Keyword(null,"on-save","on-save",1618176266),(function (p1__49801_SHARP_){
return cljs.core.swap_BANG_.call(null,pomodoro.core.todo_list,cljs.core.conj,p1__49801_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#title-circle","div#title-circle",1113403948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"48px",new cljs.core.Keyword(null,"hight","hight",-1712278896),"48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(48),new cljs.core.Keyword(null,"height","height",1025178622),(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(24),new cljs.core.Keyword(null,"cy","cy",755331060),(24),new cljs.core.Keyword(null,"r","r",-471384190),(23),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#003164",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#title-block","div#title-block",1760707889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"16px"], null)], null),cljs.core.first.call(null,cljs.core.deref.call(null,pomodoro.core.todo_list)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#pomorodo-list","div#pomorodo-list",-427663073)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100px",new cljs.core.Keyword(null,"padding","padding",1660304693),"35px 0"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.timer_digital], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"50px"], null)], null),(function (){var iter__4523__auto__ = (function pomodoro$main$task_board_$_iter__49802(s__49803){
return (new cljs.core.LazySeq(null,(function (){
var s__49803__$1 = s__49803;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__49803__$1);
if(temp__5735__auto__){
var s__49803__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__49803__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__49803__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__49805 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__49804 = (0);
while(true){
if((i__49804 < size__4522__auto__)){
var todo = cljs.core._nth.call(null,c__4521__auto__,i__49804);
cljs.core.chunk_append.call(null,b__49805,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-box",new cljs.core.Keyword(null,"width","width",-384071477),"445px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#003164",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #003164"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20",new cljs.core.Keyword(null,"height","height",1025178622),"20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(10),new cljs.core.Keyword(null,"cy","cy",755331060),(10),new cljs.core.Keyword(null,"r","r",-471384190),(8),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#003164",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"391px"], null)], null),todo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"play_circle_outline"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)));

var G__49806 = (i__49804 + (1));
i__49804 = G__49806;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49805),pomodoro$main$task_board_$_iter__49802.call(null,cljs.core.chunk_rest.call(null,s__49803__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49805),null);
}
} else {
var todo = cljs.core.first.call(null,s__49803__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"inline-box",new cljs.core.Keyword(null,"width","width",-384071477),"445px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#003164",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"2px solid #003164"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"3px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"20",new cljs.core.Keyword(null,"height","height",1025178622),"20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(10),new cljs.core.Keyword(null,"cy","cy",755331060),(10),new cljs.core.Keyword(null,"r","r",-471384190),(8),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#003164",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"391px"], null)], null),todo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"play_circle_outline"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)),pomodoro$main$task_board_$_iter__49802.call(null,cljs.core.rest.call(null,s__49803__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(3),cljs.core.drop.call(null,(1),cljs.core.deref.call(null,pomodoro.core.todo_list))));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"400px",new cljs.core.Keyword(null,"color","color",1011675173),"#FF4384",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),pomodoro.main.goto_page.call(null,new cljs.core.Keyword(null,"todo-list","todo-list",653205378))], null),"MORE"], null)], null);
});
pomodoro.main.nav_icon = (function pomodoro$main$nav_icon(p__49807){
var map__49808 = p__49807;
var map__49808__$1 = (((((!((map__49808 == null))))?(((((map__49808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49808):map__49808);
var name = cljs.core.get.call(null,map__49808__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var on_click = cljs.core.get.call(null,map__49808__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return ((function (map__49808,map__49808__$1,name,on_click){
return (function (props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"48px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"36px"], null)], null),name], null)], null);
});
;})(map__49808,map__49808__$1,name,on_click))
});
pomodoro.main.page_banner = (function pomodoro$main$page_banner(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#page-banner","div#page-banner",546330928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"width","width",-384071477),"36px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"65px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#menu","div#menu",-295612754),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"48px",new cljs.core.Keyword(null,"width","width",-384071477),"36px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.nav_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"format_list_bulleted",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,pomodoro.core.current_page,new cljs.core.Keyword(null,"todo-list","todo-list",653205378));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.nav_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"insert_chart",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,pomodoro.core.current_page,new cljs.core.Keyword(null,"analytics","analytics",316686129));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.nav_icon,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"library_music",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,pomodoro.core.current_page,new cljs.core.Keyword(null,"ringtones","ringtones",703578463));
})], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#logo","div#logo",1426956221),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"15px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"220px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"24px",new cljs.core.Keyword(null,"width","width",-384071477),"48px",new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(90deg)"], null)], null),"POMODORO"], null)], null);
});
pomodoro.main.sub_main = (function pomodoro$main$sub_main(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.task_board], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.timer_circle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.page_banner], null)], null);
});
});
pomodoro.main.main_page = (function pomodoro$main$main_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,pomodoro.style.pomodoro_main),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,pomodoro.style.main_sider)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.sub_main], null)], null);
});
});

//# sourceMappingURL=main.js.map?rel=1563202137715
