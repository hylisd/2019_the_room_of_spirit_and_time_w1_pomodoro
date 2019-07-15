// Compiled by ClojureScript 1.10.520 {}
goog.provide('stylefy.impl.styles');
goog.require('cljs.core');
goog.require('stylefy.impl.dom');
goog.require('garden.core');
goog.require('clojure.string');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('clojure.set');
goog.require('garden.compiler');
stylefy.impl.styles.global_vendor_prefixes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),cljs.core.PersistentHashSet.EMPTY], null));
stylefy.impl.styles.default_class_prefix = "_stylefy";
stylefy.impl.styles.use_custom_class_prefix_QMARK_ = cljs.core.atom.call(null,false);
stylefy.impl.styles.add_global_vendors = (function stylefy$impl$styles$add_global_vendors(style){
return cljs.core.merge.call(null,style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(style)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),clojure.set.union.call(null,new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,stylefy.impl.styles.global_vendor_prefixes)),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(style))], null));
});
/**
 * Checks that the value is valid and returns as properly formatted prefix.
 */
stylefy.impl.styles.check_custom_class_prefix = (function stylefy$impl$styles$check_custom_class_prefix(custom_class_prefix){
if((((custom_class_prefix == null)) || (typeof custom_class_prefix === 'string') || ((custom_class_prefix instanceof cljs.core.Keyword)))){
} else {
throw (new Error(["Assert failed: ",["Custom class prefix should be either string, keyword or nil, got: ",cljs.core.pr_str.call(null,custom_class_prefix)].join(''),"\n","(or (nil? custom-class-prefix) (string? custom-class-prefix) (keyword? custom-class-prefix))"].join('')));
}

if((custom_class_prefix == null)){
return stylefy.impl.styles.default_class_prefix;
} else {
if(typeof custom_class_prefix === 'string'){
return custom_class_prefix;
} else {
if((custom_class_prefix instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,custom_class_prefix);
} else {
return null;
}
}
}
});
stylefy.impl.styles.hash_style = (function stylefy$impl$styles$hash_style(style){
if((!(cljs.core.empty_QMARK_.call(null,style)))){
var hashable_garden_units = cljs.core.reduce.call(null,(function (result,prop_key){
var prop_value = prop_key.call(null,style);
if(stylefy.impl.utils.is_garden_value_QMARK_.call(null,prop_value)){
return cljs.core.assoc.call(null,result,prop_key,garden.compiler.render_css.call(null,prop_value));
} else {
return null;
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,stylefy.impl.utils.filter_css_props.call(null,style)));
var hashable_style = cljs.core.merge.call(null,style,hashable_garden_units);
var hashable_style__$1 = cljs.core.dissoc.call(null,hashable_style,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),new cljs.core.Keyword("stylefy.core","class-prefix","stylefy.core/class-prefix",1388140586));
var class_prefix = (cljs.core.truth_(cljs.core.deref.call(null,stylefy.impl.styles.use_custom_class_prefix_QMARK_))?stylefy.impl.styles.check_custom_class_prefix.call(null,new cljs.core.Keyword("stylefy.core","class-prefix","stylefy.core/class-prefix",1388140586).cljs$core$IFn$_invoke$arity$1(style)):stylefy.impl.styles.default_class_prefix);
return [class_prefix,"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash.call(null,hashable_style__$1))].join('');
} else {
return null;
}
});
stylefy.impl.styles.create_style_BANG_ = (function stylefy$impl$styles$create_style_BANG_(p__46247){
var map__46248 = p__46247;
var map__46248__$1 = (((((!((map__46248 == null))))?(((((map__46248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46248):map__46248);
var style = map__46248__$1;
var props = cljs.core.get.call(null,map__46248__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__46248__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
stylefy.impl.dom.save_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash], null));

var seq__46250 = cljs.core.seq.call(null,cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(props)));
var chunk__46251 = null;
var count__46252 = (0);
var i__46253 = (0);
while(true){
if((i__46253 < count__46252)){
var sub_style = cljs.core._nth.call(null,chunk__46251,i__46253);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));


var G__46254 = seq__46250;
var G__46255 = chunk__46251;
var G__46256 = count__46252;
var G__46257 = (i__46253 + (1));
seq__46250 = G__46254;
chunk__46251 = G__46255;
count__46252 = G__46256;
i__46253 = G__46257;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46250);
if(temp__5735__auto__){
var seq__46250__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46250__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46250__$1);
var G__46258 = cljs.core.chunk_rest.call(null,seq__46250__$1);
var G__46259 = c__4550__auto__;
var G__46260 = cljs.core.count.call(null,c__4550__auto__);
var G__46261 = (0);
seq__46250 = G__46258;
chunk__46251 = G__46259;
count__46252 = G__46260;
i__46253 = G__46261;
continue;
} else {
var sub_style = cljs.core.first.call(null,seq__46250__$1);
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),sub_style,new cljs.core.Keyword(null,"hash","hash",-13781596),stylefy.impl.styles.hash_style.call(null,sub_style)], null));


var G__46262 = cljs.core.next.call(null,seq__46250__$1);
var G__46263 = null;
var G__46264 = (0);
var G__46265 = (0);
seq__46250 = G__46262;
chunk__46251 = G__46263;
count__46252 = G__46264;
i__46253 = G__46265;
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
var with_classes = cljs.core.concat.call(null,new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options));
var html_attributes = stylefy.impl.utils.filter_css_props.call(null,options);
var html_attributes_class = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(html_attributes);
var html_attributes_inline_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(html_attributes);
var final_class = clojure.string.trim.call(null,(((html_attributes_class == null))?clojure.string.join.call(null," ",cljs.core.concat.call(null,with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((typeof html_attributes_class === 'string')?clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [html_attributes_class], null),with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):((cljs.core.vector_QMARK_.call(null,html_attributes_class))?clojure.string.join.call(null," ",cljs.core.concat.call(null,html_attributes_class,with_classes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [style_hash], null))):null))));
var final_html_attributes = cljs.core.merge.call(null,html_attributes,(((!(cljs.core.empty_QMARK_.call(null,final_class))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),final_class], null):null));
if((((html_attributes_class == null)) || (typeof html_attributes_class === 'string') || (cljs.core.vector_QMARK_.call(null,html_attributes_class)))){
} else {
throw (new Error(["Assert failed: ",["Unsupported :class type (should be nil, string or vector). Got: ",cljs.core.pr_str.call(null,html_attributes_class)].join(''),"\n","(or (nil? html-attributes-class) (string? html-attributes-class) (vector? html-attributes-class))"].join('')));
}

if((html_attributes_inline_style == null)){
} else {
throw (new Error(["Assert failed: ","HTML attribute :style is not supported in options map. Instead, you should provide your style definitions as the first argument when calling use-style.","\n","(nil? html-attributes-inline-style)"].join('')));
}

if((!(cljs.core.empty_QMARK_.call(null,final_html_attributes)))){
return final_html_attributes;
} else {
return null;
}
});
stylefy.impl.styles.style_return_value = (function stylefy$impl$styles$style_return_value(style,style_hash,options){
var return_map = stylefy.impl.styles.prepare_style_return_value.call(null,style,style_hash,options);
if(((cljs.core.empty_QMARK_.call(null,style)) || (stylefy.impl.dom.style_in_dom_QMARK_.call(null,style_hash)))){
return return_map;
} else {
var contains_media_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_feature_queries_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(style) == null)));
var contains_manual_mode_QMARK_ = (!((new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(style) == null)));
var excluded_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),null], null), null);
var contains_modes_not_excluded_QMARK_ = (!(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,excluded_modes),cljs.core.keys.call(null,new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(style))))));
var inline_style = stylefy.impl.conversion.garden_units__GT_css.call(null,stylefy.impl.utils.filter_css_props.call(null,style));
if(((contains_media_queries_QMARK_) || (contains_feature_queries_QMARK_) || (contains_manual_mode_QMARK_) || (contains_modes_not_excluded_QMARK_))){
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,inline_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden"], null))], null));
} else {
return cljs.core.merge.call(null,return_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),inline_style], null));
}
}
});
stylefy.impl.styles.use_style_BANG_ = (function stylefy$impl$styles$use_style_BANG_(style,options){
var with_classes_options = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(options);
var with_classes_style = new cljs.core.Keyword("stylefy.core","with-classes","stylefy.core/with-classes",1994369003).cljs$core$IFn$_invoke$arity$1(style);
if((((with_classes_options == null)) || (((cljs.core.vector_QMARK_.call(null,with_classes_options)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes_options)))))){
} else {
throw (new Error(["Assert failed: ",["with-classes argument inside options map must be a vector of strings, got: ",cljs.core.pr_str.call(null,with_classes_options)].join(''),"\n","(or (nil? with-classes-options) (and (vector? with-classes-options) (every? string? with-classes-options)))"].join('')));
}

if((((with_classes_style == null)) || (((cljs.core.vector_QMARK_.call(null,with_classes_style)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,with_classes_style)))))){
} else {
throw (new Error(["Assert failed: ",["with-classes argument inside style map must be a vector of strings, got: ",cljs.core.pr_str.call(null,with_classes_style)].join(''),"\n","(or (nil? with-classes-style) (and (vector? with-classes-style) (every? string? with-classes-style)))"].join('')));
}

stylefy.impl.dom.check_stylefy_initialisation.call(null);

var style_with_global_vendors = ((cljs.core.empty_QMARK_.call(null,style))?null:stylefy.impl.styles.add_global_vendors.call(null,style));
var style_hash = stylefy.impl.styles.hash_style.call(null,style_with_global_vendors);
var already_created = stylefy.impl.dom.style_by_hash.call(null,style_hash);
if((((!(cljs.core.empty_QMARK_.call(null,style_with_global_vendors)))) && ((!((style_hash == null)))) && (cljs.core.not.call(null,already_created)))){
stylefy.impl.styles.create_style_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),style_with_global_vendors,new cljs.core.Keyword(null,"hash","hash",-13781596),style_hash], null));
} else {
}

return stylefy.impl.styles.style_return_value.call(null,style_with_global_vendors,style_hash,options);
});
stylefy.impl.styles.use_sub_style_BANG_ = (function stylefy$impl$styles$use_sub_style_BANG_(style,sub_style,options){
var resolved_sub_style = cljs.core.get.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style),sub_style);
if(cljs.core.truth_(resolved_sub_style)){
return stylefy.impl.styles.use_style_BANG_.call(null,resolved_sub_style,options);
} else {
return console.warn(["Sub-style ",cljs.core.pr_str.call(null,sub_style)," not found in style: ",cljs.core.pr_str.call(null,style)].join(''));
}
});
stylefy.impl.styles.sub_style = (function stylefy$impl$styles$sub_style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___46270 = arguments.length;
var i__4731__auto___46271 = (0);
while(true){
if((i__4731__auto___46271 < len__4730__auto___46270)){
args__4736__auto__.push((arguments[i__4731__auto___46271]));

var G__46272 = (i__4731__auto___46271 + (1));
i__4731__auto___46271 = G__46272;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

stylefy.impl.styles.sub_style.cljs$core$IFn$_invoke$arity$variadic = (function (style,sub_styles){
var resolved_sub_style = cljs.core.reduce.call(null,(function (p1__46266_SHARP_,p2__46267_SHARP_){
return cljs.core.get_in.call(null,p1__46266_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432),p2__46267_SHARP_], null));
}),style,sub_styles);
if(cljs.core.truth_(resolved_sub_style)){
return resolved_sub_style;
} else {
return console.warn(["Sub-style ",cljs.core.pr_str.call(null,sub_styles)," not found in style: ",cljs.core.pr_str.call(null,style)].join(''));
}
});

stylefy.impl.styles.sub_style.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.styles.sub_style.cljs$lang$applyTo = (function (seq46268){
var G__46269 = cljs.core.first.call(null,seq46268);
var seq46268__$1 = cljs.core.next.call(null,seq46268);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46269,seq46268__$1);
});

stylefy.impl.styles.prepare_styles = (function stylefy$impl$styles$prepare_styles(var_args){
var G__46274 = arguments.length;
switch (G__46274) {
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
return stylefy.impl.styles.prepare_styles.call(null,styles,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),true], null));
});

stylefy.impl.styles.prepare_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,p__46275){
var map__46276 = p__46275;
var map__46276__$1 = (((((!((map__46276 == null))))?(((((map__46276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46276):map__46276);
var options = map__46276__$1;
var request_dom_update_after_done_QMARK_ = cljs.core.get.call(null,map__46276__$1,new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510));
var styles_46283__$1 = cljs.core.remove.call(null,cljs.core.nil_QMARK_,styles);
var seq__46278_46284 = cljs.core.seq.call(null,styles_46283__$1);
var chunk__46279_46285 = null;
var count__46280_46286 = (0);
var i__46281_46287 = (0);
while(true){
if((i__46281_46287 < count__46280_46286)){
var style_46288 = cljs.core._nth.call(null,chunk__46279_46285,i__46281_46287);
stylefy.impl.styles.use_style_BANG_.call(null,style_46288,cljs.core.PersistentArrayMap.EMPTY);

var temp__5735__auto___46289 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_46288));
if(cljs.core.truth_(temp__5735__auto___46289)){
var sub_styles_46290 = temp__5735__auto___46289;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_46290,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__46291 = seq__46278_46284;
var G__46292 = chunk__46279_46285;
var G__46293 = count__46280_46286;
var G__46294 = (i__46281_46287 + (1));
seq__46278_46284 = G__46291;
chunk__46279_46285 = G__46292;
count__46280_46286 = G__46293;
i__46281_46287 = G__46294;
continue;
} else {
var temp__5735__auto___46295 = cljs.core.seq.call(null,seq__46278_46284);
if(temp__5735__auto___46295){
var seq__46278_46296__$1 = temp__5735__auto___46295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46278_46296__$1)){
var c__4550__auto___46297 = cljs.core.chunk_first.call(null,seq__46278_46296__$1);
var G__46298 = cljs.core.chunk_rest.call(null,seq__46278_46296__$1);
var G__46299 = c__4550__auto___46297;
var G__46300 = cljs.core.count.call(null,c__4550__auto___46297);
var G__46301 = (0);
seq__46278_46284 = G__46298;
chunk__46279_46285 = G__46299;
count__46280_46286 = G__46300;
i__46281_46287 = G__46301;
continue;
} else {
var style_46302 = cljs.core.first.call(null,seq__46278_46296__$1);
stylefy.impl.styles.use_style_BANG_.call(null,style_46302,cljs.core.PersistentArrayMap.EMPTY);

var temp__5735__auto___46303__$1 = cljs.core.vals.call(null,new cljs.core.Keyword("stylefy.core","sub-styles","stylefy.core/sub-styles",-1546489432).cljs$core$IFn$_invoke$arity$1(style_46302));
if(cljs.core.truth_(temp__5735__auto___46303__$1)){
var sub_styles_46304 = temp__5735__auto___46303__$1;
stylefy.impl.styles.prepare_styles.call(null,sub_styles_46304,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-dom-update-after-done?","request-dom-update-after-done?",199142510),false], null));
} else {
}


var G__46305 = cljs.core.next.call(null,seq__46278_46296__$1);
var G__46306 = null;
var G__46307 = (0);
var G__46308 = (0);
seq__46278_46284 = G__46305;
chunk__46279_46285 = G__46306;
count__46280_46286 = G__46307;
i__46281_46287 = G__46308;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(request_dom_update_after_done_QMARK_)){
return stylefy.impl.dom.update_dom_if_requested.call(null);
} else {
return null;
}
});

stylefy.impl.styles.prepare_styles.cljs$lang$maxFixedArity = 2;

stylefy.impl.styles.init_global_vendor_prefixes = (function stylefy$impl$styles$init_global_vendor_prefixes(options){
var global_vendor_prefixes_options = new cljs.core.Keyword(null,"global-vendor-prefixes","global-vendor-prefixes",882986417).cljs$core$IFn$_invoke$arity$1(options);
return cljs.core.reset_BANG_.call(null,stylefy.impl.styles.global_vendor_prefixes,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809),new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(global_vendor_prefixes_options)], null));
});
stylefy.impl.styles.init_custom_class_prefix = (function stylefy$impl$styles$init_custom_class_prefix(options){
return cljs.core.reset_BANG_.call(null,stylefy.impl.styles.use_custom_class_prefix_QMARK_,cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"use-custom-class-prefix?","use-custom-class-prefix?",-1156349118).cljs$core$IFn$_invoke$arity$1(options)));
});

//# sourceMappingURL=styles.js.map?rel=1563208754658
