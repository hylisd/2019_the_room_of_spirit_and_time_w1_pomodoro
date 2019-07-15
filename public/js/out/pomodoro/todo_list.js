// Compiled by ClojureScript 1.10.520 {}
goog.provide('pomodoro.todo_list');
goog.require('cljs.core');
goog.require('pomodoro.style');
goog.require('pomodoro.util');
goog.require('stylefy.core');
pomodoro.todo_list.menu_list = (function pomodoro$todo_list$menu_list(){
return (function (props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0"], null)], null),(function (){var iter__4523__auto__ = (function pomodoro$todo_list$menu_list_$_iter__46578(s__46579){
return (new cljs.core.LazySeq(null,(function (){
var s__46579__$1 = s__46579;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__46579__$1);
if(temp__5735__auto__){
var s__46579__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46579__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__46579__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__46581 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__46580 = (0);
while(true){
if((i__46580 < size__4522__auto__)){
var item = cljs.core._nth.call(null,c__4521__auto__,i__46580);
cljs.core.chunk_append.call(null,b__46581,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"36px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"36px"], null)], null),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null));

var G__46582 = (i__46580 + (1));
i__46580 = G__46582;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46581),pomodoro$todo_list$menu_list_$_iter__46578.call(null,cljs.core.chunk_rest.call(null,s__46579__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46581),null);
}
} else {
var item = cljs.core.first.call(null,s__46579__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"36px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"36px"], null)], null),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null),pomodoro$todo_list$menu_list_$_iter__46578.call(null,cljs.core.rest.call(null,s__46579__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"TO-DO LIST",new cljs.core.Keyword(null,"icon","icon",1679606541),"format_list_bulleted"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"ANALYTICS",new cljs.core.Keyword(null,"icon","icon",1679606541),"insert_chart"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"RINGTONES",new cljs.core.Keyword(null,"icon","icon",1679606541),"library_music"], null)], null));
})()], null);
});
});
pomodoro.todo_list.clock_digital = (function pomodoro$todo_list$clock_digital(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null),pomodoro.util.counter_to_string.call(null,cljs.core.deref.call(null,pomodoro.core.counter))], null);
});
pomodoro.todo_list.clock_circle = (function pomodoro$todo_list$clock_circle(){
return (function (props){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
console.log("click start");

return cljs.core.swap_BANG_.call(null,pomodoro.core.start_count,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref.call(null,pomodoro.core.start_count))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_style.call(null,cljs.core.merge.call(null,pomodoro.style.circle_icon,pomodoro.style.white_color)),"pause"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),stylefy.core.use_style.call(null,cljs.core.merge.call(null,pomodoro.style.circle_icon,pomodoro.style.main_color)),"play_arrow"], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_digital], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null)], null),cljs.core.first.call(null,cljs.core.deref.call(null,pomodoro.core.todo_list))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"350",new cljs.core.Keyword(null,"height","height",1025178622),"271"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipPath#cut-off-bottom","clipPath#cut-off-bottom",-781928898),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rec","rec",-651838357),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(20),new cljs.core.Keyword(null,"height","height",1025178622),(10)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(175),new cljs.core.Keyword(null,"cy","cy",755331060),(271),new cljs.core.Keyword(null,"r","r",-471384190),(175)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),(175),new cljs.core.Keyword(null,"cy","cy",755331060),(95),new cljs.core.Keyword(null,"r","r",-471384190),47.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cx","cx",1272694324),(175),new cljs.core.Keyword(null,"cy","cy",755331060),(95),new cljs.core.Keyword(null,"r","r",-471384190),(40),new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(5),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FF4384",new cljs.core.Keyword(null,"stroke-dasharray","stroke-dasharray",-942933855),pomodoro.util.calc_circle.call(null,(40),((1) - (cljs.core.deref.call(null,pomodoro.core.counter) / pomodoro.core.counter_base))),new cljs.core.Keyword(null,"stroke-dashoffset","stroke-dashoffset",-782320340),pomodoro.util.calc_circle_stroke_offset.call(null,(40),0.25)], null)], null)], null)], null);
});
});
pomodoro.todo_list.exit_to_main = (function pomodoro$todo_list$exit_to_main(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"36px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,pomodoro.core.current_page,new cljs.core.Keyword(null,"main","main",-2117802661));
})], null),"clear"], null)], null);
});
});
pomodoro.todo_list.middle_part = (function pomodoro$todo_list$middle_part(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.todo_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"ADD A NEW MISSION...",new cljs.core.Keyword(null,"on-stop","on-stop",1520114515),(function (){
return console.log("stop");
}),new cljs.core.Keyword(null,"on-save","on-save",1618176266),(function (p1__46583_SHARP_){
return cljs.core.swap_BANG_.call(null,pomodoro.core.todo_list,cljs.core.conj,p1__46583_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"TO-DO",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0"], null)], null),(function (){var iter__4523__auto__ = (function pomodoro$todo_list$middle_part_$_iter__46587(s__46588){
return (new cljs.core.LazySeq(null,(function (){
var s__46588__$1 = s__46588;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__46588__$1);
if(temp__5735__auto__){
var s__46588__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46588__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__46588__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__46590 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__46589 = (0);
while(true){
if((i__46589 < size__4522__auto__)){
var todo = cljs.core._nth.call(null,c__4521__auto__,i__46589);
cljs.core.chunk_append.call(null,b__46590,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),todo,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (i__46589,todo,c__4521__auto__,size__4522__auto__,b__46590,s__46588__$2,temp__5735__auto__){
return (function (){
return console.log("drag start");
});})(i__46589,todo,c__4521__auto__,size__4522__auto__,b__46590,s__46588__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (i__46589,todo,c__4521__auto__,size__4522__auto__,b__46590,s__46588__$2,temp__5735__auto__){
return (function (p1__46584_SHARP_){
return console.log("drag enter: ",p1__46584_SHARP_);
});})(i__46589,todo,c__4521__auto__,size__4522__auto__,b__46590,s__46588__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (i__46589,todo,c__4521__auto__,size__4522__auto__,b__46590,s__46588__$2,temp__5735__auto__){
return (function (p1__46585_SHARP_){
return console.log("drag over: ",p1__46585_SHARP_);
});})(i__46589,todo,c__4521__auto__,size__4522__auto__,b__46590,s__46588__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),((function (i__46589,todo,c__4521__auto__,size__4522__auto__,b__46590,s__46588__$2,temp__5735__auto__){
return (function (p1__46586_SHARP_){
return console.log("drap leave : ",p1__46586_SHARP_);
});})(i__46589,todo,c__4521__auto__,size__4522__auto__,b__46590,s__46588__$2,temp__5735__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"radio_button_unchecked"], null),todo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"play_circle_outline"], null)], null));

var G__46591 = (i__46589 + (1));
i__46589 = G__46591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46590),pomodoro$todo_list$middle_part_$_iter__46587.call(null,cljs.core.chunk_rest.call(null,s__46588__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46590),null);
}
} else {
var todo = cljs.core.first.call(null,s__46588__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),todo,new cljs.core.Keyword(null,"draggable","draggable",1676206163),true,new cljs.core.Keyword(null,"on-drag-start","on-drag-start",-47712205),((function (todo,s__46588__$2,temp__5735__auto__){
return (function (){
return console.log("drag start");
});})(todo,s__46588__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-drag-enter","on-drag-enter",-1692112235),((function (todo,s__46588__$2,temp__5735__auto__){
return (function (p1__46584_SHARP_){
return console.log("drag enter: ",p1__46584_SHARP_);
});})(todo,s__46588__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-drag-over","on-drag-over",-93410408),((function (todo,s__46588__$2,temp__5735__auto__){
return (function (p1__46585_SHARP_){
return console.log("drag over: ",p1__46585_SHARP_);
});})(todo,s__46588__$2,temp__5735__auto__))
,new cljs.core.Keyword(null,"on-drag-leave","on-drag-leave",-373180078),((function (todo,s__46588__$2,temp__5735__auto__){
return (function (p1__46586_SHARP_){
return console.log("drap leave : ",p1__46586_SHARP_);
});})(todo,s__46588__$2,temp__5735__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"radio_button_unchecked"], null),todo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.material-icons","i.material-icons",740058269),"play_circle_outline"], null)], null),pomodoro$todo_list$middle_part_$_iter__46587.call(null,cljs.core.rest.call(null,s__46588__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,cljs.core.deref.call(null,pomodoro.core.todo_list));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"DONE",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"list-style-type","list-style-type",-1703248598),"none",new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0"], null)], null)], null)], null)], null);
});
});
pomodoro.todo_list.todo_list_page = (function pomodoro$todo_list$todo_list_page(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.call(null,pomodoro.style.pomodoro_config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#left","div#left",281759308),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"475px",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.menu_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_circle], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#middle","div#middle",1636924837),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"500px",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.middle_part], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#right","div#right",-1698882541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100px",new cljs.core.Keyword(null,"height","height",1025178622),"800px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.exit_to_main], null)], null)], null);
});
});

//# sourceMappingURL=todo_list.js.map?rel=1563208755014
