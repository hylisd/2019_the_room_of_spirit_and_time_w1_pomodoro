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
var len__4730__auto___46276 = arguments.length;
var i__4731__auto___46277 = (0);
while(true){
if((i__4731__auto___46277 < len__4730__auto___46276)){
args__4736__auto__.push((arguments[i__4731__auto___46277]));

var G__46278 = (i__4731__auto___46277 + (1));
i__4731__auto___46277 = G__46278;
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
var G__46279__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__46279 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__46280__i = 0, G__46280__a = new Array(arguments.length -  0);
while (G__46280__i < G__46280__a.length) {G__46280__a[G__46280__i] = arguments[G__46280__i + 0]; ++G__46280__i;}
  children = new cljs.core.IndexedSeq(G__46280__a,0,null);
} 
return G__46279__delegate.call(this,children);};
G__46279.cljs$lang$maxFixedArity = 0;
G__46279.cljs$lang$applyTo = (function (arglist__46281){
var children = cljs.core.seq(arglist__46281);
return G__46279__delegate(children);
});
G__46279.cljs$core$IFn$_invoke$arity$variadic = G__46279__delegate;
return G__46279;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq46274){
var G__46275 = cljs.core.first.call(null,seq46274);
var seq46274__$1 = cljs.core.next.call(null,seq46274);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46275,seq46274__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__46282__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__46282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46283__i = 0, G__46283__a = new Array(arguments.length -  0);
while (G__46283__i < G__46283__a.length) {G__46283__a[G__46283__i] = arguments[G__46283__i + 0]; ++G__46283__i;}
  args = new cljs.core.IndexedSeq(G__46283__a,0,null);
} 
return G__46282__delegate.call(this,args);};
G__46282.cljs$lang$maxFixedArity = 0;
G__46282.cljs$lang$applyTo = (function (arglist__46284){
var args = cljs.core.seq(arglist__46284);
return G__46282__delegate(args);
});
G__46282.cljs$core$IFn$_invoke$arity$variadic = G__46282__delegate;
return G__46282;
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
var len__4730__auto___46286 = arguments.length;
var i__4731__auto___46287 = (0);
while(true){
if((i__4731__auto___46287 < len__4730__auto___46286)){
args__4736__auto__.push((arguments[i__4731__auto___46287]));

var G__46288 = (i__4731__auto___46287 + (1));
i__4731__auto___46287 = G__46288;
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
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq46285){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46285));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__46292 = arguments.length;
switch (G__46292) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46294 = arguments.length;
var i__4731__auto___46295 = (0);
while(true){
if((i__4731__auto___46295 < len__4730__auto___46294)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46295]));

var G__46296 = (i__4731__auto___46295 + (1));
i__4731__auto___46295 = G__46296;
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
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq46290){
var G__46291 = cljs.core.first.call(null,seq46290);
var seq46290__$1 = cljs.core.next.call(null,seq46290);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46291,seq46290__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46299 = arguments.length;
var i__4731__auto___46300 = (0);
while(true){
if((i__4731__auto___46300 < len__4730__auto___46299)){
args__4736__auto__.push((arguments[i__4731__auto___46300]));

var G__46301 = (i__4731__auto___46300 + (1));
i__4731__auto___46300 = G__46301;
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
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq46297){
var G__46298 = cljs.core.first.call(null,seq46297);
var seq46297__$1 = cljs.core.next.call(null,seq46297);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46298,seq46297__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46304 = arguments.length;
var i__4731__auto___46305 = (0);
while(true){
if((i__4731__auto___46305 < len__4730__auto___46304)){
args__4736__auto__.push((arguments[i__4731__auto___46305]));

var G__46306 = (i__4731__auto___46305 + (1));
i__4731__auto___46305 = G__46306;
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
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq46302){
var G__46303 = cljs.core.first.call(null,seq46302);
var seq46302__$1 = cljs.core.next.call(null,seq46302);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46303,seq46302__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46309 = arguments.length;
var i__4731__auto___46310 = (0);
while(true){
if((i__4731__auto___46310 < len__4730__auto___46309)){
args__4736__auto__.push((arguments[i__4731__auto___46310]));

var G__46311 = (i__4731__auto___46310 + (1));
i__4731__auto___46310 = G__46311;
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
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq46307){
var G__46308 = cljs.core.first.call(null,seq46307);
var seq46307__$1 = cljs.core.next.call(null,seq46307);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46308,seq46307__$1);
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

//# sourceMappingURL=stylesheet.js.map?rel=1562998563699
