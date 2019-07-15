// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27173 = arguments.length;
var i__4731__auto___27174 = (0);
while(true){
if((i__4731__auto___27174 < len__4730__auto___27173)){
args__4736__auto__.push((arguments[i__4731__auto___27174]));

var G__27175 = (i__4731__auto___27174 + (1));
i__4731__auto___27174 = G__27175;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__27176__delegate = function (children){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,selector,more),children);
};
var G__27176 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__27177__i = 0, G__27177__a = new Array(arguments.length -  0);
while (G__27177__i < G__27177__a.length) {G__27177__a[G__27177__i] = arguments[G__27177__i + 0]; ++G__27177__i;}
  children = new cljs.core.IndexedSeq(G__27177__a,0,null);
} 
return G__27176__delegate.call(this,children);};
G__27176.cljs$lang$maxFixedArity = 0;
G__27176.cljs$lang$applyTo = (function (arglist__27178){
var children = cljs.core.seq(arglist__27178);
return G__27176__delegate(children);
});
G__27176.cljs$core$IFn$_invoke$arity$variadic = G__27176__delegate;
return G__27176;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq27171){
var G__27172 = cljs.core.first(seq27171);
var seq27171__$1 = cljs.core.next(seq27171);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27172,seq27171__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__27179__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__27179 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27180__i = 0, G__27180__a = new Array(arguments.length -  0);
while (G__27180__i < G__27180__a.length) {G__27180__a[G__27180__i] = arguments[G__27180__i + 0]; ++G__27180__i;}
  args = new cljs.core.IndexedSeq(G__27180__a,0,null);
} 
return G__27179__delegate.call(this,args);};
G__27179.cljs$lang$maxFixedArity = 0;
G__27179.cljs$lang$applyTo = (function (arglist__27181){
var args = cljs.core.seq(arglist__27181);
return G__27179__delegate(args);
});
G__27179.cljs$core$IFn$_invoke$arity$variadic = G__27179__delegate;
return G__27179;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27183 = arguments.length;
var i__4731__auto___27184 = (0);
while(true){
if((i__4731__auto___27184 < len__4730__auto___27183)){
args__4736__auto__.push((arguments[i__4731__auto___27184]));

var G__27185 = (i__4731__auto___27184 + (1));
i__4731__auto___27184 = G__27185;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq27182){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27182));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__27189 = arguments.length;
switch (G__27189) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___27191 = arguments.length;
var i__4731__auto___27192 = (0);
while(true){
if((i__4731__auto___27192 < len__4730__auto___27191)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27192]));

var G__27193 = (i__4731__auto___27192 + (1));
i__4731__auto___27192 = G__27193;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule(cljs.core.cst$kw$import,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$url,url,cljs.core.cst$kw$media_DASH_queries,media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq27187){
var G__27188 = cljs.core.first(seq27187);
var seq27187__$1 = cljs.core.next(seq27187);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27188,seq27187__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27196 = arguments.length;
var i__4731__auto___27197 = (0);
while(true){
if((i__4731__auto___27197 < len__4730__auto___27196)){
args__4736__auto__.push((arguments[i__4731__auto___27197]));

var G__27198 = (i__4731__auto___27197 + (1));
i__4731__auto___27197 = G__27198;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule(cljs.core.cst$kw$media,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$media_DASH_queries,media_queries,cljs.core.cst$kw$rules,rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq27194){
var G__27195 = cljs.core.first(seq27194);
var seq27194__$1 = cljs.core.next(seq27194);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27195,seq27194__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27201 = arguments.length;
var i__4731__auto___27202 = (0);
while(true){
if((i__4731__auto___27202 < len__4730__auto___27201)){
args__4736__auto__.push((arguments[i__4731__auto___27202]));

var G__27203 = (i__4731__auto___27202 + (1));
i__4731__auto___27202 = G__27203;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule(cljs.core.cst$kw$feature,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$feature_DASH_queries,feature_queries,cljs.core.cst$kw$rules,rules], null));
});

garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq27199){
var G__27200 = cljs.core.first(seq27199);
var seq27199__$1 = cljs.core.next(seq27199);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27200,seq27199__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27206 = arguments.length;
var i__4731__auto___27207 = (0);
while(true){
if((i__4731__auto___27207 < len__4730__auto___27206)){
args__4736__auto__.push((arguments[i__4731__auto___27207]));

var G__27208 = (i__4731__auto___27207 + (1));
i__4731__auto___27207 = G__27208;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule(cljs.core.cst$kw$keyframes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$identifier,identifier,cljs.core.cst$kw$frames,frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq27204){
var G__27205 = cljs.core.first(seq27204);
var seq27204__$1 = cljs.core.next(seq27204);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27205,seq27204__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
