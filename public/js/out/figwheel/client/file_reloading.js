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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__46690_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__46690_SHARP_));
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
var seq__46691 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__46692 = null;
var count__46693 = (0);
var i__46694 = (0);
while(true){
if((i__46694 < count__46693)){
var n = cljs.core._nth.call(null,chunk__46692,i__46694);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__46695 = seq__46691;
var G__46696 = chunk__46692;
var G__46697 = count__46693;
var G__46698 = (i__46694 + (1));
seq__46691 = G__46695;
chunk__46692 = G__46696;
count__46693 = G__46697;
i__46694 = G__46698;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46691);
if(temp__5735__auto__){
var seq__46691__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46691__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46691__$1);
var G__46699 = cljs.core.chunk_rest.call(null,seq__46691__$1);
var G__46700 = c__4550__auto__;
var G__46701 = cljs.core.count.call(null,c__4550__auto__);
var G__46702 = (0);
seq__46691 = G__46699;
chunk__46692 = G__46700;
count__46693 = G__46701;
i__46694 = G__46702;
continue;
} else {
var n = cljs.core.first.call(null,seq__46691__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__46703 = cljs.core.next.call(null,seq__46691__$1);
var G__46704 = null;
var G__46705 = (0);
var G__46706 = (0);
seq__46691 = G__46703;
chunk__46692 = G__46704;
count__46693 = G__46705;
i__46694 = G__46706;
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
return cljs.core.some.call(null,(function (p__46707){
var vec__46708 = p__46707;
var _ = cljs.core.nth.call(null,vec__46708,(0),null);
var v = cljs.core.nth.call(null,vec__46708,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__46711){
var vec__46712 = p__46711;
var k = cljs.core.nth.call(null,vec__46712,(0),null);
var v = cljs.core.nth.call(null,vec__46712,(1),null);
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

var seq__46724_46732 = cljs.core.seq.call(null,deps);
var chunk__46725_46733 = null;
var count__46726_46734 = (0);
var i__46727_46735 = (0);
while(true){
if((i__46727_46735 < count__46726_46734)){
var dep_46736 = cljs.core._nth.call(null,chunk__46725_46733,i__46727_46735);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_46736;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_46736));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_46736,(depth + (1)),state);
} else {
}


var G__46737 = seq__46724_46732;
var G__46738 = chunk__46725_46733;
var G__46739 = count__46726_46734;
var G__46740 = (i__46727_46735 + (1));
seq__46724_46732 = G__46737;
chunk__46725_46733 = G__46738;
count__46726_46734 = G__46739;
i__46727_46735 = G__46740;
continue;
} else {
var temp__5735__auto___46741 = cljs.core.seq.call(null,seq__46724_46732);
if(temp__5735__auto___46741){
var seq__46724_46742__$1 = temp__5735__auto___46741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46724_46742__$1)){
var c__4550__auto___46743 = cljs.core.chunk_first.call(null,seq__46724_46742__$1);
var G__46744 = cljs.core.chunk_rest.call(null,seq__46724_46742__$1);
var G__46745 = c__4550__auto___46743;
var G__46746 = cljs.core.count.call(null,c__4550__auto___46743);
var G__46747 = (0);
seq__46724_46732 = G__46744;
chunk__46725_46733 = G__46745;
count__46726_46734 = G__46746;
i__46727_46735 = G__46747;
continue;
} else {
var dep_46748 = cljs.core.first.call(null,seq__46724_46742__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_46748;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_46748));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_46748,(depth + (1)),state);
} else {
}


var G__46749 = cljs.core.next.call(null,seq__46724_46742__$1);
var G__46750 = null;
var G__46751 = (0);
var G__46752 = (0);
seq__46724_46732 = G__46749;
chunk__46725_46733 = G__46750;
count__46726_46734 = G__46751;
i__46727_46735 = G__46752;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__46728){
var vec__46729 = p__46728;
var seq__46730 = cljs.core.seq.call(null,vec__46729);
var first__46731 = cljs.core.first.call(null,seq__46730);
var seq__46730__$1 = cljs.core.next.call(null,seq__46730);
var x = first__46731;
var xs = seq__46730__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__46729,seq__46730,first__46731,seq__46730__$1,x,xs,get_deps__$1){
return (function (p1__46715_SHARP_){
return clojure.set.difference.call(null,p1__46715_SHARP_,x);
});})(vec__46729,seq__46730,first__46731,seq__46730__$1,x,xs,get_deps__$1))
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
var seq__46753 = cljs.core.seq.call(null,provides);
var chunk__46754 = null;
var count__46755 = (0);
var i__46756 = (0);
while(true){
if((i__46756 < count__46755)){
var prov = cljs.core._nth.call(null,chunk__46754,i__46756);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46765_46773 = cljs.core.seq.call(null,requires);
var chunk__46766_46774 = null;
var count__46767_46775 = (0);
var i__46768_46776 = (0);
while(true){
if((i__46768_46776 < count__46767_46775)){
var req_46777 = cljs.core._nth.call(null,chunk__46766_46774,i__46768_46776);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46777,prov);


var G__46778 = seq__46765_46773;
var G__46779 = chunk__46766_46774;
var G__46780 = count__46767_46775;
var G__46781 = (i__46768_46776 + (1));
seq__46765_46773 = G__46778;
chunk__46766_46774 = G__46779;
count__46767_46775 = G__46780;
i__46768_46776 = G__46781;
continue;
} else {
var temp__5735__auto___46782 = cljs.core.seq.call(null,seq__46765_46773);
if(temp__5735__auto___46782){
var seq__46765_46783__$1 = temp__5735__auto___46782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46765_46783__$1)){
var c__4550__auto___46784 = cljs.core.chunk_first.call(null,seq__46765_46783__$1);
var G__46785 = cljs.core.chunk_rest.call(null,seq__46765_46783__$1);
var G__46786 = c__4550__auto___46784;
var G__46787 = cljs.core.count.call(null,c__4550__auto___46784);
var G__46788 = (0);
seq__46765_46773 = G__46785;
chunk__46766_46774 = G__46786;
count__46767_46775 = G__46787;
i__46768_46776 = G__46788;
continue;
} else {
var req_46789 = cljs.core.first.call(null,seq__46765_46783__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46789,prov);


var G__46790 = cljs.core.next.call(null,seq__46765_46783__$1);
var G__46791 = null;
var G__46792 = (0);
var G__46793 = (0);
seq__46765_46773 = G__46790;
chunk__46766_46774 = G__46791;
count__46767_46775 = G__46792;
i__46768_46776 = G__46793;
continue;
}
} else {
}
}
break;
}


var G__46794 = seq__46753;
var G__46795 = chunk__46754;
var G__46796 = count__46755;
var G__46797 = (i__46756 + (1));
seq__46753 = G__46794;
chunk__46754 = G__46795;
count__46755 = G__46796;
i__46756 = G__46797;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__46753);
if(temp__5735__auto__){
var seq__46753__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46753__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__46753__$1);
var G__46798 = cljs.core.chunk_rest.call(null,seq__46753__$1);
var G__46799 = c__4550__auto__;
var G__46800 = cljs.core.count.call(null,c__4550__auto__);
var G__46801 = (0);
seq__46753 = G__46798;
chunk__46754 = G__46799;
count__46755 = G__46800;
i__46756 = G__46801;
continue;
} else {
var prov = cljs.core.first.call(null,seq__46753__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__46769_46802 = cljs.core.seq.call(null,requires);
var chunk__46770_46803 = null;
var count__46771_46804 = (0);
var i__46772_46805 = (0);
while(true){
if((i__46772_46805 < count__46771_46804)){
var req_46806 = cljs.core._nth.call(null,chunk__46770_46803,i__46772_46805);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46806,prov);


var G__46807 = seq__46769_46802;
var G__46808 = chunk__46770_46803;
var G__46809 = count__46771_46804;
var G__46810 = (i__46772_46805 + (1));
seq__46769_46802 = G__46807;
chunk__46770_46803 = G__46808;
count__46771_46804 = G__46809;
i__46772_46805 = G__46810;
continue;
} else {
var temp__5735__auto___46811__$1 = cljs.core.seq.call(null,seq__46769_46802);
if(temp__5735__auto___46811__$1){
var seq__46769_46812__$1 = temp__5735__auto___46811__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46769_46812__$1)){
var c__4550__auto___46813 = cljs.core.chunk_first.call(null,seq__46769_46812__$1);
var G__46814 = cljs.core.chunk_rest.call(null,seq__46769_46812__$1);
var G__46815 = c__4550__auto___46813;
var G__46816 = cljs.core.count.call(null,c__4550__auto___46813);
var G__46817 = (0);
seq__46769_46802 = G__46814;
chunk__46770_46803 = G__46815;
count__46771_46804 = G__46816;
i__46772_46805 = G__46817;
continue;
} else {
var req_46818 = cljs.core.first.call(null,seq__46769_46812__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_46818,prov);


var G__46819 = cljs.core.next.call(null,seq__46769_46812__$1);
var G__46820 = null;
var G__46821 = (0);
var G__46822 = (0);
seq__46769_46802 = G__46819;
chunk__46770_46803 = G__46820;
count__46771_46804 = G__46821;
i__46772_46805 = G__46822;
continue;
}
} else {
}
}
break;
}


var G__46823 = cljs.core.next.call(null,seq__46753__$1);
var G__46824 = null;
var G__46825 = (0);
var G__46826 = (0);
seq__46753 = G__46823;
chunk__46754 = G__46824;
count__46755 = G__46825;
i__46756 = G__46826;
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
var seq__46827_46831 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__46828_46832 = null;
var count__46829_46833 = (0);
var i__46830_46834 = (0);
while(true){
if((i__46830_46834 < count__46829_46833)){
var ns_46835 = cljs.core._nth.call(null,chunk__46828_46832,i__46830_46834);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46835);


var G__46836 = seq__46827_46831;
var G__46837 = chunk__46828_46832;
var G__46838 = count__46829_46833;
var G__46839 = (i__46830_46834 + (1));
seq__46827_46831 = G__46836;
chunk__46828_46832 = G__46837;
count__46829_46833 = G__46838;
i__46830_46834 = G__46839;
continue;
} else {
var temp__5735__auto___46840 = cljs.core.seq.call(null,seq__46827_46831);
if(temp__5735__auto___46840){
var seq__46827_46841__$1 = temp__5735__auto___46840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46827_46841__$1)){
var c__4550__auto___46842 = cljs.core.chunk_first.call(null,seq__46827_46841__$1);
var G__46843 = cljs.core.chunk_rest.call(null,seq__46827_46841__$1);
var G__46844 = c__4550__auto___46842;
var G__46845 = cljs.core.count.call(null,c__4550__auto___46842);
var G__46846 = (0);
seq__46827_46831 = G__46843;
chunk__46828_46832 = G__46844;
count__46829_46833 = G__46845;
i__46830_46834 = G__46846;
continue;
} else {
var ns_46847 = cljs.core.first.call(null,seq__46827_46841__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_46847);


var G__46848 = cljs.core.next.call(null,seq__46827_46841__$1);
var G__46849 = null;
var G__46850 = (0);
var G__46851 = (0);
seq__46827_46831 = G__46848;
chunk__46828_46832 = G__46849;
count__46829_46833 = G__46850;
i__46830_46834 = G__46851;
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
var G__46852__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__46852 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46853__i = 0, G__46853__a = new Array(arguments.length -  0);
while (G__46853__i < G__46853__a.length) {G__46853__a[G__46853__i] = arguments[G__46853__i + 0]; ++G__46853__i;}
  args = new cljs.core.IndexedSeq(G__46853__a,0,null);
} 
return G__46852__delegate.call(this,args);};
G__46852.cljs$lang$maxFixedArity = 0;
G__46852.cljs$lang$applyTo = (function (arglist__46854){
var args = cljs.core.seq(arglist__46854);
return G__46852__delegate(args);
});
G__46852.cljs$core$IFn$_invoke$arity$variadic = G__46852__delegate;
return G__46852;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__46855_SHARP_,p2__46856_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46855_SHARP_)),p2__46856_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__46857_SHARP_,p2__46858_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__46857_SHARP_),p2__46858_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__46859 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__46859.addCallback(((function (G__46859){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__46859))
);

G__46859.addErrback(((function (G__46859){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__46859))
);

return G__46859;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e46860){if((e46860 instanceof Error)){
var e = e46860;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46860;

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
}catch (e46861){if((e46861 instanceof Error)){
var e = e46861;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e46861;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__46862 = cljs.core._EQ_;
var expr__46863 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__46862.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__46863))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__46862.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__46863))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__46862.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__46863))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__46862,expr__46863){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__46862,expr__46863))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__46865,callback){
var map__46866 = p__46865;
var map__46866__$1 = (((((!((map__46866 == null))))?(((((map__46866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46866):map__46866);
var file_msg = map__46866__$1;
var request_url = cljs.core.get.call(null,map__46866__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__46866,map__46866__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__46866,map__46866__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__){
return (function (state_46904){
var state_val_46905 = (state_46904[(1)]);
if((state_val_46905 === (7))){
var inst_46900 = (state_46904[(2)]);
var state_46904__$1 = state_46904;
var statearr_46906_46932 = state_46904__$1;
(statearr_46906_46932[(2)] = inst_46900);

(statearr_46906_46932[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (1))){
var state_46904__$1 = state_46904;
var statearr_46907_46933 = state_46904__$1;
(statearr_46907_46933[(2)] = null);

(statearr_46907_46933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (4))){
var inst_46870 = (state_46904[(7)]);
var inst_46870__$1 = (state_46904[(2)]);
var state_46904__$1 = (function (){var statearr_46908 = state_46904;
(statearr_46908[(7)] = inst_46870__$1);

return statearr_46908;
})();
if(cljs.core.truth_(inst_46870__$1)){
var statearr_46909_46934 = state_46904__$1;
(statearr_46909_46934[(1)] = (5));

} else {
var statearr_46910_46935 = state_46904__$1;
(statearr_46910_46935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (15))){
var inst_46883 = (state_46904[(8)]);
var inst_46885 = (state_46904[(9)]);
var inst_46887 = inst_46885.call(null,inst_46883);
var state_46904__$1 = state_46904;
var statearr_46911_46936 = state_46904__$1;
(statearr_46911_46936[(2)] = inst_46887);

(statearr_46911_46936[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (13))){
var inst_46894 = (state_46904[(2)]);
var state_46904__$1 = state_46904;
var statearr_46912_46937 = state_46904__$1;
(statearr_46912_46937[(2)] = inst_46894);

(statearr_46912_46937[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (6))){
var state_46904__$1 = state_46904;
var statearr_46913_46938 = state_46904__$1;
(statearr_46913_46938[(2)] = null);

(statearr_46913_46938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (17))){
var inst_46891 = (state_46904[(2)]);
var state_46904__$1 = state_46904;
var statearr_46914_46939 = state_46904__$1;
(statearr_46914_46939[(2)] = inst_46891);

(statearr_46914_46939[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (3))){
var inst_46902 = (state_46904[(2)]);
var state_46904__$1 = state_46904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46904__$1,inst_46902);
} else {
if((state_val_46905 === (12))){
var state_46904__$1 = state_46904;
var statearr_46915_46940 = state_46904__$1;
(statearr_46915_46940[(2)] = null);

(statearr_46915_46940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (2))){
var state_46904__$1 = state_46904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46904__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_46905 === (11))){
var inst_46875 = (state_46904[(10)]);
var inst_46881 = figwheel.client.file_reloading.blocking_load.call(null,inst_46875);
var state_46904__$1 = state_46904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46904__$1,(14),inst_46881);
} else {
if((state_val_46905 === (9))){
var inst_46875 = (state_46904[(10)]);
var state_46904__$1 = state_46904;
if(cljs.core.truth_(inst_46875)){
var statearr_46916_46941 = state_46904__$1;
(statearr_46916_46941[(1)] = (11));

} else {
var statearr_46917_46942 = state_46904__$1;
(statearr_46917_46942[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (5))){
var inst_46876 = (state_46904[(11)]);
var inst_46870 = (state_46904[(7)]);
var inst_46875 = cljs.core.nth.call(null,inst_46870,(0),null);
var inst_46876__$1 = cljs.core.nth.call(null,inst_46870,(1),null);
var state_46904__$1 = (function (){var statearr_46918 = state_46904;
(statearr_46918[(10)] = inst_46875);

(statearr_46918[(11)] = inst_46876__$1);

return statearr_46918;
})();
if(cljs.core.truth_(inst_46876__$1)){
var statearr_46919_46943 = state_46904__$1;
(statearr_46919_46943[(1)] = (8));

} else {
var statearr_46920_46944 = state_46904__$1;
(statearr_46920_46944[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (14))){
var inst_46875 = (state_46904[(10)]);
var inst_46885 = (state_46904[(9)]);
var inst_46883 = (state_46904[(2)]);
var inst_46884 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_46885__$1 = cljs.core.get.call(null,inst_46884,inst_46875);
var state_46904__$1 = (function (){var statearr_46921 = state_46904;
(statearr_46921[(8)] = inst_46883);

(statearr_46921[(9)] = inst_46885__$1);

return statearr_46921;
})();
if(cljs.core.truth_(inst_46885__$1)){
var statearr_46922_46945 = state_46904__$1;
(statearr_46922_46945[(1)] = (15));

} else {
var statearr_46923_46946 = state_46904__$1;
(statearr_46923_46946[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (16))){
var inst_46883 = (state_46904[(8)]);
var inst_46889 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_46883);
var state_46904__$1 = state_46904;
var statearr_46924_46947 = state_46904__$1;
(statearr_46924_46947[(2)] = inst_46889);

(statearr_46924_46947[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (10))){
var inst_46896 = (state_46904[(2)]);
var state_46904__$1 = (function (){var statearr_46925 = state_46904;
(statearr_46925[(12)] = inst_46896);

return statearr_46925;
})();
var statearr_46926_46948 = state_46904__$1;
(statearr_46926_46948[(2)] = null);

(statearr_46926_46948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46905 === (8))){
var inst_46876 = (state_46904[(11)]);
var inst_46878 = eval(inst_46876);
var state_46904__$1 = state_46904;
var statearr_46927_46949 = state_46904__$1;
(statearr_46927_46949[(2)] = inst_46878);

(statearr_46927_46949[(1)] = (10));


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
});})(c__38256__auto__))
;
return ((function (switch__38233__auto__,c__38256__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38234__auto__ = null;
var figwheel$client$file_reloading$state_machine__38234__auto____0 = (function (){
var statearr_46928 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46928[(0)] = figwheel$client$file_reloading$state_machine__38234__auto__);

(statearr_46928[(1)] = (1));

return statearr_46928;
});
var figwheel$client$file_reloading$state_machine__38234__auto____1 = (function (state_46904){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_46904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e46929){if((e46929 instanceof Object)){
var ex__38237__auto__ = e46929;
var statearr_46930_46950 = state_46904;
(statearr_46930_46950[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46951 = state_46904;
state_46904 = G__46951;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38234__auto__ = function(state_46904){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38234__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38234__auto____1.call(this,state_46904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38234__auto____0;
figwheel$client$file_reloading$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38234__auto____1;
return figwheel$client$file_reloading$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__))
})();
var state__38258__auto__ = (function (){var statearr_46931 = f__38257__auto__.call(null);
(statearr_46931[(6)] = c__38256__auto__);

return statearr_46931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__))
);

return c__38256__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__46953 = arguments.length;
switch (G__46953) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__46955,callback){
var map__46956 = p__46955;
var map__46956__$1 = (((((!((map__46956 == null))))?(((((map__46956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46956):map__46956);
var file_msg = map__46956__$1;
var namespace = cljs.core.get.call(null,map__46956__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__46956,map__46956__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__46956,map__46956__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__46958){
var map__46959 = p__46958;
var map__46959__$1 = (((((!((map__46959 == null))))?(((((map__46959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46959):map__46959);
var file_msg = map__46959__$1;
var namespace = cljs.core.get.call(null,map__46959__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__46961){
var map__46962 = p__46961;
var map__46962__$1 = (((((!((map__46962 == null))))?(((((map__46962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46962):map__46962);
var file_msg = map__46962__$1;
var namespace = cljs.core.get.call(null,map__46962__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__46964,callback){
var map__46965 = p__46964;
var map__46965__$1 = (((((!((map__46965 == null))))?(((((map__46965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46965):map__46965);
var file_msg = map__46965__$1;
var request_url = cljs.core.get.call(null,map__46965__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__46965__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__38256__auto___47015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___47015,out){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___47015,out){
return (function (state_47000){
var state_val_47001 = (state_47000[(1)]);
if((state_val_47001 === (1))){
var inst_46974 = cljs.core.seq.call(null,files);
var inst_46975 = cljs.core.first.call(null,inst_46974);
var inst_46976 = cljs.core.next.call(null,inst_46974);
var inst_46977 = files;
var state_47000__$1 = (function (){var statearr_47002 = state_47000;
(statearr_47002[(7)] = inst_46977);

(statearr_47002[(8)] = inst_46976);

(statearr_47002[(9)] = inst_46975);

return statearr_47002;
})();
var statearr_47003_47016 = state_47000__$1;
(statearr_47003_47016[(2)] = null);

(statearr_47003_47016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47001 === (2))){
var inst_46977 = (state_47000[(7)]);
var inst_46983 = (state_47000[(10)]);
var inst_46982 = cljs.core.seq.call(null,inst_46977);
var inst_46983__$1 = cljs.core.first.call(null,inst_46982);
var inst_46984 = cljs.core.next.call(null,inst_46982);
var inst_46985 = (inst_46983__$1 == null);
var inst_46986 = cljs.core.not.call(null,inst_46985);
var state_47000__$1 = (function (){var statearr_47004 = state_47000;
(statearr_47004[(11)] = inst_46984);

(statearr_47004[(10)] = inst_46983__$1);

return statearr_47004;
})();
if(inst_46986){
var statearr_47005_47017 = state_47000__$1;
(statearr_47005_47017[(1)] = (4));

} else {
var statearr_47006_47018 = state_47000__$1;
(statearr_47006_47018[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47001 === (3))){
var inst_46998 = (state_47000[(2)]);
var state_47000__$1 = state_47000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47000__$1,inst_46998);
} else {
if((state_val_47001 === (4))){
var inst_46983 = (state_47000[(10)]);
var inst_46988 = figwheel.client.file_reloading.reload_js_file.call(null,inst_46983);
var state_47000__$1 = state_47000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47000__$1,(7),inst_46988);
} else {
if((state_val_47001 === (5))){
var inst_46994 = cljs.core.async.close_BANG_.call(null,out);
var state_47000__$1 = state_47000;
var statearr_47007_47019 = state_47000__$1;
(statearr_47007_47019[(2)] = inst_46994);

(statearr_47007_47019[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47001 === (6))){
var inst_46996 = (state_47000[(2)]);
var state_47000__$1 = state_47000;
var statearr_47008_47020 = state_47000__$1;
(statearr_47008_47020[(2)] = inst_46996);

(statearr_47008_47020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47001 === (7))){
var inst_46984 = (state_47000[(11)]);
var inst_46990 = (state_47000[(2)]);
var inst_46991 = cljs.core.async.put_BANG_.call(null,out,inst_46990);
var inst_46977 = inst_46984;
var state_47000__$1 = (function (){var statearr_47009 = state_47000;
(statearr_47009[(12)] = inst_46991);

(statearr_47009[(7)] = inst_46977);

return statearr_47009;
})();
var statearr_47010_47021 = state_47000__$1;
(statearr_47010_47021[(2)] = null);

(statearr_47010_47021[(1)] = (2));


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
});})(c__38256__auto___47015,out))
;
return ((function (switch__38233__auto__,c__38256__auto___47015,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto____0 = (function (){
var statearr_47011 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47011[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto__);

(statearr_47011[(1)] = (1));

return statearr_47011;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto____1 = (function (state_47000){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_47000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e47012){if((e47012 instanceof Object)){
var ex__38237__auto__ = e47012;
var statearr_47013_47022 = state_47000;
(statearr_47013_47022[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47023 = state_47000;
state_47000 = G__47023;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto__ = function(state_47000){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto____1.call(this,state_47000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___47015,out))
})();
var state__38258__auto__ = (function (){var statearr_47014 = f__38257__auto__.call(null);
(statearr_47014[(6)] = c__38256__auto___47015);

return statearr_47014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___47015,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47024,opts){
var map__47025 = p__47024;
var map__47025__$1 = (((((!((map__47025 == null))))?(((((map__47025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47025):map__47025);
var eval_body = cljs.core.get.call(null,map__47025__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e47027){var e = e47027;
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
return (function (p1__47028_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47028_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47029){
var vec__47030 = p__47029;
var k = cljs.core.nth.call(null,vec__47030,(0),null);
var v = cljs.core.nth.call(null,vec__47030,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47033){
var vec__47034 = p__47033;
var k = cljs.core.nth.call(null,vec__47034,(0),null);
var v = cljs.core.nth.call(null,vec__47034,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47040,p__47041){
var map__47042 = p__47040;
var map__47042__$1 = (((((!((map__47042 == null))))?(((((map__47042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47042):map__47042);
var opts = map__47042__$1;
var before_jsload = cljs.core.get.call(null,map__47042__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47042__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47042__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47043 = p__47041;
var map__47043__$1 = (((((!((map__47043 == null))))?(((((map__47043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47043):map__47043);
var msg = map__47043__$1;
var files = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47043__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47197){
var state_val_47198 = (state_47197[(1)]);
if((state_val_47198 === (7))){
var inst_47057 = (state_47197[(7)]);
var inst_47059 = (state_47197[(8)]);
var inst_47060 = (state_47197[(9)]);
var inst_47058 = (state_47197[(10)]);
var inst_47065 = cljs.core._nth.call(null,inst_47058,inst_47060);
var inst_47066 = figwheel.client.file_reloading.eval_body.call(null,inst_47065,opts);
var inst_47067 = (inst_47060 + (1));
var tmp47199 = inst_47057;
var tmp47200 = inst_47059;
var tmp47201 = inst_47058;
var inst_47057__$1 = tmp47199;
var inst_47058__$1 = tmp47201;
var inst_47059__$1 = tmp47200;
var inst_47060__$1 = inst_47067;
var state_47197__$1 = (function (){var statearr_47202 = state_47197;
(statearr_47202[(7)] = inst_47057__$1);

(statearr_47202[(8)] = inst_47059__$1);

(statearr_47202[(9)] = inst_47060__$1);

(statearr_47202[(10)] = inst_47058__$1);

(statearr_47202[(11)] = inst_47066);

return statearr_47202;
})();
var statearr_47203_47286 = state_47197__$1;
(statearr_47203_47286[(2)] = null);

(statearr_47203_47286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (20))){
var inst_47100 = (state_47197[(12)]);
var inst_47108 = figwheel.client.file_reloading.sort_files.call(null,inst_47100);
var state_47197__$1 = state_47197;
var statearr_47204_47287 = state_47197__$1;
(statearr_47204_47287[(2)] = inst_47108);

(statearr_47204_47287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (27))){
var state_47197__$1 = state_47197;
var statearr_47205_47288 = state_47197__$1;
(statearr_47205_47288[(2)] = null);

(statearr_47205_47288[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (1))){
var inst_47049 = (state_47197[(13)]);
var inst_47046 = before_jsload.call(null,files);
var inst_47047 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47048 = (function (){return ((function (inst_47049,inst_47046,inst_47047,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47037_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47037_SHARP_);
});
;})(inst_47049,inst_47046,inst_47047,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47049__$1 = cljs.core.filter.call(null,inst_47048,files);
var inst_47050 = cljs.core.not_empty.call(null,inst_47049__$1);
var state_47197__$1 = (function (){var statearr_47206 = state_47197;
(statearr_47206[(13)] = inst_47049__$1);

(statearr_47206[(14)] = inst_47046);

(statearr_47206[(15)] = inst_47047);

return statearr_47206;
})();
if(cljs.core.truth_(inst_47050)){
var statearr_47207_47289 = state_47197__$1;
(statearr_47207_47289[(1)] = (2));

} else {
var statearr_47208_47290 = state_47197__$1;
(statearr_47208_47290[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (24))){
var state_47197__$1 = state_47197;
var statearr_47209_47291 = state_47197__$1;
(statearr_47209_47291[(2)] = null);

(statearr_47209_47291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (39))){
var inst_47150 = (state_47197[(16)]);
var state_47197__$1 = state_47197;
var statearr_47210_47292 = state_47197__$1;
(statearr_47210_47292[(2)] = inst_47150);

(statearr_47210_47292[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (46))){
var inst_47192 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47211_47293 = state_47197__$1;
(statearr_47211_47293[(2)] = inst_47192);

(statearr_47211_47293[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (4))){
var inst_47094 = (state_47197[(2)]);
var inst_47095 = cljs.core.List.EMPTY;
var inst_47096 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47095);
var inst_47097 = (function (){return ((function (inst_47094,inst_47095,inst_47096,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47038_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47038_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47038_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47038_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_47094,inst_47095,inst_47096,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47098 = cljs.core.filter.call(null,inst_47097,files);
var inst_47099 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47100 = cljs.core.concat.call(null,inst_47098,inst_47099);
var state_47197__$1 = (function (){var statearr_47212 = state_47197;
(statearr_47212[(12)] = inst_47100);

(statearr_47212[(17)] = inst_47096);

(statearr_47212[(18)] = inst_47094);

return statearr_47212;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47213_47294 = state_47197__$1;
(statearr_47213_47294[(1)] = (16));

} else {
var statearr_47214_47295 = state_47197__$1;
(statearr_47214_47295[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (15))){
var inst_47084 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47215_47296 = state_47197__$1;
(statearr_47215_47296[(2)] = inst_47084);

(statearr_47215_47296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (21))){
var inst_47110 = (state_47197[(19)]);
var inst_47110__$1 = (state_47197[(2)]);
var inst_47111 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47110__$1);
var state_47197__$1 = (function (){var statearr_47216 = state_47197;
(statearr_47216[(19)] = inst_47110__$1);

return statearr_47216;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47197__$1,(22),inst_47111);
} else {
if((state_val_47198 === (31))){
var inst_47195 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47197__$1,inst_47195);
} else {
if((state_val_47198 === (32))){
var inst_47150 = (state_47197[(16)]);
var inst_47155 = inst_47150.cljs$lang$protocol_mask$partition0$;
var inst_47156 = (inst_47155 & (64));
var inst_47157 = inst_47150.cljs$core$ISeq$;
var inst_47158 = (cljs.core.PROTOCOL_SENTINEL === inst_47157);
var inst_47159 = ((inst_47156) || (inst_47158));
var state_47197__$1 = state_47197;
if(cljs.core.truth_(inst_47159)){
var statearr_47217_47297 = state_47197__$1;
(statearr_47217_47297[(1)] = (35));

} else {
var statearr_47218_47298 = state_47197__$1;
(statearr_47218_47298[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (40))){
var inst_47172 = (state_47197[(20)]);
var inst_47171 = (state_47197[(2)]);
var inst_47172__$1 = cljs.core.get.call(null,inst_47171,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47173 = cljs.core.get.call(null,inst_47171,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47174 = cljs.core.not_empty.call(null,inst_47172__$1);
var state_47197__$1 = (function (){var statearr_47219 = state_47197;
(statearr_47219[(20)] = inst_47172__$1);

(statearr_47219[(21)] = inst_47173);

return statearr_47219;
})();
if(cljs.core.truth_(inst_47174)){
var statearr_47220_47299 = state_47197__$1;
(statearr_47220_47299[(1)] = (41));

} else {
var statearr_47221_47300 = state_47197__$1;
(statearr_47221_47300[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (33))){
var state_47197__$1 = state_47197;
var statearr_47222_47301 = state_47197__$1;
(statearr_47222_47301[(2)] = false);

(statearr_47222_47301[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (13))){
var inst_47070 = (state_47197[(22)]);
var inst_47074 = cljs.core.chunk_first.call(null,inst_47070);
var inst_47075 = cljs.core.chunk_rest.call(null,inst_47070);
var inst_47076 = cljs.core.count.call(null,inst_47074);
var inst_47057 = inst_47075;
var inst_47058 = inst_47074;
var inst_47059 = inst_47076;
var inst_47060 = (0);
var state_47197__$1 = (function (){var statearr_47223 = state_47197;
(statearr_47223[(7)] = inst_47057);

(statearr_47223[(8)] = inst_47059);

(statearr_47223[(9)] = inst_47060);

(statearr_47223[(10)] = inst_47058);

return statearr_47223;
})();
var statearr_47224_47302 = state_47197__$1;
(statearr_47224_47302[(2)] = null);

(statearr_47224_47302[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (22))){
var inst_47114 = (state_47197[(23)]);
var inst_47110 = (state_47197[(19)]);
var inst_47118 = (state_47197[(24)]);
var inst_47113 = (state_47197[(25)]);
var inst_47113__$1 = (state_47197[(2)]);
var inst_47114__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47113__$1);
var inst_47115 = (function (){var all_files = inst_47110;
var res_SINGLEQUOTE_ = inst_47113__$1;
var res = inst_47114__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47114,inst_47110,inst_47118,inst_47113,inst_47113__$1,inst_47114__$1,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47039_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47039_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47114,inst_47110,inst_47118,inst_47113,inst_47113__$1,inst_47114__$1,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47116 = cljs.core.filter.call(null,inst_47115,inst_47113__$1);
var inst_47117 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47118__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47117);
var inst_47119 = cljs.core.not_empty.call(null,inst_47118__$1);
var state_47197__$1 = (function (){var statearr_47225 = state_47197;
(statearr_47225[(23)] = inst_47114__$1);

(statearr_47225[(24)] = inst_47118__$1);

(statearr_47225[(26)] = inst_47116);

(statearr_47225[(25)] = inst_47113__$1);

return statearr_47225;
})();
if(cljs.core.truth_(inst_47119)){
var statearr_47226_47303 = state_47197__$1;
(statearr_47226_47303[(1)] = (23));

} else {
var statearr_47227_47304 = state_47197__$1;
(statearr_47227_47304[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (36))){
var state_47197__$1 = state_47197;
var statearr_47228_47305 = state_47197__$1;
(statearr_47228_47305[(2)] = false);

(statearr_47228_47305[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (41))){
var inst_47172 = (state_47197[(20)]);
var inst_47176 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47177 = cljs.core.map.call(null,inst_47176,inst_47172);
var inst_47178 = cljs.core.pr_str.call(null,inst_47177);
var inst_47179 = ["figwheel-no-load meta-data: ",inst_47178].join('');
var inst_47180 = figwheel.client.utils.log.call(null,inst_47179);
var state_47197__$1 = state_47197;
var statearr_47229_47306 = state_47197__$1;
(statearr_47229_47306[(2)] = inst_47180);

(statearr_47229_47306[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (43))){
var inst_47173 = (state_47197[(21)]);
var inst_47183 = (state_47197[(2)]);
var inst_47184 = cljs.core.not_empty.call(null,inst_47173);
var state_47197__$1 = (function (){var statearr_47230 = state_47197;
(statearr_47230[(27)] = inst_47183);

return statearr_47230;
})();
if(cljs.core.truth_(inst_47184)){
var statearr_47231_47307 = state_47197__$1;
(statearr_47231_47307[(1)] = (44));

} else {
var statearr_47232_47308 = state_47197__$1;
(statearr_47232_47308[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (29))){
var inst_47114 = (state_47197[(23)]);
var inst_47110 = (state_47197[(19)]);
var inst_47118 = (state_47197[(24)]);
var inst_47150 = (state_47197[(16)]);
var inst_47116 = (state_47197[(26)]);
var inst_47113 = (state_47197[(25)]);
var inst_47146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47149 = (function (){var all_files = inst_47110;
var res_SINGLEQUOTE_ = inst_47113;
var res = inst_47114;
var files_not_loaded = inst_47116;
var dependencies_that_loaded = inst_47118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47114,inst_47110,inst_47118,inst_47150,inst_47116,inst_47113,inst_47146,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47148){
var map__47233 = p__47148;
var map__47233__$1 = (((((!((map__47233 == null))))?(((((map__47233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47233):map__47233);
var namespace = cljs.core.get.call(null,map__47233__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47114,inst_47110,inst_47118,inst_47150,inst_47116,inst_47113,inst_47146,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47150__$1 = cljs.core.group_by.call(null,inst_47149,inst_47116);
var inst_47152 = (inst_47150__$1 == null);
var inst_47153 = cljs.core.not.call(null,inst_47152);
var state_47197__$1 = (function (){var statearr_47235 = state_47197;
(statearr_47235[(16)] = inst_47150__$1);

(statearr_47235[(28)] = inst_47146);

return statearr_47235;
})();
if(inst_47153){
var statearr_47236_47309 = state_47197__$1;
(statearr_47236_47309[(1)] = (32));

} else {
var statearr_47237_47310 = state_47197__$1;
(statearr_47237_47310[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (44))){
var inst_47173 = (state_47197[(21)]);
var inst_47186 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47173);
var inst_47187 = cljs.core.pr_str.call(null,inst_47186);
var inst_47188 = ["not required: ",inst_47187].join('');
var inst_47189 = figwheel.client.utils.log.call(null,inst_47188);
var state_47197__$1 = state_47197;
var statearr_47238_47311 = state_47197__$1;
(statearr_47238_47311[(2)] = inst_47189);

(statearr_47238_47311[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (6))){
var inst_47091 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47239_47312 = state_47197__$1;
(statearr_47239_47312[(2)] = inst_47091);

(statearr_47239_47312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (28))){
var inst_47116 = (state_47197[(26)]);
var inst_47143 = (state_47197[(2)]);
var inst_47144 = cljs.core.not_empty.call(null,inst_47116);
var state_47197__$1 = (function (){var statearr_47240 = state_47197;
(statearr_47240[(29)] = inst_47143);

return statearr_47240;
})();
if(cljs.core.truth_(inst_47144)){
var statearr_47241_47313 = state_47197__$1;
(statearr_47241_47313[(1)] = (29));

} else {
var statearr_47242_47314 = state_47197__$1;
(statearr_47242_47314[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (25))){
var inst_47114 = (state_47197[(23)]);
var inst_47130 = (state_47197[(2)]);
var inst_47131 = cljs.core.not_empty.call(null,inst_47114);
var state_47197__$1 = (function (){var statearr_47243 = state_47197;
(statearr_47243[(30)] = inst_47130);

return statearr_47243;
})();
if(cljs.core.truth_(inst_47131)){
var statearr_47244_47315 = state_47197__$1;
(statearr_47244_47315[(1)] = (26));

} else {
var statearr_47245_47316 = state_47197__$1;
(statearr_47245_47316[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (34))){
var inst_47166 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
if(cljs.core.truth_(inst_47166)){
var statearr_47246_47317 = state_47197__$1;
(statearr_47246_47317[(1)] = (38));

} else {
var statearr_47247_47318 = state_47197__$1;
(statearr_47247_47318[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (17))){
var state_47197__$1 = state_47197;
var statearr_47248_47319 = state_47197__$1;
(statearr_47248_47319[(2)] = recompile_dependents);

(statearr_47248_47319[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (3))){
var state_47197__$1 = state_47197;
var statearr_47249_47320 = state_47197__$1;
(statearr_47249_47320[(2)] = null);

(statearr_47249_47320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (12))){
var inst_47087 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47250_47321 = state_47197__$1;
(statearr_47250_47321[(2)] = inst_47087);

(statearr_47250_47321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (2))){
var inst_47049 = (state_47197[(13)]);
var inst_47056 = cljs.core.seq.call(null,inst_47049);
var inst_47057 = inst_47056;
var inst_47058 = null;
var inst_47059 = (0);
var inst_47060 = (0);
var state_47197__$1 = (function (){var statearr_47251 = state_47197;
(statearr_47251[(7)] = inst_47057);

(statearr_47251[(8)] = inst_47059);

(statearr_47251[(9)] = inst_47060);

(statearr_47251[(10)] = inst_47058);

return statearr_47251;
})();
var statearr_47252_47322 = state_47197__$1;
(statearr_47252_47322[(2)] = null);

(statearr_47252_47322[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (23))){
var inst_47114 = (state_47197[(23)]);
var inst_47110 = (state_47197[(19)]);
var inst_47118 = (state_47197[(24)]);
var inst_47116 = (state_47197[(26)]);
var inst_47113 = (state_47197[(25)]);
var inst_47121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47123 = (function (){var all_files = inst_47110;
var res_SINGLEQUOTE_ = inst_47113;
var res = inst_47114;
var files_not_loaded = inst_47116;
var dependencies_that_loaded = inst_47118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47114,inst_47110,inst_47118,inst_47116,inst_47113,inst_47121,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47122){
var map__47253 = p__47122;
var map__47253__$1 = (((((!((map__47253 == null))))?(((((map__47253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47253):map__47253);
var request_url = cljs.core.get.call(null,map__47253__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47114,inst_47110,inst_47118,inst_47116,inst_47113,inst_47121,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47124 = cljs.core.reverse.call(null,inst_47118);
var inst_47125 = cljs.core.map.call(null,inst_47123,inst_47124);
var inst_47126 = cljs.core.pr_str.call(null,inst_47125);
var inst_47127 = figwheel.client.utils.log.call(null,inst_47126);
var state_47197__$1 = (function (){var statearr_47255 = state_47197;
(statearr_47255[(31)] = inst_47121);

return statearr_47255;
})();
var statearr_47256_47323 = state_47197__$1;
(statearr_47256_47323[(2)] = inst_47127);

(statearr_47256_47323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (35))){
var state_47197__$1 = state_47197;
var statearr_47257_47324 = state_47197__$1;
(statearr_47257_47324[(2)] = true);

(statearr_47257_47324[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (19))){
var inst_47100 = (state_47197[(12)]);
var inst_47106 = figwheel.client.file_reloading.expand_files.call(null,inst_47100);
var state_47197__$1 = state_47197;
var statearr_47258_47325 = state_47197__$1;
(statearr_47258_47325[(2)] = inst_47106);

(statearr_47258_47325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (11))){
var state_47197__$1 = state_47197;
var statearr_47259_47326 = state_47197__$1;
(statearr_47259_47326[(2)] = null);

(statearr_47259_47326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (9))){
var inst_47089 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47260_47327 = state_47197__$1;
(statearr_47260_47327[(2)] = inst_47089);

(statearr_47260_47327[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (5))){
var inst_47059 = (state_47197[(8)]);
var inst_47060 = (state_47197[(9)]);
var inst_47062 = (inst_47060 < inst_47059);
var inst_47063 = inst_47062;
var state_47197__$1 = state_47197;
if(cljs.core.truth_(inst_47063)){
var statearr_47261_47328 = state_47197__$1;
(statearr_47261_47328[(1)] = (7));

} else {
var statearr_47262_47329 = state_47197__$1;
(statearr_47262_47329[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (14))){
var inst_47070 = (state_47197[(22)]);
var inst_47079 = cljs.core.first.call(null,inst_47070);
var inst_47080 = figwheel.client.file_reloading.eval_body.call(null,inst_47079,opts);
var inst_47081 = cljs.core.next.call(null,inst_47070);
var inst_47057 = inst_47081;
var inst_47058 = null;
var inst_47059 = (0);
var inst_47060 = (0);
var state_47197__$1 = (function (){var statearr_47263 = state_47197;
(statearr_47263[(7)] = inst_47057);

(statearr_47263[(8)] = inst_47059);

(statearr_47263[(9)] = inst_47060);

(statearr_47263[(10)] = inst_47058);

(statearr_47263[(32)] = inst_47080);

return statearr_47263;
})();
var statearr_47264_47330 = state_47197__$1;
(statearr_47264_47330[(2)] = null);

(statearr_47264_47330[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (45))){
var state_47197__$1 = state_47197;
var statearr_47265_47331 = state_47197__$1;
(statearr_47265_47331[(2)] = null);

(statearr_47265_47331[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (26))){
var inst_47114 = (state_47197[(23)]);
var inst_47110 = (state_47197[(19)]);
var inst_47118 = (state_47197[(24)]);
var inst_47116 = (state_47197[(26)]);
var inst_47113 = (state_47197[(25)]);
var inst_47133 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47135 = (function (){var all_files = inst_47110;
var res_SINGLEQUOTE_ = inst_47113;
var res = inst_47114;
var files_not_loaded = inst_47116;
var dependencies_that_loaded = inst_47118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47114,inst_47110,inst_47118,inst_47116,inst_47113,inst_47133,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47134){
var map__47266 = p__47134;
var map__47266__$1 = (((((!((map__47266 == null))))?(((((map__47266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47266):map__47266);
var namespace = cljs.core.get.call(null,map__47266__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47266__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47114,inst_47110,inst_47118,inst_47116,inst_47113,inst_47133,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47136 = cljs.core.map.call(null,inst_47135,inst_47114);
var inst_47137 = cljs.core.pr_str.call(null,inst_47136);
var inst_47138 = figwheel.client.utils.log.call(null,inst_47137);
var inst_47139 = (function (){var all_files = inst_47110;
var res_SINGLEQUOTE_ = inst_47113;
var res = inst_47114;
var files_not_loaded = inst_47116;
var dependencies_that_loaded = inst_47118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47114,inst_47110,inst_47118,inst_47116,inst_47113,inst_47133,inst_47135,inst_47136,inst_47137,inst_47138,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47114,inst_47110,inst_47118,inst_47116,inst_47113,inst_47133,inst_47135,inst_47136,inst_47137,inst_47138,state_val_47198,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47140 = setTimeout(inst_47139,(10));
var state_47197__$1 = (function (){var statearr_47268 = state_47197;
(statearr_47268[(33)] = inst_47133);

(statearr_47268[(34)] = inst_47138);

return statearr_47268;
})();
var statearr_47269_47332 = state_47197__$1;
(statearr_47269_47332[(2)] = inst_47140);

(statearr_47269_47332[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (16))){
var state_47197__$1 = state_47197;
var statearr_47270_47333 = state_47197__$1;
(statearr_47270_47333[(2)] = reload_dependents);

(statearr_47270_47333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (38))){
var inst_47150 = (state_47197[(16)]);
var inst_47168 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47150);
var state_47197__$1 = state_47197;
var statearr_47271_47334 = state_47197__$1;
(statearr_47271_47334[(2)] = inst_47168);

(statearr_47271_47334[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (30))){
var state_47197__$1 = state_47197;
var statearr_47272_47335 = state_47197__$1;
(statearr_47272_47335[(2)] = null);

(statearr_47272_47335[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (10))){
var inst_47070 = (state_47197[(22)]);
var inst_47072 = cljs.core.chunked_seq_QMARK_.call(null,inst_47070);
var state_47197__$1 = state_47197;
if(inst_47072){
var statearr_47273_47336 = state_47197__$1;
(statearr_47273_47336[(1)] = (13));

} else {
var statearr_47274_47337 = state_47197__$1;
(statearr_47274_47337[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (18))){
var inst_47104 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
if(cljs.core.truth_(inst_47104)){
var statearr_47275_47338 = state_47197__$1;
(statearr_47275_47338[(1)] = (19));

} else {
var statearr_47276_47339 = state_47197__$1;
(statearr_47276_47339[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (42))){
var state_47197__$1 = state_47197;
var statearr_47277_47340 = state_47197__$1;
(statearr_47277_47340[(2)] = null);

(statearr_47277_47340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (37))){
var inst_47163 = (state_47197[(2)]);
var state_47197__$1 = state_47197;
var statearr_47278_47341 = state_47197__$1;
(statearr_47278_47341[(2)] = inst_47163);

(statearr_47278_47341[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47198 === (8))){
var inst_47057 = (state_47197[(7)]);
var inst_47070 = (state_47197[(22)]);
var inst_47070__$1 = cljs.core.seq.call(null,inst_47057);
var state_47197__$1 = (function (){var statearr_47279 = state_47197;
(statearr_47279[(22)] = inst_47070__$1);

return statearr_47279;
})();
if(inst_47070__$1){
var statearr_47280_47342 = state_47197__$1;
(statearr_47280_47342[(1)] = (10));

} else {
var statearr_47281_47343 = state_47197__$1;
(statearr_47281_47343[(1)] = (11));

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
});})(c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38233__auto__,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto____0 = (function (){
var statearr_47282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47282[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto__);

(statearr_47282[(1)] = (1));

return statearr_47282;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto____1 = (function (state_47197){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_47197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e47283){if((e47283 instanceof Object)){
var ex__38237__auto__ = e47283;
var statearr_47284_47344 = state_47197;
(statearr_47284_47344[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47345 = state_47197;
state_47197 = G__47345;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto__ = function(state_47197){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto____1.call(this,state_47197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38258__auto__ = (function (){var statearr_47285 = f__38257__auto__.call(null);
(statearr_47285[(6)] = c__38256__auto__);

return statearr_47285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__,map__47042,map__47042__$1,opts,before_jsload,on_jsload,reload_dependents,map__47043,map__47043__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38256__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__47348,link){
var map__47349 = p__47348;
var map__47349__$1 = (((((!((map__47349 == null))))?(((((map__47349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47349):map__47349);
var file = cljs.core.get.call(null,map__47349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__47349,map__47349__$1,file){
return (function (p1__47346_SHARP_,p2__47347_SHARP_){
if(cljs.core._EQ_.call(null,p1__47346_SHARP_,p2__47347_SHARP_)){
return p1__47346_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__47349,map__47349__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__47352){
var map__47353 = p__47352;
var map__47353__$1 = (((((!((map__47353 == null))))?(((((map__47353.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47353.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47353):map__47353);
var match_length = cljs.core.get.call(null,map__47353__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__47353__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__47351_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__47351_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__47355_SHARP_,p2__47356_SHARP_){
return cljs.core.assoc.call(null,p1__47355_SHARP_,cljs.core.get.call(null,p2__47356_SHARP_,key),p2__47356_SHARP_);
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
var loaded_f_datas_47357 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_47357);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_47357);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__47358,p__47359){
var map__47360 = p__47358;
var map__47360__$1 = (((((!((map__47360 == null))))?(((((map__47360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47360):map__47360);
var on_cssload = cljs.core.get.call(null,map__47360__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__47361 = p__47359;
var map__47361__$1 = (((((!((map__47361 == null))))?(((((map__47361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47361):map__47361);
var files_msg = map__47361__$1;
var files = cljs.core.get.call(null,map__47361__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1563208755497
