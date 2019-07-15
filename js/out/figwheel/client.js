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
}catch (e47828){if((e47828 instanceof Error)){
var e = e47828;
return "Error: Unable to stringify";
} else {
throw e47828;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__47831 = arguments.length;
switch (G__47831) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__47829_SHARP_){
if(typeof p1__47829_SHARP_ === 'string'){
return p1__47829_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__47829_SHARP_);
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
var len__4730__auto___47834 = arguments.length;
var i__4731__auto___47835 = (0);
while(true){
if((i__4731__auto___47835 < len__4730__auto___47834)){
args__4736__auto__.push((arguments[i__4731__auto___47835]));

var G__47836 = (i__4731__auto___47835 + (1));
i__4731__auto___47835 = G__47836;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq47833){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47833));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47838 = arguments.length;
var i__4731__auto___47839 = (0);
while(true){
if((i__4731__auto___47839 < len__4730__auto___47838)){
args__4736__auto__.push((arguments[i__4731__auto___47839]));

var G__47840 = (i__4731__auto___47839 + (1));
i__4731__auto___47839 = G__47840;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq47837){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47837));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__47841){
var map__47842 = p__47841;
var map__47842__$1 = (((((!((map__47842 == null))))?(((((map__47842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47842):map__47842);
var message = cljs.core.get.call(null,map__47842__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__47842__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__43550__auto___47921 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___47921,ch){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___47921,ch){
return (function (state_47893){
var state_val_47894 = (state_47893[(1)]);
if((state_val_47894 === (7))){
var inst_47889 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47895_47922 = state_47893__$1;
(statearr_47895_47922[(2)] = inst_47889);

(statearr_47895_47922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (1))){
var state_47893__$1 = state_47893;
var statearr_47896_47923 = state_47893__$1;
(statearr_47896_47923[(2)] = null);

(statearr_47896_47923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (4))){
var inst_47846 = (state_47893[(7)]);
var inst_47846__$1 = (state_47893[(2)]);
var state_47893__$1 = (function (){var statearr_47897 = state_47893;
(statearr_47897[(7)] = inst_47846__$1);

return statearr_47897;
})();
if(cljs.core.truth_(inst_47846__$1)){
var statearr_47898_47924 = state_47893__$1;
(statearr_47898_47924[(1)] = (5));

} else {
var statearr_47899_47925 = state_47893__$1;
(statearr_47899_47925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (15))){
var inst_47853 = (state_47893[(8)]);
var inst_47868 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47853);
var inst_47869 = cljs.core.first.call(null,inst_47868);
var inst_47870 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_47869);
var inst_47871 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47870)].join('');
var inst_47872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_47871);
var state_47893__$1 = state_47893;
var statearr_47900_47926 = state_47893__$1;
(statearr_47900_47926[(2)] = inst_47872);

(statearr_47900_47926[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (13))){
var inst_47877 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47901_47927 = state_47893__$1;
(statearr_47901_47927[(2)] = inst_47877);

(statearr_47901_47927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (6))){
var state_47893__$1 = state_47893;
var statearr_47902_47928 = state_47893__$1;
(statearr_47902_47928[(2)] = null);

(statearr_47902_47928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (17))){
var inst_47875 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47903_47929 = state_47893__$1;
(statearr_47903_47929[(2)] = inst_47875);

(statearr_47903_47929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (3))){
var inst_47891 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47893__$1,inst_47891);
} else {
if((state_val_47894 === (12))){
var inst_47852 = (state_47893[(9)]);
var inst_47866 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_47852,opts);
var state_47893__$1 = state_47893;
if(inst_47866){
var statearr_47904_47930 = state_47893__$1;
(statearr_47904_47930[(1)] = (15));

} else {
var statearr_47905_47931 = state_47893__$1;
(statearr_47905_47931[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (2))){
var state_47893__$1 = state_47893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47893__$1,(4),ch);
} else {
if((state_val_47894 === (11))){
var inst_47853 = (state_47893[(8)]);
var inst_47858 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47859 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_47853);
var inst_47860 = cljs.core.async.timeout.call(null,(1000));
var inst_47861 = [inst_47859,inst_47860];
var inst_47862 = (new cljs.core.PersistentVector(null,2,(5),inst_47858,inst_47861,null));
var state_47893__$1 = state_47893;
return cljs.core.async.ioc_alts_BANG_.call(null,state_47893__$1,(14),inst_47862);
} else {
if((state_val_47894 === (9))){
var inst_47853 = (state_47893[(8)]);
var inst_47879 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_47880 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_47853);
var inst_47881 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47880);
var inst_47882 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_47881)].join('');
var inst_47883 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_47882);
var state_47893__$1 = (function (){var statearr_47906 = state_47893;
(statearr_47906[(10)] = inst_47879);

return statearr_47906;
})();
var statearr_47907_47932 = state_47893__$1;
(statearr_47907_47932[(2)] = inst_47883);

(statearr_47907_47932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (5))){
var inst_47846 = (state_47893[(7)]);
var inst_47848 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_47849 = (new cljs.core.PersistentArrayMap(null,2,inst_47848,null));
var inst_47850 = (new cljs.core.PersistentHashSet(null,inst_47849,null));
var inst_47851 = figwheel.client.focus_msgs.call(null,inst_47850,inst_47846);
var inst_47852 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_47851);
var inst_47853 = cljs.core.first.call(null,inst_47851);
var inst_47854 = figwheel.client.autoload_QMARK_.call(null);
var state_47893__$1 = (function (){var statearr_47908 = state_47893;
(statearr_47908[(9)] = inst_47852);

(statearr_47908[(8)] = inst_47853);

return statearr_47908;
})();
if(cljs.core.truth_(inst_47854)){
var statearr_47909_47933 = state_47893__$1;
(statearr_47909_47933[(1)] = (8));

} else {
var statearr_47910_47934 = state_47893__$1;
(statearr_47910_47934[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (14))){
var inst_47864 = (state_47893[(2)]);
var state_47893__$1 = state_47893;
var statearr_47911_47935 = state_47893__$1;
(statearr_47911_47935[(2)] = inst_47864);

(statearr_47911_47935[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (16))){
var state_47893__$1 = state_47893;
var statearr_47912_47936 = state_47893__$1;
(statearr_47912_47936[(2)] = null);

(statearr_47912_47936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (10))){
var inst_47885 = (state_47893[(2)]);
var state_47893__$1 = (function (){var statearr_47913 = state_47893;
(statearr_47913[(11)] = inst_47885);

return statearr_47913;
})();
var statearr_47914_47937 = state_47893__$1;
(statearr_47914_47937[(2)] = null);

(statearr_47914_47937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47894 === (8))){
var inst_47852 = (state_47893[(9)]);
var inst_47856 = figwheel.client.reload_file_state_QMARK_.call(null,inst_47852,opts);
var state_47893__$1 = state_47893;
if(cljs.core.truth_(inst_47856)){
var statearr_47915_47938 = state_47893__$1;
(statearr_47915_47938[(1)] = (11));

} else {
var statearr_47916_47939 = state_47893__$1;
(statearr_47916_47939[(1)] = (12));

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
});})(c__43550__auto___47921,ch))
;
return ((function (switch__43455__auto__,c__43550__auto___47921,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__43456__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__43456__auto____0 = (function (){
var statearr_47917 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47917[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__43456__auto__);

(statearr_47917[(1)] = (1));

return statearr_47917;
});
var figwheel$client$file_reloader_plugin_$_state_machine__43456__auto____1 = (function (state_47893){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_47893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e47918){if((e47918 instanceof Object)){
var ex__43459__auto__ = e47918;
var statearr_47919_47940 = state_47893;
(statearr_47919_47940[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47941 = state_47893;
state_47893 = G__47941;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__43456__auto__ = function(state_47893){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__43456__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__43456__auto____1.call(this,state_47893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__43456__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__43456__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___47921,ch))
})();
var state__43552__auto__ = (function (){var statearr_47920 = f__43551__auto__.call(null);
(statearr_47920[(6)] = c__43550__auto___47921);

return statearr_47920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___47921,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__47942_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__47942_SHARP_));
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
var base_path_47948 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_47948){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47944 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47945 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47946 = true;
var _STAR_print_fn_STAR__temp_val__47947 = ((function (_STAR_print_newline_STAR__orig_val__47944,_STAR_print_fn_STAR__orig_val__47945,_STAR_print_newline_STAR__temp_val__47946,sb,base_path_47948){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__47944,_STAR_print_fn_STAR__orig_val__47945,_STAR_print_newline_STAR__temp_val__47946,sb,base_path_47948))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47946;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47947;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47945;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47944;
}}catch (e47943){if((e47943 instanceof Error)){
var e = e47943;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_47948], null));
} else {
var e = e47943;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_47948))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__47949){
var map__47950 = p__47949;
var map__47950__$1 = (((((!((map__47950 == null))))?(((((map__47950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47950):map__47950);
var opts = map__47950__$1;
var build_id = cljs.core.get.call(null,map__47950__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__47950,map__47950__$1,opts,build_id){
return (function (p__47952){
var vec__47953 = p__47952;
var seq__47954 = cljs.core.seq.call(null,vec__47953);
var first__47955 = cljs.core.first.call(null,seq__47954);
var seq__47954__$1 = cljs.core.next.call(null,seq__47954);
var map__47956 = first__47955;
var map__47956__$1 = (((((!((map__47956 == null))))?(((((map__47956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47956):map__47956);
var msg = map__47956__$1;
var msg_name = cljs.core.get.call(null,map__47956__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47954__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__47953,seq__47954,first__47955,seq__47954__$1,map__47956,map__47956__$1,msg,msg_name,_,map__47950,map__47950__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__47953,seq__47954,first__47955,seq__47954__$1,map__47956,map__47956__$1,msg,msg_name,_,map__47950,map__47950__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__47950,map__47950__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__47958){
var vec__47959 = p__47958;
var seq__47960 = cljs.core.seq.call(null,vec__47959);
var first__47961 = cljs.core.first.call(null,seq__47960);
var seq__47960__$1 = cljs.core.next.call(null,seq__47960);
var map__47962 = first__47961;
var map__47962__$1 = (((((!((map__47962 == null))))?(((((map__47962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47962):map__47962);
var msg = map__47962__$1;
var msg_name = cljs.core.get.call(null,map__47962__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47960__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__47964){
var map__47965 = p__47964;
var map__47965__$1 = (((((!((map__47965 == null))))?(((((map__47965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47965):map__47965);
var on_compile_warning = cljs.core.get.call(null,map__47965__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__47965__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__47965,map__47965__$1,on_compile_warning,on_compile_fail){
return (function (p__47967){
var vec__47968 = p__47967;
var seq__47969 = cljs.core.seq.call(null,vec__47968);
var first__47970 = cljs.core.first.call(null,seq__47969);
var seq__47969__$1 = cljs.core.next.call(null,seq__47969);
var map__47971 = first__47970;
var map__47971__$1 = (((((!((map__47971 == null))))?(((((map__47971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47971):map__47971);
var msg = map__47971__$1;
var msg_name = cljs.core.get.call(null,map__47971__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__47969__$1;
var pred__47973 = cljs.core._EQ_;
var expr__47974 = msg_name;
if(cljs.core.truth_(pred__47973.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__47974))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__47973.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__47974))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__47965,map__47965__$1,on_compile_warning,on_compile_fail))
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
var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__,msg_hist,msg_names,msg){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__,msg_hist,msg_names,msg){
return (function (state_48063){
var state_val_48064 = (state_48063[(1)]);
if((state_val_48064 === (7))){
var inst_47983 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
if(cljs.core.truth_(inst_47983)){
var statearr_48065_48112 = state_48063__$1;
(statearr_48065_48112[(1)] = (8));

} else {
var statearr_48066_48113 = state_48063__$1;
(statearr_48066_48113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (20))){
var inst_48057 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48067_48114 = state_48063__$1;
(statearr_48067_48114[(2)] = inst_48057);

(statearr_48067_48114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (27))){
var inst_48053 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48068_48115 = state_48063__$1;
(statearr_48068_48115[(2)] = inst_48053);

(statearr_48068_48115[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (1))){
var inst_47976 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48063__$1 = state_48063;
if(cljs.core.truth_(inst_47976)){
var statearr_48069_48116 = state_48063__$1;
(statearr_48069_48116[(1)] = (2));

} else {
var statearr_48070_48117 = state_48063__$1;
(statearr_48070_48117[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (24))){
var inst_48055 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48071_48118 = state_48063__$1;
(statearr_48071_48118[(2)] = inst_48055);

(statearr_48071_48118[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (4))){
var inst_48061 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48063__$1,inst_48061);
} else {
if((state_val_48064 === (15))){
var inst_48059 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48072_48119 = state_48063__$1;
(statearr_48072_48119[(2)] = inst_48059);

(statearr_48072_48119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (21))){
var inst_48012 = (state_48063[(2)]);
var inst_48013 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48014 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48013);
var state_48063__$1 = (function (){var statearr_48073 = state_48063;
(statearr_48073[(7)] = inst_48012);

return statearr_48073;
})();
var statearr_48074_48120 = state_48063__$1;
(statearr_48074_48120[(2)] = inst_48014);

(statearr_48074_48120[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (31))){
var inst_48042 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48063__$1 = state_48063;
if(inst_48042){
var statearr_48075_48121 = state_48063__$1;
(statearr_48075_48121[(1)] = (34));

} else {
var statearr_48076_48122 = state_48063__$1;
(statearr_48076_48122[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (32))){
var inst_48051 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48077_48123 = state_48063__$1;
(statearr_48077_48123[(2)] = inst_48051);

(statearr_48077_48123[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (33))){
var inst_48038 = (state_48063[(2)]);
var inst_48039 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48040 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48039);
var state_48063__$1 = (function (){var statearr_48078 = state_48063;
(statearr_48078[(8)] = inst_48038);

return statearr_48078;
})();
var statearr_48079_48124 = state_48063__$1;
(statearr_48079_48124[(2)] = inst_48040);

(statearr_48079_48124[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (13))){
var inst_47997 = figwheel.client.heads_up.clear.call(null);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(16),inst_47997);
} else {
if((state_val_48064 === (22))){
var inst_48018 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48019 = figwheel.client.heads_up.append_warning_message.call(null,inst_48018);
var state_48063__$1 = state_48063;
var statearr_48080_48125 = state_48063__$1;
(statearr_48080_48125[(2)] = inst_48019);

(statearr_48080_48125[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (36))){
var inst_48049 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48081_48126 = state_48063__$1;
(statearr_48081_48126[(2)] = inst_48049);

(statearr_48081_48126[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (29))){
var inst_48029 = (state_48063[(2)]);
var inst_48030 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48031 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48030);
var state_48063__$1 = (function (){var statearr_48082 = state_48063;
(statearr_48082[(9)] = inst_48029);

return statearr_48082;
})();
var statearr_48083_48127 = state_48063__$1;
(statearr_48083_48127[(2)] = inst_48031);

(statearr_48083_48127[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (6))){
var inst_47978 = (state_48063[(10)]);
var state_48063__$1 = state_48063;
var statearr_48084_48128 = state_48063__$1;
(statearr_48084_48128[(2)] = inst_47978);

(statearr_48084_48128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (28))){
var inst_48025 = (state_48063[(2)]);
var inst_48026 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48027 = figwheel.client.heads_up.display_warning.call(null,inst_48026);
var state_48063__$1 = (function (){var statearr_48085 = state_48063;
(statearr_48085[(11)] = inst_48025);

return statearr_48085;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(29),inst_48027);
} else {
if((state_val_48064 === (25))){
var inst_48023 = figwheel.client.heads_up.clear.call(null);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(28),inst_48023);
} else {
if((state_val_48064 === (34))){
var inst_48044 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(37),inst_48044);
} else {
if((state_val_48064 === (17))){
var inst_48003 = (state_48063[(2)]);
var inst_48004 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48005 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48004);
var state_48063__$1 = (function (){var statearr_48086 = state_48063;
(statearr_48086[(12)] = inst_48003);

return statearr_48086;
})();
var statearr_48087_48129 = state_48063__$1;
(statearr_48087_48129[(2)] = inst_48005);

(statearr_48087_48129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (3))){
var inst_47995 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48063__$1 = state_48063;
if(inst_47995){
var statearr_48088_48130 = state_48063__$1;
(statearr_48088_48130[(1)] = (13));

} else {
var statearr_48089_48131 = state_48063__$1;
(statearr_48089_48131[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (12))){
var inst_47991 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48090_48132 = state_48063__$1;
(statearr_48090_48132[(2)] = inst_47991);

(statearr_48090_48132[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (2))){
var inst_47978 = (state_48063[(10)]);
var inst_47978__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48063__$1 = (function (){var statearr_48091 = state_48063;
(statearr_48091[(10)] = inst_47978__$1);

return statearr_48091;
})();
if(cljs.core.truth_(inst_47978__$1)){
var statearr_48092_48133 = state_48063__$1;
(statearr_48092_48133[(1)] = (5));

} else {
var statearr_48093_48134 = state_48063__$1;
(statearr_48093_48134[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (23))){
var inst_48021 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48063__$1 = state_48063;
if(inst_48021){
var statearr_48094_48135 = state_48063__$1;
(statearr_48094_48135[(1)] = (25));

} else {
var statearr_48095_48136 = state_48063__$1;
(statearr_48095_48136[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (35))){
var state_48063__$1 = state_48063;
var statearr_48096_48137 = state_48063__$1;
(statearr_48096_48137[(2)] = null);

(statearr_48096_48137[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (19))){
var inst_48016 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48063__$1 = state_48063;
if(inst_48016){
var statearr_48097_48138 = state_48063__$1;
(statearr_48097_48138[(1)] = (22));

} else {
var statearr_48098_48139 = state_48063__$1;
(statearr_48098_48139[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (11))){
var inst_47987 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48099_48140 = state_48063__$1;
(statearr_48099_48140[(2)] = inst_47987);

(statearr_48099_48140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (9))){
var inst_47989 = figwheel.client.heads_up.clear.call(null);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(12),inst_47989);
} else {
if((state_val_48064 === (5))){
var inst_47980 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48063__$1 = state_48063;
var statearr_48100_48141 = state_48063__$1;
(statearr_48100_48141[(2)] = inst_47980);

(statearr_48100_48141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (14))){
var inst_48007 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48063__$1 = state_48063;
if(inst_48007){
var statearr_48101_48142 = state_48063__$1;
(statearr_48101_48142[(1)] = (18));

} else {
var statearr_48102_48143 = state_48063__$1;
(statearr_48102_48143[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (26))){
var inst_48033 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48063__$1 = state_48063;
if(inst_48033){
var statearr_48103_48144 = state_48063__$1;
(statearr_48103_48144[(1)] = (30));

} else {
var statearr_48104_48145 = state_48063__$1;
(statearr_48104_48145[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (16))){
var inst_47999 = (state_48063[(2)]);
var inst_48000 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48001 = figwheel.client.heads_up.display_exception.call(null,inst_48000);
var state_48063__$1 = (function (){var statearr_48105 = state_48063;
(statearr_48105[(13)] = inst_47999);

return statearr_48105;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(17),inst_48001);
} else {
if((state_val_48064 === (30))){
var inst_48035 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48036 = figwheel.client.heads_up.display_warning.call(null,inst_48035);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(33),inst_48036);
} else {
if((state_val_48064 === (10))){
var inst_47993 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48106_48146 = state_48063__$1;
(statearr_48106_48146[(2)] = inst_47993);

(statearr_48106_48146[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (18))){
var inst_48009 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48010 = figwheel.client.heads_up.display_exception.call(null,inst_48009);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(21),inst_48010);
} else {
if((state_val_48064 === (37))){
var inst_48046 = (state_48063[(2)]);
var state_48063__$1 = state_48063;
var statearr_48107_48147 = state_48063__$1;
(statearr_48107_48147[(2)] = inst_48046);

(statearr_48107_48147[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48064 === (8))){
var inst_47985 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48063__$1 = state_48063;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48063__$1,(11),inst_47985);
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
});})(c__43550__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__43455__auto__,c__43550__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto____0 = (function (){
var statearr_48108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48108[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto__);

(statearr_48108[(1)] = (1));

return statearr_48108;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto____1 = (function (state_48063){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_48063);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e48109){if((e48109 instanceof Object)){
var ex__43459__auto__ = e48109;
var statearr_48110_48148 = state_48063;
(statearr_48110_48148[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48063);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48149 = state_48063;
state_48063 = G__48149;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto__ = function(state_48063){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto____1.call(this,state_48063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__,msg_hist,msg_names,msg))
})();
var state__43552__auto__ = (function (){var statearr_48111 = f__43551__auto__.call(null);
(statearr_48111[(6)] = c__43550__auto__);

return statearr_48111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__,msg_hist,msg_names,msg))
);

return c__43550__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43550__auto___48178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___48178,ch){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___48178,ch){
return (function (state_48164){
var state_val_48165 = (state_48164[(1)]);
if((state_val_48165 === (1))){
var state_48164__$1 = state_48164;
var statearr_48166_48179 = state_48164__$1;
(statearr_48166_48179[(2)] = null);

(statearr_48166_48179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48165 === (2))){
var state_48164__$1 = state_48164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48164__$1,(4),ch);
} else {
if((state_val_48165 === (3))){
var inst_48162 = (state_48164[(2)]);
var state_48164__$1 = state_48164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48164__$1,inst_48162);
} else {
if((state_val_48165 === (4))){
var inst_48152 = (state_48164[(7)]);
var inst_48152__$1 = (state_48164[(2)]);
var state_48164__$1 = (function (){var statearr_48167 = state_48164;
(statearr_48167[(7)] = inst_48152__$1);

return statearr_48167;
})();
if(cljs.core.truth_(inst_48152__$1)){
var statearr_48168_48180 = state_48164__$1;
(statearr_48168_48180[(1)] = (5));

} else {
var statearr_48169_48181 = state_48164__$1;
(statearr_48169_48181[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48165 === (5))){
var inst_48152 = (state_48164[(7)]);
var inst_48154 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48152);
var state_48164__$1 = state_48164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48164__$1,(8),inst_48154);
} else {
if((state_val_48165 === (6))){
var state_48164__$1 = state_48164;
var statearr_48170_48182 = state_48164__$1;
(statearr_48170_48182[(2)] = null);

(statearr_48170_48182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48165 === (7))){
var inst_48160 = (state_48164[(2)]);
var state_48164__$1 = state_48164;
var statearr_48171_48183 = state_48164__$1;
(statearr_48171_48183[(2)] = inst_48160);

(statearr_48171_48183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48165 === (8))){
var inst_48156 = (state_48164[(2)]);
var state_48164__$1 = (function (){var statearr_48172 = state_48164;
(statearr_48172[(8)] = inst_48156);

return statearr_48172;
})();
var statearr_48173_48184 = state_48164__$1;
(statearr_48173_48184[(2)] = null);

(statearr_48173_48184[(1)] = (2));


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
});})(c__43550__auto___48178,ch))
;
return ((function (switch__43455__auto__,c__43550__auto___48178,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__43456__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__43456__auto____0 = (function (){
var statearr_48174 = [null,null,null,null,null,null,null,null,null];
(statearr_48174[(0)] = figwheel$client$heads_up_plugin_$_state_machine__43456__auto__);

(statearr_48174[(1)] = (1));

return statearr_48174;
});
var figwheel$client$heads_up_plugin_$_state_machine__43456__auto____1 = (function (state_48164){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_48164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e48175){if((e48175 instanceof Object)){
var ex__43459__auto__ = e48175;
var statearr_48176_48185 = state_48164;
(statearr_48176_48185[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48186 = state_48164;
state_48164 = G__48186;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__43456__auto__ = function(state_48164){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__43456__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__43456__auto____1.call(this,state_48164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__43456__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__43456__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___48178,ch))
})();
var state__43552__auto__ = (function (){var statearr_48177 = f__43551__auto__.call(null);
(statearr_48177[(6)] = c__43550__auto___48178);

return statearr_48177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___48178,ch))
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
var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__){
return (function (state_48192){
var state_val_48193 = (state_48192[(1)]);
if((state_val_48193 === (1))){
var inst_48187 = cljs.core.async.timeout.call(null,(3000));
var state_48192__$1 = state_48192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48192__$1,(2),inst_48187);
} else {
if((state_val_48193 === (2))){
var inst_48189 = (state_48192[(2)]);
var inst_48190 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_48192__$1 = (function (){var statearr_48194 = state_48192;
(statearr_48194[(7)] = inst_48189);

return statearr_48194;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48192__$1,inst_48190);
} else {
return null;
}
}
});})(c__43550__auto__))
;
return ((function (switch__43455__auto__,c__43550__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__43456__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__43456__auto____0 = (function (){
var statearr_48195 = [null,null,null,null,null,null,null,null];
(statearr_48195[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__43456__auto__);

(statearr_48195[(1)] = (1));

return statearr_48195;
});
var figwheel$client$enforce_project_plugin_$_state_machine__43456__auto____1 = (function (state_48192){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_48192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e48196){if((e48196 instanceof Object)){
var ex__43459__auto__ = e48196;
var statearr_48197_48199 = state_48192;
(statearr_48197_48199[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48200 = state_48192;
state_48192 = G__48200;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__43456__auto__ = function(state_48192){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__43456__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__43456__auto____1.call(this,state_48192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__43456__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__43456__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__))
})();
var state__43552__auto__ = (function (){var statearr_48198 = f__43551__auto__.call(null);
(statearr_48198[(6)] = c__43550__auto__);

return statearr_48198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__))
);

return c__43550__auto__;
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
var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__,figwheel_version,temp__5735__auto__){
return (function (state_48207){
var state_val_48208 = (state_48207[(1)]);
if((state_val_48208 === (1))){
var inst_48201 = cljs.core.async.timeout.call(null,(2000));
var state_48207__$1 = state_48207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48207__$1,(2),inst_48201);
} else {
if((state_val_48208 === (2))){
var inst_48203 = (state_48207[(2)]);
var inst_48204 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_48205 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_48204);
var state_48207__$1 = (function (){var statearr_48209 = state_48207;
(statearr_48209[(7)] = inst_48203);

return statearr_48209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48207__$1,inst_48205);
} else {
return null;
}
}
});})(c__43550__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__43455__auto__,c__43550__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto____0 = (function (){
var statearr_48210 = [null,null,null,null,null,null,null,null];
(statearr_48210[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto__);

(statearr_48210[(1)] = (1));

return statearr_48210;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto____1 = (function (state_48207){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_48207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e48211){if((e48211 instanceof Object)){
var ex__43459__auto__ = e48211;
var statearr_48212_48214 = state_48207;
(statearr_48212_48214[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48215 = state_48207;
state_48207 = G__48215;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto__ = function(state_48207){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto____1.call(this,state_48207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__,figwheel_version,temp__5735__auto__))
})();
var state__43552__auto__ = (function (){var statearr_48213 = f__43551__auto__.call(null);
(statearr_48213[(6)] = c__43550__auto__);

return statearr_48213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__,figwheel_version,temp__5735__auto__))
);

return c__43550__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__48216){
var map__48217 = p__48216;
var map__48217__$1 = (((((!((map__48217 == null))))?(((((map__48217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48217):map__48217);
var file = cljs.core.get.call(null,map__48217__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__48217__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__48217__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__48219 = "";
var G__48219__$1 = (cljs.core.truth_(file)?[G__48219,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__48219);
var G__48219__$2 = (cljs.core.truth_(line)?[G__48219__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__48219__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__48219__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__48219__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__48220){
var map__48221 = p__48220;
var map__48221__$1 = (((((!((map__48221 == null))))?(((((map__48221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48221):map__48221);
var ed = map__48221__$1;
var exception_data = cljs.core.get.call(null,map__48221__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__48221__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_48224 = (function (){var G__48223 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48223)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__48223;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_48224);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__48225){
var map__48226 = p__48225;
var map__48226__$1 = (((((!((map__48226 == null))))?(((((map__48226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48226):map__48226);
var w = map__48226__$1;
var message = cljs.core.get.call(null,map__48226__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__48228 = cljs.core.seq.call(null,plugins);
var chunk__48229 = null;
var count__48230 = (0);
var i__48231 = (0);
while(true){
if((i__48231 < count__48230)){
var vec__48238 = cljs.core._nth.call(null,chunk__48229,i__48231);
var k = cljs.core.nth.call(null,vec__48238,(0),null);
var plugin = cljs.core.nth.call(null,vec__48238,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48244 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48228,chunk__48229,count__48230,i__48231,pl_48244,vec__48238,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_48244.call(null,msg_hist);
});})(seq__48228,chunk__48229,count__48230,i__48231,pl_48244,vec__48238,k,plugin))
);
} else {
}


var G__48245 = seq__48228;
var G__48246 = chunk__48229;
var G__48247 = count__48230;
var G__48248 = (i__48231 + (1));
seq__48228 = G__48245;
chunk__48229 = G__48246;
count__48230 = G__48247;
i__48231 = G__48248;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__48228);
if(temp__5735__auto__){
var seq__48228__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48228__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__48228__$1);
var G__48249 = cljs.core.chunk_rest.call(null,seq__48228__$1);
var G__48250 = c__4550__auto__;
var G__48251 = cljs.core.count.call(null,c__4550__auto__);
var G__48252 = (0);
seq__48228 = G__48249;
chunk__48229 = G__48250;
count__48230 = G__48251;
i__48231 = G__48252;
continue;
} else {
var vec__48241 = cljs.core.first.call(null,seq__48228__$1);
var k = cljs.core.nth.call(null,vec__48241,(0),null);
var plugin = cljs.core.nth.call(null,vec__48241,(1),null);
if(cljs.core.truth_(plugin)){
var pl_48253 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__48228,chunk__48229,count__48230,i__48231,pl_48253,vec__48241,k,plugin,seq__48228__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_48253.call(null,msg_hist);
});})(seq__48228,chunk__48229,count__48230,i__48231,pl_48253,vec__48241,k,plugin,seq__48228__$1,temp__5735__auto__))
);
} else {
}


var G__48254 = cljs.core.next.call(null,seq__48228__$1);
var G__48255 = null;
var G__48256 = (0);
var G__48257 = (0);
seq__48228 = G__48254;
chunk__48229 = G__48255;
count__48230 = G__48256;
i__48231 = G__48257;
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
var G__48259 = arguments.length;
switch (G__48259) {
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

var seq__48260_48265 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__48261_48266 = null;
var count__48262_48267 = (0);
var i__48263_48268 = (0);
while(true){
if((i__48263_48268 < count__48262_48267)){
var msg_48269 = cljs.core._nth.call(null,chunk__48261_48266,i__48263_48268);
figwheel.client.socket.handle_incoming_message.call(null,msg_48269);


var G__48270 = seq__48260_48265;
var G__48271 = chunk__48261_48266;
var G__48272 = count__48262_48267;
var G__48273 = (i__48263_48268 + (1));
seq__48260_48265 = G__48270;
chunk__48261_48266 = G__48271;
count__48262_48267 = G__48272;
i__48263_48268 = G__48273;
continue;
} else {
var temp__5735__auto___48274 = cljs.core.seq.call(null,seq__48260_48265);
if(temp__5735__auto___48274){
var seq__48260_48275__$1 = temp__5735__auto___48274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48260_48275__$1)){
var c__4550__auto___48276 = cljs.core.chunk_first.call(null,seq__48260_48275__$1);
var G__48277 = cljs.core.chunk_rest.call(null,seq__48260_48275__$1);
var G__48278 = c__4550__auto___48276;
var G__48279 = cljs.core.count.call(null,c__4550__auto___48276);
var G__48280 = (0);
seq__48260_48265 = G__48277;
chunk__48261_48266 = G__48278;
count__48262_48267 = G__48279;
i__48263_48268 = G__48280;
continue;
} else {
var msg_48281 = cljs.core.first.call(null,seq__48260_48275__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_48281);


var G__48282 = cljs.core.next.call(null,seq__48260_48275__$1);
var G__48283 = null;
var G__48284 = (0);
var G__48285 = (0);
seq__48260_48265 = G__48282;
chunk__48261_48266 = G__48283;
count__48262_48267 = G__48284;
i__48263_48268 = G__48285;
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
var len__4730__auto___48290 = arguments.length;
var i__4731__auto___48291 = (0);
while(true){
if((i__4731__auto___48291 < len__4730__auto___48290)){
args__4736__auto__.push((arguments[i__4731__auto___48291]));

var G__48292 = (i__4731__auto___48291 + (1));
i__4731__auto___48291 = G__48292;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__48287){
var map__48288 = p__48287;
var map__48288__$1 = (((((!((map__48288 == null))))?(((((map__48288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48288):map__48288);
var opts = map__48288__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq48286){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48286));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e48293){if((e48293 instanceof Error)){
var e = e48293;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e48293;

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
return (function (p__48294){
var map__48295 = p__48294;
var map__48295__$1 = (((((!((map__48295 == null))))?(((((map__48295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48295):map__48295);
var msg_name = cljs.core.get.call(null,map__48295__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1563183879467
