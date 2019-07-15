// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('cljs.core.async');
goog.require('stylefy.impl.cache');
goog.require('stylefy.impl.utils');
goog.require('stylefy.impl.conversion');
goog.require('garden.stylesheet');
goog.require('clojure.set');
stylefy.impl.dom.stylefy_initialised_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.dom.styles_in_dom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.dom_update_requested_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.dom.styles_as_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.keyframes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.impl.dom.font_faces_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_tags_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.custom_classes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.impl.dom.stylefy_node_id = "#_stylefy-styles_";
stylefy.impl.dom.stylefy_constant_node_id = "#_stylefy-constant-styles_";
stylefy.impl.dom.stylefy_base_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
stylefy.impl.dom.stylefy_instance_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_as_css),style_hash);
} else {
return null;
}
});
stylefy.impl.dom.update_style_tags_BANG_ = (function stylefy$impl$dom$update_style_tags_BANG_(node_stylefy,node_stylefy_constant){
var styles_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,stylefy.impl.dom.style_by_hash),cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_as_css)));
var keyframes_in_css = cljs.core.vals(cljs.core.deref(stylefy.impl.dom.keyframes_in_use));
var font_faces_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,cljs.core.deref(stylefy.impl.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,cljs.core.deref(stylefy.impl.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,cljs.core.deref(stylefy.impl.dom.custom_classes_in_use));
var new_style_constant_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(font_faces_in_use,keyframes_in_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_tags_in_use,custom_classes_in_use], 0)));
var new_style_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,styles_in_css);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dommy.core.text(node_stylefy_constant),new_style_constant_css)){
} else {
dommy.core.set_text_BANG_(node_stylefy_constant,new_style_constant_css);
}

return dommy.core.set_text_BANG_(node_stylefy,new_style_css);
});
stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$impl$dom$mark_all_styles_added_in_dom_BANG_(){
var seq__33048 = cljs.core.seq(cljs.core.keys(cljs.core.deref(stylefy.impl.dom.styles_in_dom)));
var chunk__33049 = null;
var count__33050 = (0);
var i__33051 = (0);
while(true){
if((i__33051 < count__33050)){
var style_hash = chunk__33049.cljs$core$IIndexed$_nth$arity$2(null,i__33051);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_dom),style_hash),true);


var G__33052 = seq__33048;
var G__33053 = chunk__33049;
var G__33054 = count__33050;
var G__33055 = (i__33051 + (1));
seq__33048 = G__33052;
chunk__33049 = G__33053;
count__33050 = G__33054;
i__33051 = G__33055;
continue;
} else {
var temp__5737__auto__ = cljs.core.seq(seq__33048);
if(temp__5737__auto__){
var seq__33048__$1 = temp__5737__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33048__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__33048__$1);
var G__33056 = cljs.core.chunk_rest(seq__33048__$1);
var G__33057 = c__4550__auto__;
var G__33058 = cljs.core.count(c__4550__auto__);
var G__33059 = (0);
seq__33048 = G__33056;
chunk__33049 = G__33057;
count__33050 = G__33058;
i__33051 = G__33059;
continue;
} else {
var style_hash = cljs.core.first(seq__33048__$1);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_dom),style_hash),true);


var G__33060 = cljs.core.next(seq__33048__$1);
var G__33061 = null;
var G__33062 = (0);
var G__33063 = (0);
seq__33048 = G__33060;
chunk__33049 = G__33061;
count__33050 = G__33062;
i__33051 = G__33063;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.impl.dom.get_stylefy_node = (function stylefy$impl$dom$get_stylefy_node(id,base_node,instance_id){
var final_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),(cljs.core.truth_(instance_id)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id):null)].join('');
if((base_node == null)){
return document.querySelector(dommy.core.selector(final_id));
} else {
return base_node.querySelector(dommy.core.selector(final_id));
}
});
stylefy.impl.dom.update_dom = (function stylefy$impl$dom$update_dom(){
var node_stylefy = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
var node_stylefy_constant = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
if(cljs.core.truth_((function (){var and__4120__auto__ = node_stylefy;
if(cljs.core.truth_(and__4120__auto__)){
return node_stylefy_constant;
} else {
return and__4120__auto__;
}
})())){
stylefy.impl.dom.update_style_tags_BANG_(node_stylefy,node_stylefy_constant);

cljs.core.reset_BANG_(stylefy.impl.dom.dom_update_requested_QMARK_,false);

try{stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_as_css),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
}catch (e33064){var e_33065 = e33064;
console.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_33065)].join(''));

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.impl.dom.mark_all_styles_added_in_dom_BANG_();
} else {
return console.error("stylefy is unable to find the required <style> tags!");
}
});
stylefy.impl.dom.update_dom_if_requested = (function stylefy$impl$dom$update_dom_if_requested(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.dom_update_requested_QMARK_))){
return stylefy.impl.dom.update_dom();
} else {
return null;
}
});
stylefy.impl.dom.request_asynchronous_dom_update = (function stylefy$impl$dom$request_asynchronous_dom_update(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.stylefy_initialised_QMARK_))){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(stylefy.impl.dom.dom_update_requested_QMARK_,true);

var c__31100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto__){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto__){
return (function (state_33068){
var state_val_33069 = (state_33068[(1)]);
if((state_val_33069 === (1))){
var inst_33066 = stylefy.impl.dom.update_dom();
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33068__$1,inst_33066);
} else {
return null;
}
});})(c__31100__auto__))
;
return ((function (switch__30993__auto__,c__31100__auto__){
return (function() {
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto__ = null;
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto____0 = (function (){
var statearr_33070 = [null,null,null,null,null,null,null];
(statearr_33070[(0)] = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto__);

(statearr_33070[(1)] = (1));

return statearr_33070;
});
var stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto____1 = (function (state_33068){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_33068);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e33071){if((e33071 instanceof Object)){
var ex__30997__auto__ = e33071;
var statearr_33072_33074 = state_33068;
(statearr_33072_33074[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33068);

return cljs.core.cst$kw$recur;
} else {
throw e33071;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__33075 = state_33068;
state_33068 = G__33075;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto__ = function(state_33068){
switch(arguments.length){
case 0:
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto____0.call(this);
case 1:
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto____1.call(this,state_33068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto____0;
stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto____1;
return stylefy$impl$dom$request_asynchronous_dom_update_$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto__))
})();
var state__31102__auto__ = (function (){var statearr_33073 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_33073[(6)] = c__31100__auto__);

return statearr_33073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto__))
);

return c__31100__auto__;
}
} else {
return null;
}
});
stylefy.impl.dom.check_stylefy_initialisation = (function stylefy$impl$dom$check_stylefy_initialisation(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.dom.stylefy_initialised_QMARK_))){
return null;
} else {
return console.warn("use-style called before stylefy was initialised!");
}
});
stylefy.impl.dom.init_multi_instance = (function stylefy$impl$dom$init_multi_instance(p__33076){
var map__33077 = p__33076;
var map__33077__$1 = (((((!((map__33077 == null))))?(((((map__33077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33077):map__33077);
var options = map__33077__$1;
var multi_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33077__$1,cljs.core.cst$kw$multi_DASH_instance);
var base_node = cljs.core.cst$kw$base_DASH_node.cljs$core$IFn$_invoke$arity$1(multi_instance);
var instance_id = cljs.core.cst$kw$instance_DASH_id.cljs$core$IFn$_invoke$arity$1(multi_instance);
if((((instance_id == null)) || (typeof instance_id === 'string'))){
} else {
throw (new Error(["Assert failed: ",["instance-id must be string. Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_node,instance_id], 0))].join(''),"\n","(or (nil? instance-id) (string? instance-id))"].join('')));
}

cljs.core.reset_BANG_(stylefy.impl.dom.stylefy_base_node,base_node);

return cljs.core.reset_BANG_(stylefy.impl.dom.stylefy_instance_id,instance_id);
});
stylefy.impl.dom.init_cache = (function stylefy$impl$dom$init_cache(options){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$use_DASH_caching_QMARK_.cljs$core$IFn$_invoke$arity$1(options),false)){
stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cache_DASH_options.cljs$core$IFn$_invoke$arity$1(options),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

var temp__5737__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5737__auto__)){
var cached_styles = temp__5737__auto__;
cljs.core.reset_BANG_(stylefy.impl.dom.styles_as_css,(function (){var or__4131__auto__ = cached_styles;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return cljs.core.reset_BANG_(stylefy.impl.dom.styles_in_dom,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cached_styles,temp__5737__auto__){
return (function (p1__33079_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__33079_SHARP_,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)]);
});})(cached_styles,temp__5737__auto__))
,cljs.core.keys(cached_styles))));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.impl.dom.save_style_BANG_ = (function stylefy$impl$dom$save_style_BANG_(p__33080){
var map__33081 = p__33080;
var map__33081__$1 = (((((!((map__33081 == null))))?(((((map__33081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33081):map__33081);
var style = map__33081__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33081__$1,cljs.core.cst$kw$props);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33081__$1,cljs.core.cst$kw$hash);
if(cljs.core.truth_(props)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","props"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_css = stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(style);
var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,style_css], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.impl.dom.styles_as_css,cljs.core.assoc,hash,style_to_be_saved);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.impl.dom.styles_in_dom,cljs.core.assoc,hash,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false));

return stylefy.impl.dom.request_asynchronous_dom_update();
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$(cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.impl.dom.styles_in_dom),style_hash)));
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33085 = arguments.length;
var i__4731__auto___33086 = (0);
while(true){
if((i__4731__auto___33086 < len__4730__auto___33085)){
args__4736__auto__.push((arguments[i__4731__auto___33086]));

var G__33087 = (i__4731__auto___33086 + (1));
i__4731__auto___33086 = G__33087;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

stylefy.impl.dom.add_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
var garden_definition = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(garden.stylesheet.at_keyframes,identifier,frames);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.impl.dom.keyframes_in_use,cljs.core.assoc,identifier,garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_definition], 0)));

stylefy.impl.dom.request_asynchronous_dom_update();

return garden_definition;
});

stylefy.impl.dom.add_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
stylefy.impl.dom.add_keyframes.cljs$lang$applyTo = (function (seq33083){
var G__33084 = cljs.core.first(seq33083);
var seq33083__$1 = cljs.core.next(seq33083);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33084,seq33083__$1);
});

stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(properties){
var garden_definition = garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([properties], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([garden_definition], 0))], null));

stylefy.impl.dom.request_asynchronous_dom_update();

return garden_definition;
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(name,properties){
var custom_tag_definition = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_name,name,cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_properties,properties], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_properties.cljs$core$IFn$_invoke$arity$1(custom_tag_definition),cljs.core.cst$kw$custom_DASH_selector,cljs.core.cst$kw$stylefy$impl$dom_SLASH_tag_DASH_name.cljs$core$IFn$_invoke$arity$1(custom_tag_definition)], null))], null));

stylefy.impl.dom.request_asynchronous_dom_update();

return custom_tag_definition;
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(name,properties){
var custom_class_definition = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_name,name,cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_properties,properties], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.impl.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stylefy$impl$dom_SLASH_css,stylefy.impl.conversion.style__GT_css.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$props,cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_properties.cljs$core$IFn$_invoke$arity$1(custom_class_definition),cljs.core.cst$kw$custom_DASH_selector,stylefy.impl.conversion.class_selector(cljs.core.cst$kw$stylefy$impl$dom_SLASH_class_DASH_name.cljs$core$IFn$_invoke$arity$1(custom_class_definition))], null))], null));

stylefy.impl.dom.request_asynchronous_dom_update();

return custom_class_definition;
});
