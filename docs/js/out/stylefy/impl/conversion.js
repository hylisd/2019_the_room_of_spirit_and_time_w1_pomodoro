// Compiled by ClojureScript 1.10.520 {}
goog.provide('stylefy.impl.conversion');
goog.require('cljs.core');
goog.require('garden.core');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
goog.require('clojure.string');
goog.require('garden.compiler');
/**
 * Checks all values in the map and converts all Garden units to CSS.
 */
stylefy.impl.conversion.garden_units__GT_css = (function stylefy$impl$conversion$garden_units__GT_css(props){
return cljs.core.reduce.call(null,(function (result,next_key){
var value = next_key.call(null,props);
if(stylefy.impl.utils.is_garden_value_QMARK_.call(null,value)){
return cljs.core.assoc.call(null,result,next_key,garden.compiler.render_css.call(null,value));
} else {
return result;
}
}),props,cljs.core.keys.call(null,props));
});
stylefy.impl.conversion.convert_stylefy_vendors_to_garden = (function stylefy$impl$conversion$convert_stylefy_vendors_to_garden(props){
var temp__5735__auto__ = new cljs.core.Keyword("stylefy.core","vendors","stylefy.core/vendors",362354809).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var vendors = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vendors","vendors",-153040496),vendors,new cljs.core.Keyword(null,"auto-prefix","auto-prefix",1484803466),new cljs.core.Keyword("stylefy.core","auto-prefix","stylefy.core/auto-prefix",1734900883).cljs$core$IFn$_invoke$arity$1(props)], null);
} else {
return null;
}
});
stylefy.impl.conversion.convert_stylefy_modes_garden = (function stylefy$impl$conversion$convert_stylefy_modes_garden(props){
var modes = new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234).cljs$core$IFn$_invoke$arity$1(props);
return cljs.core.mapv.call(null,((function (modes){
return (function (mode_name){
if((((mode_name instanceof cljs.core.Keyword)) || (((typeof mode_name === 'string') && (clojure.string.starts_with_QMARK_.call(null,mode_name,":")))))){
} else {
throw (new Error(["Assert failed: ",["Mode must be specified as a keyword or string beginning with colon, got: ",cljs.core.pr_str.call(null,mode_name)].join(''),"\n","(or (keyword? mode-name) (and (string? mode-name) (str/starts-with? mode-name \":\")))"].join('')));
}

if(((typeof mode_name === 'string') && ((cljs.core.count.call(null,clojure.string.split.call(null,mode_name," ")) > (1))))){
console.warn(["Incorrect mode detected, should not contain spaces. Mode was: ",cljs.core.pr_str.call(null,mode_name)].join(''));
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,["&",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mode_name)].join('')),cljs.core.get.call(null,modes,mode_name)], null);
});})(modes))
,cljs.core.keys.call(null,modes));
});
stylefy.impl.conversion.class_selector = (function stylefy$impl$conversion$class_selector(hash){
return cljs.core.keyword.call(null,[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''));
});
/**
 * Converts Clojure style map into CSS class.
 */
stylefy.impl.conversion.convert_base_style_into_class = (function stylefy$impl$conversion$convert_base_style_into_class(p__47477,options){
var map__47478 = p__47477;
var map__47478__$1 = (((((!((map__47478 == null))))?(((((map__47478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47478):map__47478);
var style = map__47478__$1;
var props = cljs.core.get.call(null,map__47478__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__47478__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__47478__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var css_props = stylefy.impl.utils.filter_css_props.call(null,props);
var css_selector = (function (){var or__4131__auto__ = custom_selector;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return stylefy.impl.conversion.class_selector.call(null,hash);
}
})();
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,css_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden.call(null,props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden.call(null,props);
var garden_options = (function (){var or__4131__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_class = garden.core.css.call(null,garden_options,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes));
return css_class;
});
/**
 * Converts stylefy/media definition into CSS media query.
 */
stylefy.impl.conversion.convert_media_queries = (function stylefy$impl$conversion$convert_media_queries(p__47480,options){
var map__47481 = p__47480;
var map__47481__$1 = (((((!((map__47481 == null))))?(((((map__47481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47481):map__47481);
var style = map__47481__$1;
var props = cljs.core.get.call(null,map__47481__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__47481__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__47481__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5735__auto__ = new cljs.core.Keyword("stylefy.core","media","stylefy.core/media",-1323617834).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var stylefy_media_queries = temp__5735__auto__;
var css_selector = (function (){var or__4131__auto__ = custom_selector;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return stylefy.impl.conversion.class_selector.call(null,hash);
}
})();
var css_media_queries = cljs.core.map.call(null,((function (css_selector,stylefy_media_queries,temp__5735__auto__,map__47481,map__47481__$1,style,props,hash,custom_selector){
return (function (media_query){
var media_query_props = cljs.core.get.call(null,stylefy_media_queries,media_query);
var media_query_css_props = stylefy.impl.utils.filter_css_props.call(null,media_query_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,media_query_css_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden.call(null,media_query_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden.call(null,media_query_props);
var garden_options = (function (){var or__4131__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return garden.core.css.call(null,garden_options,garden.stylesheet.at_media.call(null,media_query,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes)));
});})(css_selector,stylefy_media_queries,temp__5735__auto__,map__47481,map__47481__$1,style,props,hash,custom_selector))
,cljs.core.keys.call(null,stylefy_media_queries));
return cljs.core.apply.call(null,cljs.core.str,css_media_queries);
} else {
return null;
}
});
/**
 * Converts stylefy/supports definition into CSS feature query.
 */
stylefy.impl.conversion.convert_supports_rules = (function stylefy$impl$conversion$convert_supports_rules(p__47483,options){
var map__47484 = p__47483;
var map__47484__$1 = (((((!((map__47484 == null))))?(((((map__47484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47484):map__47484);
var style = map__47484__$1;
var props = cljs.core.get.call(null,map__47484__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__47484__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__47484__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5735__auto__ = new cljs.core.Keyword("stylefy.core","supports","stylefy.core/supports",105019324).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var stylefy_supports = temp__5735__auto__;
var css_selector = (function (){var or__4131__auto__ = custom_selector;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return stylefy.impl.conversion.class_selector.call(null,hash);
}
})();
var css_supports = cljs.core.map.call(null,((function (css_selector,stylefy_supports,temp__5735__auto__,map__47484,map__47484__$1,style,props,hash,custom_selector){
return (function (supports_selector){
var supports_props = cljs.core.get.call(null,stylefy_supports,supports_selector);
var supports_css_props = stylefy.impl.utils.filter_css_props.call(null,supports_props);
var garden_class_definition = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_selector,supports_css_props], null);
var garden_pseudo_classes = stylefy.impl.conversion.convert_stylefy_modes_garden.call(null,supports_props);
var garden_vendors = stylefy.impl.conversion.convert_stylefy_vendors_to_garden.call(null,supports_props);
var garden_options = (function (){var or__4131__auto__ = cljs.core.merge.call(null,options,garden_vendors);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var css_media_queries_inside_supports = stylefy.impl.conversion.convert_media_queries.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),supports_props,new cljs.core.Keyword(null,"hash","hash",-13781596),hash,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277),custom_selector], null),options);
return ["@supports (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(supports_selector),") {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(garden.core.css.call(null,garden_options,cljs.core.into.call(null,garden_class_definition,garden_pseudo_classes))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries_inside_supports),"}"].join('');
});})(css_selector,stylefy_supports,temp__5735__auto__,map__47484,map__47484__$1,style,props,hash,custom_selector))
,cljs.core.keys.call(null,stylefy_supports));
return cljs.core.apply.call(null,cljs.core.str,css_supports);
} else {
return null;
}
});
/**
 * Converts stylefy/manual definition into CSS.
 */
stylefy.impl.conversion.convert_manual_styles = (function stylefy$impl$conversion$convert_manual_styles(p__47487,options){
var map__47488 = p__47487;
var map__47488__$1 = (((((!((map__47488 == null))))?(((((map__47488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47488):map__47488);
var style = map__47488__$1;
var props = cljs.core.get.call(null,map__47488__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__47488__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var custom_selector = cljs.core.get.call(null,map__47488__$1,new cljs.core.Keyword(null,"custom-selector","custom-selector",-474556277));
var temp__5735__auto__ = new cljs.core.Keyword("stylefy.core","manual","stylefy.core/manual",-1053755369).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__5735__auto__)){
var stylefy_manual_styles = temp__5735__auto__;
var css_parent_selector = (function (){var or__4131__auto__ = custom_selector;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return stylefy.impl.conversion.class_selector.call(null,hash);
}
})();
var css_manual_styles = cljs.core.map.call(null,((function (css_parent_selector,stylefy_manual_styles,temp__5735__auto__,map__47488,map__47488__$1,style,props,hash,custom_selector){
return (function (manual_style){
var manual_selector_and_css_props = clojure.walk.walk.call(null,((function (css_parent_selector,stylefy_manual_styles,temp__5735__auto__,map__47488,map__47488__$1,style,props,hash,custom_selector){
return (function (p1__47486_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__47486_SHARP_)){
return stylefy.impl.utils.filter_css_props.call(null,p1__47486_SHARP_);
} else {
return p1__47486_SHARP_;
}
});})(css_parent_selector,stylefy_manual_styles,temp__5735__auto__,map__47488,map__47488__$1,style,props,hash,custom_selector))
,cljs.core.identity,manual_style);
var garden_style_definition = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [css_parent_selector], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [manual_selector_and_css_props], null));
var css_class = garden.core.css.call(null,options,garden_style_definition);
return css_class;
});})(css_parent_selector,stylefy_manual_styles,temp__5735__auto__,map__47488,map__47488__$1,style,props,hash,custom_selector))
,stylefy_manual_styles);
return cljs.core.apply.call(null,cljs.core.str,css_manual_styles);
} else {
return null;
}
});
/**
 * Converts the given style to CSS. Options are sent directly to Garden
 */
stylefy.impl.conversion.style__GT_css = (function stylefy$impl$conversion$style__GT_css(var_args){
var G__47491 = arguments.length;
switch (G__47491) {
case 1:
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1 = (function (style){
return stylefy.impl.conversion.style__GT_css.call(null,style,cljs.core.PersistentArrayMap.EMPTY);
});

stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$2 = (function (p__47492,options){
var map__47493 = p__47492;
var map__47493__$1 = (((((!((map__47493 == null))))?(((((map__47493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47493):map__47493);
var style = map__47493__$1;
var props = cljs.core.get.call(null,map__47493__$1,new cljs.core.Keyword(null,"props","props",453281727));
var hash = cljs.core.get.call(null,map__47493__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var css_class = stylefy.impl.conversion.convert_base_style_into_class.call(null,style,options);
var css_media_queries = stylefy.impl.conversion.convert_media_queries.call(null,style,options);
var css_supports = stylefy.impl.conversion.convert_supports_rules.call(null,style,options);
var css_manual_styles = stylefy.impl.conversion.convert_manual_styles.call(null,style,options);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_class),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_media_queries),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_supports),cljs.core.str.cljs$core$IFn$_invoke$arity$1(css_manual_styles)].join('');
});

stylefy.impl.conversion.style__GT_css.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=conversion.js.map?rel=1562998564633
