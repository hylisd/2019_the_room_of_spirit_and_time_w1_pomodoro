// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.main');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('pomodoro.style');
goog.require('pomodoro.util');
goog.require('stylefy.core');
pomodoro.main.goto_page = (function pomodoro$main$goto_page(page_name){
return (function (){
return cljs.core.reset_BANG_(pomodoro.core.current_page,page_name);
});
});
pomodoro.main.todo_input = (function pomodoro$main$todo_input(p__33198){
var map__33199 = p__33198;
var map__33199__$1 = (((((!((map__33199 == null))))?(((((map__33199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33199):map__33199);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,cljs.core.cst$kw$title);
var on_save = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,cljs.core.cst$kw$on_DASH_save);
var on_stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33199__$1,cljs.core.cst$kw$on_DASH_stop);
var val = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(title);
var stop = ((function (val,map__33199,map__33199__$1,title,on_save,on_stop){
return (function (){
cljs.core.reset_BANG_(val,"");

return (on_stop.cljs$core$IFn$_invoke$arity$0 ? on_stop.cljs$core$IFn$_invoke$arity$0() : on_stop.call(null));
});})(val,map__33199,map__33199__$1,title,on_save,on_stop))
;
var save = ((function (val,stop,map__33199,map__33199__$1,title,on_save,on_stop){
return (function (){
var v = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(val)));
if((!(cljs.core.empty_QMARK_(v)))){
(on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(v) : on_save.call(null,v));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pomodoro.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.cst$kw$title], null),"test title");

return stop();
});})(val,stop,map__33199,map__33199__$1,title,on_save,on_stop))
;
return ((function (val,stop,save,map__33199,map__33199__$1,title,on_save,on_stop){
return (function (props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$positon,"absolute"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"50px",cljs.core.cst$kw$top,"18px",cljs.core.cst$kw$color,"#FF4384",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,save], null),"add"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.cst$kw$on_DASH_save,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$on_DASH_stop], 0)),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pomodoro.style.main_input),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,cljs.core.deref(val),cljs.core.cst$kw$on_DASH_blur,save,cljs.core.cst$kw$on_DASH_change,((function (val,stop,save,map__33199,map__33199__$1,title,on_save,on_stop){
return (function (p1__33196_SHARP_){
return cljs.core.reset_BANG_(val,p1__33196_SHARP_.target.value);
});})(val,stop,save,map__33199,map__33199__$1,title,on_save,on_stop))
,cljs.core.cst$kw$on_DASH_key_DASH_down,((function (val,stop,save,map__33199,map__33199__$1,title,on_save,on_stop){
return (function (p1__33197_SHARP_){
var G__33201 = p1__33197_SHARP_.which;
switch (G__33201) {
case (13):
return save();

break;
case (27):
return stop();

break;
default:
return null;

}
});})(val,stop,save,map__33199,map__33199__$1,title,on_save,on_stop))
], null)], 0))], null)], null)], null);
});
;})(val,stop,save,map__33199,map__33199__$1,title,on_save,on_stop))
});
pomodoro.main.timer_digital = (function pomodoro$main$timer_digital(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$color,"#FF4384",cljs.core.cst$kw$font_DASH_size,"176px"], null)], null),pomodoro.util.counter_to_string(cljs.core.deref(pomodoro.core.counter))], null);
});
pomodoro.main.timer_circle = (function pomodoro$main$timer_circle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_timer_DASH_circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"block",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$width,"540px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,"540px",cljs.core.cst$kw$height,"540px",cljs.core.cst$kw$border_DASH_radius,"25px",cljs.core.cst$kw$margin_DASH_top,"130px",cljs.core.cst$kw$margin_DASH_bottom,"130px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"540",cljs.core.cst$kw$height,"540",cljs.core.cst$kw$view_DASH_box,"0 0 540 540"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,(270),cljs.core.cst$kw$cy,(270),cljs.core.cst$kw$r,(265),cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke,"#FF4384",cljs.core.cst$kw$stroke_DASH_width,(5)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$cx,(270),cljs.core.cst$kw$cy,(270),cljs.core.cst$kw$r,(255),cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke,"#FF4384",cljs.core.cst$kw$stroke_DASH_width,(18),cljs.core.cst$kw$stroke_DASH_dasharray,pomodoro.util.calc_circle((255),((1) - (cljs.core.deref(pomodoro.core.counter) / pomodoro.core.counter_base))),cljs.core.cst$kw$stroke_DASH_dashoffset,pomodoro.util.calc_circle_stroke_offset((255),0.25)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,(270),cljs.core.cst$kw$cy,(270),cljs.core.cst$kw$r,(250),cljs.core.cst$kw$fill,"#FF4384"], null),(cljs.core.truth_(cljs.core.deref(pomodoro.core.start_count))?new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$fill,"#FFF",cljs.core.cst$kw$r,(247),cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$stroke,"#FF4384"], null):null)], 0))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pomodoro.style.inner_circle),(cljs.core.truth_(cljs.core.deref(pomodoro.core.start_count))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#FF4384"], null)], null):null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,(function (){
console.log("click start");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pomodoro.core.start_count,cljs.core.not);
})], null)], 0)),(cljs.core.truth_(cljs.core.deref(pomodoro.core.start_count))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.style.circle_icon,pomodoro.style.white_color], 0))),"pause"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.style.circle_icon,pomodoro.style.main_color], 0))),"play_arrow"], null))], null)], null)], null);
});
pomodoro.main.task_board = (function pomodoro$main$task_board(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_task_DASH_board,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$width,"475px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$padding_DASH_left,"85px",cljs.core.cst$kw$padding_DASH_top,"48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"56px",cljs.core.cst$kw$margin_DASH_bottom,"145px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.todo_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"ADD A NEW MISSION...",cljs.core.cst$kw$on_DASH_stop,(function (){
return console.log("stop");
}),cljs.core.cst$kw$on_DASH_save,(function (p1__33203_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pomodoro.core.todo_list,cljs.core.conj,p1__33203_SHARP_);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"100px",cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_title_DASH_circle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"48px",cljs.core.cst$kw$hight,"48px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(48),cljs.core.cst$kw$height,(48)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,(24),cljs.core.cst$kw$cy,(24),cljs.core.cst$kw$r,(23),cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke,"#003164",cljs.core.cst$kw$stroke_DASH_width,(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_title_DASH_block,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding_DASH_left,"16px"], null)], null),cljs.core.first(cljs.core.deref(pomodoro.core.todo_list)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_pomorodo_DASH_list], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$height,"100px",cljs.core.cst$kw$padding,"35px 0"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.timer_digital], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$padding_DASH_left,"0",cljs.core.cst$kw$padding_DASH_top,"50px"], null)], null),(function (){var iter__4523__auto__ = (function pomodoro$main$task_board_$_iter__33204(s__33205){
return (new cljs.core.LazySeq(null,(function (){
var s__33205__$1 = s__33205;
while(true){
var temp__5737__auto__ = cljs.core.seq(s__33205__$1);
if(temp__5737__auto__){
var s__33205__$2 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33205__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__33205__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__33207 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__33206 = (0);
while(true){
if((i__33206 < size__4522__auto__)){
var todo = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__33206);
cljs.core.chunk_append(b__33207,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"inline-box",cljs.core.cst$kw$width,"445px",cljs.core.cst$kw$margin_DASH_top,"5px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"#003164",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$border_DASH_bottom,"2px solid #003164"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_top,"3px",cljs.core.cst$kw$margin_DASH_right,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"20",cljs.core.cst$kw$height,"20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,(10),cljs.core.cst$kw$cy,(10),cljs.core.cst$kw$r,(8),cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke,"#003164",cljs.core.cst$kw$stroke_DASH_width,(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"391px"], null)], null),todo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"play_circle_outline"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,todo], null)));

var G__33208 = (i__33206 + (1));
i__33206 = G__33208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33207),pomodoro$main$task_board_$_iter__33204(cljs.core.chunk_rest(s__33205__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33207),null);
}
} else {
var todo = cljs.core.first(s__33205__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$display,"inline-box",cljs.core.cst$kw$width,"445px",cljs.core.cst$kw$margin_DASH_top,"5px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$color,"#003164",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$border_DASH_bottom,"2px solid #003164"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$padding_DASH_top,"3px",cljs.core.cst$kw$margin_DASH_right,"5px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"20",cljs.core.cst$kw$height,"20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$cx,(10),cljs.core.cst$kw$cy,(10),cljs.core.cst$kw$r,(8),cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke,"#003164",cljs.core.cst$kw$stroke_DASH_width,(2)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"391px"], null)], null),todo], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"play_circle_outline"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,todo], null)),pomodoro$main$task_board_$_iter__33204(cljs.core.rest(s__33205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),cljs.core.deref(pomodoro.core.todo_list))));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin_DASH_left,"400px",cljs.core.cst$kw$color,"#FF4384",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,pomodoro.main.goto_page(cljs.core.cst$kw$todo_DASH_list)], null),"MORE"], null)], null);
});
pomodoro.main.nav_icon = (function pomodoro$main$nav_icon(p__33209){
var map__33210 = p__33209;
var map__33210__$1 = (((((!((map__33210 == null))))?(((((map__33210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33210):map__33210);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33210__$1,cljs.core.cst$kw$name);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33210__$1,cljs.core.cst$kw$on_DASH_click);
return ((function (map__33210,map__33210__$1,name,on_click){
return (function (props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,cljs.core.cst$kw$name),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"48px",cljs.core.cst$kw$cursor,"pointer"], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$font_DASH_size,"36px"], null)], null),name], null)], null);
});
;})(map__33210,map__33210__$1,name,on_click))
});
pomodoro.main.logo = (function pomodoro$main$logo(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_logo,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$transform,cljs.core.cst$kw$color,cljs.core.cst$kw$bottom,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$width,cljs.core.cst$kw$padding_DASH_top,cljs.core.cst$kw$right,cljs.core.cst$kw$position],["rotate(90deg)","#FFF","150px","24px","bold","48px","15px","70px","absolute"])], null),"POMODORO"], null);
});
pomodoro.main.page_banner = (function pomodoro$main$page_banner(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_page_DASH_banner,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$width,"36px",cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$flex_DASH_direction,"column",cljs.core.cst$kw$right,"85px",cljs.core.cst$kw$margin_DASH_left,"65px",cljs.core.cst$kw$color,"white"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,"48px",cljs.core.cst$kw$width,"36px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.nav_icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"format_list_bulleted",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(pomodoro.core.current_page,cljs.core.cst$kw$todo_DASH_list);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.nav_icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"insert_chart",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(pomodoro.core.current_page,cljs.core.cst$kw$analytics);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.nav_icon,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,"library_music",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(pomodoro.core.current_page,cljs.core.cst$kw$ringtones);
})], null)], null)], null)], null);
});
pomodoro.main.sub_main = (function pomodoro$main$sub_main(){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.task_board], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.timer_circle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.page_banner], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.logo], null)], null);
});
});
pomodoro.main.main_page = (function pomodoro$main$main_page(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pomodoro.style.pomodoro_main),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pomodoro.style.main_sider)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.sub_main], null)], null);
});
});
