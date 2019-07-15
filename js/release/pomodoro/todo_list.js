// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.todo_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.style');
goog.require('pomodoro.util');
goog.require('stylefy.core');
pomodoro.todo_list.menu_list = (function pomodoro$todo_list$menu_list(){
return (function (props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$padding_DASH_left,"0",cljs.core.cst$kw$margin,"0 0"], null)], null),(function (){var iter__4523__auto__ = (function pomodoro$todo_list$menu_list_$_iter__33216(s__33217){
return (new cljs.core.LazySeq(null,(function (){
var s__33217__$1 = s__33217;
while(true){
var temp__5737__auto__ = cljs.core.seq(s__33217__$1);
if(temp__5737__auto__){
var s__33217__$2 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33217__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__33217__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__33219 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__33218 = (0);
while(true){
if((i__33218 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__33218);
cljs.core.chunk_append(b__33219,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"36px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"36px"], null)], null),cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(item)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null));

var G__33220 = (i__33218 + (1));
i__33218 = G__33220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33219),pomodoro$todo_list$menu_list_$_iter__33216(cljs.core.chunk_rest(s__33217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33219),null);
}
} else {
var item = cljs.core.first(s__33217__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"36px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"36px"], null)], null),cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(item)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null),pomodoro$todo_list$menu_list_$_iter__33216(cljs.core.rest(s__33217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"TO-DO LIST",cljs.core.cst$kw$icon,"format_list_bulleted"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"ANALYTICS",cljs.core.cst$kw$icon,"insert_chart"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"RINGTONES",cljs.core.cst$kw$icon,"library_music"], null)], null));
})()], null);
});
});
pomodoro.todo_list.clock_digital = (function pomodoro$todo_list$clock_digital(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null)], null),pomodoro.util.counter_to_string(cljs.core.deref(pomodoro.core.counter))], null);
});
pomodoro.todo_list.clock_circle = (function pomodoro$todo_list$clock_circle(){
return (function (props){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,(function (){
console.log("click start");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pomodoro.core.start_count,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(pomodoro.core.start_count))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.style.circle_icon,pomodoro.style.white_color], 0))),"pause"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.style.circle_icon,pomodoro.style.main_color], 0))),"play_arrow"], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_digital], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"absolute"], null)], null),cljs.core.first(cljs.core.deref(pomodoro.core.todo_list))], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"350",cljs.core.cst$kw$height,"271"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clipPath_SHARP_cut_DASH_off_DASH_bottom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rec,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,(20),cljs.core.cst$kw$height,(10)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(271),cljs.core.cst$kw$r,(175)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(95),cljs.core.cst$kw$r,47.5], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(95),cljs.core.cst$kw$r,(40),cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$stroke,"#FF4384",cljs.core.cst$kw$stroke_DASH_dasharray,pomodoro.util.calc_circle((40),((1) - (cljs.core.deref(pomodoro.core.counter) / pomodoro.core.counter_base))),cljs.core.cst$kw$stroke_DASH_dashoffset,pomodoro.util.calc_circle_stroke_offset((40),0.25)], null)], null)], null)], null);
});
});
pomodoro.todo_list.exit_to_main = (function pomodoro$todo_list$exit_to_main(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"36px",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(pomodoro.core.current_page,cljs.core.cst$kw$main);
})], null),"clear"], null)], null);
});
});
pomodoro.todo_list.middle_part = (function pomodoro$todo_list$middle_part(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.todo_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"ADD A NEW MISSION...",cljs.core.cst$kw$on_DASH_stop,(function (){
return console.log("stop");
}),cljs.core.cst$kw$on_DASH_save,(function (p1__33221_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pomodoro.core.todo_list,cljs.core.conj,p1__33221_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"TO-DO",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$padding_DASH_left,"0",cljs.core.cst$kw$margin,"0 0"], null)], null),(function (){var iter__4523__auto__ = (function pomodoro$todo_list$middle_part_$_iter__33225(s__33226){
return (new cljs.core.LazySeq(null,(function (){
var s__33226__$1 = s__33226;
while(true){
var temp__5737__auto__ = cljs.core.seq(s__33226__$1);
if(temp__5737__auto__){
var s__33226__$2 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33226__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__33226__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__33228 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__33227 = (0);
while(true){
if((i__33227 < size__4522__auto__)){
var todo = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__33227);
cljs.core.chunk_append(b__33228,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$key,todo,cljs.core.cst$kw$draggable,true,cljs.core.cst$kw$on_DASH_drag_DASH_start,((function (i__33227,todo,c__4521__auto__,size__4522__auto__,b__33228,s__33226__$2,temp__5737__auto__){
return (function (){
return console.log("drag start");
});})(i__33227,todo,c__4521__auto__,size__4522__auto__,b__33228,s__33226__$2,temp__5737__auto__))
,cljs.core.cst$kw$on_DASH_drag_DASH_enter,((function (i__33227,todo,c__4521__auto__,size__4522__auto__,b__33228,s__33226__$2,temp__5737__auto__){
return (function (p1__33222_SHARP_){
return console.log("drag enter: ",p1__33222_SHARP_);
});})(i__33227,todo,c__4521__auto__,size__4522__auto__,b__33228,s__33226__$2,temp__5737__auto__))
,cljs.core.cst$kw$on_DASH_drag_DASH_over,((function (i__33227,todo,c__4521__auto__,size__4522__auto__,b__33228,s__33226__$2,temp__5737__auto__){
return (function (p1__33223_SHARP_){
return console.log("drag over: ",p1__33223_SHARP_);
});})(i__33227,todo,c__4521__auto__,size__4522__auto__,b__33228,s__33226__$2,temp__5737__auto__))
,cljs.core.cst$kw$on_DASH_drag_DASH_leave,((function (i__33227,todo,c__4521__auto__,size__4522__auto__,b__33228,s__33226__$2,temp__5737__auto__){
return (function (p1__33224_SHARP_){
return console.log("drap leave : ",p1__33224_SHARP_);
});})(i__33227,todo,c__4521__auto__,size__4522__auto__,b__33228,s__33226__$2,temp__5737__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"radio_button_unchecked"], null),todo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"play_circle_outline"], null)], null));

var G__33229 = (i__33227 + (1));
i__33227 = G__33229;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33228),pomodoro$todo_list$middle_part_$_iter__33225(cljs.core.chunk_rest(s__33226__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33228),null);
}
} else {
var todo = cljs.core.first(s__33226__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$key,todo,cljs.core.cst$kw$draggable,true,cljs.core.cst$kw$on_DASH_drag_DASH_start,((function (todo,s__33226__$2,temp__5737__auto__){
return (function (){
return console.log("drag start");
});})(todo,s__33226__$2,temp__5737__auto__))
,cljs.core.cst$kw$on_DASH_drag_DASH_enter,((function (todo,s__33226__$2,temp__5737__auto__){
return (function (p1__33222_SHARP_){
return console.log("drag enter: ",p1__33222_SHARP_);
});})(todo,s__33226__$2,temp__5737__auto__))
,cljs.core.cst$kw$on_DASH_drag_DASH_over,((function (todo,s__33226__$2,temp__5737__auto__){
return (function (p1__33223_SHARP_){
return console.log("drag over: ",p1__33223_SHARP_);
});})(todo,s__33226__$2,temp__5737__auto__))
,cljs.core.cst$kw$on_DASH_drag_DASH_leave,((function (todo,s__33226__$2,temp__5737__auto__){
return (function (p1__33224_SHARP_){
return console.log("drap leave : ",p1__33224_SHARP_);
});})(todo,s__33226__$2,temp__5737__auto__))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"radio_button_unchecked"], null),todo,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"play_circle_outline"], null)], null),pomodoro$todo_list$middle_part_$_iter__33225(cljs.core.rest(s__33226__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(pomodoro.core.todo_list));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"DONE",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$padding_DASH_left,"0",cljs.core.cst$kw$margin,"0 0"], null)], null)], null)], null)], null);
});
});
pomodoro.todo_list.todo_list_page = (function pomodoro$todo_list$todo_list_page(){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pomodoro.style.pomodoro_config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"475px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.menu_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_circle], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_middle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"500px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.middle_part], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.exit_to_main], null)], null)], null);
});
});
