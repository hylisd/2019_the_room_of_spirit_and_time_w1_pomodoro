// Compiled by ClojureScript 1.10.520 {}
goog.provide('pomodoro.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('stylefy.core');
goog.require('pomodoro.main');
goog.require('pomodoro.todo_list');
goog.require('pomodoro.analytics');
goog.require('pomodoro.ringtones');
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.todos !== 'undefined')){
} else {
pomodoro.core.todos = reagent.core.atom.call(null,cljs.core.sorted_map.call(null));
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.state !== 'undefined')){
} else {
pomodoro.core.state = reagent.core.atom.call(null,new cljs.core.Keyword(null,"work","work",385770312));
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
pomodoro.core.counter = reagent.core.atom.call(null,pomodoro.core.counter_base);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.start_count !== 'undefined')){
} else {
pomodoro.core.start_count = reagent.core.atom.call(null,false);
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.current_page !== 'undefined')){
} else {
pomodoro.core.current_page = reagent.core.atom.call(null,new cljs.core.Keyword(null,"main","main",-2117802661));
}
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.todo_list !== 'undefined')){
} else {
pomodoro.core.todo_list = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["THE FIRST THING TO DO TODAY","THE SECOOND THINGS TO DO TODAY 2","THE THIRD THING TO DO TODAY 3"], null));
}
pomodoro.core.save = (function pomodoro$core$save(id,title){
return cljs.core.swap_BANG_.call(null,pomodoro.core.todos,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null),title);
});
if((typeof pomodoro !== 'undefined') && (typeof pomodoro.core !== 'undefined') && (typeof pomodoro.core.route !== 'undefined')){
} else {
pomodoro.core.route = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"main","main",-2117802661),pomodoro.main.main_page,new cljs.core.Keyword(null,"todo-list","todo-list",653205378),pomodoro.todo_list.todo_list_page,new cljs.core.Keyword(null,"analytics","analytics",316686129),pomodoro.analytics.analytics_page,new cljs.core.Keyword(null,"ringtones","ringtones",703578463),pomodoro.ringtones.ringtones_page], null);
}
pomodoro.core.render_component_to_app = (function pomodoro$core$render_component_to_app(component){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null),document.getElementById("app"));
});
pomodoro.core.mount_root = (function pomodoro$core$mount_root(){
return pomodoro.core.render_component_to_app.call(null,cljs.core.deref.call(null,pomodoro.core.current_page).call(null,pomodoro.core.route));
});
pomodoro.core.init_router = (function pomodoro$core$init_router(){
return cljs.core.add_watch.call(null,pomodoro.core.current_page,new cljs.core.Keyword(null,"watcher","watcher",2145165251),(function (key,atom,old_state,new_state){
return pomodoro.core.render_component_to_app.call(null,new_state.call(null,pomodoro.core.route));
}));
});
pomodoro.core.init_counter = (function pomodoro$core$init_counter(){
return window.setInterval((function (){
if(cljs.core.not_EQ_.call(null,false,cljs.core.deref.call(null,pomodoro.core.start_count))){
cljs.core.swap_BANG_.call(null,pomodoro.core.counter,cljs.core.dec);

if((cljs.core.deref.call(null,pomodoro.core.counter) < (0))){
return cljs.core.swap_BANG_.call(null,pomodoro.core.start_count,cljs.core.not);
} else {
return null;
}
} else {
return null;
}
}),(1000));
});
pomodoro.core.init_BANG_ = (function pomodoro$core$init_BANG_(){
stylefy.core.init.call(null);

pomodoro.core.init_router.call(null);

pomodoro.core.init_counter.call(null);

return pomodoro.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1563208301961
