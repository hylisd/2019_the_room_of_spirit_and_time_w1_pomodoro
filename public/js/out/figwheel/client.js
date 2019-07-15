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
}catch (e48567){if((e48567 instanceof Error)){
var e = e48567;
return "Error: Unable to stringify";
} else {
throw e48567;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__48570 = arguments.length;
switch (G__48570) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__48568_SHARP_){
if(typeof p1__48568_SHARP_ === 'string'){
return p1__48568_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__48568_SHARP_);
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
var len__4730__auto___48573 = arguments.length;
var i__4731__auto___48574 = (0);
while(true){
if((i__4731__auto___48574 < len__4730__auto___48573)){
args__4736__auto__.push((arguments[i__4731__auto___48574]));

var G__48575 = (i__4731__auto___48574 + (1));
i__4731__auto___48574 = G__48575;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48572){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48572));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___48577 = arguments.length;
var i__4731__auto___48578 = (0);
while(true){
if((i__4731__auto___48578 < len__4730__auto___48577)){
args__4736__auto__.push((arguments[i__4731__auto___48578]));

var G__48579 = (i__4731__auto___48578 + (1));
i__4731__auto___48578 = G__48579;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48576){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48576));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48580){
var map__48581 = p__48580;
var map__48581__$1 = (((((!((map__48581 == null))))?(((((map__48581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48581):map__48581);
var message = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48581__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__38256__auto___48660 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___48660,ch){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___48660,ch){
return (function (state_48632){
var state_val_48633 = (state_48632[(1)]);
if((state_val_48633 === (7))){
var inst_48628 = (state_48632[(2)]);
var state_48632__$1 = state_48632;
var statearr_48634_48661 = state_48632__$1;
(statearr_48634_48661[(2)] = inst_48628);

(statearr_48634_48661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (1))){
var state_48632__$1 = state_48632;
var statearr_48635_48662 = state_48632__$1;
(statearr_48635_48662[(2)] = null);

(statearr_48635_48662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (4))){
var inst_48585 = (state_48632[(7)]);
var inst_48585__$1 = (state_48632[(2)]);
var state_48632__$1 = (function (){var statearr_48636 = state_48632;
(statearr_48636[(7)] = inst_48585__$1);

return statearr_48636;
})();
if(cljs.core.truth_(inst_48585__$1)){
var statearr_48637_48663 = state_48632__$1;
(statearr_48637_48663[(1)] = (5));

} else {
var statearr_48638_48664 = state_48632__$1;
(statearr_48638_48664[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (15))){
var inst_48592 = (state_48632[(8)]);
var inst_48607 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48592);
var inst_48608 = cljs.core.first.call(null,inst_48607);
var inst_48609 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48608);
var inst_48610 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48609)].join('');
var inst_48611 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48610);
var state_48632__$1 = state_48632;
var statearr_48639_48665 = state_48632__$1;
(statearr_48639_48665[(2)] = inst_48611);

(statearr_48639_48665[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (13))){
var inst_48616 = (state_48632[(2)]);
var state_48632__$1 = state_48632;
var statearr_48640_48666 = state_48632__$1;
(statearr_48640_48666[(2)] = inst_48616);

(statearr_48640_48666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (6))){
var state_48632__$1 = state_48632;
var statearr_48641_48667 = state_48632__$1;
(statearr_48641_48667[(2)] = null);

(statearr_48641_48667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (17))){
var inst_48614 = (state_48632[(2)]);
var state_48632__$1 = state_48632;
var statearr_48642_48668 = state_48632__$1;
(statearr_48642_48668[(2)] = inst_48614);

(statearr_48642_48668[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (3))){
var inst_48630 = (state_48632[(2)]);
var state_48632__$1 = state_48632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48632__$1,inst_48630);
} else {
if((state_val_48633 === (12))){
var inst_48591 = (state_48632[(9)]);
var inst_48605 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48591,opts);
var state_48632__$1 = state_48632;
if(inst_48605){
var statearr_48643_48669 = state_48632__$1;
(statearr_48643_48669[(1)] = (15));

} else {
var statearr_48644_48670 = state_48632__$1;
(statearr_48644_48670[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (2))){
var state_48632__$1 = state_48632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48632__$1,(4),ch);
} else {
if((state_val_48633 === (11))){
var inst_48592 = (state_48632[(8)]);
var inst_48597 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48598 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48592);
var inst_48599 = cljs.core.async.timeout.call(null,(1000));
var inst_48600 = [inst_48598,inst_48599];
var inst_48601 = (new cljs.core.PersistentVector(null,2,(5),inst_48597,inst_48600,null));
var state_48632__$1 = state_48632;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48632__$1,(14),inst_48601);
} else {
if((state_val_48633 === (9))){
var inst_48592 = (state_48632[(8)]);
var inst_48618 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48619 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48592);
var inst_48620 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48619);
var inst_48621 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_48620)].join('');
var inst_48622 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48621);
var state_48632__$1 = (function (){var statearr_48645 = state_48632;
(statearr_48645[(10)] = inst_48618);

return statearr_48645;
})();
var statearr_48646_48671 = state_48632__$1;
(statearr_48646_48671[(2)] = inst_48622);

(statearr_48646_48671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (5))){
var inst_48585 = (state_48632[(7)]);
var inst_48587 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48588 = (new cljs.core.PersistentArrayMap(null,2,inst_48587,null));
var inst_48589 = (new cljs.core.PersistentHashSet(null,inst_48588,null));
var inst_48590 = figwheel.client.focus_msgs.call(null,inst_48589,inst_48585);
var inst_48591 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48590);
var inst_48592 = cljs.core.first.call(null,inst_48590);
var inst_48593 = figwheel.client.autoload_QMARK_.call(null);
var state_48632__$1 = (function (){var statearr_48647 = state_48632;
(statearr_48647[(9)] = inst_48591);

(statearr_48647[(8)] = inst_48592);

return statearr_48647;
})();
if(cljs.core.truth_(inst_48593)){
var statearr_48648_48672 = state_48632__$1;
(statearr_48648_48672[(1)] = (8));

} else {
var statearr_48649_48673 = state_48632__$1;
(statearr_48649_48673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (14))){
var inst_48603 = (state_48632[(2)]);
var state_48632__$1 = state_48632;
var statearr_48650_48674 = state_48632__$1;
(statearr_48650_48674[(2)] = inst_48603);

(statearr_48650_48674[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (16))){
var state_48632__$1 = state_48632;
var statearr_48651_48675 = state_48632__$1;
(statearr_48651_48675[(2)] = null);

(statearr_48651_48675[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (10))){
var inst_48624 = (state_48632[(2)]);
var state_48632__$1 = (function (){var statearr_48652 = state_48632;
(statearr_48652[(11)] = inst_48624);

return statearr_48652;
})();
var statearr_48653_48676 = state_48632__$1;
(statearr_48653_48676[(2)] = null);

(statearr_48653_48676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48633 === (8))){
var inst_48591 = (state_48632[(9)]);
var inst_48595 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48591,opts);
var state_48632__$1 = state_48632;
if(cljs.core.truth_(inst_48595)){
var statearr_48654_48677 = state_48632__$1;
(statearr_48654_48677[(1)] = (11));

} else {
var statearr_48655_48678 = state_48632__$1;
(statearr_48655_48678[(1)] = (12));

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
});})(c__38256__auto___48660,ch))
;
return ((function (switch__38233__auto__,c__38256__auto___48660,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38234__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38234__auto____0 = (function (){
var statearr_48656 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48656[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38234__auto__);

(statearr_48656[(1)] = (1));

return statearr_48656;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38234__auto____1 = (function (state_48632){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_48632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e48657){if((e48657 instanceof Object)){
var ex__38237__auto__ = e48657;
var statearr_48658_48679 = state_48632;
(statearr_48658_48679[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48657;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48680 = state_48632;
state_48632 = G__48680;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38234__auto__ = function(state_48632){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38234__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38234__auto____1.call(this,state_48632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38234__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38234__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___48660,ch))
})();
var state__38258__auto__ = (function (){var statearr_48659 = f__38257__auto__.call(null);
(statearr_48659[(6)] = c__38256__auto___48660);

return statearr_48659;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___48660,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48681_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48681_SHARP_));
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
var base_path_48687 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48687){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48683 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48684 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48685 = true;
var _STAR_print_fn_STAR__temp_val__48686 = ((function (_STAR_print_newline_STAR__orig_val__48683,_STAR_print_fn_STAR__orig_val__48684,_STAR_print_newline_STAR__temp_val__48685,sb,base_path_48687){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__48683,_STAR_print_fn_STAR__orig_val__48684,_STAR_print_newline_STAR__temp_val__48685,sb,base_path_48687))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48685;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48686;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48684;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48683;
}}catch (e48682){if((e48682 instanceof Error)){
var e = e48682;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48687], null));
} else {
var e = e48682;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_48687))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48688){
var map__48689 = p__48688;
var map__48689__$1 = (((((!((map__48689 == null))))?(((((map__48689.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48689.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48689):map__48689);
var opts = map__48689__$1;
var build_id = cljs.core.get.call(null,map__48689__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48689,map__48689__$1,opts,build_id){
return (function (p__48691){
var vec__48692 = p__48691;
var seq__48693 = cljs.core.seq.call(null,vec__48692);
var first__48694 = cljs.core.first.call(null,seq__48693);
var seq__48693__$1 = cljs.core.next.call(null,seq__48693);
var map__48695 = first__48694;
var map__48695__$1 = (((((!((map__48695 == null))))?(((((map__48695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48695):map__48695);
var msg = map__48695__$1;
var msg_name = cljs.core.get.call(null,map__48695__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48693__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48692,seq__48693,first__48694,seq__48693__$1,map__48695,map__48695__$1,msg,msg_name,_,map__48689,map__48689__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48692,seq__48693,first__48694,seq__48693__$1,map__48695,map__48695__$1,msg,msg_name,_,map__48689,map__48689__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48689,map__48689__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48697){
var vec__48698 = p__48697;
var seq__48699 = cljs.core.seq.call(null,vec__48698);
var first__48700 = cljs.core.first.call(null,seq__48699);
var seq__48699__$1 = cljs.core.next.call(null,seq__48699);
var map__48701 = first__48700;
var map__48701__$1 = (((((!((map__48701 == null))))?(((((map__48701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48701):map__48701);
var msg = map__48701__$1;
var msg_name = cljs.core.get.call(null,map__48701__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48699__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48703){
var map__48704 = p__48703;
var map__48704__$1 = (((((!((map__48704 == null))))?(((((map__48704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48704):map__48704);
var on_compile_warning = cljs.core.get.call(null,map__48704__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48704__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48704,map__48704__$1,on_compile_warning,on_compile_fail){
return (function (p__48706){
var vec__48707 = p__48706;
var seq__48708 = cljs.core.seq.call(null,vec__48707);
var first__48709 = cljs.core.first.call(null,seq__48708);
var seq__48708__$1 = cljs.core.next.call(null,seq__48708);
var map__48710 = first__48709;
var map__48710__$1 = (((((!((map__48710 == null))))?(((((map__48710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48710):map__48710);
var msg = map__48710__$1;
var msg_name = cljs.core.get.call(null,map__48710__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48708__$1;
var pred__48712 = cljs.core._EQ_;
var expr__48713 = msg_name;
if(cljs.core.truth_(pred__48712.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48713))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48712.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48713))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48704,map__48704__$1,on_compile_warning,on_compile_fail))
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
var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__,msg_hist,msg_names,msg){
return (function (state_48802){
var state_val_48803 = (state_48802[(1)]);
if((state_val_48803 === (7))){
var inst_48722 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
if(cljs.core.truth_(inst_48722)){
var statearr_48804_48851 = state_48802__$1;
(statearr_48804_48851[(1)] = (8));

} else {
var statearr_48805_48852 = state_48802__$1;
(statearr_48805_48852[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (20))){
var inst_48796 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48806_48853 = state_48802__$1;
(statearr_48806_48853[(2)] = inst_48796);

(statearr_48806_48853[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (27))){
var inst_48792 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48807_48854 = state_48802__$1;
(statearr_48807_48854[(2)] = inst_48792);

(statearr_48807_48854[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (1))){
var inst_48715 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48802__$1 = state_48802;
if(cljs.core.truth_(inst_48715)){
var statearr_48808_48855 = state_48802__$1;
(statearr_48808_48855[(1)] = (2));

} else {
var statearr_48809_48856 = state_48802__$1;
(statearr_48809_48856[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (24))){
var inst_48794 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48810_48857 = state_48802__$1;
(statearr_48810_48857[(2)] = inst_48794);

(statearr_48810_48857[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (4))){
var inst_48800 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48802__$1,inst_48800);
} else {
if((state_val_48803 === (15))){
var inst_48798 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48811_48858 = state_48802__$1;
(statearr_48811_48858[(2)] = inst_48798);

(statearr_48811_48858[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (21))){
var inst_48751 = (state_48802[(2)]);
var inst_48752 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48753 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48752);
var state_48802__$1 = (function (){var statearr_48812 = state_48802;
(statearr_48812[(7)] = inst_48751);

return statearr_48812;
})();
var statearr_48813_48859 = state_48802__$1;
(statearr_48813_48859[(2)] = inst_48753);

(statearr_48813_48859[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (31))){
var inst_48781 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48802__$1 = state_48802;
if(inst_48781){
var statearr_48814_48860 = state_48802__$1;
(statearr_48814_48860[(1)] = (34));

} else {
var statearr_48815_48861 = state_48802__$1;
(statearr_48815_48861[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (32))){
var inst_48790 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48816_48862 = state_48802__$1;
(statearr_48816_48862[(2)] = inst_48790);

(statearr_48816_48862[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (33))){
var inst_48777 = (state_48802[(2)]);
var inst_48778 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48779 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48778);
var state_48802__$1 = (function (){var statearr_48817 = state_48802;
(statearr_48817[(8)] = inst_48777);

return statearr_48817;
})();
var statearr_48818_48863 = state_48802__$1;
(statearr_48818_48863[(2)] = inst_48779);

(statearr_48818_48863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (13))){
var inst_48736 = figwheel.client.heads_up.clear.call(null);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(16),inst_48736);
} else {
if((state_val_48803 === (22))){
var inst_48757 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48758 = figwheel.client.heads_up.append_warning_message.call(null,inst_48757);
var state_48802__$1 = state_48802;
var statearr_48819_48864 = state_48802__$1;
(statearr_48819_48864[(2)] = inst_48758);

(statearr_48819_48864[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (36))){
var inst_48788 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48820_48865 = state_48802__$1;
(statearr_48820_48865[(2)] = inst_48788);

(statearr_48820_48865[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (29))){
var inst_48768 = (state_48802[(2)]);
var inst_48769 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48770 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48769);
var state_48802__$1 = (function (){var statearr_48821 = state_48802;
(statearr_48821[(9)] = inst_48768);

return statearr_48821;
})();
var statearr_48822_48866 = state_48802__$1;
(statearr_48822_48866[(2)] = inst_48770);

(statearr_48822_48866[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (6))){
var inst_48717 = (state_48802[(10)]);
var state_48802__$1 = state_48802;
var statearr_48823_48867 = state_48802__$1;
(statearr_48823_48867[(2)] = inst_48717);

(statearr_48823_48867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (28))){
var inst_48764 = (state_48802[(2)]);
var inst_48765 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48766 = figwheel.client.heads_up.display_warning.call(null,inst_48765);
var state_48802__$1 = (function (){var statearr_48824 = state_48802;
(statearr_48824[(11)] = inst_48764);

return statearr_48824;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(29),inst_48766);
} else {
if((state_val_48803 === (25))){
var inst_48762 = figwheel.client.heads_up.clear.call(null);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(28),inst_48762);
} else {
if((state_val_48803 === (34))){
var inst_48783 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(37),inst_48783);
} else {
if((state_val_48803 === (17))){
var inst_48742 = (state_48802[(2)]);
var inst_48743 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48744 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48743);
var state_48802__$1 = (function (){var statearr_48825 = state_48802;
(statearr_48825[(12)] = inst_48742);

return statearr_48825;
})();
var statearr_48826_48868 = state_48802__$1;
(statearr_48826_48868[(2)] = inst_48744);

(statearr_48826_48868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (3))){
var inst_48734 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48802__$1 = state_48802;
if(inst_48734){
var statearr_48827_48869 = state_48802__$1;
(statearr_48827_48869[(1)] = (13));

} else {
var statearr_48828_48870 = state_48802__$1;
(statearr_48828_48870[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (12))){
var inst_48730 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48829_48871 = state_48802__$1;
(statearr_48829_48871[(2)] = inst_48730);

(statearr_48829_48871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (2))){
var inst_48717 = (state_48802[(10)]);
var inst_48717__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48802__$1 = (function (){var statearr_48830 = state_48802;
(statearr_48830[(10)] = inst_48717__$1);

return statearr_48830;
})();
if(cljs.core.truth_(inst_48717__$1)){
var statearr_48831_48872 = state_48802__$1;
(statearr_48831_48872[(1)] = (5));

} else {
var statearr_48832_48873 = state_48802__$1;
(statearr_48832_48873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (23))){
var inst_48760 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48802__$1 = state_48802;
if(inst_48760){
var statearr_48833_48874 = state_48802__$1;
(statearr_48833_48874[(1)] = (25));

} else {
var statearr_48834_48875 = state_48802__$1;
(statearr_48834_48875[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (35))){
var state_48802__$1 = state_48802;
var statearr_48835_48876 = state_48802__$1;
(statearr_48835_48876[(2)] = null);

(statearr_48835_48876[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (19))){
var inst_48755 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48802__$1 = state_48802;
if(inst_48755){
var statearr_48836_48877 = state_48802__$1;
(statearr_48836_48877[(1)] = (22));

} else {
var statearr_48837_48878 = state_48802__$1;
(statearr_48837_48878[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (11))){
var inst_48726 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48838_48879 = state_48802__$1;
(statearr_48838_48879[(2)] = inst_48726);

(statearr_48838_48879[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (9))){
var inst_48728 = figwheel.client.heads_up.clear.call(null);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(12),inst_48728);
} else {
if((state_val_48803 === (5))){
var inst_48719 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48802__$1 = state_48802;
var statearr_48839_48880 = state_48802__$1;
(statearr_48839_48880[(2)] = inst_48719);

(statearr_48839_48880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (14))){
var inst_48746 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48802__$1 = state_48802;
if(inst_48746){
var statearr_48840_48881 = state_48802__$1;
(statearr_48840_48881[(1)] = (18));

} else {
var statearr_48841_48882 = state_48802__$1;
(statearr_48841_48882[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (26))){
var inst_48772 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48802__$1 = state_48802;
if(inst_48772){
var statearr_48842_48883 = state_48802__$1;
(statearr_48842_48883[(1)] = (30));

} else {
var statearr_48843_48884 = state_48802__$1;
(statearr_48843_48884[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (16))){
var inst_48738 = (state_48802[(2)]);
var inst_48739 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48740 = figwheel.client.heads_up.display_exception.call(null,inst_48739);
var state_48802__$1 = (function (){var statearr_48844 = state_48802;
(statearr_48844[(13)] = inst_48738);

return statearr_48844;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(17),inst_48740);
} else {
if((state_val_48803 === (30))){
var inst_48774 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48775 = figwheel.client.heads_up.display_warning.call(null,inst_48774);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(33),inst_48775);
} else {
if((state_val_48803 === (10))){
var inst_48732 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48845_48885 = state_48802__$1;
(statearr_48845_48885[(2)] = inst_48732);

(statearr_48845_48885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (18))){
var inst_48748 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48749 = figwheel.client.heads_up.display_exception.call(null,inst_48748);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(21),inst_48749);
} else {
if((state_val_48803 === (37))){
var inst_48785 = (state_48802[(2)]);
var state_48802__$1 = state_48802;
var statearr_48846_48886 = state_48802__$1;
(statearr_48846_48886[(2)] = inst_48785);

(statearr_48846_48886[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48803 === (8))){
var inst_48724 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48802__$1 = state_48802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48802__$1,(11),inst_48724);
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
});})(c__38256__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38233__auto__,c__38256__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto____0 = (function (){
var statearr_48847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48847[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto__);

(statearr_48847[(1)] = (1));

return statearr_48847;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto____1 = (function (state_48802){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_48802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e48848){if((e48848 instanceof Object)){
var ex__38237__auto__ = e48848;
var statearr_48849_48887 = state_48802;
(statearr_48849_48887[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48888 = state_48802;
state_48802 = G__48888;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto__ = function(state_48802){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto____1.call(this,state_48802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__,msg_hist,msg_names,msg))
})();
var state__38258__auto__ = (function (){var statearr_48850 = f__38257__auto__.call(null);
(statearr_48850[(6)] = c__38256__auto__);

return statearr_48850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__,msg_hist,msg_names,msg))
);

return c__38256__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38256__auto___48917 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___48917,ch){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___48917,ch){
return (function (state_48903){
var state_val_48904 = (state_48903[(1)]);
if((state_val_48904 === (1))){
var state_48903__$1 = state_48903;
var statearr_48905_48918 = state_48903__$1;
(statearr_48905_48918[(2)] = null);

(statearr_48905_48918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (2))){
var state_48903__$1 = state_48903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48903__$1,(4),ch);
} else {
if((state_val_48904 === (3))){
var inst_48901 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48903__$1,inst_48901);
} else {
if((state_val_48904 === (4))){
var inst_48891 = (state_48903[(7)]);
var inst_48891__$1 = (state_48903[(2)]);
var state_48903__$1 = (function (){var statearr_48906 = state_48903;
(statearr_48906[(7)] = inst_48891__$1);

return statearr_48906;
})();
if(cljs.core.truth_(inst_48891__$1)){
var statearr_48907_48919 = state_48903__$1;
(statearr_48907_48919[(1)] = (5));

} else {
var statearr_48908_48920 = state_48903__$1;
(statearr_48908_48920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (5))){
var inst_48891 = (state_48903[(7)]);
var inst_48893 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48891);
var state_48903__$1 = state_48903;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48903__$1,(8),inst_48893);
} else {
if((state_val_48904 === (6))){
var state_48903__$1 = state_48903;
var statearr_48909_48921 = state_48903__$1;
(statearr_48909_48921[(2)] = null);

(statearr_48909_48921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (7))){
var inst_48899 = (state_48903[(2)]);
var state_48903__$1 = state_48903;
var statearr_48910_48922 = state_48903__$1;
(statearr_48910_48922[(2)] = inst_48899);

(statearr_48910_48922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48904 === (8))){
var inst_48895 = (state_48903[(2)]);
var state_48903__$1 = (function (){var statearr_48911 = state_48903;
(statearr_48911[(8)] = inst_48895);

return statearr_48911;
})();
var statearr_48912_48923 = state_48903__$1;
(statearr_48912_48923[(2)] = null);

(statearr_48912_48923[(1)] = (2));


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
});})(c__38256__auto___48917,ch))
;
return ((function (switch__38233__auto__,c__38256__auto___48917,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38234__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38234__auto____0 = (function (){
var statearr_48913 = [null,null,null,null,null,null,null,null,null];
(statearr_48913[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38234__auto__);

(statearr_48913[(1)] = (1));

return statearr_48913;
});
var figwheel$client$heads_up_plugin_$_state_machine__38234__auto____1 = (function (state_48903){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_48903);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e48914){if((e48914 instanceof Object)){
var ex__38237__auto__ = e48914;
var statearr_48915_48924 = state_48903;
(statearr_48915_48924[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48903);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48925 = state_48903;
state_48903 = G__48925;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38234__auto__ = function(state_48903){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38234__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38234__auto____1.call(this,state_48903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38234__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38234__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___48917,ch))
})();
var state__38258__auto__ = (function (){var statearr_48916 = f__38257__auto__.call(null);
(statearr_48916[(6)] = c__38256__auto___48917);

return statearr_48916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___48917,ch))
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
var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__){
return (function (state_48931){
var state_val_48932 = (state_48931[(1)]);
if((state_val_48932 === (1))){
var inst_48926 = cljs.core.async.timeout.call(null,(3000));
var state_48931__$1 = state_48931;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48931__$1,(2),inst_48926);
} else {
if((state_val_48932 === (2))){
var inst_48928 = (state_48931[(2)]);
var inst_48929 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48931__$1 = (function (){var statearr_48933 = state_48931;
(statearr_48933[(7)] = inst_48928);

return statearr_48933;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48931__$1,inst_48929);
} else {
return null;
}
}
});})(c__38256__auto__))
;
return ((function (switch__38233__auto__,c__38256__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38234__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38234__auto____0 = (function (){
var statearr_48934 = [null,null,null,null,null,null,null,null];
(statearr_48934[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38234__auto__);

(statearr_48934[(1)] = (1));

return statearr_48934;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38234__auto____1 = (function (state_48931){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_48931);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e48935){if((e48935 instanceof Object)){
var ex__38237__auto__ = e48935;
var statearr_48936_48938 = state_48931;
(statearr_48936_48938[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48931);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48935;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48939 = state_48931;
state_48931 = G__48939;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38234__auto__ = function(state_48931){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38234__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38234__auto____1.call(this,state_48931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38234__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38234__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__))
})();
var state__38258__auto__ = (function (){var statearr_48937 = f__38257__auto__.call(null);
(statearr_48937[(6)] = c__38256__auto__);

return statearr_48937;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__))
);

return c__38256__auto__;
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
var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__,figwheel_version,temp__5735__auto__){
return (function (state_48946){
var state_val_48947 = (state_48946[(1)]);
if((state_val_48947 === (1))){
var inst_48940 = cljs.core.async.timeout.call(null,(2000));
var state_48946__$1 = state_48946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48946__$1,(2),inst_48940);
} else {
if((state_val_48947 === (2))){
var inst_48942 = (state_48946[(2)]);
var inst_48943 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_48944 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48943);
var state_48946__$1 = (function (){var statearr_48948 = state_48946;
(statearr_48948[(7)] = inst_48942);

return statearr_48948;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48946__$1,inst_48944);
} else {
return null;
}
}
});})(c__38256__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__38233__auto__,c__38256__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto____0 = (function (){
var statearr_48949 = [null,null,null,null,null,null,null,null];
(statearr_48949[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto__);

(statearr_48949[(1)] = (1));

return statearr_48949;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto____1 = (function (state_48946){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_48946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e48950){if((e48950 instanceof Object)){
var ex__38237__auto__ = e48950;
var statearr_48951_48953 = state_48946;
(statearr_48951_48953[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48954 = state_48946;
state_48946 = G__48954;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto__ = function(state_48946){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto____1.call(this,state_48946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__,figwheel_version,temp__5735__auto__))
})();
var state__38258__auto__ = (function (){var statearr_48952 = f__38257__auto__.call(null);
(statearr_48952[(6)] = c__38256__auto__);

return statearr_48952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__,figwheel_version,temp__5735__auto__))
);

return c__38256__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48955){
var map__48956 = p__48955;
var map__48956__$1 = (((((!((map__48956 == null))))?(((((map__48956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48956):map__48956);
var file = cljs.core.get.call(null,map__48956__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48956__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48956__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48958 = "";
var G__48958__$1 = (cljs.core.truth_(file)?[G__48958,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__48958);
var G__48958__$2 = (cljs.core.truth_(line)?[G__48958__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48958__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__48958__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__48958__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48959){
var map__48960 = p__48959;
var map__48960__$1 = (((((!((map__48960 == null))))?(((((map__48960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48960):map__48960);
var ed = map__48960__$1;
var exception_data = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48960__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_48963 = (function (){var G__48962 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48962)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__48962;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_48963);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48964){
var map__48965 = p__48964;
var map__48965__$1 = (((((!((map__48965 == null))))?(((((map__48965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48965):map__48965);
var w = map__48965__$1;
var message = cljs.core.get.call(null,map__48965__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__48967 = cljs.core.seq.call(null,plugins);
var chunk__48968 = null;
var count__48969 = (0);
var i__48970 = (0);
while(true){
if((i__48970 < count__48969)){
var vec__48977 = cljs.core._nth.call(null,chunk__48968,i__48970);
var k = cljs.core.nth.call(null,vec__48977,(0),null);
var plugin = cljs.core.nth.call(null,vec__48977,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48983 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48967,chunk__48968,count__48969,i__48970,pl_48983,vec__48977,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48983.call(null,msg_hist);
});})(seq__48967,chunk__48968,count__48969,i__48970,pl_48983,vec__48977,k,plugin))
);
} else {
}


var G__48984 = seq__48967;
var G__48985 = chunk__48968;
var G__48986 = count__48969;
var G__48987 = (i__48970 + (1));
seq__48967 = G__48984;
chunk__48968 = G__48985;
count__48969 = G__48986;
i__48970 = G__48987;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__48967);
if(temp__5735__auto__){
var seq__48967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48967__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__48967__$1);
var G__48988 = cljs.core.chunk_rest.call(null,seq__48967__$1);
var G__48989 = c__4550__auto__;
var G__48990 = cljs.core.count.call(null,c__4550__auto__);
var G__48991 = (0);
seq__48967 = G__48988;
chunk__48968 = G__48989;
count__48969 = G__48990;
i__48970 = G__48991;
continue;
} else {
var vec__48980 = cljs.core.first.call(null,seq__48967__$1);
var k = cljs.core.nth.call(null,vec__48980,(0),null);
var plugin = cljs.core.nth.call(null,vec__48980,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48992 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48967,chunk__48968,count__48969,i__48970,pl_48992,vec__48980,k,plugin,seq__48967__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48992.call(null,msg_hist);
});})(seq__48967,chunk__48968,count__48969,i__48970,pl_48992,vec__48980,k,plugin,seq__48967__$1,temp__5735__auto__))
);
} else {
}


var G__48993 = cljs.core.next.call(null,seq__48967__$1);
var G__48994 = null;
var G__48995 = (0);
var G__48996 = (0);
seq__48967 = G__48993;
chunk__48968 = G__48994;
count__48969 = G__48995;
i__48970 = G__48996;
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
var G__48998 = arguments.length;
switch (G__48998) {
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

var seq__48999_49004 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49000_49005 = null;
var count__49001_49006 = (0);
var i__49002_49007 = (0);
while(true){
if((i__49002_49007 < count__49001_49006)){
var msg_49008 = cljs.core._nth.call(null,chunk__49000_49005,i__49002_49007);
figwheel.client.socket.handle_incoming_message.call(null,msg_49008);


var G__49009 = seq__48999_49004;
var G__49010 = chunk__49000_49005;
var G__49011 = count__49001_49006;
var G__49012 = (i__49002_49007 + (1));
seq__48999_49004 = G__49009;
chunk__49000_49005 = G__49010;
count__49001_49006 = G__49011;
i__49002_49007 = G__49012;
continue;
} else {
var temp__5735__auto___49013 = cljs.core.seq.call(null,seq__48999_49004);
if(temp__5735__auto___49013){
var seq__48999_49014__$1 = temp__5735__auto___49013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48999_49014__$1)){
var c__4550__auto___49015 = cljs.core.chunk_first.call(null,seq__48999_49014__$1);
var G__49016 = cljs.core.chunk_rest.call(null,seq__48999_49014__$1);
var G__49017 = c__4550__auto___49015;
var G__49018 = cljs.core.count.call(null,c__4550__auto___49015);
var G__49019 = (0);
seq__48999_49004 = G__49016;
chunk__49000_49005 = G__49017;
count__49001_49006 = G__49018;
i__49002_49007 = G__49019;
continue;
} else {
var msg_49020 = cljs.core.first.call(null,seq__48999_49014__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49020);


var G__49021 = cljs.core.next.call(null,seq__48999_49014__$1);
var G__49022 = null;
var G__49023 = (0);
var G__49024 = (0);
seq__48999_49004 = G__49021;
chunk__49000_49005 = G__49022;
count__49001_49006 = G__49023;
i__49002_49007 = G__49024;
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
var len__4730__auto___49029 = arguments.length;
var i__4731__auto___49030 = (0);
while(true){
if((i__4731__auto___49030 < len__4730__auto___49029)){
args__4736__auto__.push((arguments[i__4731__auto___49030]));

var G__49031 = (i__4731__auto___49030 + (1));
i__4731__auto___49030 = G__49031;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49026){
var map__49027 = p__49026;
var map__49027__$1 = (((((!((map__49027 == null))))?(((((map__49027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49027):map__49027);
var opts = map__49027__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49025){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49025));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49032){if((e49032 instanceof Error)){
var e = e49032;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49032;

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
return (function (p__49033){
var map__49034 = p__49033;
var map__49034__$1 = (((((!((map__49034 == null))))?(((((map__49034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49034.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49034):map__49034);
var msg_name = cljs.core.get.call(null,map__49034__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563208756745
