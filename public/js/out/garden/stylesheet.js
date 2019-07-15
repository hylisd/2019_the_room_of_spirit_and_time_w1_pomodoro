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
var len__4730__auto___42642 = arguments.length;
var i__4731__auto___42643 = (0);
while(true){
if((i__4731__auto___42643 < len__4730__auto___42642)){
args__4736__auto__.push((arguments[i__4731__auto___42643]));

var G__42644 = (i__4731__auto___42643 + (1));
i__4731__auto___42643 = G__42644;
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
var G__42645__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__42645 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__42646__i = 0, G__42646__a = new Array(arguments.length -  0);
while (G__42646__i < G__42646__a.length) {G__42646__a[G__42646__i] = arguments[G__42646__i + 0]; ++G__42646__i;}
  children = new cljs.core.IndexedSeq(G__42646__a,0,null);
} 
return G__42645__delegate.call(this,children);};
G__42645.cljs$lang$maxFixedArity = 0;
G__42645.cljs$lang$applyTo = (function (arglist__42647){
var children = cljs.core.seq(arglist__42647);
return G__42645__delegate(children);
});
G__42645.cljs$core$IFn$_invoke$arity$variadic = G__42645__delegate;
return G__42645;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
garden.stylesheet.rule.cljs$lang$applyTo = (function (seq42640){
var G__42641 = cljs.core.first.call(null,seq42640);
var seq42640__$1 = cljs.core.next.call(null,seq42640);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42641,seq42640__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__42648__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__42648 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42649__i = 0, G__42649__a = new Array(arguments.length -  0);
while (G__42649__i < G__42649__a.length) {G__42649__a[G__42649__i] = arguments[G__42649__i + 0]; ++G__42649__i;}
  args = new cljs.core.IndexedSeq(G__42649__a,0,null);
} 
return G__42648__delegate.call(this,args);};
G__42648.cljs$lang$maxFixedArity = 0;
G__42648.cljs$lang$applyTo = (function (arglist__42650){
var args = cljs.core.seq(arglist__42650);
return G__42648__delegate(args);
});
G__42648.cljs$core$IFn$_invoke$arity$variadic = G__42648__delegate;
return G__42648;
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
var len__4730__auto___42652 = arguments.length;
var i__4731__auto___42653 = (0);
while(true){
if((i__4731__auto___42653 < len__4730__auto___42652)){
args__4736__auto__.push((arguments[i__4731__auto___42653]));

var G__42654 = (i__4731__auto___42653 + (1));
i__4731__auto___42653 = G__42654;
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
garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq42651){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42651));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__42658 = arguments.length;
switch (G__42658) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___42660 = arguments.length;
var i__4731__auto___42661 = (0);
while(true){
if((i__4731__auto___42661 < len__4730__auto___42660)){
args_arr__4751__auto__.push((arguments[i__4731__auto___42661]));

var G__42662 = (i__4731__auto___42661 + (1));
i__4731__auto___42661 = G__42662;
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
garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq42656){
var G__42657 = cljs.core.first.call(null,seq42656);
var seq42656__$1 = cljs.core.next.call(null,seq42656);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42657,seq42656__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42665 = arguments.length;
var i__4731__auto___42666 = (0);
while(true){
if((i__4731__auto___42666 < len__4730__auto___42665)){
args__4736__auto__.push((arguments[i__4731__auto___42666]));

var G__42667 = (i__4731__auto___42666 + (1));
i__4731__auto___42666 = G__42667;
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
garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq42663){
var G__42664 = cljs.core.first.call(null,seq42663);
var seq42663__$1 = cljs.core.next.call(null,seq42663);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42664,seq42663__$1);
});

garden.stylesheet.at_supports = (function garden$stylesheet$at_supports(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42670 = arguments.length;
var i__4731__auto___42671 = (0);
while(true){
if((i__4731__auto___42671 < len__4730__auto___42670)){
args__4736__auto__.push((arguments[i__4731__auto___42671]));

var G__42672 = (i__4731__auto___42671 + (1));
i__4731__auto___42671 = G__42672;
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
garden.stylesheet.at_supports.cljs$lang$applyTo = (function (seq42668){
var G__42669 = cljs.core.first.call(null,seq42668);
var seq42668__$1 = cljs.core.next.call(null,seq42668);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42669,seq42668__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42675 = arguments.length;
var i__4731__auto___42676 = (0);
while(true){
if((i__4731__auto___42676 < len__4730__auto___42675)){
args__4736__auto__.push((arguments[i__4731__auto___42676]));

var G__42677 = (i__4731__auto___42676 + (1));
i__4731__auto___42676 = G__42677;
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
garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq42673){
var G__42674 = cljs.core.first.call(null,seq42673);
var seq42673__$1 = cljs.core.next.call(null,seq42673);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42674,seq42673__$1);
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

//# sourceMappingURL=stylesheet.js.map?rel=1563208752093
