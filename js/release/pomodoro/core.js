// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('pomodoro.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('pomodoro.main');
goog.require('pomodoro.todo_list');
goog.require('pomodoro.analytics');
goog.require('pomodoro.ringtones');
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.todos !== 'undefined')){
} else {
pomodoro.core.todos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.state !== 'undefined')){
} else {
pomodoro.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$work);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.counter_base !== 'undefined')){
} else {
pomodoro.core.counter_base = (1500);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.break_counter_base !== 'undefined')){
} else {
pomodoro.core.break_counter_base = (300);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.counter !== 'undefined')){
} else {
pomodoro.core.counter = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(pomodoro.core.counter_base);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.start_count !== 'undefined')){
} else {
pomodoro.core.start_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.current_page !== 'undefined')){
} else {
pomodoro.core.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$main);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.todo_list !== 'undefined')){
} else {
pomodoro.core.todo_list = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["THE FIRST THING TO DO TODAY","THE SECOOND THINGS TO DO TODAY 2","THE THIRD THING TO DO TODAY 3"], null));
}
pomodoro.core.save = (function pomodoro$core$save(id,title){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(pomodoro.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.cst$kw$title], null),title);
});
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.route !== 'undefined')){
} else {
pomodoro.core.route = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$main,pomodoro.main.main_page,cljs.core.cst$kw$todo_DASH_list,pomodoro.todo_list.todo_list_page,cljs.core.cst$kw$analytics,pomodoro.analytics.analytics_page,cljs.core.cst$kw$ringtones,pomodoro.ringtones.ringtones_page], null);
}
pomodoro.core.render_component_to_app = (function pomodoro$core$render_component_to_app(component){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null),document.getElementById("app"));
});
pomodoro.core.mount_root = (function pomodoro$core$mount_root(){
return pomodoro.core.render_component_to_app((function (){var fexpr__33232 = cljs.core.deref(pomodoro.core.current_page);
return (fexpr__33232.cljs$core$IFn$_invoke$arity$1 ? fexpr__33232.cljs$core$IFn$_invoke$arity$1(pomodoro.core.route) : fexpr__33232.call(null,pomodoro.core.route));
})());
});
pomodoro.core.init_router = (function pomodoro$core$init_router(){
return cljs.core.add_watch(pomodoro.core.current_page,cljs.core.cst$kw$watcher,(function (key,atom,old_state,new_state){
return pomodoro.core.render_component_to_app((new_state.cljs$core$IFn$_invoke$arity$1 ? new_state.cljs$core$IFn$_invoke$arity$1(pomodoro.core.route) : new_state.call(null,pomodoro.core.route)));
}));
});
pomodoro.core.init_counter = (function pomodoro$core$init_counter(){
return window.setInterval((function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(false,cljs.core.deref(pomodoro.core.start_count))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pomodoro.core.counter,cljs.core.dec);

if((cljs.core.deref(pomodoro.core.counter) < (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(pomodoro.core.start_count,cljs.core.not);
} else {
return null;
}
} else {
return null;
}
}),(1000));
});
pomodoro.core.init_BANG_ = (function pomodoro$core$init_BANG_(){
stylefy.core.init.cljs$core$IFn$_invoke$arity$0();

pomodoro.core.init_router();

pomodoro.core.init_counter();

return pomodoro.core.mount_root();
});
