// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e43356){if((e43356 instanceof Error)){
var e = e43356;
return "Error: Unable to stringify";
} else {
throw e43356;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43359 = arguments.length;
switch (G__43359) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43357_SHARP_){
if(typeof p1__43357_SHARP_ === 'string'){
return p1__43357_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43357_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43362 = arguments.length;
var i__4731__auto___43363 = (0);
while(true){
if((i__4731__auto___43363 < len__4730__auto___43362)){
args__4736__auto__.push((arguments[i__4731__auto___43363]));

var G__43364 = (i__4731__auto___43363 + (1));
i__4731__auto___43363 = G__43364;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43361){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43361));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43366 = arguments.length;
var i__4731__auto___43367 = (0);
while(true){
if((i__4731__auto___43367 < len__4730__auto___43366)){
args__4736__auto__.push((arguments[i__4731__auto___43367]));

var G__43368 = (i__4731__auto___43367 + (1));
i__4731__auto___43367 = G__43368;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43365){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43365));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43369){
var map__43370 = p__43369;
var map__43370__$1 = (((((!((map__43370 == null))))?(((((map__43370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43370):map__43370);
var message = cljs.core.get.call(null,map__43370__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43370__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__37202__auto___43449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___43449,ch){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___43449,ch){
return (function (state_43421){
var state_val_43422 = (state_43421[(1)]);
if((state_val_43422 === (7))){
var inst_43417 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43423_43450 = state_43421__$1;
(statearr_43423_43450[(2)] = inst_43417);

(statearr_43423_43450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (1))){
var state_43421__$1 = state_43421;
var statearr_43424_43451 = state_43421__$1;
(statearr_43424_43451[(2)] = null);

(statearr_43424_43451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (4))){
var inst_43374 = (state_43421[(7)]);
var inst_43374__$1 = (state_43421[(2)]);
var state_43421__$1 = (function (){var statearr_43425 = state_43421;
(statearr_43425[(7)] = inst_43374__$1);

return statearr_43425;
})();
if(cljs.core.truth_(inst_43374__$1)){
var statearr_43426_43452 = state_43421__$1;
(statearr_43426_43452[(1)] = (5));

} else {
var statearr_43427_43453 = state_43421__$1;
(statearr_43427_43453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (15))){
var inst_43381 = (state_43421[(8)]);
var inst_43396 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43381);
var inst_43397 = cljs.core.first.call(null,inst_43396);
var inst_43398 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43397);
var inst_43399 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43398)].join('');
var inst_43400 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43399);
var state_43421__$1 = state_43421;
var statearr_43428_43454 = state_43421__$1;
(statearr_43428_43454[(2)] = inst_43400);

(statearr_43428_43454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (13))){
var inst_43405 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43429_43455 = state_43421__$1;
(statearr_43429_43455[(2)] = inst_43405);

(statearr_43429_43455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (6))){
var state_43421__$1 = state_43421;
var statearr_43430_43456 = state_43421__$1;
(statearr_43430_43456[(2)] = null);

(statearr_43430_43456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (17))){
var inst_43403 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43431_43457 = state_43421__$1;
(statearr_43431_43457[(2)] = inst_43403);

(statearr_43431_43457[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (3))){
var inst_43419 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43421__$1,inst_43419);
} else {
if((state_val_43422 === (12))){
var inst_43380 = (state_43421[(9)]);
var inst_43394 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43380,opts);
var state_43421__$1 = state_43421;
if(inst_43394){
var statearr_43432_43458 = state_43421__$1;
(statearr_43432_43458[(1)] = (15));

} else {
var statearr_43433_43459 = state_43421__$1;
(statearr_43433_43459[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (2))){
var state_43421__$1 = state_43421;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43421__$1,(4),ch);
} else {
if((state_val_43422 === (11))){
var inst_43381 = (state_43421[(8)]);
var inst_43386 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43387 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43381);
var inst_43388 = cljs.core.async.timeout.call(null,(1000));
var inst_43389 = [inst_43387,inst_43388];
var inst_43390 = (new cljs.core.PersistentVector(null,2,(5),inst_43386,inst_43389,null));
var state_43421__$1 = state_43421;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43421__$1,(14),inst_43390);
} else {
if((state_val_43422 === (9))){
var inst_43381 = (state_43421[(8)]);
var inst_43407 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43408 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43381);
var inst_43409 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43408);
var inst_43410 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43409)].join('');
var inst_43411 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43410);
var state_43421__$1 = (function (){var statearr_43434 = state_43421;
(statearr_43434[(10)] = inst_43407);

return statearr_43434;
})();
var statearr_43435_43460 = state_43421__$1;
(statearr_43435_43460[(2)] = inst_43411);

(statearr_43435_43460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (5))){
var inst_43374 = (state_43421[(7)]);
var inst_43376 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43377 = (new cljs.core.PersistentArrayMap(null,2,inst_43376,null));
var inst_43378 = (new cljs.core.PersistentHashSet(null,inst_43377,null));
var inst_43379 = figwheel.client.focus_msgs.call(null,inst_43378,inst_43374);
var inst_43380 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43379);
var inst_43381 = cljs.core.first.call(null,inst_43379);
var inst_43382 = figwheel.client.autoload_QMARK_.call(null);
var state_43421__$1 = (function (){var statearr_43436 = state_43421;
(statearr_43436[(9)] = inst_43380);

(statearr_43436[(8)] = inst_43381);

return statearr_43436;
})();
if(cljs.core.truth_(inst_43382)){
var statearr_43437_43461 = state_43421__$1;
(statearr_43437_43461[(1)] = (8));

} else {
var statearr_43438_43462 = state_43421__$1;
(statearr_43438_43462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (14))){
var inst_43392 = (state_43421[(2)]);
var state_43421__$1 = state_43421;
var statearr_43439_43463 = state_43421__$1;
(statearr_43439_43463[(2)] = inst_43392);

(statearr_43439_43463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (16))){
var state_43421__$1 = state_43421;
var statearr_43440_43464 = state_43421__$1;
(statearr_43440_43464[(2)] = null);

(statearr_43440_43464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (10))){
var inst_43413 = (state_43421[(2)]);
var state_43421__$1 = (function (){var statearr_43441 = state_43421;
(statearr_43441[(11)] = inst_43413);

return statearr_43441;
})();
var statearr_43442_43465 = state_43421__$1;
(statearr_43442_43465[(2)] = null);

(statearr_43442_43465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43422 === (8))){
var inst_43380 = (state_43421[(9)]);
var inst_43384 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43380,opts);
var state_43421__$1 = state_43421;
if(cljs.core.truth_(inst_43384)){
var statearr_43443_43466 = state_43421__$1;
(statearr_43443_43466[(1)] = (11));

} else {
var statearr_43444_43467 = state_43421__$1;
(statearr_43444_43467[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37202__auto___43449,ch))
;
return ((function (switch__37035__auto__,c__37202__auto___43449,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37036__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37036__auto____0 = (function (){
var statearr_43445 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43445[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37036__auto__);

(statearr_43445[(1)] = (1));

return statearr_43445;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37036__auto____1 = (function (state_43421){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_43421);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e43446){if((e43446 instanceof Object)){
var ex__37039__auto__ = e43446;
var statearr_43447_43468 = state_43421;
(statearr_43447_43468[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43421);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43469 = state_43421;
state_43421 = G__43469;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37036__auto__ = function(state_43421){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37036__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37036__auto____1.call(this,state_43421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37036__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37036__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___43449,ch))
})();
var state__37204__auto__ = (function (){var statearr_43448 = f__37203__auto__.call(null);
(statearr_43448[(6)] = c__37202__auto___43449);

return statearr_43448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___43449,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43470_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43470_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43476 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43476){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43472 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43473 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43474 = true;
var _STAR_print_fn_STAR__temp_val__43475 = ((function (_STAR_print_newline_STAR__orig_val__43472,_STAR_print_fn_STAR__orig_val__43473,_STAR_print_newline_STAR__temp_val__43474,sb,base_path_43476){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__43472,_STAR_print_fn_STAR__orig_val__43473,_STAR_print_newline_STAR__temp_val__43474,sb,base_path_43476))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43474;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43475;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43473;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43472;
}}catch (e43471){if((e43471 instanceof Error)){
var e = e43471;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43476], null));
} else {
var e = e43471;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43476))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43477){
var map__43478 = p__43477;
var map__43478__$1 = (((((!((map__43478 == null))))?(((((map__43478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43478):map__43478);
var opts = map__43478__$1;
var build_id = cljs.core.get.call(null,map__43478__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43478,map__43478__$1,opts,build_id){
return (function (p__43480){
var vec__43481 = p__43480;
var seq__43482 = cljs.core.seq.call(null,vec__43481);
var first__43483 = cljs.core.first.call(null,seq__43482);
var seq__43482__$1 = cljs.core.next.call(null,seq__43482);
var map__43484 = first__43483;
var map__43484__$1 = (((((!((map__43484 == null))))?(((((map__43484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43484):map__43484);
var msg = map__43484__$1;
var msg_name = cljs.core.get.call(null,map__43484__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43482__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43481,seq__43482,first__43483,seq__43482__$1,map__43484,map__43484__$1,msg,msg_name,_,map__43478,map__43478__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43481,seq__43482,first__43483,seq__43482__$1,map__43484,map__43484__$1,msg,msg_name,_,map__43478,map__43478__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43478,map__43478__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43486){
var vec__43487 = p__43486;
var seq__43488 = cljs.core.seq.call(null,vec__43487);
var first__43489 = cljs.core.first.call(null,seq__43488);
var seq__43488__$1 = cljs.core.next.call(null,seq__43488);
var map__43490 = first__43489;
var map__43490__$1 = (((((!((map__43490 == null))))?(((((map__43490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43490):map__43490);
var msg = map__43490__$1;
var msg_name = cljs.core.get.call(null,map__43490__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43488__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43492){
var map__43493 = p__43492;
var map__43493__$1 = (((((!((map__43493 == null))))?(((((map__43493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43493):map__43493);
var on_compile_warning = cljs.core.get.call(null,map__43493__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43493__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43493,map__43493__$1,on_compile_warning,on_compile_fail){
return (function (p__43495){
var vec__43496 = p__43495;
var seq__43497 = cljs.core.seq.call(null,vec__43496);
var first__43498 = cljs.core.first.call(null,seq__43497);
var seq__43497__$1 = cljs.core.next.call(null,seq__43497);
var map__43499 = first__43498;
var map__43499__$1 = (((((!((map__43499 == null))))?(((((map__43499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43499):map__43499);
var msg = map__43499__$1;
var msg_name = cljs.core.get.call(null,map__43499__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43497__$1;
var pred__43501 = cljs.core._EQ_;
var expr__43502 = msg_name;
if(cljs.core.truth_(pred__43501.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43502))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43501.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43502))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43493,map__43493__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__,msg_hist,msg_names,msg){
return (function (state_43591){
var state_val_43592 = (state_43591[(1)]);
if((state_val_43592 === (7))){
var inst_43511 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
if(cljs.core.truth_(inst_43511)){
var statearr_43593_43640 = state_43591__$1;
(statearr_43593_43640[(1)] = (8));

} else {
var statearr_43594_43641 = state_43591__$1;
(statearr_43594_43641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (20))){
var inst_43585 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43595_43642 = state_43591__$1;
(statearr_43595_43642[(2)] = inst_43585);

(statearr_43595_43642[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (27))){
var inst_43581 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43596_43643 = state_43591__$1;
(statearr_43596_43643[(2)] = inst_43581);

(statearr_43596_43643[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (1))){
var inst_43504 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43591__$1 = state_43591;
if(cljs.core.truth_(inst_43504)){
var statearr_43597_43644 = state_43591__$1;
(statearr_43597_43644[(1)] = (2));

} else {
var statearr_43598_43645 = state_43591__$1;
(statearr_43598_43645[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (24))){
var inst_43583 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43599_43646 = state_43591__$1;
(statearr_43599_43646[(2)] = inst_43583);

(statearr_43599_43646[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (4))){
var inst_43589 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43591__$1,inst_43589);
} else {
if((state_val_43592 === (15))){
var inst_43587 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43600_43647 = state_43591__$1;
(statearr_43600_43647[(2)] = inst_43587);

(statearr_43600_43647[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (21))){
var inst_43540 = (state_43591[(2)]);
var inst_43541 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43542 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43541);
var state_43591__$1 = (function (){var statearr_43601 = state_43591;
(statearr_43601[(7)] = inst_43540);

return statearr_43601;
})();
var statearr_43602_43648 = state_43591__$1;
(statearr_43602_43648[(2)] = inst_43542);

(statearr_43602_43648[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (31))){
var inst_43570 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43591__$1 = state_43591;
if(inst_43570){
var statearr_43603_43649 = state_43591__$1;
(statearr_43603_43649[(1)] = (34));

} else {
var statearr_43604_43650 = state_43591__$1;
(statearr_43604_43650[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (32))){
var inst_43579 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43605_43651 = state_43591__$1;
(statearr_43605_43651[(2)] = inst_43579);

(statearr_43605_43651[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (33))){
var inst_43566 = (state_43591[(2)]);
var inst_43567 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43568 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43567);
var state_43591__$1 = (function (){var statearr_43606 = state_43591;
(statearr_43606[(8)] = inst_43566);

return statearr_43606;
})();
var statearr_43607_43652 = state_43591__$1;
(statearr_43607_43652[(2)] = inst_43568);

(statearr_43607_43652[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (13))){
var inst_43525 = figwheel.client.heads_up.clear.call(null);
var state_43591__$1 = state_43591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(16),inst_43525);
} else {
if((state_val_43592 === (22))){
var inst_43546 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43547 = figwheel.client.heads_up.append_warning_message.call(null,inst_43546);
var state_43591__$1 = state_43591;
var statearr_43608_43653 = state_43591__$1;
(statearr_43608_43653[(2)] = inst_43547);

(statearr_43608_43653[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (36))){
var inst_43577 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43609_43654 = state_43591__$1;
(statearr_43609_43654[(2)] = inst_43577);

(statearr_43609_43654[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (29))){
var inst_43557 = (state_43591[(2)]);
var inst_43558 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43559 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43558);
var state_43591__$1 = (function (){var statearr_43610 = state_43591;
(statearr_43610[(9)] = inst_43557);

return statearr_43610;
})();
var statearr_43611_43655 = state_43591__$1;
(statearr_43611_43655[(2)] = inst_43559);

(statearr_43611_43655[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (6))){
var inst_43506 = (state_43591[(10)]);
var state_43591__$1 = state_43591;
var statearr_43612_43656 = state_43591__$1;
(statearr_43612_43656[(2)] = inst_43506);

(statearr_43612_43656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (28))){
var inst_43553 = (state_43591[(2)]);
var inst_43554 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43555 = figwheel.client.heads_up.display_warning.call(null,inst_43554);
var state_43591__$1 = (function (){var statearr_43613 = state_43591;
(statearr_43613[(11)] = inst_43553);

return statearr_43613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(29),inst_43555);
} else {
if((state_val_43592 === (25))){
var inst_43551 = figwheel.client.heads_up.clear.call(null);
var state_43591__$1 = state_43591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(28),inst_43551);
} else {
if((state_val_43592 === (34))){
var inst_43572 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43591__$1 = state_43591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(37),inst_43572);
} else {
if((state_val_43592 === (17))){
var inst_43531 = (state_43591[(2)]);
var inst_43532 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43533 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43532);
var state_43591__$1 = (function (){var statearr_43614 = state_43591;
(statearr_43614[(12)] = inst_43531);

return statearr_43614;
})();
var statearr_43615_43657 = state_43591__$1;
(statearr_43615_43657[(2)] = inst_43533);

(statearr_43615_43657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (3))){
var inst_43523 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43591__$1 = state_43591;
if(inst_43523){
var statearr_43616_43658 = state_43591__$1;
(statearr_43616_43658[(1)] = (13));

} else {
var statearr_43617_43659 = state_43591__$1;
(statearr_43617_43659[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (12))){
var inst_43519 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43618_43660 = state_43591__$1;
(statearr_43618_43660[(2)] = inst_43519);

(statearr_43618_43660[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (2))){
var inst_43506 = (state_43591[(10)]);
var inst_43506__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43591__$1 = (function (){var statearr_43619 = state_43591;
(statearr_43619[(10)] = inst_43506__$1);

return statearr_43619;
})();
if(cljs.core.truth_(inst_43506__$1)){
var statearr_43620_43661 = state_43591__$1;
(statearr_43620_43661[(1)] = (5));

} else {
var statearr_43621_43662 = state_43591__$1;
(statearr_43621_43662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (23))){
var inst_43549 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43591__$1 = state_43591;
if(inst_43549){
var statearr_43622_43663 = state_43591__$1;
(statearr_43622_43663[(1)] = (25));

} else {
var statearr_43623_43664 = state_43591__$1;
(statearr_43623_43664[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (35))){
var state_43591__$1 = state_43591;
var statearr_43624_43665 = state_43591__$1;
(statearr_43624_43665[(2)] = null);

(statearr_43624_43665[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (19))){
var inst_43544 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43591__$1 = state_43591;
if(inst_43544){
var statearr_43625_43666 = state_43591__$1;
(statearr_43625_43666[(1)] = (22));

} else {
var statearr_43626_43667 = state_43591__$1;
(statearr_43626_43667[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (11))){
var inst_43515 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43627_43668 = state_43591__$1;
(statearr_43627_43668[(2)] = inst_43515);

(statearr_43627_43668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (9))){
var inst_43517 = figwheel.client.heads_up.clear.call(null);
var state_43591__$1 = state_43591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(12),inst_43517);
} else {
if((state_val_43592 === (5))){
var inst_43508 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43591__$1 = state_43591;
var statearr_43628_43669 = state_43591__$1;
(statearr_43628_43669[(2)] = inst_43508);

(statearr_43628_43669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (14))){
var inst_43535 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43591__$1 = state_43591;
if(inst_43535){
var statearr_43629_43670 = state_43591__$1;
(statearr_43629_43670[(1)] = (18));

} else {
var statearr_43630_43671 = state_43591__$1;
(statearr_43630_43671[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (26))){
var inst_43561 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43591__$1 = state_43591;
if(inst_43561){
var statearr_43631_43672 = state_43591__$1;
(statearr_43631_43672[(1)] = (30));

} else {
var statearr_43632_43673 = state_43591__$1;
(statearr_43632_43673[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (16))){
var inst_43527 = (state_43591[(2)]);
var inst_43528 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43529 = figwheel.client.heads_up.display_exception.call(null,inst_43528);
var state_43591__$1 = (function (){var statearr_43633 = state_43591;
(statearr_43633[(13)] = inst_43527);

return statearr_43633;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(17),inst_43529);
} else {
if((state_val_43592 === (30))){
var inst_43563 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43564 = figwheel.client.heads_up.display_warning.call(null,inst_43563);
var state_43591__$1 = state_43591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(33),inst_43564);
} else {
if((state_val_43592 === (10))){
var inst_43521 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43634_43674 = state_43591__$1;
(statearr_43634_43674[(2)] = inst_43521);

(statearr_43634_43674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (18))){
var inst_43537 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43538 = figwheel.client.heads_up.display_exception.call(null,inst_43537);
var state_43591__$1 = state_43591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(21),inst_43538);
} else {
if((state_val_43592 === (37))){
var inst_43574 = (state_43591[(2)]);
var state_43591__$1 = state_43591;
var statearr_43635_43675 = state_43591__$1;
(statearr_43635_43675[(2)] = inst_43574);

(statearr_43635_43675[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43592 === (8))){
var inst_43513 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43591__$1 = state_43591;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43591__$1,(11),inst_43513);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37202__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37035__auto__,c__37202__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto____0 = (function (){
var statearr_43636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43636[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto__);

(statearr_43636[(1)] = (1));

return statearr_43636;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto____1 = (function (state_43591){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_43591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e43637){if((e43637 instanceof Object)){
var ex__37039__auto__ = e43637;
var statearr_43638_43676 = state_43591;
(statearr_43638_43676[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43677 = state_43591;
state_43591 = G__43677;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto__ = function(state_43591){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto____1.call(this,state_43591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__,msg_hist,msg_names,msg))
})();
var state__37204__auto__ = (function (){var statearr_43639 = f__37203__auto__.call(null);
(statearr_43639[(6)] = c__37202__auto__);

return statearr_43639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__,msg_hist,msg_names,msg))
);

return c__37202__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37202__auto___43706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___43706,ch){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___43706,ch){
return (function (state_43692){
var state_val_43693 = (state_43692[(1)]);
if((state_val_43693 === (1))){
var state_43692__$1 = state_43692;
var statearr_43694_43707 = state_43692__$1;
(statearr_43694_43707[(2)] = null);

(statearr_43694_43707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43693 === (2))){
var state_43692__$1 = state_43692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43692__$1,(4),ch);
} else {
if((state_val_43693 === (3))){
var inst_43690 = (state_43692[(2)]);
var state_43692__$1 = state_43692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43692__$1,inst_43690);
} else {
if((state_val_43693 === (4))){
var inst_43680 = (state_43692[(7)]);
var inst_43680__$1 = (state_43692[(2)]);
var state_43692__$1 = (function (){var statearr_43695 = state_43692;
(statearr_43695[(7)] = inst_43680__$1);

return statearr_43695;
})();
if(cljs.core.truth_(inst_43680__$1)){
var statearr_43696_43708 = state_43692__$1;
(statearr_43696_43708[(1)] = (5));

} else {
var statearr_43697_43709 = state_43692__$1;
(statearr_43697_43709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43693 === (5))){
var inst_43680 = (state_43692[(7)]);
var inst_43682 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43680);
var state_43692__$1 = state_43692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43692__$1,(8),inst_43682);
} else {
if((state_val_43693 === (6))){
var state_43692__$1 = state_43692;
var statearr_43698_43710 = state_43692__$1;
(statearr_43698_43710[(2)] = null);

(statearr_43698_43710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43693 === (7))){
var inst_43688 = (state_43692[(2)]);
var state_43692__$1 = state_43692;
var statearr_43699_43711 = state_43692__$1;
(statearr_43699_43711[(2)] = inst_43688);

(statearr_43699_43711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43693 === (8))){
var inst_43684 = (state_43692[(2)]);
var state_43692__$1 = (function (){var statearr_43700 = state_43692;
(statearr_43700[(8)] = inst_43684);

return statearr_43700;
})();
var statearr_43701_43712 = state_43692__$1;
(statearr_43701_43712[(2)] = null);

(statearr_43701_43712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__37202__auto___43706,ch))
;
return ((function (switch__37035__auto__,c__37202__auto___43706,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37036__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37036__auto____0 = (function (){
var statearr_43702 = [null,null,null,null,null,null,null,null,null];
(statearr_43702[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37036__auto__);

(statearr_43702[(1)] = (1));

return statearr_43702;
});
var figwheel$client$heads_up_plugin_$_state_machine__37036__auto____1 = (function (state_43692){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_43692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e43703){if((e43703 instanceof Object)){
var ex__37039__auto__ = e43703;
var statearr_43704_43713 = state_43692;
(statearr_43704_43713[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43714 = state_43692;
state_43692 = G__43714;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37036__auto__ = function(state_43692){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37036__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37036__auto____1.call(this,state_43692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37036__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37036__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___43706,ch))
})();
var state__37204__auto__ = (function (){var statearr_43705 = f__37203__auto__.call(null);
(statearr_43705[(6)] = c__37202__auto___43706);

return statearr_43705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___43706,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__){
return (function (state_43720){
var state_val_43721 = (state_43720[(1)]);
if((state_val_43721 === (1))){
var inst_43715 = cljs.core.async.timeout.call(null,(3000));
var state_43720__$1 = state_43720;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43720__$1,(2),inst_43715);
} else {
if((state_val_43721 === (2))){
var inst_43717 = (state_43720[(2)]);
var inst_43718 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43720__$1 = (function (){var statearr_43722 = state_43720;
(statearr_43722[(7)] = inst_43717);

return statearr_43722;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43720__$1,inst_43718);
} else {
return null;
}
}
});})(c__37202__auto__))
;
return ((function (switch__37035__auto__,c__37202__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37036__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37036__auto____0 = (function (){
var statearr_43723 = [null,null,null,null,null,null,null,null];
(statearr_43723[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37036__auto__);

(statearr_43723[(1)] = (1));

return statearr_43723;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37036__auto____1 = (function (state_43720){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_43720);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e43724){if((e43724 instanceof Object)){
var ex__37039__auto__ = e43724;
var statearr_43725_43727 = state_43720;
(statearr_43725_43727[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43720);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43728 = state_43720;
state_43720 = G__43728;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37036__auto__ = function(state_43720){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37036__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37036__auto____1.call(this,state_43720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37036__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37036__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__))
})();
var state__37204__auto__ = (function (){var statearr_43726 = f__37203__auto__.call(null);
(statearr_43726[(6)] = c__37202__auto__);

return statearr_43726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__))
);

return c__37202__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__,figwheel_version,temp__5735__auto__){
return (function (state_43735){
var state_val_43736 = (state_43735[(1)]);
if((state_val_43736 === (1))){
var inst_43729 = cljs.core.async.timeout.call(null,(2000));
var state_43735__$1 = state_43735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43735__$1,(2),inst_43729);
} else {
if((state_val_43736 === (2))){
var inst_43731 = (state_43735[(2)]);
var inst_43732 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_43733 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43732);
var state_43735__$1 = (function (){var statearr_43737 = state_43735;
(statearr_43737[(7)] = inst_43731);

return statearr_43737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43735__$1,inst_43733);
} else {
return null;
}
}
});})(c__37202__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__37035__auto__,c__37202__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto____0 = (function (){
var statearr_43738 = [null,null,null,null,null,null,null,null];
(statearr_43738[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto__);

(statearr_43738[(1)] = (1));

return statearr_43738;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto____1 = (function (state_43735){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_43735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e43739){if((e43739 instanceof Object)){
var ex__37039__auto__ = e43739;
var statearr_43740_43742 = state_43735;
(statearr_43740_43742[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43739;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43743 = state_43735;
state_43735 = G__43743;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto__ = function(state_43735){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto____1.call(this,state_43735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__,figwheel_version,temp__5735__auto__))
})();
var state__37204__auto__ = (function (){var statearr_43741 = f__37203__auto__.call(null);
(statearr_43741[(6)] = c__37202__auto__);

return statearr_43741;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__,figwheel_version,temp__5735__auto__))
);

return c__37202__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__43744){
var map__43745 = p__43744;
var map__43745__$1 = (((((!((map__43745 == null))))?(((((map__43745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43745):map__43745);
var file = cljs.core.get.call(null,map__43745__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__43745__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__43745__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__43747 = "";
var G__43747__$1 = (cljs.core.truth_(file)?[G__43747,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__43747);
var G__43747__$2 = (cljs.core.truth_(line)?[G__43747__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__43747__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__43747__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__43747__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43748){
var map__43749 = p__43748;
var map__43749__$1 = (((((!((map__43749 == null))))?(((((map__43749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43749):map__43749);
var ed = map__43749__$1;
var exception_data = cljs.core.get.call(null,map__43749__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43749__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_43752 = (function (){var G__43751 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43751)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__43751;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_43752);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43753){
var map__43754 = p__43753;
var map__43754__$1 = (((((!((map__43754 == null))))?(((((map__43754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43754):map__43754);
var w = map__43754__$1;
var message = cljs.core.get.call(null,map__43754__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__43756 = cljs.core.seq.call(null,plugins);
var chunk__43757 = null;
var count__43758 = (0);
var i__43759 = (0);
while(true){
if((i__43759 < count__43758)){
var vec__43766 = cljs.core._nth.call(null,chunk__43757,i__43759);
var k = cljs.core.nth.call(null,vec__43766,(0),null);
var plugin = cljs.core.nth.call(null,vec__43766,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43772 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43756,chunk__43757,count__43758,i__43759,pl_43772,vec__43766,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43772.call(null,msg_hist);
});})(seq__43756,chunk__43757,count__43758,i__43759,pl_43772,vec__43766,k,plugin))
);
} else {
}


var G__43773 = seq__43756;
var G__43774 = chunk__43757;
var G__43775 = count__43758;
var G__43776 = (i__43759 + (1));
seq__43756 = G__43773;
chunk__43757 = G__43774;
count__43758 = G__43775;
i__43759 = G__43776;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__43756);
if(temp__5735__auto__){
var seq__43756__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43756__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__43756__$1);
var G__43777 = cljs.core.chunk_rest.call(null,seq__43756__$1);
var G__43778 = c__4550__auto__;
var G__43779 = cljs.core.count.call(null,c__4550__auto__);
var G__43780 = (0);
seq__43756 = G__43777;
chunk__43757 = G__43778;
count__43758 = G__43779;
i__43759 = G__43780;
continue;
} else {
var vec__43769 = cljs.core.first.call(null,seq__43756__$1);
var k = cljs.core.nth.call(null,vec__43769,(0),null);
var plugin = cljs.core.nth.call(null,vec__43769,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43781 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43756,chunk__43757,count__43758,i__43759,pl_43781,vec__43769,k,plugin,seq__43756__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43781.call(null,msg_hist);
});})(seq__43756,chunk__43757,count__43758,i__43759,pl_43781,vec__43769,k,plugin,seq__43756__$1,temp__5735__auto__))
);
} else {
}


var G__43782 = cljs.core.next.call(null,seq__43756__$1);
var G__43783 = null;
var G__43784 = (0);
var G__43785 = (0);
seq__43756 = G__43782;
chunk__43757 = G__43783;
count__43758 = G__43784;
i__43759 = G__43785;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__43787 = arguments.length;
switch (G__43787) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__43788_43793 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__43789_43794 = null;
var count__43790_43795 = (0);
var i__43791_43796 = (0);
while(true){
if((i__43791_43796 < count__43790_43795)){
var msg_43797 = cljs.core._nth.call(null,chunk__43789_43794,i__43791_43796);
figwheel.client.socket.handle_incoming_message.call(null,msg_43797);


var G__43798 = seq__43788_43793;
var G__43799 = chunk__43789_43794;
var G__43800 = count__43790_43795;
var G__43801 = (i__43791_43796 + (1));
seq__43788_43793 = G__43798;
chunk__43789_43794 = G__43799;
count__43790_43795 = G__43800;
i__43791_43796 = G__43801;
continue;
} else {
var temp__5735__auto___43802 = cljs.core.seq.call(null,seq__43788_43793);
if(temp__5735__auto___43802){
var seq__43788_43803__$1 = temp__5735__auto___43802;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43788_43803__$1)){
var c__4550__auto___43804 = cljs.core.chunk_first.call(null,seq__43788_43803__$1);
var G__43805 = cljs.core.chunk_rest.call(null,seq__43788_43803__$1);
var G__43806 = c__4550__auto___43804;
var G__43807 = cljs.core.count.call(null,c__4550__auto___43804);
var G__43808 = (0);
seq__43788_43793 = G__43805;
chunk__43789_43794 = G__43806;
count__43790_43795 = G__43807;
i__43791_43796 = G__43808;
continue;
} else {
var msg_43809 = cljs.core.first.call(null,seq__43788_43803__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43809);


var G__43810 = cljs.core.next.call(null,seq__43788_43803__$1);
var G__43811 = null;
var G__43812 = (0);
var G__43813 = (0);
seq__43788_43793 = G__43810;
chunk__43789_43794 = G__43811;
count__43790_43795 = G__43812;
i__43791_43796 = G__43813;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43818 = arguments.length;
var i__4731__auto___43819 = (0);
while(true){
if((i__4731__auto___43819 < len__4730__auto___43818)){
args__4736__auto__.push((arguments[i__4731__auto___43819]));

var G__43820 = (i__4731__auto___43819 + (1));
i__4731__auto___43819 = G__43820;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43815){
var map__43816 = p__43815;
var map__43816__$1 = (((((!((map__43816 == null))))?(((((map__43816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43816):map__43816);
var opts = map__43816__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43814){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43814));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43821){if((e43821 instanceof Error)){
var e = e43821;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43821;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__43822){
var map__43823 = p__43822;
var map__43823__$1 = (((((!((map__43823 == null))))?(((((map__43823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43823):map__43823);
var msg_name = cljs.core.get.call(null,map__43823__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1562998443005
