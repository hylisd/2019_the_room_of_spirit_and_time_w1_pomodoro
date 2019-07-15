// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__48220){
var map__48221 = p__48220;
var map__48221__$1 = (((((!((map__48221 == null))))?(((((map__48221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48221):map__48221);
var m = map__48221__$1;
var n = cljs.core.get.call(null,map__48221__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__48221__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__48223_48255 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48224_48256 = null;
var count__48225_48257 = (0);
var i__48226_48258 = (0);
while(true){
if((i__48226_48258 < count__48225_48257)){
var f_48259 = cljs.core._nth.call(null,chunk__48224_48256,i__48226_48258);
cljs.core.println.call(null,"  ",f_48259);


var G__48260 = seq__48223_48255;
var G__48261 = chunk__48224_48256;
var G__48262 = count__48225_48257;
var G__48263 = (i__48226_48258 + (1));
seq__48223_48255 = G__48260;
chunk__48224_48256 = G__48261;
count__48225_48257 = G__48262;
i__48226_48258 = G__48263;
continue;
} else {
var temp__5735__auto___48264 = cljs.core.seq.call(null,seq__48223_48255);
if(temp__5735__auto___48264){
var seq__48223_48265__$1 = temp__5735__auto___48264;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48223_48265__$1)){
var c__4550__auto___48266 = cljs.core.chunk_first.call(null,seq__48223_48265__$1);
var G__48267 = cljs.core.chunk_rest.call(null,seq__48223_48265__$1);
var G__48268 = c__4550__auto___48266;
var G__48269 = cljs.core.count.call(null,c__4550__auto___48266);
var G__48270 = (0);
seq__48223_48255 = G__48267;
chunk__48224_48256 = G__48268;
count__48225_48257 = G__48269;
i__48226_48258 = G__48270;
continue;
} else {
var f_48271 = cljs.core.first.call(null,seq__48223_48265__$1);
cljs.core.println.call(null,"  ",f_48271);


var G__48272 = cljs.core.next.call(null,seq__48223_48265__$1);
var G__48273 = null;
var G__48274 = (0);
var G__48275 = (0);
seq__48223_48255 = G__48272;
chunk__48224_48256 = G__48273;
count__48225_48257 = G__48274;
i__48226_48258 = G__48275;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_48276 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_48276);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_48276)))?cljs.core.second.call(null,arglists_48276):arglists_48276));
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
var seq__48227_48277 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__48228_48278 = null;
var count__48229_48279 = (0);
var i__48230_48280 = (0);
while(true){
if((i__48230_48280 < count__48229_48279)){
var vec__48241_48281 = cljs.core._nth.call(null,chunk__48228_48278,i__48230_48280);
var name_48282 = cljs.core.nth.call(null,vec__48241_48281,(0),null);
var map__48244_48283 = cljs.core.nth.call(null,vec__48241_48281,(1),null);
var map__48244_48284__$1 = (((((!((map__48244_48283 == null))))?(((((map__48244_48283.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48244_48283.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48244_48283):map__48244_48283);
var doc_48285 = cljs.core.get.call(null,map__48244_48284__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48286 = cljs.core.get.call(null,map__48244_48284__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48282);

cljs.core.println.call(null," ",arglists_48286);

if(cljs.core.truth_(doc_48285)){
cljs.core.println.call(null," ",doc_48285);
} else {
}


var G__48287 = seq__48227_48277;
var G__48288 = chunk__48228_48278;
var G__48289 = count__48229_48279;
var G__48290 = (i__48230_48280 + (1));
seq__48227_48277 = G__48287;
chunk__48228_48278 = G__48288;
count__48229_48279 = G__48289;
i__48230_48280 = G__48290;
continue;
} else {
var temp__5735__auto___48291 = cljs.core.seq.call(null,seq__48227_48277);
if(temp__5735__auto___48291){
var seq__48227_48292__$1 = temp__5735__auto___48291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48227_48292__$1)){
var c__4550__auto___48293 = cljs.core.chunk_first.call(null,seq__48227_48292__$1);
var G__48294 = cljs.core.chunk_rest.call(null,seq__48227_48292__$1);
var G__48295 = c__4550__auto___48293;
var G__48296 = cljs.core.count.call(null,c__4550__auto___48293);
var G__48297 = (0);
seq__48227_48277 = G__48294;
chunk__48228_48278 = G__48295;
count__48229_48279 = G__48296;
i__48230_48280 = G__48297;
continue;
} else {
var vec__48246_48298 = cljs.core.first.call(null,seq__48227_48292__$1);
var name_48299 = cljs.core.nth.call(null,vec__48246_48298,(0),null);
var map__48249_48300 = cljs.core.nth.call(null,vec__48246_48298,(1),null);
var map__48249_48301__$1 = (((((!((map__48249_48300 == null))))?(((((map__48249_48300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48249_48300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48249_48300):map__48249_48300);
var doc_48302 = cljs.core.get.call(null,map__48249_48301__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_48303 = cljs.core.get.call(null,map__48249_48301__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_48299);

cljs.core.println.call(null," ",arglists_48303);

if(cljs.core.truth_(doc_48302)){
cljs.core.println.call(null," ",doc_48302);
} else {
}


var G__48304 = cljs.core.next.call(null,seq__48227_48292__$1);
var G__48305 = null;
var G__48306 = (0);
var G__48307 = (0);
seq__48227_48277 = G__48304;
chunk__48228_48278 = G__48305;
count__48229_48279 = G__48306;
i__48230_48280 = G__48307;
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

var seq__48251 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__48252 = null;
var count__48253 = (0);
var i__48254 = (0);
while(true){
if((i__48254 < count__48253)){
var role = cljs.core._nth.call(null,chunk__48252,i__48254);
var temp__5735__auto___48308__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___48308__$1)){
var spec_48309 = temp__5735__auto___48308__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48309));
} else {
}


var G__48310 = seq__48251;
var G__48311 = chunk__48252;
var G__48312 = count__48253;
var G__48313 = (i__48254 + (1));
seq__48251 = G__48310;
chunk__48252 = G__48311;
count__48253 = G__48312;
i__48254 = G__48313;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__48251);
if(temp__5735__auto____$1){
var seq__48251__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48251__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__48251__$1);
var G__48314 = cljs.core.chunk_rest.call(null,seq__48251__$1);
var G__48315 = c__4550__auto__;
var G__48316 = cljs.core.count.call(null,c__4550__auto__);
var G__48317 = (0);
seq__48251 = G__48314;
chunk__48252 = G__48315;
count__48253 = G__48316;
i__48254 = G__48317;
continue;
} else {
var role = cljs.core.first.call(null,seq__48251__$1);
var temp__5735__auto___48318__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___48318__$2)){
var spec_48319 = temp__5735__auto___48318__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_48319));
} else {
}


var G__48320 = cljs.core.next.call(null,seq__48251__$1);
var G__48321 = null;
var G__48322 = (0);
var G__48323 = (0);
seq__48251 = G__48320;
chunk__48252 = G__48321;
count__48253 = G__48322;
i__48254 = G__48323;
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
var G__48324 = cljs.core.conj.call(null,via,t);
var G__48325 = cljs.core.ex_cause.call(null,t);
via = G__48324;
t = G__48325;
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
var map__48328 = datafied_throwable;
var map__48328__$1 = (((((!((map__48328 == null))))?(((((map__48328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48328):map__48328);
var via = cljs.core.get.call(null,map__48328__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__48328__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__48328__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__48329 = cljs.core.last.call(null,via);
var map__48329__$1 = (((((!((map__48329 == null))))?(((((map__48329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48329):map__48329);
var type = cljs.core.get.call(null,map__48329__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__48329__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__48329__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__48330 = data;
var map__48330__$1 = (((((!((map__48330 == null))))?(((((map__48330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48330):map__48330);
var problems = cljs.core.get.call(null,map__48330__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__48330__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__48330__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__48331 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__48331__$1 = (((((!((map__48331 == null))))?(((((map__48331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48331):map__48331);
var top_data = map__48331__$1;
var source = cljs.core.get.call(null,map__48331__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__48336 = phase;
var G__48336__$1 = (((G__48336 instanceof cljs.core.Keyword))?G__48336.fqn:null);
switch (G__48336__$1) {
case "read-source":
var map__48337 = data;
var map__48337__$1 = (((((!((map__48337 == null))))?(((((map__48337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48337):map__48337);
var line = cljs.core.get.call(null,map__48337__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__48337__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__48339 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__48339__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__48339,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48339);
var G__48339__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__48339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48339__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__48339__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48339__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__48340 = top_data;
var G__48340__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__48340,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__48340);
var G__48340__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__48340__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__48340__$1);
var G__48340__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__48340__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48340__$2);
var G__48340__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__48340__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48340__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__48340__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48340__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__48341 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__48341,(0),null);
var method = cljs.core.nth.call(null,vec__48341,(1),null);
var file = cljs.core.nth.call(null,vec__48341,(2),null);
var line = cljs.core.nth.call(null,vec__48341,(3),null);
var G__48344 = top_data;
var G__48344__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__48344,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__48344);
var G__48344__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__48344__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__48344__$1);
var G__48344__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__48344__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__48344__$2);
var G__48344__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__48344__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__48344__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__48344__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__48344__$4;
}

break;
case "execution":
var vec__48345 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__48345,(0),null);
var method = cljs.core.nth.call(null,vec__48345,(1),null);
var file = cljs.core.nth.call(null,vec__48345,(2),null);
var line = cljs.core.nth.call(null,vec__48345,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__48345,source__$1,method,file,line,G__48336,G__48336__$1,map__48328,map__48328__$1,via,trace,phase,map__48329,map__48329__$1,type,message,data,map__48330,map__48330__$1,problems,fn,caller,map__48331,map__48331__$1,top_data,source){
return (function (p1__48327_SHARP_){
var or__4131__auto__ = (p1__48327_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__48327_SHARP_);
}
});})(vec__48345,source__$1,method,file,line,G__48336,G__48336__$1,map__48328,map__48328__$1,via,trace,phase,map__48329,map__48329__$1,type,message,data,map__48330,map__48330__$1,problems,fn,caller,map__48331,map__48331__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__48348 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__48348__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__48348,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__48348);
var G__48348__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__48348__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__48348__$1);
var G__48348__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__48348__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__48348__$2);
var G__48348__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__48348__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__48348__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__48348__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__48348__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48336__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__48352){
var map__48353 = p__48352;
var map__48353__$1 = (((((!((map__48353 == null))))?(((((map__48353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48353):map__48353);
var triage_data = map__48353__$1;
var phase = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__48353__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__48355 = phase;
var G__48355__$1 = (((G__48355 instanceof cljs.core.Keyword))?G__48355.fqn:null);
switch (G__48355__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__48356_48365 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48357_48366 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48358_48367 = true;
var _STAR_print_fn_STAR__temp_val__48359_48368 = ((function (_STAR_print_newline_STAR__orig_val__48356_48365,_STAR_print_fn_STAR__orig_val__48357_48366,_STAR_print_newline_STAR__temp_val__48358_48367,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48356_48365,_STAR_print_fn_STAR__orig_val__48357_48366,_STAR_print_newline_STAR__temp_val__48358_48367,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48358_48367;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48359_48368;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__48356_48365,_STAR_print_fn_STAR__orig_val__48357_48366,_STAR_print_newline_STAR__temp_val__48358_48367,_STAR_print_fn_STAR__temp_val__48359_48368,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__48356_48365,_STAR_print_fn_STAR__orig_val__48357_48366,_STAR_print_newline_STAR__temp_val__48358_48367,_STAR_print_fn_STAR__temp_val__48359_48368,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__48350_SHARP_){
return cljs.core.dissoc.call(null,p1__48350_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__48356_48365,_STAR_print_fn_STAR__orig_val__48357_48366,_STAR_print_newline_STAR__temp_val__48358_48367,_STAR_print_fn_STAR__temp_val__48359_48368,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__48356_48365,_STAR_print_fn_STAR__orig_val__48357_48366,_STAR_print_newline_STAR__temp_val__48358_48367,_STAR_print_fn_STAR__temp_val__48359_48368,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48357_48366;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48356_48365;
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
var _STAR_print_newline_STAR__orig_val__48360_48369 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__48361_48370 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__48362_48371 = true;
var _STAR_print_fn_STAR__temp_val__48363_48372 = ((function (_STAR_print_newline_STAR__orig_val__48360_48369,_STAR_print_fn_STAR__orig_val__48361_48370,_STAR_print_newline_STAR__temp_val__48362_48371,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__48360_48369,_STAR_print_fn_STAR__orig_val__48361_48370,_STAR_print_newline_STAR__temp_val__48362_48371,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__48362_48371;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__48363_48372;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__48360_48369,_STAR_print_fn_STAR__orig_val__48361_48370,_STAR_print_newline_STAR__temp_val__48362_48371,_STAR_print_fn_STAR__temp_val__48363_48372,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__48360_48369,_STAR_print_fn_STAR__orig_val__48361_48370,_STAR_print_newline_STAR__temp_val__48362_48371,_STAR_print_fn_STAR__temp_val__48363_48372,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__48351_SHARP_){
return cljs.core.dissoc.call(null,p1__48351_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__48360_48369,_STAR_print_fn_STAR__orig_val__48361_48370,_STAR_print_newline_STAR__temp_val__48362_48371,_STAR_print_fn_STAR__temp_val__48363_48372,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__48360_48369,_STAR_print_fn_STAR__orig_val__48361_48370,_STAR_print_newline_STAR__temp_val__48362_48371,_STAR_print_fn_STAR__temp_val__48363_48372,sb__4661__auto__,G__48355,G__48355__$1,loc,class_name,simple_class,cause_type,format,map__48353,map__48353__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__48361_48370;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__48360_48369;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48355__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1563208756410
