// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.analytics');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('pomodoro.style');
goog.require('pomodoro.util');
goog.require('pomodoro.highchart');
goog.require('stylefy.core');
pomodoro.analytics.small_wrap = (function pomodoro$analytics$small_wrap(p__33214){
var map__33215 = p__33214;
var map__33215__$1 = (((((!((map__33215 == null))))?(((((map__33215.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33215.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33215):map__33215);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33215__$1,cljs.core.cst$kw$title);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33215__$1,cljs.core.cst$kw$children);
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33215__$1,cljs.core.cst$kw$top);
return ((function (map__33215,map__33215__$1,title,children,top){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$position,"absolute",cljs.core.cst$kw$cursor,"pointer",cljs.core.cst$kw$top,top], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$font_DASH_size,cljs.core.cst$kw$font_DASH_weight,cljs.core.cst$kw$width,cljs.core.cst$kw$background,cljs.core.cst$kw$weight,cljs.core.cst$kw$padding,cljs.core.cst$kw$height],["#FFFF","top","24px","bold","445px","rgba(255, 255, 255, 0.2)","bold","8px 0 8px 16px","28px"])], null),title], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [children], null)], null)], null);
});
;})(map__33215,map__33215__$1,title,children,top))
});
pomodoro.analytics.tomato_count = (function pomodoro$analytics$tomato_count(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"TODAY"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,"/TOMATO"], null)], null)], null);
});
});
pomodoro.analytics.analytics_panel = (function pomodoro$analytics$analytics_panel(){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$height,"100px",cljs.core.cst$kw$width,"200px",cljs.core.cst$kw$background_DASH_color,"red"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.analytics.tomato_count], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.analytics.tomato_count], null)], null);
});
});
pomodoro.analytics.analytics_page = (function pomodoro$analytics$analytics_page(){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(pomodoro.style.pomodoro_config),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_left,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"475px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$position,"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.menu_list], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.clock_circle], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_middle,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$width,"500px",cljs.core.cst$kw$height,"800px",cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.analytics.small_wrap,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"FOCUS TIME",cljs.core.cst$kw$children,pomodoro.analytics.tomato_count,cljs.core.cst$kw$top,"45px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.analytics.small_wrap,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$title,"CHART",cljs.core.cst$kw$children,pomodoro.highchart.home,cljs.core.cst$kw$top,"245px"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.main.logo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pomodoro.todo_list.exit_to_main], null)], null);
});
});
