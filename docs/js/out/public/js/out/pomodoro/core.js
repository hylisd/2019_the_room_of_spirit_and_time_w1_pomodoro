// Compiled by ClojureScript 1.10.520 {}
goog.provide('pomodoro.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('pomodoro.style');
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.todos !== 'undefined')){
} else {
pomodoro.core.todos = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.counter !== 'undefined')){
} else {
pomodoro.core.counter = reagent.core.atom.call(null,(0));
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.todo_list !== 'undefined')){
} else {
pomodoro.core.todo_list = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["THE FIRST THING TO DO TODAY","THE SECOOND THINGS TO DO TODAY 2","THE THIRD THING TO DO TODAY 3","THE FORTH THING TO DO TODAY 4"], null));
}
pomodoro.core.save = (function pomodoro$core$save(id,title){
return cljs.core.swap_BANG_.call(null,pomodoro.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
pomodoro.core.todo_input = (function pomodoro$core$todo_input(p__39426){
var map__39427 = p__39426;
var map__39427__$1 = (((((!((map__39427 == null))))?(((((map__39427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39427):map__39427);
var title = cljs.core.get.call(null,map__39427__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_save = cljs.core.get.call(null,map__39427__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var on_stop = cljs.core.get.call(null,map__39427__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var val = reagent.core.atom.call(null,title);
var stop = ((function (val,map__39427,map__39427__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_.call(null,val,"");

return console.log("trigger stop function");
});})(val,map__39427,map__39427__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__39427,map__39427__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,val)));
if((!(cljs.core.empty_QMARK_.call(null,v)))){
on_save.call(null,v);
} else {
}

cljs.core.swap_BANG_.call(null,pomodoro.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,new cljs.core.Keyword(null,"title","title",636505583)], null),"test title");

console.log("todo input save function");

return stop.call(null);
});})(val,stop,map__39427,map__39427__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__39427,map__39427__$1,title,on_save,on_stop){
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.call(null,cljs.core.dissoc.call(null,props,new cljs.core.Keyword(null,"on-save","on-save",1618176266),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,val),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (val,stop,save,map__39427,map__39427__$1,title,on_save,on_stop){
return (function (p1__39424_SHARP_){
return cljs.core.reset_BANG_.call(null,val,p1__39424_SHARP_.target.value);
});})(val,stop,save,map__39427,map__39427__$1,title,on_save,on_stop))
,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),((function (val,stop,save,map__39427,map__39427__$1,title,on_save,on_stop){
return (function (p1__39425_SHARP_){
var G__39429 = p1__39425_SHARP_.which;
switch (G__39429) {
case (13):
return save.call(null);

break;
case (27):
return stop.call(null);

break;
default:
return null;

}
});})(val,stop,save,map__39427,map__39427__$1,title,on_save,on_stop))
], null))], null);
});
;})(val,stop,save,map__39427,map__39427__$1,title,on_save,on_stop))
});
pomodoro.core.app_style = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-image","background-image",-1142314704),"url('/img/sicp.jpg')",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 0 0"], null);
pomodoro.core.home_page = (function pomodoro$core$home_page(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,pomodoro.core.app_style),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"pomodoro"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Welcome to Reagent 1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"new input",new cljs.core.Keyword(null,"on-save","on-save",1618176266),(function (){
return console.log("on save function trigger");
}),new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),(function (){
return console.log("on stop trigger");
})], null)], null)], null)], null);
});
});
pomodoro.core.timer_digital = (function pomodoro$core$timer_digital(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#FF4384",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"176px"], null)], null),"25:00"], null);
});
pomodoro.core.timer_circle = (function pomodoro$core$timer_circle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#timer-circle","div#timer-circle",-635938650),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"width","width",-384071477),"540px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"540px",new cljs.core.Keyword(null,"height","height",1025178622),"540px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"25px",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"130px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"130px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"540",new cljs.core.Keyword(null,"height","height",1025178622),"540"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(270),new cljs.core.Keyword(null,"cy","cy",755331060),(270),new cljs.core.Keyword(null,"r","r",-471384190),(265),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FF4384",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),(270),new cljs.core.Keyword(null,"cy","cy",755331060),(270),new cljs.core.Keyword(null,"r","r",-471384190),(135),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FF4384",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(240)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["transform .5s,background-color .3s","50%","145px","#fff","-45px","90px","pointer","block","absolute","90px","90px","50%"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,pomodoro.style.icon)], null)], null)], null)], null);
});
pomodoro.core.task_board = (function pomodoro$core$task_board(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#task-board","div#task-board",-1553145675),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"560px",new cljs.core.Keyword(null,"height","height",1025178622),"800px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.todo_input,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"ADD A NEW MISSION..."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.first.call(null,cljs.core.deref.call(null,pomodoro.core.todo_list))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.timer_digital], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function pomodoro$core$task_board_$_iter__39431(s__39432){
return (new cljs.core.LazySeq(null,(function (){
var s__39432__$1 = s__39432;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__39432__$1);
if(temp__5735__auto__){
var s__39432__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__39432__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__39432__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__39434 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__39433 = (0);
while(true){
if((i__39433 < size__4522__auto__)){
var todo = cljs.core._nth.call(null,c__4521__auto__,i__39433);
cljs.core.chunk_append.call(null,b__39434,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)));

var G__39435 = (i__39433 + (1));
i__39433 = G__39435;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39434),pomodoro$core$task_board_$_iter__39431.call(null,cljs.core.chunk_rest.call(null,s__39432__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39434),null);
}
} else {
var todo = cljs.core.first.call(null,s__39432__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),todo], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),todo], null)),pomodoro$core$task_board_$_iter__39431.call(null,cljs.core.rest.call(null,s__39432__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.take.call(null,(3),cljs.core.drop.call(null,(1),cljs.core.deref.call(null,pomodoro.core.todo_list))));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"MORE"], null)], null)], null);
});
pomodoro.core.page_banner = (function pomodoro$core$page_banner(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#page-banner","div#page-banner",546330928),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"width","width",-384071477),"180px",new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"3"], null)], null);
});
pomodoro.core.sub_main = (function pomodoro$core$sub_main(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#container","div#container",-1257349488),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"display","display",242065432),"flex"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.task_board], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.timer_circle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.page_banner], null)], null);
});
});
pomodoro.core.pomodoro_main = (function pomodoro$core$pomodoro_main(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,pomodoro.style.pomodoro_main),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,pomodoro.style.main_sider)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.sub_main], null)], null);
});
});
pomodoro.core.mount_root = (function pomodoro$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.pomodoro_main], null),document.getElementById("app"));
});
pomodoro.core.init_BANG_ = (function pomodoro$core$init_BANG_(){
stylefy.core.init.call(null);

return pomodoro.core.mount_root.call(null);
});
pomodoro.core.main = (function pomodoro$core$main(){
stylefy.core.init.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.core.pomodoro_main], null),document.getElementById("app"));
});
goog.exportSymbol('pomodoro.core.main', pomodoro.core.main);

//# sourceMappingURL=core.js.map?rel=1563088480533
