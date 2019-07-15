// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46178_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46178_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__46179 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46180 = null;
var count__46181 = (0);
var i__46182 = (0);
while(true){
if((i__46182 < count__46181)){
var n = cljs.core._nth.call(null,chunk__46180,i__46182);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__46183 = seq__46179;
var G__46184 = chunk__46180;
var G__46185 = count__46181;
var G__46186 = (i__46182 + (1));
seq__46179 = G__46183;
chunk__46180 = G__46184;
count__46181 = G__46185;
i__46182 = G__46186;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46179);
if(temp__5735__auto__){
var seq__46179__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46179__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46179__$1);
var G__46187 = cljs.core.chunk_rest.call(null,seq__46179__$1);
var G__46188 = c__4550__auto__;
var G__46189 = cljs.core.count.call(null,c__4550__auto__);
var G__46190 = (0);
seq__46179 = G__46187;
chunk__46180 = G__46188;
count__46181 = G__46189;
i__46182 = G__46190;
continue;
} else {
var n = cljs.core.first.call(null,seq__46179__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__46191 = cljs.core.next.call(null,seq__46179__$1);
var G__46192 = null;
var G__46193 = (0);
var G__46194 = (0);
seq__46179 = G__46191;
chunk__46180 = G__46192;
count__46181 = G__46193;
i__46182 = G__46194;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__46195){
var vec__46196 = p__46195;
var _ = cljs.core.nth.call(null,vec__46196,(0),null);
var v = cljs.core.nth.call(null,vec__46196,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__46199){
var vec__46200 = p__46199;
var k = cljs.core.nth.call(null,vec__46200,(0),null);
var v = cljs.core.nth.call(null,vec__46200,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__46212_46220 = cljs.core.seq.call(null,deps);
var chunk__46213_46221 = null;
var count__46214_46222 = (0);
var i__46215_46223 = (0);
while(true){
if((i__46215_46223 < count__46214_46222)){
var dep_46224 = cljs.core._nth.call(null,chunk__46213_46221,i__46215_46223);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_46224;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_46224));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_46224,(depth + (1)),state);
} else {
}


var G__46225 = seq__46212_46220;
var G__46226 = chunk__46213_46221;
var G__46227 = count__46214_46222;
var G__46228 = (i__46215_46223 + (1));
seq__46212_46220 = G__46225;
chunk__46213_46221 = G__46226;
count__46214_46222 = G__46227;
i__46215_46223 = G__46228;
continue;
} else {
var temp__5735__auto___46229 = cljs.core.seq.call(null,seq__46212_46220);
if(temp__5735__auto___46229){
var seq__46212_46230__$1 = temp__5735__auto___46229;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46212_46230__$1)){
var c__4550__auto___46231 = cljs.core.chunk_first.call(null,seq__46212_46230__$1);
var G__46232 = cljs.core.chunk_rest.call(null,seq__46212_46230__$1);
var G__46233 = c__4550__auto___46231;
var G__46234 = cljs.core.count.call(null,c__4550__auto___46231);
var G__46235 = (0);
seq__46212_46220 = G__46232;
chunk__46213_46221 = G__46233;
count__46214_46222 = G__46234;
i__46215_46223 = G__46235;
continue;
} else {
var dep_46236 = cljs.core.first.call(null,seq__46212_46230__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_46236;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_46236));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_46236,(depth + (1)),state);
} else {
}


var G__46237 = cljs.core.next.call(null,seq__46212_46230__$1);
var G__46238 = null;
var G__46239 = (0);
var G__46240 = (0);
seq__46212_46220 = G__46237;
chunk__46213_46221 = G__46238;
count__46214_46222 = G__46239;
i__46215_46223 = G__46240;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46216){
var vec__46217 = p__46216;
var seq__46218 = cljs.core.seq.call(null,vec__46217);
var first__46219 = cljs.core.first.call(null,seq__46218);
var seq__46218__$1 = cljs.core.next.call(null,seq__46218);
var x = first__46219;
var xs = seq__46218__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46217,seq__46218,first__46219,seq__46218__$1,x,xs,get_deps__$1){
return (function (p1__46203_SHARP_){
return clojure.set.difference.call(null,p1__46203_SHARP_,x);
});})(vec__46217,seq__46218,first__46219,seq__46218__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__46241 = cljs.core.seq.call(null,provides);
var chunk__46242 = null;
var count__46243 = (0);
var i__46244 = (0);
while(true){
if((i__46244 < count__46243)){
var prov = cljs.core._nth.call(null,chunk__46242,i__46244);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46253_46261 = cljs.core.seq.call(null,requires);
var chunk__46254_46262 = null;
var count__46255_46263 = (0);
var i__46256_46264 = (0);
while(true){
if((i__46256_46264 < count__46255_46263)){
var req_46265 = cljs.core._nth.call(null,chunk__46254_46262,i__46256_46264);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46265,prov);


var G__46266 = seq__46253_46261;
var G__46267 = chunk__46254_46262;
var G__46268 = count__46255_46263;
var G__46269 = (i__46256_46264 + (1));
seq__46253_46261 = G__46266;
chunk__46254_46262 = G__46267;
count__46255_46263 = G__46268;
i__46256_46264 = G__46269;
continue;
} else {
var temp__5735__auto___46270 = cljs.core.seq.call(null,seq__46253_46261);
if(temp__5735__auto___46270){
var seq__46253_46271__$1 = temp__5735__auto___46270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46253_46271__$1)){
var c__4550__auto___46272 = cljs.core.chunk_first.call(null,seq__46253_46271__$1);
var G__46273 = cljs.core.chunk_rest.call(null,seq__46253_46271__$1);
var G__46274 = c__4550__auto___46272;
var G__46275 = cljs.core.count.call(null,c__4550__auto___46272);
var G__46276 = (0);
seq__46253_46261 = G__46273;
chunk__46254_46262 = G__46274;
count__46255_46263 = G__46275;
i__46256_46264 = G__46276;
continue;
} else {
var req_46277 = cljs.core.first.call(null,seq__46253_46271__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46277,prov);


var G__46278 = cljs.core.next.call(null,seq__46253_46271__$1);
var G__46279 = null;
var G__46280 = (0);
var G__46281 = (0);
seq__46253_46261 = G__46278;
chunk__46254_46262 = G__46279;
count__46255_46263 = G__46280;
i__46256_46264 = G__46281;
continue;
}
} else {
}
}
break;
}


var G__46282 = seq__46241;
var G__46283 = chunk__46242;
var G__46284 = count__46243;
var G__46285 = (i__46244 + (1));
seq__46241 = G__46282;
chunk__46242 = G__46283;
count__46243 = G__46284;
i__46244 = G__46285;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46241);
if(temp__5735__auto__){
var seq__46241__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46241__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46241__$1);
var G__46286 = cljs.core.chunk_rest.call(null,seq__46241__$1);
var G__46287 = c__4550__auto__;
var G__46288 = cljs.core.count.call(null,c__4550__auto__);
var G__46289 = (0);
seq__46241 = G__46286;
chunk__46242 = G__46287;
count__46243 = G__46288;
i__46244 = G__46289;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46241__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46257_46290 = cljs.core.seq.call(null,requires);
var chunk__46258_46291 = null;
var count__46259_46292 = (0);
var i__46260_46293 = (0);
while(true){
if((i__46260_46293 < count__46259_46292)){
var req_46294 = cljs.core._nth.call(null,chunk__46258_46291,i__46260_46293);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46294,prov);


var G__46295 = seq__46257_46290;
var G__46296 = chunk__46258_46291;
var G__46297 = count__46259_46292;
var G__46298 = (i__46260_46293 + (1));
seq__46257_46290 = G__46295;
chunk__46258_46291 = G__46296;
count__46259_46292 = G__46297;
i__46260_46293 = G__46298;
continue;
} else {
var temp__5735__auto___46299__$1 = cljs.core.seq.call(null,seq__46257_46290);
if(temp__5735__auto___46299__$1){
var seq__46257_46300__$1 = temp__5735__auto___46299__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46257_46300__$1)){
var c__4550__auto___46301 = cljs.core.chunk_first.call(null,seq__46257_46300__$1);
var G__46302 = cljs.core.chunk_rest.call(null,seq__46257_46300__$1);
var G__46303 = c__4550__auto___46301;
var G__46304 = cljs.core.count.call(null,c__4550__auto___46301);
var G__46305 = (0);
seq__46257_46290 = G__46302;
chunk__46258_46291 = G__46303;
count__46259_46292 = G__46304;
i__46260_46293 = G__46305;
continue;
} else {
var req_46306 = cljs.core.first.call(null,seq__46257_46300__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46306,prov);


var G__46307 = cljs.core.next.call(null,seq__46257_46300__$1);
var G__46308 = null;
var G__46309 = (0);
var G__46310 = (0);
seq__46257_46290 = G__46307;
chunk__46258_46291 = G__46308;
count__46259_46292 = G__46309;
i__46260_46293 = G__46310;
continue;
}
} else {
}
}
break;
}


var G__46311 = cljs.core.next.call(null,seq__46241__$1);
var G__46312 = null;
var G__46313 = (0);
var G__46314 = (0);
seq__46241 = G__46311;
chunk__46242 = G__46312;
count__46243 = G__46313;
i__46244 = G__46314;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__46315_46319 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46316_46320 = null;
var count__46317_46321 = (0);
var i__46318_46322 = (0);
while(true){
if((i__46318_46322 < count__46317_46321)){
var ns_46323 = cljs.core._nth.call(null,chunk__46316_46320,i__46318_46322);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46323);


var G__46324 = seq__46315_46319;
var G__46325 = chunk__46316_46320;
var G__46326 = count__46317_46321;
var G__46327 = (i__46318_46322 + (1));
seq__46315_46319 = G__46324;
chunk__46316_46320 = G__46325;
count__46317_46321 = G__46326;
i__46318_46322 = G__46327;
continue;
} else {
var temp__5735__auto___46328 = cljs.core.seq.call(null,seq__46315_46319);
if(temp__5735__auto___46328){
var seq__46315_46329__$1 = temp__5735__auto___46328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46315_46329__$1)){
var c__4550__auto___46330 = cljs.core.chunk_first.call(null,seq__46315_46329__$1);
var G__46331 = cljs.core.chunk_rest.call(null,seq__46315_46329__$1);
var G__46332 = c__4550__auto___46330;
var G__46333 = cljs.core.count.call(null,c__4550__auto___46330);
var G__46334 = (0);
seq__46315_46319 = G__46331;
chunk__46316_46320 = G__46332;
count__46317_46321 = G__46333;
i__46318_46322 = G__46334;
continue;
} else {
var ns_46335 = cljs.core.first.call(null,seq__46315_46329__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46335);


var G__46336 = cljs.core.next.call(null,seq__46315_46329__$1);
var G__46337 = null;
var G__46338 = (0);
var G__46339 = (0);
seq__46315_46319 = G__46336;
chunk__46316_46320 = G__46337;
count__46317_46321 = G__46338;
i__46318_46322 = G__46339;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__46340__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46341__i = 0, G__46341__a = new Array(arguments.length -  0);
while (G__46341__i < G__46341__a.length) {G__46341__a[G__46341__i] = arguments[G__46341__i + 0]; ++G__46341__i;}
  args = new cljs.core.IndexedSeq(G__46341__a,0,null);
} 
return G__46340__delegate.call(this,args);};
G__46340.cljs$lang$maxFixedArity = 0;
G__46340.cljs$lang$applyTo = (function (arglist__46342){
var args = cljs.core.seq(arglist__46342);
return G__46340__delegate(args);
});
G__46340.cljs$core$IFn$_invoke$arity$variadic = G__46340__delegate;
return G__46340;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__46343_SHARP_,p2__46344_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46343_SHARP_)),p2__46344_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__46345_SHARP_,p2__46346_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46345_SHARP_),p2__46346_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__46347 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__46347.addCallback(((function (G__46347){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__46347))
);

G__46347.addErrback(((function (G__46347){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__46347))
);

return G__46347;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e46348){if((e46348 instanceof Error)){
var e = e46348;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46348;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e46349){if((e46349 instanceof Error)){
var e = e46349;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46349;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46350 = cljs.core._EQ_;
var expr__46351 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46350.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46351))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__46350.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46351))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__46350.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__46351))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__46350,expr__46351){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46350,expr__46351))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46353,callback){
var map__46354 = p__46353;
var map__46354__$1 = (((((!((map__46354 == null))))?(((((map__46354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46354):map__46354);
var file_msg = map__46354__$1;
var request_url = cljs.core.get.call(null,map__46354__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__46354,map__46354__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46354,map__46354__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__){
return (function (state_46392){
var state_val_46393 = (state_46392[(1)]);
if((state_val_46393 === (7))){
var inst_46388 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46394_46420 = state_46392__$1;
(statearr_46394_46420[(2)] = inst_46388);

(statearr_46394_46420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (1))){
var state_46392__$1 = state_46392;
var statearr_46395_46421 = state_46392__$1;
(statearr_46395_46421[(2)] = null);

(statearr_46395_46421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (4))){
var inst_46358 = (state_46392[(7)]);
var inst_46358__$1 = (state_46392[(2)]);
var state_46392__$1 = (function (){var statearr_46396 = state_46392;
(statearr_46396[(7)] = inst_46358__$1);

return statearr_46396;
})();
if(cljs.core.truth_(inst_46358__$1)){
var statearr_46397_46422 = state_46392__$1;
(statearr_46397_46422[(1)] = (5));

} else {
var statearr_46398_46423 = state_46392__$1;
(statearr_46398_46423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (15))){
var inst_46371 = (state_46392[(8)]);
var inst_46373 = (state_46392[(9)]);
var inst_46375 = inst_46373.call(null,inst_46371);
var state_46392__$1 = state_46392;
var statearr_46399_46424 = state_46392__$1;
(statearr_46399_46424[(2)] = inst_46375);

(statearr_46399_46424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (13))){
var inst_46382 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46400_46425 = state_46392__$1;
(statearr_46400_46425[(2)] = inst_46382);

(statearr_46400_46425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (6))){
var state_46392__$1 = state_46392;
var statearr_46401_46426 = state_46392__$1;
(statearr_46401_46426[(2)] = null);

(statearr_46401_46426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (17))){
var inst_46379 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
var statearr_46402_46427 = state_46392__$1;
(statearr_46402_46427[(2)] = inst_46379);

(statearr_46402_46427[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (3))){
var inst_46390 = (state_46392[(2)]);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46392__$1,inst_46390);
} else {
if((state_val_46393 === (12))){
var state_46392__$1 = state_46392;
var statearr_46403_46428 = state_46392__$1;
(statearr_46403_46428[(2)] = null);

(statearr_46403_46428[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (2))){
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46393 === (11))){
var inst_46363 = (state_46392[(10)]);
var inst_46369 = figwheel.client.file_reloading.blocking_load.call(null,inst_46363);
var state_46392__$1 = state_46392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46392__$1,(14),inst_46369);
} else {
if((state_val_46393 === (9))){
var inst_46363 = (state_46392[(10)]);
var state_46392__$1 = state_46392;
if(cljs.core.truth_(inst_46363)){
var statearr_46404_46429 = state_46392__$1;
(statearr_46404_46429[(1)] = (11));

} else {
var statearr_46405_46430 = state_46392__$1;
(statearr_46405_46430[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (5))){
var inst_46364 = (state_46392[(11)]);
var inst_46358 = (state_46392[(7)]);
var inst_46363 = cljs.core.nth.call(null,inst_46358,(0),null);
var inst_46364__$1 = cljs.core.nth.call(null,inst_46358,(1),null);
var state_46392__$1 = (function (){var statearr_46406 = state_46392;
(statearr_46406[(11)] = inst_46364__$1);

(statearr_46406[(10)] = inst_46363);

return statearr_46406;
})();
if(cljs.core.truth_(inst_46364__$1)){
var statearr_46407_46431 = state_46392__$1;
(statearr_46407_46431[(1)] = (8));

} else {
var statearr_46408_46432 = state_46392__$1;
(statearr_46408_46432[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (14))){
var inst_46363 = (state_46392[(10)]);
var inst_46373 = (state_46392[(9)]);
var inst_46371 = (state_46392[(2)]);
var inst_46372 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46373__$1 = cljs.core.get.call(null,inst_46372,inst_46363);
var state_46392__$1 = (function (){var statearr_46409 = state_46392;
(statearr_46409[(8)] = inst_46371);

(statearr_46409[(9)] = inst_46373__$1);

return statearr_46409;
})();
if(cljs.core.truth_(inst_46373__$1)){
var statearr_46410_46433 = state_46392__$1;
(statearr_46410_46433[(1)] = (15));

} else {
var statearr_46411_46434 = state_46392__$1;
(statearr_46411_46434[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (16))){
var inst_46371 = (state_46392[(8)]);
var inst_46377 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46371);
var state_46392__$1 = state_46392;
var statearr_46412_46435 = state_46392__$1;
(statearr_46412_46435[(2)] = inst_46377);

(statearr_46412_46435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (10))){
var inst_46384 = (state_46392[(2)]);
var state_46392__$1 = (function (){var statearr_46413 = state_46392;
(statearr_46413[(12)] = inst_46384);

return statearr_46413;
})();
var statearr_46414_46436 = state_46392__$1;
(statearr_46414_46436[(2)] = null);

(statearr_46414_46436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46393 === (8))){
var inst_46364 = (state_46392[(11)]);
var inst_46366 = eval(inst_46364);
var state_46392__$1 = state_46392;
var statearr_46415_46437 = state_46392__$1;
(statearr_46415_46437[(2)] = inst_46366);

(statearr_46415_46437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43550__auto__))
;
return ((function (switch__43455__auto__,c__43550__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__43456__auto__ = null;
var figwheel$client$file_reloading$state_machine__43456__auto____0 = (function (){
var statearr_46416 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46416[(0)] = figwheel$client$file_reloading$state_machine__43456__auto__);

(statearr_46416[(1)] = (1));

return statearr_46416;
});
var figwheel$client$file_reloading$state_machine__43456__auto____1 = (function (state_46392){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_46392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e46417){if((e46417 instanceof Object)){
var ex__43459__auto__ = e46417;
var statearr_46418_46438 = state_46392;
(statearr_46418_46438[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46417;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46439 = state_46392;
state_46392 = G__46439;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43456__auto__ = function(state_46392){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43456__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43456__auto____1.call(this,state_46392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43456__auto____0;
figwheel$client$file_reloading$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43456__auto____1;
return figwheel$client$file_reloading$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__))
})();
var state__43552__auto__ = (function (){var statearr_46419 = f__43551__auto__.call(null);
(statearr_46419[(6)] = c__43550__auto__);

return statearr_46419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__))
);

return c__43550__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__46441 = arguments.length;
switch (G__46441) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46443,callback){
var map__46444 = p__46443;
var map__46444__$1 = (((((!((map__46444 == null))))?(((((map__46444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46444):map__46444);
var file_msg = map__46444__$1;
var namespace = cljs.core.get.call(null,map__46444__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46444,map__46444__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46444,map__46444__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__46446){
var map__46447 = p__46446;
var map__46447__$1 = (((((!((map__46447 == null))))?(((((map__46447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46447):map__46447);
var file_msg = map__46447__$1;
var namespace = cljs.core.get.call(null,map__46447__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46449){
var map__46450 = p__46449;
var map__46450__$1 = (((((!((map__46450 == null))))?(((((map__46450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46450):map__46450);
var file_msg = map__46450__$1;
var namespace = cljs.core.get.call(null,map__46450__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46452,callback){
var map__46453 = p__46452;
var map__46453__$1 = (((((!((map__46453 == null))))?(((((map__46453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46453):map__46453);
var file_msg = map__46453__$1;
var request_url = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46453__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__43550__auto___46503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___46503,out){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___46503,out){
return (function (state_46488){
var state_val_46489 = (state_46488[(1)]);
if((state_val_46489 === (1))){
var inst_46462 = cljs.core.seq.call(null,files);
var inst_46463 = cljs.core.first.call(null,inst_46462);
var inst_46464 = cljs.core.next.call(null,inst_46462);
var inst_46465 = files;
var state_46488__$1 = (function (){var statearr_46490 = state_46488;
(statearr_46490[(7)] = inst_46464);

(statearr_46490[(8)] = inst_46465);

(statearr_46490[(9)] = inst_46463);

return statearr_46490;
})();
var statearr_46491_46504 = state_46488__$1;
(statearr_46491_46504[(2)] = null);

(statearr_46491_46504[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (2))){
var inst_46471 = (state_46488[(10)]);
var inst_46465 = (state_46488[(8)]);
var inst_46470 = cljs.core.seq.call(null,inst_46465);
var inst_46471__$1 = cljs.core.first.call(null,inst_46470);
var inst_46472 = cljs.core.next.call(null,inst_46470);
var inst_46473 = (inst_46471__$1 == null);
var inst_46474 = cljs.core.not.call(null,inst_46473);
var state_46488__$1 = (function (){var statearr_46492 = state_46488;
(statearr_46492[(10)] = inst_46471__$1);

(statearr_46492[(11)] = inst_46472);

return statearr_46492;
})();
if(inst_46474){
var statearr_46493_46505 = state_46488__$1;
(statearr_46493_46505[(1)] = (4));

} else {
var statearr_46494_46506 = state_46488__$1;
(statearr_46494_46506[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (3))){
var inst_46486 = (state_46488[(2)]);
var state_46488__$1 = state_46488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46488__$1,inst_46486);
} else {
if((state_val_46489 === (4))){
var inst_46471 = (state_46488[(10)]);
var inst_46476 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46471);
var state_46488__$1 = state_46488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46488__$1,(7),inst_46476);
} else {
if((state_val_46489 === (5))){
var inst_46482 = cljs.core.async.close_BANG_.call(null,out);
var state_46488__$1 = state_46488;
var statearr_46495_46507 = state_46488__$1;
(statearr_46495_46507[(2)] = inst_46482);

(statearr_46495_46507[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (6))){
var inst_46484 = (state_46488[(2)]);
var state_46488__$1 = state_46488;
var statearr_46496_46508 = state_46488__$1;
(statearr_46496_46508[(2)] = inst_46484);

(statearr_46496_46508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46489 === (7))){
var inst_46472 = (state_46488[(11)]);
var inst_46478 = (state_46488[(2)]);
var inst_46479 = cljs.core.async.put_BANG_.call(null,out,inst_46478);
var inst_46465 = inst_46472;
var state_46488__$1 = (function (){var statearr_46497 = state_46488;
(statearr_46497[(8)] = inst_46465);

(statearr_46497[(12)] = inst_46479);

return statearr_46497;
})();
var statearr_46498_46509 = state_46488__$1;
(statearr_46498_46509[(2)] = null);

(statearr_46498_46509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__43550__auto___46503,out))
;
return ((function (switch__43455__auto__,c__43550__auto___46503,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto____0 = (function (){
var statearr_46499 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46499[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto__);

(statearr_46499[(1)] = (1));

return statearr_46499;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto____1 = (function (state_46488){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_46488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e46500){if((e46500 instanceof Object)){
var ex__43459__auto__ = e46500;
var statearr_46501_46510 = state_46488;
(statearr_46501_46510[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46511 = state_46488;
state_46488 = G__46511;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto__ = function(state_46488){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto____1.call(this,state_46488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___46503,out))
})();
var state__43552__auto__ = (function (){var statearr_46502 = f__43551__auto__.call(null);
(statearr_46502[(6)] = c__43550__auto___46503);

return statearr_46502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___46503,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__46512,opts){
var map__46513 = p__46512;
var map__46513__$1 = (((((!((map__46513 == null))))?(((((map__46513.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46513.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46513):map__46513);
var eval_body = cljs.core.get.call(null,map__46513__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__46513__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e46515){var e = e46515;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__46516_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46516_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__46517){
var vec__46518 = p__46517;
var k = cljs.core.nth.call(null,vec__46518,(0),null);
var v = cljs.core.nth.call(null,vec__46518,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__46521){
var vec__46522 = p__46521;
var k = cljs.core.nth.call(null,vec__46522,(0),null);
var v = cljs.core.nth.call(null,vec__46522,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__46528,p__46529){
var map__46530 = p__46528;
var map__46530__$1 = (((((!((map__46530 == null))))?(((((map__46530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46530):map__46530);
var opts = map__46530__$1;
var before_jsload = cljs.core.get.call(null,map__46530__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__46530__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__46530__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__46531 = p__46529;
var map__46531__$1 = (((((!((map__46531 == null))))?(((((map__46531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46531):map__46531);
var msg = map__46531__$1;
var files = cljs.core.get.call(null,map__46531__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__46531__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__46531__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46685){
var state_val_46686 = (state_46685[(1)]);
if((state_val_46686 === (7))){
var inst_46548 = (state_46685[(7)]);
var inst_46547 = (state_46685[(8)]);
var inst_46545 = (state_46685[(9)]);
var inst_46546 = (state_46685[(10)]);
var inst_46553 = cljs.core._nth.call(null,inst_46546,inst_46548);
var inst_46554 = figwheel.client.file_reloading.eval_body.call(null,inst_46553,opts);
var inst_46555 = (inst_46548 + (1));
var tmp46687 = inst_46547;
var tmp46688 = inst_46545;
var tmp46689 = inst_46546;
var inst_46545__$1 = tmp46688;
var inst_46546__$1 = tmp46689;
var inst_46547__$1 = tmp46687;
var inst_46548__$1 = inst_46555;
var state_46685__$1 = (function (){var statearr_46690 = state_46685;
(statearr_46690[(7)] = inst_46548__$1);

(statearr_46690[(11)] = inst_46554);

(statearr_46690[(8)] = inst_46547__$1);

(statearr_46690[(9)] = inst_46545__$1);

(statearr_46690[(10)] = inst_46546__$1);

return statearr_46690;
})();
var statearr_46691_46774 = state_46685__$1;
(statearr_46691_46774[(2)] = null);

(statearr_46691_46774[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (20))){
var inst_46588 = (state_46685[(12)]);
var inst_46596 = figwheel.client.file_reloading.sort_files.call(null,inst_46588);
var state_46685__$1 = state_46685;
var statearr_46692_46775 = state_46685__$1;
(statearr_46692_46775[(2)] = inst_46596);

(statearr_46692_46775[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (27))){
var state_46685__$1 = state_46685;
var statearr_46693_46776 = state_46685__$1;
(statearr_46693_46776[(2)] = null);

(statearr_46693_46776[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (1))){
var inst_46537 = (state_46685[(13)]);
var inst_46534 = before_jsload.call(null,files);
var inst_46535 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_46536 = (function (){return ((function (inst_46537,inst_46534,inst_46535,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46525_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46525_SHARP_);
});
;})(inst_46537,inst_46534,inst_46535,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46537__$1 = cljs.core.filter.call(null,inst_46536,files);
var inst_46538 = cljs.core.not_empty.call(null,inst_46537__$1);
var state_46685__$1 = (function (){var statearr_46694 = state_46685;
(statearr_46694[(14)] = inst_46534);

(statearr_46694[(13)] = inst_46537__$1);

(statearr_46694[(15)] = inst_46535);

return statearr_46694;
})();
if(cljs.core.truth_(inst_46538)){
var statearr_46695_46777 = state_46685__$1;
(statearr_46695_46777[(1)] = (2));

} else {
var statearr_46696_46778 = state_46685__$1;
(statearr_46696_46778[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (24))){
var state_46685__$1 = state_46685;
var statearr_46697_46779 = state_46685__$1;
(statearr_46697_46779[(2)] = null);

(statearr_46697_46779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (39))){
var inst_46638 = (state_46685[(16)]);
var state_46685__$1 = state_46685;
var statearr_46698_46780 = state_46685__$1;
(statearr_46698_46780[(2)] = inst_46638);

(statearr_46698_46780[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (46))){
var inst_46680 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46699_46781 = state_46685__$1;
(statearr_46699_46781[(2)] = inst_46680);

(statearr_46699_46781[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (4))){
var inst_46582 = (state_46685[(2)]);
var inst_46583 = cljs.core.List.EMPTY;
var inst_46584 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46583);
var inst_46585 = (function (){return ((function (inst_46582,inst_46583,inst_46584,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46526_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__46526_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__46526_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__46526_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_46582,inst_46583,inst_46584,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46586 = cljs.core.filter.call(null,inst_46585,files);
var inst_46587 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46588 = cljs.core.concat.call(null,inst_46586,inst_46587);
var state_46685__$1 = (function (){var statearr_46700 = state_46685;
(statearr_46700[(17)] = inst_46584);

(statearr_46700[(18)] = inst_46582);

(statearr_46700[(12)] = inst_46588);

return statearr_46700;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46701_46782 = state_46685__$1;
(statearr_46701_46782[(1)] = (16));

} else {
var statearr_46702_46783 = state_46685__$1;
(statearr_46702_46783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (15))){
var inst_46572 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46703_46784 = state_46685__$1;
(statearr_46703_46784[(2)] = inst_46572);

(statearr_46703_46784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (21))){
var inst_46598 = (state_46685[(19)]);
var inst_46598__$1 = (state_46685[(2)]);
var inst_46599 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46598__$1);
var state_46685__$1 = (function (){var statearr_46704 = state_46685;
(statearr_46704[(19)] = inst_46598__$1);

return statearr_46704;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46685__$1,(22),inst_46599);
} else {
if((state_val_46686 === (31))){
var inst_46683 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46685__$1,inst_46683);
} else {
if((state_val_46686 === (32))){
var inst_46638 = (state_46685[(16)]);
var inst_46643 = inst_46638.cljs$lang$protocol_mask$partition0$;
var inst_46644 = (inst_46643 & (64));
var inst_46645 = inst_46638.cljs$core$ISeq$;
var inst_46646 = (cljs.core.PROTOCOL_SENTINEL === inst_46645);
var inst_46647 = ((inst_46644) || (inst_46646));
var state_46685__$1 = state_46685;
if(cljs.core.truth_(inst_46647)){
var statearr_46705_46785 = state_46685__$1;
(statearr_46705_46785[(1)] = (35));

} else {
var statearr_46706_46786 = state_46685__$1;
(statearr_46706_46786[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (40))){
var inst_46660 = (state_46685[(20)]);
var inst_46659 = (state_46685[(2)]);
var inst_46660__$1 = cljs.core.get.call(null,inst_46659,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46661 = cljs.core.get.call(null,inst_46659,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46662 = cljs.core.not_empty.call(null,inst_46660__$1);
var state_46685__$1 = (function (){var statearr_46707 = state_46685;
(statearr_46707[(20)] = inst_46660__$1);

(statearr_46707[(21)] = inst_46661);

return statearr_46707;
})();
if(cljs.core.truth_(inst_46662)){
var statearr_46708_46787 = state_46685__$1;
(statearr_46708_46787[(1)] = (41));

} else {
var statearr_46709_46788 = state_46685__$1;
(statearr_46709_46788[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (33))){
var state_46685__$1 = state_46685;
var statearr_46710_46789 = state_46685__$1;
(statearr_46710_46789[(2)] = false);

(statearr_46710_46789[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (13))){
var inst_46558 = (state_46685[(22)]);
var inst_46562 = cljs.core.chunk_first.call(null,inst_46558);
var inst_46563 = cljs.core.chunk_rest.call(null,inst_46558);
var inst_46564 = cljs.core.count.call(null,inst_46562);
var inst_46545 = inst_46563;
var inst_46546 = inst_46562;
var inst_46547 = inst_46564;
var inst_46548 = (0);
var state_46685__$1 = (function (){var statearr_46711 = state_46685;
(statearr_46711[(7)] = inst_46548);

(statearr_46711[(8)] = inst_46547);

(statearr_46711[(9)] = inst_46545);

(statearr_46711[(10)] = inst_46546);

return statearr_46711;
})();
var statearr_46712_46790 = state_46685__$1;
(statearr_46712_46790[(2)] = null);

(statearr_46712_46790[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (22))){
var inst_46601 = (state_46685[(23)]);
var inst_46606 = (state_46685[(24)]);
var inst_46602 = (state_46685[(25)]);
var inst_46598 = (state_46685[(19)]);
var inst_46601__$1 = (state_46685[(2)]);
var inst_46602__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46601__$1);
var inst_46603 = (function (){var all_files = inst_46598;
var res_SINGLEQUOTE_ = inst_46601__$1;
var res = inst_46602__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46601,inst_46606,inst_46602,inst_46598,inst_46601__$1,inst_46602__$1,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__46527_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__46527_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46601,inst_46606,inst_46602,inst_46598,inst_46601__$1,inst_46602__$1,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46604 = cljs.core.filter.call(null,inst_46603,inst_46601__$1);
var inst_46605 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46606__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46605);
var inst_46607 = cljs.core.not_empty.call(null,inst_46606__$1);
var state_46685__$1 = (function (){var statearr_46713 = state_46685;
(statearr_46713[(26)] = inst_46604);

(statearr_46713[(23)] = inst_46601__$1);

(statearr_46713[(24)] = inst_46606__$1);

(statearr_46713[(25)] = inst_46602__$1);

return statearr_46713;
})();
if(cljs.core.truth_(inst_46607)){
var statearr_46714_46791 = state_46685__$1;
(statearr_46714_46791[(1)] = (23));

} else {
var statearr_46715_46792 = state_46685__$1;
(statearr_46715_46792[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (36))){
var state_46685__$1 = state_46685;
var statearr_46716_46793 = state_46685__$1;
(statearr_46716_46793[(2)] = false);

(statearr_46716_46793[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (41))){
var inst_46660 = (state_46685[(20)]);
var inst_46664 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46665 = cljs.core.map.call(null,inst_46664,inst_46660);
var inst_46666 = cljs.core.pr_str.call(null,inst_46665);
var inst_46667 = ["figwheel-no-load meta-data: ",inst_46666].join('');
var inst_46668 = figwheel.client.utils.log.call(null,inst_46667);
var state_46685__$1 = state_46685;
var statearr_46717_46794 = state_46685__$1;
(statearr_46717_46794[(2)] = inst_46668);

(statearr_46717_46794[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (43))){
var inst_46661 = (state_46685[(21)]);
var inst_46671 = (state_46685[(2)]);
var inst_46672 = cljs.core.not_empty.call(null,inst_46661);
var state_46685__$1 = (function (){var statearr_46718 = state_46685;
(statearr_46718[(27)] = inst_46671);

return statearr_46718;
})();
if(cljs.core.truth_(inst_46672)){
var statearr_46719_46795 = state_46685__$1;
(statearr_46719_46795[(1)] = (44));

} else {
var statearr_46720_46796 = state_46685__$1;
(statearr_46720_46796[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (29))){
var inst_46604 = (state_46685[(26)]);
var inst_46601 = (state_46685[(23)]);
var inst_46638 = (state_46685[(16)]);
var inst_46606 = (state_46685[(24)]);
var inst_46602 = (state_46685[(25)]);
var inst_46598 = (state_46685[(19)]);
var inst_46634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46637 = (function (){var all_files = inst_46598;
var res_SINGLEQUOTE_ = inst_46601;
var res = inst_46602;
var files_not_loaded = inst_46604;
var dependencies_that_loaded = inst_46606;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46604,inst_46601,inst_46638,inst_46606,inst_46602,inst_46598,inst_46634,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46636){
var map__46721 = p__46636;
var map__46721__$1 = (((((!((map__46721 == null))))?(((((map__46721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46721):map__46721);
var namespace = cljs.core.get.call(null,map__46721__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46604,inst_46601,inst_46638,inst_46606,inst_46602,inst_46598,inst_46634,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46638__$1 = cljs.core.group_by.call(null,inst_46637,inst_46604);
var inst_46640 = (inst_46638__$1 == null);
var inst_46641 = cljs.core.not.call(null,inst_46640);
var state_46685__$1 = (function (){var statearr_46723 = state_46685;
(statearr_46723[(16)] = inst_46638__$1);

(statearr_46723[(28)] = inst_46634);

return statearr_46723;
})();
if(inst_46641){
var statearr_46724_46797 = state_46685__$1;
(statearr_46724_46797[(1)] = (32));

} else {
var statearr_46725_46798 = state_46685__$1;
(statearr_46725_46798[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (44))){
var inst_46661 = (state_46685[(21)]);
var inst_46674 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46661);
var inst_46675 = cljs.core.pr_str.call(null,inst_46674);
var inst_46676 = ["not required: ",inst_46675].join('');
var inst_46677 = figwheel.client.utils.log.call(null,inst_46676);
var state_46685__$1 = state_46685;
var statearr_46726_46799 = state_46685__$1;
(statearr_46726_46799[(2)] = inst_46677);

(statearr_46726_46799[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (6))){
var inst_46579 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46727_46800 = state_46685__$1;
(statearr_46727_46800[(2)] = inst_46579);

(statearr_46727_46800[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (28))){
var inst_46604 = (state_46685[(26)]);
var inst_46631 = (state_46685[(2)]);
var inst_46632 = cljs.core.not_empty.call(null,inst_46604);
var state_46685__$1 = (function (){var statearr_46728 = state_46685;
(statearr_46728[(29)] = inst_46631);

return statearr_46728;
})();
if(cljs.core.truth_(inst_46632)){
var statearr_46729_46801 = state_46685__$1;
(statearr_46729_46801[(1)] = (29));

} else {
var statearr_46730_46802 = state_46685__$1;
(statearr_46730_46802[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (25))){
var inst_46602 = (state_46685[(25)]);
var inst_46618 = (state_46685[(2)]);
var inst_46619 = cljs.core.not_empty.call(null,inst_46602);
var state_46685__$1 = (function (){var statearr_46731 = state_46685;
(statearr_46731[(30)] = inst_46618);

return statearr_46731;
})();
if(cljs.core.truth_(inst_46619)){
var statearr_46732_46803 = state_46685__$1;
(statearr_46732_46803[(1)] = (26));

} else {
var statearr_46733_46804 = state_46685__$1;
(statearr_46733_46804[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (34))){
var inst_46654 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
if(cljs.core.truth_(inst_46654)){
var statearr_46734_46805 = state_46685__$1;
(statearr_46734_46805[(1)] = (38));

} else {
var statearr_46735_46806 = state_46685__$1;
(statearr_46735_46806[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (17))){
var state_46685__$1 = state_46685;
var statearr_46736_46807 = state_46685__$1;
(statearr_46736_46807[(2)] = recompile_dependents);

(statearr_46736_46807[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (3))){
var state_46685__$1 = state_46685;
var statearr_46737_46808 = state_46685__$1;
(statearr_46737_46808[(2)] = null);

(statearr_46737_46808[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (12))){
var inst_46575 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46738_46809 = state_46685__$1;
(statearr_46738_46809[(2)] = inst_46575);

(statearr_46738_46809[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (2))){
var inst_46537 = (state_46685[(13)]);
var inst_46544 = cljs.core.seq.call(null,inst_46537);
var inst_46545 = inst_46544;
var inst_46546 = null;
var inst_46547 = (0);
var inst_46548 = (0);
var state_46685__$1 = (function (){var statearr_46739 = state_46685;
(statearr_46739[(7)] = inst_46548);

(statearr_46739[(8)] = inst_46547);

(statearr_46739[(9)] = inst_46545);

(statearr_46739[(10)] = inst_46546);

return statearr_46739;
})();
var statearr_46740_46810 = state_46685__$1;
(statearr_46740_46810[(2)] = null);

(statearr_46740_46810[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (23))){
var inst_46604 = (state_46685[(26)]);
var inst_46601 = (state_46685[(23)]);
var inst_46606 = (state_46685[(24)]);
var inst_46602 = (state_46685[(25)]);
var inst_46598 = (state_46685[(19)]);
var inst_46609 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46611 = (function (){var all_files = inst_46598;
var res_SINGLEQUOTE_ = inst_46601;
var res = inst_46602;
var files_not_loaded = inst_46604;
var dependencies_that_loaded = inst_46606;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46604,inst_46601,inst_46606,inst_46602,inst_46598,inst_46609,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46610){
var map__46741 = p__46610;
var map__46741__$1 = (((((!((map__46741 == null))))?(((((map__46741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46741):map__46741);
var request_url = cljs.core.get.call(null,map__46741__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46604,inst_46601,inst_46606,inst_46602,inst_46598,inst_46609,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46612 = cljs.core.reverse.call(null,inst_46606);
var inst_46613 = cljs.core.map.call(null,inst_46611,inst_46612);
var inst_46614 = cljs.core.pr_str.call(null,inst_46613);
var inst_46615 = figwheel.client.utils.log.call(null,inst_46614);
var state_46685__$1 = (function (){var statearr_46743 = state_46685;
(statearr_46743[(31)] = inst_46609);

return statearr_46743;
})();
var statearr_46744_46811 = state_46685__$1;
(statearr_46744_46811[(2)] = inst_46615);

(statearr_46744_46811[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (35))){
var state_46685__$1 = state_46685;
var statearr_46745_46812 = state_46685__$1;
(statearr_46745_46812[(2)] = true);

(statearr_46745_46812[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (19))){
var inst_46588 = (state_46685[(12)]);
var inst_46594 = figwheel.client.file_reloading.expand_files.call(null,inst_46588);
var state_46685__$1 = state_46685;
var statearr_46746_46813 = state_46685__$1;
(statearr_46746_46813[(2)] = inst_46594);

(statearr_46746_46813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (11))){
var state_46685__$1 = state_46685;
var statearr_46747_46814 = state_46685__$1;
(statearr_46747_46814[(2)] = null);

(statearr_46747_46814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (9))){
var inst_46577 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46748_46815 = state_46685__$1;
(statearr_46748_46815[(2)] = inst_46577);

(statearr_46748_46815[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (5))){
var inst_46548 = (state_46685[(7)]);
var inst_46547 = (state_46685[(8)]);
var inst_46550 = (inst_46548 < inst_46547);
var inst_46551 = inst_46550;
var state_46685__$1 = state_46685;
if(cljs.core.truth_(inst_46551)){
var statearr_46749_46816 = state_46685__$1;
(statearr_46749_46816[(1)] = (7));

} else {
var statearr_46750_46817 = state_46685__$1;
(statearr_46750_46817[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (14))){
var inst_46558 = (state_46685[(22)]);
var inst_46567 = cljs.core.first.call(null,inst_46558);
var inst_46568 = figwheel.client.file_reloading.eval_body.call(null,inst_46567,opts);
var inst_46569 = cljs.core.next.call(null,inst_46558);
var inst_46545 = inst_46569;
var inst_46546 = null;
var inst_46547 = (0);
var inst_46548 = (0);
var state_46685__$1 = (function (){var statearr_46751 = state_46685;
(statearr_46751[(7)] = inst_46548);

(statearr_46751[(8)] = inst_46547);

(statearr_46751[(9)] = inst_46545);

(statearr_46751[(10)] = inst_46546);

(statearr_46751[(32)] = inst_46568);

return statearr_46751;
})();
var statearr_46752_46818 = state_46685__$1;
(statearr_46752_46818[(2)] = null);

(statearr_46752_46818[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (45))){
var state_46685__$1 = state_46685;
var statearr_46753_46819 = state_46685__$1;
(statearr_46753_46819[(2)] = null);

(statearr_46753_46819[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (26))){
var inst_46604 = (state_46685[(26)]);
var inst_46601 = (state_46685[(23)]);
var inst_46606 = (state_46685[(24)]);
var inst_46602 = (state_46685[(25)]);
var inst_46598 = (state_46685[(19)]);
var inst_46621 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46623 = (function (){var all_files = inst_46598;
var res_SINGLEQUOTE_ = inst_46601;
var res = inst_46602;
var files_not_loaded = inst_46604;
var dependencies_that_loaded = inst_46606;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46604,inst_46601,inst_46606,inst_46602,inst_46598,inst_46621,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46622){
var map__46754 = p__46622;
var map__46754__$1 = (((((!((map__46754 == null))))?(((((map__46754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46754):map__46754);
var namespace = cljs.core.get.call(null,map__46754__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46754__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46604,inst_46601,inst_46606,inst_46602,inst_46598,inst_46621,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46624 = cljs.core.map.call(null,inst_46623,inst_46602);
var inst_46625 = cljs.core.pr_str.call(null,inst_46624);
var inst_46626 = figwheel.client.utils.log.call(null,inst_46625);
var inst_46627 = (function (){var all_files = inst_46598;
var res_SINGLEQUOTE_ = inst_46601;
var res = inst_46602;
var files_not_loaded = inst_46604;
var dependencies_that_loaded = inst_46606;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46604,inst_46601,inst_46606,inst_46602,inst_46598,inst_46621,inst_46623,inst_46624,inst_46625,inst_46626,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46604,inst_46601,inst_46606,inst_46602,inst_46598,inst_46621,inst_46623,inst_46624,inst_46625,inst_46626,state_val_46686,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46628 = setTimeout(inst_46627,(10));
var state_46685__$1 = (function (){var statearr_46756 = state_46685;
(statearr_46756[(33)] = inst_46626);

(statearr_46756[(34)] = inst_46621);

return statearr_46756;
})();
var statearr_46757_46820 = state_46685__$1;
(statearr_46757_46820[(2)] = inst_46628);

(statearr_46757_46820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (16))){
var state_46685__$1 = state_46685;
var statearr_46758_46821 = state_46685__$1;
(statearr_46758_46821[(2)] = reload_dependents);

(statearr_46758_46821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (38))){
var inst_46638 = (state_46685[(16)]);
var inst_46656 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46638);
var state_46685__$1 = state_46685;
var statearr_46759_46822 = state_46685__$1;
(statearr_46759_46822[(2)] = inst_46656);

(statearr_46759_46822[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (30))){
var state_46685__$1 = state_46685;
var statearr_46760_46823 = state_46685__$1;
(statearr_46760_46823[(2)] = null);

(statearr_46760_46823[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (10))){
var inst_46558 = (state_46685[(22)]);
var inst_46560 = cljs.core.chunked_seq_QMARK_.call(null,inst_46558);
var state_46685__$1 = state_46685;
if(inst_46560){
var statearr_46761_46824 = state_46685__$1;
(statearr_46761_46824[(1)] = (13));

} else {
var statearr_46762_46825 = state_46685__$1;
(statearr_46762_46825[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (18))){
var inst_46592 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
if(cljs.core.truth_(inst_46592)){
var statearr_46763_46826 = state_46685__$1;
(statearr_46763_46826[(1)] = (19));

} else {
var statearr_46764_46827 = state_46685__$1;
(statearr_46764_46827[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (42))){
var state_46685__$1 = state_46685;
var statearr_46765_46828 = state_46685__$1;
(statearr_46765_46828[(2)] = null);

(statearr_46765_46828[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (37))){
var inst_46651 = (state_46685[(2)]);
var state_46685__$1 = state_46685;
var statearr_46766_46829 = state_46685__$1;
(statearr_46766_46829[(2)] = inst_46651);

(statearr_46766_46829[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46686 === (8))){
var inst_46545 = (state_46685[(9)]);
var inst_46558 = (state_46685[(22)]);
var inst_46558__$1 = cljs.core.seq.call(null,inst_46545);
var state_46685__$1 = (function (){var statearr_46767 = state_46685;
(statearr_46767[(22)] = inst_46558__$1);

return statearr_46767;
})();
if(inst_46558__$1){
var statearr_46768_46830 = state_46685__$1;
(statearr_46768_46830[(1)] = (10));

} else {
var statearr_46769_46831 = state_46685__$1;
(statearr_46769_46831[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43455__auto__,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto____0 = (function (){
var statearr_46770 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46770[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto__);

(statearr_46770[(1)] = (1));

return statearr_46770;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto____1 = (function (state_46685){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_46685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e46771){if((e46771 instanceof Object)){
var ex__43459__auto__ = e46771;
var statearr_46772_46832 = state_46685;
(statearr_46772_46832[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46833 = state_46685;
state_46685 = G__46833;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto__ = function(state_46685){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto____1.call(this,state_46685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43552__auto__ = (function (){var statearr_46773 = f__43551__auto__.call(null);
(statearr_46773[(6)] = c__43550__auto__);

return statearr_46773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__,map__46530,map__46530__$1,opts,before_jsload,on_jsload,reload_dependents,map__46531,map__46531__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43550__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46836,link){
var map__46837 = p__46836;
var map__46837__$1 = (((((!((map__46837 == null))))?(((((map__46837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46837):map__46837);
var file = cljs.core.get.call(null,map__46837__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__46837,map__46837__$1,file){
return (function (p1__46834_SHARP_,p2__46835_SHARP_){
if(cljs.core._EQ_.call(null,p1__46834_SHARP_,p2__46835_SHARP_)){
return p1__46834_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__46837,map__46837__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46840){
var map__46841 = p__46840;
var map__46841__$1 = (((((!((map__46841 == null))))?(((((map__46841.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46841.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46841):map__46841);
var match_length = cljs.core.get.call(null,map__46841__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46841__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46839_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46839_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46843_SHARP_,p2__46844_SHARP_){
return cljs.core.assoc.call(null,p1__46843_SHARP_,cljs.core.get.call(null,p2__46844_SHARP_,key),p2__46844_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_46845 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46845);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46845);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46846,p__46847){
var map__46848 = p__46846;
var map__46848__$1 = (((((!((map__46848 == null))))?(((((map__46848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46848):map__46848);
var on_cssload = cljs.core.get.call(null,map__46848__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46849 = p__46847;
var map__46849__$1 = (((((!((map__46849 == null))))?(((((map__46849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46849):map__46849);
var files_msg = map__46849__$1;
var files = cljs.core.get.call(null,map__46849__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1563183878349
