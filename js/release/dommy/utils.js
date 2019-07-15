// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('dommy.utils');
goog.require('cljs.core');
goog.require('cljs.core.constants');
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
dommy.utils.dissoc_in = (function dommy$utils$dissoc_in(m,p__27211){
var vec__27212 = p__27211;
var seq__27213 = cljs.core.seq(vec__27212);
var first__27214 = cljs.core.first(seq__27213);
var seq__27213__$1 = cljs.core.next(seq__27213);
var k = first__27214;
var ks = seq__27213__$1;
if(cljs.core.truth_(m)){
var temp__5735__auto__ = (function (){var and__4120__auto__ = ks;
if(and__4120__auto__){
var G__27217 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
var G__27218 = ks;
return (dommy.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? dommy.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__27217,G__27218) : dommy.utils.dissoc_in.call(null,G__27217,G__27218));
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
dommy.utils.__GT_Array = (function dommy$utils$__GT_Array(array_like){
return Array.prototype.slice.call(array_like);
});
/**
 * Coerces strings and keywords to strings, while preserving namespace of
 * namespaced keywords
 */
dommy.utils.as_str = (function dommy$utils$as_str(s){
if((s instanceof cljs.core.Keyword)){
return [(function (){var G__27220 = cljs.core.namespace(s);
if((G__27220 == null)){
return null;
} else {
return [G__27220,"/"].join('');
}
})(),cljs.core.name(s)].join('');
} else {
return s;
}
});
/**
 * Does `class-name` string have class starting at index idx.
 * only will be used when Element::classList doesn't exist
 */
dommy.utils.class_match_QMARK_ = (function dommy$utils$class_match_QMARK_(class_name,class$,idx){
var and__4120__auto__ = (((idx === (0))) || ((" " === class_name.charAt((idx - (1))))));
if(and__4120__auto__){
var total_len = class_name.length;
var stop = (idx + class$.length);
if((stop <= total_len)){
return (((stop === total_len)) || ((" " === class_name.charAt(stop))));
} else {
return null;
}
} else {
return and__4120__auto__;
}
});
/**
 * Finds the index of class in a space-delimited class-name
 *  only will be used when Element::classList doesn't exist
 */
dommy.utils.class_index = (function dommy$utils$class_index(class_name,class$){
var start_from = (0);
while(true){
var i = class_name.indexOf(class$,start_from);
if((i >= (0))){
if(dommy.utils.class_match_QMARK_(class_name,class$,i)){
return i;
} else {
var G__27221 = (i + class$.length);
start_from = G__27221;
continue;
}
} else {
return null;
}
break;
}
});
dommy.utils.remove_class_str = (function dommy$utils$remove_class_str(init_class_name,class$){
var class_name = init_class_name;
while(true){
var class_len = class_name.length;
var temp__5735__auto__ = dommy.utils.class_index(class_name,class$);
if(cljs.core.truth_(temp__5735__auto__)){
var i = temp__5735__auto__;
var G__27222 = (function (){var end = (i + class$.length);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((((end < class_len))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substring((0),i)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name.substr((end + (1))))].join(''):class_name.substring((0),(i - (1)))));
})();
class_name = G__27222;
continue;
} else {
return class_name;
}
break;
}
});
