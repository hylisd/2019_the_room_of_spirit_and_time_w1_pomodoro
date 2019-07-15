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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41837_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41837_SHARP_));
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
var seq__41838 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41839 = null;
var count__41840 = (0);
var i__41841 = (0);
while(true){
if((i__41841 < count__41840)){
var n = cljs.core._nth.call(null,chunk__41839,i__41841);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41842 = seq__41838;
var G__41843 = chunk__41839;
var G__41844 = count__41840;
var G__41845 = (i__41841 + (1));
seq__41838 = G__41842;
chunk__41839 = G__41843;
count__41840 = G__41844;
i__41841 = G__41845;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41838);
if(temp__5735__auto__){
var seq__41838__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41838__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41838__$1);
var G__41846 = cljs.core.chunk_rest.call(null,seq__41838__$1);
var G__41847 = c__4550__auto__;
var G__41848 = cljs.core.count.call(null,c__4550__auto__);
var G__41849 = (0);
seq__41838 = G__41846;
chunk__41839 = G__41847;
count__41840 = G__41848;
i__41841 = G__41849;
continue;
} else {
var n = cljs.core.first.call(null,seq__41838__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41850 = cljs.core.next.call(null,seq__41838__$1);
var G__41851 = null;
var G__41852 = (0);
var G__41853 = (0);
seq__41838 = G__41850;
chunk__41839 = G__41851;
count__41840 = G__41852;
i__41841 = G__41853;
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
return cljs.core.some.call(null,(function (p__41854){
var vec__41855 = p__41854;
var _ = cljs.core.nth.call(null,vec__41855,(0),null);
var v = cljs.core.nth.call(null,vec__41855,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__41858){
var vec__41859 = p__41858;
var k = cljs.core.nth.call(null,vec__41859,(0),null);
var v = cljs.core.nth.call(null,vec__41859,(1),null);
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

var seq__41871_41879 = cljs.core.seq.call(null,deps);
var chunk__41872_41880 = null;
var count__41873_41881 = (0);
var i__41874_41882 = (0);
while(true){
if((i__41874_41882 < count__41873_41881)){
var dep_41883 = cljs.core._nth.call(null,chunk__41872_41880,i__41874_41882);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_41883;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41883));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41883,(depth + (1)),state);
} else {
}


var G__41884 = seq__41871_41879;
var G__41885 = chunk__41872_41880;
var G__41886 = count__41873_41881;
var G__41887 = (i__41874_41882 + (1));
seq__41871_41879 = G__41884;
chunk__41872_41880 = G__41885;
count__41873_41881 = G__41886;
i__41874_41882 = G__41887;
continue;
} else {
var temp__5735__auto___41888 = cljs.core.seq.call(null,seq__41871_41879);
if(temp__5735__auto___41888){
var seq__41871_41889__$1 = temp__5735__auto___41888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41871_41889__$1)){
var c__4550__auto___41890 = cljs.core.chunk_first.call(null,seq__41871_41889__$1);
var G__41891 = cljs.core.chunk_rest.call(null,seq__41871_41889__$1);
var G__41892 = c__4550__auto___41890;
var G__41893 = cljs.core.count.call(null,c__4550__auto___41890);
var G__41894 = (0);
seq__41871_41879 = G__41891;
chunk__41872_41880 = G__41892;
count__41873_41881 = G__41893;
i__41874_41882 = G__41894;
continue;
} else {
var dep_41895 = cljs.core.first.call(null,seq__41871_41889__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_41895;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41895));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41895,(depth + (1)),state);
} else {
}


var G__41896 = cljs.core.next.call(null,seq__41871_41889__$1);
var G__41897 = null;
var G__41898 = (0);
var G__41899 = (0);
seq__41871_41879 = G__41896;
chunk__41872_41880 = G__41897;
count__41873_41881 = G__41898;
i__41874_41882 = G__41899;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41875){
var vec__41876 = p__41875;
var seq__41877 = cljs.core.seq.call(null,vec__41876);
var first__41878 = cljs.core.first.call(null,seq__41877);
var seq__41877__$1 = cljs.core.next.call(null,seq__41877);
var x = first__41878;
var xs = seq__41877__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41876,seq__41877,first__41878,seq__41877__$1,x,xs,get_deps__$1){
return (function (p1__41862_SHARP_){
return clojure.set.difference.call(null,p1__41862_SHARP_,x);
});})(vec__41876,seq__41877,first__41878,seq__41877__$1,x,xs,get_deps__$1))
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
var seq__41900 = cljs.core.seq.call(null,provides);
var chunk__41901 = null;
var count__41902 = (0);
var i__41903 = (0);
while(true){
if((i__41903 < count__41902)){
var prov = cljs.core._nth.call(null,chunk__41901,i__41903);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41912_41920 = cljs.core.seq.call(null,requires);
var chunk__41913_41921 = null;
var count__41914_41922 = (0);
var i__41915_41923 = (0);
while(true){
if((i__41915_41923 < count__41914_41922)){
var req_41924 = cljs.core._nth.call(null,chunk__41913_41921,i__41915_41923);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41924,prov);


var G__41925 = seq__41912_41920;
var G__41926 = chunk__41913_41921;
var G__41927 = count__41914_41922;
var G__41928 = (i__41915_41923 + (1));
seq__41912_41920 = G__41925;
chunk__41913_41921 = G__41926;
count__41914_41922 = G__41927;
i__41915_41923 = G__41928;
continue;
} else {
var temp__5735__auto___41929 = cljs.core.seq.call(null,seq__41912_41920);
if(temp__5735__auto___41929){
var seq__41912_41930__$1 = temp__5735__auto___41929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41912_41930__$1)){
var c__4550__auto___41931 = cljs.core.chunk_first.call(null,seq__41912_41930__$1);
var G__41932 = cljs.core.chunk_rest.call(null,seq__41912_41930__$1);
var G__41933 = c__4550__auto___41931;
var G__41934 = cljs.core.count.call(null,c__4550__auto___41931);
var G__41935 = (0);
seq__41912_41920 = G__41932;
chunk__41913_41921 = G__41933;
count__41914_41922 = G__41934;
i__41915_41923 = G__41935;
continue;
} else {
var req_41936 = cljs.core.first.call(null,seq__41912_41930__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41936,prov);


var G__41937 = cljs.core.next.call(null,seq__41912_41930__$1);
var G__41938 = null;
var G__41939 = (0);
var G__41940 = (0);
seq__41912_41920 = G__41937;
chunk__41913_41921 = G__41938;
count__41914_41922 = G__41939;
i__41915_41923 = G__41940;
continue;
}
} else {
}
}
break;
}


var G__41941 = seq__41900;
var G__41942 = chunk__41901;
var G__41943 = count__41902;
var G__41944 = (i__41903 + (1));
seq__41900 = G__41941;
chunk__41901 = G__41942;
count__41902 = G__41943;
i__41903 = G__41944;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41900);
if(temp__5735__auto__){
var seq__41900__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41900__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41900__$1);
var G__41945 = cljs.core.chunk_rest.call(null,seq__41900__$1);
var G__41946 = c__4550__auto__;
var G__41947 = cljs.core.count.call(null,c__4550__auto__);
var G__41948 = (0);
seq__41900 = G__41945;
chunk__41901 = G__41946;
count__41902 = G__41947;
i__41903 = G__41948;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41900__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41916_41949 = cljs.core.seq.call(null,requires);
var chunk__41917_41950 = null;
var count__41918_41951 = (0);
var i__41919_41952 = (0);
while(true){
if((i__41919_41952 < count__41918_41951)){
var req_41953 = cljs.core._nth.call(null,chunk__41917_41950,i__41919_41952);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41953,prov);


var G__41954 = seq__41916_41949;
var G__41955 = chunk__41917_41950;
var G__41956 = count__41918_41951;
var G__41957 = (i__41919_41952 + (1));
seq__41916_41949 = G__41954;
chunk__41917_41950 = G__41955;
count__41918_41951 = G__41956;
i__41919_41952 = G__41957;
continue;
} else {
var temp__5735__auto___41958__$1 = cljs.core.seq.call(null,seq__41916_41949);
if(temp__5735__auto___41958__$1){
var seq__41916_41959__$1 = temp__5735__auto___41958__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41916_41959__$1)){
var c__4550__auto___41960 = cljs.core.chunk_first.call(null,seq__41916_41959__$1);
var G__41961 = cljs.core.chunk_rest.call(null,seq__41916_41959__$1);
var G__41962 = c__4550__auto___41960;
var G__41963 = cljs.core.count.call(null,c__4550__auto___41960);
var G__41964 = (0);
seq__41916_41949 = G__41961;
chunk__41917_41950 = G__41962;
count__41918_41951 = G__41963;
i__41919_41952 = G__41964;
continue;
} else {
var req_41965 = cljs.core.first.call(null,seq__41916_41959__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41965,prov);


var G__41966 = cljs.core.next.call(null,seq__41916_41959__$1);
var G__41967 = null;
var G__41968 = (0);
var G__41969 = (0);
seq__41916_41949 = G__41966;
chunk__41917_41950 = G__41967;
count__41918_41951 = G__41968;
i__41919_41952 = G__41969;
continue;
}
} else {
}
}
break;
}


var G__41970 = cljs.core.next.call(null,seq__41900__$1);
var G__41971 = null;
var G__41972 = (0);
var G__41973 = (0);
seq__41900 = G__41970;
chunk__41901 = G__41971;
count__41902 = G__41972;
i__41903 = G__41973;
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
var seq__41974_41978 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41975_41979 = null;
var count__41976_41980 = (0);
var i__41977_41981 = (0);
while(true){
if((i__41977_41981 < count__41976_41980)){
var ns_41982 = cljs.core._nth.call(null,chunk__41975_41979,i__41977_41981);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41982);


var G__41983 = seq__41974_41978;
var G__41984 = chunk__41975_41979;
var G__41985 = count__41976_41980;
var G__41986 = (i__41977_41981 + (1));
seq__41974_41978 = G__41983;
chunk__41975_41979 = G__41984;
count__41976_41980 = G__41985;
i__41977_41981 = G__41986;
continue;
} else {
var temp__5735__auto___41987 = cljs.core.seq.call(null,seq__41974_41978);
if(temp__5735__auto___41987){
var seq__41974_41988__$1 = temp__5735__auto___41987;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41974_41988__$1)){
var c__4550__auto___41989 = cljs.core.chunk_first.call(null,seq__41974_41988__$1);
var G__41990 = cljs.core.chunk_rest.call(null,seq__41974_41988__$1);
var G__41991 = c__4550__auto___41989;
var G__41992 = cljs.core.count.call(null,c__4550__auto___41989);
var G__41993 = (0);
seq__41974_41978 = G__41990;
chunk__41975_41979 = G__41991;
count__41976_41980 = G__41992;
i__41977_41981 = G__41993;
continue;
} else {
var ns_41994 = cljs.core.first.call(null,seq__41974_41988__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41994);


var G__41995 = cljs.core.next.call(null,seq__41974_41988__$1);
var G__41996 = null;
var G__41997 = (0);
var G__41998 = (0);
seq__41974_41978 = G__41995;
chunk__41975_41979 = G__41996;
count__41976_41980 = G__41997;
i__41977_41981 = G__41998;
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
var G__41999__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41999 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42000__i = 0, G__42000__a = new Array(arguments.length -  0);
while (G__42000__i < G__42000__a.length) {G__42000__a[G__42000__i] = arguments[G__42000__i + 0]; ++G__42000__i;}
  args = new cljs.core.IndexedSeq(G__42000__a,0,null);
} 
return G__41999__delegate.call(this,args);};
G__41999.cljs$lang$maxFixedArity = 0;
G__41999.cljs$lang$applyTo = (function (arglist__42001){
var args = cljs.core.seq(arglist__42001);
return G__41999__delegate(args);
});
G__41999.cljs$core$IFn$_invoke$arity$variadic = G__41999__delegate;
return G__41999;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__42002_SHARP_,p2__42003_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42002_SHARP_)),p2__42003_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__42004_SHARP_,p2__42005_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42004_SHARP_),p2__42005_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__42006 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__42006.addCallback(((function (G__42006){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__42006))
);

G__42006.addErrback(((function (G__42006){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__42006))
);

return G__42006;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e42007){if((e42007 instanceof Error)){
var e = e42007;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42007;

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
}catch (e42008){if((e42008 instanceof Error)){
var e = e42008;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42008;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42009 = cljs.core._EQ_;
var expr__42010 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42009.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42010))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__42009.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42010))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__42009.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__42010))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__42009,expr__42010){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42009,expr__42010))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42012,callback){
var map__42013 = p__42012;
var map__42013__$1 = (((((!((map__42013 == null))))?(((((map__42013.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42013.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42013):map__42013);
var file_msg = map__42013__$1;
var request_url = cljs.core.get.call(null,map__42013__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__42013,map__42013__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42013,map__42013__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__){
return (function (state_42051){
var state_val_42052 = (state_42051[(1)]);
if((state_val_42052 === (7))){
var inst_42047 = (state_42051[(2)]);
var state_42051__$1 = state_42051;
var statearr_42053_42079 = state_42051__$1;
(statearr_42053_42079[(2)] = inst_42047);

(statearr_42053_42079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (1))){
var state_42051__$1 = state_42051;
var statearr_42054_42080 = state_42051__$1;
(statearr_42054_42080[(2)] = null);

(statearr_42054_42080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (4))){
var inst_42017 = (state_42051[(7)]);
var inst_42017__$1 = (state_42051[(2)]);
var state_42051__$1 = (function (){var statearr_42055 = state_42051;
(statearr_42055[(7)] = inst_42017__$1);

return statearr_42055;
})();
if(cljs.core.truth_(inst_42017__$1)){
var statearr_42056_42081 = state_42051__$1;
(statearr_42056_42081[(1)] = (5));

} else {
var statearr_42057_42082 = state_42051__$1;
(statearr_42057_42082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (15))){
var inst_42032 = (state_42051[(8)]);
var inst_42030 = (state_42051[(9)]);
var inst_42034 = inst_42032.call(null,inst_42030);
var state_42051__$1 = state_42051;
var statearr_42058_42083 = state_42051__$1;
(statearr_42058_42083[(2)] = inst_42034);

(statearr_42058_42083[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (13))){
var inst_42041 = (state_42051[(2)]);
var state_42051__$1 = state_42051;
var statearr_42059_42084 = state_42051__$1;
(statearr_42059_42084[(2)] = inst_42041);

(statearr_42059_42084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (6))){
var state_42051__$1 = state_42051;
var statearr_42060_42085 = state_42051__$1;
(statearr_42060_42085[(2)] = null);

(statearr_42060_42085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (17))){
var inst_42038 = (state_42051[(2)]);
var state_42051__$1 = state_42051;
var statearr_42061_42086 = state_42051__$1;
(statearr_42061_42086[(2)] = inst_42038);

(statearr_42061_42086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (3))){
var inst_42049 = (state_42051[(2)]);
var state_42051__$1 = state_42051;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42051__$1,inst_42049);
} else {
if((state_val_42052 === (12))){
var state_42051__$1 = state_42051;
var statearr_42062_42087 = state_42051__$1;
(statearr_42062_42087[(2)] = null);

(statearr_42062_42087[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (2))){
var state_42051__$1 = state_42051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42051__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42052 === (11))){
var inst_42022 = (state_42051[(10)]);
var inst_42028 = figwheel.client.file_reloading.blocking_load.call(null,inst_42022);
var state_42051__$1 = state_42051;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42051__$1,(14),inst_42028);
} else {
if((state_val_42052 === (9))){
var inst_42022 = (state_42051[(10)]);
var state_42051__$1 = state_42051;
if(cljs.core.truth_(inst_42022)){
var statearr_42063_42088 = state_42051__$1;
(statearr_42063_42088[(1)] = (11));

} else {
var statearr_42064_42089 = state_42051__$1;
(statearr_42064_42089[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (5))){
var inst_42023 = (state_42051[(11)]);
var inst_42017 = (state_42051[(7)]);
var inst_42022 = cljs.core.nth.call(null,inst_42017,(0),null);
var inst_42023__$1 = cljs.core.nth.call(null,inst_42017,(1),null);
var state_42051__$1 = (function (){var statearr_42065 = state_42051;
(statearr_42065[(11)] = inst_42023__$1);

(statearr_42065[(10)] = inst_42022);

return statearr_42065;
})();
if(cljs.core.truth_(inst_42023__$1)){
var statearr_42066_42090 = state_42051__$1;
(statearr_42066_42090[(1)] = (8));

} else {
var statearr_42067_42091 = state_42051__$1;
(statearr_42067_42091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (14))){
var inst_42032 = (state_42051[(8)]);
var inst_42022 = (state_42051[(10)]);
var inst_42030 = (state_42051[(2)]);
var inst_42031 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42032__$1 = cljs.core.get.call(null,inst_42031,inst_42022);
var state_42051__$1 = (function (){var statearr_42068 = state_42051;
(statearr_42068[(8)] = inst_42032__$1);

(statearr_42068[(9)] = inst_42030);

return statearr_42068;
})();
if(cljs.core.truth_(inst_42032__$1)){
var statearr_42069_42092 = state_42051__$1;
(statearr_42069_42092[(1)] = (15));

} else {
var statearr_42070_42093 = state_42051__$1;
(statearr_42070_42093[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (16))){
var inst_42030 = (state_42051[(9)]);
var inst_42036 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42030);
var state_42051__$1 = state_42051;
var statearr_42071_42094 = state_42051__$1;
(statearr_42071_42094[(2)] = inst_42036);

(statearr_42071_42094[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (10))){
var inst_42043 = (state_42051[(2)]);
var state_42051__$1 = (function (){var statearr_42072 = state_42051;
(statearr_42072[(12)] = inst_42043);

return statearr_42072;
})();
var statearr_42073_42095 = state_42051__$1;
(statearr_42073_42095[(2)] = null);

(statearr_42073_42095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42052 === (8))){
var inst_42023 = (state_42051[(11)]);
var inst_42025 = eval(inst_42023);
var state_42051__$1 = state_42051;
var statearr_42074_42096 = state_42051__$1;
(statearr_42074_42096[(2)] = inst_42025);

(statearr_42074_42096[(1)] = (10));


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
});})(c__37202__auto__))
;
return ((function (switch__37035__auto__,c__37202__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37036__auto__ = null;
var figwheel$client$file_reloading$state_machine__37036__auto____0 = (function (){
var statearr_42075 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42075[(0)] = figwheel$client$file_reloading$state_machine__37036__auto__);

(statearr_42075[(1)] = (1));

return statearr_42075;
});
var figwheel$client$file_reloading$state_machine__37036__auto____1 = (function (state_42051){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_42051);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e42076){if((e42076 instanceof Object)){
var ex__37039__auto__ = e42076;
var statearr_42077_42097 = state_42051;
(statearr_42077_42097[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42051);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42076;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42098 = state_42051;
state_42051 = G__42098;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37036__auto__ = function(state_42051){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37036__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37036__auto____1.call(this,state_42051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37036__auto____0;
figwheel$client$file_reloading$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37036__auto____1;
return figwheel$client$file_reloading$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__))
})();
var state__37204__auto__ = (function (){var statearr_42078 = f__37203__auto__.call(null);
(statearr_42078[(6)] = c__37202__auto__);

return statearr_42078;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__))
);

return c__37202__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__42100 = arguments.length;
switch (G__42100) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42102,callback){
var map__42103 = p__42102;
var map__42103__$1 = (((((!((map__42103 == null))))?(((((map__42103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42103):map__42103);
var file_msg = map__42103__$1;
var namespace = cljs.core.get.call(null,map__42103__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42103,map__42103__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42103,map__42103__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__42105){
var map__42106 = p__42105;
var map__42106__$1 = (((((!((map__42106 == null))))?(((((map__42106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42106):map__42106);
var file_msg = map__42106__$1;
var namespace = cljs.core.get.call(null,map__42106__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42108){
var map__42109 = p__42108;
var map__42109__$1 = (((((!((map__42109 == null))))?(((((map__42109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42109):map__42109);
var file_msg = map__42109__$1;
var namespace = cljs.core.get.call(null,map__42109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42111,callback){
var map__42112 = p__42111;
var map__42112__$1 = (((((!((map__42112 == null))))?(((((map__42112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42112):map__42112);
var file_msg = map__42112__$1;
var request_url = cljs.core.get.call(null,map__42112__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42112__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37202__auto___42162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___42162,out){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___42162,out){
return (function (state_42147){
var state_val_42148 = (state_42147[(1)]);
if((state_val_42148 === (1))){
var inst_42121 = cljs.core.seq.call(null,files);
var inst_42122 = cljs.core.first.call(null,inst_42121);
var inst_42123 = cljs.core.next.call(null,inst_42121);
var inst_42124 = files;
var state_42147__$1 = (function (){var statearr_42149 = state_42147;
(statearr_42149[(7)] = inst_42124);

(statearr_42149[(8)] = inst_42123);

(statearr_42149[(9)] = inst_42122);

return statearr_42149;
})();
var statearr_42150_42163 = state_42147__$1;
(statearr_42150_42163[(2)] = null);

(statearr_42150_42163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (2))){
var inst_42124 = (state_42147[(7)]);
var inst_42130 = (state_42147[(10)]);
var inst_42129 = cljs.core.seq.call(null,inst_42124);
var inst_42130__$1 = cljs.core.first.call(null,inst_42129);
var inst_42131 = cljs.core.next.call(null,inst_42129);
var inst_42132 = (inst_42130__$1 == null);
var inst_42133 = cljs.core.not.call(null,inst_42132);
var state_42147__$1 = (function (){var statearr_42151 = state_42147;
(statearr_42151[(11)] = inst_42131);

(statearr_42151[(10)] = inst_42130__$1);

return statearr_42151;
})();
if(inst_42133){
var statearr_42152_42164 = state_42147__$1;
(statearr_42152_42164[(1)] = (4));

} else {
var statearr_42153_42165 = state_42147__$1;
(statearr_42153_42165[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (3))){
var inst_42145 = (state_42147[(2)]);
var state_42147__$1 = state_42147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42147__$1,inst_42145);
} else {
if((state_val_42148 === (4))){
var inst_42130 = (state_42147[(10)]);
var inst_42135 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42130);
var state_42147__$1 = state_42147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42147__$1,(7),inst_42135);
} else {
if((state_val_42148 === (5))){
var inst_42141 = cljs.core.async.close_BANG_.call(null,out);
var state_42147__$1 = state_42147;
var statearr_42154_42166 = state_42147__$1;
(statearr_42154_42166[(2)] = inst_42141);

(statearr_42154_42166[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (6))){
var inst_42143 = (state_42147[(2)]);
var state_42147__$1 = state_42147;
var statearr_42155_42167 = state_42147__$1;
(statearr_42155_42167[(2)] = inst_42143);

(statearr_42155_42167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42148 === (7))){
var inst_42131 = (state_42147[(11)]);
var inst_42137 = (state_42147[(2)]);
var inst_42138 = cljs.core.async.put_BANG_.call(null,out,inst_42137);
var inst_42124 = inst_42131;
var state_42147__$1 = (function (){var statearr_42156 = state_42147;
(statearr_42156[(7)] = inst_42124);

(statearr_42156[(12)] = inst_42138);

return statearr_42156;
})();
var statearr_42157_42168 = state_42147__$1;
(statearr_42157_42168[(2)] = null);

(statearr_42157_42168[(1)] = (2));


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
});})(c__37202__auto___42162,out))
;
return ((function (switch__37035__auto__,c__37202__auto___42162,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto____0 = (function (){
var statearr_42158 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42158[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto__);

(statearr_42158[(1)] = (1));

return statearr_42158;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto____1 = (function (state_42147){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_42147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e42159){if((e42159 instanceof Object)){
var ex__37039__auto__ = e42159;
var statearr_42160_42169 = state_42147;
(statearr_42160_42169[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42170 = state_42147;
state_42147 = G__42170;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto__ = function(state_42147){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto____1.call(this,state_42147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___42162,out))
})();
var state__37204__auto__ = (function (){var statearr_42161 = f__37203__auto__.call(null);
(statearr_42161[(6)] = c__37202__auto___42162);

return statearr_42161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___42162,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42171,opts){
var map__42172 = p__42171;
var map__42172__$1 = (((((!((map__42172 == null))))?(((((map__42172.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42172.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42172):map__42172);
var eval_body = cljs.core.get.call(null,map__42172__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42172__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e42174){var e = e42174;
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
return (function (p1__42175_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42175_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__42176){
var vec__42177 = p__42176;
var k = cljs.core.nth.call(null,vec__42177,(0),null);
var v = cljs.core.nth.call(null,vec__42177,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42180){
var vec__42181 = p__42180;
var k = cljs.core.nth.call(null,vec__42181,(0),null);
var v = cljs.core.nth.call(null,vec__42181,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42187,p__42188){
var map__42189 = p__42187;
var map__42189__$1 = (((((!((map__42189 == null))))?(((((map__42189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42189):map__42189);
var opts = map__42189__$1;
var before_jsload = cljs.core.get.call(null,map__42189__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42189__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42189__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42190 = p__42188;
var map__42190__$1 = (((((!((map__42190 == null))))?(((((map__42190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42190):map__42190);
var msg = map__42190__$1;
var files = cljs.core.get.call(null,map__42190__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42190__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42190__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42344){
var state_val_42345 = (state_42344[(1)]);
if((state_val_42345 === (7))){
var inst_42205 = (state_42344[(7)]);
var inst_42206 = (state_42344[(8)]);
var inst_42207 = (state_42344[(9)]);
var inst_42204 = (state_42344[(10)]);
var inst_42212 = cljs.core._nth.call(null,inst_42205,inst_42207);
var inst_42213 = figwheel.client.file_reloading.eval_body.call(null,inst_42212,opts);
var inst_42214 = (inst_42207 + (1));
var tmp42346 = inst_42205;
var tmp42347 = inst_42206;
var tmp42348 = inst_42204;
var inst_42204__$1 = tmp42348;
var inst_42205__$1 = tmp42346;
var inst_42206__$1 = tmp42347;
var inst_42207__$1 = inst_42214;
var state_42344__$1 = (function (){var statearr_42349 = state_42344;
(statearr_42349[(7)] = inst_42205__$1);

(statearr_42349[(8)] = inst_42206__$1);

(statearr_42349[(9)] = inst_42207__$1);

(statearr_42349[(11)] = inst_42213);

(statearr_42349[(10)] = inst_42204__$1);

return statearr_42349;
})();
var statearr_42350_42433 = state_42344__$1;
(statearr_42350_42433[(2)] = null);

(statearr_42350_42433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (20))){
var inst_42247 = (state_42344[(12)]);
var inst_42255 = figwheel.client.file_reloading.sort_files.call(null,inst_42247);
var state_42344__$1 = state_42344;
var statearr_42351_42434 = state_42344__$1;
(statearr_42351_42434[(2)] = inst_42255);

(statearr_42351_42434[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (27))){
var state_42344__$1 = state_42344;
var statearr_42352_42435 = state_42344__$1;
(statearr_42352_42435[(2)] = null);

(statearr_42352_42435[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (1))){
var inst_42196 = (state_42344[(13)]);
var inst_42193 = before_jsload.call(null,files);
var inst_42194 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42195 = (function (){return ((function (inst_42196,inst_42193,inst_42194,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42184_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42184_SHARP_);
});
;})(inst_42196,inst_42193,inst_42194,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42196__$1 = cljs.core.filter.call(null,inst_42195,files);
var inst_42197 = cljs.core.not_empty.call(null,inst_42196__$1);
var state_42344__$1 = (function (){var statearr_42353 = state_42344;
(statearr_42353[(14)] = inst_42193);

(statearr_42353[(15)] = inst_42194);

(statearr_42353[(13)] = inst_42196__$1);

return statearr_42353;
})();
if(cljs.core.truth_(inst_42197)){
var statearr_42354_42436 = state_42344__$1;
(statearr_42354_42436[(1)] = (2));

} else {
var statearr_42355_42437 = state_42344__$1;
(statearr_42355_42437[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (24))){
var state_42344__$1 = state_42344;
var statearr_42356_42438 = state_42344__$1;
(statearr_42356_42438[(2)] = null);

(statearr_42356_42438[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (39))){
var inst_42297 = (state_42344[(16)]);
var state_42344__$1 = state_42344;
var statearr_42357_42439 = state_42344__$1;
(statearr_42357_42439[(2)] = inst_42297);

(statearr_42357_42439[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (46))){
var inst_42339 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42358_42440 = state_42344__$1;
(statearr_42358_42440[(2)] = inst_42339);

(statearr_42358_42440[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (4))){
var inst_42241 = (state_42344[(2)]);
var inst_42242 = cljs.core.List.EMPTY;
var inst_42243 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42242);
var inst_42244 = (function (){return ((function (inst_42241,inst_42242,inst_42243,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42185_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42185_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42185_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__42185_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_42241,inst_42242,inst_42243,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42245 = cljs.core.filter.call(null,inst_42244,files);
var inst_42246 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42247 = cljs.core.concat.call(null,inst_42245,inst_42246);
var state_42344__$1 = (function (){var statearr_42359 = state_42344;
(statearr_42359[(12)] = inst_42247);

(statearr_42359[(17)] = inst_42243);

(statearr_42359[(18)] = inst_42241);

return statearr_42359;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42360_42441 = state_42344__$1;
(statearr_42360_42441[(1)] = (16));

} else {
var statearr_42361_42442 = state_42344__$1;
(statearr_42361_42442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (15))){
var inst_42231 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42362_42443 = state_42344__$1;
(statearr_42362_42443[(2)] = inst_42231);

(statearr_42362_42443[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (21))){
var inst_42257 = (state_42344[(19)]);
var inst_42257__$1 = (state_42344[(2)]);
var inst_42258 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42257__$1);
var state_42344__$1 = (function (){var statearr_42363 = state_42344;
(statearr_42363[(19)] = inst_42257__$1);

return statearr_42363;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42344__$1,(22),inst_42258);
} else {
if((state_val_42345 === (31))){
var inst_42342 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42344__$1,inst_42342);
} else {
if((state_val_42345 === (32))){
var inst_42297 = (state_42344[(16)]);
var inst_42302 = inst_42297.cljs$lang$protocol_mask$partition0$;
var inst_42303 = (inst_42302 & (64));
var inst_42304 = inst_42297.cljs$core$ISeq$;
var inst_42305 = (cljs.core.PROTOCOL_SENTINEL === inst_42304);
var inst_42306 = ((inst_42303) || (inst_42305));
var state_42344__$1 = state_42344;
if(cljs.core.truth_(inst_42306)){
var statearr_42364_42444 = state_42344__$1;
(statearr_42364_42444[(1)] = (35));

} else {
var statearr_42365_42445 = state_42344__$1;
(statearr_42365_42445[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (40))){
var inst_42319 = (state_42344[(20)]);
var inst_42318 = (state_42344[(2)]);
var inst_42319__$1 = cljs.core.get.call(null,inst_42318,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42320 = cljs.core.get.call(null,inst_42318,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42321 = cljs.core.not_empty.call(null,inst_42319__$1);
var state_42344__$1 = (function (){var statearr_42366 = state_42344;
(statearr_42366[(21)] = inst_42320);

(statearr_42366[(20)] = inst_42319__$1);

return statearr_42366;
})();
if(cljs.core.truth_(inst_42321)){
var statearr_42367_42446 = state_42344__$1;
(statearr_42367_42446[(1)] = (41));

} else {
var statearr_42368_42447 = state_42344__$1;
(statearr_42368_42447[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (33))){
var state_42344__$1 = state_42344;
var statearr_42369_42448 = state_42344__$1;
(statearr_42369_42448[(2)] = false);

(statearr_42369_42448[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (13))){
var inst_42217 = (state_42344[(22)]);
var inst_42221 = cljs.core.chunk_first.call(null,inst_42217);
var inst_42222 = cljs.core.chunk_rest.call(null,inst_42217);
var inst_42223 = cljs.core.count.call(null,inst_42221);
var inst_42204 = inst_42222;
var inst_42205 = inst_42221;
var inst_42206 = inst_42223;
var inst_42207 = (0);
var state_42344__$1 = (function (){var statearr_42370 = state_42344;
(statearr_42370[(7)] = inst_42205);

(statearr_42370[(8)] = inst_42206);

(statearr_42370[(9)] = inst_42207);

(statearr_42370[(10)] = inst_42204);

return statearr_42370;
})();
var statearr_42371_42449 = state_42344__$1;
(statearr_42371_42449[(2)] = null);

(statearr_42371_42449[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (22))){
var inst_42265 = (state_42344[(23)]);
var inst_42261 = (state_42344[(24)]);
var inst_42257 = (state_42344[(19)]);
var inst_42260 = (state_42344[(25)]);
var inst_42260__$1 = (state_42344[(2)]);
var inst_42261__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42260__$1);
var inst_42262 = (function (){var all_files = inst_42257;
var res_SINGLEQUOTE_ = inst_42260__$1;
var res = inst_42261__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42265,inst_42261,inst_42257,inst_42260,inst_42260__$1,inst_42261__$1,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42186_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42186_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42265,inst_42261,inst_42257,inst_42260,inst_42260__$1,inst_42261__$1,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42263 = cljs.core.filter.call(null,inst_42262,inst_42260__$1);
var inst_42264 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42265__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42264);
var inst_42266 = cljs.core.not_empty.call(null,inst_42265__$1);
var state_42344__$1 = (function (){var statearr_42372 = state_42344;
(statearr_42372[(23)] = inst_42265__$1);

(statearr_42372[(24)] = inst_42261__$1);

(statearr_42372[(25)] = inst_42260__$1);

(statearr_42372[(26)] = inst_42263);

return statearr_42372;
})();
if(cljs.core.truth_(inst_42266)){
var statearr_42373_42450 = state_42344__$1;
(statearr_42373_42450[(1)] = (23));

} else {
var statearr_42374_42451 = state_42344__$1;
(statearr_42374_42451[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (36))){
var state_42344__$1 = state_42344;
var statearr_42375_42452 = state_42344__$1;
(statearr_42375_42452[(2)] = false);

(statearr_42375_42452[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (41))){
var inst_42319 = (state_42344[(20)]);
var inst_42323 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42324 = cljs.core.map.call(null,inst_42323,inst_42319);
var inst_42325 = cljs.core.pr_str.call(null,inst_42324);
var inst_42326 = ["figwheel-no-load meta-data: ",inst_42325].join('');
var inst_42327 = figwheel.client.utils.log.call(null,inst_42326);
var state_42344__$1 = state_42344;
var statearr_42376_42453 = state_42344__$1;
(statearr_42376_42453[(2)] = inst_42327);

(statearr_42376_42453[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (43))){
var inst_42320 = (state_42344[(21)]);
var inst_42330 = (state_42344[(2)]);
var inst_42331 = cljs.core.not_empty.call(null,inst_42320);
var state_42344__$1 = (function (){var statearr_42377 = state_42344;
(statearr_42377[(27)] = inst_42330);

return statearr_42377;
})();
if(cljs.core.truth_(inst_42331)){
var statearr_42378_42454 = state_42344__$1;
(statearr_42378_42454[(1)] = (44));

} else {
var statearr_42379_42455 = state_42344__$1;
(statearr_42379_42455[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (29))){
var inst_42265 = (state_42344[(23)]);
var inst_42261 = (state_42344[(24)]);
var inst_42257 = (state_42344[(19)]);
var inst_42260 = (state_42344[(25)]);
var inst_42297 = (state_42344[(16)]);
var inst_42263 = (state_42344[(26)]);
var inst_42293 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42296 = (function (){var all_files = inst_42257;
var res_SINGLEQUOTE_ = inst_42260;
var res = inst_42261;
var files_not_loaded = inst_42263;
var dependencies_that_loaded = inst_42265;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42265,inst_42261,inst_42257,inst_42260,inst_42297,inst_42263,inst_42293,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42295){
var map__42380 = p__42295;
var map__42380__$1 = (((((!((map__42380 == null))))?(((((map__42380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42380):map__42380);
var namespace = cljs.core.get.call(null,map__42380__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42265,inst_42261,inst_42257,inst_42260,inst_42297,inst_42263,inst_42293,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42297__$1 = cljs.core.group_by.call(null,inst_42296,inst_42263);
var inst_42299 = (inst_42297__$1 == null);
var inst_42300 = cljs.core.not.call(null,inst_42299);
var state_42344__$1 = (function (){var statearr_42382 = state_42344;
(statearr_42382[(16)] = inst_42297__$1);

(statearr_42382[(28)] = inst_42293);

return statearr_42382;
})();
if(inst_42300){
var statearr_42383_42456 = state_42344__$1;
(statearr_42383_42456[(1)] = (32));

} else {
var statearr_42384_42457 = state_42344__$1;
(statearr_42384_42457[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (44))){
var inst_42320 = (state_42344[(21)]);
var inst_42333 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42320);
var inst_42334 = cljs.core.pr_str.call(null,inst_42333);
var inst_42335 = ["not required: ",inst_42334].join('');
var inst_42336 = figwheel.client.utils.log.call(null,inst_42335);
var state_42344__$1 = state_42344;
var statearr_42385_42458 = state_42344__$1;
(statearr_42385_42458[(2)] = inst_42336);

(statearr_42385_42458[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (6))){
var inst_42238 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42386_42459 = state_42344__$1;
(statearr_42386_42459[(2)] = inst_42238);

(statearr_42386_42459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (28))){
var inst_42263 = (state_42344[(26)]);
var inst_42290 = (state_42344[(2)]);
var inst_42291 = cljs.core.not_empty.call(null,inst_42263);
var state_42344__$1 = (function (){var statearr_42387 = state_42344;
(statearr_42387[(29)] = inst_42290);

return statearr_42387;
})();
if(cljs.core.truth_(inst_42291)){
var statearr_42388_42460 = state_42344__$1;
(statearr_42388_42460[(1)] = (29));

} else {
var statearr_42389_42461 = state_42344__$1;
(statearr_42389_42461[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (25))){
var inst_42261 = (state_42344[(24)]);
var inst_42277 = (state_42344[(2)]);
var inst_42278 = cljs.core.not_empty.call(null,inst_42261);
var state_42344__$1 = (function (){var statearr_42390 = state_42344;
(statearr_42390[(30)] = inst_42277);

return statearr_42390;
})();
if(cljs.core.truth_(inst_42278)){
var statearr_42391_42462 = state_42344__$1;
(statearr_42391_42462[(1)] = (26));

} else {
var statearr_42392_42463 = state_42344__$1;
(statearr_42392_42463[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (34))){
var inst_42313 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
if(cljs.core.truth_(inst_42313)){
var statearr_42393_42464 = state_42344__$1;
(statearr_42393_42464[(1)] = (38));

} else {
var statearr_42394_42465 = state_42344__$1;
(statearr_42394_42465[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (17))){
var state_42344__$1 = state_42344;
var statearr_42395_42466 = state_42344__$1;
(statearr_42395_42466[(2)] = recompile_dependents);

(statearr_42395_42466[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (3))){
var state_42344__$1 = state_42344;
var statearr_42396_42467 = state_42344__$1;
(statearr_42396_42467[(2)] = null);

(statearr_42396_42467[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (12))){
var inst_42234 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42397_42468 = state_42344__$1;
(statearr_42397_42468[(2)] = inst_42234);

(statearr_42397_42468[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (2))){
var inst_42196 = (state_42344[(13)]);
var inst_42203 = cljs.core.seq.call(null,inst_42196);
var inst_42204 = inst_42203;
var inst_42205 = null;
var inst_42206 = (0);
var inst_42207 = (0);
var state_42344__$1 = (function (){var statearr_42398 = state_42344;
(statearr_42398[(7)] = inst_42205);

(statearr_42398[(8)] = inst_42206);

(statearr_42398[(9)] = inst_42207);

(statearr_42398[(10)] = inst_42204);

return statearr_42398;
})();
var statearr_42399_42469 = state_42344__$1;
(statearr_42399_42469[(2)] = null);

(statearr_42399_42469[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (23))){
var inst_42265 = (state_42344[(23)]);
var inst_42261 = (state_42344[(24)]);
var inst_42257 = (state_42344[(19)]);
var inst_42260 = (state_42344[(25)]);
var inst_42263 = (state_42344[(26)]);
var inst_42268 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42270 = (function (){var all_files = inst_42257;
var res_SINGLEQUOTE_ = inst_42260;
var res = inst_42261;
var files_not_loaded = inst_42263;
var dependencies_that_loaded = inst_42265;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42265,inst_42261,inst_42257,inst_42260,inst_42263,inst_42268,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42269){
var map__42400 = p__42269;
var map__42400__$1 = (((((!((map__42400 == null))))?(((((map__42400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42400):map__42400);
var request_url = cljs.core.get.call(null,map__42400__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42265,inst_42261,inst_42257,inst_42260,inst_42263,inst_42268,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42271 = cljs.core.reverse.call(null,inst_42265);
var inst_42272 = cljs.core.map.call(null,inst_42270,inst_42271);
var inst_42273 = cljs.core.pr_str.call(null,inst_42272);
var inst_42274 = figwheel.client.utils.log.call(null,inst_42273);
var state_42344__$1 = (function (){var statearr_42402 = state_42344;
(statearr_42402[(31)] = inst_42268);

return statearr_42402;
})();
var statearr_42403_42470 = state_42344__$1;
(statearr_42403_42470[(2)] = inst_42274);

(statearr_42403_42470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (35))){
var state_42344__$1 = state_42344;
var statearr_42404_42471 = state_42344__$1;
(statearr_42404_42471[(2)] = true);

(statearr_42404_42471[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (19))){
var inst_42247 = (state_42344[(12)]);
var inst_42253 = figwheel.client.file_reloading.expand_files.call(null,inst_42247);
var state_42344__$1 = state_42344;
var statearr_42405_42472 = state_42344__$1;
(statearr_42405_42472[(2)] = inst_42253);

(statearr_42405_42472[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (11))){
var state_42344__$1 = state_42344;
var statearr_42406_42473 = state_42344__$1;
(statearr_42406_42473[(2)] = null);

(statearr_42406_42473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (9))){
var inst_42236 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42407_42474 = state_42344__$1;
(statearr_42407_42474[(2)] = inst_42236);

(statearr_42407_42474[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (5))){
var inst_42206 = (state_42344[(8)]);
var inst_42207 = (state_42344[(9)]);
var inst_42209 = (inst_42207 < inst_42206);
var inst_42210 = inst_42209;
var state_42344__$1 = state_42344;
if(cljs.core.truth_(inst_42210)){
var statearr_42408_42475 = state_42344__$1;
(statearr_42408_42475[(1)] = (7));

} else {
var statearr_42409_42476 = state_42344__$1;
(statearr_42409_42476[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (14))){
var inst_42217 = (state_42344[(22)]);
var inst_42226 = cljs.core.first.call(null,inst_42217);
var inst_42227 = figwheel.client.file_reloading.eval_body.call(null,inst_42226,opts);
var inst_42228 = cljs.core.next.call(null,inst_42217);
var inst_42204 = inst_42228;
var inst_42205 = null;
var inst_42206 = (0);
var inst_42207 = (0);
var state_42344__$1 = (function (){var statearr_42410 = state_42344;
(statearr_42410[(32)] = inst_42227);

(statearr_42410[(7)] = inst_42205);

(statearr_42410[(8)] = inst_42206);

(statearr_42410[(9)] = inst_42207);

(statearr_42410[(10)] = inst_42204);

return statearr_42410;
})();
var statearr_42411_42477 = state_42344__$1;
(statearr_42411_42477[(2)] = null);

(statearr_42411_42477[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (45))){
var state_42344__$1 = state_42344;
var statearr_42412_42478 = state_42344__$1;
(statearr_42412_42478[(2)] = null);

(statearr_42412_42478[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (26))){
var inst_42265 = (state_42344[(23)]);
var inst_42261 = (state_42344[(24)]);
var inst_42257 = (state_42344[(19)]);
var inst_42260 = (state_42344[(25)]);
var inst_42263 = (state_42344[(26)]);
var inst_42280 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42282 = (function (){var all_files = inst_42257;
var res_SINGLEQUOTE_ = inst_42260;
var res = inst_42261;
var files_not_loaded = inst_42263;
var dependencies_that_loaded = inst_42265;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42265,inst_42261,inst_42257,inst_42260,inst_42263,inst_42280,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42281){
var map__42413 = p__42281;
var map__42413__$1 = (((((!((map__42413 == null))))?(((((map__42413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42413):map__42413);
var namespace = cljs.core.get.call(null,map__42413__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42265,inst_42261,inst_42257,inst_42260,inst_42263,inst_42280,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42283 = cljs.core.map.call(null,inst_42282,inst_42261);
var inst_42284 = cljs.core.pr_str.call(null,inst_42283);
var inst_42285 = figwheel.client.utils.log.call(null,inst_42284);
var inst_42286 = (function (){var all_files = inst_42257;
var res_SINGLEQUOTE_ = inst_42260;
var res = inst_42261;
var files_not_loaded = inst_42263;
var dependencies_that_loaded = inst_42265;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42265,inst_42261,inst_42257,inst_42260,inst_42263,inst_42280,inst_42282,inst_42283,inst_42284,inst_42285,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42265,inst_42261,inst_42257,inst_42260,inst_42263,inst_42280,inst_42282,inst_42283,inst_42284,inst_42285,state_val_42345,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42287 = setTimeout(inst_42286,(10));
var state_42344__$1 = (function (){var statearr_42415 = state_42344;
(statearr_42415[(33)] = inst_42280);

(statearr_42415[(34)] = inst_42285);

return statearr_42415;
})();
var statearr_42416_42479 = state_42344__$1;
(statearr_42416_42479[(2)] = inst_42287);

(statearr_42416_42479[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (16))){
var state_42344__$1 = state_42344;
var statearr_42417_42480 = state_42344__$1;
(statearr_42417_42480[(2)] = reload_dependents);

(statearr_42417_42480[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (38))){
var inst_42297 = (state_42344[(16)]);
var inst_42315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42297);
var state_42344__$1 = state_42344;
var statearr_42418_42481 = state_42344__$1;
(statearr_42418_42481[(2)] = inst_42315);

(statearr_42418_42481[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (30))){
var state_42344__$1 = state_42344;
var statearr_42419_42482 = state_42344__$1;
(statearr_42419_42482[(2)] = null);

(statearr_42419_42482[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (10))){
var inst_42217 = (state_42344[(22)]);
var inst_42219 = cljs.core.chunked_seq_QMARK_.call(null,inst_42217);
var state_42344__$1 = state_42344;
if(inst_42219){
var statearr_42420_42483 = state_42344__$1;
(statearr_42420_42483[(1)] = (13));

} else {
var statearr_42421_42484 = state_42344__$1;
(statearr_42421_42484[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (18))){
var inst_42251 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
if(cljs.core.truth_(inst_42251)){
var statearr_42422_42485 = state_42344__$1;
(statearr_42422_42485[(1)] = (19));

} else {
var statearr_42423_42486 = state_42344__$1;
(statearr_42423_42486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (42))){
var state_42344__$1 = state_42344;
var statearr_42424_42487 = state_42344__$1;
(statearr_42424_42487[(2)] = null);

(statearr_42424_42487[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (37))){
var inst_42310 = (state_42344[(2)]);
var state_42344__$1 = state_42344;
var statearr_42425_42488 = state_42344__$1;
(statearr_42425_42488[(2)] = inst_42310);

(statearr_42425_42488[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42345 === (8))){
var inst_42217 = (state_42344[(22)]);
var inst_42204 = (state_42344[(10)]);
var inst_42217__$1 = cljs.core.seq.call(null,inst_42204);
var state_42344__$1 = (function (){var statearr_42426 = state_42344;
(statearr_42426[(22)] = inst_42217__$1);

return statearr_42426;
})();
if(inst_42217__$1){
var statearr_42427_42489 = state_42344__$1;
(statearr_42427_42489[(1)] = (10));

} else {
var statearr_42428_42490 = state_42344__$1;
(statearr_42428_42490[(1)] = (11));

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
});})(c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37035__auto__,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto____0 = (function (){
var statearr_42429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42429[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto__);

(statearr_42429[(1)] = (1));

return statearr_42429;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto____1 = (function (state_42344){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_42344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e42430){if((e42430 instanceof Object)){
var ex__37039__auto__ = e42430;
var statearr_42431_42491 = state_42344;
(statearr_42431_42491[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42492 = state_42344;
state_42344 = G__42492;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto__ = function(state_42344){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto____1.call(this,state_42344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37204__auto__ = (function (){var statearr_42432 = f__37203__auto__.call(null);
(statearr_42432[(6)] = c__37202__auto__);

return statearr_42432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__,map__42189,map__42189__$1,opts,before_jsload,on_jsload,reload_dependents,map__42190,map__42190__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37202__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42495,link){
var map__42496 = p__42495;
var map__42496__$1 = (((((!((map__42496 == null))))?(((((map__42496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42496):map__42496);
var file = cljs.core.get.call(null,map__42496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__42496,map__42496__$1,file){
return (function (p1__42493_SHARP_,p2__42494_SHARP_){
if(cljs.core._EQ_.call(null,p1__42493_SHARP_,p2__42494_SHARP_)){
return p1__42493_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__42496,map__42496__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42499){
var map__42500 = p__42499;
var map__42500__$1 = (((((!((map__42500 == null))))?(((((map__42500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42500):map__42500);
var match_length = cljs.core.get.call(null,map__42500__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42500__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42498_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42498_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42502_SHARP_,p2__42503_SHARP_){
return cljs.core.assoc.call(null,p1__42502_SHARP_,cljs.core.get.call(null,p2__42503_SHARP_,key),p2__42503_SHARP_);
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
var loaded_f_datas_42504 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42504);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42504);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42505,p__42506){
var map__42507 = p__42505;
var map__42507__$1 = (((((!((map__42507 == null))))?(((((map__42507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42507):map__42507);
var on_cssload = cljs.core.get.call(null,map__42507__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42508 = p__42506;
var map__42508__$1 = (((((!((map__42508 == null))))?(((((map__42508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42508):map__42508);
var files_msg = map__42508__$1;
var files = cljs.core.get.call(null,map__42508__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1562998442296
