// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__38696__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38696 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38697__i = 0, G__38697__a = new Array(arguments.length -  0);
while (G__38697__i < G__38697__a.length) {G__38697__a[G__38697__i] = arguments[G__38697__i + 0]; ++G__38697__i;}
  args = new cljs.core.IndexedSeq(G__38697__a,0,null);
} 
return G__38696__delegate.call(this,args);};
G__38696.cljs$lang$maxFixedArity = 0;
G__38696.cljs$lang$applyTo = (function (arglist__38698){
var args = cljs.core.seq(arglist__38698);
return G__38696__delegate(args);
});
G__38696.cljs$core$IFn$_invoke$arity$variadic = G__38696__delegate;
return G__38696;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38699__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38699 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38700__i = 0, G__38700__a = new Array(arguments.length -  0);
while (G__38700__i < G__38700__a.length) {G__38700__a[G__38700__i] = arguments[G__38700__i + 0]; ++G__38700__i;}
  args = new cljs.core.IndexedSeq(G__38700__a,0,null);
} 
return G__38699__delegate.call(this,args);};
G__38699.cljs$lang$maxFixedArity = 0;
G__38699.cljs$lang$applyTo = (function (arglist__38701){
var args = cljs.core.seq(arglist__38701);
return G__38699__delegate(args);
});
G__38699.cljs$core$IFn$_invoke$arity$variadic = G__38699__delegate;
return G__38699;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1562982102741
