// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__47481){
var map__47482 = p__47481;
var map__47482__$1 = (((((!((map__47482 == null))))?(((((map__47482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47482):map__47482);
var m = map__47482__$1;
var n = cljs.core.get.call(null,map__47482__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__47482__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47484_47516 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47485_47517 = null;
var count__47486_47518 = (0);
var i__47487_47519 = (0);
while(true){
if((i__47487_47519 < count__47486_47518)){
var f_47520 = cljs.core._nth.call(null,chunk__47485_47517,i__47487_47519);
cljs.core.println.call(null,"  ",f_47520);


var G__47521 = seq__47484_47516;
var G__47522 = chunk__47485_47517;
var G__47523 = count__47486_47518;
var G__47524 = (i__47487_47519 + (1));
seq__47484_47516 = G__47521;
chunk__47485_47517 = G__47522;
count__47486_47518 = G__47523;
i__47487_47519 = G__47524;
continue;
} else {
var temp__5735__auto___47525 = cljs.core.seq.call(null,seq__47484_47516);
if(temp__5735__auto___47525){
var seq__47484_47526__$1 = temp__5735__auto___47525;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47484_47526__$1)){
var c__4550__auto___47527 = cljs.core.chunk_first.call(null,seq__47484_47526__$1);
var G__47528 = cljs.core.chunk_rest.call(null,seq__47484_47526__$1);
var G__47529 = c__4550__auto___47527;
var G__47530 = cljs.core.count.call(null,c__4550__auto___47527);
var G__47531 = (0);
seq__47484_47516 = G__47528;
chunk__47485_47517 = G__47529;
count__47486_47518 = G__47530;
i__47487_47519 = G__47531;
continue;
} else {
var f_47532 = cljs.core.first.call(null,seq__47484_47526__$1);
cljs.core.println.call(null,"  ",f_47532);


var G__47533 = cljs.core.next.call(null,seq__47484_47526__$1);
var G__47534 = null;
var G__47535 = (0);
var G__47536 = (0);
seq__47484_47516 = G__47533;
chunk__47485_47517 = G__47534;
count__47486_47518 = G__47535;
i__47487_47519 = G__47536;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47537 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47537);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47537)))?cljs.core.second.call(null,arglists_47537):arglists_47537));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__47488_47538 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47489_47539 = null;
var count__47490_47540 = (0);
var i__47491_47541 = (0);
while(true){
if((i__47491_47541 < count__47490_47540)){
var vec__47502_47542 = cljs.core._nth.call(null,chunk__47489_47539,i__47491_47541);
var name_47543 = cljs.core.nth.call(null,vec__47502_47542,(0),null);
var map__47505_47544 = cljs.core.nth.call(null,vec__47502_47542,(1),null);
var map__47505_47545__$1 = (((((!((map__47505_47544 == null))))?(((((map__47505_47544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47505_47544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47505_47544):map__47505_47544);
var doc_47546 = cljs.core.get.call(null,map__47505_47545__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47547 = cljs.core.get.call(null,map__47505_47545__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47543);

cljs.core.println.call(null," ",arglists_47547);

if(cljs.core.truth_(doc_47546)){
cljs.core.println.call(null," ",doc_47546);
} else {
}


var G__47548 = seq__47488_47538;
var G__47549 = chunk__47489_47539;
var G__47550 = count__47490_47540;
var G__47551 = (i__47491_47541 + (1));
seq__47488_47538 = G__47548;
chunk__47489_47539 = G__47549;
count__47490_47540 = G__47550;
i__47491_47541 = G__47551;
continue;
} else {
var temp__5735__auto___47552 = cljs.core.seq.call(null,seq__47488_47538);
if(temp__5735__auto___47552){
var seq__47488_47553__$1 = temp__5735__auto___47552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47488_47553__$1)){
var c__4550__auto___47554 = cljs.core.chunk_first.call(null,seq__47488_47553__$1);
var G__47555 = cljs.core.chunk_rest.call(null,seq__47488_47553__$1);
var G__47556 = c__4550__auto___47554;
var G__47557 = cljs.core.count.call(null,c__4550__auto___47554);
var G__47558 = (0);
seq__47488_47538 = G__47555;
chunk__47489_47539 = G__47556;
count__47490_47540 = G__47557;
i__47491_47541 = G__47558;
continue;
} else {
var vec__47507_47559 = cljs.core.first.call(null,seq__47488_47553__$1);
var name_47560 = cljs.core.nth.call(null,vec__47507_47559,(0),null);
var map__47510_47561 = cljs.core.nth.call(null,vec__47507_47559,(1),null);
var map__47510_47562__$1 = (((((!((map__47510_47561 == null))))?(((((map__47510_47561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47510_47561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47510_47561):map__47510_47561);
var doc_47563 = cljs.core.get.call(null,map__47510_47562__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_47564 = cljs.core.get.call(null,map__47510_47562__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_47560);

cljs.core.println.call(null," ",arglists_47564);

if(cljs.core.truth_(doc_47563)){
cljs.core.println.call(null," ",doc_47563);
} else {
}


var G__47565 = cljs.core.next.call(null,seq__47488_47553__$1);
var G__47566 = null;
var G__47567 = (0);
var G__47568 = (0);
seq__47488_47538 = G__47565;
chunk__47489_47539 = G__47566;
count__47490_47540 = G__47567;
i__47491_47541 = G__47568;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__47512 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__47513 = null;
var count__47514 = (0);
var i__47515 = (0);
while(true){
if((i__47515 < count__47514)){
var role = cljs.core._nth.call(null,chunk__47513,i__47515);
var temp__5735__auto___47569__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___47569__$1)){
var spec_47570 = temp__5735__auto___47569__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_47570));
} else {
}


var G__47571 = seq__47512;
var G__47572 = chunk__47513;
var G__47573 = count__47514;
var G__47574 = (i__47515 + (1));
seq__47512 = G__47571;
chunk__47513 = G__47572;
count__47514 = G__47573;
i__47515 = G__47574;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__47512);
if(temp__5735__auto____$1){
var seq__47512__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47512__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__47512__$1);
var G__47575 = cljs.core.chunk_rest.call(null,seq__47512__$1);
var G__47576 = c__4550__auto__;
var G__47577 = cljs.core.count.call(null,c__4550__auto__);
var G__47578 = (0);
seq__47512 = G__47575;
chunk__47513 = G__47576;
count__47514 = G__47577;
i__47515 = G__47578;
continue;
} else {
var role = cljs.core.first.call(null,seq__47512__$1);
var temp__5735__auto___47579__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___47579__$2)){
var spec_47580 = temp__5735__auto___47579__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_47580));
} else {
}


var G__47581 = cljs.core.next.call(null,seq__47512__$1);
var G__47582 = null;
var G__47583 = (0);
var G__47584 = (0);
seq__47512 = G__47581;
chunk__47513 = G__47582;
count__47514 = G__47583;
i__47515 = G__47584;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__47585 = cljs.core.conj.call(null,via,t);
var G__47586 = cljs.core.ex_cause.call(null,t);
via = G__47585;
t = G__47586;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__47589 = datafied_throwable;
var map__47589__$1 = (((((!((map__47589 == null))))?(((((map__47589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47589):map__47589);
var via = cljs.core.get.call(null,map__47589__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__47589__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__47589__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__47590 = cljs.core.last.call(null,via);
var map__47590__$1 = (((((!((map__47590 == null))))?(((((map__47590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47590):map__47590);
var type = cljs.core.get.call(null,map__47590__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__47590__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__47590__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__47591 = data;
var map__47591__$1 = (((((!((map__47591 == null))))?(((((map__47591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47591):map__47591);
var problems = cljs.core.get.call(null,map__47591__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__47591__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__47591__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__47592 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__47592__$1 = (((((!((map__47592 == null))))?(((((map__47592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47592):map__47592);
var top_data = map__47592__$1;
var source = cljs.core.get.call(null,map__47592__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__47597 = phase;
var G__47597__$1 = (((G__47597 instanceof cljs.core.Keyword))?G__47597.fqn:null);
switch (G__47597__$1) {
case "read-source":
var map__47598 = data;
var map__47598__$1 = (((((!((map__47598 == null))))?(((((map__47598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47598):map__47598);
var line = cljs.core.get.call(null,map__47598__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__47598__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__47600 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__47600__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__47600,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47600);
var G__47600__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__47600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47600__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__47600__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47600__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__47601 = top_data;
var G__47601__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__47601,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__47601);
var G__47601__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__47601__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__47601__$1);
var G__47601__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__47601__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47601__$2);
var G__47601__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__47601__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47601__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__47601__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47601__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__47602 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__47602,(0),null);
var method = cljs.core.nth.call(null,vec__47602,(1),null);
var file = cljs.core.nth.call(null,vec__47602,(2),null);
var line = cljs.core.nth.call(null,vec__47602,(3),null);
var G__47605 = top_data;
var G__47605__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__47605,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__47605);
var G__47605__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__47605__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__47605__$1);
var G__47605__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__47605__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__47605__$2);
var G__47605__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__47605__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__47605__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__47605__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__47605__$4;
}

break;
case "execution":
var vec__47606 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__47606,(0),null);
var method = cljs.core.nth.call(null,vec__47606,(1),null);
var file = cljs.core.nth.call(null,vec__47606,(2),null);
var line = cljs.core.nth.call(null,vec__47606,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__47606,source__$1,method,file,line,G__47597,G__47597__$1,map__47589,map__47589__$1,via,trace,phase,map__47590,map__47590__$1,type,message,data,map__47591,map__47591__$1,problems,fn,caller,map__47592,map__47592__$1,top_data,source){
return (function (p1__47588_SHARP_){
var or__4131__auto__ = (p1__47588_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__47588_SHARP_);
}
});})(vec__47606,source__$1,method,file,line,G__47597,G__47597__$1,map__47589,map__47589__$1,via,trace,phase,map__47590,map__47590__$1,type,message,data,map__47591,map__47591__$1,problems,fn,caller,map__47592,map__47592__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__47609 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__47609__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__47609,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__47609);
var G__47609__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__47609__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__47609__$1);
var G__47609__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__47609__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__47609__$2);
var G__47609__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__47609__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__47609__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__47609__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__47609__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47597__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__47613){
var map__47614 = p__47613;
var map__47614__$1 = (((((!((map__47614 == null))))?(((((map__47614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47614):map__47614);
var triage_data = map__47614__$1;
var phase = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__47616 = phase;
var G__47616__$1 = (((G__47616 instanceof cljs.core.Keyword))?G__47616.fqn:null);
switch (G__47616__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47617_47626 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47618_47627 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47619_47628 = true;
var _STAR_print_fn_STAR__temp_val__47620_47629 = ((function (_STAR_print_newline_STAR__orig_val__47617_47626,_STAR_print_fn_STAR__orig_val__47618_47627,_STAR_print_newline_STAR__temp_val__47619_47628,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__47617_47626,_STAR_print_fn_STAR__orig_val__47618_47627,_STAR_print_newline_STAR__temp_val__47619_47628,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47619_47628;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47620_47629;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__47617_47626,_STAR_print_fn_STAR__orig_val__47618_47627,_STAR_print_newline_STAR__temp_val__47619_47628,_STAR_print_fn_STAR__temp_val__47620_47629,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__47617_47626,_STAR_print_fn_STAR__orig_val__47618_47627,_STAR_print_newline_STAR__temp_val__47619_47628,_STAR_print_fn_STAR__temp_val__47620_47629,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__47611_SHARP_){
return cljs.core.dissoc.call(null,p1__47611_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__47617_47626,_STAR_print_fn_STAR__orig_val__47618_47627,_STAR_print_newline_STAR__temp_val__47619_47628,_STAR_print_fn_STAR__temp_val__47620_47629,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__47617_47626,_STAR_print_fn_STAR__orig_val__47618_47627,_STAR_print_newline_STAR__temp_val__47619_47628,_STAR_print_fn_STAR__temp_val__47620_47629,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47618_47627;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47617_47626;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__47621_47630 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__47622_47631 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__47623_47632 = true;
var _STAR_print_fn_STAR__temp_val__47624_47633 = ((function (_STAR_print_newline_STAR__orig_val__47621_47630,_STAR_print_fn_STAR__orig_val__47622_47631,_STAR_print_newline_STAR__temp_val__47623_47632,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__47621_47630,_STAR_print_fn_STAR__orig_val__47622_47631,_STAR_print_newline_STAR__temp_val__47623_47632,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__47623_47632;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__47624_47633;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__47621_47630,_STAR_print_fn_STAR__orig_val__47622_47631,_STAR_print_newline_STAR__temp_val__47623_47632,_STAR_print_fn_STAR__temp_val__47624_47633,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__47621_47630,_STAR_print_fn_STAR__orig_val__47622_47631,_STAR_print_newline_STAR__temp_val__47623_47632,_STAR_print_fn_STAR__temp_val__47624_47633,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__47612_SHARP_){
return cljs.core.dissoc.call(null,p1__47612_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__47621_47630,_STAR_print_fn_STAR__orig_val__47622_47631,_STAR_print_newline_STAR__temp_val__47623_47632,_STAR_print_fn_STAR__temp_val__47624_47633,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__47621_47630,_STAR_print_fn_STAR__orig_val__47622_47631,_STAR_print_newline_STAR__temp_val__47623_47632,_STAR_print_fn_STAR__temp_val__47624_47633,sb__4661__auto__,G__47616,G__47616__$1,loc,class_name,simple_class,cause_type,format,map__47614,map__47614__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__47622_47631;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__47621_47630;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47616__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1563183879091
