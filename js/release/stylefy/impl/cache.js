// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('stylefy.impl.cache');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('dommy.core');
goog.require('reagent.core');
goog.require('garden.core');
goog.require('stylefy.impl.utils');
goog.require('garden.stylesheet');
stylefy.impl.cache.cache_prefix = "stylefy_cache_";
stylefy.impl.cache.cache_styles_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.cache.default_cache_expiration_time_s = (((((((1) * (60)) * (60)) * cljs.core._STAR_) * (24)) * cljs.core._STAR_) * (7));
stylefy.impl.cache.cache_key_styles = (function stylefy$impl$cache$cache_key_styles(instance_id){
return [stylefy.impl.cache.cache_prefix,"styles",(cljs.core.truth_(instance_id)?["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id)].join(''):null)].join('');
});
stylefy.impl.cache.cache_key_created = (function stylefy$impl$cache$cache_key_created(instance_id){
return [stylefy.impl.cache.cache_prefix,"created",(cljs.core.truth_(instance_id)?["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id)].join(''):null)].join('');
});
stylefy.impl.cache.now_in_seconds = (function stylefy$impl$cache$now_in_seconds(){
return Math.floor((Date.now() / (1000)));
});
stylefy.impl.cache.cache_expired_QMARK_ = (function stylefy$impl$cache$cache_expired_QMARK_(cache_created,expiration_age,now){
if(cljs.core.truth_((function (){var and__4120__auto__ = cache_created;
if(cljs.core.truth_(and__4120__auto__)){
return expiration_age;
} else {
return and__4120__auto__;
}
})())){
return ((cache_created + expiration_age) < now);
} else {
return false;
}
});
/**
 * Reads the cache if caching is used.
 */
stylefy.impl.cache.read_cache_value = (function stylefy$impl$cache$read_cache_value(key){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.cache.cache_styles_QMARK_))){
var temp__5737__auto__ = window.localStorage.getItem(key);
if(cljs.core.truth_(temp__5737__auto__)){
var cache_contents = temp__5737__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cache_contents);
} else {
return null;
}
} else {
return null;
}
});
stylefy.impl.cache.set_cache_created_time = (function stylefy$impl$cache$set_cache_created_time(var_args){
var G__29738 = arguments.length;
switch (G__29738) {
case 1:
return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$1 = (function (time_created){
return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2(time_created,null);
});

stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2 = (function (time_created,instance_id){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_created(instance_id),time_created);
});

stylefy.impl.cache.set_cache_created_time.cljs$lang$maxFixedArity = 2;

stylefy.impl.cache.clear_styles = (function stylefy$impl$cache$clear_styles(var_args){
var G__29741 = arguments.length;
switch (G__29741) {
case 0:
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(null);
});

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1 = (function (instance_id){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_styles(instance_id),"");
});

stylefy.impl.cache.clear_styles.cljs$lang$maxFixedArity = 1;

stylefy.impl.cache.use_caching_BANG_ = (function stylefy$impl$cache$use_caching_BANG_(var_args){
var G__29744 = arguments.length;
switch (G__29744) {
case 1:
return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (cache_options){
return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2(cache_options,null);
});

stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cache_options,instance_id){
cljs.core.reset_BANG_(stylefy.impl.cache.cache_styles_QMARK_,true);

if(cljs.core.truth_(stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_created(instance_id)))){
} else {
stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2(stylefy.impl.cache.now_in_seconds(),instance_id);
}

if(stylefy.impl.cache.cache_expired_QMARK_(stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_created(instance_id)),(function (){var or__4131__auto__ = cljs.core.cst$kw$expires.cljs$core$IFn$_invoke$arity$1(cache_options);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return stylefy.impl.cache.default_cache_expiration_time_s;
}
})(),stylefy.impl.cache.now_in_seconds())){
stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(instance_id);

return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2(stylefy.impl.cache.now_in_seconds(),instance_id);
} else {
return null;
}
});

stylefy.impl.cache.use_caching_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * Caches the given style if caching is used.
 *   Throws QUOTA_EXCEEDED_ERR if the storage is full.
 */
stylefy.impl.cache.cache_styles = (function stylefy$impl$cache$cache_styles(var_args){
var G__29747 = arguments.length;
switch (G__29747) {
case 1:
return stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2(styles,null);
});

stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,instance_id){
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.deref(stylefy.impl.cache.cache_styles_QMARK_);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.map_QMARK_(styles);
} else {
return and__4120__auto__;
}
})())){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_styles(instance_id),styles);
} else {
return null;
}
});

stylefy.impl.cache.cache_styles.cljs$lang$maxFixedArity = 2;

