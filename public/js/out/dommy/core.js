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
var G__42691 = arguments.length;
switch (G__42691) {
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
var G__42694 = arguments.length;
switch (G__42694) {
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
var G__42698 = arguments.length;
switch (G__42698) {
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__42696_SHARP_){
return (!((p1__42696_SHARP_ === base)));
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
var len__4730__auto___42718 = arguments.length;
var i__4731__auto___42719 = (0);
while(true){
if((i__4731__auto___42719 < len__4730__auto___42718)){
args__4736__auto__.push((arguments[i__4731__auto___42719]));

var G__42720 = (i__4731__auto___42719 + (1));
i__4731__auto___42719 = G__42720;
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
var seq__42702_42721 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__42703_42722 = null;
var count__42704_42723 = (0);
var i__42705_42724 = (0);
while(true){
if((i__42705_42724 < count__42704_42723)){
var vec__42712_42725 = cljs.core._nth.call(null,chunk__42703_42722,i__42705_42724);
var k_42726 = cljs.core.nth.call(null,vec__42712_42725,(0),null);
var v_42727 = cljs.core.nth.call(null,vec__42712_42725,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_42726),v_42727);


var G__42728 = seq__42702_42721;
var G__42729 = chunk__42703_42722;
var G__42730 = count__42704_42723;
var G__42731 = (i__42705_42724 + (1));
seq__42702_42721 = G__42728;
chunk__42703_42722 = G__42729;
count__42704_42723 = G__42730;
i__42705_42724 = G__42731;
continue;
} else {
var temp__5735__auto___42732 = cljs.core.seq.call(null,seq__42702_42721);
if(temp__5735__auto___42732){
var seq__42702_42733__$1 = temp__5735__auto___42732;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42702_42733__$1)){
var c__4550__auto___42734 = cljs.core.chunk_first.call(null,seq__42702_42733__$1);
var G__42735 = cljs.core.chunk_rest.call(null,seq__42702_42733__$1);
var G__42736 = c__4550__auto___42734;
var G__42737 = cljs.core.count.call(null,c__4550__auto___42734);
var G__42738 = (0);
seq__42702_42721 = G__42735;
chunk__42703_42722 = G__42736;
count__42704_42723 = G__42737;
i__42705_42724 = G__42738;
continue;
} else {
var vec__42715_42739 = cljs.core.first.call(null,seq__42702_42733__$1);
var k_42740 = cljs.core.nth.call(null,vec__42715_42739,(0),null);
var v_42741 = cljs.core.nth.call(null,vec__42715_42739,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_42740),v_42741);


var G__42742 = cljs.core.next.call(null,seq__42702_42733__$1);
var G__42743 = null;
var G__42744 = (0);
var G__42745 = (0);
seq__42702_42721 = G__42742;
chunk__42703_42722 = G__42743;
count__42704_42723 = G__42744;
i__42705_42724 = G__42745;
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
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq42700){
var G__42701 = cljs.core.first.call(null,seq42700);
var seq42700__$1 = cljs.core.next.call(null,seq42700);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42701,seq42700__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42752 = arguments.length;
var i__4731__auto___42753 = (0);
while(true){
if((i__4731__auto___42753 < len__4730__auto___42752)){
args__4736__auto__.push((arguments[i__4731__auto___42753]));

var G__42754 = (i__4731__auto___42753 + (1));
i__4731__auto___42753 = G__42754;
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
var seq__42748_42755 = cljs.core.seq.call(null,keywords);
var chunk__42749_42756 = null;
var count__42750_42757 = (0);
var i__42751_42758 = (0);
while(true){
if((i__42751_42758 < count__42750_42757)){
var kw_42759 = cljs.core._nth.call(null,chunk__42749_42756,i__42751_42758);
style.removeProperty(dommy.utils.as_str.call(null,kw_42759));


var G__42760 = seq__42748_42755;
var G__42761 = chunk__42749_42756;
var G__42762 = count__42750_42757;
var G__42763 = (i__42751_42758 + (1));
seq__42748_42755 = G__42760;
chunk__42749_42756 = G__42761;
count__42750_42757 = G__42762;
i__42751_42758 = G__42763;
continue;
} else {
var temp__5735__auto___42764 = cljs.core.seq.call(null,seq__42748_42755);
if(temp__5735__auto___42764){
var seq__42748_42765__$1 = temp__5735__auto___42764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42748_42765__$1)){
var c__4550__auto___42766 = cljs.core.chunk_first.call(null,seq__42748_42765__$1);
var G__42767 = cljs.core.chunk_rest.call(null,seq__42748_42765__$1);
var G__42768 = c__4550__auto___42766;
var G__42769 = cljs.core.count.call(null,c__4550__auto___42766);
var G__42770 = (0);
seq__42748_42755 = G__42767;
chunk__42749_42756 = G__42768;
count__42750_42757 = G__42769;
i__42751_42758 = G__42770;
continue;
} else {
var kw_42771 = cljs.core.first.call(null,seq__42748_42765__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_42771));


var G__42772 = cljs.core.next.call(null,seq__42748_42765__$1);
var G__42773 = null;
var G__42774 = (0);
var G__42775 = (0);
seq__42748_42755 = G__42772;
chunk__42749_42756 = G__42773;
count__42750_42757 = G__42774;
i__42751_42758 = G__42775;
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
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq42746){
var G__42747 = cljs.core.first.call(null,seq42746);
var seq42746__$1 = cljs.core.next.call(null,seq42746);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42747,seq42746__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42794 = arguments.length;
var i__4731__auto___42795 = (0);
while(true){
if((i__4731__auto___42795 < len__4730__auto___42794)){
args__4736__auto__.push((arguments[i__4731__auto___42795]));

var G__42796 = (i__4731__auto___42795 + (1));
i__4731__auto___42795 = G__42796;
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

var seq__42778_42797 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__42779_42798 = null;
var count__42780_42799 = (0);
var i__42781_42800 = (0);
while(true){
if((i__42781_42800 < count__42780_42799)){
var vec__42788_42801 = cljs.core._nth.call(null,chunk__42779_42798,i__42781_42800);
var k_42802 = cljs.core.nth.call(null,vec__42788_42801,(0),null);
var v_42803 = cljs.core.nth.call(null,vec__42788_42801,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_42802,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_42803),"px"].join(''));


var G__42804 = seq__42778_42797;
var G__42805 = chunk__42779_42798;
var G__42806 = count__42780_42799;
var G__42807 = (i__42781_42800 + (1));
seq__42778_42797 = G__42804;
chunk__42779_42798 = G__42805;
count__42780_42799 = G__42806;
i__42781_42800 = G__42807;
continue;
} else {
var temp__5735__auto___42808 = cljs.core.seq.call(null,seq__42778_42797);
if(temp__5735__auto___42808){
var seq__42778_42809__$1 = temp__5735__auto___42808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42778_42809__$1)){
var c__4550__auto___42810 = cljs.core.chunk_first.call(null,seq__42778_42809__$1);
var G__42811 = cljs.core.chunk_rest.call(null,seq__42778_42809__$1);
var G__42812 = c__4550__auto___42810;
var G__42813 = cljs.core.count.call(null,c__4550__auto___42810);
var G__42814 = (0);
seq__42778_42797 = G__42811;
chunk__42779_42798 = G__42812;
count__42780_42799 = G__42813;
i__42781_42800 = G__42814;
continue;
} else {
var vec__42791_42815 = cljs.core.first.call(null,seq__42778_42809__$1);
var k_42816 = cljs.core.nth.call(null,vec__42791_42815,(0),null);
var v_42817 = cljs.core.nth.call(null,vec__42791_42815,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_42816,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_42817),"px"].join(''));


var G__42818 = cljs.core.next.call(null,seq__42778_42809__$1);
var G__42819 = null;
var G__42820 = (0);
var G__42821 = (0);
seq__42778_42797 = G__42818;
chunk__42779_42798 = G__42819;
count__42780_42799 = G__42820;
i__42781_42800 = G__42821;
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
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq42776){
var G__42777 = cljs.core.first.call(null,seq42776);
var seq42776__$1 = cljs.core.next.call(null,seq42776);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42777,seq42776__$1);
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
var G__42827 = arguments.length;
switch (G__42827) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___42847 = arguments.length;
var i__4731__auto___42848 = (0);
while(true){
if((i__4731__auto___42848 < len__4730__auto___42847)){
args_arr__4751__auto__.push((arguments[i__4731__auto___42848]));

var G__42849 = (i__4731__auto___42848 + (1));
i__4731__auto___42848 = G__42849;
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
var G__42828 = elem;
(G__42828[k__$1] = v);

return G__42828;
} else {
var G__42829 = elem;
G__42829.setAttribute(k__$1,v);

return G__42829;
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

var seq__42830_42850 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__42831_42851 = null;
var count__42832_42852 = (0);
var i__42833_42853 = (0);
while(true){
if((i__42833_42853 < count__42832_42852)){
var vec__42840_42854 = cljs.core._nth.call(null,chunk__42831_42851,i__42833_42853);
var k_42855__$1 = cljs.core.nth.call(null,vec__42840_42854,(0),null);
var v_42856__$1 = cljs.core.nth.call(null,vec__42840_42854,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_42855__$1,v_42856__$1);


var G__42857 = seq__42830_42850;
var G__42858 = chunk__42831_42851;
var G__42859 = count__42832_42852;
var G__42860 = (i__42833_42853 + (1));
seq__42830_42850 = G__42857;
chunk__42831_42851 = G__42858;
count__42832_42852 = G__42859;
i__42833_42853 = G__42860;
continue;
} else {
var temp__5735__auto___42861 = cljs.core.seq.call(null,seq__42830_42850);
if(temp__5735__auto___42861){
var seq__42830_42862__$1 = temp__5735__auto___42861;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42830_42862__$1)){
var c__4550__auto___42863 = cljs.core.chunk_first.call(null,seq__42830_42862__$1);
var G__42864 = cljs.core.chunk_rest.call(null,seq__42830_42862__$1);
var G__42865 = c__4550__auto___42863;
var G__42866 = cljs.core.count.call(null,c__4550__auto___42863);
var G__42867 = (0);
seq__42830_42850 = G__42864;
chunk__42831_42851 = G__42865;
count__42832_42852 = G__42866;
i__42833_42853 = G__42867;
continue;
} else {
var vec__42843_42868 = cljs.core.first.call(null,seq__42830_42862__$1);
var k_42869__$1 = cljs.core.nth.call(null,vec__42843_42868,(0),null);
var v_42870__$1 = cljs.core.nth.call(null,vec__42843_42868,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_42869__$1,v_42870__$1);


var G__42871 = cljs.core.next.call(null,seq__42830_42862__$1);
var G__42872 = null;
var G__42873 = (0);
var G__42874 = (0);
seq__42830_42850 = G__42871;
chunk__42831_42851 = G__42872;
count__42832_42852 = G__42873;
i__42833_42853 = G__42874;
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
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq42823){
var G__42824 = cljs.core.first.call(null,seq42823);
var seq42823__$1 = cljs.core.next.call(null,seq42823);
var G__42825 = cljs.core.first.call(null,seq42823__$1);
var seq42823__$2 = cljs.core.next.call(null,seq42823__$1);
var G__42826 = cljs.core.first.call(null,seq42823__$2);
var seq42823__$3 = cljs.core.next.call(null,seq42823__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42824,G__42825,G__42826,seq42823__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__42879 = arguments.length;
switch (G__42879) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___42885 = arguments.length;
var i__4731__auto___42886 = (0);
while(true){
if((i__4731__auto___42886 < len__4730__auto___42885)){
args_arr__4751__auto__.push((arguments[i__4731__auto___42886]));

var G__42887 = (i__4731__auto___42886 + (1));
i__4731__auto___42886 = G__42887;
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
var k_42888__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_42888__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_42888__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__42880_42889 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__42881_42890 = null;
var count__42882_42891 = (0);
var i__42883_42892 = (0);
while(true){
if((i__42883_42892 < count__42882_42891)){
var k_42893__$1 = cljs.core._nth.call(null,chunk__42881_42890,i__42883_42892);
dommy.core.remove_attr_BANG_.call(null,elem,k_42893__$1);


var G__42894 = seq__42880_42889;
var G__42895 = chunk__42881_42890;
var G__42896 = count__42882_42891;
var G__42897 = (i__42883_42892 + (1));
seq__42880_42889 = G__42894;
chunk__42881_42890 = G__42895;
count__42882_42891 = G__42896;
i__42883_42892 = G__42897;
continue;
} else {
var temp__5735__auto___42898 = cljs.core.seq.call(null,seq__42880_42889);
if(temp__5735__auto___42898){
var seq__42880_42899__$1 = temp__5735__auto___42898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42880_42899__$1)){
var c__4550__auto___42900 = cljs.core.chunk_first.call(null,seq__42880_42899__$1);
var G__42901 = cljs.core.chunk_rest.call(null,seq__42880_42899__$1);
var G__42902 = c__4550__auto___42900;
var G__42903 = cljs.core.count.call(null,c__4550__auto___42900);
var G__42904 = (0);
seq__42880_42889 = G__42901;
chunk__42881_42890 = G__42902;
count__42882_42891 = G__42903;
i__42883_42892 = G__42904;
continue;
} else {
var k_42905__$1 = cljs.core.first.call(null,seq__42880_42899__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_42905__$1);


var G__42906 = cljs.core.next.call(null,seq__42880_42899__$1);
var G__42907 = null;
var G__42908 = (0);
var G__42909 = (0);
seq__42880_42889 = G__42906;
chunk__42881_42890 = G__42907;
count__42882_42891 = G__42908;
i__42883_42892 = G__42909;
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
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq42876){
var G__42877 = cljs.core.first.call(null,seq42876);
var seq42876__$1 = cljs.core.next.call(null,seq42876);
var G__42878 = cljs.core.first.call(null,seq42876__$1);
var seq42876__$2 = cljs.core.next.call(null,seq42876__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42877,G__42878,seq42876__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__42911 = arguments.length;
switch (G__42911) {
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
var G__42917 = arguments.length;
switch (G__42917) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___42931 = arguments.length;
var i__4731__auto___42932 = (0);
while(true){
if((i__4731__auto___42932 < len__4730__auto___42931)){
args_arr__4751__auto__.push((arguments[i__4731__auto___42932]));

var G__42933 = (i__4731__auto___42932 + (1));
i__4731__auto___42932 = G__42933;
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
var temp__5733__auto___42934 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___42934)){
var class_list_42935 = temp__5733__auto___42934;
var seq__42918_42936 = cljs.core.seq.call(null,classes__$1);
var chunk__42919_42937 = null;
var count__42920_42938 = (0);
var i__42921_42939 = (0);
while(true){
if((i__42921_42939 < count__42920_42938)){
var c_42940 = cljs.core._nth.call(null,chunk__42919_42937,i__42921_42939);
class_list_42935.add(c_42940);


var G__42941 = seq__42918_42936;
var G__42942 = chunk__42919_42937;
var G__42943 = count__42920_42938;
var G__42944 = (i__42921_42939 + (1));
seq__42918_42936 = G__42941;
chunk__42919_42937 = G__42942;
count__42920_42938 = G__42943;
i__42921_42939 = G__42944;
continue;
} else {
var temp__5735__auto___42945 = cljs.core.seq.call(null,seq__42918_42936);
if(temp__5735__auto___42945){
var seq__42918_42946__$1 = temp__5735__auto___42945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42918_42946__$1)){
var c__4550__auto___42947 = cljs.core.chunk_first.call(null,seq__42918_42946__$1);
var G__42948 = cljs.core.chunk_rest.call(null,seq__42918_42946__$1);
var G__42949 = c__4550__auto___42947;
var G__42950 = cljs.core.count.call(null,c__4550__auto___42947);
var G__42951 = (0);
seq__42918_42936 = G__42948;
chunk__42919_42937 = G__42949;
count__42920_42938 = G__42950;
i__42921_42939 = G__42951;
continue;
} else {
var c_42952 = cljs.core.first.call(null,seq__42918_42946__$1);
class_list_42935.add(c_42952);


var G__42953 = cljs.core.next.call(null,seq__42918_42946__$1);
var G__42954 = null;
var G__42955 = (0);
var G__42956 = (0);
seq__42918_42936 = G__42953;
chunk__42919_42937 = G__42954;
count__42920_42938 = G__42955;
i__42921_42939 = G__42956;
continue;
}
} else {
}
}
break;
}
} else {
var seq__42922_42957 = cljs.core.seq.call(null,classes__$1);
var chunk__42923_42958 = null;
var count__42924_42959 = (0);
var i__42925_42960 = (0);
while(true){
if((i__42925_42960 < count__42924_42959)){
var c_42961 = cljs.core._nth.call(null,chunk__42923_42958,i__42925_42960);
var class_name_42962 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_42962,c_42961))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_42962 === ""))?c_42961:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_42962)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_42961)].join('')));
}


var G__42963 = seq__42922_42957;
var G__42964 = chunk__42923_42958;
var G__42965 = count__42924_42959;
var G__42966 = (i__42925_42960 + (1));
seq__42922_42957 = G__42963;
chunk__42923_42958 = G__42964;
count__42924_42959 = G__42965;
i__42925_42960 = G__42966;
continue;
} else {
var temp__5735__auto___42967 = cljs.core.seq.call(null,seq__42922_42957);
if(temp__5735__auto___42967){
var seq__42922_42968__$1 = temp__5735__auto___42967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42922_42968__$1)){
var c__4550__auto___42969 = cljs.core.chunk_first.call(null,seq__42922_42968__$1);
var G__42970 = cljs.core.chunk_rest.call(null,seq__42922_42968__$1);
var G__42971 = c__4550__auto___42969;
var G__42972 = cljs.core.count.call(null,c__4550__auto___42969);
var G__42973 = (0);
seq__42922_42957 = G__42970;
chunk__42923_42958 = G__42971;
count__42924_42959 = G__42972;
i__42925_42960 = G__42973;
continue;
} else {
var c_42974 = cljs.core.first.call(null,seq__42922_42968__$1);
var class_name_42975 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_42975,c_42974))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_42975 === ""))?c_42974:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_42975)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_42974)].join('')));
}


var G__42976 = cljs.core.next.call(null,seq__42922_42968__$1);
var G__42977 = null;
var G__42978 = (0);
var G__42979 = (0);
seq__42922_42957 = G__42976;
chunk__42923_42958 = G__42977;
count__42924_42959 = G__42978;
i__42925_42960 = G__42979;
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
var seq__42926_42980 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__42927_42981 = null;
var count__42928_42982 = (0);
var i__42929_42983 = (0);
while(true){
if((i__42929_42983 < count__42928_42982)){
var c_42984 = cljs.core._nth.call(null,chunk__42927_42981,i__42929_42983);
dommy.core.add_class_BANG_.call(null,elem,c_42984);


var G__42985 = seq__42926_42980;
var G__42986 = chunk__42927_42981;
var G__42987 = count__42928_42982;
var G__42988 = (i__42929_42983 + (1));
seq__42926_42980 = G__42985;
chunk__42927_42981 = G__42986;
count__42928_42982 = G__42987;
i__42929_42983 = G__42988;
continue;
} else {
var temp__5735__auto___42989 = cljs.core.seq.call(null,seq__42926_42980);
if(temp__5735__auto___42989){
var seq__42926_42990__$1 = temp__5735__auto___42989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42926_42990__$1)){
var c__4550__auto___42991 = cljs.core.chunk_first.call(null,seq__42926_42990__$1);
var G__42992 = cljs.core.chunk_rest.call(null,seq__42926_42990__$1);
var G__42993 = c__4550__auto___42991;
var G__42994 = cljs.core.count.call(null,c__4550__auto___42991);
var G__42995 = (0);
seq__42926_42980 = G__42992;
chunk__42927_42981 = G__42993;
count__42928_42982 = G__42994;
i__42929_42983 = G__42995;
continue;
} else {
var c_42996 = cljs.core.first.call(null,seq__42926_42990__$1);
dommy.core.add_class_BANG_.call(null,elem,c_42996);


var G__42997 = cljs.core.next.call(null,seq__42926_42990__$1);
var G__42998 = null;
var G__42999 = (0);
var G__43000 = (0);
seq__42926_42980 = G__42997;
chunk__42927_42981 = G__42998;
count__42928_42982 = G__42999;
i__42929_42983 = G__43000;
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
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq42914){
var G__42915 = cljs.core.first.call(null,seq42914);
var seq42914__$1 = cljs.core.next.call(null,seq42914);
var G__42916 = cljs.core.first.call(null,seq42914__$1);
var seq42914__$2 = cljs.core.next.call(null,seq42914__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42915,G__42916,seq42914__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__43005 = arguments.length;
switch (G__43005) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___43011 = arguments.length;
var i__4731__auto___43012 = (0);
while(true){
if((i__4731__auto___43012 < len__4730__auto___43011)){
args_arr__4751__auto__.push((arguments[i__4731__auto___43012]));

var G__43013 = (i__4731__auto___43012 + (1));
i__4731__auto___43012 = G__43013;
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
var temp__5733__auto___43014 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___43014)){
var class_list_43015 = temp__5733__auto___43014;
class_list_43015.remove(c__$1);
} else {
var class_name_43016 = dommy.core.class$.call(null,elem);
var new_class_name_43017 = dommy.utils.remove_class_str.call(null,class_name_43016,c__$1);
if((class_name_43016 === new_class_name_43017)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_43017);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__43006 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__43007 = null;
var count__43008 = (0);
var i__43009 = (0);
while(true){
if((i__43009 < count__43008)){
var c = cljs.core._nth.call(null,chunk__43007,i__43009);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__43018 = seq__43006;
var G__43019 = chunk__43007;
var G__43020 = count__43008;
var G__43021 = (i__43009 + (1));
seq__43006 = G__43018;
chunk__43007 = G__43019;
count__43008 = G__43020;
i__43009 = G__43021;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__43006);
if(temp__5735__auto__){
var seq__43006__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43006__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__43006__$1);
var G__43022 = cljs.core.chunk_rest.call(null,seq__43006__$1);
var G__43023 = c__4550__auto__;
var G__43024 = cljs.core.count.call(null,c__4550__auto__);
var G__43025 = (0);
seq__43006 = G__43022;
chunk__43007 = G__43023;
count__43008 = G__43024;
i__43009 = G__43025;
continue;
} else {
var c = cljs.core.first.call(null,seq__43006__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__43026 = cljs.core.next.call(null,seq__43006__$1);
var G__43027 = null;
var G__43028 = (0);
var G__43029 = (0);
seq__43006 = G__43026;
chunk__43007 = G__43027;
count__43008 = G__43028;
i__43009 = G__43029;
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
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq43002){
var G__43003 = cljs.core.first.call(null,seq43002);
var seq43002__$1 = cljs.core.next.call(null,seq43002);
var G__43004 = cljs.core.first.call(null,seq43002__$1);
var seq43002__$2 = cljs.core.next.call(null,seq43002__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43003,G__43004,seq43002__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__43031 = arguments.length;
switch (G__43031) {
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
var temp__5733__auto___43033 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___43033)){
var class_list_43034 = temp__5733__auto___43033;
class_list_43034.toggle(c__$1);
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
var G__43036 = arguments.length;
switch (G__43036) {
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
var G__43039 = arguments.length;
switch (G__43039) {
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
var G__43045 = arguments.length;
switch (G__43045) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___43052 = arguments.length;
var i__4731__auto___43053 = (0);
while(true){
if((i__4731__auto___43053 < len__4730__auto___43052)){
args_arr__4751__auto__.push((arguments[i__4731__auto___43053]));

var G__43054 = (i__4731__auto___43053 + (1));
i__4731__auto___43053 = G__43054;
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
var G__43046 = parent;
G__43046.appendChild(child);

return G__43046;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__43047_43055 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__43048_43056 = null;
var count__43049_43057 = (0);
var i__43050_43058 = (0);
while(true){
if((i__43050_43058 < count__43049_43057)){
var c_43059 = cljs.core._nth.call(null,chunk__43048_43056,i__43050_43058);
dommy.core.append_BANG_.call(null,parent,c_43059);


var G__43060 = seq__43047_43055;
var G__43061 = chunk__43048_43056;
var G__43062 = count__43049_43057;
var G__43063 = (i__43050_43058 + (1));
seq__43047_43055 = G__43060;
chunk__43048_43056 = G__43061;
count__43049_43057 = G__43062;
i__43050_43058 = G__43063;
continue;
} else {
var temp__5735__auto___43064 = cljs.core.seq.call(null,seq__43047_43055);
if(temp__5735__auto___43064){
var seq__43047_43065__$1 = temp__5735__auto___43064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43047_43065__$1)){
var c__4550__auto___43066 = cljs.core.chunk_first.call(null,seq__43047_43065__$1);
var G__43067 = cljs.core.chunk_rest.call(null,seq__43047_43065__$1);
var G__43068 = c__4550__auto___43066;
var G__43069 = cljs.core.count.call(null,c__4550__auto___43066);
var G__43070 = (0);
seq__43047_43055 = G__43067;
chunk__43048_43056 = G__43068;
count__43049_43057 = G__43069;
i__43050_43058 = G__43070;
continue;
} else {
var c_43071 = cljs.core.first.call(null,seq__43047_43065__$1);
dommy.core.append_BANG_.call(null,parent,c_43071);


var G__43072 = cljs.core.next.call(null,seq__43047_43065__$1);
var G__43073 = null;
var G__43074 = (0);
var G__43075 = (0);
seq__43047_43055 = G__43072;
chunk__43048_43056 = G__43073;
count__43049_43057 = G__43074;
i__43050_43058 = G__43075;
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
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq43042){
var G__43043 = cljs.core.first.call(null,seq43042);
var seq43042__$1 = cljs.core.next.call(null,seq43042);
var G__43044 = cljs.core.first.call(null,seq43042__$1);
var seq43042__$2 = cljs.core.next.call(null,seq43042__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43043,G__43044,seq43042__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__43080 = arguments.length;
switch (G__43080) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___43087 = arguments.length;
var i__4731__auto___43088 = (0);
while(true){
if((i__4731__auto___43088 < len__4730__auto___43087)){
args_arr__4751__auto__.push((arguments[i__4731__auto___43088]));

var G__43089 = (i__4731__auto___43088 + (1));
i__4731__auto___43088 = G__43089;
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
var G__43081 = parent;
G__43081.insertBefore(child,parent.firstChild);

return G__43081;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__43082_43090 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__43083_43091 = null;
var count__43084_43092 = (0);
var i__43085_43093 = (0);
while(true){
if((i__43085_43093 < count__43084_43092)){
var c_43094 = cljs.core._nth.call(null,chunk__43083_43091,i__43085_43093);
dommy.core.prepend_BANG_.call(null,parent,c_43094);


var G__43095 = seq__43082_43090;
var G__43096 = chunk__43083_43091;
var G__43097 = count__43084_43092;
var G__43098 = (i__43085_43093 + (1));
seq__43082_43090 = G__43095;
chunk__43083_43091 = G__43096;
count__43084_43092 = G__43097;
i__43085_43093 = G__43098;
continue;
} else {
var temp__5735__auto___43099 = cljs.core.seq.call(null,seq__43082_43090);
if(temp__5735__auto___43099){
var seq__43082_43100__$1 = temp__5735__auto___43099;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43082_43100__$1)){
var c__4550__auto___43101 = cljs.core.chunk_first.call(null,seq__43082_43100__$1);
var G__43102 = cljs.core.chunk_rest.call(null,seq__43082_43100__$1);
var G__43103 = c__4550__auto___43101;
var G__43104 = cljs.core.count.call(null,c__4550__auto___43101);
var G__43105 = (0);
seq__43082_43090 = G__43102;
chunk__43083_43091 = G__43103;
count__43084_43092 = G__43104;
i__43085_43093 = G__43105;
continue;
} else {
var c_43106 = cljs.core.first.call(null,seq__43082_43100__$1);
dommy.core.prepend_BANG_.call(null,parent,c_43106);


var G__43107 = cljs.core.next.call(null,seq__43082_43100__$1);
var G__43108 = null;
var G__43109 = (0);
var G__43110 = (0);
seq__43082_43090 = G__43107;
chunk__43083_43091 = G__43108;
count__43084_43092 = G__43109;
i__43085_43093 = G__43110;
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
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq43077){
var G__43078 = cljs.core.first.call(null,seq43077);
var seq43077__$1 = cljs.core.next.call(null,seq43077);
var G__43079 = cljs.core.first.call(null,seq43077__$1);
var seq43077__$2 = cljs.core.next.call(null,seq43077__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43078,G__43079,seq43077__$2);
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
var temp__5733__auto___43111 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___43111)){
var next_43112 = temp__5733__auto___43111;
dommy.core.insert_before_BANG_.call(null,elem,next_43112);
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
var G__43114 = arguments.length;
switch (G__43114) {
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
var G__43115 = p;
G__43115.removeChild(elem);

return G__43115;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__43117){
var vec__43118 = p__43117;
var special_mouse_event = cljs.core.nth.call(null,vec__43118,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__43118,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__43118,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__43118,special_mouse_event,real_mouse_event){
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
;})(vec__43118,special_mouse_event,real_mouse_event))
});})(vec__43118,special_mouse_event,real_mouse_event))
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
var len__4730__auto___43124 = arguments.length;
var i__4731__auto___43125 = (0);
while(true){
if((i__4731__auto___43125 < len__4730__auto___43124)){
args__4736__auto__.push((arguments[i__4731__auto___43125]));

var G__43126 = (i__4731__auto___43125 + (1));
i__4731__auto___43125 = G__43126;
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
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq43121){
var G__43122 = cljs.core.first.call(null,seq43121);
var seq43121__$1 = cljs.core.next.call(null,seq43121);
var G__43123 = cljs.core.first.call(null,seq43121__$1);
var seq43121__$2 = cljs.core.next.call(null,seq43121__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43122,G__43123,seq43121__$2);
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
var len__4730__auto___43208 = arguments.length;
var i__4731__auto___43209 = (0);
while(true){
if((i__4731__auto___43209 < len__4730__auto___43208)){
args__4736__auto__.push((arguments[i__4731__auto___43209]));

var G__43210 = (i__4731__auto___43209 + (1));
i__4731__auto___43209 = G__43210;
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

var vec__43129_43211 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43212 = cljs.core.nth.call(null,vec__43129_43211,(0),null);
var selector_43213 = cljs.core.nth.call(null,vec__43129_43211,(1),null);
var seq__43132_43214 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43139_43215 = null;
var count__43140_43216 = (0);
var i__43141_43217 = (0);
while(true){
if((i__43141_43217 < count__43140_43216)){
var vec__43178_43218 = cljs.core._nth.call(null,chunk__43139_43215,i__43141_43217);
var orig_type_43219 = cljs.core.nth.call(null,vec__43178_43218,(0),null);
var f_43220 = cljs.core.nth.call(null,vec__43178_43218,(1),null);
var seq__43142_43221 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43219,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43219,cljs.core.identity])));
var chunk__43144_43222 = null;
var count__43145_43223 = (0);
var i__43146_43224 = (0);
while(true){
if((i__43146_43224 < count__43145_43223)){
var vec__43187_43225 = cljs.core._nth.call(null,chunk__43144_43222,i__43146_43224);
var actual_type_43226 = cljs.core.nth.call(null,vec__43187_43225,(0),null);
var factory_43227 = cljs.core.nth.call(null,vec__43187_43225,(1),null);
var canonical_f_43228 = (cljs.core.truth_(selector_43213)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43212,selector_43213):cljs.core.identity).call(null,factory_43227.call(null,f_43220));
dommy.core.update_event_listeners_BANG_.call(null,elem_43212,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43213,actual_type_43226,f_43220], null),canonical_f_43228);

if(cljs.core.truth_(elem_43212.addEventListener)){
elem_43212.addEventListener(cljs.core.name.call(null,actual_type_43226),canonical_f_43228);
} else {
elem_43212.attachEvent(cljs.core.name.call(null,actual_type_43226),canonical_f_43228);
}


var G__43229 = seq__43142_43221;
var G__43230 = chunk__43144_43222;
var G__43231 = count__43145_43223;
var G__43232 = (i__43146_43224 + (1));
seq__43142_43221 = G__43229;
chunk__43144_43222 = G__43230;
count__43145_43223 = G__43231;
i__43146_43224 = G__43232;
continue;
} else {
var temp__5735__auto___43233 = cljs.core.seq.call(null,seq__43142_43221);
if(temp__5735__auto___43233){
var seq__43142_43234__$1 = temp__5735__auto___43233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43142_43234__$1)){
var c__4550__auto___43235 = cljs.core.chunk_first.call(null,seq__43142_43234__$1);
var G__43236 = cljs.core.chunk_rest.call(null,seq__43142_43234__$1);
var G__43237 = c__4550__auto___43235;
var G__43238 = cljs.core.count.call(null,c__4550__auto___43235);
var G__43239 = (0);
seq__43142_43221 = G__43236;
chunk__43144_43222 = G__43237;
count__43145_43223 = G__43238;
i__43146_43224 = G__43239;
continue;
} else {
var vec__43190_43240 = cljs.core.first.call(null,seq__43142_43234__$1);
var actual_type_43241 = cljs.core.nth.call(null,vec__43190_43240,(0),null);
var factory_43242 = cljs.core.nth.call(null,vec__43190_43240,(1),null);
var canonical_f_43243 = (cljs.core.truth_(selector_43213)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43212,selector_43213):cljs.core.identity).call(null,factory_43242.call(null,f_43220));
dommy.core.update_event_listeners_BANG_.call(null,elem_43212,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43213,actual_type_43241,f_43220], null),canonical_f_43243);

if(cljs.core.truth_(elem_43212.addEventListener)){
elem_43212.addEventListener(cljs.core.name.call(null,actual_type_43241),canonical_f_43243);
} else {
elem_43212.attachEvent(cljs.core.name.call(null,actual_type_43241),canonical_f_43243);
}


var G__43244 = cljs.core.next.call(null,seq__43142_43234__$1);
var G__43245 = null;
var G__43246 = (0);
var G__43247 = (0);
seq__43142_43221 = G__43244;
chunk__43144_43222 = G__43245;
count__43145_43223 = G__43246;
i__43146_43224 = G__43247;
continue;
}
} else {
}
}
break;
}

var G__43248 = seq__43132_43214;
var G__43249 = chunk__43139_43215;
var G__43250 = count__43140_43216;
var G__43251 = (i__43141_43217 + (1));
seq__43132_43214 = G__43248;
chunk__43139_43215 = G__43249;
count__43140_43216 = G__43250;
i__43141_43217 = G__43251;
continue;
} else {
var temp__5735__auto___43252 = cljs.core.seq.call(null,seq__43132_43214);
if(temp__5735__auto___43252){
var seq__43132_43253__$1 = temp__5735__auto___43252;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43132_43253__$1)){
var c__4550__auto___43254 = cljs.core.chunk_first.call(null,seq__43132_43253__$1);
var G__43255 = cljs.core.chunk_rest.call(null,seq__43132_43253__$1);
var G__43256 = c__4550__auto___43254;
var G__43257 = cljs.core.count.call(null,c__4550__auto___43254);
var G__43258 = (0);
seq__43132_43214 = G__43255;
chunk__43139_43215 = G__43256;
count__43140_43216 = G__43257;
i__43141_43217 = G__43258;
continue;
} else {
var vec__43193_43259 = cljs.core.first.call(null,seq__43132_43253__$1);
var orig_type_43260 = cljs.core.nth.call(null,vec__43193_43259,(0),null);
var f_43261 = cljs.core.nth.call(null,vec__43193_43259,(1),null);
var seq__43133_43262 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43260,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43260,cljs.core.identity])));
var chunk__43135_43263 = null;
var count__43136_43264 = (0);
var i__43137_43265 = (0);
while(true){
if((i__43137_43265 < count__43136_43264)){
var vec__43202_43266 = cljs.core._nth.call(null,chunk__43135_43263,i__43137_43265);
var actual_type_43267 = cljs.core.nth.call(null,vec__43202_43266,(0),null);
var factory_43268 = cljs.core.nth.call(null,vec__43202_43266,(1),null);
var canonical_f_43269 = (cljs.core.truth_(selector_43213)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43212,selector_43213):cljs.core.identity).call(null,factory_43268.call(null,f_43261));
dommy.core.update_event_listeners_BANG_.call(null,elem_43212,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43213,actual_type_43267,f_43261], null),canonical_f_43269);

if(cljs.core.truth_(elem_43212.addEventListener)){
elem_43212.addEventListener(cljs.core.name.call(null,actual_type_43267),canonical_f_43269);
} else {
elem_43212.attachEvent(cljs.core.name.call(null,actual_type_43267),canonical_f_43269);
}


var G__43270 = seq__43133_43262;
var G__43271 = chunk__43135_43263;
var G__43272 = count__43136_43264;
var G__43273 = (i__43137_43265 + (1));
seq__43133_43262 = G__43270;
chunk__43135_43263 = G__43271;
count__43136_43264 = G__43272;
i__43137_43265 = G__43273;
continue;
} else {
var temp__5735__auto___43274__$1 = cljs.core.seq.call(null,seq__43133_43262);
if(temp__5735__auto___43274__$1){
var seq__43133_43275__$1 = temp__5735__auto___43274__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43133_43275__$1)){
var c__4550__auto___43276 = cljs.core.chunk_first.call(null,seq__43133_43275__$1);
var G__43277 = cljs.core.chunk_rest.call(null,seq__43133_43275__$1);
var G__43278 = c__4550__auto___43276;
var G__43279 = cljs.core.count.call(null,c__4550__auto___43276);
var G__43280 = (0);
seq__43133_43262 = G__43277;
chunk__43135_43263 = G__43278;
count__43136_43264 = G__43279;
i__43137_43265 = G__43280;
continue;
} else {
var vec__43205_43281 = cljs.core.first.call(null,seq__43133_43275__$1);
var actual_type_43282 = cljs.core.nth.call(null,vec__43205_43281,(0),null);
var factory_43283 = cljs.core.nth.call(null,vec__43205_43281,(1),null);
var canonical_f_43284 = (cljs.core.truth_(selector_43213)?cljs.core.partial.call(null,dommy.core.live_listener,elem_43212,selector_43213):cljs.core.identity).call(null,factory_43283.call(null,f_43261));
dommy.core.update_event_listeners_BANG_.call(null,elem_43212,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43213,actual_type_43282,f_43261], null),canonical_f_43284);

if(cljs.core.truth_(elem_43212.addEventListener)){
elem_43212.addEventListener(cljs.core.name.call(null,actual_type_43282),canonical_f_43284);
} else {
elem_43212.attachEvent(cljs.core.name.call(null,actual_type_43282),canonical_f_43284);
}


var G__43285 = cljs.core.next.call(null,seq__43133_43275__$1);
var G__43286 = null;
var G__43287 = (0);
var G__43288 = (0);
seq__43133_43262 = G__43285;
chunk__43135_43263 = G__43286;
count__43136_43264 = G__43287;
i__43137_43265 = G__43288;
continue;
}
} else {
}
}
break;
}

var G__43289 = cljs.core.next.call(null,seq__43132_43253__$1);
var G__43290 = null;
var G__43291 = (0);
var G__43292 = (0);
seq__43132_43214 = G__43289;
chunk__43139_43215 = G__43290;
count__43140_43216 = G__43291;
i__43141_43217 = G__43292;
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
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq43127){
var G__43128 = cljs.core.first.call(null,seq43127);
var seq43127__$1 = cljs.core.next.call(null,seq43127);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43128,seq43127__$1);
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
var len__4730__auto___43374 = arguments.length;
var i__4731__auto___43375 = (0);
while(true){
if((i__4731__auto___43375 < len__4730__auto___43374)){
args__4736__auto__.push((arguments[i__4731__auto___43375]));

var G__43376 = (i__4731__auto___43375 + (1));
i__4731__auto___43375 = G__43376;
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

var vec__43295_43377 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43378 = cljs.core.nth.call(null,vec__43295_43377,(0),null);
var selector_43379 = cljs.core.nth.call(null,vec__43295_43377,(1),null);
var seq__43298_43380 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43305_43381 = null;
var count__43306_43382 = (0);
var i__43307_43383 = (0);
while(true){
if((i__43307_43383 < count__43306_43382)){
var vec__43344_43384 = cljs.core._nth.call(null,chunk__43305_43381,i__43307_43383);
var orig_type_43385 = cljs.core.nth.call(null,vec__43344_43384,(0),null);
var f_43386 = cljs.core.nth.call(null,vec__43344_43384,(1),null);
var seq__43308_43387 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43385,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43385,cljs.core.identity])));
var chunk__43310_43388 = null;
var count__43311_43389 = (0);
var i__43312_43390 = (0);
while(true){
if((i__43312_43390 < count__43311_43389)){
var vec__43353_43391 = cljs.core._nth.call(null,chunk__43310_43388,i__43312_43390);
var actual_type_43392 = cljs.core.nth.call(null,vec__43353_43391,(0),null);
var __43393 = cljs.core.nth.call(null,vec__43353_43391,(1),null);
var keys_43394 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43379,actual_type_43392,f_43386], null);
var canonical_f_43395 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43378),keys_43394);
dommy.core.update_event_listeners_BANG_.call(null,elem_43378,dommy.utils.dissoc_in,keys_43394);

if(cljs.core.truth_(elem_43378.removeEventListener)){
elem_43378.removeEventListener(cljs.core.name.call(null,actual_type_43392),canonical_f_43395);
} else {
elem_43378.detachEvent(cljs.core.name.call(null,actual_type_43392),canonical_f_43395);
}


var G__43396 = seq__43308_43387;
var G__43397 = chunk__43310_43388;
var G__43398 = count__43311_43389;
var G__43399 = (i__43312_43390 + (1));
seq__43308_43387 = G__43396;
chunk__43310_43388 = G__43397;
count__43311_43389 = G__43398;
i__43312_43390 = G__43399;
continue;
} else {
var temp__5735__auto___43400 = cljs.core.seq.call(null,seq__43308_43387);
if(temp__5735__auto___43400){
var seq__43308_43401__$1 = temp__5735__auto___43400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43308_43401__$1)){
var c__4550__auto___43402 = cljs.core.chunk_first.call(null,seq__43308_43401__$1);
var G__43403 = cljs.core.chunk_rest.call(null,seq__43308_43401__$1);
var G__43404 = c__4550__auto___43402;
var G__43405 = cljs.core.count.call(null,c__4550__auto___43402);
var G__43406 = (0);
seq__43308_43387 = G__43403;
chunk__43310_43388 = G__43404;
count__43311_43389 = G__43405;
i__43312_43390 = G__43406;
continue;
} else {
var vec__43356_43407 = cljs.core.first.call(null,seq__43308_43401__$1);
var actual_type_43408 = cljs.core.nth.call(null,vec__43356_43407,(0),null);
var __43409 = cljs.core.nth.call(null,vec__43356_43407,(1),null);
var keys_43410 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43379,actual_type_43408,f_43386], null);
var canonical_f_43411 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43378),keys_43410);
dommy.core.update_event_listeners_BANG_.call(null,elem_43378,dommy.utils.dissoc_in,keys_43410);

if(cljs.core.truth_(elem_43378.removeEventListener)){
elem_43378.removeEventListener(cljs.core.name.call(null,actual_type_43408),canonical_f_43411);
} else {
elem_43378.detachEvent(cljs.core.name.call(null,actual_type_43408),canonical_f_43411);
}


var G__43412 = cljs.core.next.call(null,seq__43308_43401__$1);
var G__43413 = null;
var G__43414 = (0);
var G__43415 = (0);
seq__43308_43387 = G__43412;
chunk__43310_43388 = G__43413;
count__43311_43389 = G__43414;
i__43312_43390 = G__43415;
continue;
}
} else {
}
}
break;
}

var G__43416 = seq__43298_43380;
var G__43417 = chunk__43305_43381;
var G__43418 = count__43306_43382;
var G__43419 = (i__43307_43383 + (1));
seq__43298_43380 = G__43416;
chunk__43305_43381 = G__43417;
count__43306_43382 = G__43418;
i__43307_43383 = G__43419;
continue;
} else {
var temp__5735__auto___43420 = cljs.core.seq.call(null,seq__43298_43380);
if(temp__5735__auto___43420){
var seq__43298_43421__$1 = temp__5735__auto___43420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43298_43421__$1)){
var c__4550__auto___43422 = cljs.core.chunk_first.call(null,seq__43298_43421__$1);
var G__43423 = cljs.core.chunk_rest.call(null,seq__43298_43421__$1);
var G__43424 = c__4550__auto___43422;
var G__43425 = cljs.core.count.call(null,c__4550__auto___43422);
var G__43426 = (0);
seq__43298_43380 = G__43423;
chunk__43305_43381 = G__43424;
count__43306_43382 = G__43425;
i__43307_43383 = G__43426;
continue;
} else {
var vec__43359_43427 = cljs.core.first.call(null,seq__43298_43421__$1);
var orig_type_43428 = cljs.core.nth.call(null,vec__43359_43427,(0),null);
var f_43429 = cljs.core.nth.call(null,vec__43359_43427,(1),null);
var seq__43299_43430 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_43428,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_43428,cljs.core.identity])));
var chunk__43301_43431 = null;
var count__43302_43432 = (0);
var i__43303_43433 = (0);
while(true){
if((i__43303_43433 < count__43302_43432)){
var vec__43368_43434 = cljs.core._nth.call(null,chunk__43301_43431,i__43303_43433);
var actual_type_43435 = cljs.core.nth.call(null,vec__43368_43434,(0),null);
var __43436 = cljs.core.nth.call(null,vec__43368_43434,(1),null);
var keys_43437 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43379,actual_type_43435,f_43429], null);
var canonical_f_43438 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43378),keys_43437);
dommy.core.update_event_listeners_BANG_.call(null,elem_43378,dommy.utils.dissoc_in,keys_43437);

if(cljs.core.truth_(elem_43378.removeEventListener)){
elem_43378.removeEventListener(cljs.core.name.call(null,actual_type_43435),canonical_f_43438);
} else {
elem_43378.detachEvent(cljs.core.name.call(null,actual_type_43435),canonical_f_43438);
}


var G__43439 = seq__43299_43430;
var G__43440 = chunk__43301_43431;
var G__43441 = count__43302_43432;
var G__43442 = (i__43303_43433 + (1));
seq__43299_43430 = G__43439;
chunk__43301_43431 = G__43440;
count__43302_43432 = G__43441;
i__43303_43433 = G__43442;
continue;
} else {
var temp__5735__auto___43443__$1 = cljs.core.seq.call(null,seq__43299_43430);
if(temp__5735__auto___43443__$1){
var seq__43299_43444__$1 = temp__5735__auto___43443__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43299_43444__$1)){
var c__4550__auto___43445 = cljs.core.chunk_first.call(null,seq__43299_43444__$1);
var G__43446 = cljs.core.chunk_rest.call(null,seq__43299_43444__$1);
var G__43447 = c__4550__auto___43445;
var G__43448 = cljs.core.count.call(null,c__4550__auto___43445);
var G__43449 = (0);
seq__43299_43430 = G__43446;
chunk__43301_43431 = G__43447;
count__43302_43432 = G__43448;
i__43303_43433 = G__43449;
continue;
} else {
var vec__43371_43450 = cljs.core.first.call(null,seq__43299_43444__$1);
var actual_type_43451 = cljs.core.nth.call(null,vec__43371_43450,(0),null);
var __43452 = cljs.core.nth.call(null,vec__43371_43450,(1),null);
var keys_43453 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_43379,actual_type_43451,f_43429], null);
var canonical_f_43454 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_43378),keys_43453);
dommy.core.update_event_listeners_BANG_.call(null,elem_43378,dommy.utils.dissoc_in,keys_43453);

if(cljs.core.truth_(elem_43378.removeEventListener)){
elem_43378.removeEventListener(cljs.core.name.call(null,actual_type_43451),canonical_f_43454);
} else {
elem_43378.detachEvent(cljs.core.name.call(null,actual_type_43451),canonical_f_43454);
}


var G__43455 = cljs.core.next.call(null,seq__43299_43444__$1);
var G__43456 = null;
var G__43457 = (0);
var G__43458 = (0);
seq__43299_43430 = G__43455;
chunk__43301_43431 = G__43456;
count__43302_43432 = G__43457;
i__43303_43433 = G__43458;
continue;
}
} else {
}
}
break;
}

var G__43459 = cljs.core.next.call(null,seq__43298_43421__$1);
var G__43460 = null;
var G__43461 = (0);
var G__43462 = (0);
seq__43298_43380 = G__43459;
chunk__43305_43381 = G__43460;
count__43306_43382 = G__43461;
i__43307_43383 = G__43462;
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
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq43293){
var G__43294 = cljs.core.first.call(null,seq43293);
var seq43293__$1 = cljs.core.next.call(null,seq43293);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43294,seq43293__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43484 = arguments.length;
var i__4731__auto___43485 = (0);
while(true){
if((i__4731__auto___43485 < len__4730__auto___43484)){
args__4736__auto__.push((arguments[i__4731__auto___43485]));

var G__43486 = (i__4731__auto___43485 + (1));
i__4731__auto___43485 = G__43486;
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

var vec__43465_43487 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_43488 = cljs.core.nth.call(null,vec__43465_43487,(0),null);
var selector_43489 = cljs.core.nth.call(null,vec__43465_43487,(1),null);
var seq__43468_43490 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__43469_43491 = null;
var count__43470_43492 = (0);
var i__43471_43493 = (0);
while(true){
if((i__43471_43493 < count__43470_43492)){
var vec__43478_43494 = cljs.core._nth.call(null,chunk__43469_43491,i__43471_43493);
var type_43495 = cljs.core.nth.call(null,vec__43478_43494,(0),null);
var f_43496 = cljs.core.nth.call(null,vec__43478_43494,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_43495,((function (seq__43468_43490,chunk__43469_43491,count__43470_43492,i__43471_43493,vec__43478_43494,type_43495,f_43496,vec__43465_43487,elem_43488,selector_43489){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_43495,dommy$core$this_fn);

return f_43496.call(null,e);
});})(seq__43468_43490,chunk__43469_43491,count__43470_43492,i__43471_43493,vec__43478_43494,type_43495,f_43496,vec__43465_43487,elem_43488,selector_43489))
);


var G__43497 = seq__43468_43490;
var G__43498 = chunk__43469_43491;
var G__43499 = count__43470_43492;
var G__43500 = (i__43471_43493 + (1));
seq__43468_43490 = G__43497;
chunk__43469_43491 = G__43498;
count__43470_43492 = G__43499;
i__43471_43493 = G__43500;
continue;
} else {
var temp__5735__auto___43501 = cljs.core.seq.call(null,seq__43468_43490);
if(temp__5735__auto___43501){
var seq__43468_43502__$1 = temp__5735__auto___43501;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43468_43502__$1)){
var c__4550__auto___43503 = cljs.core.chunk_first.call(null,seq__43468_43502__$1);
var G__43504 = cljs.core.chunk_rest.call(null,seq__43468_43502__$1);
var G__43505 = c__4550__auto___43503;
var G__43506 = cljs.core.count.call(null,c__4550__auto___43503);
var G__43507 = (0);
seq__43468_43490 = G__43504;
chunk__43469_43491 = G__43505;
count__43470_43492 = G__43506;
i__43471_43493 = G__43507;
continue;
} else {
var vec__43481_43508 = cljs.core.first.call(null,seq__43468_43502__$1);
var type_43509 = cljs.core.nth.call(null,vec__43481_43508,(0),null);
var f_43510 = cljs.core.nth.call(null,vec__43481_43508,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_43509,((function (seq__43468_43490,chunk__43469_43491,count__43470_43492,i__43471_43493,vec__43481_43508,type_43509,f_43510,seq__43468_43502__$1,temp__5735__auto___43501,vec__43465_43487,elem_43488,selector_43489){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_43509,dommy$core$this_fn);

return f_43510.call(null,e);
});})(seq__43468_43490,chunk__43469_43491,count__43470_43492,i__43471_43493,vec__43481_43508,type_43509,f_43510,seq__43468_43502__$1,temp__5735__auto___43501,vec__43465_43487,elem_43488,selector_43489))
);


var G__43511 = cljs.core.next.call(null,seq__43468_43502__$1);
var G__43512 = null;
var G__43513 = (0);
var G__43514 = (0);
seq__43468_43490 = G__43511;
chunk__43469_43491 = G__43512;
count__43470_43492 = G__43513;
i__43471_43493 = G__43514;
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
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq43463){
var G__43464 = cljs.core.first.call(null,seq43463);
var seq43463__$1 = cljs.core.next.call(null,seq43463);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43464,seq43463__$1);
});


//# sourceMappingURL=core.js.map?rel=1563208752322
