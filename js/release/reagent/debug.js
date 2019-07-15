// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__25849__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25849 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25850__i = 0, G__25850__a = new Array(arguments.length -  0);
while (G__25850__i < G__25850__a.length) {G__25850__a[G__25850__i] = arguments[G__25850__i + 0]; ++G__25850__i;}
  args = new cljs.core.IndexedSeq(G__25850__a,0,null);
} 
return G__25849__delegate.call(this,args);};
G__25849.cljs$lang$maxFixedArity = 0;
G__25849.cljs$lang$applyTo = (function (arglist__25851){
var args = cljs.core.seq(arglist__25851);
return G__25849__delegate(args);
});
G__25849.cljs$core$IFn$_invoke$arity$variadic = G__25849__delegate;
return G__25849;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__25852__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__25852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25853__i = 0, G__25853__a = new Array(arguments.length -  0);
while (G__25853__i < G__25853__a.length) {G__25853__a[G__25853__i] = arguments[G__25853__i + 0]; ++G__25853__i;}
  args = new cljs.core.IndexedSeq(G__25853__a,0,null);
} 
return G__25852__delegate.call(this,args);};
G__25852.cljs$lang$maxFixedArity = 0;
G__25852.cljs$lang$applyTo = (function (arglist__25854){
var args = cljs.core.seq(arglist__25854);
return G__25852__delegate(args);
});
G__25852.cljs$core$IFn$_invoke$arity$variadic = G__25852__delegate;
return G__25852;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
