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
var G__42021__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42021 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42022__i = 0, G__42022__a = new Array(arguments.length -  0);
while (G__42022__i < G__42022__a.length) {G__42022__a[G__42022__i] = arguments[G__42022__i + 0]; ++G__42022__i;}
  args = new cljs.core.IndexedSeq(G__42022__a,0,null);
} 
return G__42021__delegate.call(this,args);};
G__42021.cljs$lang$maxFixedArity = 0;
G__42021.cljs$lang$applyTo = (function (arglist__42023){
var args = cljs.core.seq(arglist__42023);
return G__42021__delegate(args);
});
G__42021.cljs$core$IFn$_invoke$arity$variadic = G__42021__delegate;
return G__42021;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__42024__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__42024 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42025__i = 0, G__42025__a = new Array(arguments.length -  0);
while (G__42025__i < G__42025__a.length) {G__42025__a[G__42025__i] = arguments[G__42025__i + 0]; ++G__42025__i;}
  args = new cljs.core.IndexedSeq(G__42025__a,0,null);
} 
return G__42024__delegate.call(this,args);};
G__42024.cljs$lang$maxFixedArity = 0;
G__42024.cljs$lang$applyTo = (function (arglist__42026){
var args = cljs.core.seq(arglist__42026);
return G__42024__delegate(args);
});
G__42024.cljs$core$IFn$_invoke$arity$variadic = G__42024__delegate;
return G__42024;
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

//# sourceMappingURL=debug.js.map?rel=1563208750978
