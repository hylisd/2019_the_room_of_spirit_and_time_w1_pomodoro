// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('clojure.set');
goog.require('garden.compiler');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.default_class_prefix = "_stylefy";
stylefy.impl.styles.use_custom_class_prefix_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(style)),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.styles.global_vendor_prefixes)),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(style))], null)], 0));
});
/**
 * Checks that the value is valid and returns as properly formatted prefix.
 */
stylefy.impl.styles.check_custom_class_prefix = (function stylefy$impl$styles$check_custom_class_prefix(custom_class_prefix){
if((((custom_class_prefix == null)) || (typeof custom_class_prefix === 'string') || ((custom_class_prefix instanceof cljs.core.Keyword)))){
} else {
throw (new Error(["Assert failed: ",["Custom class prefix should be either string, keyword or nil, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_class_prefix], 0))].join(''),"\n","(or (nil? custom-class-prefix) (string? custom-class-prefix) (keyword? custom-class-prefix))"].join('')));
}

if((custom_class_prefix == null)){
return stylefy.impl.styles.default_class_prefix;
} else {
if(typeof custom_class_prefix === 'string'){
return custom_class_prefix;
} else {
if((custom_class_prefix instanceof cljs.core.Keyword)){
return cljs.core.name(custom_class_prefix);
} else {
return null;
}
}
}
});
stylefy.impl.styles.hash_style = (function stylefy$impl$styles$hash_style(style){
if((!(cljs.core.empty_QMARK_(style)))){
var hashable_garden_units = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,prop_key){
var prop_value = (prop_key.cljs$core$IFn$_invoke$arity$1 ? prop_key.cljs$core$IFn$_invoke$arity$1(style) : prop_key.call(null,style));
if(stylefy.impl.utils.is_garden_value_QMARK_(prop_value)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,prop_key,garden.compiler.render_css(prop_value));
} else {
return null;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(stylefy.impl.utils.filter_css_props(style)));
var hashable_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,hashable_garden_units], 0));
var hashable_style__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(hashable_style,cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$stylefy$core_SLASH_class_DASH_prefix], 0));
var class_prefix = (cljs.core.truth_(cljs.core.deref(stylefy.impl.styles.use_custom_class_prefix_QMARK_))?stylefy.impl.styles.check_custom_class_prefix(cljs.core.cst$kw$stylefy$core_SLASH_class_DASH_prefix.cljs$core$IFn$_invoke$arity$1(style)):stylefy.impl.styles.default_class_prefix);
return [class_prefix,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(hashable_style__$1))].join('');
} else {
return null;
}
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__33090){
var map__33091 = p__33090;
var map__33091__$1 = (((((!((map__33091 == null))))?(((((map__33091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33091):map__33091);
var style = map__33091__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33091__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33091__$1,cljs.core.cst$kw$hash);
stylefy.impl.dom.save_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$hash,hash], null));

var seq__33093 = cljs.core.seq(cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(props)));
var chunk__33094 = null;
var count__33095 = (0);
var i__33096 = (0);
while(true){
if((i__33096 < count__33095)){
var sub_style = chunk__33094.cljs$core$IIndexed$_nth$arity$2(null,i__33096);
var G__33099_33101 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,sub_style,cljs.core.cst$kw$hash,stylefy.impl.styles.hash_style(sub_style)], null);
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1(G__33099_33101) : stylefy.impl.styles.create_style_BANG_.call(null,G__33099_33101));


var G__33102 = seq__33093;
var G__33103 = chunk__33094;
var G__33104 = count__33095;
var G__33105 = (i__33096 + (1));
seq__33093 = G__33102;
chunk__33094 = G__33103;
count__33095 = G__33104;
i__33096 = G__33105;
continue;
} else {
var temp__5737__auto__ = cljs.core.seq(seq__33093);
if(temp__5737__auto__){
var seq__33093__$1 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33093__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33093__$1);
var G__33106 = cljs.core.chunk_rest(seq__33093__$1);
var G__33107 = c__4550__auto__;
var G__33108 = cljs.core.count(c__4550__auto__);
var G__33109 = (0);
seq__33093 = G__33106;
chunk__33094 = G__33107;
count__33095 = G__33108;
i__33096 = G__33109;
continue;
} else {
var sub_style = cljs.core.first(seq__33093__$1);
var G__33100_33110 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,sub_style,cljs.core.cst$kw$hash,stylefy.impl.styles.hash_style(sub_style)], null);
(stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1 ? stylefy.impl.styles.create_style_BANG_.cljs$core$IFn$_invoke$arity$1(G__33100_33110) : stylefy.impl.styles.create_style_BANG_.call(null,G__33100_33110));


var G__33111 = cljs.core.next(seq__33093__$1);
var G__33112 = null;
var G__33113 = (0);
var G__33114 = (0);
seq__33093 = G__33111;
chunk__33094 = G__33112;
count__33095 = G__33113;
i__33096 = G__33114;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given a style, hash and options, returns HTML attributes for a Hiccup component,
 * or nil if there are not any attributes.
 */
stylefy.impl.styles.prepare_style_return_value = (function stylefy$impl$styles$prepare_style_return_value(style,style_hash,options){
var with_classes = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(style),cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(options));
var html_attributes = stylefy.impl.utils.filter_css_props(options);
var html_attributes_class = cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = cljs.core.cst$kw$style.cljs$core$IFn$_invoke$arity$1(html_attributes);
var final_class = clojure.string.trim((((html_attributes_class == null))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((typeof html_attributes_class === 'string')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_attributes_class], null),with_classes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null)], 0))):((cljs.core.vector_QMARK_(html_attributes_class))?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(html_attributes_class,with_classes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null)], 0))):null))));
var final_html_attributes = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes,(((!(cljs.core.empty_QMARK_(final_class))))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,final_class], null):null)], 0));
if((((html_attributes_class == null)) || (typeof html_attributes_class === 'string') || (cljs.core.vector_QMARK_(html_attributes_class)))){
} else {
throw (new Error(["Assert failed: ",["Unsupported :class type (should be nil, string or vector). Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([html_attributes_class], 0))].join(''),"\n","(or (nil? html-attributes-class) (string? html-attributes-class) (vector? html-attributes-class))"].join('')));
}

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

if((!(cljs.core.empty_QMARK_(final_html_attributes)))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value(style,style_hash,options);
if(((cljs.core.empty_QMARK_(style)) || (stylefy.impl.dom.style_in_dom_QMARK_(style_hash)))){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((cljs.core.cst$kw$stylefy$core_SLASH_media.cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((cljs.core.cst$kw$stylefy$core_SLASH_supports.cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((cljs.core.cst$kw$stylefy$core_SLASH_manual.cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hover,null], null), null);
var contains_modes_not_excluded_QMARK_ = (!(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,excluded_modes),cljs.core.keys(cljs.core.cst$kw$stylefy$core_SLASH_mode.cljs$core$IFn$_invoke$arity$1(style))))));
var inline_style = stylefy.impl.conversion.garden_units__GT_css(stylefy.impl.utils.filter_css_props(style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_manual_mode_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inline_style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$visibility,"hidden"], null)], 0))], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([return_map,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,inline_style], null)], 0));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
var with_classes_options = cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(options);
var with_classes_style = cljs.core.cst$kw$stylefy$core_SLASH_with_DASH_classes.cljs$core$IFn$_invoke$arity$1(style);
if((((with_classes_options == null)) || (((cljs.core.vector_QMARK_(with_classes_options)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,with_classes_options)))))){
} else {
throw (new Error(["Assert failed: ",["with-classes argument inside options map must be a vector of strings, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([with_classes_options], 0))].join(''),"\n","(or (nil? with-classes-options) (and (vector? with-classes-options) (every? string? with-classes-options)))"].join('')));
}

if((((with_classes_style == null)) || (((cljs.core.vector_QMARK_(with_classes_style)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,with_classes_style)))))){
} else {
throw (new Error(["Assert failed: ",["with-classes argument inside style map must be a vector of strings, got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([with_classes_style], 0))].join(''),"\n","(or (nil? with-classes-style) (and (vector? with-classes-style) (every? string? with-classes-style)))"].join('')));
}

stylefy.impl.dom.check_stylefy_initialisation();

var style_with_global_vendors = ((cljs.core.empty_QMARK_(style))?null:stylefy.impl.styles.add_global_vendors(style));
var style_hash = stylefy.impl.styles.hash_style(style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash(style_hash);
if((((!(cljs.core.empty_QMARK_(style_with_global_vendors)))) && ((!((style_hash == null)))) && (cljs.core.not(already_created)))){
stylefy.impl.styles.create_style_BANG_(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,style_with_global_vendors,cljs.core.cst$kw$hash,style_hash], null));
} else {
}

return stylefy.impl.styles.style_return_value(style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_(resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_style], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33119 = arguments.length;
var i__4731__auto___33120 = (0);
while(true){
if((i__4731__auto___33120 < len__4730__auto___33119)){
args__4736__auto__.push((arguments[i__4731__auto___33120]));

var G__33121 = (i__4731__auto___33120 + (1));
i__4731__auto___33120 = G__33121;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__33115_SHARP_,p2__33116_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__33115_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles,p2__33116_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sub_styles], 0))," not found in style: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0))].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq33117){
var G__33118 = cljs.core.first(seq33117);
var seq33117__$1 = cljs.core.next(seq33117);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33118,seq33117__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__33123 = arguments.length;
switch (G__33123) {
case 1:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(styles,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request_DASH_dom_DASH_update_DASH_after_DASH_done_QMARK_,true], null));
});

stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__33124){
var map__33125 = p__33124;
var map__33125__$1 = (((((!((map__33125 == null))))?(((((map__33125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33125):map__33125);
var options = map__33125__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33125__$1,cljs.core.cst$kw$request_DASH_dom_DASH_update_DASH_after_DASH_done_QMARK_);
var styles_33132__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,styles);
var seq__33127_33133 = cljs.core.seq(styles_33132__$1);
var chunk__33128_33134 = null;
var count__33129_33135 = (0);
var i__33130_33136 = (0);
while(true){
if((i__33130_33136 < count__33129_33135)){
var style_33137 = chunk__33128_33134.cljs$core$IIndexed$_nth$arity$2(null,i__33130_33136);
stylefy.impl.styles.use_style_BANG_(style_33137,cljs.core.PersistentArrayMap.EMPTY);

var temp__5737__auto___33138 = cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style_33137));
if(cljs.core.truth_(temp__5737__auto___33138)){
var sub_styles_33139 = temp__5737__auto___33138;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_33139,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request_DASH_dom_DASH_update_DASH_after_DASH_done_QMARK_,false], null));
} else {
}


var G__33140 = seq__33127_33133;
var G__33141 = chunk__33128_33134;
var G__33142 = count__33129_33135;
var G__33143 = (i__33130_33136 + (1));
seq__33127_33133 = G__33140;
chunk__33128_33134 = G__33141;
count__33129_33135 = G__33142;
i__33130_33136 = G__33143;
continue;
} else {
var temp__5737__auto___33144 = cljs.core.seq(seq__33127_33133);
if(temp__5737__auto___33144){
var seq__33127_33145__$1 = temp__5737__auto___33144;
if(cljs.core.chunked_seq_QMARK_(seq__33127_33145__$1)){
var c__4550__auto___33146 = cljs.core.chunk_first(seq__33127_33145__$1);
var G__33147 = cljs.core.chunk_rest(seq__33127_33145__$1);
var G__33148 = c__4550__auto___33146;
var G__33149 = cljs.core.count(c__4550__auto___33146);
var G__33150 = (0);
seq__33127_33133 = G__33147;
chunk__33128_33134 = G__33148;
count__33129_33135 = G__33149;
i__33130_33136 = G__33150;
continue;
} else {
var style_33151 = cljs.core.first(seq__33127_33145__$1);
stylefy.impl.styles.use_style_BANG_(style_33151,cljs.core.PersistentArrayMap.EMPTY);

var temp__5737__auto___33152__$1 = cljs.core.vals(cljs.core.cst$kw$stylefy$core_SLASH_sub_DASH_styles.cljs$core$IFn$_invoke$arity$1(style_33151));
if(cljs.core.truth_(temp__5737__auto___33152__$1)){
var sub_styles_33153 = temp__5737__auto___33152__$1;
stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2(sub_styles_33153,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request_DASH_dom_DASH_update_DASH_after_DASH_done_QMARK_,false], null));
} else {
}


var G__33154 = cljs.core.next(seq__33127_33145__$1);
var G__33155 = null;
var G__33156 = (0);
var G__33157 = (0);
seq__33127_33133 = G__33154;
chunk__33128_33134 = G__33155;
count__33129_33135 = G__33156;
i__33130_33136 = G__33157;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_requested();
} else {
return null;
}
});

stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2;

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = cljs.core.cst$kw$global_DASH_vendor_DASH_prefixes.cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_(stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$core_SLASH_vendors,cljs.core.cst$kw$stylefy$core_SLASH_vendors.cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix,cljs.core.cst$kw$stylefy$core_SLASH_auto_DASH_prefix.cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});
stylefy.impl.styles.init_custom_class_prefix = (function stylefy$impl$styles$init_custom_class_prefix(options){
return cljs.core.reset_BANG_(stylefy.impl.styles.use_custom_class_prefix_QMARK_,cljs.core.boolean$(cljs.core.cst$kw$use_DASH_custom_DASH_class_DASH_prefix_QMARK_.cljs$core$IFn$_invoke$arity$1(options)));
});
