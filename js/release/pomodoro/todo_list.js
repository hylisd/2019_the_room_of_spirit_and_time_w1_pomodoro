// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.todo_list');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('pomodoro.style');
goog.require('pomodoro.util');
goog.require('stylefy.core');
pomodoro.todo_list.blue = "#003164";
pomodoro.todo_list.red = "#FF4384";
pomodoro.todo_list.pink = "#FFEDF7";
pomodoro.todo_list.white = "#FFFFFF";
pomodoro.todo_list.menu_list = (function pomodoro$todo_list$menu_list(){
return (function (props){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$padding_DASH_left,"85px",cljs.core.cst$kw$padding_DASH_top,"45px",cljs.core.cst$kw$margin,"0 0"], null)], null),(function (){var current = cljs.core.deref(pomodoro.core.current_page);
var iter__4523__auto__ = ((function (current){
return (function pomodoro$todo_list$menu_list_$_iter__33219(s__33220){
return (new cljs.core.LazySeq(null,((function (current){
return (function (){
var s__33220__$1 = s__33220;
while(true){
var temp__5737__auto__ = cljs.core.seq(s__33220__$1);
if(temp__5737__auto__){
var s__33220__$2 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33220__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__33220__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__33222 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__33221 = (0);
while(true){
if((i__33221 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__33221);
cljs.core.chunk_append(b__33222,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin_DASH_top,"42px",cljs.core.cst$kw$color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item)))?pomodoro.todo_list.red:pomodoro.todo_list.white),cljs.core.cst$kw$opacity,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item)))?(1):0.2),cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (i__33221,item,c__4521__auto__,size__4522__auto__,b__33222,s__33220__$2,temp__5737__auto__,current){
return (function (){
return cljs.core.reset_BANG_(pomodoro.core.current_page,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item));
});})(i__33221,item,c__4521__auto__,size__4522__auto__,b__33222,s__33220__$2,temp__5737__auto__,current))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"28px",cljs.core.cst$kw$vertical_DASH_align,"middle"], null)], null),cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"8px",cljs.core.cst$kw$display,"inline-block"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$font_DASH_size,"36px",cljs.core.cst$kw$vertical_DASH_align,"text-top",cljs.core.cst$kw$weight,"bold"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null));

var G__33223 = (i__33221 + (1));
i__33221 = G__33223;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33222),pomodoro$todo_list$menu_list_$_iter__33219(cljs.core.chunk_rest(s__33220__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33222),null);
}
} else {
var item = cljs.core.first(s__33220__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$key,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$margin_DASH_top,"42px",cljs.core.cst$kw$color,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item)))?pomodoro.todo_list.red:pomodoro.todo_list.white),cljs.core.cst$kw$opacity,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item)))?(1):0.2),cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (item,s__33220__$2,temp__5737__auto__,current){
return (function (){
return cljs.core.reset_BANG_(pomodoro.core.current_page,cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__33220__$2,temp__5737__auto__,current))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"28px",cljs.core.cst$kw$vertical_DASH_align,"middle"], null)], null),cljs.core.cst$kw$icon.cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"8px",cljs.core.cst$kw$display,"inline-block"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$font_DASH_size,"36px",cljs.core.cst$kw$vertical_DASH_align,"text-top",cljs.core.cst$kw$weight,"bold"], null)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null),pomodoro$todo_list$menu_list_$_iter__33219(cljs.core.rest(s__33220__$2)));
}
} else {
return null;
}
break;
}
});})(current))
,null,null));
});})(current))
;
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"TO-DO LIST",cljs.core.cst$kw$icon,"format_list_bulleted",cljs.core.cst$kw$key,cljs.core.cst$kw$todo_DASH_list], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"ANALYTICS",cljs.core.cst$kw$icon,"insert_chart",cljs.core.cst$kw$key,cljs.core.cst$kw$analytics], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,"RINGTONES",cljs.core.cst$kw$icon,"library_music",cljs.core.cst$kw$key,cljs.core.cst$kw$ringtones], null)], null));
})()], null);
});
});
pomodoro.todo_list.clock_digital = (function pomodoro$todo_list$clock_digital(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,"170px",cljs.core.cst$kw$left,"90px",cljs.core.cst$kw$color,pomodoro.todo_list.red,cljs.core.cst$kw$font_DASH_size,"64px"], null)], null),pomodoro.util.counter_to_string(cljs.core.deref(pomodoro.core.counter))], null);
});
pomodoro.todo_list.clock_circle = (function pomodoro$todo_list$clock_circle(){
return (function (props){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$left,"85px",cljs.core.cst$kw$bottom,"-10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$width,"45px",cljs.core.cst$kw$height,"45px",cljs.core.cst$kw$left,"155px",cljs.core.cst$kw$top,"73px"], null),cljs.core.cst$kw$on_DASH_click,(function (){
console.log("click start");

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pomodoro.core.start_count,cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(pomodoro.core.start_count))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.style.circle_icon_2,pomodoro.style.white_color], 0))),"pause"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pomodoro.style.circle_icon_2,pomodoro.style.white_color], 0))),"play_arrow"], null))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_digital], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$font_DASH_size,"16px",cljs.core.cst$kw$font_DASH_weight,"bold",cljs.core.cst$kw$top,"220px",cljs.core.cst$kw$left,"60px",cljs.core.cst$kw$color,pomodoro.todo_list.blue], null)], null),cljs.core.first(cljs.core.deref(pomodoro.core.todo_list))], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$svg,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"350",cljs.core.cst$kw$height,"271"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$defs,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$clipPath_SHARP_cut_DASH_off_DASH_bottom,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$rec,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$x,(0),cljs.core.cst$kw$y,(0),cljs.core.cst$kw$width,(20),cljs.core.cst$kw$height,(10)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(271),cljs.core.cst$kw$r,(175),cljs.core.cst$kw$fill,pomodoro.todo_list.pink], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(95),cljs.core.cst$kw$r,47.5,cljs.core.cst$kw$fill,pomodoro.todo_list.blue], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(95),cljs.core.cst$kw$r,(45),cljs.core.cst$kw$fill,pomodoro.todo_list.red], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(95),cljs.core.cst$kw$r,(43),cljs.core.cst$kw$fill,pomodoro.todo_list.blue], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(95),cljs.core.cst$kw$r,(41),cljs.core.cst$kw$fill,pomodoro.todo_list.red], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$circle,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$cx,(175),cljs.core.cst$kw$cy,(95),cljs.core.cst$kw$r,(42),cljs.core.cst$kw$fill,"none",cljs.core.cst$kw$stroke_DASH_width,(5),cljs.core.cst$kw$stroke,"#FF4384",cljs.core.cst$kw$stroke_DASH_dasharray,pomodoro.util.calc_circle((42),((1) - (cljs.core.deref(pomodoro.core.counter) / pomodoro.core.counter_base))),cljs.core.cst$kw$stroke_DASH_dashoffset,pomodoro.util.calc_circle_stroke_offset((42),0.25)], null)], null)], null)], null);
});
});
pomodoro.todo_list.exit_to_main = (function pomodoro$todo_list$exit_to_main(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$top,"48px",cljs.core.cst$kw$right,"85px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$font_DASH_size,"36px",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$color,pomodoro.todo_list.white], null),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.reset_BANG_(pomodoro.core.current_page,cljs.core.cst$kw$main);
})], null),"clear"], null)], null);
});
});
pomodoro.todo_list.collapse = (function pomodoro$todo_list$collapse(p__33227){
var map__33228 = p__33227;
var map__33228__$1 = (((((!((map__33228 == null))))?(((((map__33228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33228):map__33228);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33228__$1,cljs.core.cst$kw$title);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33228__$1,cljs.core.cst$kw$data);
var collapse_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33228__$1,cljs.core.cst$kw$collapse_DASH_status);
var is_collapse = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(collapse_status);
return ((function (is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$cursor,"pointer"], null),cljs.core.cst$kw$on_DASH_click,((function (is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(is_collapse,cljs.core.not);
});})(is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$color,pomodoro.todo_list.white,cljs.core.cst$kw$padding,"8px 0 8px 16px",cljs.core.cst$kw$font_DASH_size,"24px",cljs.core.cst$kw$weight,"bold",cljs.core.cst$kw$vertical_DASH_align,"top",cljs.core.cst$kw$background,"rgba(255, 255, 255, 0.2)",cljs.core.cst$kw$height,"28px",cljs.core.cst$kw$width,"445px"], null)], null),title,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin_DASH_top,"5px",cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"10px"], null)], null),(cljs.core.truth_(cljs.core.deref(is_collapse))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"22px",cljs.core.cst$kw$vertical_DASH_align,"top-text"], null)], null),"arrow_drop_down"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$font_DASH_size,"22px",cljs.core.cst$kw$vertical_DASH_align,"top-text"], null)], null),"arrow_drop_up"], null))], null)], null),(cljs.core.truth_(cljs.core.deref(is_collapse))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$list_DASH_style_DASH_type,"none",cljs.core.cst$kw$padding_DASH_left,"0",cljs.core.cst$kw$margin,"0 0"], null)], null),(function (){var iter__4523__auto__ = ((function (is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function pomodoro$todo_list$collapse_$_iter__33230(s__33231){
return (new cljs.core.LazySeq(null,((function (is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (){
var s__33231__$1 = s__33231;
while(true){
var temp__5737__auto__ = cljs.core.seq(s__33231__$1);
if(temp__5737__auto__){
var s__33231__$2 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(s__33231__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__33231__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__33233 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__33232 = (0);
while(true){
if((i__33232 < size__4522__auto__)){
var todo = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__33232);
cljs.core.chunk_append(b__33233,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$key,todo,cljs.core.cst$kw$draggable,true,cljs.core.cst$kw$on_DASH_drag_DASH_start,((function (i__33232,todo,c__4521__auto__,size__4522__auto__,b__33233,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (){
return console.log("drag start");
});})(i__33232,todo,c__4521__auto__,size__4522__auto__,b__33233,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
,cljs.core.cst$kw$on_DASH_drag_DASH_enter,((function (i__33232,todo,c__4521__auto__,size__4522__auto__,b__33233,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (p1__33224_SHARP_){
return console.log("drag enter: ",p1__33224_SHARP_);
});})(i__33232,todo,c__4521__auto__,size__4522__auto__,b__33233,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
,cljs.core.cst$kw$on_DASH_drag_DASH_over,((function (i__33232,todo,c__4521__auto__,size__4522__auto__,b__33233,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (p1__33225_SHARP_){
return console.log("drag over: ",p1__33225_SHARP_);
});})(i__33232,todo,c__4521__auto__,size__4522__auto__,b__33233,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
,cljs.core.cst$kw$on_DASH_drag_DASH_leave,((function (i__33232,todo,c__4521__auto__,size__4522__auto__,b__33233,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (p1__33226_SHARP_){
return console.log("drap leave : ",p1__33226_SHARP_);
});})(i__33232,todo,c__4521__auto__,size__4522__auto__,b__33233,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,"36px",cljs.core.cst$kw$color,pomodoro.todo_list.white,cljs.core.cst$kw$border_DASH_bottom,"1px solid #FFF",cljs.core.cst$kw$margin_DASH_top,"8px",cljs.core.cst$kw$font_DASH_size,"16px",cljs.core.cst$kw$weight,"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"radio_button_unchecked"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$vertical_DASH_align,"top",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$margin_DASH_left,"5px"], null)], null),todo], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"10px"], null)], null),"play_circle_outline"], null)], null)], null));

var G__33234 = (i__33232 + (1));
i__33232 = G__33234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__33233),pomodoro$todo_list$collapse_$_iter__33230(cljs.core.chunk_rest(s__33231__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__33233),null);
}
} else {
var todo = cljs.core.first(s__33231__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$key,todo,cljs.core.cst$kw$draggable,true,cljs.core.cst$kw$on_DASH_drag_DASH_start,((function (todo,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (){
return console.log("drag start");
});})(todo,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
,cljs.core.cst$kw$on_DASH_drag_DASH_enter,((function (todo,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (p1__33224_SHARP_){
return console.log("drag enter: ",p1__33224_SHARP_);
});})(todo,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
,cljs.core.cst$kw$on_DASH_drag_DASH_over,((function (todo,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (p1__33225_SHARP_){
return console.log("drag over: ",p1__33225_SHARP_);
});})(todo,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
,cljs.core.cst$kw$on_DASH_drag_DASH_leave,((function (todo,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status){
return (function (p1__33226_SHARP_){
return console.log("drap leave : ",p1__33226_SHARP_);
});})(todo,s__33231__$2,temp__5737__auto__,is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$height,"36px",cljs.core.cst$kw$color,pomodoro.todo_list.white,cljs.core.cst$kw$border_DASH_bottom,"1px solid #FFF",cljs.core.cst$kw$margin_DASH_top,"8px",cljs.core.cst$kw$font_DASH_size,"16px",cljs.core.cst$kw$weight,"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,"radio_button_unchecked"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$vertical_DASH_align,"top",cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$margin_DASH_left,"5px"], null)], null),todo], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i$material_DASH_icons,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$right,"10px"], null)], null),"play_circle_outline"], null)], null)], null),pomodoro$todo_list$collapse_$_iter__33230(cljs.core.rest(s__33231__$2)));
}
} else {
return null;
}
break;
}
});})(is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
,null,null));
});})(is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
;
return iter__4523__auto__(cljs.core.deref(data));
})()], null):null)], null);
});
;})(is_collapse,map__33228,map__33228__$1,title,data,collapse_status))
});
pomodoro.todo_list.middle_part = (function pomodoro$todo_list$middle_part(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$top,"48px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.todo_input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"ADD A NEW MISSION...",cljs.core.cst$kw$on_DASH_stop,(function (){
return console.log("stop");
}),cljs.core.cst$kw$on_DASH_save,(function (p1__33235_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(pomodoro.core.todo_list,cljs.core.conj,p1__33235_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"relative",cljs.core.cst$kw$top,"54px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.collapse,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"TO-DO",cljs.core.cst$kw$data,pomodoro.core.todo_list,cljs.core.cst$kw$collapse_DASH_status,true], null)], null)], null)], null);
});
});
pomodoro.todo_list.todo_list_page = (function pomodoro$todo_list$todo_list_page(){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pomodoro.style.pomodoro_config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"475px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.menu_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_circle], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_middle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"500px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.middle_part], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_right,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"100px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.logo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.exit_to_main], null)], null);
});
});
