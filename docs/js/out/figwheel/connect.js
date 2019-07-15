// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43859__delegate = function (x__43838__auto__){
if(cljs.core.truth_(pomodoro.core.mount_root)){
return cljs.core.apply.call(null,pomodoro.core.mount_root,x__43838__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","pomodoro.core/mount-root","' is missing"].join(''));
}
};
var G__43859 = function (var_args){
var x__43838__auto__ = null;
if (arguments.length > 0) {
var G__43860__i = 0, G__43860__a = new Array(arguments.length -  0);
while (G__43860__i < G__43860__a.length) {G__43860__a[G__43860__i] = arguments[G__43860__i + 0]; ++G__43860__i;}
  x__43838__auto__ = new cljs.core.IndexedSeq(G__43860__a,0,null);
} 
return G__43859__delegate.call(this,x__43838__auto__);};
G__43859.cljs$lang$maxFixedArity = 0;
G__43859.cljs$lang$applyTo = (function (arglist__43861){
var x__43838__auto__ = cljs.core.seq(arglist__43861);
return G__43859__delegate(x__43838__auto__);
});
G__43859.cljs$core$IFn$_invoke$arity$variadic = G__43859__delegate;
return G__43859;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1562998443116
