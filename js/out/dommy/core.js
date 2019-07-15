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
var G__39910 = arguments.length;
switch (G__39910) {
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
var G__39913 = arguments.length;
switch (G__39913) {
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
var G__39917 = arguments.length;
switch (G__39917) {
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
return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__39915_SHARP_){
return (!((p1__39915_SHARP_ === base)));
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
var len__4730__auto___39937 = arguments.length;
var i__4731__auto___39938 = (0);
while(true){
if((i__4731__auto___39938 < len__4730__auto___39937)){
args__4736__auto__.push((arguments[i__4731__auto___39938]));

var G__39939 = (i__4731__auto___39938 + (1));
i__4731__auto___39938 = G__39939;
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
var seq__39921_39940 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__39922_39941 = null;
var count__39923_39942 = (0);
var i__39924_39943 = (0);
while(true){
if((i__39924_39943 < count__39923_39942)){
var vec__39931_39944 = cljs.core._nth.call(null,chunk__39922_39941,i__39924_39943);
var k_39945 = cljs.core.nth.call(null,vec__39931_39944,(0),null);
var v_39946 = cljs.core.nth.call(null,vec__39931_39944,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_39945),v_39946);


var G__39947 = seq__39921_39940;
var G__39948 = chunk__39922_39941;
var G__39949 = count__39923_39942;
var G__39950 = (i__39924_39943 + (1));
seq__39921_39940 = G__39947;
chunk__39922_39941 = G__39948;
count__39923_39942 = G__39949;
i__39924_39943 = G__39950;
continue;
} else {
var temp__5735__auto___39951 = cljs.core.seq.call(null,seq__39921_39940);
if(temp__5735__auto___39951){
var seq__39921_39952__$1 = temp__5735__auto___39951;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39921_39952__$1)){
var c__4550__auto___39953 = cljs.core.chunk_first.call(null,seq__39921_39952__$1);
var G__39954 = cljs.core.chunk_rest.call(null,seq__39921_39952__$1);
var G__39955 = c__4550__auto___39953;
var G__39956 = cljs.core.count.call(null,c__4550__auto___39953);
var G__39957 = (0);
seq__39921_39940 = G__39954;
chunk__39922_39941 = G__39955;
count__39923_39942 = G__39956;
i__39924_39943 = G__39957;
continue;
} else {
var vec__39934_39958 = cljs.core.first.call(null,seq__39921_39952__$1);
var k_39959 = cljs.core.nth.call(null,vec__39934_39958,(0),null);
var v_39960 = cljs.core.nth.call(null,vec__39934_39958,(1),null);
style.setProperty(dommy.utils.as_str.call(null,k_39959),v_39960);


var G__39961 = cljs.core.next.call(null,seq__39921_39952__$1);
var G__39962 = null;
var G__39963 = (0);
var G__39964 = (0);
seq__39921_39940 = G__39961;
chunk__39922_39941 = G__39962;
count__39923_39942 = G__39963;
i__39924_39943 = G__39964;
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
dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq39919){
var G__39920 = cljs.core.first.call(null,seq39919);
var seq39919__$1 = cljs.core.next.call(null,seq39919);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39920,seq39919__$1);
});

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___39971 = arguments.length;
var i__4731__auto___39972 = (0);
while(true){
if((i__4731__auto___39972 < len__4730__auto___39971)){
args__4736__auto__.push((arguments[i__4731__auto___39972]));

var G__39973 = (i__4731__auto___39972 + (1));
i__4731__auto___39972 = G__39973;
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
var seq__39967_39974 = cljs.core.seq.call(null,keywords);
var chunk__39968_39975 = null;
var count__39969_39976 = (0);
var i__39970_39977 = (0);
while(true){
if((i__39970_39977 < count__39969_39976)){
var kw_39978 = cljs.core._nth.call(null,chunk__39968_39975,i__39970_39977);
style.removeProperty(dommy.utils.as_str.call(null,kw_39978));


var G__39979 = seq__39967_39974;
var G__39980 = chunk__39968_39975;
var G__39981 = count__39969_39976;
var G__39982 = (i__39970_39977 + (1));
seq__39967_39974 = G__39979;
chunk__39968_39975 = G__39980;
count__39969_39976 = G__39981;
i__39970_39977 = G__39982;
continue;
} else {
var temp__5735__auto___39983 = cljs.core.seq.call(null,seq__39967_39974);
if(temp__5735__auto___39983){
var seq__39967_39984__$1 = temp__5735__auto___39983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39967_39984__$1)){
var c__4550__auto___39985 = cljs.core.chunk_first.call(null,seq__39967_39984__$1);
var G__39986 = cljs.core.chunk_rest.call(null,seq__39967_39984__$1);
var G__39987 = c__4550__auto___39985;
var G__39988 = cljs.core.count.call(null,c__4550__auto___39985);
var G__39989 = (0);
seq__39967_39974 = G__39986;
chunk__39968_39975 = G__39987;
count__39969_39976 = G__39988;
i__39970_39977 = G__39989;
continue;
} else {
var kw_39990 = cljs.core.first.call(null,seq__39967_39984__$1);
style.removeProperty(dommy.utils.as_str.call(null,kw_39990));


var G__39991 = cljs.core.next.call(null,seq__39967_39984__$1);
var G__39992 = null;
var G__39993 = (0);
var G__39994 = (0);
seq__39967_39974 = G__39991;
chunk__39968_39975 = G__39992;
count__39969_39976 = G__39993;
i__39970_39977 = G__39994;
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
dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq39965){
var G__39966 = cljs.core.first.call(null,seq39965);
var seq39965__$1 = cljs.core.next.call(null,seq39965);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39966,seq39965__$1);
});

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40013 = arguments.length;
var i__4731__auto___40014 = (0);
while(true){
if((i__4731__auto___40014 < len__4730__auto___40013)){
args__4736__auto__.push((arguments[i__4731__auto___40014]));

var G__40015 = (i__4731__auto___40014 + (1));
i__4731__auto___40014 = G__40015;
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

var seq__39997_40016 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));
var chunk__39998_40017 = null;
var count__39999_40018 = (0);
var i__40000_40019 = (0);
while(true){
if((i__40000_40019 < count__39999_40018)){
var vec__40007_40020 = cljs.core._nth.call(null,chunk__39998_40017,i__40000_40019);
var k_40021 = cljs.core.nth.call(null,vec__40007_40020,(0),null);
var v_40022 = cljs.core.nth.call(null,vec__40007_40020,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_40021,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40022),"px"].join(''));


var G__40023 = seq__39997_40016;
var G__40024 = chunk__39998_40017;
var G__40025 = count__39999_40018;
var G__40026 = (i__40000_40019 + (1));
seq__39997_40016 = G__40023;
chunk__39998_40017 = G__40024;
count__39999_40018 = G__40025;
i__40000_40019 = G__40026;
continue;
} else {
var temp__5735__auto___40027 = cljs.core.seq.call(null,seq__39997_40016);
if(temp__5735__auto___40027){
var seq__39997_40028__$1 = temp__5735__auto___40027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39997_40028__$1)){
var c__4550__auto___40029 = cljs.core.chunk_first.call(null,seq__39997_40028__$1);
var G__40030 = cljs.core.chunk_rest.call(null,seq__39997_40028__$1);
var G__40031 = c__4550__auto___40029;
var G__40032 = cljs.core.count.call(null,c__4550__auto___40029);
var G__40033 = (0);
seq__39997_40016 = G__40030;
chunk__39998_40017 = G__40031;
count__39999_40018 = G__40032;
i__40000_40019 = G__40033;
continue;
} else {
var vec__40010_40034 = cljs.core.first.call(null,seq__39997_40028__$1);
var k_40035 = cljs.core.nth.call(null,vec__40010_40034,(0),null);
var v_40036 = cljs.core.nth.call(null,vec__40010_40034,(1),null);
dommy.core.set_style_BANG_.call(null,elem,k_40035,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_40036),"px"].join(''));


var G__40037 = cljs.core.next.call(null,seq__39997_40028__$1);
var G__40038 = null;
var G__40039 = (0);
var G__40040 = (0);
seq__39997_40016 = G__40037;
chunk__39998_40017 = G__40038;
count__39999_40018 = G__40039;
i__40000_40019 = G__40040;
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
dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq39995){
var G__39996 = cljs.core.first.call(null,seq39995);
var seq39995__$1 = cljs.core.next.call(null,seq39995);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39996,seq39995__$1);
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
var G__40046 = arguments.length;
switch (G__40046) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40066 = arguments.length;
var i__4731__auto___40067 = (0);
while(true){
if((i__4731__auto___40067 < len__4730__auto___40066)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40067]));

var G__40068 = (i__4731__auto___40067 + (1));
i__4731__auto___40067 = G__40068;
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
var G__40047 = elem;
(G__40047[k__$1] = v);

return G__40047;
} else {
var G__40048 = elem;
G__40048.setAttribute(k__$1,v);

return G__40048;
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

var seq__40049_40069 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));
var chunk__40050_40070 = null;
var count__40051_40071 = (0);
var i__40052_40072 = (0);
while(true){
if((i__40052_40072 < count__40051_40071)){
var vec__40059_40073 = cljs.core._nth.call(null,chunk__40050_40070,i__40052_40072);
var k_40074__$1 = cljs.core.nth.call(null,vec__40059_40073,(0),null);
var v_40075__$1 = cljs.core.nth.call(null,vec__40059_40073,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_40074__$1,v_40075__$1);


var G__40076 = seq__40049_40069;
var G__40077 = chunk__40050_40070;
var G__40078 = count__40051_40071;
var G__40079 = (i__40052_40072 + (1));
seq__40049_40069 = G__40076;
chunk__40050_40070 = G__40077;
count__40051_40071 = G__40078;
i__40052_40072 = G__40079;
continue;
} else {
var temp__5735__auto___40080 = cljs.core.seq.call(null,seq__40049_40069);
if(temp__5735__auto___40080){
var seq__40049_40081__$1 = temp__5735__auto___40080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40049_40081__$1)){
var c__4550__auto___40082 = cljs.core.chunk_first.call(null,seq__40049_40081__$1);
var G__40083 = cljs.core.chunk_rest.call(null,seq__40049_40081__$1);
var G__40084 = c__4550__auto___40082;
var G__40085 = cljs.core.count.call(null,c__4550__auto___40082);
var G__40086 = (0);
seq__40049_40069 = G__40083;
chunk__40050_40070 = G__40084;
count__40051_40071 = G__40085;
i__40052_40072 = G__40086;
continue;
} else {
var vec__40062_40087 = cljs.core.first.call(null,seq__40049_40081__$1);
var k_40088__$1 = cljs.core.nth.call(null,vec__40062_40087,(0),null);
var v_40089__$1 = cljs.core.nth.call(null,vec__40062_40087,(1),null);
dommy.core.set_attr_BANG_.call(null,elem,k_40088__$1,v_40089__$1);


var G__40090 = cljs.core.next.call(null,seq__40049_40081__$1);
var G__40091 = null;
var G__40092 = (0);
var G__40093 = (0);
seq__40049_40069 = G__40090;
chunk__40050_40070 = G__40091;
count__40051_40071 = G__40092;
i__40052_40072 = G__40093;
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
dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq40042){
var G__40043 = cljs.core.first.call(null,seq40042);
var seq40042__$1 = cljs.core.next.call(null,seq40042);
var G__40044 = cljs.core.first.call(null,seq40042__$1);
var seq40042__$2 = cljs.core.next.call(null,seq40042__$1);
var G__40045 = cljs.core.first.call(null,seq40042__$2);
var seq40042__$3 = cljs.core.next.call(null,seq40042__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40043,G__40044,G__40045,seq40042__$3);
});

dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3);

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__40098 = arguments.length;
switch (G__40098) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40104 = arguments.length;
var i__4731__auto___40105 = (0);
while(true){
if((i__4731__auto___40105 < len__4730__auto___40104)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40105]));

var G__40106 = (i__4731__auto___40105 + (1));
i__4731__auto___40105 = G__40106;
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
var k_40107__$1 = dommy.utils.as_str.call(null,k);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_40107__$1))){
dommy.core.set_class_BANG_.call(null,elem,"");
} else {
elem.removeAttribute(k_40107__$1);
}

return elem;
});

dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__40099_40108 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));
var chunk__40100_40109 = null;
var count__40101_40110 = (0);
var i__40102_40111 = (0);
while(true){
if((i__40102_40111 < count__40101_40110)){
var k_40112__$1 = cljs.core._nth.call(null,chunk__40100_40109,i__40102_40111);
dommy.core.remove_attr_BANG_.call(null,elem,k_40112__$1);


var G__40113 = seq__40099_40108;
var G__40114 = chunk__40100_40109;
var G__40115 = count__40101_40110;
var G__40116 = (i__40102_40111 + (1));
seq__40099_40108 = G__40113;
chunk__40100_40109 = G__40114;
count__40101_40110 = G__40115;
i__40102_40111 = G__40116;
continue;
} else {
var temp__5735__auto___40117 = cljs.core.seq.call(null,seq__40099_40108);
if(temp__5735__auto___40117){
var seq__40099_40118__$1 = temp__5735__auto___40117;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40099_40118__$1)){
var c__4550__auto___40119 = cljs.core.chunk_first.call(null,seq__40099_40118__$1);
var G__40120 = cljs.core.chunk_rest.call(null,seq__40099_40118__$1);
var G__40121 = c__4550__auto___40119;
var G__40122 = cljs.core.count.call(null,c__4550__auto___40119);
var G__40123 = (0);
seq__40099_40108 = G__40120;
chunk__40100_40109 = G__40121;
count__40101_40110 = G__40122;
i__40102_40111 = G__40123;
continue;
} else {
var k_40124__$1 = cljs.core.first.call(null,seq__40099_40118__$1);
dommy.core.remove_attr_BANG_.call(null,elem,k_40124__$1);


var G__40125 = cljs.core.next.call(null,seq__40099_40118__$1);
var G__40126 = null;
var G__40127 = (0);
var G__40128 = (0);
seq__40099_40108 = G__40125;
chunk__40100_40109 = G__40126;
count__40101_40110 = G__40127;
i__40102_40111 = G__40128;
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
dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq40095){
var G__40096 = cljs.core.first.call(null,seq40095);
var seq40095__$1 = cljs.core.next.call(null,seq40095);
var G__40097 = cljs.core.first.call(null,seq40095__$1);
var seq40095__$2 = cljs.core.next.call(null,seq40095__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40096,G__40097,seq40095__$2);
});

dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__40130 = arguments.length;
switch (G__40130) {
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
var G__40136 = arguments.length;
switch (G__40136) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40150 = arguments.length;
var i__4731__auto___40151 = (0);
while(true){
if((i__4731__auto___40151 < len__4730__auto___40150)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40151]));

var G__40152 = (i__4731__auto___40151 + (1));
i__4731__auto___40151 = G__40152;
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
var temp__5733__auto___40153 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40153)){
var class_list_40154 = temp__5733__auto___40153;
var seq__40137_40155 = cljs.core.seq.call(null,classes__$1);
var chunk__40138_40156 = null;
var count__40139_40157 = (0);
var i__40140_40158 = (0);
while(true){
if((i__40140_40158 < count__40139_40157)){
var c_40159 = cljs.core._nth.call(null,chunk__40138_40156,i__40140_40158);
class_list_40154.add(c_40159);


var G__40160 = seq__40137_40155;
var G__40161 = chunk__40138_40156;
var G__40162 = count__40139_40157;
var G__40163 = (i__40140_40158 + (1));
seq__40137_40155 = G__40160;
chunk__40138_40156 = G__40161;
count__40139_40157 = G__40162;
i__40140_40158 = G__40163;
continue;
} else {
var temp__5735__auto___40164 = cljs.core.seq.call(null,seq__40137_40155);
if(temp__5735__auto___40164){
var seq__40137_40165__$1 = temp__5735__auto___40164;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40137_40165__$1)){
var c__4550__auto___40166 = cljs.core.chunk_first.call(null,seq__40137_40165__$1);
var G__40167 = cljs.core.chunk_rest.call(null,seq__40137_40165__$1);
var G__40168 = c__4550__auto___40166;
var G__40169 = cljs.core.count.call(null,c__4550__auto___40166);
var G__40170 = (0);
seq__40137_40155 = G__40167;
chunk__40138_40156 = G__40168;
count__40139_40157 = G__40169;
i__40140_40158 = G__40170;
continue;
} else {
var c_40171 = cljs.core.first.call(null,seq__40137_40165__$1);
class_list_40154.add(c_40171);


var G__40172 = cljs.core.next.call(null,seq__40137_40165__$1);
var G__40173 = null;
var G__40174 = (0);
var G__40175 = (0);
seq__40137_40155 = G__40172;
chunk__40138_40156 = G__40173;
count__40139_40157 = G__40174;
i__40140_40158 = G__40175;
continue;
}
} else {
}
}
break;
}
} else {
var seq__40141_40176 = cljs.core.seq.call(null,classes__$1);
var chunk__40142_40177 = null;
var count__40143_40178 = (0);
var i__40144_40179 = (0);
while(true){
if((i__40144_40179 < count__40143_40178)){
var c_40180 = cljs.core._nth.call(null,chunk__40142_40177,i__40144_40179);
var class_name_40181 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_40181,c_40180))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_40181 === ""))?c_40180:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40181)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40180)].join('')));
}


var G__40182 = seq__40141_40176;
var G__40183 = chunk__40142_40177;
var G__40184 = count__40143_40178;
var G__40185 = (i__40144_40179 + (1));
seq__40141_40176 = G__40182;
chunk__40142_40177 = G__40183;
count__40143_40178 = G__40184;
i__40144_40179 = G__40185;
continue;
} else {
var temp__5735__auto___40186 = cljs.core.seq.call(null,seq__40141_40176);
if(temp__5735__auto___40186){
var seq__40141_40187__$1 = temp__5735__auto___40186;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40141_40187__$1)){
var c__4550__auto___40188 = cljs.core.chunk_first.call(null,seq__40141_40187__$1);
var G__40189 = cljs.core.chunk_rest.call(null,seq__40141_40187__$1);
var G__40190 = c__4550__auto___40188;
var G__40191 = cljs.core.count.call(null,c__4550__auto___40188);
var G__40192 = (0);
seq__40141_40176 = G__40189;
chunk__40142_40177 = G__40190;
count__40143_40178 = G__40191;
i__40144_40179 = G__40192;
continue;
} else {
var c_40193 = cljs.core.first.call(null,seq__40141_40187__$1);
var class_name_40194 = dommy.core.class$.call(null,elem);
if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_40194,c_40193))){
} else {
dommy.core.set_class_BANG_.call(null,elem,(((class_name_40194 === ""))?c_40193:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_40194)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_40193)].join('')));
}


var G__40195 = cljs.core.next.call(null,seq__40141_40187__$1);
var G__40196 = null;
var G__40197 = (0);
var G__40198 = (0);
seq__40141_40176 = G__40195;
chunk__40142_40177 = G__40196;
count__40143_40178 = G__40197;
i__40144_40179 = G__40198;
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
var seq__40145_40199 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));
var chunk__40146_40200 = null;
var count__40147_40201 = (0);
var i__40148_40202 = (0);
while(true){
if((i__40148_40202 < count__40147_40201)){
var c_40203 = cljs.core._nth.call(null,chunk__40146_40200,i__40148_40202);
dommy.core.add_class_BANG_.call(null,elem,c_40203);


var G__40204 = seq__40145_40199;
var G__40205 = chunk__40146_40200;
var G__40206 = count__40147_40201;
var G__40207 = (i__40148_40202 + (1));
seq__40145_40199 = G__40204;
chunk__40146_40200 = G__40205;
count__40147_40201 = G__40206;
i__40148_40202 = G__40207;
continue;
} else {
var temp__5735__auto___40208 = cljs.core.seq.call(null,seq__40145_40199);
if(temp__5735__auto___40208){
var seq__40145_40209__$1 = temp__5735__auto___40208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40145_40209__$1)){
var c__4550__auto___40210 = cljs.core.chunk_first.call(null,seq__40145_40209__$1);
var G__40211 = cljs.core.chunk_rest.call(null,seq__40145_40209__$1);
var G__40212 = c__4550__auto___40210;
var G__40213 = cljs.core.count.call(null,c__4550__auto___40210);
var G__40214 = (0);
seq__40145_40199 = G__40211;
chunk__40146_40200 = G__40212;
count__40147_40201 = G__40213;
i__40148_40202 = G__40214;
continue;
} else {
var c_40215 = cljs.core.first.call(null,seq__40145_40209__$1);
dommy.core.add_class_BANG_.call(null,elem,c_40215);


var G__40216 = cljs.core.next.call(null,seq__40145_40209__$1);
var G__40217 = null;
var G__40218 = (0);
var G__40219 = (0);
seq__40145_40199 = G__40216;
chunk__40146_40200 = G__40217;
count__40147_40201 = G__40218;
i__40148_40202 = G__40219;
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
dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq40133){
var G__40134 = cljs.core.first.call(null,seq40133);
var seq40133__$1 = cljs.core.next.call(null,seq40133);
var G__40135 = cljs.core.first.call(null,seq40133__$1);
var seq40133__$2 = cljs.core.next.call(null,seq40133__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40134,G__40135,seq40133__$2);
});

dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__40224 = arguments.length;
switch (G__40224) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40230 = arguments.length;
var i__4731__auto___40231 = (0);
while(true){
if((i__4731__auto___40231 < len__4730__auto___40230)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40231]));

var G__40232 = (i__4731__auto___40231 + (1));
i__4731__auto___40231 = G__40232;
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
var temp__5733__auto___40233 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40233)){
var class_list_40234 = temp__5733__auto___40233;
class_list_40234.remove(c__$1);
} else {
var class_name_40235 = dommy.core.class$.call(null,elem);
var new_class_name_40236 = dommy.utils.remove_class_str.call(null,class_name_40235,c__$1);
if((class_name_40235 === new_class_name_40236)){
} else {
dommy.core.set_class_BANG_.call(null,elem,new_class_name_40236);
}
}

return elem;
});

dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__40225 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));
var chunk__40226 = null;
var count__40227 = (0);
var i__40228 = (0);
while(true){
if((i__40228 < count__40227)){
var c = cljs.core._nth.call(null,chunk__40226,i__40228);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__40237 = seq__40225;
var G__40238 = chunk__40226;
var G__40239 = count__40227;
var G__40240 = (i__40228 + (1));
seq__40225 = G__40237;
chunk__40226 = G__40238;
count__40227 = G__40239;
i__40228 = G__40240;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40225);
if(temp__5735__auto__){
var seq__40225__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40225__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40225__$1);
var G__40241 = cljs.core.chunk_rest.call(null,seq__40225__$1);
var G__40242 = c__4550__auto__;
var G__40243 = cljs.core.count.call(null,c__4550__auto__);
var G__40244 = (0);
seq__40225 = G__40241;
chunk__40226 = G__40242;
count__40227 = G__40243;
i__40228 = G__40244;
continue;
} else {
var c = cljs.core.first.call(null,seq__40225__$1);
dommy.core.remove_class_BANG_.call(null,elem,c);


var G__40245 = cljs.core.next.call(null,seq__40225__$1);
var G__40246 = null;
var G__40247 = (0);
var G__40248 = (0);
seq__40225 = G__40245;
chunk__40226 = G__40246;
count__40227 = G__40247;
i__40228 = G__40248;
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
dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq40221){
var G__40222 = cljs.core.first.call(null,seq40221);
var seq40221__$1 = cljs.core.next.call(null,seq40221);
var G__40223 = cljs.core.first.call(null,seq40221__$1);
var seq40221__$2 = cljs.core.next.call(null,seq40221__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40222,G__40223,seq40221__$2);
});

dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__40250 = arguments.length;
switch (G__40250) {
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
var temp__5733__auto___40252 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___40252)){
var class_list_40253 = temp__5733__auto___40252;
class_list_40253.toggle(c__$1);
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
var G__40255 = arguments.length;
switch (G__40255) {
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
var G__40258 = arguments.length;
switch (G__40258) {
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
var G__40264 = arguments.length;
switch (G__40264) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40271 = arguments.length;
var i__4731__auto___40272 = (0);
while(true){
if((i__4731__auto___40272 < len__4730__auto___40271)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40272]));

var G__40273 = (i__4731__auto___40272 + (1));
i__4731__auto___40272 = G__40273;
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
var G__40265 = parent;
G__40265.appendChild(child);

return G__40265;
});

dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40266_40274 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__40267_40275 = null;
var count__40268_40276 = (0);
var i__40269_40277 = (0);
while(true){
if((i__40269_40277 < count__40268_40276)){
var c_40278 = cljs.core._nth.call(null,chunk__40267_40275,i__40269_40277);
dommy.core.append_BANG_.call(null,parent,c_40278);


var G__40279 = seq__40266_40274;
var G__40280 = chunk__40267_40275;
var G__40281 = count__40268_40276;
var G__40282 = (i__40269_40277 + (1));
seq__40266_40274 = G__40279;
chunk__40267_40275 = G__40280;
count__40268_40276 = G__40281;
i__40269_40277 = G__40282;
continue;
} else {
var temp__5735__auto___40283 = cljs.core.seq.call(null,seq__40266_40274);
if(temp__5735__auto___40283){
var seq__40266_40284__$1 = temp__5735__auto___40283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40266_40284__$1)){
var c__4550__auto___40285 = cljs.core.chunk_first.call(null,seq__40266_40284__$1);
var G__40286 = cljs.core.chunk_rest.call(null,seq__40266_40284__$1);
var G__40287 = c__4550__auto___40285;
var G__40288 = cljs.core.count.call(null,c__4550__auto___40285);
var G__40289 = (0);
seq__40266_40274 = G__40286;
chunk__40267_40275 = G__40287;
count__40268_40276 = G__40288;
i__40269_40277 = G__40289;
continue;
} else {
var c_40290 = cljs.core.first.call(null,seq__40266_40284__$1);
dommy.core.append_BANG_.call(null,parent,c_40290);


var G__40291 = cljs.core.next.call(null,seq__40266_40284__$1);
var G__40292 = null;
var G__40293 = (0);
var G__40294 = (0);
seq__40266_40274 = G__40291;
chunk__40267_40275 = G__40292;
count__40268_40276 = G__40293;
i__40269_40277 = G__40294;
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
dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq40261){
var G__40262 = cljs.core.first.call(null,seq40261);
var seq40261__$1 = cljs.core.next.call(null,seq40261);
var G__40263 = cljs.core.first.call(null,seq40261__$1);
var seq40261__$2 = cljs.core.next.call(null,seq40261__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40262,G__40263,seq40261__$2);
});

dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__40299 = arguments.length;
switch (G__40299) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___40306 = arguments.length;
var i__4731__auto___40307 = (0);
while(true){
if((i__4731__auto___40307 < len__4730__auto___40306)){
args_arr__4751__auto__.push((arguments[i__4731__auto___40307]));

var G__40308 = (i__4731__auto___40307 + (1));
i__4731__auto___40307 = G__40308;
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
var G__40300 = parent;
G__40300.insertBefore(child,parent.firstChild);

return G__40300;
});

dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__40301_40309 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));
var chunk__40302_40310 = null;
var count__40303_40311 = (0);
var i__40304_40312 = (0);
while(true){
if((i__40304_40312 < count__40303_40311)){
var c_40313 = cljs.core._nth.call(null,chunk__40302_40310,i__40304_40312);
dommy.core.prepend_BANG_.call(null,parent,c_40313);


var G__40314 = seq__40301_40309;
var G__40315 = chunk__40302_40310;
var G__40316 = count__40303_40311;
var G__40317 = (i__40304_40312 + (1));
seq__40301_40309 = G__40314;
chunk__40302_40310 = G__40315;
count__40303_40311 = G__40316;
i__40304_40312 = G__40317;
continue;
} else {
var temp__5735__auto___40318 = cljs.core.seq.call(null,seq__40301_40309);
if(temp__5735__auto___40318){
var seq__40301_40319__$1 = temp__5735__auto___40318;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40301_40319__$1)){
var c__4550__auto___40320 = cljs.core.chunk_first.call(null,seq__40301_40319__$1);
var G__40321 = cljs.core.chunk_rest.call(null,seq__40301_40319__$1);
var G__40322 = c__4550__auto___40320;
var G__40323 = cljs.core.count.call(null,c__4550__auto___40320);
var G__40324 = (0);
seq__40301_40309 = G__40321;
chunk__40302_40310 = G__40322;
count__40303_40311 = G__40323;
i__40304_40312 = G__40324;
continue;
} else {
var c_40325 = cljs.core.first.call(null,seq__40301_40319__$1);
dommy.core.prepend_BANG_.call(null,parent,c_40325);


var G__40326 = cljs.core.next.call(null,seq__40301_40319__$1);
var G__40327 = null;
var G__40328 = (0);
var G__40329 = (0);
seq__40301_40309 = G__40326;
chunk__40302_40310 = G__40327;
count__40303_40311 = G__40328;
i__40304_40312 = G__40329;
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
dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq40296){
var G__40297 = cljs.core.first.call(null,seq40296);
var seq40296__$1 = cljs.core.next.call(null,seq40296);
var G__40298 = cljs.core.first.call(null,seq40296__$1);
var seq40296__$2 = cljs.core.next.call(null,seq40296__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40297,G__40298,seq40296__$2);
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
var temp__5733__auto___40330 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___40330)){
var next_40331 = temp__5733__auto___40330;
dommy.core.insert_before_BANG_.call(null,elem,next_40331);
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
var G__40333 = arguments.length;
switch (G__40333) {
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
var G__40334 = p;
G__40334.removeChild(elem);

return G__40334;
});

dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2;

dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__40336){
var vec__40337 = p__40336;
var special_mouse_event = cljs.core.nth.call(null,vec__40337,(0),null);
var real_mouse_event = cljs.core.nth.call(null,vec__40337,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,((function (vec__40337,special_mouse_event,real_mouse_event){
return (function (f){
return ((function (vec__40337,special_mouse_event,real_mouse_event){
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
;})(vec__40337,special_mouse_event,real_mouse_event))
});})(vec__40337,special_mouse_event,real_mouse_event))
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
var len__4730__auto___40343 = arguments.length;
var i__4731__auto___40344 = (0);
while(true){
if((i__4731__auto___40344 < len__4730__auto___40343)){
args__4736__auto__.push((arguments[i__4731__auto___40344]));

var G__40345 = (i__4731__auto___40344 + (1));
i__4731__auto___40344 = G__40345;
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
dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq40340){
var G__40341 = cljs.core.first.call(null,seq40340);
var seq40340__$1 = cljs.core.next.call(null,seq40340);
var G__40342 = cljs.core.first.call(null,seq40340__$1);
var seq40340__$2 = cljs.core.next.call(null,seq40340__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40341,G__40342,seq40340__$2);
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
var len__4730__auto___40427 = arguments.length;
var i__4731__auto___40428 = (0);
while(true){
if((i__4731__auto___40428 < len__4730__auto___40427)){
args__4736__auto__.push((arguments[i__4731__auto___40428]));

var G__40429 = (i__4731__auto___40428 + (1));
i__4731__auto___40428 = G__40429;
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

var vec__40348_40430 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_40431 = cljs.core.nth.call(null,vec__40348_40430,(0),null);
var selector_40432 = cljs.core.nth.call(null,vec__40348_40430,(1),null);
var seq__40351_40433 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__40358_40434 = null;
var count__40359_40435 = (0);
var i__40360_40436 = (0);
while(true){
if((i__40360_40436 < count__40359_40435)){
var vec__40397_40437 = cljs.core._nth.call(null,chunk__40358_40434,i__40360_40436);
var orig_type_40438 = cljs.core.nth.call(null,vec__40397_40437,(0),null);
var f_40439 = cljs.core.nth.call(null,vec__40397_40437,(1),null);
var seq__40361_40440 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_40438,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40438,cljs.core.identity])));
var chunk__40363_40441 = null;
var count__40364_40442 = (0);
var i__40365_40443 = (0);
while(true){
if((i__40365_40443 < count__40364_40442)){
var vec__40406_40444 = cljs.core._nth.call(null,chunk__40363_40441,i__40365_40443);
var actual_type_40445 = cljs.core.nth.call(null,vec__40406_40444,(0),null);
var factory_40446 = cljs.core.nth.call(null,vec__40406_40444,(1),null);
var canonical_f_40447 = (cljs.core.truth_(selector_40432)?cljs.core.partial.call(null,dommy.core.live_listener,elem_40431,selector_40432):cljs.core.identity).call(null,factory_40446.call(null,f_40439));
dommy.core.update_event_listeners_BANG_.call(null,elem_40431,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40432,actual_type_40445,f_40439], null),canonical_f_40447);

if(cljs.core.truth_(elem_40431.addEventListener)){
elem_40431.addEventListener(cljs.core.name.call(null,actual_type_40445),canonical_f_40447);
} else {
elem_40431.attachEvent(cljs.core.name.call(null,actual_type_40445),canonical_f_40447);
}


var G__40448 = seq__40361_40440;
var G__40449 = chunk__40363_40441;
var G__40450 = count__40364_40442;
var G__40451 = (i__40365_40443 + (1));
seq__40361_40440 = G__40448;
chunk__40363_40441 = G__40449;
count__40364_40442 = G__40450;
i__40365_40443 = G__40451;
continue;
} else {
var temp__5735__auto___40452 = cljs.core.seq.call(null,seq__40361_40440);
if(temp__5735__auto___40452){
var seq__40361_40453__$1 = temp__5735__auto___40452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40361_40453__$1)){
var c__4550__auto___40454 = cljs.core.chunk_first.call(null,seq__40361_40453__$1);
var G__40455 = cljs.core.chunk_rest.call(null,seq__40361_40453__$1);
var G__40456 = c__4550__auto___40454;
var G__40457 = cljs.core.count.call(null,c__4550__auto___40454);
var G__40458 = (0);
seq__40361_40440 = G__40455;
chunk__40363_40441 = G__40456;
count__40364_40442 = G__40457;
i__40365_40443 = G__40458;
continue;
} else {
var vec__40409_40459 = cljs.core.first.call(null,seq__40361_40453__$1);
var actual_type_40460 = cljs.core.nth.call(null,vec__40409_40459,(0),null);
var factory_40461 = cljs.core.nth.call(null,vec__40409_40459,(1),null);
var canonical_f_40462 = (cljs.core.truth_(selector_40432)?cljs.core.partial.call(null,dommy.core.live_listener,elem_40431,selector_40432):cljs.core.identity).call(null,factory_40461.call(null,f_40439));
dommy.core.update_event_listeners_BANG_.call(null,elem_40431,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40432,actual_type_40460,f_40439], null),canonical_f_40462);

if(cljs.core.truth_(elem_40431.addEventListener)){
elem_40431.addEventListener(cljs.core.name.call(null,actual_type_40460),canonical_f_40462);
} else {
elem_40431.attachEvent(cljs.core.name.call(null,actual_type_40460),canonical_f_40462);
}


var G__40463 = cljs.core.next.call(null,seq__40361_40453__$1);
var G__40464 = null;
var G__40465 = (0);
var G__40466 = (0);
seq__40361_40440 = G__40463;
chunk__40363_40441 = G__40464;
count__40364_40442 = G__40465;
i__40365_40443 = G__40466;
continue;
}
} else {
}
}
break;
}

var G__40467 = seq__40351_40433;
var G__40468 = chunk__40358_40434;
var G__40469 = count__40359_40435;
var G__40470 = (i__40360_40436 + (1));
seq__40351_40433 = G__40467;
chunk__40358_40434 = G__40468;
count__40359_40435 = G__40469;
i__40360_40436 = G__40470;
continue;
} else {
var temp__5735__auto___40471 = cljs.core.seq.call(null,seq__40351_40433);
if(temp__5735__auto___40471){
var seq__40351_40472__$1 = temp__5735__auto___40471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40351_40472__$1)){
var c__4550__auto___40473 = cljs.core.chunk_first.call(null,seq__40351_40472__$1);
var G__40474 = cljs.core.chunk_rest.call(null,seq__40351_40472__$1);
var G__40475 = c__4550__auto___40473;
var G__40476 = cljs.core.count.call(null,c__4550__auto___40473);
var G__40477 = (0);
seq__40351_40433 = G__40474;
chunk__40358_40434 = G__40475;
count__40359_40435 = G__40476;
i__40360_40436 = G__40477;
continue;
} else {
var vec__40412_40478 = cljs.core.first.call(null,seq__40351_40472__$1);
var orig_type_40479 = cljs.core.nth.call(null,vec__40412_40478,(0),null);
var f_40480 = cljs.core.nth.call(null,vec__40412_40478,(1),null);
var seq__40352_40481 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_40479,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40479,cljs.core.identity])));
var chunk__40354_40482 = null;
var count__40355_40483 = (0);
var i__40356_40484 = (0);
while(true){
if((i__40356_40484 < count__40355_40483)){
var vec__40421_40485 = cljs.core._nth.call(null,chunk__40354_40482,i__40356_40484);
var actual_type_40486 = cljs.core.nth.call(null,vec__40421_40485,(0),null);
var factory_40487 = cljs.core.nth.call(null,vec__40421_40485,(1),null);
var canonical_f_40488 = (cljs.core.truth_(selector_40432)?cljs.core.partial.call(null,dommy.core.live_listener,elem_40431,selector_40432):cljs.core.identity).call(null,factory_40487.call(null,f_40480));
dommy.core.update_event_listeners_BANG_.call(null,elem_40431,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40432,actual_type_40486,f_40480], null),canonical_f_40488);

if(cljs.core.truth_(elem_40431.addEventListener)){
elem_40431.addEventListener(cljs.core.name.call(null,actual_type_40486),canonical_f_40488);
} else {
elem_40431.attachEvent(cljs.core.name.call(null,actual_type_40486),canonical_f_40488);
}


var G__40489 = seq__40352_40481;
var G__40490 = chunk__40354_40482;
var G__40491 = count__40355_40483;
var G__40492 = (i__40356_40484 + (1));
seq__40352_40481 = G__40489;
chunk__40354_40482 = G__40490;
count__40355_40483 = G__40491;
i__40356_40484 = G__40492;
continue;
} else {
var temp__5735__auto___40493__$1 = cljs.core.seq.call(null,seq__40352_40481);
if(temp__5735__auto___40493__$1){
var seq__40352_40494__$1 = temp__5735__auto___40493__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40352_40494__$1)){
var c__4550__auto___40495 = cljs.core.chunk_first.call(null,seq__40352_40494__$1);
var G__40496 = cljs.core.chunk_rest.call(null,seq__40352_40494__$1);
var G__40497 = c__4550__auto___40495;
var G__40498 = cljs.core.count.call(null,c__4550__auto___40495);
var G__40499 = (0);
seq__40352_40481 = G__40496;
chunk__40354_40482 = G__40497;
count__40355_40483 = G__40498;
i__40356_40484 = G__40499;
continue;
} else {
var vec__40424_40500 = cljs.core.first.call(null,seq__40352_40494__$1);
var actual_type_40501 = cljs.core.nth.call(null,vec__40424_40500,(0),null);
var factory_40502 = cljs.core.nth.call(null,vec__40424_40500,(1),null);
var canonical_f_40503 = (cljs.core.truth_(selector_40432)?cljs.core.partial.call(null,dommy.core.live_listener,elem_40431,selector_40432):cljs.core.identity).call(null,factory_40502.call(null,f_40480));
dommy.core.update_event_listeners_BANG_.call(null,elem_40431,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40432,actual_type_40501,f_40480], null),canonical_f_40503);

if(cljs.core.truth_(elem_40431.addEventListener)){
elem_40431.addEventListener(cljs.core.name.call(null,actual_type_40501),canonical_f_40503);
} else {
elem_40431.attachEvent(cljs.core.name.call(null,actual_type_40501),canonical_f_40503);
}


var G__40504 = cljs.core.next.call(null,seq__40352_40494__$1);
var G__40505 = null;
var G__40506 = (0);
var G__40507 = (0);
seq__40352_40481 = G__40504;
chunk__40354_40482 = G__40505;
count__40355_40483 = G__40506;
i__40356_40484 = G__40507;
continue;
}
} else {
}
}
break;
}

var G__40508 = cljs.core.next.call(null,seq__40351_40472__$1);
var G__40509 = null;
var G__40510 = (0);
var G__40511 = (0);
seq__40351_40433 = G__40508;
chunk__40358_40434 = G__40509;
count__40359_40435 = G__40510;
i__40360_40436 = G__40511;
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
dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq40346){
var G__40347 = cljs.core.first.call(null,seq40346);
var seq40346__$1 = cljs.core.next.call(null,seq40346);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40347,seq40346__$1);
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
var len__4730__auto___40593 = arguments.length;
var i__4731__auto___40594 = (0);
while(true){
if((i__4731__auto___40594 < len__4730__auto___40593)){
args__4736__auto__.push((arguments[i__4731__auto___40594]));

var G__40595 = (i__4731__auto___40594 + (1));
i__4731__auto___40594 = G__40595;
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

var vec__40514_40596 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_40597 = cljs.core.nth.call(null,vec__40514_40596,(0),null);
var selector_40598 = cljs.core.nth.call(null,vec__40514_40596,(1),null);
var seq__40517_40599 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__40524_40600 = null;
var count__40525_40601 = (0);
var i__40526_40602 = (0);
while(true){
if((i__40526_40602 < count__40525_40601)){
var vec__40563_40603 = cljs.core._nth.call(null,chunk__40524_40600,i__40526_40602);
var orig_type_40604 = cljs.core.nth.call(null,vec__40563_40603,(0),null);
var f_40605 = cljs.core.nth.call(null,vec__40563_40603,(1),null);
var seq__40527_40606 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_40604,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40604,cljs.core.identity])));
var chunk__40529_40607 = null;
var count__40530_40608 = (0);
var i__40531_40609 = (0);
while(true){
if((i__40531_40609 < count__40530_40608)){
var vec__40572_40610 = cljs.core._nth.call(null,chunk__40529_40607,i__40531_40609);
var actual_type_40611 = cljs.core.nth.call(null,vec__40572_40610,(0),null);
var __40612 = cljs.core.nth.call(null,vec__40572_40610,(1),null);
var keys_40613 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40598,actual_type_40611,f_40605], null);
var canonical_f_40614 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_40597),keys_40613);
dommy.core.update_event_listeners_BANG_.call(null,elem_40597,dommy.utils.dissoc_in,keys_40613);

if(cljs.core.truth_(elem_40597.removeEventListener)){
elem_40597.removeEventListener(cljs.core.name.call(null,actual_type_40611),canonical_f_40614);
} else {
elem_40597.detachEvent(cljs.core.name.call(null,actual_type_40611),canonical_f_40614);
}


var G__40615 = seq__40527_40606;
var G__40616 = chunk__40529_40607;
var G__40617 = count__40530_40608;
var G__40618 = (i__40531_40609 + (1));
seq__40527_40606 = G__40615;
chunk__40529_40607 = G__40616;
count__40530_40608 = G__40617;
i__40531_40609 = G__40618;
continue;
} else {
var temp__5735__auto___40619 = cljs.core.seq.call(null,seq__40527_40606);
if(temp__5735__auto___40619){
var seq__40527_40620__$1 = temp__5735__auto___40619;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40527_40620__$1)){
var c__4550__auto___40621 = cljs.core.chunk_first.call(null,seq__40527_40620__$1);
var G__40622 = cljs.core.chunk_rest.call(null,seq__40527_40620__$1);
var G__40623 = c__4550__auto___40621;
var G__40624 = cljs.core.count.call(null,c__4550__auto___40621);
var G__40625 = (0);
seq__40527_40606 = G__40622;
chunk__40529_40607 = G__40623;
count__40530_40608 = G__40624;
i__40531_40609 = G__40625;
continue;
} else {
var vec__40575_40626 = cljs.core.first.call(null,seq__40527_40620__$1);
var actual_type_40627 = cljs.core.nth.call(null,vec__40575_40626,(0),null);
var __40628 = cljs.core.nth.call(null,vec__40575_40626,(1),null);
var keys_40629 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40598,actual_type_40627,f_40605], null);
var canonical_f_40630 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_40597),keys_40629);
dommy.core.update_event_listeners_BANG_.call(null,elem_40597,dommy.utils.dissoc_in,keys_40629);

if(cljs.core.truth_(elem_40597.removeEventListener)){
elem_40597.removeEventListener(cljs.core.name.call(null,actual_type_40627),canonical_f_40630);
} else {
elem_40597.detachEvent(cljs.core.name.call(null,actual_type_40627),canonical_f_40630);
}


var G__40631 = cljs.core.next.call(null,seq__40527_40620__$1);
var G__40632 = null;
var G__40633 = (0);
var G__40634 = (0);
seq__40527_40606 = G__40631;
chunk__40529_40607 = G__40632;
count__40530_40608 = G__40633;
i__40531_40609 = G__40634;
continue;
}
} else {
}
}
break;
}

var G__40635 = seq__40517_40599;
var G__40636 = chunk__40524_40600;
var G__40637 = count__40525_40601;
var G__40638 = (i__40526_40602 + (1));
seq__40517_40599 = G__40635;
chunk__40524_40600 = G__40636;
count__40525_40601 = G__40637;
i__40526_40602 = G__40638;
continue;
} else {
var temp__5735__auto___40639 = cljs.core.seq.call(null,seq__40517_40599);
if(temp__5735__auto___40639){
var seq__40517_40640__$1 = temp__5735__auto___40639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40517_40640__$1)){
var c__4550__auto___40641 = cljs.core.chunk_first.call(null,seq__40517_40640__$1);
var G__40642 = cljs.core.chunk_rest.call(null,seq__40517_40640__$1);
var G__40643 = c__4550__auto___40641;
var G__40644 = cljs.core.count.call(null,c__4550__auto___40641);
var G__40645 = (0);
seq__40517_40599 = G__40642;
chunk__40524_40600 = G__40643;
count__40525_40601 = G__40644;
i__40526_40602 = G__40645;
continue;
} else {
var vec__40578_40646 = cljs.core.first.call(null,seq__40517_40640__$1);
var orig_type_40647 = cljs.core.nth.call(null,vec__40578_40646,(0),null);
var f_40648 = cljs.core.nth.call(null,vec__40578_40646,(1),null);
var seq__40518_40649 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_40647,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_40647,cljs.core.identity])));
var chunk__40520_40650 = null;
var count__40521_40651 = (0);
var i__40522_40652 = (0);
while(true){
if((i__40522_40652 < count__40521_40651)){
var vec__40587_40653 = cljs.core._nth.call(null,chunk__40520_40650,i__40522_40652);
var actual_type_40654 = cljs.core.nth.call(null,vec__40587_40653,(0),null);
var __40655 = cljs.core.nth.call(null,vec__40587_40653,(1),null);
var keys_40656 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40598,actual_type_40654,f_40648], null);
var canonical_f_40657 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_40597),keys_40656);
dommy.core.update_event_listeners_BANG_.call(null,elem_40597,dommy.utils.dissoc_in,keys_40656);

if(cljs.core.truth_(elem_40597.removeEventListener)){
elem_40597.removeEventListener(cljs.core.name.call(null,actual_type_40654),canonical_f_40657);
} else {
elem_40597.detachEvent(cljs.core.name.call(null,actual_type_40654),canonical_f_40657);
}


var G__40658 = seq__40518_40649;
var G__40659 = chunk__40520_40650;
var G__40660 = count__40521_40651;
var G__40661 = (i__40522_40652 + (1));
seq__40518_40649 = G__40658;
chunk__40520_40650 = G__40659;
count__40521_40651 = G__40660;
i__40522_40652 = G__40661;
continue;
} else {
var temp__5735__auto___40662__$1 = cljs.core.seq.call(null,seq__40518_40649);
if(temp__5735__auto___40662__$1){
var seq__40518_40663__$1 = temp__5735__auto___40662__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40518_40663__$1)){
var c__4550__auto___40664 = cljs.core.chunk_first.call(null,seq__40518_40663__$1);
var G__40665 = cljs.core.chunk_rest.call(null,seq__40518_40663__$1);
var G__40666 = c__4550__auto___40664;
var G__40667 = cljs.core.count.call(null,c__4550__auto___40664);
var G__40668 = (0);
seq__40518_40649 = G__40665;
chunk__40520_40650 = G__40666;
count__40521_40651 = G__40667;
i__40522_40652 = G__40668;
continue;
} else {
var vec__40590_40669 = cljs.core.first.call(null,seq__40518_40663__$1);
var actual_type_40670 = cljs.core.nth.call(null,vec__40590_40669,(0),null);
var __40671 = cljs.core.nth.call(null,vec__40590_40669,(1),null);
var keys_40672 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_40598,actual_type_40670,f_40648], null);
var canonical_f_40673 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_40597),keys_40672);
dommy.core.update_event_listeners_BANG_.call(null,elem_40597,dommy.utils.dissoc_in,keys_40672);

if(cljs.core.truth_(elem_40597.removeEventListener)){
elem_40597.removeEventListener(cljs.core.name.call(null,actual_type_40670),canonical_f_40673);
} else {
elem_40597.detachEvent(cljs.core.name.call(null,actual_type_40670),canonical_f_40673);
}


var G__40674 = cljs.core.next.call(null,seq__40518_40663__$1);
var G__40675 = null;
var G__40676 = (0);
var G__40677 = (0);
seq__40518_40649 = G__40674;
chunk__40520_40650 = G__40675;
count__40521_40651 = G__40676;
i__40522_40652 = G__40677;
continue;
}
} else {
}
}
break;
}

var G__40678 = cljs.core.next.call(null,seq__40517_40640__$1);
var G__40679 = null;
var G__40680 = (0);
var G__40681 = (0);
seq__40517_40599 = G__40678;
chunk__40524_40600 = G__40679;
count__40525_40601 = G__40680;
i__40526_40602 = G__40681;
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
dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq40512){
var G__40513 = cljs.core.first.call(null,seq40512);
var seq40512__$1 = cljs.core.next.call(null,seq40512);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40513,seq40512__$1);
});

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40703 = arguments.length;
var i__4731__auto___40704 = (0);
while(true){
if((i__4731__auto___40704 < len__4730__auto___40703)){
args__4736__auto__.push((arguments[i__4731__auto___40704]));

var G__40705 = (i__4731__auto___40704 + (1));
i__4731__auto___40704 = G__40705;
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

var vec__40684_40706 = dommy.core.elem_and_selector.call(null,elem_sel);
var elem_40707 = cljs.core.nth.call(null,vec__40684_40706,(0),null);
var selector_40708 = cljs.core.nth.call(null,vec__40684_40706,(1),null);
var seq__40687_40709 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));
var chunk__40688_40710 = null;
var count__40689_40711 = (0);
var i__40690_40712 = (0);
while(true){
if((i__40690_40712 < count__40689_40711)){
var vec__40697_40713 = cljs.core._nth.call(null,chunk__40688_40710,i__40690_40712);
var type_40714 = cljs.core.nth.call(null,vec__40697_40713,(0),null);
var f_40715 = cljs.core.nth.call(null,vec__40697_40713,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_40714,((function (seq__40687_40709,chunk__40688_40710,count__40689_40711,i__40690_40712,vec__40697_40713,type_40714,f_40715,vec__40684_40706,elem_40707,selector_40708){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_40714,dommy$core$this_fn);

return f_40715.call(null,e);
});})(seq__40687_40709,chunk__40688_40710,count__40689_40711,i__40690_40712,vec__40697_40713,type_40714,f_40715,vec__40684_40706,elem_40707,selector_40708))
);


var G__40716 = seq__40687_40709;
var G__40717 = chunk__40688_40710;
var G__40718 = count__40689_40711;
var G__40719 = (i__40690_40712 + (1));
seq__40687_40709 = G__40716;
chunk__40688_40710 = G__40717;
count__40689_40711 = G__40718;
i__40690_40712 = G__40719;
continue;
} else {
var temp__5735__auto___40720 = cljs.core.seq.call(null,seq__40687_40709);
if(temp__5735__auto___40720){
var seq__40687_40721__$1 = temp__5735__auto___40720;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40687_40721__$1)){
var c__4550__auto___40722 = cljs.core.chunk_first.call(null,seq__40687_40721__$1);
var G__40723 = cljs.core.chunk_rest.call(null,seq__40687_40721__$1);
var G__40724 = c__4550__auto___40722;
var G__40725 = cljs.core.count.call(null,c__4550__auto___40722);
var G__40726 = (0);
seq__40687_40709 = G__40723;
chunk__40688_40710 = G__40724;
count__40689_40711 = G__40725;
i__40690_40712 = G__40726;
continue;
} else {
var vec__40700_40727 = cljs.core.first.call(null,seq__40687_40721__$1);
var type_40728 = cljs.core.nth.call(null,vec__40700_40727,(0),null);
var f_40729 = cljs.core.nth.call(null,vec__40700_40727,(1),null);
dommy.core.listen_BANG_.call(null,elem_sel,type_40728,((function (seq__40687_40709,chunk__40688_40710,count__40689_40711,i__40690_40712,vec__40700_40727,type_40728,f_40729,seq__40687_40721__$1,temp__5735__auto___40720,vec__40684_40706,elem_40707,selector_40708){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.call(null,elem_sel,type_40728,dommy$core$this_fn);

return f_40729.call(null,e);
});})(seq__40687_40709,chunk__40688_40710,count__40689_40711,i__40690_40712,vec__40700_40727,type_40728,f_40729,seq__40687_40721__$1,temp__5735__auto___40720,vec__40684_40706,elem_40707,selector_40708))
);


var G__40730 = cljs.core.next.call(null,seq__40687_40721__$1);
var G__40731 = null;
var G__40732 = (0);
var G__40733 = (0);
seq__40687_40709 = G__40730;
chunk__40688_40710 = G__40731;
count__40689_40711 = G__40732;
i__40690_40712 = G__40733;
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
dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq40682){
var G__40683 = cljs.core.first.call(null,seq40682);
var seq40682__$1 = cljs.core.next.call(null,seq40682);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40683,seq40682__$1);
});


//# sourceMappingURL=core.js.map?rel=1563183874292
