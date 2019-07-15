// Compiled by ClojureScript 1.10.520 {}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47451 = arguments.length;
var i__4731__auto___47452 = (0);
while(true){
if((i__4731__auto___47452 < len__4730__auto___47451)){
args__4736__auto__.push((arguments[i__4731__auto___47452]));

var G__47453 = (i__4731__auto___47452 + (1));
i__4731__auto___47452 = G__47453;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.css.cljs$lang$applyTo = (function (seq47450){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47450));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47455 = arguments.length;
var i__4731__auto___47456 = (0);
while(true){
if((i__4731__auto___47456 < len__4730__auto___47455)){
args__4736__auto__.push((arguments[i__4731__auto___47456]));

var G__47457 = (i__4731__auto___47456 + (1));
i__4731__auto___47456 = G__47457;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.core.style.cljs$lang$applyTo = (function (seq47454){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47454));
});


//# sourceMappingURL=core.js.map?rel=1562998564525
