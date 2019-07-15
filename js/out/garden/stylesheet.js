// Compiled by ClojureScript 1.10.520 {}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
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
var len__4730__auto___39779 = arguments.length;
var i__4731__auto___39780 = (0);
while(true){
if((i__4731__auto___39780 < len__4730__auto___39779)){
args__4736__auto__.push((arguments[i__4731__auto___39780]));

var G__39781 = (i__4731__auto___39780 + (1));
i__4731__auto___39780 = G__39781;
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
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__39782__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__39782 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__39783__i = 0, G__39783__a = new Array(arguments.length -  0);
while (G__39783__i < G__39783__a.length) {G__39783__a[G__39783__i] = arguments[G__39783__i + 0]; ++G__39783__i;}
  children = new cljs.core.IndexedSeq(G__39783__a,0,null);
} 
return G__39782__delegate.call(this,children);};
G__39782.cljs$lang$maxFixedArity = 0;
G__39782.cljs$lang$applyTo = (function (arglist__39784){
var children = cljs.core.seq(arglist__39784);
return G__39782__delegate(children);
});
G__39782.cljs$core$IFn$_invoke$arity$variadic = G__39782__delegate;
return G__39782;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq39777){
var G__39778 = cljs.core.first.call(null,seq39777);
var seq39777__$1 = cljs.core.next.call(null,seq39777);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39778,seq39777__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__39785__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__39785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39786__i = 0, G__39786__a = new Array(arguments.length -  0);
while (G__39786__i < G__39786__a.length) {G__39786__a[G__39786__i] = arguments[G__39786__i + 0]; ++G__39786__i;}
  args = new cljs.core.IndexedSeq(G__39786__a,0,null);
} 
return G__39785__delegate.call(this,args);};
G__39785.cljs$lang$maxFixedArity = 0;
G__39785.cljs$lang$applyTo = (function (arglist__39787){
var args = cljs.core.seq(arglist__39787);
return G__39785__delegate(args);
});
G__39785.cljs$core$IFn$_invoke$arity$variadic = G__39785__delegate;
return G__39785;
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
var len__4730__auto___39789 = arguments.length;
var i__4731__auto___39790 = (0);
while(true){
if((i__4731__auto___39790 < len__4730__auto___39789)){
args__4736__auto__.push((arguments[i__4731__auto___39790]));

var G__39791 = (i__4731__auto___39790 + (1));
i__4731__auto___39790 = G__39791;
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
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq39788){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39788));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__39795 = arguments.length;
switch (G__39795) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___39797 = arguments.length;
var i__4731__auto___39798 = (0);
while(true){
if((i__4731__auto___39798 < len__4730__auto___39797)){
args_arr__4751__auto__.push((arguments[i__4731__auto___39798]));

var G__39799 = (i__4731__auto___39798 + (1));
i__4731__auto___39798 = G__39799;
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
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq39793){
var G__39794 = cljs.core.first.call(null,seq39793);
var seq39793__$1 = cljs.core.next.call(null,seq39793);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39794,seq39793__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39802 = arguments.length;
var i__4731__auto___39803 = (0);
while(true){
if((i__4731__auto___39803 < len__4730__auto___39802)){
args__4736__auto__.push((arguments[i__4731__auto___39803]));

var G__39804 = (i__4731__auto___39803 + (1));
i__4731__auto___39803 = G__39804;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq39800){
var G__39801 = cljs.core.first.call(null,seq39800);
var seq39800__$1 = cljs.core.next.call(null,seq39800);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39801,seq39800__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39807 = arguments.length;
var i__4731__auto___39808 = (0);
while(true){
if((i__4731__auto___39808 < len__4730__auto___39807)){
args__4736__auto__.push((arguments[i__4731__auto___39808]));

var G__39809 = (i__4731__auto___39808 + (1));
i__4731__auto___39808 = G__39809;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_supports.cljs$core$IFn$_invoke$arity$variadic = (function (feature_queries,rules){

return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"feature","feature",27242652),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feature-queries","feature-queries",-1340998408),feature_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_supports.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq39805){
var G__39806 = cljs.core.first.call(null,seq39805);
var seq39805__$1 = cljs.core.next.call(null,seq39805);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39806,seq39805__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39812 = arguments.length;
var i__4731__auto___39813 = (0);
while(true){
if((i__4731__auto___39813 < len__4730__auto___39812)){
args__4736__auto__.push((arguments[i__4731__auto___39813]));

var G__39814 = (i__4731__auto___39813 + (1));
i__4731__auto___39813 = G__39814;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq39810){
var G__39811 = cljs.core.first.call(null,seq39810);
var seq39810__$1 = cljs.core.next.call(null,seq39810);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39811,seq39810__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1563183874039
