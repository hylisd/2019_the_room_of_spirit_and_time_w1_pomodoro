// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__44769){
var map__44770 = p__44769;
var map__44770__$1 = (((((!((map__44770 == null))))?(((((map__44770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44770):map__44770);
var m = map__44770__$1;
var n = cljs.core.get.call(null,map__44770__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__44770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__44772_44804 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44773_44805 = null;
var count__44774_44806 = (0);
var i__44775_44807 = (0);
while(true){
if((i__44775_44807 < count__44774_44806)){
var f_44808 = cljs.core._nth.call(null,chunk__44773_44805,i__44775_44807);
cljs.core.println.call(null,"  ",f_44808);


var G__44809 = seq__44772_44804;
var G__44810 = chunk__44773_44805;
var G__44811 = count__44774_44806;
var G__44812 = (i__44775_44807 + (1));
seq__44772_44804 = G__44809;
chunk__44773_44805 = G__44810;
count__44774_44806 = G__44811;
i__44775_44807 = G__44812;
continue;
} else {
var temp__5735__auto___44813 = cljs.core.seq.call(null,seq__44772_44804);
if(temp__5735__auto___44813){
var seq__44772_44814__$1 = temp__5735__auto___44813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44772_44814__$1)){
var c__4550__auto___44815 = cljs.core.chunk_first.call(null,seq__44772_44814__$1);
var G__44816 = cljs.core.chunk_rest.call(null,seq__44772_44814__$1);
var G__44817 = c__4550__auto___44815;
var G__44818 = cljs.core.count.call(null,c__4550__auto___44815);
var G__44819 = (0);
seq__44772_44804 = G__44816;
chunk__44773_44805 = G__44817;
count__44774_44806 = G__44818;
i__44775_44807 = G__44819;
continue;
} else {
var f_44820 = cljs.core.first.call(null,seq__44772_44814__$1);
cljs.core.println.call(null,"  ",f_44820);


var G__44821 = cljs.core.next.call(null,seq__44772_44814__$1);
var G__44822 = null;
var G__44823 = (0);
var G__44824 = (0);
seq__44772_44804 = G__44821;
chunk__44773_44805 = G__44822;
count__44774_44806 = G__44823;
i__44775_44807 = G__44824;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_44825 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_44825);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_44825)))?cljs.core.second.call(null,arglists_44825):arglists_44825));
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
var seq__44776_44826 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__44777_44827 = null;
var count__44778_44828 = (0);
var i__44779_44829 = (0);
while(true){
if((i__44779_44829 < count__44778_44828)){
var vec__44790_44830 = cljs.core._nth.call(null,chunk__44777_44827,i__44779_44829);
var name_44831 = cljs.core.nth.call(null,vec__44790_44830,(0),null);
var map__44793_44832 = cljs.core.nth.call(null,vec__44790_44830,(1),null);
var map__44793_44833__$1 = (((((!((map__44793_44832 == null))))?(((((map__44793_44832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44793_44832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44793_44832):map__44793_44832);
var doc_44834 = cljs.core.get.call(null,map__44793_44833__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44835 = cljs.core.get.call(null,map__44793_44833__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44831);

cljs.core.println.call(null," ",arglists_44835);

if(cljs.core.truth_(doc_44834)){
cljs.core.println.call(null," ",doc_44834);
} else {
}


var G__44836 = seq__44776_44826;
var G__44837 = chunk__44777_44827;
var G__44838 = count__44778_44828;
var G__44839 = (i__44779_44829 + (1));
seq__44776_44826 = G__44836;
chunk__44777_44827 = G__44837;
count__44778_44828 = G__44838;
i__44779_44829 = G__44839;
continue;
} else {
var temp__5735__auto___44840 = cljs.core.seq.call(null,seq__44776_44826);
if(temp__5735__auto___44840){
var seq__44776_44841__$1 = temp__5735__auto___44840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44776_44841__$1)){
var c__4550__auto___44842 = cljs.core.chunk_first.call(null,seq__44776_44841__$1);
var G__44843 = cljs.core.chunk_rest.call(null,seq__44776_44841__$1);
var G__44844 = c__4550__auto___44842;
var G__44845 = cljs.core.count.call(null,c__4550__auto___44842);
var G__44846 = (0);
seq__44776_44826 = G__44843;
chunk__44777_44827 = G__44844;
count__44778_44828 = G__44845;
i__44779_44829 = G__44846;
continue;
} else {
var vec__44795_44847 = cljs.core.first.call(null,seq__44776_44841__$1);
var name_44848 = cljs.core.nth.call(null,vec__44795_44847,(0),null);
var map__44798_44849 = cljs.core.nth.call(null,vec__44795_44847,(1),null);
var map__44798_44850__$1 = (((((!((map__44798_44849 == null))))?(((((map__44798_44849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44798_44849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44798_44849):map__44798_44849);
var doc_44851 = cljs.core.get.call(null,map__44798_44850__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_44852 = cljs.core.get.call(null,map__44798_44850__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_44848);

cljs.core.println.call(null," ",arglists_44852);

if(cljs.core.truth_(doc_44851)){
cljs.core.println.call(null," ",doc_44851);
} else {
}


var G__44853 = cljs.core.next.call(null,seq__44776_44841__$1);
var G__44854 = null;
var G__44855 = (0);
var G__44856 = (0);
seq__44776_44826 = G__44853;
chunk__44777_44827 = G__44854;
count__44778_44828 = G__44855;
i__44779_44829 = G__44856;
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

var seq__44800 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__44801 = null;
var count__44802 = (0);
var i__44803 = (0);
while(true){
if((i__44803 < count__44802)){
var role = cljs.core._nth.call(null,chunk__44801,i__44803);
var temp__5735__auto___44857__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44857__$1)){
var spec_44858 = temp__5735__auto___44857__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_44858));
} else {
}


var G__44859 = seq__44800;
var G__44860 = chunk__44801;
var G__44861 = count__44802;
var G__44862 = (i__44803 + (1));
seq__44800 = G__44859;
chunk__44801 = G__44860;
count__44802 = G__44861;
i__44803 = G__44862;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__44800);
if(temp__5735__auto____$1){
var seq__44800__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44800__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44800__$1);
var G__44863 = cljs.core.chunk_rest.call(null,seq__44800__$1);
var G__44864 = c__4550__auto__;
var G__44865 = cljs.core.count.call(null,c__4550__auto__);
var G__44866 = (0);
seq__44800 = G__44863;
chunk__44801 = G__44864;
count__44802 = G__44865;
i__44803 = G__44866;
continue;
} else {
var role = cljs.core.first.call(null,seq__44800__$1);
var temp__5735__auto___44867__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___44867__$2)){
var spec_44868 = temp__5735__auto___44867__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_44868));
} else {
}


var G__44869 = cljs.core.next.call(null,seq__44800__$1);
var G__44870 = null;
var G__44871 = (0);
var G__44872 = (0);
seq__44800 = G__44869;
chunk__44801 = G__44870;
count__44802 = G__44871;
i__44803 = G__44872;
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
var G__44873 = cljs.core.conj.call(null,via,t);
var G__44874 = cljs.core.ex_cause.call(null,t);
via = G__44873;
t = G__44874;
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
var map__44877 = datafied_throwable;
var map__44877__$1 = (((((!((map__44877 == null))))?(((((map__44877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44877):map__44877);
var via = cljs.core.get.call(null,map__44877__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__44877__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__44877__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__44878 = cljs.core.last.call(null,via);
var map__44878__$1 = (((((!((map__44878 == null))))?(((((map__44878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44878):map__44878);
var type = cljs.core.get.call(null,map__44878__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__44878__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__44878__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__44879 = data;
var map__44879__$1 = (((((!((map__44879 == null))))?(((((map__44879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44879):map__44879);
var problems = cljs.core.get.call(null,map__44879__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__44879__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__44879__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__44880 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__44880__$1 = (((((!((map__44880 == null))))?(((((map__44880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44880):map__44880);
var top_data = map__44880__$1;
var source = cljs.core.get.call(null,map__44880__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__44885 = phase;
var G__44885__$1 = (((G__44885 instanceof cljs.core.Keyword))?G__44885.fqn:null);
switch (G__44885__$1) {
case "read-source":
var map__44886 = data;
var map__44886__$1 = (((((!((map__44886 == null))))?(((((map__44886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44886):map__44886);
var line = cljs.core.get.call(null,map__44886__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__44886__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__44888 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__44888__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__44888,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44888);
var G__44888__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__44888__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44888__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__44888__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44888__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__44889 = top_data;
var G__44889__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__44889,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__44889);
var G__44889__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__44889__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__44889__$1);
var G__44889__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__44889__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44889__$2);
var G__44889__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__44889__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44889__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__44889__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44889__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__44890 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__44890,(0),null);
var method = cljs.core.nth.call(null,vec__44890,(1),null);
var file = cljs.core.nth.call(null,vec__44890,(2),null);
var line = cljs.core.nth.call(null,vec__44890,(3),null);
var G__44893 = top_data;
var G__44893__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__44893,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__44893);
var G__44893__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__44893__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__44893__$1);
var G__44893__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__44893__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__44893__$2);
var G__44893__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__44893__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__44893__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__44893__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__44893__$4;
}

break;
case "execution":
var vec__44894 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__44894,(0),null);
var method = cljs.core.nth.call(null,vec__44894,(1),null);
var file = cljs.core.nth.call(null,vec__44894,(2),null);
var line = cljs.core.nth.call(null,vec__44894,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__44894,source__$1,method,file,line,G__44885,G__44885__$1,map__44877,map__44877__$1,via,trace,phase,map__44878,map__44878__$1,type,message,data,map__44879,map__44879__$1,problems,fn,caller,map__44880,map__44880__$1,top_data,source){
return (function (p1__44876_SHARP_){
var or__4131__auto__ = (p1__44876_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__44876_SHARP_);
}
});})(vec__44894,source__$1,method,file,line,G__44885,G__44885__$1,map__44877,map__44877__$1,via,trace,phase,map__44878,map__44878__$1,type,message,data,map__44879,map__44879__$1,problems,fn,caller,map__44880,map__44880__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__44897 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__44897__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__44897,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__44897);
var G__44897__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__44897__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__44897__$1);
var G__44897__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__44897__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__44897__$2);
var G__44897__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__44897__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__44897__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__44897__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__44897__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44885__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__44901){
var map__44902 = p__44901;
var map__44902__$1 = (((((!((map__44902 == null))))?(((((map__44902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44902):map__44902);
var triage_data = map__44902__$1;
var phase = cljs.core.get.call(null,map__44902__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__44902__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__44902__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__44902__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__44902__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__44902__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__44902__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__44902__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__44904 = phase;
var G__44904__$1 = (((G__44904 instanceof cljs.core.Keyword))?G__44904.fqn:null);
switch (G__44904__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__44905_44914 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44906_44915 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44907_44916 = true;
var _STAR_print_fn_STAR__temp_val__44908_44917 = ((function (_STAR_print_newline_STAR__orig_val__44905_44914,_STAR_print_fn_STAR__orig_val__44906_44915,_STAR_print_newline_STAR__temp_val__44907_44916,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44905_44914,_STAR_print_fn_STAR__orig_val__44906_44915,_STAR_print_newline_STAR__temp_val__44907_44916,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44907_44916;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44908_44917;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44905_44914,_STAR_print_fn_STAR__orig_val__44906_44915,_STAR_print_newline_STAR__temp_val__44907_44916,_STAR_print_fn_STAR__temp_val__44908_44917,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__44905_44914,_STAR_print_fn_STAR__orig_val__44906_44915,_STAR_print_newline_STAR__temp_val__44907_44916,_STAR_print_fn_STAR__temp_val__44908_44917,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44899_SHARP_){
return cljs.core.dissoc.call(null,p1__44899_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44905_44914,_STAR_print_fn_STAR__orig_val__44906_44915,_STAR_print_newline_STAR__temp_val__44907_44916,_STAR_print_fn_STAR__temp_val__44908_44917,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44905_44914,_STAR_print_fn_STAR__orig_val__44906_44915,_STAR_print_newline_STAR__temp_val__44907_44916,_STAR_print_fn_STAR__temp_val__44908_44917,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44906_44915;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44905_44914;
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
var _STAR_print_newline_STAR__orig_val__44909_44918 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__44910_44919 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__44911_44920 = true;
var _STAR_print_fn_STAR__temp_val__44912_44921 = ((function (_STAR_print_newline_STAR__orig_val__44909_44918,_STAR_print_fn_STAR__orig_val__44910_44919,_STAR_print_newline_STAR__temp_val__44911_44920,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__44909_44918,_STAR_print_fn_STAR__orig_val__44910_44919,_STAR_print_newline_STAR__temp_val__44911_44920,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__44911_44920;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__44912_44921;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__44909_44918,_STAR_print_fn_STAR__orig_val__44910_44919,_STAR_print_newline_STAR__temp_val__44911_44920,_STAR_print_fn_STAR__temp_val__44912_44921,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__44909_44918,_STAR_print_fn_STAR__orig_val__44910_44919,_STAR_print_newline_STAR__temp_val__44911_44920,_STAR_print_fn_STAR__temp_val__44912_44921,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__44900_SHARP_){
return cljs.core.dissoc.call(null,p1__44900_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__44909_44918,_STAR_print_fn_STAR__orig_val__44910_44919,_STAR_print_newline_STAR__temp_val__44911_44920,_STAR_print_fn_STAR__temp_val__44912_44921,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__44909_44918,_STAR_print_fn_STAR__orig_val__44910_44919,_STAR_print_newline_STAR__temp_val__44911_44920,_STAR_print_fn_STAR__temp_val__44912_44921,sb__4661__auto__,G__44904,G__44904__$1,loc,class_name,simple_class,cause_type,format,map__44902,map__44902__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__44910_44919;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__44909_44918;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44904__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1562982107109
