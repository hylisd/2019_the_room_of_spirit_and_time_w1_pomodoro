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
var G__38669__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38670__i = 0, G__38670__a = new Array(arguments.length -  0);
while (G__38670__i < G__38670__a.length) {G__38670__a[G__38670__i] = arguments[G__38670__i + 0]; ++G__38670__i;}
  args = new cljs.core.IndexedSeq(G__38670__a,0,null);
} 
return G__38669__delegate.call(this,args);};
G__38669.cljs$lang$maxFixedArity = 0;
G__38669.cljs$lang$applyTo = (function (arglist__38671){
var args = cljs.core.seq(arglist__38671);
return G__38669__delegate(args);
});
G__38669.cljs$core$IFn$_invoke$arity$variadic = G__38669__delegate;
return G__38669;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38672__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38672 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38673__i = 0, G__38673__a = new Array(arguments.length -  0);
while (G__38673__i < G__38673__a.length) {G__38673__a[G__38673__i] = arguments[G__38673__i + 0]; ++G__38673__i;}
  args = new cljs.core.IndexedSeq(G__38673__a,0,null);
} 
return G__38672__delegate.call(this,args);};
G__38672.cljs$lang$maxFixedArity = 0;
G__38672.cljs$lang$applyTo = (function (arglist__38674){
var args = cljs.core.seq(arglist__38674);
return G__38672__delegate(args);
});
G__38672.cljs$core$IFn$_invoke$arity$variadic = G__38672__delegate;
return G__38672;
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

//# sourceMappingURL=debug.js.map?rel=1563183872809
