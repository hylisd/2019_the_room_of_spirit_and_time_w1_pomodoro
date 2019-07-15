// Compiled by ClojureScript 1.10.520 {}
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('dommy.utils');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_.call(null,data)){
return clojure.string.join.call(null," ",cljs.core.map.call(null,dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name.call(null,data);
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
return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__46325 = arguments.length;
switch (G__46325) {
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
return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});

dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});

dommy.core.style.cljs$lang$maxFixedArity = 2;

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.call(null,elem,k);
if(cljs.core.seq.call(null,pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
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
return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
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
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__46328 = arguments.length;
switch (G__46328) {
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
var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));
return ((function (matches){
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
;})(matches))
});

dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.call(null,document,selector);
});

dommy.core.matches_pred.cljs$lang$maxFixedArity = 2;

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__46332 = arguments.length;
switch (G__46332) {
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__46330_SHARP_){
return (!((p1__46330_SHARP_ === base)));
}),dommy.core.ancestors.call(null,elem))));
});

dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.call(null,document.body,elem,selector);
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
var len__4730__auto___46352 = arguments.length;
var i__4731__auto___46353 = (0);
while(true){
if((i__4731__auto___46353 < len__4730__auto___46352)){
args__4736__auto__.push((arguments[i__4731__auto___46353]));

var G__46354 = (i__4731__auto___46353 + (1));
i__4731__auto___46353 = G__46354;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__46336_46355 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__46337_46356 = null;
var count__46338_46357 = (0);
var i__46339_46358 = (0);
while(true){
if((i__46339_46358 < count__46338_46357)){
var vec__46346_46359 = cljs.core._nth.call(null,chunk__46337_46356,i__46339_46358);
var k_46360 = cljs.core.nth.call(null,vec__46346_46359,(0),null);
var v_46361 = cljs.core.nth.call(null,vec__46346_46359,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_46360),v_46361);


var G__46362 = seq__46336_46355;
var G__46363 = chunk__46337_46356;
var G__46364 = count__46338_46357;
var G__46365 = (i__46339_46358 + (1));
seq__46336_46355 = G__46362;
chunk__46337_46356 = G__46363;
count__46338_46357 = G__46364;
i__46339_46358 = G__46365;
continue;
} else {
var temp__5735__auto___46366 = cljs.core.seq.call(null,seq__46336_46355);
if(temp__5735__auto___46366){
var seq__46336_46367__$1 = temp__5735__auto___46366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46336_46367__$1)){
var c__4550__auto___46368 = cljs.core.chunk_first.call(null,seq__46336_46367__$1);
var G__46369 = cljs.core.chunk_rest.call(null,seq__46336_46367__$1);
var G__46370 = c__4550__auto___46368;
var G__46371 = cljs.core.count.call(null,c__4550__auto___46368);
var G__46372 = (0);
seq__46336_46355 = G__46369;
chunk__46337_46356 = G__46370;
count__46338_46357 = G__46371;
i__46339_46358 = G__46372;
continue;
} else {
var vec__46349_46373 = cljs.core.first.call(null,seq__46336_46367__$1);
var k_46374 = cljs.core.nth.call(null,vec__46349_46373,(0),null);
var v_46375 = cljs.core.nth.call(null,vec__46349_46373,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_46374),v_46375);


var G__46376 = cljs.core.next.call(null,seq__46336_46367__$1);
var G__46377 = null;
var G__46378 = (0);
var G__46379 = (0);
seq__46336_46355 = G__46376;
chunk__46337_46356 = G__46377;
count__46338_46357 = G__46378;
i__46339_46358 = G__46379;
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
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq46334){
var G__46335 = cljs.core.first.call(null,seq46334);
var seq46334__$1 = cljs.core.next.call(null,seq46334);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46335,seq46334__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46386 = arguments.length;
var i__4731__auto___46387 = (0);
while(true){
if((i__4731__auto___46387 < len__4730__auto___46386)){
args__4736__auto__.push((arguments[i__4731__auto___46387]));

var G__46388 = (i__4731__auto___46387 + (1));
i__4731__auto___46387 = G__46388;
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
var seq__46382_46389 = cljs.core.seq.call(null,keywords);
var chunk__46383_46390 = null;
var count__46384_46391 = (0);
var i__46385_46392 = (0);
while(true){
if((i__46385_46392 < count__46384_46391)){
var kw_46393 = cljs.core._nth.call(null,chunk__46383_46390,i__46385_46392);
style.removeProperty(dommy.utils.as_str.call(null,kw_46393));


var G__46394 = seq__46382_46389;
var G__46395 = chunk__46383_46390;
var G__46396 = count__46384_46391;
var G__46397 = (i__46385_46392 + (1));
seq__46382_46389 = G__46394;
chunk__46383_46390 = G__46395;
count__46384_46391 = G__46396;
i__46385_46392 = G__46397;
continue;
} else {
var temp__5735__auto___46398 = cljs.core.seq.call(null,seq__46382_46389);
if(temp__5735__auto___46398){
var seq__46382_46399__$1 = temp__5735__auto___46398;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46382_46399__$1)){
var c__4550__auto___46400 = cljs.core.chunk_first.call(null,seq__46382_46399__$1);
var G__46401 = cljs.core.chunk_rest.call(null,seq__46382_46399__$1);
var G__46402 = c__4550__auto___46400;
var G__46403 = cljs.core.count.call(null,c__4550__auto___46400);
var G__46404 = (0);
seq__46382_46389 = G__46401;
chunk__46383_46390 = G__46402;
count__46384_46391 = G__46403;
i__46385_46392 = G__46404;
continue;
} else {
var kw_46405 = cljs.core.first.call(null,seq__46382_46399__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_46405));


var G__46406 = cljs.core.next.call(null,seq__46382_46399__$1);
var G__46407 = null;
var G__46408 = (0);
var G__46409 = (0);
seq__46382_46389 = G__46406;
chunk__46383_46390 = G__46407;
count__46384_46391 = G__46408;
i__46385_46392 = G__46409;
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
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq46380){
var G__46381 = cljs.core.first.call(null,seq46380);
var seq46380__$1 = cljs.core.next.call(null,seq46380);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46381,seq46380__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46428 = arguments.length;
var i__4731__auto___46429 = (0);
while(true){
if((i__4731__auto___46429 < len__4730__auto___46428)){
args__4736__auto__.push((arguments[i__4731__auto___46429]));

var G__46430 = (i__4731__auto___46429 + (1));
i__4731__auto___46429 = G__46430;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__46412_46431 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__46413_46432 = null;
var count__46414_46433 = (0);
var i__46415_46434 = (0);
while(true){
if((i__46415_46434 < count__46414_46433)){
var vec__46422_46435 = cljs.core._nth.call(null,chunk__46413_46432,i__46415_46434);
var k_46436 = cljs.core.nth.call(null,vec__46422_46435,(0),null);
var v_46437 = cljs.core.nth.call(null,vec__46422_46435,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_46436,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_46437),"px"].join(''));


var G__46438 = seq__46412_46431;
var G__46439 = chunk__46413_46432;
var G__46440 = count__46414_46433;
var G__46441 = (i__46415_46434 + (1));
seq__46412_46431 = G__46438;
chunk__46413_46432 = G__46439;
count__46414_46433 = G__46440;
i__46415_46434 = G__46441;
continue;
} else {
var temp__5735__auto___46442 = cljs.core.seq.call(null,seq__46412_46431);
if(temp__5735__auto___46442){
var seq__46412_46443__$1 = temp__5735__auto___46442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46412_46443__$1)){
var c__4550__auto___46444 = cljs.core.chunk_first.call(null,seq__46412_46443__$1);
var G__46445 = cljs.core.chunk_rest.call(null,seq__46412_46443__$1);
var G__46446 = c__4550__auto___46444;
var G__46447 = cljs.core.count.call(null,c__4550__auto___46444);
var G__46448 = (0);
seq__46412_46431 = G__46445;
chunk__46413_46432 = G__46446;
count__46414_46433 = G__46447;
i__46415_46434 = G__46448;
continue;
} else {
var vec__46425_46449 = cljs.core.first.call(null,seq__46412_46443__$1);
var k_46450 = cljs.core.nth.call(null,vec__46425_46449,(0),null);
var v_46451 = cljs.core.nth.call(null,vec__46425_46449,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_46450,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_46451),"px"].join(''));


var G__46452 = cljs.core.next.call(null,seq__46412_46443__$1);
var G__46453 = null;
var G__46454 = (0);
var G__46455 = (0);
seq__46412_46431 = G__46452;
chunk__46413_46432 = G__46453;
count__46414_46433 = G__46454;
i__46415_46434 = G__46455;
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
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq46410){
var G__46411 = cljs.core.first.call(null,seq46410);
var seq46410__$1 = cljs.core.next.call(null,seq46410);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46411,seq46410__$1);
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
var G__46461 = arguments.length;
switch (G__46461) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46481 = arguments.length;
var i__4731__auto___46482 = (0);
while(true){
if((i__4731__auto___46482 < len__4730__auto___46481)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46482]));

var G__46483 = (i__4731__auto___46482 + (1));
i__4731__auto___46482 = G__46483;
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
return dommy.core.set_attr_BANG_.call(null,elem,k,dommy.utils.as_str.call(null,k));
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_.call(null,v)){
var G__46462 = elem;
(G__46462[k__$1] = v);

return G__46462;
} else {
var G__46463 = elem;
G__46463.setAttribute(k__$1,v);

return G__46463;
}
} else {
return null;
}
});

dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__46464_46484 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__46465_46485 = null;
var count__46466_46486 = (0);
var i__46467_46487 = (0);
while(true){
if((i__46467_46487 < count__46466_46486)){
var vec__46474_46488 = cljs.core._nth.call(null,chunk__46465_46485,i__46467_46487);
var k_46489__$1 = cljs.core.nth.call(null,vec__46474_46488,(0),null);
var v_46490__$1 = cljs.core.nth.call(null,vec__46474_46488,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_46489__$1,v_46490__$1);


var G__46491 = seq__46464_46484;
var G__46492 = chunk__46465_46485;
var G__46493 = count__46466_46486;
var G__46494 = (i__46467_46487 + (1));
seq__46464_46484 = G__46491;
chunk__46465_46485 = G__46492;
count__46466_46486 = G__46493;
i__46467_46487 = G__46494;
continue;
} else {
var temp__5735__auto___46495 = cljs.core.seq.call(null,seq__46464_46484);
if(temp__5735__auto___46495){
var seq__46464_46496__$1 = temp__5735__auto___46495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46464_46496__$1)){
var c__4550__auto___46497 = cljs.core.chunk_first.call(null,seq__46464_46496__$1);
var G__46498 = cljs.core.chunk_rest.call(null,seq__46464_46496__$1);
var G__46499 = c__4550__auto___46497;
var G__46500 = cljs.core.count.call(null,c__4550__auto___46497);
var G__46501 = (0);
seq__46464_46484 = G__46498;
chunk__46465_46485 = G__46499;
count__46466_46486 = G__46500;
i__46467_46487 = G__46501;
continue;
} else {
var vec__46477_46502 = cljs.core.first.call(null,seq__46464_46496__$1);
var k_46503__$1 = cljs.core.nth.call(null,vec__46477_46502,(0),null);
var v_46504__$1 = cljs.core.nth.call(null,vec__46477_46502,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_46503__$1,v_46504__$1);


var G__46505 = cljs.core.next.call(null,seq__46464_46496__$1);
var G__46506 = null;
var G__46507 = (0);
var G__46508 = (0);
seq__46464_46484 = G__46505;
chunk__46465_46485 = G__46506;
count__46466_46486 = G__46507;
i__46467_46487 = G__46508;
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
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq46457){
var G__46458 = cljs.core.first.call(null,seq46457);
var seq46457__$1 = cljs.core.next.call(null,seq46457);
var G__46459 = cljs.core.first.call(null,seq46457__$1);
var seq46457__$2 = cljs.core.next.call(null,seq46457__$1);
var G__46460 = cljs.core.first.call(null,seq46457__$2);
var seq46457__$3 = cljs.core.next.call(null,seq46457__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46458,G__46459,G__46460,seq46457__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__46513 = arguments.length;
switch (G__46513) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46519 = arguments.length;
var i__4731__auto___46520 = (0);
while(true){
if((i__4731__auto___46520 < len__4730__auto___46519)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46520]));

var G__46521 = (i__4731__auto___46520 + (1));
i__4731__auto___46520 = G__46521;
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
var k_46522__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_46522__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_46522__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__46514_46523 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__46515_46524 = null;
var count__46516_46525 = (0);
var i__46517_46526 = (0);
while(true){
if((i__46517_46526 < count__46516_46525)){
var k_46527__$1 = cljs.core._nth.call(null,chunk__46515_46524,i__46517_46526);
dommy.core.remove_attr_BANG_.call(null,elem,k_46527__$1);


var G__46528 = seq__46514_46523;
var G__46529 = chunk__46515_46524;
var G__46530 = count__46516_46525;
var G__46531 = (i__46517_46526 + (1));
seq__46514_46523 = G__46528;
chunk__46515_46524 = G__46529;
count__46516_46525 = G__46530;
i__46517_46526 = G__46531;
continue;
} else {
var temp__5735__auto___46532 = cljs.core.seq.call(null,seq__46514_46523);
if(temp__5735__auto___46532){
var seq__46514_46533__$1 = temp__5735__auto___46532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46514_46533__$1)){
var c__4550__auto___46534 = cljs.core.chunk_first.call(null,seq__46514_46533__$1);
var G__46535 = cljs.core.chunk_rest.call(null,seq__46514_46533__$1);
var G__46536 = c__4550__auto___46534;
var G__46537 = cljs.core.count.call(null,c__4550__auto___46534);
var G__46538 = (0);
seq__46514_46523 = G__46535;
chunk__46515_46524 = G__46536;
count__46516_46525 = G__46537;
i__46517_46526 = G__46538;
continue;
} else {
var k_46539__$1 = cljs.core.first.call(null,seq__46514_46533__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_46539__$1);


var G__46540 = cljs.core.next.call(null,seq__46514_46533__$1);
var G__46541 = null;
var G__46542 = (0);
var G__46543 = (0);
seq__46514_46523 = G__46540;
chunk__46515_46524 = G__46541;
count__46516_46525 = G__46542;
i__46517_46526 = G__46543;
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
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq46510){
var G__46511 = cljs.core.first.call(null,seq46510);
var seq46510__$1 = cljs.core.next.call(null,seq46510);
var G__46512 = cljs.core.first.call(null,seq46510__$1);
var seq46510__$2 = cljs.core.next.call(null,seq46510__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46511,G__46512,seq46510__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__46545 = arguments.length;
switch (G__46545) {
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
return dommy.core.toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});

dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.call(null,elem,k);
} else {
return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});

dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__46551 = arguments.length;
switch (G__46551) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46565 = arguments.length;
var i__4731__auto___46566 = (0);
while(true){
if((i__4731__auto___46566 < len__4730__auto___46565)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46566]));

var G__46567 = (i__4731__auto___46566 + (1));
i__4731__auto___46566 = G__46567;
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
var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);
if(cljs.core.seq.call(null,classes__$1)){
var temp__5733__auto___46568 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___46568)){
var class_list_46569 = temp__5733__auto___46568;
var seq__46552_46570 = cljs.core.seq.call(null,classes__$1);
var chunk__46553_46571 = null;
var count__46554_46572 = (0);
var i__46555_46573 = (0);
while(true){
if((i__46555_46573 < count__46554_46572)){
var c_46574 = cljs.core._nth.call(null,chunk__46553_46571,i__46555_46573);
class_list_46569.add(c_46574);


var G__46575 = seq__46552_46570;
var G__46576 = chunk__46553_46571;
var G__46577 = count__46554_46572;
var G__46578 = (i__46555_46573 + (1));
seq__46552_46570 = G__46575;
chunk__46553_46571 = G__46576;
count__46554_46572 = G__46577;
i__46555_46573 = G__46578;
continue;
} else {
var temp__5735__auto___46579 = cljs.core.seq.call(null,seq__46552_46570);
if(temp__5735__auto___46579){
var seq__46552_46580__$1 = temp__5735__auto___46579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46552_46580__$1)){
var c__4550__auto___46581 = cljs.core.chunk_first.call(null,seq__46552_46580__$1);
var G__46582 = cljs.core.chunk_rest.call(null,seq__46552_46580__$1);
var G__46583 = c__4550__auto___46581;
var G__46584 = cljs.core.count.call(null,c__4550__auto___46581);
var G__46585 = (0);
seq__46552_46570 = G__46582;
chunk__46553_46571 = G__46583;
count__46554_46572 = G__46584;
i__46555_46573 = G__46585;
continue;
} else {
var c_46586 = cljs.core.first.call(null,seq__46552_46580__$1);
class_list_46569.add(c_46586);


var G__46587 = cljs.core.next.call(null,seq__46552_46580__$1);
var G__46588 = null;
var G__46589 = (0);
var G__46590 = (0);
seq__46552_46570 = G__46587;
chunk__46553_46571 = G__46588;
count__46554_46572 = G__46589;
i__46555_46573 = G__46590;
continue;
}
} else {
}
}
break;
}
} else {
var seq__46556_46591 = cljs.core.seq.call(null,classes__$1);
var chunk__46557_46592 = null;
var count__46558_46593 = (0);
var i__46559_46594 = (0);
while(true){
if((i__46559_46594 < count__46558_46593)){
var c_46595 = cljs.core._nth.call(null,chunk__46557_46592,i__46559_46594);
var class_name_46596 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_46596,c_46595))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_46596 === ""))?c_46595:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_46596)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_46595)].join('')));
}


var G__46597 = seq__46556_46591;
var G__46598 = chunk__46557_46592;
var G__46599 = count__46558_46593;
var G__46600 = (i__46559_46594 + (1));
seq__46556_46591 = G__46597;
chunk__46557_46592 = G__46598;
count__46558_46593 = G__46599;
i__46559_46594 = G__46600;
continue;
} else {
var temp__5735__auto___46601 = cljs.core.seq.call(null,seq__46556_46591);
if(temp__5735__auto___46601){
var seq__46556_46602__$1 = temp__5735__auto___46601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46556_46602__$1)){
var c__4550__auto___46603 = cljs.core.chunk_first.call(null,seq__46556_46602__$1);
var G__46604 = cljs.core.chunk_rest.call(null,seq__46556_46602__$1);
var G__46605 = c__4550__auto___46603;
var G__46606 = cljs.core.count.call(null,c__4550__auto___46603);
var G__46607 = (0);
seq__46556_46591 = G__46604;
chunk__46557_46592 = G__46605;
count__46558_46593 = G__46606;
i__46559_46594 = G__46607;
continue;
} else {
var c_46608 = cljs.core.first.call(null,seq__46556_46602__$1);
var class_name_46609 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_46609,c_46608))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_46609 === ""))?c_46608:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_46609)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_46608)].join('')));
}


var G__46610 = cljs.core.next.call(null,seq__46556_46602__$1);
var G__46611 = null;
var G__46612 = (0);
var G__46613 = (0);
seq__46556_46591 = G__46610;
chunk__46557_46592 = G__46611;
count__46558_46593 = G__46612;
i__46559_46594 = G__46613;
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
var seq__46560_46614 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__46561_46615 = null;
var count__46562_46616 = (0);
var i__46563_46617 = (0);
while(true){
if((i__46563_46617 < count__46562_46616)){
var c_46618 = cljs.core._nth.call(null,chunk__46561_46615,i__46563_46617);
dommy.core.add_class_BANG_.call(null,elem,c_46618);


var G__46619 = seq__46560_46614;
var G__46620 = chunk__46561_46615;
var G__46621 = count__46562_46616;
var G__46622 = (i__46563_46617 + (1));
seq__46560_46614 = G__46619;
chunk__46561_46615 = G__46620;
count__46562_46616 = G__46621;
i__46563_46617 = G__46622;
continue;
} else {
var temp__5735__auto___46623 = cljs.core.seq.call(null,seq__46560_46614);
if(temp__5735__auto___46623){
var seq__46560_46624__$1 = temp__5735__auto___46623;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46560_46624__$1)){
var c__4550__auto___46625 = cljs.core.chunk_first.call(null,seq__46560_46624__$1);
var G__46626 = cljs.core.chunk_rest.call(null,seq__46560_46624__$1);
var G__46627 = c__4550__auto___46625;
var G__46628 = cljs.core.count.call(null,c__4550__auto___46625);
var G__46629 = (0);
seq__46560_46614 = G__46626;
chunk__46561_46615 = G__46627;
count__46562_46616 = G__46628;
i__46563_46617 = G__46629;
continue;
} else {
var c_46630 = cljs.core.first.call(null,seq__46560_46624__$1);
dommy.core.add_class_BANG_.call(null,elem,c_46630);


var G__46631 = cljs.core.next.call(null,seq__46560_46624__$1);
var G__46632 = null;
var G__46633 = (0);
var G__46634 = (0);
seq__46560_46614 = G__46631;
chunk__46561_46615 = G__46632;
count__46562_46616 = G__46633;
i__46563_46617 = G__46634;
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
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq46548){
var G__46549 = cljs.core.first.call(null,seq46548);
var seq46548__$1 = cljs.core.next.call(null,seq46548);
var G__46550 = cljs.core.first.call(null,seq46548__$1);
var seq46548__$2 = cljs.core.next.call(null,seq46548__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46549,G__46550,seq46548__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__46639 = arguments.length;
switch (G__46639) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46645 = arguments.length;
var i__4731__auto___46646 = (0);
while(true){
if((i__4731__auto___46646 < len__4730__auto___46645)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46646]));

var G__46647 = (i__4731__auto___46646 + (1));
i__4731__auto___46646 = G__46647;
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
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto___46648 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___46648)){
var class_list_46649 = temp__5733__auto___46648;
class_list_46649.remove(c__$1);
} else {
var class_name_46650 = dommy.core.class$.call(null,elem);
var new_class_name_46651 = dommy.utils.remove_class_str.call(null,class_name_46650,c__$1);
if((class_name_46650 === new_class_name_46651)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_46651);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__46640 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__46641 = null;
var count__46642 = (0);
var i__46643 = (0);
while(true){
if((i__46643 < count__46642)){
var c = cljs.core._nth.call(null,chunk__46641,i__46643);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__46652 = seq__46640;
var G__46653 = chunk__46641;
var G__46654 = count__46642;
var G__46655 = (i__46643 + (1));
seq__46640 = G__46652;
chunk__46641 = G__46653;
count__46642 = G__46654;
i__46643 = G__46655;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46640);
if(temp__5735__auto__){
var seq__46640__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46640__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46640__$1);
var G__46656 = cljs.core.chunk_rest.call(null,seq__46640__$1);
var G__46657 = c__4550__auto__;
var G__46658 = cljs.core.count.call(null,c__4550__auto__);
var G__46659 = (0);
seq__46640 = G__46656;
chunk__46641 = G__46657;
count__46642 = G__46658;
i__46643 = G__46659;
continue;
} else {
var c = cljs.core.first.call(null,seq__46640__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__46660 = cljs.core.next.call(null,seq__46640__$1);
var G__46661 = null;
var G__46662 = (0);
var G__46663 = (0);
seq__46640 = G__46660;
chunk__46641 = G__46661;
count__46642 = G__46662;
i__46643 = G__46663;
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
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq46636){
var G__46637 = cljs.core.first.call(null,seq46636);
var seq46636__$1 = cljs.core.next.call(null,seq46636);
var G__46638 = cljs.core.first.call(null,seq46636__$1);
var seq46636__$2 = cljs.core.next.call(null,seq46636__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46637,G__46638,seq46636__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__46665 = arguments.length;
switch (G__46665) {
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
var c__$1 = dommy.utils.as_str.call(null,c);
var temp__5733__auto___46667 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___46667)){
var class_list_46668 = temp__5733__auto___46667;
class_list_46668.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.call(null,elem,c__$1,(!(dommy.core.has_class_QMARK_.call(null,elem,c__$1))));
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.call(null,elem,class$);
} else {
dommy.core.remove_class_BANG_.call(null,elem,class$);
}

return elem;
});

dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3;

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__46670 = arguments.length;
switch (G__46670) {
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
return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});

dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});

dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__46673 = arguments.length;
switch (G__46673) {
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
return document.createElement(dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});

dommy.core.create_element.cljs$lang$maxFixedArity = 2;

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__46679 = arguments.length;
switch (G__46679) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46686 = arguments.length;
var i__4731__auto___46687 = (0);
while(true){
if((i__4731__auto___46687 < len__4730__auto___46686)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46687]));

var G__46688 = (i__4731__auto___46687 + (1));
i__4731__auto___46687 = G__46688;
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
var G__46680 = parent;
G__46680.appendChild(child);

return G__46680;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__46681_46689 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__46682_46690 = null;
var count__46683_46691 = (0);
var i__46684_46692 = (0);
while(true){
if((i__46684_46692 < count__46683_46691)){
var c_46693 = cljs.core._nth.call(null,chunk__46682_46690,i__46684_46692);
dommy.core.append_BANG_.call(null,parent,c_46693);


var G__46694 = seq__46681_46689;
var G__46695 = chunk__46682_46690;
var G__46696 = count__46683_46691;
var G__46697 = (i__46684_46692 + (1));
seq__46681_46689 = G__46694;
chunk__46682_46690 = G__46695;
count__46683_46691 = G__46696;
i__46684_46692 = G__46697;
continue;
} else {
var temp__5735__auto___46698 = cljs.core.seq.call(null,seq__46681_46689);
if(temp__5735__auto___46698){
var seq__46681_46699__$1 = temp__5735__auto___46698;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46681_46699__$1)){
var c__4550__auto___46700 = cljs.core.chunk_first.call(null,seq__46681_46699__$1);
var G__46701 = cljs.core.chunk_rest.call(null,seq__46681_46699__$1);
var G__46702 = c__4550__auto___46700;
var G__46703 = cljs.core.count.call(null,c__4550__auto___46700);
var G__46704 = (0);
seq__46681_46689 = G__46701;
chunk__46682_46690 = G__46702;
count__46683_46691 = G__46703;
i__46684_46692 = G__46704;
continue;
} else {
var c_46705 = cljs.core.first.call(null,seq__46681_46699__$1);
dommy.core.append_BANG_.call(null,parent,c_46705);


var G__46706 = cljs.core.next.call(null,seq__46681_46699__$1);
var G__46707 = null;
var G__46708 = (0);
var G__46709 = (0);
seq__46681_46689 = G__46706;
chunk__46682_46690 = G__46707;
count__46683_46691 = G__46708;
i__46684_46692 = G__46709;
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
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq46676){
var G__46677 = cljs.core.first.call(null,seq46676);
var seq46676__$1 = cljs.core.next.call(null,seq46676);
var G__46678 = cljs.core.first.call(null,seq46676__$1);
var seq46676__$2 = cljs.core.next.call(null,seq46676__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46677,G__46678,seq46676__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__46714 = arguments.length;
switch (G__46714) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___46721 = arguments.length;
var i__4731__auto___46722 = (0);
while(true){
if((i__4731__auto___46722 < len__4730__auto___46721)){
args_arr__4751__auto__.push((arguments[i__4731__auto___46722]));

var G__46723 = (i__4731__auto___46722 + (1));
i__4731__auto___46722 = G__46723;
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
var G__46715 = parent;
G__46715.insertBefore(child,parent.firstChild);

return G__46715;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__46716_46724 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__46717_46725 = null;
var count__46718_46726 = (0);
var i__46719_46727 = (0);
while(true){
if((i__46719_46727 < count__46718_46726)){
var c_46728 = cljs.core._nth.call(null,chunk__46717_46725,i__46719_46727);
dommy.core.prepend_BANG_.call(null,parent,c_46728);


var G__46729 = seq__46716_46724;
var G__46730 = chunk__46717_46725;
var G__46731 = count__46718_46726;
var G__46732 = (i__46719_46727 + (1));
seq__46716_46724 = G__46729;
chunk__46717_46725 = G__46730;
count__46718_46726 = G__46731;
i__46719_46727 = G__46732;
continue;
} else {
var temp__5735__auto___46733 = cljs.core.seq.call(null,seq__46716_46724);
if(temp__5735__auto___46733){
var seq__46716_46734__$1 = temp__5735__auto___46733;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46716_46734__$1)){
var c__4550__auto___46735 = cljs.core.chunk_first.call(null,seq__46716_46734__$1);
var G__46736 = cljs.core.chunk_rest.call(null,seq__46716_46734__$1);
var G__46737 = c__4550__auto___46735;
var G__46738 = cljs.core.count.call(null,c__4550__auto___46735);
var G__46739 = (0);
seq__46716_46724 = G__46736;
chunk__46717_46725 = G__46737;
count__46718_46726 = G__46738;
i__46719_46727 = G__46739;
continue;
} else {
var c_46740 = cljs.core.first.call(null,seq__46716_46734__$1);
dommy.core.prepend_BANG_.call(null,parent,c_46740);


var G__46741 = cljs.core.next.call(null,seq__46716_46734__$1);
var G__46742 = null;
var G__46743 = (0);
var G__46744 = (0);
seq__46716_46724 = G__46741;
chunk__46717_46725 = G__46742;
count__46718_46726 = G__46743;
i__46719_46727 = G__46744;
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
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq46711){
var G__46712 = cljs.core.first.call(null,seq46711);
var seq46711__$1 = cljs.core.next.call(null,seq46711);
var G__46713 = cljs.core.first.call(null,seq46711__$1);
var seq46711__$2 = cljs.core.next.call(null,seq46711__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46712,G__46713,seq46711__$2);
});

dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent.call(null,other);
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
var temp__5733__auto___46745 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___46745)){
var next_46746 = temp__5733__auto___46745;
dommy.core.insert_before_BANG_.call(null,elem,next_46746);
} else {
dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent.call(null,elem);
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
return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__46748 = arguments.length;
switch (G__46748) {
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
var p = dommy.core.parent.call(null,elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.call(null,p,elem);
});

dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__46749 = p;
G__46749.removeChild(elem);

return G__46749;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__46751){
var vec__46752 = p__46751;
var special_mouse_event = cljs.core.nth.call(null,vec__46752,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__46752,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__46752,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__46752,special_mouse_event,real_mouse_event){
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
return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else {
return and__4120__auto__;
}
})())){
return null;
} else {
return f.call(null,event);
}
});
;})(vec__46752,special_mouse_event,real_mouse_event))
});})(vec__46752,special_mouse_event,real_mouse_event))
])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.call(null,elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4120__auto__ = selected_target;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4120__auto__;
}
})())){
event.selectedTarget = selected_target;

return f.call(null,event);
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
var len__4730__auto___46758 = arguments.length;
var i__4731__auto___46759 = (0);
while(true){
if((i__4731__auto___46759 < len__4730__auto___46758)){
args__4736__auto__.push((arguments[i__4731__auto___46759]));

var G__46760 = (i__4731__auto___46759 + (1));
i__4731__auto___46759 = G__46760;
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
return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
});

dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq46755){
var G__46756 = cljs.core.first.call(null,seq46755);
var seq46755__$1 = cljs.core.next.call(null,seq46755);
var G__46757 = cljs.core.first.call(null,seq46755__$1);
var seq46755__$2 = cljs.core.next.call(null,seq46755__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46756,G__46757,seq46755__$2);
});

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_.call(null,elem_sel)){
return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
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
var len__4730__auto___46842 = arguments.length;
var i__4731__auto___46843 = (0);
while(true){
if((i__4731__auto___46843 < len__4730__auto___46842)){
args__4736__auto__.push((arguments[i__4731__auto___46843]));

var G__46844 = (i__4731__auto___46843 + (1));
i__4731__auto___46843 = G__46844;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__46763_46845 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_46846 = cljs.core.nth.call(null,vec__46763_46845,(0),null);
var selector_46847 = cljs.core.nth.call(null,vec__46763_46845,(1),null);
var seq__46766_46848 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__46773_46849 = null;
var count__46774_46850 = (0);
var i__46775_46851 = (0);
while(true){
if((i__46775_46851 < count__46774_46850)){
var vec__46812_46852 = cljs.core._nth.call(null,chunk__46773_46849,i__46775_46851);
var orig_type_46853 = cljs.core.nth.call(null,vec__46812_46852,(0),null);
var f_46854 = cljs.core.nth.call(null,vec__46812_46852,(1),null);
var seq__46776_46855 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_46853,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_46853,cljs.core.identity])));
var chunk__46778_46856 = null;
var count__46779_46857 = (0);
var i__46780_46858 = (0);
while(true){
if((i__46780_46858 < count__46779_46857)){
var vec__46821_46859 = cljs.core._nth.call(null,chunk__46778_46856,i__46780_46858);
var actual_type_46860 = cljs.core.nth.call(null,vec__46821_46859,(0),null);
var factory_46861 = cljs.core.nth.call(null,vec__46821_46859,(1),null);
var canonical_f_46862 = (cljs.core.truth_(selector_46847)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46846,selector_46847):cljs.core.identity).call(null,factory_46861.call(null,f_46854));
dommy.core.update_event_listeners_BANG_.call(null,elem_46846,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46847,actual_type_46860,f_46854], null),canonical_f_46862);

if(cljs.core.truth_(elem_46846.addEventListener)){
elem_46846.addEventListener(cljs.core.name.call(null,actual_type_46860),canonical_f_46862);
} else {
elem_46846.attachEvent(cljs.core.name.call(null,actual_type_46860),canonical_f_46862);
}


var G__46863 = seq__46776_46855;
var G__46864 = chunk__46778_46856;
var G__46865 = count__46779_46857;
var G__46866 = (i__46780_46858 + (1));
seq__46776_46855 = G__46863;
chunk__46778_46856 = G__46864;
count__46779_46857 = G__46865;
i__46780_46858 = G__46866;
continue;
} else {
var temp__5735__auto___46867 = cljs.core.seq.call(null,seq__46776_46855);
if(temp__5735__auto___46867){
var seq__46776_46868__$1 = temp__5735__auto___46867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46776_46868__$1)){
var c__4550__auto___46869 = cljs.core.chunk_first.call(null,seq__46776_46868__$1);
var G__46870 = cljs.core.chunk_rest.call(null,seq__46776_46868__$1);
var G__46871 = c__4550__auto___46869;
var G__46872 = cljs.core.count.call(null,c__4550__auto___46869);
var G__46873 = (0);
seq__46776_46855 = G__46870;
chunk__46778_46856 = G__46871;
count__46779_46857 = G__46872;
i__46780_46858 = G__46873;
continue;
} else {
var vec__46824_46874 = cljs.core.first.call(null,seq__46776_46868__$1);
var actual_type_46875 = cljs.core.nth.call(null,vec__46824_46874,(0),null);
var factory_46876 = cljs.core.nth.call(null,vec__46824_46874,(1),null);
var canonical_f_46877 = (cljs.core.truth_(selector_46847)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46846,selector_46847):cljs.core.identity).call(null,factory_46876.call(null,f_46854));
dommy.core.update_event_listeners_BANG_.call(null,elem_46846,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46847,actual_type_46875,f_46854], null),canonical_f_46877);

if(cljs.core.truth_(elem_46846.addEventListener)){
elem_46846.addEventListener(cljs.core.name.call(null,actual_type_46875),canonical_f_46877);
} else {
elem_46846.attachEvent(cljs.core.name.call(null,actual_type_46875),canonical_f_46877);
}


var G__46878 = cljs.core.next.call(null,seq__46776_46868__$1);
var G__46879 = null;
var G__46880 = (0);
var G__46881 = (0);
seq__46776_46855 = G__46878;
chunk__46778_46856 = G__46879;
count__46779_46857 = G__46880;
i__46780_46858 = G__46881;
continue;
}
} else {
}
}
break;
}

var G__46882 = seq__46766_46848;
var G__46883 = chunk__46773_46849;
var G__46884 = count__46774_46850;
var G__46885 = (i__46775_46851 + (1));
seq__46766_46848 = G__46882;
chunk__46773_46849 = G__46883;
count__46774_46850 = G__46884;
i__46775_46851 = G__46885;
continue;
} else {
var temp__5735__auto___46886 = cljs.core.seq.call(null,seq__46766_46848);
if(temp__5735__auto___46886){
var seq__46766_46887__$1 = temp__5735__auto___46886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46766_46887__$1)){
var c__4550__auto___46888 = cljs.core.chunk_first.call(null,seq__46766_46887__$1);
var G__46889 = cljs.core.chunk_rest.call(null,seq__46766_46887__$1);
var G__46890 = c__4550__auto___46888;
var G__46891 = cljs.core.count.call(null,c__4550__auto___46888);
var G__46892 = (0);
seq__46766_46848 = G__46889;
chunk__46773_46849 = G__46890;
count__46774_46850 = G__46891;
i__46775_46851 = G__46892;
continue;
} else {
var vec__46827_46893 = cljs.core.first.call(null,seq__46766_46887__$1);
var orig_type_46894 = cljs.core.nth.call(null,vec__46827_46893,(0),null);
var f_46895 = cljs.core.nth.call(null,vec__46827_46893,(1),null);
var seq__46767_46896 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_46894,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_46894,cljs.core.identity])));
var chunk__46769_46897 = null;
var count__46770_46898 = (0);
var i__46771_46899 = (0);
while(true){
if((i__46771_46899 < count__46770_46898)){
var vec__46836_46900 = cljs.core._nth.call(null,chunk__46769_46897,i__46771_46899);
var actual_type_46901 = cljs.core.nth.call(null,vec__46836_46900,(0),null);
var factory_46902 = cljs.core.nth.call(null,vec__46836_46900,(1),null);
var canonical_f_46903 = (cljs.core.truth_(selector_46847)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46846,selector_46847):cljs.core.identity).call(null,factory_46902.call(null,f_46895));
dommy.core.update_event_listeners_BANG_.call(null,elem_46846,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46847,actual_type_46901,f_46895], null),canonical_f_46903);

if(cljs.core.truth_(elem_46846.addEventListener)){
elem_46846.addEventListener(cljs.core.name.call(null,actual_type_46901),canonical_f_46903);
} else {
elem_46846.attachEvent(cljs.core.name.call(null,actual_type_46901),canonical_f_46903);
}


var G__46904 = seq__46767_46896;
var G__46905 = chunk__46769_46897;
var G__46906 = count__46770_46898;
var G__46907 = (i__46771_46899 + (1));
seq__46767_46896 = G__46904;
chunk__46769_46897 = G__46905;
count__46770_46898 = G__46906;
i__46771_46899 = G__46907;
continue;
} else {
var temp__5735__auto___46908__$1 = cljs.core.seq.call(null,seq__46767_46896);
if(temp__5735__auto___46908__$1){
var seq__46767_46909__$1 = temp__5735__auto___46908__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46767_46909__$1)){
var c__4550__auto___46910 = cljs.core.chunk_first.call(null,seq__46767_46909__$1);
var G__46911 = cljs.core.chunk_rest.call(null,seq__46767_46909__$1);
var G__46912 = c__4550__auto___46910;
var G__46913 = cljs.core.count.call(null,c__4550__auto___46910);
var G__46914 = (0);
seq__46767_46896 = G__46911;
chunk__46769_46897 = G__46912;
count__46770_46898 = G__46913;
i__46771_46899 = G__46914;
continue;
} else {
var vec__46839_46915 = cljs.core.first.call(null,seq__46767_46909__$1);
var actual_type_46916 = cljs.core.nth.call(null,vec__46839_46915,(0),null);
var factory_46917 = cljs.core.nth.call(null,vec__46839_46915,(1),null);
var canonical_f_46918 = (cljs.core.truth_(selector_46847)?cljs.core.partial.call(null,dommy.core.live_listener,elem_46846,selector_46847):cljs.core.identity).call(null,factory_46917.call(null,f_46895));
dommy.core.update_event_listeners_BANG_.call(null,elem_46846,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_46847,actual_type_46916,f_46895], null),canonical_f_46918);

if(cljs.core.truth_(elem_46846.addEventListener)){
elem_46846.addEventListener(cljs.core.name.call(null,actual_type_46916),canonical_f_46918);
} else {
elem_46846.attachEvent(cljs.core.name.call(null,actual_type_46916),canonical_f_46918);
}


var G__46919 = cljs.core.next.call(null,seq__46767_46909__$1);
var G__46920 = null;
var G__46921 = (0);
var G__46922 = (0);
seq__46767_46896 = G__46919;
chunk__46769_46897 = G__46920;
count__46770_46898 = G__46921;
i__46771_46899 = G__46922;
continue;
}
} else {
}
}
break;
}

var G__46923 = cljs.core.next.call(null,seq__46766_46887__$1);
var G__46924 = null;
var G__46925 = (0);
var G__46926 = (0);
seq__46766_46848 = G__46923;
chunk__46773_46849 = G__46924;
count__46774_46850 = G__46925;
i__46775_46851 = G__46926;
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
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq46761){
var G__46762 = cljs.core.first.call(null,seq46761);
var seq46761__$1 = cljs.core.next.call(null,seq46761);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46762,seq46761__$1);
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
var len__4730__auto___47008 = arguments.length;
var i__4731__auto___47009 = (0);
while(true){
if((i__4731__auto___47009 < len__4730__auto___47008)){
args__4736__auto__.push((arguments[i__4731__auto___47009]));

var G__47010 = (i__4731__auto___47009 + (1));
i__4731__auto___47009 = G__47010;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__46929_47011 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_47012 = cljs.core.nth.call(null,vec__46929_47011,(0),null);
var selector_47013 = cljs.core.nth.call(null,vec__46929_47011,(1),null);
var seq__46932_47014 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__46939_47015 = null;
var count__46940_47016 = (0);
var i__46941_47017 = (0);
while(true){
if((i__46941_47017 < count__46940_47016)){
var vec__46978_47018 = cljs.core._nth.call(null,chunk__46939_47015,i__46941_47017);
var orig_type_47019 = cljs.core.nth.call(null,vec__46978_47018,(0),null);
var f_47020 = cljs.core.nth.call(null,vec__46978_47018,(1),null);
var seq__46942_47021 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47019,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_47019,cljs.core.identity])));
var chunk__46944_47022 = null;
var count__46945_47023 = (0);
var i__46946_47024 = (0);
while(true){
if((i__46946_47024 < count__46945_47023)){
var vec__46987_47025 = cljs.core._nth.call(null,chunk__46944_47022,i__46946_47024);
var actual_type_47026 = cljs.core.nth.call(null,vec__46987_47025,(0),null);
var __47027 = cljs.core.nth.call(null,vec__46987_47025,(1),null);
var keys_47028 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47013,actual_type_47026,f_47020], null);
var canonical_f_47029 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47012),keys_47028);
dommy.core.update_event_listeners_BANG_.call(null,elem_47012,dommy.utils.dissoc_in,keys_47028);

if(cljs.core.truth_(elem_47012.removeEventListener)){
elem_47012.removeEventListener(cljs.core.name.call(null,actual_type_47026),canonical_f_47029);
} else {
elem_47012.detachEvent(cljs.core.name.call(null,actual_type_47026),canonical_f_47029);
}


var G__47030 = seq__46942_47021;
var G__47031 = chunk__46944_47022;
var G__47032 = count__46945_47023;
var G__47033 = (i__46946_47024 + (1));
seq__46942_47021 = G__47030;
chunk__46944_47022 = G__47031;
count__46945_47023 = G__47032;
i__46946_47024 = G__47033;
continue;
} else {
var temp__5735__auto___47034 = cljs.core.seq.call(null,seq__46942_47021);
if(temp__5735__auto___47034){
var seq__46942_47035__$1 = temp__5735__auto___47034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46942_47035__$1)){
var c__4550__auto___47036 = cljs.core.chunk_first.call(null,seq__46942_47035__$1);
var G__47037 = cljs.core.chunk_rest.call(null,seq__46942_47035__$1);
var G__47038 = c__4550__auto___47036;
var G__47039 = cljs.core.count.call(null,c__4550__auto___47036);
var G__47040 = (0);
seq__46942_47021 = G__47037;
chunk__46944_47022 = G__47038;
count__46945_47023 = G__47039;
i__46946_47024 = G__47040;
continue;
} else {
var vec__46990_47041 = cljs.core.first.call(null,seq__46942_47035__$1);
var actual_type_47042 = cljs.core.nth.call(null,vec__46990_47041,(0),null);
var __47043 = cljs.core.nth.call(null,vec__46990_47041,(1),null);
var keys_47044 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47013,actual_type_47042,f_47020], null);
var canonical_f_47045 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47012),keys_47044);
dommy.core.update_event_listeners_BANG_.call(null,elem_47012,dommy.utils.dissoc_in,keys_47044);

if(cljs.core.truth_(elem_47012.removeEventListener)){
elem_47012.removeEventListener(cljs.core.name.call(null,actual_type_47042),canonical_f_47045);
} else {
elem_47012.detachEvent(cljs.core.name.call(null,actual_type_47042),canonical_f_47045);
}


var G__47046 = cljs.core.next.call(null,seq__46942_47035__$1);
var G__47047 = null;
var G__47048 = (0);
var G__47049 = (0);
seq__46942_47021 = G__47046;
chunk__46944_47022 = G__47047;
count__46945_47023 = G__47048;
i__46946_47024 = G__47049;
continue;
}
} else {
}
}
break;
}

var G__47050 = seq__46932_47014;
var G__47051 = chunk__46939_47015;
var G__47052 = count__46940_47016;
var G__47053 = (i__46941_47017 + (1));
seq__46932_47014 = G__47050;
chunk__46939_47015 = G__47051;
count__46940_47016 = G__47052;
i__46941_47017 = G__47053;
continue;
} else {
var temp__5735__auto___47054 = cljs.core.seq.call(null,seq__46932_47014);
if(temp__5735__auto___47054){
var seq__46932_47055__$1 = temp__5735__auto___47054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46932_47055__$1)){
var c__4550__auto___47056 = cljs.core.chunk_first.call(null,seq__46932_47055__$1);
var G__47057 = cljs.core.chunk_rest.call(null,seq__46932_47055__$1);
var G__47058 = c__4550__auto___47056;
var G__47059 = cljs.core.count.call(null,c__4550__auto___47056);
var G__47060 = (0);
seq__46932_47014 = G__47057;
chunk__46939_47015 = G__47058;
count__46940_47016 = G__47059;
i__46941_47017 = G__47060;
continue;
} else {
var vec__46993_47061 = cljs.core.first.call(null,seq__46932_47055__$1);
var orig_type_47062 = cljs.core.nth.call(null,vec__46993_47061,(0),null);
var f_47063 = cljs.core.nth.call(null,vec__46993_47061,(1),null);
var seq__46933_47064 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_47062,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_47062,cljs.core.identity])));
var chunk__46935_47065 = null;
var count__46936_47066 = (0);
var i__46937_47067 = (0);
while(true){
if((i__46937_47067 < count__46936_47066)){
var vec__47002_47068 = cljs.core._nth.call(null,chunk__46935_47065,i__46937_47067);
var actual_type_47069 = cljs.core.nth.call(null,vec__47002_47068,(0),null);
var __47070 = cljs.core.nth.call(null,vec__47002_47068,(1),null);
var keys_47071 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47013,actual_type_47069,f_47063], null);
var canonical_f_47072 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47012),keys_47071);
dommy.core.update_event_listeners_BANG_.call(null,elem_47012,dommy.utils.dissoc_in,keys_47071);

if(cljs.core.truth_(elem_47012.removeEventListener)){
elem_47012.removeEventListener(cljs.core.name.call(null,actual_type_47069),canonical_f_47072);
} else {
elem_47012.detachEvent(cljs.core.name.call(null,actual_type_47069),canonical_f_47072);
}


var G__47073 = seq__46933_47064;
var G__47074 = chunk__46935_47065;
var G__47075 = count__46936_47066;
var G__47076 = (i__46937_47067 + (1));
seq__46933_47064 = G__47073;
chunk__46935_47065 = G__47074;
count__46936_47066 = G__47075;
i__46937_47067 = G__47076;
continue;
} else {
var temp__5735__auto___47077__$1 = cljs.core.seq.call(null,seq__46933_47064);
if(temp__5735__auto___47077__$1){
var seq__46933_47078__$1 = temp__5735__auto___47077__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46933_47078__$1)){
var c__4550__auto___47079 = cljs.core.chunk_first.call(null,seq__46933_47078__$1);
var G__47080 = cljs.core.chunk_rest.call(null,seq__46933_47078__$1);
var G__47081 = c__4550__auto___47079;
var G__47082 = cljs.core.count.call(null,c__4550__auto___47079);
var G__47083 = (0);
seq__46933_47064 = G__47080;
chunk__46935_47065 = G__47081;
count__46936_47066 = G__47082;
i__46937_47067 = G__47083;
continue;
} else {
var vec__47005_47084 = cljs.core.first.call(null,seq__46933_47078__$1);
var actual_type_47085 = cljs.core.nth.call(null,vec__47005_47084,(0),null);
var __47086 = cljs.core.nth.call(null,vec__47005_47084,(1),null);
var keys_47087 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_47013,actual_type_47085,f_47063], null);
var canonical_f_47088 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_47012),keys_47087);
dommy.core.update_event_listeners_BANG_.call(null,elem_47012,dommy.utils.dissoc_in,keys_47087);

if(cljs.core.truth_(elem_47012.removeEventListener)){
elem_47012.removeEventListener(cljs.core.name.call(null,actual_type_47085),canonical_f_47088);
} else {
elem_47012.detachEvent(cljs.core.name.call(null,actual_type_47085),canonical_f_47088);
}


var G__47089 = cljs.core.next.call(null,seq__46933_47078__$1);
var G__47090 = null;
var G__47091 = (0);
var G__47092 = (0);
seq__46933_47064 = G__47089;
chunk__46935_47065 = G__47090;
count__46936_47066 = G__47091;
i__46937_47067 = G__47092;
continue;
}
} else {
}
}
break;
}

var G__47093 = cljs.core.next.call(null,seq__46932_47055__$1);
var G__47094 = null;
var G__47095 = (0);
var G__47096 = (0);
seq__46932_47014 = G__47093;
chunk__46939_47015 = G__47094;
count__46940_47016 = G__47095;
i__46941_47017 = G__47096;
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
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq46927){
var G__46928 = cljs.core.first.call(null,seq46927);
var seq46927__$1 = cljs.core.next.call(null,seq46927);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46928,seq46927__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___47118 = arguments.length;
var i__4731__auto___47119 = (0);
while(true){
if((i__4731__auto___47119 < len__4730__auto___47118)){
args__4736__auto__.push((arguments[i__4731__auto___47119]));

var G__47120 = (i__4731__auto___47119 + (1));
i__4731__auto___47119 = G__47120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__47099_47121 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_47122 = cljs.core.nth.call(null,vec__47099_47121,(0),null);
var selector_47123 = cljs.core.nth.call(null,vec__47099_47121,(1),null);
var seq__47102_47124 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__47103_47125 = null;
var count__47104_47126 = (0);
var i__47105_47127 = (0);
while(true){
if((i__47105_47127 < count__47104_47126)){
var vec__47112_47128 = cljs.core._nth.call(null,chunk__47103_47125,i__47105_47127);
var type_47129 = cljs.core.nth.call(null,vec__47112_47128,(0),null);
var f_47130 = cljs.core.nth.call(null,vec__47112_47128,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_47129,((function (seq__47102_47124,chunk__47103_47125,count__47104_47126,i__47105_47127,vec__47112_47128,type_47129,f_47130,vec__47099_47121,elem_47122,selector_47123){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_47129,dommy$core$this_fn);

return f_47130.call(null,e);
});})(seq__47102_47124,chunk__47103_47125,count__47104_47126,i__47105_47127,vec__47112_47128,type_47129,f_47130,vec__47099_47121,elem_47122,selector_47123))
);


var G__47131 = seq__47102_47124;
var G__47132 = chunk__47103_47125;
var G__47133 = count__47104_47126;
var G__47134 = (i__47105_47127 + (1));
seq__47102_47124 = G__47131;
chunk__47103_47125 = G__47132;
count__47104_47126 = G__47133;
i__47105_47127 = G__47134;
continue;
} else {
var temp__5735__auto___47135 = cljs.core.seq.call(null,seq__47102_47124);
if(temp__5735__auto___47135){
var seq__47102_47136__$1 = temp__5735__auto___47135;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47102_47136__$1)){
var c__4550__auto___47137 = cljs.core.chunk_first.call(null,seq__47102_47136__$1);
var G__47138 = cljs.core.chunk_rest.call(null,seq__47102_47136__$1);
var G__47139 = c__4550__auto___47137;
var G__47140 = cljs.core.count.call(null,c__4550__auto___47137);
var G__47141 = (0);
seq__47102_47124 = G__47138;
chunk__47103_47125 = G__47139;
count__47104_47126 = G__47140;
i__47105_47127 = G__47141;
continue;
} else {
var vec__47115_47142 = cljs.core.first.call(null,seq__47102_47136__$1);
var type_47143 = cljs.core.nth.call(null,vec__47115_47142,(0),null);
var f_47144 = cljs.core.nth.call(null,vec__47115_47142,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_47143,((function (seq__47102_47124,chunk__47103_47125,count__47104_47126,i__47105_47127,vec__47115_47142,type_47143,f_47144,seq__47102_47136__$1,temp__5735__auto___47135,vec__47099_47121,elem_47122,selector_47123){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_47143,dommy$core$this_fn);

return f_47144.call(null,e);
});})(seq__47102_47124,chunk__47103_47125,count__47104_47126,i__47105_47127,vec__47115_47142,type_47143,f_47144,seq__47102_47136__$1,temp__5735__auto___47135,vec__47099_47121,elem_47122,selector_47123))
);


var G__47145 = cljs.core.next.call(null,seq__47102_47136__$1);
var G__47146 = null;
var G__47147 = (0);
var G__47148 = (0);
seq__47102_47124 = G__47145;
chunk__47103_47125 = G__47146;
count__47104_47126 = G__47147;
i__47105_47127 = G__47148;
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
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq47097){
var G__47098 = cljs.core.first.call(null,seq47097);
var seq47097__$1 = cljs.core.next.call(null,seq47097);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47098,seq47097__$1);
});


//# sourceMappingURL=core.js.map?rel=1562998563914
