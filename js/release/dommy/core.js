// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4131__auto__ = elem.textContent;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__27308 = arguments.length;
switch (G__27308) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5735__auto__ = elem.classList;
if(cljs.core.truth_(temp__5735__auto__)){
var class_list = temp__5735__auto__;
return class_list.contains(c__$1);
} else {
var temp__5737__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5737__auto__)){
var class_name = temp__5737__auto__;
var temp__5737__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5737__auto____$1)){
var i = temp__5737__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,cljs.core.cst$kw$display) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$top,r.top,cljs.core.cst$kw$bottom,r.bottom,cljs.core.cst$kw$left,r.left,cljs.core.cst$kw$right,r.right,cljs.core.cst$kw$width,r.width,cljs.core.cst$kw$height,r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__27311 = arguments.length;
switch (G__27311) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__27315 = arguments.length;
switch (G__27315) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__27313_SHARP_){
return (!((p1__27313_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
});

dommy.core.closest.cljs$lang$maxFixedArity = 3;

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
elem.textContent = text;
} else {
elem.innerText = text;
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
elem.innerHTML = html;

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
elem.value = value;

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return elem.className = c;
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27335 = arguments.length;
var i__4731__auto___27336 = (0);
while(true){
if((i__4731__auto___27336 < len__4730__auto___27335)){
args__4736__auto__.push((arguments[i__4731__auto___27336]));

var G__27337 = (i__4731__auto___27336 + (1));
i__4731__auto___27336 = G__27337;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__27319_27338 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__27320_27339 = null;
var count__27321_27340 = (0);
var i__27322_27341 = (0);
while(true){
if((i__27322_27341 < count__27321_27340)){
var vec__27329_27342 = chunk__27320_27339.cljs$core$IIndexed$_nth$arity$2(null,i__27322_27341);
var k_27343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329_27342,(0),null);
var v_27344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27329_27342,(1),null);
style.setProperty(dommy.utils.as_str(k_27343),v_27344);


var G__27345 = seq__27319_27338;
var G__27346 = chunk__27320_27339;
var G__27347 = count__27321_27340;
var G__27348 = (i__27322_27341 + (1));
seq__27319_27338 = G__27345;
chunk__27320_27339 = G__27346;
count__27321_27340 = G__27347;
i__27322_27341 = G__27348;
continue;
} else {
var temp__5737__auto___27349 = cljs.core.seq(seq__27319_27338);
if(temp__5737__auto___27349){
var seq__27319_27350__$1 = temp__5737__auto___27349;
if(cljs.core.chunked_seq_QMARK_(seq__27319_27350__$1)){
var c__4550__auto___27351 = cljs.core.chunk_first(seq__27319_27350__$1);
var G__27352 = cljs.core.chunk_rest(seq__27319_27350__$1);
var G__27353 = c__4550__auto___27351;
var G__27354 = cljs.core.count(c__4550__auto___27351);
var G__27355 = (0);
seq__27319_27338 = G__27352;
chunk__27320_27339 = G__27353;
count__27321_27340 = G__27354;
i__27322_27341 = G__27355;
continue;
} else {
var vec__27332_27356 = cljs.core.first(seq__27319_27350__$1);
var k_27357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27332_27356,(0),null);
var v_27358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27332_27356,(1),null);
style.setProperty(dommy.utils.as_str(k_27357),v_27358);


var G__27359 = cljs.core.next(seq__27319_27350__$1);
var G__27360 = null;
var G__27361 = (0);
var G__27362 = (0);
seq__27319_27338 = G__27359;
chunk__27320_27339 = G__27360;
count__27321_27340 = G__27361;
i__27322_27341 = G__27362;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq27317){
var G__27318 = cljs.core.first(seq27317);
var seq27317__$1 = cljs.core.next(seq27317);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27318,seq27317__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27369 = arguments.length;
var i__4731__auto___27370 = (0);
while(true){
if((i__4731__auto___27370 < len__4730__auto___27369)){
args__4736__auto__.push((arguments[i__4731__auto___27370]));

var G__27371 = (i__4731__auto___27370 + (1));
i__4731__auto___27370 = G__27371;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__27365_27372 = cljs.core.seq(keywords);
var chunk__27366_27373 = null;
var count__27367_27374 = (0);
var i__27368_27375 = (0);
while(true){
if((i__27368_27375 < count__27367_27374)){
var kw_27376 = chunk__27366_27373.cljs$core$IIndexed$_nth$arity$2(null,i__27368_27375);
style.removeProperty(dommy.utils.as_str(kw_27376));


var G__27377 = seq__27365_27372;
var G__27378 = chunk__27366_27373;
var G__27379 = count__27367_27374;
var G__27380 = (i__27368_27375 + (1));
seq__27365_27372 = G__27377;
chunk__27366_27373 = G__27378;
count__27367_27374 = G__27379;
i__27368_27375 = G__27380;
continue;
} else {
var temp__5737__auto___27381 = cljs.core.seq(seq__27365_27372);
if(temp__5737__auto___27381){
var seq__27365_27382__$1 = temp__5737__auto___27381;
if(cljs.core.chunked_seq_QMARK_(seq__27365_27382__$1)){
var c__4550__auto___27383 = cljs.core.chunk_first(seq__27365_27382__$1);
var G__27384 = cljs.core.chunk_rest(seq__27365_27382__$1);
var G__27385 = c__4550__auto___27383;
var G__27386 = cljs.core.count(c__4550__auto___27383);
var G__27387 = (0);
seq__27365_27372 = G__27384;
chunk__27366_27373 = G__27385;
count__27367_27374 = G__27386;
i__27368_27375 = G__27387;
continue;
} else {
var kw_27388 = cljs.core.first(seq__27365_27382__$1);
style.removeProperty(dommy.utils.as_str(kw_27388));


var G__27389 = cljs.core.next(seq__27365_27382__$1);
var G__27390 = null;
var G__27391 = (0);
var G__27392 = (0);
seq__27365_27372 = G__27389;
chunk__27366_27373 = G__27390;
count__27367_27374 = G__27391;
i__27368_27375 = G__27392;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq27363){
var G__27364 = cljs.core.first(seq27363);
var seq27363__$1 = cljs.core.next(seq27363);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27364,seq27363__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27411 = arguments.length;
var i__4731__auto___27412 = (0);
while(true){
if((i__4731__auto___27412 < len__4730__auto___27411)){
args__4736__auto__.push((arguments[i__4731__auto___27412]));

var G__27413 = (i__4731__auto___27412 + (1));
i__4731__auto___27412 = G__27413;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__27395_27414 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__27396_27415 = null;
var count__27397_27416 = (0);
var i__27398_27417 = (0);
while(true){
if((i__27398_27417 < count__27397_27416)){
var vec__27405_27418 = chunk__27396_27415.cljs$core$IIndexed$_nth$arity$2(null,i__27398_27417);
var k_27419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27405_27418,(0),null);
var v_27420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27405_27418,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27419,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27420),"px"].join('')], 0));


var G__27421 = seq__27395_27414;
var G__27422 = chunk__27396_27415;
var G__27423 = count__27397_27416;
var G__27424 = (i__27398_27417 + (1));
seq__27395_27414 = G__27421;
chunk__27396_27415 = G__27422;
count__27397_27416 = G__27423;
i__27398_27417 = G__27424;
continue;
} else {
var temp__5737__auto___27425 = cljs.core.seq(seq__27395_27414);
if(temp__5737__auto___27425){
var seq__27395_27426__$1 = temp__5737__auto___27425;
if(cljs.core.chunked_seq_QMARK_(seq__27395_27426__$1)){
var c__4550__auto___27427 = cljs.core.chunk_first(seq__27395_27426__$1);
var G__27428 = cljs.core.chunk_rest(seq__27395_27426__$1);
var G__27429 = c__4550__auto___27427;
var G__27430 = cljs.core.count(c__4550__auto___27427);
var G__27431 = (0);
seq__27395_27414 = G__27428;
chunk__27396_27415 = G__27429;
count__27397_27416 = G__27430;
i__27398_27417 = G__27431;
continue;
} else {
var vec__27408_27432 = cljs.core.first(seq__27395_27426__$1);
var k_27433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27408_27432,(0),null);
var v_27434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27408_27432,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_27433,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_27434),"px"].join('')], 0));


var G__27435 = cljs.core.next(seq__27395_27426__$1);
var G__27436 = null;
var G__27437 = (0);
var G__27438 = (0);
seq__27395_27414 = G__27435;
chunk__27396_27415 = G__27436;
count__27397_27416 = G__27437;
i__27398_27417 = G__27438;
continue;
}
} else {
}
}
break;
}

return elem;
});

dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq27393){
var G__27394 = cljs.core.first(seq27393);
var seq27393__$1 = cljs.core.next(seq27393);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27394,seq27393__$1);
});

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__27444 = arguments.length;
switch (G__27444) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___27464 = arguments.length;
var i__4731__auto___27465 = (0);
while(true){
if((i__4731__auto___27465 < len__4730__auto___27464)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27465]));

var G__27466 = (i__4731__auto___27465 + (1));
i__4731__auto___27465 = G__27466;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4752__auto__);

}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__27445 = elem;
(G__27445[k__$1] = v);

return G__27445;
} else {
var G__27446 = elem;
G__27446.setAttribute(k__$1,v);

return G__27446;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__27447_27467 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__27448_27468 = null;
var count__27449_27469 = (0);
var i__27450_27470 = (0);
while(true){
if((i__27450_27470 < count__27449_27469)){
var vec__27457_27471 = chunk__27448_27468.cljs$core$IIndexed$_nth$arity$2(null,i__27450_27470);
var k_27472__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457_27471,(0),null);
var v_27473__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27457_27471,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_27472__$1,v_27473__$1);


var G__27474 = seq__27447_27467;
var G__27475 = chunk__27448_27468;
var G__27476 = count__27449_27469;
var G__27477 = (i__27450_27470 + (1));
seq__27447_27467 = G__27474;
chunk__27448_27468 = G__27475;
count__27449_27469 = G__27476;
i__27450_27470 = G__27477;
continue;
} else {
var temp__5737__auto___27478 = cljs.core.seq(seq__27447_27467);
if(temp__5737__auto___27478){
var seq__27447_27479__$1 = temp__5737__auto___27478;
if(cljs.core.chunked_seq_QMARK_(seq__27447_27479__$1)){
var c__4550__auto___27480 = cljs.core.chunk_first(seq__27447_27479__$1);
var G__27481 = cljs.core.chunk_rest(seq__27447_27479__$1);
var G__27482 = c__4550__auto___27480;
var G__27483 = cljs.core.count(c__4550__auto___27480);
var G__27484 = (0);
seq__27447_27467 = G__27481;
chunk__27448_27468 = G__27482;
count__27449_27469 = G__27483;
i__27450_27470 = G__27484;
continue;
} else {
var vec__27460_27485 = cljs.core.first(seq__27447_27479__$1);
var k_27486__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27460_27485,(0),null);
var v_27487__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27460_27485,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_27486__$1,v_27487__$1);


var G__27488 = cljs.core.next(seq__27447_27479__$1);
var G__27489 = null;
var G__27490 = (0);
var G__27491 = (0);
seq__27447_27467 = G__27488;
chunk__27448_27468 = G__27489;
count__27449_27469 = G__27490;
i__27450_27470 = G__27491;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq27440){
var G__27441 = cljs.core.first(seq27440);
var seq27440__$1 = cljs.core.next(seq27440);
var G__27442 = cljs.core.first(seq27440__$1);
var seq27440__$2 = cljs.core.next(seq27440__$1);
var G__27443 = cljs.core.first(seq27440__$2);
var seq27440__$3 = cljs.core.next(seq27440__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27441,G__27442,G__27443,seq27440__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__27496 = arguments.length;
switch (G__27496) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___27503 = arguments.length;
var i__4731__auto___27504 = (0);
while(true){
if((i__4731__auto___27504 < len__4730__auto___27503)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27504]));

var G__27505 = (i__4731__auto___27504 + (1));
i__4731__auto___27504 = G__27505;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_27506__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__27497 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__27497.cljs$core$IFn$_invoke$arity$1 ? fexpr__27497.cljs$core$IFn$_invoke$arity$1(k_27506__$1) : fexpr__27497.call(null,k_27506__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_27506__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__27498_27507 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__27499_27508 = null;
var count__27500_27509 = (0);
var i__27501_27510 = (0);
while(true){
if((i__27501_27510 < count__27500_27509)){
var k_27511__$1 = chunk__27499_27508.cljs$core$IIndexed$_nth$arity$2(null,i__27501_27510);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_27511__$1);


var G__27512 = seq__27498_27507;
var G__27513 = chunk__27499_27508;
var G__27514 = count__27500_27509;
var G__27515 = (i__27501_27510 + (1));
seq__27498_27507 = G__27512;
chunk__27499_27508 = G__27513;
count__27500_27509 = G__27514;
i__27501_27510 = G__27515;
continue;
} else {
var temp__5737__auto___27516 = cljs.core.seq(seq__27498_27507);
if(temp__5737__auto___27516){
var seq__27498_27517__$1 = temp__5737__auto___27516;
if(cljs.core.chunked_seq_QMARK_(seq__27498_27517__$1)){
var c__4550__auto___27518 = cljs.core.chunk_first(seq__27498_27517__$1);
var G__27519 = cljs.core.chunk_rest(seq__27498_27517__$1);
var G__27520 = c__4550__auto___27518;
var G__27521 = cljs.core.count(c__4550__auto___27518);
var G__27522 = (0);
seq__27498_27507 = G__27519;
chunk__27499_27508 = G__27520;
count__27500_27509 = G__27521;
i__27501_27510 = G__27522;
continue;
} else {
var k_27523__$1 = cljs.core.first(seq__27498_27517__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_27523__$1);


var G__27524 = cljs.core.next(seq__27498_27517__$1);
var G__27525 = null;
var G__27526 = (0);
var G__27527 = (0);
seq__27498_27507 = G__27524;
chunk__27499_27508 = G__27525;
count__27500_27509 = G__27526;
i__27501_27510 = G__27527;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq27493){
var G__27494 = cljs.core.first(seq27493);
var seq27493__$1 = cljs.core.next(seq27493);
var G__27495 = cljs.core.first(seq27493__$1);
var seq27493__$2 = cljs.core.next(seq27493__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27494,G__27495,seq27493__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__27529 = arguments.length;
switch (G__27529) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__27535 = arguments.length;
switch (G__27535) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___27549 = arguments.length;
var i__4731__auto___27550 = (0);
while(true){
if((i__4731__auto___27550 < len__4730__auto___27549)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27550]));

var G__27551 = (i__4731__auto___27550 + (1));
i__4731__auto___27550 = G__27551;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5735__auto___27552 = elem.classList;
if(cljs.core.truth_(temp__5735__auto___27552)){
var class_list_27553 = temp__5735__auto___27552;
var seq__27536_27554 = cljs.core.seq(classes__$1);
var chunk__27537_27555 = null;
var count__27538_27556 = (0);
var i__27539_27557 = (0);
while(true){
if((i__27539_27557 < count__27538_27556)){
var c_27558 = chunk__27537_27555.cljs$core$IIndexed$_nth$arity$2(null,i__27539_27557);
class_list_27553.add(c_27558);


var G__27559 = seq__27536_27554;
var G__27560 = chunk__27537_27555;
var G__27561 = count__27538_27556;
var G__27562 = (i__27539_27557 + (1));
seq__27536_27554 = G__27559;
chunk__27537_27555 = G__27560;
count__27538_27556 = G__27561;
i__27539_27557 = G__27562;
continue;
} else {
var temp__5737__auto___27563 = cljs.core.seq(seq__27536_27554);
if(temp__5737__auto___27563){
var seq__27536_27564__$1 = temp__5737__auto___27563;
if(cljs.core.chunked_seq_QMARK_(seq__27536_27564__$1)){
var c__4550__auto___27565 = cljs.core.chunk_first(seq__27536_27564__$1);
var G__27566 = cljs.core.chunk_rest(seq__27536_27564__$1);
var G__27567 = c__4550__auto___27565;
var G__27568 = cljs.core.count(c__4550__auto___27565);
var G__27569 = (0);
seq__27536_27554 = G__27566;
chunk__27537_27555 = G__27567;
count__27538_27556 = G__27568;
i__27539_27557 = G__27569;
continue;
} else {
var c_27570 = cljs.core.first(seq__27536_27564__$1);
class_list_27553.add(c_27570);


var G__27571 = cljs.core.next(seq__27536_27564__$1);
var G__27572 = null;
var G__27573 = (0);
var G__27574 = (0);
seq__27536_27554 = G__27571;
chunk__27537_27555 = G__27572;
count__27538_27556 = G__27573;
i__27539_27557 = G__27574;
continue;
}
} else {
}
}
break;
}
} else {
var seq__27540_27575 = cljs.core.seq(classes__$1);
var chunk__27541_27576 = null;
var count__27542_27577 = (0);
var i__27543_27578 = (0);
while(true){
if((i__27543_27578 < count__27542_27577)){
var c_27579 = chunk__27541_27576.cljs$core$IIndexed$_nth$arity$2(null,i__27543_27578);
var class_name_27580 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_27580,c_27579))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_27580 === ""))?c_27579:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_27580)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_27579)].join('')));
}


var G__27581 = seq__27540_27575;
var G__27582 = chunk__27541_27576;
var G__27583 = count__27542_27577;
var G__27584 = (i__27543_27578 + (1));
seq__27540_27575 = G__27581;
chunk__27541_27576 = G__27582;
count__27542_27577 = G__27583;
i__27543_27578 = G__27584;
continue;
} else {
var temp__5737__auto___27585 = cljs.core.seq(seq__27540_27575);
if(temp__5737__auto___27585){
var seq__27540_27586__$1 = temp__5737__auto___27585;
if(cljs.core.chunked_seq_QMARK_(seq__27540_27586__$1)){
var c__4550__auto___27587 = cljs.core.chunk_first(seq__27540_27586__$1);
var G__27588 = cljs.core.chunk_rest(seq__27540_27586__$1);
var G__27589 = c__4550__auto___27587;
var G__27590 = cljs.core.count(c__4550__auto___27587);
var G__27591 = (0);
seq__27540_27575 = G__27588;
chunk__27541_27576 = G__27589;
count__27542_27577 = G__27590;
i__27543_27578 = G__27591;
continue;
} else {
var c_27592 = cljs.core.first(seq__27540_27586__$1);
var class_name_27593 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_27593,c_27592))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_27593 === ""))?c_27592:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_27593)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_27592)].join('')));
}


var G__27594 = cljs.core.next(seq__27540_27586__$1);
var G__27595 = null;
var G__27596 = (0);
var G__27597 = (0);
seq__27540_27575 = G__27594;
chunk__27541_27576 = G__27595;
count__27542_27577 = G__27596;
i__27543_27578 = G__27597;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
});

dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__27544_27598 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__27545_27599 = null;
var count__27546_27600 = (0);
var i__27547_27601 = (0);
while(true){
if((i__27547_27601 < count__27546_27600)){
var c_27602 = chunk__27545_27599.cljs$core$IIndexed$_nth$arity$2(null,i__27547_27601);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_27602);


var G__27603 = seq__27544_27598;
var G__27604 = chunk__27545_27599;
var G__27605 = count__27546_27600;
var G__27606 = (i__27547_27601 + (1));
seq__27544_27598 = G__27603;
chunk__27545_27599 = G__27604;
count__27546_27600 = G__27605;
i__27547_27601 = G__27606;
continue;
} else {
var temp__5737__auto___27607 = cljs.core.seq(seq__27544_27598);
if(temp__5737__auto___27607){
var seq__27544_27608__$1 = temp__5737__auto___27607;
if(cljs.core.chunked_seq_QMARK_(seq__27544_27608__$1)){
var c__4550__auto___27609 = cljs.core.chunk_first(seq__27544_27608__$1);
var G__27610 = cljs.core.chunk_rest(seq__27544_27608__$1);
var G__27611 = c__4550__auto___27609;
var G__27612 = cljs.core.count(c__4550__auto___27609);
var G__27613 = (0);
seq__27544_27598 = G__27610;
chunk__27545_27599 = G__27611;
count__27546_27600 = G__27612;
i__27547_27601 = G__27613;
continue;
} else {
var c_27614 = cljs.core.first(seq__27544_27608__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_27614);


var G__27615 = cljs.core.next(seq__27544_27608__$1);
var G__27616 = null;
var G__27617 = (0);
var G__27618 = (0);
seq__27544_27598 = G__27615;
chunk__27545_27599 = G__27616;
count__27546_27600 = G__27617;
i__27547_27601 = G__27618;
continue;
}
} else {
}
}
break;
}

return elem;
});

/** @this {Function} */
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq27532){
var G__27533 = cljs.core.first(seq27532);
var seq27532__$1 = cljs.core.next(seq27532);
var G__27534 = cljs.core.first(seq27532__$1);
var seq27532__$2 = cljs.core.next(seq27532__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27533,G__27534,seq27532__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__27623 = arguments.length;
switch (G__27623) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___27629 = arguments.length;
var i__4731__auto___27630 = (0);
while(true){
if((i__4731__auto___27630 < len__4730__auto___27629)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27630]));

var G__27631 = (i__4731__auto___27630 + (1));
i__4731__auto___27630 = G__27631;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5735__auto___27632 = elem.classList;
if(cljs.core.truth_(temp__5735__auto___27632)){
var class_list_27633 = temp__5735__auto___27632;
class_list_27633.remove(c__$1);
} else {
var class_name_27634 = dommy.core.class$(elem);
var new_class_name_27635 = dommy.utils.remove_class_str(class_name_27634,c__$1);
if((class_name_27634 === new_class_name_27635)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_27635);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__27624 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__27625 = null;
var count__27626 = (0);
var i__27627 = (0);
while(true){
if((i__27627 < count__27626)){
var c = chunk__27625.cljs$core$IIndexed$_nth$arity$2(null,i__27627);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__27636 = seq__27624;
var G__27637 = chunk__27625;
var G__27638 = count__27626;
var G__27639 = (i__27627 + (1));
seq__27624 = G__27636;
chunk__27625 = G__27637;
count__27626 = G__27638;
i__27627 = G__27639;
continue;
} else {
var temp__5737__auto__ = cljs.core.seq(seq__27624);
if(temp__5737__auto__){
var seq__27624__$1 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__27624__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__27624__$1);
var G__27640 = cljs.core.chunk_rest(seq__27624__$1);
var G__27641 = c__4550__auto__;
var G__27642 = cljs.core.count(c__4550__auto__);
var G__27643 = (0);
seq__27624 = G__27640;
chunk__27625 = G__27641;
count__27626 = G__27642;
i__27627 = G__27643;
continue;
} else {
var c = cljs.core.first(seq__27624__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__27644 = cljs.core.next(seq__27624__$1);
var G__27645 = null;
var G__27646 = (0);
var G__27647 = (0);
seq__27624 = G__27644;
chunk__27625 = G__27645;
count__27626 = G__27646;
i__27627 = G__27647;
continue;
}
} else {
return null;
}
}
break;
}
});

/** @this {Function} */
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq27620){
var G__27621 = cljs.core.first(seq27620);
var seq27620__$1 = cljs.core.next(seq27620);
var G__27622 = cljs.core.first(seq27620__$1);
var seq27620__$2 = cljs.core.next(seq27620__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27621,G__27622,seq27620__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__27649 = arguments.length;
switch (G__27649) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5735__auto___27651 = elem.classList;
if(cljs.core.truth_(temp__5735__auto___27651)){
var class_list_27652 = temp__5735__auto___27651;
class_list_27652.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__27654 = arguments.length;
switch (G__27654) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$display,((show_QMARK_)?"":"none")], 0));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__27657 = arguments.length;
switch (G__27657) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__27663 = arguments.length;
switch (G__27663) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___27670 = arguments.length;
var i__4731__auto___27671 = (0);
while(true){
if((i__4731__auto___27671 < len__4730__auto___27670)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27671]));

var G__27672 = (i__4731__auto___27671 + (1));
i__4731__auto___27671 = G__27672;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__27664 = parent;
G__27664.appendChild(child);

return G__27664;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__27665_27673 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__27666_27674 = null;
var count__27667_27675 = (0);
var i__27668_27676 = (0);
while(true){
if((i__27668_27676 < count__27667_27675)){
var c_27677 = chunk__27666_27674.cljs$core$IIndexed$_nth$arity$2(null,i__27668_27676);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27677);


var G__27678 = seq__27665_27673;
var G__27679 = chunk__27666_27674;
var G__27680 = count__27667_27675;
var G__27681 = (i__27668_27676 + (1));
seq__27665_27673 = G__27678;
chunk__27666_27674 = G__27679;
count__27667_27675 = G__27680;
i__27668_27676 = G__27681;
continue;
} else {
var temp__5737__auto___27682 = cljs.core.seq(seq__27665_27673);
if(temp__5737__auto___27682){
var seq__27665_27683__$1 = temp__5737__auto___27682;
if(cljs.core.chunked_seq_QMARK_(seq__27665_27683__$1)){
var c__4550__auto___27684 = cljs.core.chunk_first(seq__27665_27683__$1);
var G__27685 = cljs.core.chunk_rest(seq__27665_27683__$1);
var G__27686 = c__4550__auto___27684;
var G__27687 = cljs.core.count(c__4550__auto___27684);
var G__27688 = (0);
seq__27665_27673 = G__27685;
chunk__27666_27674 = G__27686;
count__27667_27675 = G__27687;
i__27668_27676 = G__27688;
continue;
} else {
var c_27689 = cljs.core.first(seq__27665_27683__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27689);


var G__27690 = cljs.core.next(seq__27665_27683__$1);
var G__27691 = null;
var G__27692 = (0);
var G__27693 = (0);
seq__27665_27673 = G__27690;
chunk__27666_27674 = G__27691;
count__27667_27675 = G__27692;
i__27668_27676 = G__27693;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq27660){
var G__27661 = cljs.core.first(seq27660);
var seq27660__$1 = cljs.core.next(seq27660);
var G__27662 = cljs.core.first(seq27660__$1);
var seq27660__$2 = cljs.core.next(seq27660__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27661,G__27662,seq27660__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__27698 = arguments.length;
switch (G__27698) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___27705 = arguments.length;
var i__4731__auto___27706 = (0);
while(true){
if((i__4731__auto___27706 < len__4730__auto___27705)){
args_arr__4751__auto__.push((arguments[i__4731__auto___27706]));

var G__27707 = (i__4731__auto___27706 + (1));
i__4731__auto___27706 = G__27707;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4752__auto__);

}
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__27699 = parent;
G__27699.insertBefore(child,parent.firstChild);

return G__27699;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__27700_27708 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__27701_27709 = null;
var count__27702_27710 = (0);
var i__27703_27711 = (0);
while(true){
if((i__27703_27711 < count__27702_27710)){
var c_27712 = chunk__27701_27709.cljs$core$IIndexed$_nth$arity$2(null,i__27703_27711);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27712);


var G__27713 = seq__27700_27708;
var G__27714 = chunk__27701_27709;
var G__27715 = count__27702_27710;
var G__27716 = (i__27703_27711 + (1));
seq__27700_27708 = G__27713;
chunk__27701_27709 = G__27714;
count__27702_27710 = G__27715;
i__27703_27711 = G__27716;
continue;
} else {
var temp__5737__auto___27717 = cljs.core.seq(seq__27700_27708);
if(temp__5737__auto___27717){
var seq__27700_27718__$1 = temp__5737__auto___27717;
if(cljs.core.chunked_seq_QMARK_(seq__27700_27718__$1)){
var c__4550__auto___27719 = cljs.core.chunk_first(seq__27700_27718__$1);
var G__27720 = cljs.core.chunk_rest(seq__27700_27718__$1);
var G__27721 = c__4550__auto___27719;
var G__27722 = cljs.core.count(c__4550__auto___27719);
var G__27723 = (0);
seq__27700_27708 = G__27720;
chunk__27701_27709 = G__27721;
count__27702_27710 = G__27722;
i__27703_27711 = G__27723;
continue;
} else {
var c_27724 = cljs.core.first(seq__27700_27718__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_27724);


var G__27725 = cljs.core.next(seq__27700_27718__$1);
var G__27726 = null;
var G__27727 = (0);
var G__27728 = (0);
seq__27700_27708 = G__27725;
chunk__27701_27709 = G__27726;
count__27702_27710 = G__27727;
i__27703_27711 = G__27728;
continue;
}
} else {
}
}
break;
}

return parent;
});

/** @this {Function} */
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq27695){
var G__27696 = cljs.core.first(seq27695);
var seq27695__$1 = cljs.core.next(seq27695);
var G__27697 = cljs.core.first(seq27695__$1);
var seq27695__$2 = cljs.core.next(seq27695__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27696,G__27697,seq27695__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5735__auto___27729 = other.nextSibling;
if(cljs.core.truth_(temp__5735__auto___27729)){
var next_27730 = temp__5735__auto___27729;
dommy.core.insert_before_BANG_(elem,next_27730);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__27732 = arguments.length;
switch (G__27732) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__27733 = p;
G__27733.removeChild(elem);

return G__27733;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27735){
var vec__27736 = p__27735;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27736,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27736,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__27736,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__27736,special_mouse_event,real_mouse_event){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4131__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4120__auto__ = related_target;
if(cljs.core.truth_(and__4120__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
;})(vec__27736,special_mouse_event,real_mouse_event))
});})(vec__27736,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$mouseenter,cljs.core.cst$kw$mouseover,cljs.core.cst$kw$mouseleave,cljs.core.cst$kw$mouseout], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4120__auto__ = selected_target;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,cljs.core.cst$kw$disabled));
} else {
return and__4120__auto__;
}
})())){
event.selectedTarget = selected_target;

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4131__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27742 = arguments.length;
var i__4731__auto___27743 = (0);
while(true){
if((i__4731__auto___27743 < len__4730__auto___27742)){
args__4736__auto__.push((arguments[i__4731__auto___27743]));

var G__27744 = (i__4731__auto___27743 + (1));
i__4731__auto___27743 = G__27744;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq27739){
var G__27740 = cljs.core.first(seq27739);
var seq27739__$1 = cljs.core.next(seq27739);
var G__27741 = cljs.core.first(seq27739__$1);
var seq27739__$2 = cljs.core.next(seq27739__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27740,G__27741,seq27739__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
var fexpr__27745 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest);
return (fexpr__27745.cljs$core$IFn$_invoke$arity$1 ? fexpr__27745.cljs$core$IFn$_invoke$arity$1(elem_sel) : fexpr__27745.call(null,elem_sel));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27859 = arguments.length;
var i__4731__auto___27860 = (0);
while(true){
if((i__4731__auto___27860 < len__4730__auto___27859)){
args__4736__auto__.push((arguments[i__4731__auto___27860]));

var G__27861 = (i__4731__auto___27860 + (1));
i__4731__auto___27860 = G__27861;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__27748_27862 = dommy.core.elem_and_selector(elem_sel);
var elem_27863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748_27862,(0),null);
var selector_27864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27748_27862,(1),null);
var seq__27751_27865 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__27758_27866 = null;
var count__27759_27867 = (0);
var i__27760_27868 = (0);
while(true){
if((i__27760_27868 < count__27759_27867)){
var vec__27813_27869 = chunk__27758_27866.cljs$core$IIndexed$_nth$arity$2(null,i__27760_27868);
var orig_type_27870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27813_27869,(0),null);
var f_27871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27813_27869,(1),null);
var seq__27761_27872 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_27870,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_27870,cljs.core.identity])));
var chunk__27763_27873 = null;
var count__27764_27874 = (0);
var i__27765_27875 = (0);
while(true){
if((i__27765_27875 < count__27764_27874)){
var vec__27826_27876 = chunk__27763_27873.cljs$core$IIndexed$_nth$arity$2(null,i__27765_27875);
var actual_type_27877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826_27876,(0),null);
var factory_27878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27826_27876,(1),null);
var canonical_f_27879 = (function (){var G__27830 = (factory_27878.cljs$core$IFn$_invoke$arity$1 ? factory_27878.cljs$core$IFn$_invoke$arity$1(f_27871) : factory_27878.call(null,f_27871));
var fexpr__27829 = (cljs.core.truth_(selector_27864)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27863,selector_27864):cljs.core.identity);
return (fexpr__27829.cljs$core$IFn$_invoke$arity$1 ? fexpr__27829.cljs$core$IFn$_invoke$arity$1(G__27830) : fexpr__27829.call(null,G__27830));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27863,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27864,actual_type_27877,f_27871], null),canonical_f_27879], 0));

if(cljs.core.truth_(elem_27863.addEventListener)){
elem_27863.addEventListener(cljs.core.name(actual_type_27877),canonical_f_27879);
} else {
elem_27863.attachEvent(cljs.core.name(actual_type_27877),canonical_f_27879);
}


var G__27880 = seq__27761_27872;
var G__27881 = chunk__27763_27873;
var G__27882 = count__27764_27874;
var G__27883 = (i__27765_27875 + (1));
seq__27761_27872 = G__27880;
chunk__27763_27873 = G__27881;
count__27764_27874 = G__27882;
i__27765_27875 = G__27883;
continue;
} else {
var temp__5737__auto___27884 = cljs.core.seq(seq__27761_27872);
if(temp__5737__auto___27884){
var seq__27761_27885__$1 = temp__5737__auto___27884;
if(cljs.core.chunked_seq_QMARK_(seq__27761_27885__$1)){
var c__4550__auto___27886 = cljs.core.chunk_first(seq__27761_27885__$1);
var G__27887 = cljs.core.chunk_rest(seq__27761_27885__$1);
var G__27888 = c__4550__auto___27886;
var G__27889 = cljs.core.count(c__4550__auto___27886);
var G__27890 = (0);
seq__27761_27872 = G__27887;
chunk__27763_27873 = G__27888;
count__27764_27874 = G__27889;
i__27765_27875 = G__27890;
continue;
} else {
var vec__27831_27891 = cljs.core.first(seq__27761_27885__$1);
var actual_type_27892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831_27891,(0),null);
var factory_27893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27831_27891,(1),null);
var canonical_f_27894 = (function (){var G__27835 = (factory_27893.cljs$core$IFn$_invoke$arity$1 ? factory_27893.cljs$core$IFn$_invoke$arity$1(f_27871) : factory_27893.call(null,f_27871));
var fexpr__27834 = (cljs.core.truth_(selector_27864)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27863,selector_27864):cljs.core.identity);
return (fexpr__27834.cljs$core$IFn$_invoke$arity$1 ? fexpr__27834.cljs$core$IFn$_invoke$arity$1(G__27835) : fexpr__27834.call(null,G__27835));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27863,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27864,actual_type_27892,f_27871], null),canonical_f_27894], 0));

if(cljs.core.truth_(elem_27863.addEventListener)){
elem_27863.addEventListener(cljs.core.name(actual_type_27892),canonical_f_27894);
} else {
elem_27863.attachEvent(cljs.core.name(actual_type_27892),canonical_f_27894);
}


var G__27895 = cljs.core.next(seq__27761_27885__$1);
var G__27896 = null;
var G__27897 = (0);
var G__27898 = (0);
seq__27761_27872 = G__27895;
chunk__27763_27873 = G__27896;
count__27764_27874 = G__27897;
i__27765_27875 = G__27898;
continue;
}
} else {
}
}
break;
}

var G__27899 = seq__27751_27865;
var G__27900 = chunk__27758_27866;
var G__27901 = count__27759_27867;
var G__27902 = (i__27760_27868 + (1));
seq__27751_27865 = G__27899;
chunk__27758_27866 = G__27900;
count__27759_27867 = G__27901;
i__27760_27868 = G__27902;
continue;
} else {
var temp__5737__auto___27903 = cljs.core.seq(seq__27751_27865);
if(temp__5737__auto___27903){
var seq__27751_27904__$1 = temp__5737__auto___27903;
if(cljs.core.chunked_seq_QMARK_(seq__27751_27904__$1)){
var c__4550__auto___27905 = cljs.core.chunk_first(seq__27751_27904__$1);
var G__27906 = cljs.core.chunk_rest(seq__27751_27904__$1);
var G__27907 = c__4550__auto___27905;
var G__27908 = cljs.core.count(c__4550__auto___27905);
var G__27909 = (0);
seq__27751_27865 = G__27906;
chunk__27758_27866 = G__27907;
count__27759_27867 = G__27908;
i__27760_27868 = G__27909;
continue;
} else {
var vec__27836_27910 = cljs.core.first(seq__27751_27904__$1);
var orig_type_27911 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27836_27910,(0),null);
var f_27912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27836_27910,(1),null);
var seq__27752_27913 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_27911,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_27911,cljs.core.identity])));
var chunk__27754_27914 = null;
var count__27755_27915 = (0);
var i__27756_27916 = (0);
while(true){
if((i__27756_27916 < count__27755_27915)){
var vec__27849_27917 = chunk__27754_27914.cljs$core$IIndexed$_nth$arity$2(null,i__27756_27916);
var actual_type_27918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27849_27917,(0),null);
var factory_27919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27849_27917,(1),null);
var canonical_f_27920 = (function (){var G__27853 = (factory_27919.cljs$core$IFn$_invoke$arity$1 ? factory_27919.cljs$core$IFn$_invoke$arity$1(f_27912) : factory_27919.call(null,f_27912));
var fexpr__27852 = (cljs.core.truth_(selector_27864)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27863,selector_27864):cljs.core.identity);
return (fexpr__27852.cljs$core$IFn$_invoke$arity$1 ? fexpr__27852.cljs$core$IFn$_invoke$arity$1(G__27853) : fexpr__27852.call(null,G__27853));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27863,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27864,actual_type_27918,f_27912], null),canonical_f_27920], 0));

if(cljs.core.truth_(elem_27863.addEventListener)){
elem_27863.addEventListener(cljs.core.name(actual_type_27918),canonical_f_27920);
} else {
elem_27863.attachEvent(cljs.core.name(actual_type_27918),canonical_f_27920);
}


var G__27921 = seq__27752_27913;
var G__27922 = chunk__27754_27914;
var G__27923 = count__27755_27915;
var G__27924 = (i__27756_27916 + (1));
seq__27752_27913 = G__27921;
chunk__27754_27914 = G__27922;
count__27755_27915 = G__27923;
i__27756_27916 = G__27924;
continue;
} else {
var temp__5737__auto___27925__$1 = cljs.core.seq(seq__27752_27913);
if(temp__5737__auto___27925__$1){
var seq__27752_27926__$1 = temp__5737__auto___27925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27752_27926__$1)){
var c__4550__auto___27927 = cljs.core.chunk_first(seq__27752_27926__$1);
var G__27928 = cljs.core.chunk_rest(seq__27752_27926__$1);
var G__27929 = c__4550__auto___27927;
var G__27930 = cljs.core.count(c__4550__auto___27927);
var G__27931 = (0);
seq__27752_27913 = G__27928;
chunk__27754_27914 = G__27929;
count__27755_27915 = G__27930;
i__27756_27916 = G__27931;
continue;
} else {
var vec__27854_27932 = cljs.core.first(seq__27752_27926__$1);
var actual_type_27933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27854_27932,(0),null);
var factory_27934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27854_27932,(1),null);
var canonical_f_27935 = (function (){var G__27858 = (factory_27934.cljs$core$IFn$_invoke$arity$1 ? factory_27934.cljs$core$IFn$_invoke$arity$1(f_27912) : factory_27934.call(null,f_27912));
var fexpr__27857 = (cljs.core.truth_(selector_27864)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_27863,selector_27864):cljs.core.identity);
return (fexpr__27857.cljs$core$IFn$_invoke$arity$1 ? fexpr__27857.cljs$core$IFn$_invoke$arity$1(G__27858) : fexpr__27857.call(null,G__27858));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_27863,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_27864,actual_type_27933,f_27912], null),canonical_f_27935], 0));

if(cljs.core.truth_(elem_27863.addEventListener)){
elem_27863.addEventListener(cljs.core.name(actual_type_27933),canonical_f_27935);
} else {
elem_27863.attachEvent(cljs.core.name(actual_type_27933),canonical_f_27935);
}


var G__27936 = cljs.core.next(seq__27752_27926__$1);
var G__27937 = null;
var G__27938 = (0);
var G__27939 = (0);
seq__27752_27913 = G__27936;
chunk__27754_27914 = G__27937;
count__27755_27915 = G__27938;
i__27756_27916 = G__27939;
continue;
}
} else {
}
}
break;
}

var G__27940 = cljs.core.next(seq__27751_27904__$1);
var G__27941 = null;
var G__27942 = (0);
var G__27943 = (0);
seq__27751_27865 = G__27940;
chunk__27758_27866 = G__27941;
count__27759_27867 = G__27942;
i__27760_27868 = G__27943;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq27746){
var G__27747 = cljs.core.first(seq27746);
var seq27746__$1 = cljs.core.next(seq27746);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27747,seq27746__$1);
});

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28025 = arguments.length;
var i__4731__auto___28026 = (0);
while(true){
if((i__4731__auto___28026 < len__4730__auto___28025)){
args__4736__auto__.push((arguments[i__4731__auto___28026]));

var G__28027 = (i__4731__auto___28026 + (1));
i__4731__auto___28026 = G__28027;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__27946_28028 = dommy.core.elem_and_selector(elem_sel);
var elem_28029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27946_28028,(0),null);
var selector_28030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27946_28028,(1),null);
var seq__27949_28031 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__27956_28032 = null;
var count__27957_28033 = (0);
var i__27958_28034 = (0);
while(true){
if((i__27958_28034 < count__27957_28033)){
var vec__27995_28035 = chunk__27956_28032.cljs$core$IIndexed$_nth$arity$2(null,i__27958_28034);
var orig_type_28036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995_28035,(0),null);
var f_28037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27995_28035,(1),null);
var seq__27959_28038 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_28036,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_28036,cljs.core.identity])));
var chunk__27961_28039 = null;
var count__27962_28040 = (0);
var i__27963_28041 = (0);
while(true){
if((i__27963_28041 < count__27962_28040)){
var vec__28004_28042 = chunk__27961_28039.cljs$core$IIndexed$_nth$arity$2(null,i__27963_28041);
var actual_type_28043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28004_28042,(0),null);
var __28044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28004_28042,(1),null);
var keys_28045 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28030,actual_type_28043,f_28037], null);
var canonical_f_28046 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_28029),keys_28045);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_28029,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_28045], 0));

if(cljs.core.truth_(elem_28029.removeEventListener)){
elem_28029.removeEventListener(cljs.core.name(actual_type_28043),canonical_f_28046);
} else {
elem_28029.detachEvent(cljs.core.name(actual_type_28043),canonical_f_28046);
}


var G__28047 = seq__27959_28038;
var G__28048 = chunk__27961_28039;
var G__28049 = count__27962_28040;
var G__28050 = (i__27963_28041 + (1));
seq__27959_28038 = G__28047;
chunk__27961_28039 = G__28048;
count__27962_28040 = G__28049;
i__27963_28041 = G__28050;
continue;
} else {
var temp__5737__auto___28051 = cljs.core.seq(seq__27959_28038);
if(temp__5737__auto___28051){
var seq__27959_28052__$1 = temp__5737__auto___28051;
if(cljs.core.chunked_seq_QMARK_(seq__27959_28052__$1)){
var c__4550__auto___28053 = cljs.core.chunk_first(seq__27959_28052__$1);
var G__28054 = cljs.core.chunk_rest(seq__27959_28052__$1);
var G__28055 = c__4550__auto___28053;
var G__28056 = cljs.core.count(c__4550__auto___28053);
var G__28057 = (0);
seq__27959_28038 = G__28054;
chunk__27961_28039 = G__28055;
count__27962_28040 = G__28056;
i__27963_28041 = G__28057;
continue;
} else {
var vec__28007_28058 = cljs.core.first(seq__27959_28052__$1);
var actual_type_28059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28007_28058,(0),null);
var __28060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28007_28058,(1),null);
var keys_28061 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28030,actual_type_28059,f_28037], null);
var canonical_f_28062 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_28029),keys_28061);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_28029,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_28061], 0));

if(cljs.core.truth_(elem_28029.removeEventListener)){
elem_28029.removeEventListener(cljs.core.name(actual_type_28059),canonical_f_28062);
} else {
elem_28029.detachEvent(cljs.core.name(actual_type_28059),canonical_f_28062);
}


var G__28063 = cljs.core.next(seq__27959_28052__$1);
var G__28064 = null;
var G__28065 = (0);
var G__28066 = (0);
seq__27959_28038 = G__28063;
chunk__27961_28039 = G__28064;
count__27962_28040 = G__28065;
i__27963_28041 = G__28066;
continue;
}
} else {
}
}
break;
}

var G__28067 = seq__27949_28031;
var G__28068 = chunk__27956_28032;
var G__28069 = count__27957_28033;
var G__28070 = (i__27958_28034 + (1));
seq__27949_28031 = G__28067;
chunk__27956_28032 = G__28068;
count__27957_28033 = G__28069;
i__27958_28034 = G__28070;
continue;
} else {
var temp__5737__auto___28071 = cljs.core.seq(seq__27949_28031);
if(temp__5737__auto___28071){
var seq__27949_28072__$1 = temp__5737__auto___28071;
if(cljs.core.chunked_seq_QMARK_(seq__27949_28072__$1)){
var c__4550__auto___28073 = cljs.core.chunk_first(seq__27949_28072__$1);
var G__28074 = cljs.core.chunk_rest(seq__27949_28072__$1);
var G__28075 = c__4550__auto___28073;
var G__28076 = cljs.core.count(c__4550__auto___28073);
var G__28077 = (0);
seq__27949_28031 = G__28074;
chunk__27956_28032 = G__28075;
count__27957_28033 = G__28076;
i__27958_28034 = G__28077;
continue;
} else {
var vec__28010_28078 = cljs.core.first(seq__27949_28072__$1);
var orig_type_28079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28010_28078,(0),null);
var f_28080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28010_28078,(1),null);
var seq__27950_28081 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_28079,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_28079,cljs.core.identity])));
var chunk__27952_28082 = null;
var count__27953_28083 = (0);
var i__27954_28084 = (0);
while(true){
if((i__27954_28084 < count__27953_28083)){
var vec__28019_28085 = chunk__27952_28082.cljs$core$IIndexed$_nth$arity$2(null,i__27954_28084);
var actual_type_28086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28019_28085,(0),null);
var __28087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28019_28085,(1),null);
var keys_28088 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28030,actual_type_28086,f_28080], null);
var canonical_f_28089 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_28029),keys_28088);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_28029,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_28088], 0));

if(cljs.core.truth_(elem_28029.removeEventListener)){
elem_28029.removeEventListener(cljs.core.name(actual_type_28086),canonical_f_28089);
} else {
elem_28029.detachEvent(cljs.core.name(actual_type_28086),canonical_f_28089);
}


var G__28090 = seq__27950_28081;
var G__28091 = chunk__27952_28082;
var G__28092 = count__27953_28083;
var G__28093 = (i__27954_28084 + (1));
seq__27950_28081 = G__28090;
chunk__27952_28082 = G__28091;
count__27953_28083 = G__28092;
i__27954_28084 = G__28093;
continue;
} else {
var temp__5737__auto___28094__$1 = cljs.core.seq(seq__27950_28081);
if(temp__5737__auto___28094__$1){
var seq__27950_28095__$1 = temp__5737__auto___28094__$1;
if(cljs.core.chunked_seq_QMARK_(seq__27950_28095__$1)){
var c__4550__auto___28096 = cljs.core.chunk_first(seq__27950_28095__$1);
var G__28097 = cljs.core.chunk_rest(seq__27950_28095__$1);
var G__28098 = c__4550__auto___28096;
var G__28099 = cljs.core.count(c__4550__auto___28096);
var G__28100 = (0);
seq__27950_28081 = G__28097;
chunk__27952_28082 = G__28098;
count__27953_28083 = G__28099;
i__27954_28084 = G__28100;
continue;
} else {
var vec__28022_28101 = cljs.core.first(seq__27950_28095__$1);
var actual_type_28102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022_28101,(0),null);
var __28103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28022_28101,(1),null);
var keys_28104 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_28030,actual_type_28102,f_28080], null);
var canonical_f_28105 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_28029),keys_28104);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_28029,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_28104], 0));

if(cljs.core.truth_(elem_28029.removeEventListener)){
elem_28029.removeEventListener(cljs.core.name(actual_type_28102),canonical_f_28105);
} else {
elem_28029.detachEvent(cljs.core.name(actual_type_28102),canonical_f_28105);
}


var G__28106 = cljs.core.next(seq__27950_28095__$1);
var G__28107 = null;
var G__28108 = (0);
var G__28109 = (0);
seq__27950_28081 = G__28106;
chunk__27952_28082 = G__28107;
count__27953_28083 = G__28108;
i__27954_28084 = G__28109;
continue;
}
} else {
}
}
break;
}

var G__28110 = cljs.core.next(seq__27949_28072__$1);
var G__28111 = null;
var G__28112 = (0);
var G__28113 = (0);
seq__27949_28031 = G__28110;
chunk__27956_28032 = G__28111;
count__27957_28033 = G__28112;
i__27958_28034 = G__28113;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq27944){
var G__27945 = cljs.core.first(seq27944);
var seq27944__$1 = cljs.core.next(seq27944);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27945,seq27944__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___28135 = arguments.length;
var i__4731__auto___28136 = (0);
while(true){
if((i__4731__auto___28136 < len__4730__auto___28135)){
args__4736__auto__.push((arguments[i__4731__auto___28136]));

var G__28137 = (i__4731__auto___28136 + (1));
i__4731__auto___28136 = G__28137;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__28116_28138 = dommy.core.elem_and_selector(elem_sel);
var elem_28139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116_28138,(0),null);
var selector_28140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28116_28138,(1),null);
var seq__28119_28141 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__28120_28142 = null;
var count__28121_28143 = (0);
var i__28122_28144 = (0);
while(true){
if((i__28122_28144 < count__28121_28143)){
var vec__28129_28145 = chunk__28120_28142.cljs$core$IIndexed$_nth$arity$2(null,i__28122_28144);
var type_28146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28129_28145,(0),null);
var f_28147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28129_28145,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_28146,((function (seq__28119_28141,chunk__28120_28142,count__28121_28143,i__28122_28144,vec__28129_28145,type_28146,f_28147,vec__28116_28138,elem_28139,selector_28140){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_28146,dommy$core$this_fn], 0));

return (f_28147.cljs$core$IFn$_invoke$arity$1 ? f_28147.cljs$core$IFn$_invoke$arity$1(e) : f_28147.call(null,e));
});})(seq__28119_28141,chunk__28120_28142,count__28121_28143,i__28122_28144,vec__28129_28145,type_28146,f_28147,vec__28116_28138,elem_28139,selector_28140))
], 0));


var G__28148 = seq__28119_28141;
var G__28149 = chunk__28120_28142;
var G__28150 = count__28121_28143;
var G__28151 = (i__28122_28144 + (1));
seq__28119_28141 = G__28148;
chunk__28120_28142 = G__28149;
count__28121_28143 = G__28150;
i__28122_28144 = G__28151;
continue;
} else {
var temp__5737__auto___28152 = cljs.core.seq(seq__28119_28141);
if(temp__5737__auto___28152){
var seq__28119_28153__$1 = temp__5737__auto___28152;
if(cljs.core.chunked_seq_QMARK_(seq__28119_28153__$1)){
var c__4550__auto___28154 = cljs.core.chunk_first(seq__28119_28153__$1);
var G__28155 = cljs.core.chunk_rest(seq__28119_28153__$1);
var G__28156 = c__4550__auto___28154;
var G__28157 = cljs.core.count(c__4550__auto___28154);
var G__28158 = (0);
seq__28119_28141 = G__28155;
chunk__28120_28142 = G__28156;
count__28121_28143 = G__28157;
i__28122_28144 = G__28158;
continue;
} else {
var vec__28132_28159 = cljs.core.first(seq__28119_28153__$1);
var type_28160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132_28159,(0),null);
var f_28161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28132_28159,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_28160,((function (seq__28119_28141,chunk__28120_28142,count__28121_28143,i__28122_28144,vec__28132_28159,type_28160,f_28161,seq__28119_28153__$1,temp__5737__auto___28152,vec__28116_28138,elem_28139,selector_28140){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_28160,dommy$core$this_fn], 0));

return (f_28161.cljs$core$IFn$_invoke$arity$1 ? f_28161.cljs$core$IFn$_invoke$arity$1(e) : f_28161.call(null,e));
});})(seq__28119_28141,chunk__28120_28142,count__28121_28143,i__28122_28144,vec__28132_28159,type_28160,f_28161,seq__28119_28153__$1,temp__5737__auto___28152,vec__28116_28138,elem_28139,selector_28140))
], 0));


var G__28162 = cljs.core.next(seq__28119_28153__$1);
var G__28163 = null;
var G__28164 = (0);
var G__28165 = (0);
seq__28119_28141 = G__28162;
chunk__28120_28142 = G__28163;
count__28121_28143 = G__28164;
i__28122_28144 = G__28165;
continue;
}
} else {
}
}
break;
}

return elem_sel;
});

dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq28114){
var G__28115 = cljs.core.first(seq28114);
var seq28114__$1 = cljs.core.next(seq28114);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28115,seq28114__$1);
});

