// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__44319 = arguments.length;
switch (G__44319) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44320 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44320 = (function (f,blockable,meta44321){
this.f = f;
this.blockable = blockable;
this.meta44321 = meta44321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44322,meta44321__$1){
var self__ = this;
var _44322__$1 = this;
return (new cljs.core.async.t_cljs$core$async44320(self__.f,self__.blockable,meta44321__$1));
});

cljs.core.async.t_cljs$core$async44320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44322){
var self__ = this;
var _44322__$1 = this;
return self__.meta44321;
});

cljs.core.async.t_cljs$core$async44320.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44320.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async44320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async44320.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta44321","meta44321",-666487778,null)], null);
});

cljs.core.async.t_cljs$core$async44320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44320";

cljs.core.async.t_cljs$core$async44320.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44320");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44320.
 */
cljs.core.async.__GT_t_cljs$core$async44320 = (function cljs$core$async$__GT_t_cljs$core$async44320(f__$1,blockable__$1,meta44321){
return (new cljs.core.async.t_cljs$core$async44320(f__$1,blockable__$1,meta44321));
});

}

return (new cljs.core.async.t_cljs$core$async44320(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__44326 = arguments.length;
switch (G__44326) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__44329 = arguments.length;
switch (G__44329) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__44332 = arguments.length;
switch (G__44332) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_44334 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_44334);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_44334,ret){
return (function (){
return fn1.call(null,val_44334);
});})(val_44334,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__44336 = arguments.length;
switch (G__44336) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___44338 = n;
var x_44339 = (0);
while(true){
if((x_44339 < n__4607__auto___44338)){
(a[x_44339] = (0));

var G__44340 = (x_44339 + (1));
x_44339 = G__44340;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__44341 = (i + (1));
i = G__44341;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44342 = (function (flag,meta44343){
this.flag = flag;
this.meta44343 = meta44343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_44344,meta44343__$1){
var self__ = this;
var _44344__$1 = this;
return (new cljs.core.async.t_cljs$core$async44342(self__.flag,meta44343__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_44344){
var self__ = this;
var _44344__$1 = this;
return self__.meta44343;
});})(flag))
;

cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async44342.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta44343","meta44343",1160912977,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async44342.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44342";

cljs.core.async.t_cljs$core$async44342.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44342");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44342.
 */
cljs.core.async.__GT_t_cljs$core$async44342 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async44342(flag__$1,meta44343){
return (new cljs.core.async.t_cljs$core$async44342(flag__$1,meta44343));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async44342(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44345 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44345 = (function (flag,cb,meta44346){
this.flag = flag;
this.cb = cb;
this.meta44346 = meta44346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44347,meta44346__$1){
var self__ = this;
var _44347__$1 = this;
return (new cljs.core.async.t_cljs$core$async44345(self__.flag,self__.cb,meta44346__$1));
});

cljs.core.async.t_cljs$core$async44345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44347){
var self__ = this;
var _44347__$1 = this;
return self__.meta44346;
});

cljs.core.async.t_cljs$core$async44345.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44345.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async44345.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async44345.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async44345.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta44346","meta44346",333656601,null)], null);
});

cljs.core.async.t_cljs$core$async44345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44345";

cljs.core.async.t_cljs$core$async44345.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44345");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44345.
 */
cljs.core.async.__GT_t_cljs$core$async44345 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async44345(flag__$1,cb__$1,meta44346){
return (new cljs.core.async.t_cljs$core$async44345(flag__$1,cb__$1,meta44346));
});

}

return (new cljs.core.async.t_cljs$core$async44345(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44348_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44348_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__44349_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44349_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44350 = (i + (1));
i = G__44350;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44356 = arguments.length;
var i__4731__auto___44357 = (0);
while(true){
if((i__4731__auto___44357 < len__4730__auto___44356)){
args__4736__auto__.push((arguments[i__4731__auto___44357]));

var G__44358 = (i__4731__auto___44357 + (1));
i__4731__auto___44357 = G__44358;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__44353){
var map__44354 = p__44353;
var map__44354__$1 = (((((!((map__44354 == null))))?(((((map__44354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44354):map__44354);
var opts = map__44354__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq44351){
var G__44352 = cljs.core.first.call(null,seq44351);
var seq44351__$1 = cljs.core.next.call(null,seq44351);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44352,seq44351__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__44360 = arguments.length;
switch (G__44360) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38256__auto___44406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___44406){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___44406){
return (function (state_44384){
var state_val_44385 = (state_44384[(1)]);
if((state_val_44385 === (7))){
var inst_44380 = (state_44384[(2)]);
var state_44384__$1 = state_44384;
var statearr_44386_44407 = state_44384__$1;
(statearr_44386_44407[(2)] = inst_44380);

(statearr_44386_44407[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (1))){
var state_44384__$1 = state_44384;
var statearr_44387_44408 = state_44384__$1;
(statearr_44387_44408[(2)] = null);

(statearr_44387_44408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (4))){
var inst_44363 = (state_44384[(7)]);
var inst_44363__$1 = (state_44384[(2)]);
var inst_44364 = (inst_44363__$1 == null);
var state_44384__$1 = (function (){var statearr_44388 = state_44384;
(statearr_44388[(7)] = inst_44363__$1);

return statearr_44388;
})();
if(cljs.core.truth_(inst_44364)){
var statearr_44389_44409 = state_44384__$1;
(statearr_44389_44409[(1)] = (5));

} else {
var statearr_44390_44410 = state_44384__$1;
(statearr_44390_44410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (13))){
var state_44384__$1 = state_44384;
var statearr_44391_44411 = state_44384__$1;
(statearr_44391_44411[(2)] = null);

(statearr_44391_44411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (6))){
var inst_44363 = (state_44384[(7)]);
var state_44384__$1 = state_44384;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44384__$1,(11),to,inst_44363);
} else {
if((state_val_44385 === (3))){
var inst_44382 = (state_44384[(2)]);
var state_44384__$1 = state_44384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44384__$1,inst_44382);
} else {
if((state_val_44385 === (12))){
var state_44384__$1 = state_44384;
var statearr_44392_44412 = state_44384__$1;
(statearr_44392_44412[(2)] = null);

(statearr_44392_44412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (2))){
var state_44384__$1 = state_44384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44384__$1,(4),from);
} else {
if((state_val_44385 === (11))){
var inst_44373 = (state_44384[(2)]);
var state_44384__$1 = state_44384;
if(cljs.core.truth_(inst_44373)){
var statearr_44393_44413 = state_44384__$1;
(statearr_44393_44413[(1)] = (12));

} else {
var statearr_44394_44414 = state_44384__$1;
(statearr_44394_44414[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (9))){
var state_44384__$1 = state_44384;
var statearr_44395_44415 = state_44384__$1;
(statearr_44395_44415[(2)] = null);

(statearr_44395_44415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (5))){
var state_44384__$1 = state_44384;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44396_44416 = state_44384__$1;
(statearr_44396_44416[(1)] = (8));

} else {
var statearr_44397_44417 = state_44384__$1;
(statearr_44397_44417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (14))){
var inst_44378 = (state_44384[(2)]);
var state_44384__$1 = state_44384;
var statearr_44398_44418 = state_44384__$1;
(statearr_44398_44418[(2)] = inst_44378);

(statearr_44398_44418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (10))){
var inst_44370 = (state_44384[(2)]);
var state_44384__$1 = state_44384;
var statearr_44399_44419 = state_44384__$1;
(statearr_44399_44419[(2)] = inst_44370);

(statearr_44399_44419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44385 === (8))){
var inst_44367 = cljs.core.async.close_BANG_.call(null,to);
var state_44384__$1 = state_44384;
var statearr_44400_44420 = state_44384__$1;
(statearr_44400_44420[(2)] = inst_44367);

(statearr_44400_44420[(1)] = (10));


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
});})(c__38256__auto___44406))
;
return ((function (switch__38233__auto__,c__38256__auto___44406){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_44401 = [null,null,null,null,null,null,null,null];
(statearr_44401[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_44401[(1)] = (1));

return statearr_44401;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_44384){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44402){if((e44402 instanceof Object)){
var ex__38237__auto__ = e44402;
var statearr_44403_44421 = state_44384;
(statearr_44403_44421[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44422 = state_44384;
state_44384 = G__44422;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_44384){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_44384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___44406))
})();
var state__38258__auto__ = (function (){var statearr_44404 = f__38257__auto__.call(null);
(statearr_44404[(6)] = c__38256__auto___44406);

return statearr_44404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___44406))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__44423){
var vec__44424 = p__44423;
var v = cljs.core.nth.call(null,vec__44424,(0),null);
var p = cljs.core.nth.call(null,vec__44424,(1),null);
var job = vec__44424;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38256__auto___44595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___44595,res,vec__44424,v,p,job,jobs,results){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___44595,res,vec__44424,v,p,job,jobs,results){
return (function (state_44431){
var state_val_44432 = (state_44431[(1)]);
if((state_val_44432 === (1))){
var state_44431__$1 = state_44431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44431__$1,(2),res,v);
} else {
if((state_val_44432 === (2))){
var inst_44428 = (state_44431[(2)]);
var inst_44429 = cljs.core.async.close_BANG_.call(null,res);
var state_44431__$1 = (function (){var statearr_44433 = state_44431;
(statearr_44433[(7)] = inst_44428);

return statearr_44433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44431__$1,inst_44429);
} else {
return null;
}
}
});})(c__38256__auto___44595,res,vec__44424,v,p,job,jobs,results))
;
return ((function (switch__38233__auto__,c__38256__auto___44595,res,vec__44424,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0 = (function (){
var statearr_44434 = [null,null,null,null,null,null,null,null];
(statearr_44434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__);

(statearr_44434[(1)] = (1));

return statearr_44434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1 = (function (state_44431){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44435){if((e44435 instanceof Object)){
var ex__38237__auto__ = e44435;
var statearr_44436_44596 = state_44431;
(statearr_44436_44596[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44597 = state_44431;
state_44431 = G__44597;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = function(state_44431){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1.call(this,state_44431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___44595,res,vec__44424,v,p,job,jobs,results))
})();
var state__38258__auto__ = (function (){var statearr_44437 = f__38257__auto__.call(null);
(statearr_44437[(6)] = c__38256__auto___44595);

return statearr_44437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___44595,res,vec__44424,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__44438){
var vec__44439 = p__44438;
var v = cljs.core.nth.call(null,vec__44439,(0),null);
var p = cljs.core.nth.call(null,vec__44439,(1),null);
var job = vec__44439;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___44598 = n;
var __44599 = (0);
while(true){
if((__44599 < n__4607__auto___44598)){
var G__44442_44600 = type;
var G__44442_44601__$1 = (((G__44442_44600 instanceof cljs.core.Keyword))?G__44442_44600.fqn:null);
switch (G__44442_44601__$1) {
case "compute":
var c__38256__auto___44603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44599,c__38256__auto___44603,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (__44599,c__38256__auto___44603,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async){
return (function (state_44455){
var state_val_44456 = (state_44455[(1)]);
if((state_val_44456 === (1))){
var state_44455__$1 = state_44455;
var statearr_44457_44604 = state_44455__$1;
(statearr_44457_44604[(2)] = null);

(statearr_44457_44604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (2))){
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44455__$1,(4),jobs);
} else {
if((state_val_44456 === (3))){
var inst_44453 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44455__$1,inst_44453);
} else {
if((state_val_44456 === (4))){
var inst_44445 = (state_44455[(2)]);
var inst_44446 = process.call(null,inst_44445);
var state_44455__$1 = state_44455;
if(cljs.core.truth_(inst_44446)){
var statearr_44458_44605 = state_44455__$1;
(statearr_44458_44605[(1)] = (5));

} else {
var statearr_44459_44606 = state_44455__$1;
(statearr_44459_44606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (5))){
var state_44455__$1 = state_44455;
var statearr_44460_44607 = state_44455__$1;
(statearr_44460_44607[(2)] = null);

(statearr_44460_44607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (6))){
var state_44455__$1 = state_44455;
var statearr_44461_44608 = state_44455__$1;
(statearr_44461_44608[(2)] = null);

(statearr_44461_44608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44456 === (7))){
var inst_44451 = (state_44455[(2)]);
var state_44455__$1 = state_44455;
var statearr_44462_44609 = state_44455__$1;
(statearr_44462_44609[(2)] = inst_44451);

(statearr_44462_44609[(1)] = (3));


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
});})(__44599,c__38256__auto___44603,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async))
;
return ((function (__44599,switch__38233__auto__,c__38256__auto___44603,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0 = (function (){
var statearr_44463 = [null,null,null,null,null,null,null];
(statearr_44463[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__);

(statearr_44463[(1)] = (1));

return statearr_44463;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1 = (function (state_44455){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44464){if((e44464 instanceof Object)){
var ex__38237__auto__ = e44464;
var statearr_44465_44610 = state_44455;
(statearr_44465_44610[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44611 = state_44455;
state_44455 = G__44611;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = function(state_44455){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1.call(this,state_44455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__;
})()
;})(__44599,switch__38233__auto__,c__38256__auto___44603,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async))
})();
var state__38258__auto__ = (function (){var statearr_44466 = f__38257__auto__.call(null);
(statearr_44466[(6)] = c__38256__auto___44603);

return statearr_44466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(__44599,c__38256__auto___44603,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async))
);


break;
case "async":
var c__38256__auto___44612 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__44599,c__38256__auto___44612,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (__44599,c__38256__auto___44612,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async){
return (function (state_44479){
var state_val_44480 = (state_44479[(1)]);
if((state_val_44480 === (1))){
var state_44479__$1 = state_44479;
var statearr_44481_44613 = state_44479__$1;
(statearr_44481_44613[(2)] = null);

(statearr_44481_44613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (2))){
var state_44479__$1 = state_44479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44479__$1,(4),jobs);
} else {
if((state_val_44480 === (3))){
var inst_44477 = (state_44479[(2)]);
var state_44479__$1 = state_44479;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44479__$1,inst_44477);
} else {
if((state_val_44480 === (4))){
var inst_44469 = (state_44479[(2)]);
var inst_44470 = async.call(null,inst_44469);
var state_44479__$1 = state_44479;
if(cljs.core.truth_(inst_44470)){
var statearr_44482_44614 = state_44479__$1;
(statearr_44482_44614[(1)] = (5));

} else {
var statearr_44483_44615 = state_44479__$1;
(statearr_44483_44615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (5))){
var state_44479__$1 = state_44479;
var statearr_44484_44616 = state_44479__$1;
(statearr_44484_44616[(2)] = null);

(statearr_44484_44616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (6))){
var state_44479__$1 = state_44479;
var statearr_44485_44617 = state_44479__$1;
(statearr_44485_44617[(2)] = null);

(statearr_44485_44617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44480 === (7))){
var inst_44475 = (state_44479[(2)]);
var state_44479__$1 = state_44479;
var statearr_44486_44618 = state_44479__$1;
(statearr_44486_44618[(2)] = inst_44475);

(statearr_44486_44618[(1)] = (3));


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
});})(__44599,c__38256__auto___44612,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async))
;
return ((function (__44599,switch__38233__auto__,c__38256__auto___44612,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0 = (function (){
var statearr_44487 = [null,null,null,null,null,null,null];
(statearr_44487[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__);

(statearr_44487[(1)] = (1));

return statearr_44487;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1 = (function (state_44479){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44488){if((e44488 instanceof Object)){
var ex__38237__auto__ = e44488;
var statearr_44489_44619 = state_44479;
(statearr_44489_44619[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44620 = state_44479;
state_44479 = G__44620;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = function(state_44479){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1.call(this,state_44479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__;
})()
;})(__44599,switch__38233__auto__,c__38256__auto___44612,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async))
})();
var state__38258__auto__ = (function (){var statearr_44490 = f__38257__auto__.call(null);
(statearr_44490[(6)] = c__38256__auto___44612);

return statearr_44490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(__44599,c__38256__auto___44612,G__44442_44600,G__44442_44601__$1,n__4607__auto___44598,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44442_44601__$1)].join('')));

}

var G__44621 = (__44599 + (1));
__44599 = G__44621;
continue;
} else {
}
break;
}

var c__38256__auto___44622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___44622,jobs,results,process,async){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___44622,jobs,results,process,async){
return (function (state_44512){
var state_val_44513 = (state_44512[(1)]);
if((state_val_44513 === (7))){
var inst_44508 = (state_44512[(2)]);
var state_44512__$1 = state_44512;
var statearr_44514_44623 = state_44512__$1;
(statearr_44514_44623[(2)] = inst_44508);

(statearr_44514_44623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44513 === (1))){
var state_44512__$1 = state_44512;
var statearr_44515_44624 = state_44512__$1;
(statearr_44515_44624[(2)] = null);

(statearr_44515_44624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44513 === (4))){
var inst_44493 = (state_44512[(7)]);
var inst_44493__$1 = (state_44512[(2)]);
var inst_44494 = (inst_44493__$1 == null);
var state_44512__$1 = (function (){var statearr_44516 = state_44512;
(statearr_44516[(7)] = inst_44493__$1);

return statearr_44516;
})();
if(cljs.core.truth_(inst_44494)){
var statearr_44517_44625 = state_44512__$1;
(statearr_44517_44625[(1)] = (5));

} else {
var statearr_44518_44626 = state_44512__$1;
(statearr_44518_44626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44513 === (6))){
var inst_44498 = (state_44512[(8)]);
var inst_44493 = (state_44512[(7)]);
var inst_44498__$1 = cljs.core.async.chan.call(null,(1));
var inst_44499 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44500 = [inst_44493,inst_44498__$1];
var inst_44501 = (new cljs.core.PersistentVector(null,2,(5),inst_44499,inst_44500,null));
var state_44512__$1 = (function (){var statearr_44519 = state_44512;
(statearr_44519[(8)] = inst_44498__$1);

return statearr_44519;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44512__$1,(8),jobs,inst_44501);
} else {
if((state_val_44513 === (3))){
var inst_44510 = (state_44512[(2)]);
var state_44512__$1 = state_44512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44512__$1,inst_44510);
} else {
if((state_val_44513 === (2))){
var state_44512__$1 = state_44512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44512__$1,(4),from);
} else {
if((state_val_44513 === (9))){
var inst_44505 = (state_44512[(2)]);
var state_44512__$1 = (function (){var statearr_44520 = state_44512;
(statearr_44520[(9)] = inst_44505);

return statearr_44520;
})();
var statearr_44521_44627 = state_44512__$1;
(statearr_44521_44627[(2)] = null);

(statearr_44521_44627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44513 === (5))){
var inst_44496 = cljs.core.async.close_BANG_.call(null,jobs);
var state_44512__$1 = state_44512;
var statearr_44522_44628 = state_44512__$1;
(statearr_44522_44628[(2)] = inst_44496);

(statearr_44522_44628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44513 === (8))){
var inst_44498 = (state_44512[(8)]);
var inst_44503 = (state_44512[(2)]);
var state_44512__$1 = (function (){var statearr_44523 = state_44512;
(statearr_44523[(10)] = inst_44503);

return statearr_44523;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44512__$1,(9),results,inst_44498);
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
});})(c__38256__auto___44622,jobs,results,process,async))
;
return ((function (switch__38233__auto__,c__38256__auto___44622,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0 = (function (){
var statearr_44524 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44524[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__);

(statearr_44524[(1)] = (1));

return statearr_44524;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1 = (function (state_44512){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44525){if((e44525 instanceof Object)){
var ex__38237__auto__ = e44525;
var statearr_44526_44629 = state_44512;
(statearr_44526_44629[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44525;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44630 = state_44512;
state_44512 = G__44630;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = function(state_44512){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1.call(this,state_44512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___44622,jobs,results,process,async))
})();
var state__38258__auto__ = (function (){var statearr_44527 = f__38257__auto__.call(null);
(statearr_44527[(6)] = c__38256__auto___44622);

return statearr_44527;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___44622,jobs,results,process,async))
);


var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__,jobs,results,process,async){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__,jobs,results,process,async){
return (function (state_44565){
var state_val_44566 = (state_44565[(1)]);
if((state_val_44566 === (7))){
var inst_44561 = (state_44565[(2)]);
var state_44565__$1 = state_44565;
var statearr_44567_44631 = state_44565__$1;
(statearr_44567_44631[(2)] = inst_44561);

(statearr_44567_44631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (20))){
var state_44565__$1 = state_44565;
var statearr_44568_44632 = state_44565__$1;
(statearr_44568_44632[(2)] = null);

(statearr_44568_44632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (1))){
var state_44565__$1 = state_44565;
var statearr_44569_44633 = state_44565__$1;
(statearr_44569_44633[(2)] = null);

(statearr_44569_44633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (4))){
var inst_44530 = (state_44565[(7)]);
var inst_44530__$1 = (state_44565[(2)]);
var inst_44531 = (inst_44530__$1 == null);
var state_44565__$1 = (function (){var statearr_44570 = state_44565;
(statearr_44570[(7)] = inst_44530__$1);

return statearr_44570;
})();
if(cljs.core.truth_(inst_44531)){
var statearr_44571_44634 = state_44565__$1;
(statearr_44571_44634[(1)] = (5));

} else {
var statearr_44572_44635 = state_44565__$1;
(statearr_44572_44635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (15))){
var inst_44543 = (state_44565[(8)]);
var state_44565__$1 = state_44565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44565__$1,(18),to,inst_44543);
} else {
if((state_val_44566 === (21))){
var inst_44556 = (state_44565[(2)]);
var state_44565__$1 = state_44565;
var statearr_44573_44636 = state_44565__$1;
(statearr_44573_44636[(2)] = inst_44556);

(statearr_44573_44636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (13))){
var inst_44558 = (state_44565[(2)]);
var state_44565__$1 = (function (){var statearr_44574 = state_44565;
(statearr_44574[(9)] = inst_44558);

return statearr_44574;
})();
var statearr_44575_44637 = state_44565__$1;
(statearr_44575_44637[(2)] = null);

(statearr_44575_44637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (6))){
var inst_44530 = (state_44565[(7)]);
var state_44565__$1 = state_44565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44565__$1,(11),inst_44530);
} else {
if((state_val_44566 === (17))){
var inst_44551 = (state_44565[(2)]);
var state_44565__$1 = state_44565;
if(cljs.core.truth_(inst_44551)){
var statearr_44576_44638 = state_44565__$1;
(statearr_44576_44638[(1)] = (19));

} else {
var statearr_44577_44639 = state_44565__$1;
(statearr_44577_44639[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (3))){
var inst_44563 = (state_44565[(2)]);
var state_44565__$1 = state_44565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44565__$1,inst_44563);
} else {
if((state_val_44566 === (12))){
var inst_44540 = (state_44565[(10)]);
var state_44565__$1 = state_44565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44565__$1,(14),inst_44540);
} else {
if((state_val_44566 === (2))){
var state_44565__$1 = state_44565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44565__$1,(4),results);
} else {
if((state_val_44566 === (19))){
var state_44565__$1 = state_44565;
var statearr_44578_44640 = state_44565__$1;
(statearr_44578_44640[(2)] = null);

(statearr_44578_44640[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (11))){
var inst_44540 = (state_44565[(2)]);
var state_44565__$1 = (function (){var statearr_44579 = state_44565;
(statearr_44579[(10)] = inst_44540);

return statearr_44579;
})();
var statearr_44580_44641 = state_44565__$1;
(statearr_44580_44641[(2)] = null);

(statearr_44580_44641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (9))){
var state_44565__$1 = state_44565;
var statearr_44581_44642 = state_44565__$1;
(statearr_44581_44642[(2)] = null);

(statearr_44581_44642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (5))){
var state_44565__$1 = state_44565;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44582_44643 = state_44565__$1;
(statearr_44582_44643[(1)] = (8));

} else {
var statearr_44583_44644 = state_44565__$1;
(statearr_44583_44644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (14))){
var inst_44543 = (state_44565[(8)]);
var inst_44545 = (state_44565[(11)]);
var inst_44543__$1 = (state_44565[(2)]);
var inst_44544 = (inst_44543__$1 == null);
var inst_44545__$1 = cljs.core.not.call(null,inst_44544);
var state_44565__$1 = (function (){var statearr_44584 = state_44565;
(statearr_44584[(8)] = inst_44543__$1);

(statearr_44584[(11)] = inst_44545__$1);

return statearr_44584;
})();
if(inst_44545__$1){
var statearr_44585_44645 = state_44565__$1;
(statearr_44585_44645[(1)] = (15));

} else {
var statearr_44586_44646 = state_44565__$1;
(statearr_44586_44646[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (16))){
var inst_44545 = (state_44565[(11)]);
var state_44565__$1 = state_44565;
var statearr_44587_44647 = state_44565__$1;
(statearr_44587_44647[(2)] = inst_44545);

(statearr_44587_44647[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (10))){
var inst_44537 = (state_44565[(2)]);
var state_44565__$1 = state_44565;
var statearr_44588_44648 = state_44565__$1;
(statearr_44588_44648[(2)] = inst_44537);

(statearr_44588_44648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (18))){
var inst_44548 = (state_44565[(2)]);
var state_44565__$1 = state_44565;
var statearr_44589_44649 = state_44565__$1;
(statearr_44589_44649[(2)] = inst_44548);

(statearr_44589_44649[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44566 === (8))){
var inst_44534 = cljs.core.async.close_BANG_.call(null,to);
var state_44565__$1 = state_44565;
var statearr_44590_44650 = state_44565__$1;
(statearr_44590_44650[(2)] = inst_44534);

(statearr_44590_44650[(1)] = (10));


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
});})(c__38256__auto__,jobs,results,process,async))
;
return ((function (switch__38233__auto__,c__38256__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0 = (function (){
var statearr_44591 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44591[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__);

(statearr_44591[(1)] = (1));

return statearr_44591;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1 = (function (state_44565){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44592){if((e44592 instanceof Object)){
var ex__38237__auto__ = e44592;
var statearr_44593_44651 = state_44565;
(statearr_44593_44651[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44652 = state_44565;
state_44565 = G__44652;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__ = function(state_44565){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1.call(this,state_44565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38234__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__,jobs,results,process,async))
})();
var state__38258__auto__ = (function (){var statearr_44594 = f__38257__auto__.call(null);
(statearr_44594[(6)] = c__38256__auto__);

return statearr_44594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__,jobs,results,process,async))
);

return c__38256__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__44654 = arguments.length;
switch (G__44654) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__44657 = arguments.length;
switch (G__44657) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__44660 = arguments.length;
switch (G__44660) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38256__auto___44709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___44709,tc,fc){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___44709,tc,fc){
return (function (state_44686){
var state_val_44687 = (state_44686[(1)]);
if((state_val_44687 === (7))){
var inst_44682 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
var statearr_44688_44710 = state_44686__$1;
(statearr_44688_44710[(2)] = inst_44682);

(statearr_44688_44710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (1))){
var state_44686__$1 = state_44686;
var statearr_44689_44711 = state_44686__$1;
(statearr_44689_44711[(2)] = null);

(statearr_44689_44711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (4))){
var inst_44663 = (state_44686[(7)]);
var inst_44663__$1 = (state_44686[(2)]);
var inst_44664 = (inst_44663__$1 == null);
var state_44686__$1 = (function (){var statearr_44690 = state_44686;
(statearr_44690[(7)] = inst_44663__$1);

return statearr_44690;
})();
if(cljs.core.truth_(inst_44664)){
var statearr_44691_44712 = state_44686__$1;
(statearr_44691_44712[(1)] = (5));

} else {
var statearr_44692_44713 = state_44686__$1;
(statearr_44692_44713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (13))){
var state_44686__$1 = state_44686;
var statearr_44693_44714 = state_44686__$1;
(statearr_44693_44714[(2)] = null);

(statearr_44693_44714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (6))){
var inst_44663 = (state_44686[(7)]);
var inst_44669 = p.call(null,inst_44663);
var state_44686__$1 = state_44686;
if(cljs.core.truth_(inst_44669)){
var statearr_44694_44715 = state_44686__$1;
(statearr_44694_44715[(1)] = (9));

} else {
var statearr_44695_44716 = state_44686__$1;
(statearr_44695_44716[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (3))){
var inst_44684 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44686__$1,inst_44684);
} else {
if((state_val_44687 === (12))){
var state_44686__$1 = state_44686;
var statearr_44696_44717 = state_44686__$1;
(statearr_44696_44717[(2)] = null);

(statearr_44696_44717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (2))){
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44686__$1,(4),ch);
} else {
if((state_val_44687 === (11))){
var inst_44663 = (state_44686[(7)]);
var inst_44673 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44686__$1,(8),inst_44673,inst_44663);
} else {
if((state_val_44687 === (9))){
var state_44686__$1 = state_44686;
var statearr_44697_44718 = state_44686__$1;
(statearr_44697_44718[(2)] = tc);

(statearr_44697_44718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (5))){
var inst_44666 = cljs.core.async.close_BANG_.call(null,tc);
var inst_44667 = cljs.core.async.close_BANG_.call(null,fc);
var state_44686__$1 = (function (){var statearr_44698 = state_44686;
(statearr_44698[(8)] = inst_44666);

return statearr_44698;
})();
var statearr_44699_44719 = state_44686__$1;
(statearr_44699_44719[(2)] = inst_44667);

(statearr_44699_44719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (14))){
var inst_44680 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
var statearr_44700_44720 = state_44686__$1;
(statearr_44700_44720[(2)] = inst_44680);

(statearr_44700_44720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (10))){
var state_44686__$1 = state_44686;
var statearr_44701_44721 = state_44686__$1;
(statearr_44701_44721[(2)] = fc);

(statearr_44701_44721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44687 === (8))){
var inst_44675 = (state_44686[(2)]);
var state_44686__$1 = state_44686;
if(cljs.core.truth_(inst_44675)){
var statearr_44702_44722 = state_44686__$1;
(statearr_44702_44722[(1)] = (12));

} else {
var statearr_44703_44723 = state_44686__$1;
(statearr_44703_44723[(1)] = (13));

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
});})(c__38256__auto___44709,tc,fc))
;
return ((function (switch__38233__auto__,c__38256__auto___44709,tc,fc){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_44704 = [null,null,null,null,null,null,null,null,null];
(statearr_44704[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_44704[(1)] = (1));

return statearr_44704;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_44686){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44705){if((e44705 instanceof Object)){
var ex__38237__auto__ = e44705;
var statearr_44706_44724 = state_44686;
(statearr_44706_44724[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44725 = state_44686;
state_44686 = G__44725;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_44686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_44686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___44709,tc,fc))
})();
var state__38258__auto__ = (function (){var statearr_44707 = f__38257__auto__.call(null);
(statearr_44707[(6)] = c__38256__auto___44709);

return statearr_44707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___44709,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__){
return (function (state_44746){
var state_val_44747 = (state_44746[(1)]);
if((state_val_44747 === (7))){
var inst_44742 = (state_44746[(2)]);
var state_44746__$1 = state_44746;
var statearr_44748_44766 = state_44746__$1;
(statearr_44748_44766[(2)] = inst_44742);

(statearr_44748_44766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (1))){
var inst_44726 = init;
var state_44746__$1 = (function (){var statearr_44749 = state_44746;
(statearr_44749[(7)] = inst_44726);

return statearr_44749;
})();
var statearr_44750_44767 = state_44746__$1;
(statearr_44750_44767[(2)] = null);

(statearr_44750_44767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (4))){
var inst_44729 = (state_44746[(8)]);
var inst_44729__$1 = (state_44746[(2)]);
var inst_44730 = (inst_44729__$1 == null);
var state_44746__$1 = (function (){var statearr_44751 = state_44746;
(statearr_44751[(8)] = inst_44729__$1);

return statearr_44751;
})();
if(cljs.core.truth_(inst_44730)){
var statearr_44752_44768 = state_44746__$1;
(statearr_44752_44768[(1)] = (5));

} else {
var statearr_44753_44769 = state_44746__$1;
(statearr_44753_44769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (6))){
var inst_44733 = (state_44746[(9)]);
var inst_44726 = (state_44746[(7)]);
var inst_44729 = (state_44746[(8)]);
var inst_44733__$1 = f.call(null,inst_44726,inst_44729);
var inst_44734 = cljs.core.reduced_QMARK_.call(null,inst_44733__$1);
var state_44746__$1 = (function (){var statearr_44754 = state_44746;
(statearr_44754[(9)] = inst_44733__$1);

return statearr_44754;
})();
if(inst_44734){
var statearr_44755_44770 = state_44746__$1;
(statearr_44755_44770[(1)] = (8));

} else {
var statearr_44756_44771 = state_44746__$1;
(statearr_44756_44771[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (3))){
var inst_44744 = (state_44746[(2)]);
var state_44746__$1 = state_44746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44746__$1,inst_44744);
} else {
if((state_val_44747 === (2))){
var state_44746__$1 = state_44746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44746__$1,(4),ch);
} else {
if((state_val_44747 === (9))){
var inst_44733 = (state_44746[(9)]);
var inst_44726 = inst_44733;
var state_44746__$1 = (function (){var statearr_44757 = state_44746;
(statearr_44757[(7)] = inst_44726);

return statearr_44757;
})();
var statearr_44758_44772 = state_44746__$1;
(statearr_44758_44772[(2)] = null);

(statearr_44758_44772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (5))){
var inst_44726 = (state_44746[(7)]);
var state_44746__$1 = state_44746;
var statearr_44759_44773 = state_44746__$1;
(statearr_44759_44773[(2)] = inst_44726);

(statearr_44759_44773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (10))){
var inst_44740 = (state_44746[(2)]);
var state_44746__$1 = state_44746;
var statearr_44760_44774 = state_44746__$1;
(statearr_44760_44774[(2)] = inst_44740);

(statearr_44760_44774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44747 === (8))){
var inst_44733 = (state_44746[(9)]);
var inst_44736 = cljs.core.deref.call(null,inst_44733);
var state_44746__$1 = state_44746;
var statearr_44761_44775 = state_44746__$1;
(statearr_44761_44775[(2)] = inst_44736);

(statearr_44761_44775[(1)] = (10));


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
});})(c__38256__auto__))
;
return ((function (switch__38233__auto__,c__38256__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38234__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38234__auto____0 = (function (){
var statearr_44762 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44762[(0)] = cljs$core$async$reduce_$_state_machine__38234__auto__);

(statearr_44762[(1)] = (1));

return statearr_44762;
});
var cljs$core$async$reduce_$_state_machine__38234__auto____1 = (function (state_44746){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44763){if((e44763 instanceof Object)){
var ex__38237__auto__ = e44763;
var statearr_44764_44776 = state_44746;
(statearr_44764_44776[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44777 = state_44746;
state_44746 = G__44777;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38234__auto__ = function(state_44746){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38234__auto____1.call(this,state_44746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38234__auto____0;
cljs$core$async$reduce_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38234__auto____1;
return cljs$core$async$reduce_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__))
})();
var state__38258__auto__ = (function (){var statearr_44765 = f__38257__auto__.call(null);
(statearr_44765[(6)] = c__38256__auto__);

return statearr_44765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__))
);

return c__38256__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__,f__$1){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__,f__$1){
return (function (state_44783){
var state_val_44784 = (state_44783[(1)]);
if((state_val_44784 === (1))){
var inst_44778 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44783__$1 = state_44783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44783__$1,(2),inst_44778);
} else {
if((state_val_44784 === (2))){
var inst_44780 = (state_44783[(2)]);
var inst_44781 = f__$1.call(null,inst_44780);
var state_44783__$1 = state_44783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44783__$1,inst_44781);
} else {
return null;
}
}
});})(c__38256__auto__,f__$1))
;
return ((function (switch__38233__auto__,c__38256__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38234__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38234__auto____0 = (function (){
var statearr_44785 = [null,null,null,null,null,null,null];
(statearr_44785[(0)] = cljs$core$async$transduce_$_state_machine__38234__auto__);

(statearr_44785[(1)] = (1));

return statearr_44785;
});
var cljs$core$async$transduce_$_state_machine__38234__auto____1 = (function (state_44783){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44786){if((e44786 instanceof Object)){
var ex__38237__auto__ = e44786;
var statearr_44787_44789 = state_44783;
(statearr_44787_44789[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44790 = state_44783;
state_44783 = G__44790;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38234__auto__ = function(state_44783){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38234__auto____1.call(this,state_44783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38234__auto____0;
cljs$core$async$transduce_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38234__auto____1;
return cljs$core$async$transduce_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__,f__$1))
})();
var state__38258__auto__ = (function (){var statearr_44788 = f__38257__auto__.call(null);
(statearr_44788[(6)] = c__38256__auto__);

return statearr_44788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__,f__$1))
);

return c__38256__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__44792 = arguments.length;
switch (G__44792) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__){
return (function (state_44817){
var state_val_44818 = (state_44817[(1)]);
if((state_val_44818 === (7))){
var inst_44799 = (state_44817[(2)]);
var state_44817__$1 = state_44817;
var statearr_44819_44840 = state_44817__$1;
(statearr_44819_44840[(2)] = inst_44799);

(statearr_44819_44840[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (1))){
var inst_44793 = cljs.core.seq.call(null,coll);
var inst_44794 = inst_44793;
var state_44817__$1 = (function (){var statearr_44820 = state_44817;
(statearr_44820[(7)] = inst_44794);

return statearr_44820;
})();
var statearr_44821_44841 = state_44817__$1;
(statearr_44821_44841[(2)] = null);

(statearr_44821_44841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (4))){
var inst_44794 = (state_44817[(7)]);
var inst_44797 = cljs.core.first.call(null,inst_44794);
var state_44817__$1 = state_44817;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44817__$1,(7),ch,inst_44797);
} else {
if((state_val_44818 === (13))){
var inst_44811 = (state_44817[(2)]);
var state_44817__$1 = state_44817;
var statearr_44822_44842 = state_44817__$1;
(statearr_44822_44842[(2)] = inst_44811);

(statearr_44822_44842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (6))){
var inst_44802 = (state_44817[(2)]);
var state_44817__$1 = state_44817;
if(cljs.core.truth_(inst_44802)){
var statearr_44823_44843 = state_44817__$1;
(statearr_44823_44843[(1)] = (8));

} else {
var statearr_44824_44844 = state_44817__$1;
(statearr_44824_44844[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (3))){
var inst_44815 = (state_44817[(2)]);
var state_44817__$1 = state_44817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44817__$1,inst_44815);
} else {
if((state_val_44818 === (12))){
var state_44817__$1 = state_44817;
var statearr_44825_44845 = state_44817__$1;
(statearr_44825_44845[(2)] = null);

(statearr_44825_44845[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (2))){
var inst_44794 = (state_44817[(7)]);
var state_44817__$1 = state_44817;
if(cljs.core.truth_(inst_44794)){
var statearr_44826_44846 = state_44817__$1;
(statearr_44826_44846[(1)] = (4));

} else {
var statearr_44827_44847 = state_44817__$1;
(statearr_44827_44847[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (11))){
var inst_44808 = cljs.core.async.close_BANG_.call(null,ch);
var state_44817__$1 = state_44817;
var statearr_44828_44848 = state_44817__$1;
(statearr_44828_44848[(2)] = inst_44808);

(statearr_44828_44848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (9))){
var state_44817__$1 = state_44817;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44829_44849 = state_44817__$1;
(statearr_44829_44849[(1)] = (11));

} else {
var statearr_44830_44850 = state_44817__$1;
(statearr_44830_44850[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (5))){
var inst_44794 = (state_44817[(7)]);
var state_44817__$1 = state_44817;
var statearr_44831_44851 = state_44817__$1;
(statearr_44831_44851[(2)] = inst_44794);

(statearr_44831_44851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (10))){
var inst_44813 = (state_44817[(2)]);
var state_44817__$1 = state_44817;
var statearr_44832_44852 = state_44817__$1;
(statearr_44832_44852[(2)] = inst_44813);

(statearr_44832_44852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44818 === (8))){
var inst_44794 = (state_44817[(7)]);
var inst_44804 = cljs.core.next.call(null,inst_44794);
var inst_44794__$1 = inst_44804;
var state_44817__$1 = (function (){var statearr_44833 = state_44817;
(statearr_44833[(7)] = inst_44794__$1);

return statearr_44833;
})();
var statearr_44834_44853 = state_44817__$1;
(statearr_44834_44853[(2)] = null);

(statearr_44834_44853[(1)] = (2));


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
});})(c__38256__auto__))
;
return ((function (switch__38233__auto__,c__38256__auto__){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_44835 = [null,null,null,null,null,null,null,null];
(statearr_44835[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_44835[(1)] = (1));

return statearr_44835;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_44817){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e44836){if((e44836 instanceof Object)){
var ex__38237__auto__ = e44836;
var statearr_44837_44854 = state_44817;
(statearr_44837_44854[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44855 = state_44817;
state_44817 = G__44855;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_44817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_44817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__))
})();
var state__38258__auto__ = (function (){var statearr_44838 = f__38257__auto__.call(null);
(statearr_44838[(6)] = c__38256__auto__);

return statearr_44838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__))
);

return c__38256__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44856 = (function (ch,cs,meta44857){
this.ch = ch;
this.cs = cs;
this.meta44857 = meta44857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44858,meta44857__$1){
var self__ = this;
var _44858__$1 = this;
return (new cljs.core.async.t_cljs$core$async44856(self__.ch,self__.cs,meta44857__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44858){
var self__ = this;
var _44858__$1 = this;
return self__.meta44857;
});})(cs))
;

cljs.core.async.t_cljs$core$async44856.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44856.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44856.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44856.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44856.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44856.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44857","meta44857",182756423,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44856.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44856";

cljs.core.async.t_cljs$core$async44856.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44856");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44856.
 */
cljs.core.async.__GT_t_cljs$core$async44856 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44856(ch__$1,cs__$1,meta44857){
return (new cljs.core.async.t_cljs$core$async44856(ch__$1,cs__$1,meta44857));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44856(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38256__auto___45078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___45078,cs,m,dchan,dctr,done){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___45078,cs,m,dchan,dctr,done){
return (function (state_44993){
var state_val_44994 = (state_44993[(1)]);
if((state_val_44994 === (7))){
var inst_44989 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_44995_45079 = state_44993__$1;
(statearr_44995_45079[(2)] = inst_44989);

(statearr_44995_45079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (20))){
var inst_44892 = (state_44993[(7)]);
var inst_44904 = cljs.core.first.call(null,inst_44892);
var inst_44905 = cljs.core.nth.call(null,inst_44904,(0),null);
var inst_44906 = cljs.core.nth.call(null,inst_44904,(1),null);
var state_44993__$1 = (function (){var statearr_44996 = state_44993;
(statearr_44996[(8)] = inst_44905);

return statearr_44996;
})();
if(cljs.core.truth_(inst_44906)){
var statearr_44997_45080 = state_44993__$1;
(statearr_44997_45080[(1)] = (22));

} else {
var statearr_44998_45081 = state_44993__$1;
(statearr_44998_45081[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (27))){
var inst_44936 = (state_44993[(9)]);
var inst_44861 = (state_44993[(10)]);
var inst_44941 = (state_44993[(11)]);
var inst_44934 = (state_44993[(12)]);
var inst_44941__$1 = cljs.core._nth.call(null,inst_44934,inst_44936);
var inst_44942 = cljs.core.async.put_BANG_.call(null,inst_44941__$1,inst_44861,done);
var state_44993__$1 = (function (){var statearr_44999 = state_44993;
(statearr_44999[(11)] = inst_44941__$1);

return statearr_44999;
})();
if(cljs.core.truth_(inst_44942)){
var statearr_45000_45082 = state_44993__$1;
(statearr_45000_45082[(1)] = (30));

} else {
var statearr_45001_45083 = state_44993__$1;
(statearr_45001_45083[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (1))){
var state_44993__$1 = state_44993;
var statearr_45002_45084 = state_44993__$1;
(statearr_45002_45084[(2)] = null);

(statearr_45002_45084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (24))){
var inst_44892 = (state_44993[(7)]);
var inst_44911 = (state_44993[(2)]);
var inst_44912 = cljs.core.next.call(null,inst_44892);
var inst_44870 = inst_44912;
var inst_44871 = null;
var inst_44872 = (0);
var inst_44873 = (0);
var state_44993__$1 = (function (){var statearr_45003 = state_44993;
(statearr_45003[(13)] = inst_44871);

(statearr_45003[(14)] = inst_44870);

(statearr_45003[(15)] = inst_44872);

(statearr_45003[(16)] = inst_44873);

(statearr_45003[(17)] = inst_44911);

return statearr_45003;
})();
var statearr_45004_45085 = state_44993__$1;
(statearr_45004_45085[(2)] = null);

(statearr_45004_45085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (39))){
var state_44993__$1 = state_44993;
var statearr_45008_45086 = state_44993__$1;
(statearr_45008_45086[(2)] = null);

(statearr_45008_45086[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (4))){
var inst_44861 = (state_44993[(10)]);
var inst_44861__$1 = (state_44993[(2)]);
var inst_44862 = (inst_44861__$1 == null);
var state_44993__$1 = (function (){var statearr_45009 = state_44993;
(statearr_45009[(10)] = inst_44861__$1);

return statearr_45009;
})();
if(cljs.core.truth_(inst_44862)){
var statearr_45010_45087 = state_44993__$1;
(statearr_45010_45087[(1)] = (5));

} else {
var statearr_45011_45088 = state_44993__$1;
(statearr_45011_45088[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (15))){
var inst_44871 = (state_44993[(13)]);
var inst_44870 = (state_44993[(14)]);
var inst_44872 = (state_44993[(15)]);
var inst_44873 = (state_44993[(16)]);
var inst_44888 = (state_44993[(2)]);
var inst_44889 = (inst_44873 + (1));
var tmp45005 = inst_44871;
var tmp45006 = inst_44870;
var tmp45007 = inst_44872;
var inst_44870__$1 = tmp45006;
var inst_44871__$1 = tmp45005;
var inst_44872__$1 = tmp45007;
var inst_44873__$1 = inst_44889;
var state_44993__$1 = (function (){var statearr_45012 = state_44993;
(statearr_45012[(13)] = inst_44871__$1);

(statearr_45012[(14)] = inst_44870__$1);

(statearr_45012[(15)] = inst_44872__$1);

(statearr_45012[(18)] = inst_44888);

(statearr_45012[(16)] = inst_44873__$1);

return statearr_45012;
})();
var statearr_45013_45089 = state_44993__$1;
(statearr_45013_45089[(2)] = null);

(statearr_45013_45089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (21))){
var inst_44915 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_45017_45090 = state_44993__$1;
(statearr_45017_45090[(2)] = inst_44915);

(statearr_45017_45090[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (31))){
var inst_44941 = (state_44993[(11)]);
var inst_44945 = done.call(null,null);
var inst_44946 = cljs.core.async.untap_STAR_.call(null,m,inst_44941);
var state_44993__$1 = (function (){var statearr_45018 = state_44993;
(statearr_45018[(19)] = inst_44945);

return statearr_45018;
})();
var statearr_45019_45091 = state_44993__$1;
(statearr_45019_45091[(2)] = inst_44946);

(statearr_45019_45091[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (32))){
var inst_44935 = (state_44993[(20)]);
var inst_44936 = (state_44993[(9)]);
var inst_44933 = (state_44993[(21)]);
var inst_44934 = (state_44993[(12)]);
var inst_44948 = (state_44993[(2)]);
var inst_44949 = (inst_44936 + (1));
var tmp45014 = inst_44935;
var tmp45015 = inst_44933;
var tmp45016 = inst_44934;
var inst_44933__$1 = tmp45015;
var inst_44934__$1 = tmp45016;
var inst_44935__$1 = tmp45014;
var inst_44936__$1 = inst_44949;
var state_44993__$1 = (function (){var statearr_45020 = state_44993;
(statearr_45020[(20)] = inst_44935__$1);

(statearr_45020[(9)] = inst_44936__$1);

(statearr_45020[(21)] = inst_44933__$1);

(statearr_45020[(22)] = inst_44948);

(statearr_45020[(12)] = inst_44934__$1);

return statearr_45020;
})();
var statearr_45021_45092 = state_44993__$1;
(statearr_45021_45092[(2)] = null);

(statearr_45021_45092[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (40))){
var inst_44961 = (state_44993[(23)]);
var inst_44965 = done.call(null,null);
var inst_44966 = cljs.core.async.untap_STAR_.call(null,m,inst_44961);
var state_44993__$1 = (function (){var statearr_45022 = state_44993;
(statearr_45022[(24)] = inst_44965);

return statearr_45022;
})();
var statearr_45023_45093 = state_44993__$1;
(statearr_45023_45093[(2)] = inst_44966);

(statearr_45023_45093[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (33))){
var inst_44952 = (state_44993[(25)]);
var inst_44954 = cljs.core.chunked_seq_QMARK_.call(null,inst_44952);
var state_44993__$1 = state_44993;
if(inst_44954){
var statearr_45024_45094 = state_44993__$1;
(statearr_45024_45094[(1)] = (36));

} else {
var statearr_45025_45095 = state_44993__$1;
(statearr_45025_45095[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (13))){
var inst_44882 = (state_44993[(26)]);
var inst_44885 = cljs.core.async.close_BANG_.call(null,inst_44882);
var state_44993__$1 = state_44993;
var statearr_45026_45096 = state_44993__$1;
(statearr_45026_45096[(2)] = inst_44885);

(statearr_45026_45096[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (22))){
var inst_44905 = (state_44993[(8)]);
var inst_44908 = cljs.core.async.close_BANG_.call(null,inst_44905);
var state_44993__$1 = state_44993;
var statearr_45027_45097 = state_44993__$1;
(statearr_45027_45097[(2)] = inst_44908);

(statearr_45027_45097[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (36))){
var inst_44952 = (state_44993[(25)]);
var inst_44956 = cljs.core.chunk_first.call(null,inst_44952);
var inst_44957 = cljs.core.chunk_rest.call(null,inst_44952);
var inst_44958 = cljs.core.count.call(null,inst_44956);
var inst_44933 = inst_44957;
var inst_44934 = inst_44956;
var inst_44935 = inst_44958;
var inst_44936 = (0);
var state_44993__$1 = (function (){var statearr_45028 = state_44993;
(statearr_45028[(20)] = inst_44935);

(statearr_45028[(9)] = inst_44936);

(statearr_45028[(21)] = inst_44933);

(statearr_45028[(12)] = inst_44934);

return statearr_45028;
})();
var statearr_45029_45098 = state_44993__$1;
(statearr_45029_45098[(2)] = null);

(statearr_45029_45098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (41))){
var inst_44952 = (state_44993[(25)]);
var inst_44968 = (state_44993[(2)]);
var inst_44969 = cljs.core.next.call(null,inst_44952);
var inst_44933 = inst_44969;
var inst_44934 = null;
var inst_44935 = (0);
var inst_44936 = (0);
var state_44993__$1 = (function (){var statearr_45030 = state_44993;
(statearr_45030[(27)] = inst_44968);

(statearr_45030[(20)] = inst_44935);

(statearr_45030[(9)] = inst_44936);

(statearr_45030[(21)] = inst_44933);

(statearr_45030[(12)] = inst_44934);

return statearr_45030;
})();
var statearr_45031_45099 = state_44993__$1;
(statearr_45031_45099[(2)] = null);

(statearr_45031_45099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (43))){
var state_44993__$1 = state_44993;
var statearr_45032_45100 = state_44993__$1;
(statearr_45032_45100[(2)] = null);

(statearr_45032_45100[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (29))){
var inst_44977 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_45033_45101 = state_44993__$1;
(statearr_45033_45101[(2)] = inst_44977);

(statearr_45033_45101[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (44))){
var inst_44986 = (state_44993[(2)]);
var state_44993__$1 = (function (){var statearr_45034 = state_44993;
(statearr_45034[(28)] = inst_44986);

return statearr_45034;
})();
var statearr_45035_45102 = state_44993__$1;
(statearr_45035_45102[(2)] = null);

(statearr_45035_45102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (6))){
var inst_44925 = (state_44993[(29)]);
var inst_44924 = cljs.core.deref.call(null,cs);
var inst_44925__$1 = cljs.core.keys.call(null,inst_44924);
var inst_44926 = cljs.core.count.call(null,inst_44925__$1);
var inst_44927 = cljs.core.reset_BANG_.call(null,dctr,inst_44926);
var inst_44932 = cljs.core.seq.call(null,inst_44925__$1);
var inst_44933 = inst_44932;
var inst_44934 = null;
var inst_44935 = (0);
var inst_44936 = (0);
var state_44993__$1 = (function (){var statearr_45036 = state_44993;
(statearr_45036[(20)] = inst_44935);

(statearr_45036[(9)] = inst_44936);

(statearr_45036[(21)] = inst_44933);

(statearr_45036[(30)] = inst_44927);

(statearr_45036[(29)] = inst_44925__$1);

(statearr_45036[(12)] = inst_44934);

return statearr_45036;
})();
var statearr_45037_45103 = state_44993__$1;
(statearr_45037_45103[(2)] = null);

(statearr_45037_45103[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (28))){
var inst_44952 = (state_44993[(25)]);
var inst_44933 = (state_44993[(21)]);
var inst_44952__$1 = cljs.core.seq.call(null,inst_44933);
var state_44993__$1 = (function (){var statearr_45038 = state_44993;
(statearr_45038[(25)] = inst_44952__$1);

return statearr_45038;
})();
if(inst_44952__$1){
var statearr_45039_45104 = state_44993__$1;
(statearr_45039_45104[(1)] = (33));

} else {
var statearr_45040_45105 = state_44993__$1;
(statearr_45040_45105[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (25))){
var inst_44935 = (state_44993[(20)]);
var inst_44936 = (state_44993[(9)]);
var inst_44938 = (inst_44936 < inst_44935);
var inst_44939 = inst_44938;
var state_44993__$1 = state_44993;
if(cljs.core.truth_(inst_44939)){
var statearr_45041_45106 = state_44993__$1;
(statearr_45041_45106[(1)] = (27));

} else {
var statearr_45042_45107 = state_44993__$1;
(statearr_45042_45107[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (34))){
var state_44993__$1 = state_44993;
var statearr_45043_45108 = state_44993__$1;
(statearr_45043_45108[(2)] = null);

(statearr_45043_45108[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (17))){
var state_44993__$1 = state_44993;
var statearr_45044_45109 = state_44993__$1;
(statearr_45044_45109[(2)] = null);

(statearr_45044_45109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (3))){
var inst_44991 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44993__$1,inst_44991);
} else {
if((state_val_44994 === (12))){
var inst_44920 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_45045_45110 = state_44993__$1;
(statearr_45045_45110[(2)] = inst_44920);

(statearr_45045_45110[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (2))){
var state_44993__$1 = state_44993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44993__$1,(4),ch);
} else {
if((state_val_44994 === (23))){
var state_44993__$1 = state_44993;
var statearr_45046_45111 = state_44993__$1;
(statearr_45046_45111[(2)] = null);

(statearr_45046_45111[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (35))){
var inst_44975 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_45047_45112 = state_44993__$1;
(statearr_45047_45112[(2)] = inst_44975);

(statearr_45047_45112[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (19))){
var inst_44892 = (state_44993[(7)]);
var inst_44896 = cljs.core.chunk_first.call(null,inst_44892);
var inst_44897 = cljs.core.chunk_rest.call(null,inst_44892);
var inst_44898 = cljs.core.count.call(null,inst_44896);
var inst_44870 = inst_44897;
var inst_44871 = inst_44896;
var inst_44872 = inst_44898;
var inst_44873 = (0);
var state_44993__$1 = (function (){var statearr_45048 = state_44993;
(statearr_45048[(13)] = inst_44871);

(statearr_45048[(14)] = inst_44870);

(statearr_45048[(15)] = inst_44872);

(statearr_45048[(16)] = inst_44873);

return statearr_45048;
})();
var statearr_45049_45113 = state_44993__$1;
(statearr_45049_45113[(2)] = null);

(statearr_45049_45113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (11))){
var inst_44892 = (state_44993[(7)]);
var inst_44870 = (state_44993[(14)]);
var inst_44892__$1 = cljs.core.seq.call(null,inst_44870);
var state_44993__$1 = (function (){var statearr_45050 = state_44993;
(statearr_45050[(7)] = inst_44892__$1);

return statearr_45050;
})();
if(inst_44892__$1){
var statearr_45051_45114 = state_44993__$1;
(statearr_45051_45114[(1)] = (16));

} else {
var statearr_45052_45115 = state_44993__$1;
(statearr_45052_45115[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (9))){
var inst_44922 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_45053_45116 = state_44993__$1;
(statearr_45053_45116[(2)] = inst_44922);

(statearr_45053_45116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (5))){
var inst_44868 = cljs.core.deref.call(null,cs);
var inst_44869 = cljs.core.seq.call(null,inst_44868);
var inst_44870 = inst_44869;
var inst_44871 = null;
var inst_44872 = (0);
var inst_44873 = (0);
var state_44993__$1 = (function (){var statearr_45054 = state_44993;
(statearr_45054[(13)] = inst_44871);

(statearr_45054[(14)] = inst_44870);

(statearr_45054[(15)] = inst_44872);

(statearr_45054[(16)] = inst_44873);

return statearr_45054;
})();
var statearr_45055_45117 = state_44993__$1;
(statearr_45055_45117[(2)] = null);

(statearr_45055_45117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (14))){
var state_44993__$1 = state_44993;
var statearr_45056_45118 = state_44993__$1;
(statearr_45056_45118[(2)] = null);

(statearr_45056_45118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (45))){
var inst_44983 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_45057_45119 = state_44993__$1;
(statearr_45057_45119[(2)] = inst_44983);

(statearr_45057_45119[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (26))){
var inst_44925 = (state_44993[(29)]);
var inst_44979 = (state_44993[(2)]);
var inst_44980 = cljs.core.seq.call(null,inst_44925);
var state_44993__$1 = (function (){var statearr_45058 = state_44993;
(statearr_45058[(31)] = inst_44979);

return statearr_45058;
})();
if(inst_44980){
var statearr_45059_45120 = state_44993__$1;
(statearr_45059_45120[(1)] = (42));

} else {
var statearr_45060_45121 = state_44993__$1;
(statearr_45060_45121[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (16))){
var inst_44892 = (state_44993[(7)]);
var inst_44894 = cljs.core.chunked_seq_QMARK_.call(null,inst_44892);
var state_44993__$1 = state_44993;
if(inst_44894){
var statearr_45061_45122 = state_44993__$1;
(statearr_45061_45122[(1)] = (19));

} else {
var statearr_45062_45123 = state_44993__$1;
(statearr_45062_45123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (38))){
var inst_44972 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_45063_45124 = state_44993__$1;
(statearr_45063_45124[(2)] = inst_44972);

(statearr_45063_45124[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (30))){
var state_44993__$1 = state_44993;
var statearr_45064_45125 = state_44993__$1;
(statearr_45064_45125[(2)] = null);

(statearr_45064_45125[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (10))){
var inst_44871 = (state_44993[(13)]);
var inst_44873 = (state_44993[(16)]);
var inst_44881 = cljs.core._nth.call(null,inst_44871,inst_44873);
var inst_44882 = cljs.core.nth.call(null,inst_44881,(0),null);
var inst_44883 = cljs.core.nth.call(null,inst_44881,(1),null);
var state_44993__$1 = (function (){var statearr_45065 = state_44993;
(statearr_45065[(26)] = inst_44882);

return statearr_45065;
})();
if(cljs.core.truth_(inst_44883)){
var statearr_45066_45126 = state_44993__$1;
(statearr_45066_45126[(1)] = (13));

} else {
var statearr_45067_45127 = state_44993__$1;
(statearr_45067_45127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (18))){
var inst_44918 = (state_44993[(2)]);
var state_44993__$1 = state_44993;
var statearr_45068_45128 = state_44993__$1;
(statearr_45068_45128[(2)] = inst_44918);

(statearr_45068_45128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (42))){
var state_44993__$1 = state_44993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44993__$1,(45),dchan);
} else {
if((state_val_44994 === (37))){
var inst_44861 = (state_44993[(10)]);
var inst_44952 = (state_44993[(25)]);
var inst_44961 = (state_44993[(23)]);
var inst_44961__$1 = cljs.core.first.call(null,inst_44952);
var inst_44962 = cljs.core.async.put_BANG_.call(null,inst_44961__$1,inst_44861,done);
var state_44993__$1 = (function (){var statearr_45069 = state_44993;
(statearr_45069[(23)] = inst_44961__$1);

return statearr_45069;
})();
if(cljs.core.truth_(inst_44962)){
var statearr_45070_45129 = state_44993__$1;
(statearr_45070_45129[(1)] = (39));

} else {
var statearr_45071_45130 = state_44993__$1;
(statearr_45071_45130[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44994 === (8))){
var inst_44872 = (state_44993[(15)]);
var inst_44873 = (state_44993[(16)]);
var inst_44875 = (inst_44873 < inst_44872);
var inst_44876 = inst_44875;
var state_44993__$1 = state_44993;
if(cljs.core.truth_(inst_44876)){
var statearr_45072_45131 = state_44993__$1;
(statearr_45072_45131[(1)] = (10));

} else {
var statearr_45073_45132 = state_44993__$1;
(statearr_45073_45132[(1)] = (11));

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
});})(c__38256__auto___45078,cs,m,dchan,dctr,done))
;
return ((function (switch__38233__auto__,c__38256__auto___45078,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38234__auto__ = null;
var cljs$core$async$mult_$_state_machine__38234__auto____0 = (function (){
var statearr_45074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45074[(0)] = cljs$core$async$mult_$_state_machine__38234__auto__);

(statearr_45074[(1)] = (1));

return statearr_45074;
});
var cljs$core$async$mult_$_state_machine__38234__auto____1 = (function (state_44993){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_44993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45075){if((e45075 instanceof Object)){
var ex__38237__auto__ = e45075;
var statearr_45076_45133 = state_44993;
(statearr_45076_45133[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45134 = state_44993;
state_44993 = G__45134;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38234__auto__ = function(state_44993){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38234__auto____1.call(this,state_44993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38234__auto____0;
cljs$core$async$mult_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38234__auto____1;
return cljs$core$async$mult_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___45078,cs,m,dchan,dctr,done))
})();
var state__38258__auto__ = (function (){var statearr_45077 = f__38257__auto__.call(null);
(statearr_45077[(6)] = c__38256__auto___45078);

return statearr_45077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___45078,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__45136 = arguments.length;
switch (G__45136) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___45148 = arguments.length;
var i__4731__auto___45149 = (0);
while(true){
if((i__4731__auto___45149 < len__4730__auto___45148)){
args__4736__auto__.push((arguments[i__4731__auto___45149]));

var G__45150 = (i__4731__auto___45149 + (1));
i__4731__auto___45149 = G__45150;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__45142){
var map__45143 = p__45142;
var map__45143__$1 = (((((!((map__45143 == null))))?(((((map__45143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45143):map__45143);
var opts = map__45143__$1;
var statearr_45145_45151 = state;
(statearr_45145_45151[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__45143,map__45143__$1,opts){
return (function (val){
var statearr_45146_45152 = state;
(statearr_45146_45152[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__45143,map__45143__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_45147_45153 = state;
(statearr_45147_45153[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq45138){
var G__45139 = cljs.core.first.call(null,seq45138);
var seq45138__$1 = cljs.core.next.call(null,seq45138);
var G__45140 = cljs.core.first.call(null,seq45138__$1);
var seq45138__$2 = cljs.core.next.call(null,seq45138__$1);
var G__45141 = cljs.core.first.call(null,seq45138__$2);
var seq45138__$3 = cljs.core.next.call(null,seq45138__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45139,G__45140,G__45141,seq45138__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45154 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45155){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta45155 = meta45155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45156,meta45155__$1){
var self__ = this;
var _45156__$1 = this;
return (new cljs.core.async.t_cljs$core$async45154(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45155__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45156){
var self__ = this;
var _45156__$1 = this;
return self__.meta45155;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta45155","meta45155",-392994079,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async45154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45154";

cljs.core.async.t_cljs$core$async45154.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45154");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45154.
 */
cljs.core.async.__GT_t_cljs$core$async45154 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async45154(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45155){
return (new cljs.core.async.t_cljs$core$async45154(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45155));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async45154(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38256__auto___45318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___45318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___45318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_45258){
var state_val_45259 = (state_45258[(1)]);
if((state_val_45259 === (7))){
var inst_45173 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
var statearr_45260_45319 = state_45258__$1;
(statearr_45260_45319[(2)] = inst_45173);

(statearr_45260_45319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (20))){
var inst_45185 = (state_45258[(7)]);
var state_45258__$1 = state_45258;
var statearr_45261_45320 = state_45258__$1;
(statearr_45261_45320[(2)] = inst_45185);

(statearr_45261_45320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (27))){
var state_45258__$1 = state_45258;
var statearr_45262_45321 = state_45258__$1;
(statearr_45262_45321[(2)] = null);

(statearr_45262_45321[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (1))){
var inst_45160 = (state_45258[(8)]);
var inst_45160__$1 = calc_state.call(null);
var inst_45162 = (inst_45160__$1 == null);
var inst_45163 = cljs.core.not.call(null,inst_45162);
var state_45258__$1 = (function (){var statearr_45263 = state_45258;
(statearr_45263[(8)] = inst_45160__$1);

return statearr_45263;
})();
if(inst_45163){
var statearr_45264_45322 = state_45258__$1;
(statearr_45264_45322[(1)] = (2));

} else {
var statearr_45265_45323 = state_45258__$1;
(statearr_45265_45323[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (24))){
var inst_45209 = (state_45258[(9)]);
var inst_45218 = (state_45258[(10)]);
var inst_45232 = (state_45258[(11)]);
var inst_45232__$1 = inst_45209.call(null,inst_45218);
var state_45258__$1 = (function (){var statearr_45266 = state_45258;
(statearr_45266[(11)] = inst_45232__$1);

return statearr_45266;
})();
if(cljs.core.truth_(inst_45232__$1)){
var statearr_45267_45324 = state_45258__$1;
(statearr_45267_45324[(1)] = (29));

} else {
var statearr_45268_45325 = state_45258__$1;
(statearr_45268_45325[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (4))){
var inst_45176 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
if(cljs.core.truth_(inst_45176)){
var statearr_45269_45326 = state_45258__$1;
(statearr_45269_45326[(1)] = (8));

} else {
var statearr_45270_45327 = state_45258__$1;
(statearr_45270_45327[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (15))){
var inst_45203 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
if(cljs.core.truth_(inst_45203)){
var statearr_45271_45328 = state_45258__$1;
(statearr_45271_45328[(1)] = (19));

} else {
var statearr_45272_45329 = state_45258__$1;
(statearr_45272_45329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (21))){
var inst_45208 = (state_45258[(12)]);
var inst_45208__$1 = (state_45258[(2)]);
var inst_45209 = cljs.core.get.call(null,inst_45208__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45210 = cljs.core.get.call(null,inst_45208__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45211 = cljs.core.get.call(null,inst_45208__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_45258__$1 = (function (){var statearr_45273 = state_45258;
(statearr_45273[(9)] = inst_45209);

(statearr_45273[(13)] = inst_45210);

(statearr_45273[(12)] = inst_45208__$1);

return statearr_45273;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_45258__$1,(22),inst_45211);
} else {
if((state_val_45259 === (31))){
var inst_45240 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
if(cljs.core.truth_(inst_45240)){
var statearr_45274_45330 = state_45258__$1;
(statearr_45274_45330[(1)] = (32));

} else {
var statearr_45275_45331 = state_45258__$1;
(statearr_45275_45331[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (32))){
var inst_45217 = (state_45258[(14)]);
var state_45258__$1 = state_45258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45258__$1,(35),out,inst_45217);
} else {
if((state_val_45259 === (33))){
var inst_45208 = (state_45258[(12)]);
var inst_45185 = inst_45208;
var state_45258__$1 = (function (){var statearr_45276 = state_45258;
(statearr_45276[(7)] = inst_45185);

return statearr_45276;
})();
var statearr_45277_45332 = state_45258__$1;
(statearr_45277_45332[(2)] = null);

(statearr_45277_45332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (13))){
var inst_45185 = (state_45258[(7)]);
var inst_45192 = inst_45185.cljs$lang$protocol_mask$partition0$;
var inst_45193 = (inst_45192 & (64));
var inst_45194 = inst_45185.cljs$core$ISeq$;
var inst_45195 = (cljs.core.PROTOCOL_SENTINEL === inst_45194);
var inst_45196 = ((inst_45193) || (inst_45195));
var state_45258__$1 = state_45258;
if(cljs.core.truth_(inst_45196)){
var statearr_45278_45333 = state_45258__$1;
(statearr_45278_45333[(1)] = (16));

} else {
var statearr_45279_45334 = state_45258__$1;
(statearr_45279_45334[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (22))){
var inst_45217 = (state_45258[(14)]);
var inst_45218 = (state_45258[(10)]);
var inst_45216 = (state_45258[(2)]);
var inst_45217__$1 = cljs.core.nth.call(null,inst_45216,(0),null);
var inst_45218__$1 = cljs.core.nth.call(null,inst_45216,(1),null);
var inst_45219 = (inst_45217__$1 == null);
var inst_45220 = cljs.core._EQ_.call(null,inst_45218__$1,change);
var inst_45221 = ((inst_45219) || (inst_45220));
var state_45258__$1 = (function (){var statearr_45280 = state_45258;
(statearr_45280[(14)] = inst_45217__$1);

(statearr_45280[(10)] = inst_45218__$1);

return statearr_45280;
})();
if(cljs.core.truth_(inst_45221)){
var statearr_45281_45335 = state_45258__$1;
(statearr_45281_45335[(1)] = (23));

} else {
var statearr_45282_45336 = state_45258__$1;
(statearr_45282_45336[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (36))){
var inst_45208 = (state_45258[(12)]);
var inst_45185 = inst_45208;
var state_45258__$1 = (function (){var statearr_45283 = state_45258;
(statearr_45283[(7)] = inst_45185);

return statearr_45283;
})();
var statearr_45284_45337 = state_45258__$1;
(statearr_45284_45337[(2)] = null);

(statearr_45284_45337[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (29))){
var inst_45232 = (state_45258[(11)]);
var state_45258__$1 = state_45258;
var statearr_45285_45338 = state_45258__$1;
(statearr_45285_45338[(2)] = inst_45232);

(statearr_45285_45338[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (6))){
var state_45258__$1 = state_45258;
var statearr_45286_45339 = state_45258__$1;
(statearr_45286_45339[(2)] = false);

(statearr_45286_45339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (28))){
var inst_45228 = (state_45258[(2)]);
var inst_45229 = calc_state.call(null);
var inst_45185 = inst_45229;
var state_45258__$1 = (function (){var statearr_45287 = state_45258;
(statearr_45287[(15)] = inst_45228);

(statearr_45287[(7)] = inst_45185);

return statearr_45287;
})();
var statearr_45288_45340 = state_45258__$1;
(statearr_45288_45340[(2)] = null);

(statearr_45288_45340[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (25))){
var inst_45254 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
var statearr_45289_45341 = state_45258__$1;
(statearr_45289_45341[(2)] = inst_45254);

(statearr_45289_45341[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (34))){
var inst_45252 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
var statearr_45290_45342 = state_45258__$1;
(statearr_45290_45342[(2)] = inst_45252);

(statearr_45290_45342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (17))){
var state_45258__$1 = state_45258;
var statearr_45291_45343 = state_45258__$1;
(statearr_45291_45343[(2)] = false);

(statearr_45291_45343[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (3))){
var state_45258__$1 = state_45258;
var statearr_45292_45344 = state_45258__$1;
(statearr_45292_45344[(2)] = false);

(statearr_45292_45344[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (12))){
var inst_45256 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45258__$1,inst_45256);
} else {
if((state_val_45259 === (2))){
var inst_45160 = (state_45258[(8)]);
var inst_45165 = inst_45160.cljs$lang$protocol_mask$partition0$;
var inst_45166 = (inst_45165 & (64));
var inst_45167 = inst_45160.cljs$core$ISeq$;
var inst_45168 = (cljs.core.PROTOCOL_SENTINEL === inst_45167);
var inst_45169 = ((inst_45166) || (inst_45168));
var state_45258__$1 = state_45258;
if(cljs.core.truth_(inst_45169)){
var statearr_45293_45345 = state_45258__$1;
(statearr_45293_45345[(1)] = (5));

} else {
var statearr_45294_45346 = state_45258__$1;
(statearr_45294_45346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (23))){
var inst_45217 = (state_45258[(14)]);
var inst_45223 = (inst_45217 == null);
var state_45258__$1 = state_45258;
if(cljs.core.truth_(inst_45223)){
var statearr_45295_45347 = state_45258__$1;
(statearr_45295_45347[(1)] = (26));

} else {
var statearr_45296_45348 = state_45258__$1;
(statearr_45296_45348[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (35))){
var inst_45243 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
if(cljs.core.truth_(inst_45243)){
var statearr_45297_45349 = state_45258__$1;
(statearr_45297_45349[(1)] = (36));

} else {
var statearr_45298_45350 = state_45258__$1;
(statearr_45298_45350[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (19))){
var inst_45185 = (state_45258[(7)]);
var inst_45205 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45185);
var state_45258__$1 = state_45258;
var statearr_45299_45351 = state_45258__$1;
(statearr_45299_45351[(2)] = inst_45205);

(statearr_45299_45351[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (11))){
var inst_45185 = (state_45258[(7)]);
var inst_45189 = (inst_45185 == null);
var inst_45190 = cljs.core.not.call(null,inst_45189);
var state_45258__$1 = state_45258;
if(inst_45190){
var statearr_45300_45352 = state_45258__$1;
(statearr_45300_45352[(1)] = (13));

} else {
var statearr_45301_45353 = state_45258__$1;
(statearr_45301_45353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (9))){
var inst_45160 = (state_45258[(8)]);
var state_45258__$1 = state_45258;
var statearr_45302_45354 = state_45258__$1;
(statearr_45302_45354[(2)] = inst_45160);

(statearr_45302_45354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (5))){
var state_45258__$1 = state_45258;
var statearr_45303_45355 = state_45258__$1;
(statearr_45303_45355[(2)] = true);

(statearr_45303_45355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (14))){
var state_45258__$1 = state_45258;
var statearr_45304_45356 = state_45258__$1;
(statearr_45304_45356[(2)] = false);

(statearr_45304_45356[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (26))){
var inst_45218 = (state_45258[(10)]);
var inst_45225 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45218);
var state_45258__$1 = state_45258;
var statearr_45305_45357 = state_45258__$1;
(statearr_45305_45357[(2)] = inst_45225);

(statearr_45305_45357[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (16))){
var state_45258__$1 = state_45258;
var statearr_45306_45358 = state_45258__$1;
(statearr_45306_45358[(2)] = true);

(statearr_45306_45358[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (38))){
var inst_45248 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
var statearr_45307_45359 = state_45258__$1;
(statearr_45307_45359[(2)] = inst_45248);

(statearr_45307_45359[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (30))){
var inst_45209 = (state_45258[(9)]);
var inst_45218 = (state_45258[(10)]);
var inst_45210 = (state_45258[(13)]);
var inst_45235 = cljs.core.empty_QMARK_.call(null,inst_45209);
var inst_45236 = inst_45210.call(null,inst_45218);
var inst_45237 = cljs.core.not.call(null,inst_45236);
var inst_45238 = ((inst_45235) && (inst_45237));
var state_45258__$1 = state_45258;
var statearr_45308_45360 = state_45258__$1;
(statearr_45308_45360[(2)] = inst_45238);

(statearr_45308_45360[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (10))){
var inst_45160 = (state_45258[(8)]);
var inst_45181 = (state_45258[(2)]);
var inst_45182 = cljs.core.get.call(null,inst_45181,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_45183 = cljs.core.get.call(null,inst_45181,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_45184 = cljs.core.get.call(null,inst_45181,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_45185 = inst_45160;
var state_45258__$1 = (function (){var statearr_45309 = state_45258;
(statearr_45309[(16)] = inst_45184);

(statearr_45309[(17)] = inst_45182);

(statearr_45309[(18)] = inst_45183);

(statearr_45309[(7)] = inst_45185);

return statearr_45309;
})();
var statearr_45310_45361 = state_45258__$1;
(statearr_45310_45361[(2)] = null);

(statearr_45310_45361[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (18))){
var inst_45200 = (state_45258[(2)]);
var state_45258__$1 = state_45258;
var statearr_45311_45362 = state_45258__$1;
(statearr_45311_45362[(2)] = inst_45200);

(statearr_45311_45362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (37))){
var state_45258__$1 = state_45258;
var statearr_45312_45363 = state_45258__$1;
(statearr_45312_45363[(2)] = null);

(statearr_45312_45363[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45259 === (8))){
var inst_45160 = (state_45258[(8)]);
var inst_45178 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45160);
var state_45258__$1 = state_45258;
var statearr_45313_45364 = state_45258__$1;
(statearr_45313_45364[(2)] = inst_45178);

(statearr_45313_45364[(1)] = (10));


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
});})(c__38256__auto___45318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38233__auto__,c__38256__auto___45318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38234__auto__ = null;
var cljs$core$async$mix_$_state_machine__38234__auto____0 = (function (){
var statearr_45314 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45314[(0)] = cljs$core$async$mix_$_state_machine__38234__auto__);

(statearr_45314[(1)] = (1));

return statearr_45314;
});
var cljs$core$async$mix_$_state_machine__38234__auto____1 = (function (state_45258){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_45258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45315){if((e45315 instanceof Object)){
var ex__38237__auto__ = e45315;
var statearr_45316_45365 = state_45258;
(statearr_45316_45365[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45366 = state_45258;
state_45258 = G__45366;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38234__auto__ = function(state_45258){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38234__auto____1.call(this,state_45258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38234__auto____0;
cljs$core$async$mix_$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38234__auto____1;
return cljs$core$async$mix_$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___45318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38258__auto__ = (function (){var statearr_45317 = f__38257__auto__.call(null);
(statearr_45317[(6)] = c__38256__auto___45318);

return statearr_45317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___45318,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__45368 = arguments.length;
switch (G__45368) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__45372 = arguments.length;
switch (G__45372) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__45370_SHARP_){
if(cljs.core.truth_(p1__45370_SHARP_.call(null,topic))){
return p1__45370_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__45370_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45373 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta45374){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta45374 = meta45374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45375,meta45374__$1){
var self__ = this;
var _45375__$1 = this;
return (new cljs.core.async.t_cljs$core$async45373(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta45374__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45375){
var self__ = this;
var _45375__$1 = this;
return self__.meta45374;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45373.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45373.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta45374","meta45374",354349442,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async45373.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45373";

cljs.core.async.t_cljs$core$async45373.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45373");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45373.
 */
cljs.core.async.__GT_t_cljs$core$async45373 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async45373(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45374){
return (new cljs.core.async.t_cljs$core$async45373(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta45374));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async45373(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38256__auto___45493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___45493,mults,ensure_mult,p){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___45493,mults,ensure_mult,p){
return (function (state_45447){
var state_val_45448 = (state_45447[(1)]);
if((state_val_45448 === (7))){
var inst_45443 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
var statearr_45449_45494 = state_45447__$1;
(statearr_45449_45494[(2)] = inst_45443);

(statearr_45449_45494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (20))){
var state_45447__$1 = state_45447;
var statearr_45450_45495 = state_45447__$1;
(statearr_45450_45495[(2)] = null);

(statearr_45450_45495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (1))){
var state_45447__$1 = state_45447;
var statearr_45451_45496 = state_45447__$1;
(statearr_45451_45496[(2)] = null);

(statearr_45451_45496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (24))){
var inst_45426 = (state_45447[(7)]);
var inst_45435 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45426);
var state_45447__$1 = state_45447;
var statearr_45452_45497 = state_45447__$1;
(statearr_45452_45497[(2)] = inst_45435);

(statearr_45452_45497[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (4))){
var inst_45378 = (state_45447[(8)]);
var inst_45378__$1 = (state_45447[(2)]);
var inst_45379 = (inst_45378__$1 == null);
var state_45447__$1 = (function (){var statearr_45453 = state_45447;
(statearr_45453[(8)] = inst_45378__$1);

return statearr_45453;
})();
if(cljs.core.truth_(inst_45379)){
var statearr_45454_45498 = state_45447__$1;
(statearr_45454_45498[(1)] = (5));

} else {
var statearr_45455_45499 = state_45447__$1;
(statearr_45455_45499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (15))){
var inst_45420 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
var statearr_45456_45500 = state_45447__$1;
(statearr_45456_45500[(2)] = inst_45420);

(statearr_45456_45500[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (21))){
var inst_45440 = (state_45447[(2)]);
var state_45447__$1 = (function (){var statearr_45457 = state_45447;
(statearr_45457[(9)] = inst_45440);

return statearr_45457;
})();
var statearr_45458_45501 = state_45447__$1;
(statearr_45458_45501[(2)] = null);

(statearr_45458_45501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (13))){
var inst_45402 = (state_45447[(10)]);
var inst_45404 = cljs.core.chunked_seq_QMARK_.call(null,inst_45402);
var state_45447__$1 = state_45447;
if(inst_45404){
var statearr_45459_45502 = state_45447__$1;
(statearr_45459_45502[(1)] = (16));

} else {
var statearr_45460_45503 = state_45447__$1;
(statearr_45460_45503[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (22))){
var inst_45432 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
if(cljs.core.truth_(inst_45432)){
var statearr_45461_45504 = state_45447__$1;
(statearr_45461_45504[(1)] = (23));

} else {
var statearr_45462_45505 = state_45447__$1;
(statearr_45462_45505[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (6))){
var inst_45378 = (state_45447[(8)]);
var inst_45428 = (state_45447[(11)]);
var inst_45426 = (state_45447[(7)]);
var inst_45426__$1 = topic_fn.call(null,inst_45378);
var inst_45427 = cljs.core.deref.call(null,mults);
var inst_45428__$1 = cljs.core.get.call(null,inst_45427,inst_45426__$1);
var state_45447__$1 = (function (){var statearr_45463 = state_45447;
(statearr_45463[(11)] = inst_45428__$1);

(statearr_45463[(7)] = inst_45426__$1);

return statearr_45463;
})();
if(cljs.core.truth_(inst_45428__$1)){
var statearr_45464_45506 = state_45447__$1;
(statearr_45464_45506[(1)] = (19));

} else {
var statearr_45465_45507 = state_45447__$1;
(statearr_45465_45507[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (25))){
var inst_45437 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
var statearr_45466_45508 = state_45447__$1;
(statearr_45466_45508[(2)] = inst_45437);

(statearr_45466_45508[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (17))){
var inst_45402 = (state_45447[(10)]);
var inst_45411 = cljs.core.first.call(null,inst_45402);
var inst_45412 = cljs.core.async.muxch_STAR_.call(null,inst_45411);
var inst_45413 = cljs.core.async.close_BANG_.call(null,inst_45412);
var inst_45414 = cljs.core.next.call(null,inst_45402);
var inst_45388 = inst_45414;
var inst_45389 = null;
var inst_45390 = (0);
var inst_45391 = (0);
var state_45447__$1 = (function (){var statearr_45467 = state_45447;
(statearr_45467[(12)] = inst_45391);

(statearr_45467[(13)] = inst_45413);

(statearr_45467[(14)] = inst_45388);

(statearr_45467[(15)] = inst_45390);

(statearr_45467[(16)] = inst_45389);

return statearr_45467;
})();
var statearr_45468_45509 = state_45447__$1;
(statearr_45468_45509[(2)] = null);

(statearr_45468_45509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (3))){
var inst_45445 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45447__$1,inst_45445);
} else {
if((state_val_45448 === (12))){
var inst_45422 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
var statearr_45469_45510 = state_45447__$1;
(statearr_45469_45510[(2)] = inst_45422);

(statearr_45469_45510[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (2))){
var state_45447__$1 = state_45447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45447__$1,(4),ch);
} else {
if((state_val_45448 === (23))){
var state_45447__$1 = state_45447;
var statearr_45470_45511 = state_45447__$1;
(statearr_45470_45511[(2)] = null);

(statearr_45470_45511[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (19))){
var inst_45378 = (state_45447[(8)]);
var inst_45428 = (state_45447[(11)]);
var inst_45430 = cljs.core.async.muxch_STAR_.call(null,inst_45428);
var state_45447__$1 = state_45447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45447__$1,(22),inst_45430,inst_45378);
} else {
if((state_val_45448 === (11))){
var inst_45402 = (state_45447[(10)]);
var inst_45388 = (state_45447[(14)]);
var inst_45402__$1 = cljs.core.seq.call(null,inst_45388);
var state_45447__$1 = (function (){var statearr_45471 = state_45447;
(statearr_45471[(10)] = inst_45402__$1);

return statearr_45471;
})();
if(inst_45402__$1){
var statearr_45472_45512 = state_45447__$1;
(statearr_45472_45512[(1)] = (13));

} else {
var statearr_45473_45513 = state_45447__$1;
(statearr_45473_45513[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (9))){
var inst_45424 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
var statearr_45474_45514 = state_45447__$1;
(statearr_45474_45514[(2)] = inst_45424);

(statearr_45474_45514[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (5))){
var inst_45385 = cljs.core.deref.call(null,mults);
var inst_45386 = cljs.core.vals.call(null,inst_45385);
var inst_45387 = cljs.core.seq.call(null,inst_45386);
var inst_45388 = inst_45387;
var inst_45389 = null;
var inst_45390 = (0);
var inst_45391 = (0);
var state_45447__$1 = (function (){var statearr_45475 = state_45447;
(statearr_45475[(12)] = inst_45391);

(statearr_45475[(14)] = inst_45388);

(statearr_45475[(15)] = inst_45390);

(statearr_45475[(16)] = inst_45389);

return statearr_45475;
})();
var statearr_45476_45515 = state_45447__$1;
(statearr_45476_45515[(2)] = null);

(statearr_45476_45515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (14))){
var state_45447__$1 = state_45447;
var statearr_45480_45516 = state_45447__$1;
(statearr_45480_45516[(2)] = null);

(statearr_45480_45516[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (16))){
var inst_45402 = (state_45447[(10)]);
var inst_45406 = cljs.core.chunk_first.call(null,inst_45402);
var inst_45407 = cljs.core.chunk_rest.call(null,inst_45402);
var inst_45408 = cljs.core.count.call(null,inst_45406);
var inst_45388 = inst_45407;
var inst_45389 = inst_45406;
var inst_45390 = inst_45408;
var inst_45391 = (0);
var state_45447__$1 = (function (){var statearr_45481 = state_45447;
(statearr_45481[(12)] = inst_45391);

(statearr_45481[(14)] = inst_45388);

(statearr_45481[(15)] = inst_45390);

(statearr_45481[(16)] = inst_45389);

return statearr_45481;
})();
var statearr_45482_45517 = state_45447__$1;
(statearr_45482_45517[(2)] = null);

(statearr_45482_45517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (10))){
var inst_45391 = (state_45447[(12)]);
var inst_45388 = (state_45447[(14)]);
var inst_45390 = (state_45447[(15)]);
var inst_45389 = (state_45447[(16)]);
var inst_45396 = cljs.core._nth.call(null,inst_45389,inst_45391);
var inst_45397 = cljs.core.async.muxch_STAR_.call(null,inst_45396);
var inst_45398 = cljs.core.async.close_BANG_.call(null,inst_45397);
var inst_45399 = (inst_45391 + (1));
var tmp45477 = inst_45388;
var tmp45478 = inst_45390;
var tmp45479 = inst_45389;
var inst_45388__$1 = tmp45477;
var inst_45389__$1 = tmp45479;
var inst_45390__$1 = tmp45478;
var inst_45391__$1 = inst_45399;
var state_45447__$1 = (function (){var statearr_45483 = state_45447;
(statearr_45483[(17)] = inst_45398);

(statearr_45483[(12)] = inst_45391__$1);

(statearr_45483[(14)] = inst_45388__$1);

(statearr_45483[(15)] = inst_45390__$1);

(statearr_45483[(16)] = inst_45389__$1);

return statearr_45483;
})();
var statearr_45484_45518 = state_45447__$1;
(statearr_45484_45518[(2)] = null);

(statearr_45484_45518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (18))){
var inst_45417 = (state_45447[(2)]);
var state_45447__$1 = state_45447;
var statearr_45485_45519 = state_45447__$1;
(statearr_45485_45519[(2)] = inst_45417);

(statearr_45485_45519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45448 === (8))){
var inst_45391 = (state_45447[(12)]);
var inst_45390 = (state_45447[(15)]);
var inst_45393 = (inst_45391 < inst_45390);
var inst_45394 = inst_45393;
var state_45447__$1 = state_45447;
if(cljs.core.truth_(inst_45394)){
var statearr_45486_45520 = state_45447__$1;
(statearr_45486_45520[(1)] = (10));

} else {
var statearr_45487_45521 = state_45447__$1;
(statearr_45487_45521[(1)] = (11));

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
});})(c__38256__auto___45493,mults,ensure_mult,p))
;
return ((function (switch__38233__auto__,c__38256__auto___45493,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_45488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45488[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_45488[(1)] = (1));

return statearr_45488;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_45447){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_45447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45489){if((e45489 instanceof Object)){
var ex__38237__auto__ = e45489;
var statearr_45490_45522 = state_45447;
(statearr_45490_45522[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45523 = state_45447;
state_45447 = G__45523;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_45447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_45447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___45493,mults,ensure_mult,p))
})();
var state__38258__auto__ = (function (){var statearr_45491 = f__38257__auto__.call(null);
(statearr_45491[(6)] = c__38256__auto___45493);

return statearr_45491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___45493,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__45525 = arguments.length;
switch (G__45525) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__45528 = arguments.length;
switch (G__45528) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__45531 = arguments.length;
switch (G__45531) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38256__auto___45598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___45598,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___45598,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_45570){
var state_val_45571 = (state_45570[(1)]);
if((state_val_45571 === (7))){
var state_45570__$1 = state_45570;
var statearr_45572_45599 = state_45570__$1;
(statearr_45572_45599[(2)] = null);

(statearr_45572_45599[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (1))){
var state_45570__$1 = state_45570;
var statearr_45573_45600 = state_45570__$1;
(statearr_45573_45600[(2)] = null);

(statearr_45573_45600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (4))){
var inst_45534 = (state_45570[(7)]);
var inst_45536 = (inst_45534 < cnt);
var state_45570__$1 = state_45570;
if(cljs.core.truth_(inst_45536)){
var statearr_45574_45601 = state_45570__$1;
(statearr_45574_45601[(1)] = (6));

} else {
var statearr_45575_45602 = state_45570__$1;
(statearr_45575_45602[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (15))){
var inst_45566 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
var statearr_45576_45603 = state_45570__$1;
(statearr_45576_45603[(2)] = inst_45566);

(statearr_45576_45603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (13))){
var inst_45559 = cljs.core.async.close_BANG_.call(null,out);
var state_45570__$1 = state_45570;
var statearr_45577_45604 = state_45570__$1;
(statearr_45577_45604[(2)] = inst_45559);

(statearr_45577_45604[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (6))){
var state_45570__$1 = state_45570;
var statearr_45578_45605 = state_45570__$1;
(statearr_45578_45605[(2)] = null);

(statearr_45578_45605[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (3))){
var inst_45568 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45570__$1,inst_45568);
} else {
if((state_val_45571 === (12))){
var inst_45556 = (state_45570[(8)]);
var inst_45556__$1 = (state_45570[(2)]);
var inst_45557 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_45556__$1);
var state_45570__$1 = (function (){var statearr_45579 = state_45570;
(statearr_45579[(8)] = inst_45556__$1);

return statearr_45579;
})();
if(cljs.core.truth_(inst_45557)){
var statearr_45580_45606 = state_45570__$1;
(statearr_45580_45606[(1)] = (13));

} else {
var statearr_45581_45607 = state_45570__$1;
(statearr_45581_45607[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (2))){
var inst_45533 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_45534 = (0);
var state_45570__$1 = (function (){var statearr_45582 = state_45570;
(statearr_45582[(7)] = inst_45534);

(statearr_45582[(9)] = inst_45533);

return statearr_45582;
})();
var statearr_45583_45608 = state_45570__$1;
(statearr_45583_45608[(2)] = null);

(statearr_45583_45608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (11))){
var inst_45534 = (state_45570[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45570,(10),Object,null,(9));
var inst_45543 = chs__$1.call(null,inst_45534);
var inst_45544 = done.call(null,inst_45534);
var inst_45545 = cljs.core.async.take_BANG_.call(null,inst_45543,inst_45544);
var state_45570__$1 = state_45570;
var statearr_45584_45609 = state_45570__$1;
(statearr_45584_45609[(2)] = inst_45545);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45570__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (9))){
var inst_45534 = (state_45570[(7)]);
var inst_45547 = (state_45570[(2)]);
var inst_45548 = (inst_45534 + (1));
var inst_45534__$1 = inst_45548;
var state_45570__$1 = (function (){var statearr_45585 = state_45570;
(statearr_45585[(7)] = inst_45534__$1);

(statearr_45585[(10)] = inst_45547);

return statearr_45585;
})();
var statearr_45586_45610 = state_45570__$1;
(statearr_45586_45610[(2)] = null);

(statearr_45586_45610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (5))){
var inst_45554 = (state_45570[(2)]);
var state_45570__$1 = (function (){var statearr_45587 = state_45570;
(statearr_45587[(11)] = inst_45554);

return statearr_45587;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45570__$1,(12),dchan);
} else {
if((state_val_45571 === (14))){
var inst_45556 = (state_45570[(8)]);
var inst_45561 = cljs.core.apply.call(null,f,inst_45556);
var state_45570__$1 = state_45570;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45570__$1,(16),out,inst_45561);
} else {
if((state_val_45571 === (16))){
var inst_45563 = (state_45570[(2)]);
var state_45570__$1 = (function (){var statearr_45588 = state_45570;
(statearr_45588[(12)] = inst_45563);

return statearr_45588;
})();
var statearr_45589_45611 = state_45570__$1;
(statearr_45589_45611[(2)] = null);

(statearr_45589_45611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (10))){
var inst_45538 = (state_45570[(2)]);
var inst_45539 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_45570__$1 = (function (){var statearr_45590 = state_45570;
(statearr_45590[(13)] = inst_45538);

return statearr_45590;
})();
var statearr_45591_45612 = state_45570__$1;
(statearr_45591_45612[(2)] = inst_45539);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45570__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45571 === (8))){
var inst_45552 = (state_45570[(2)]);
var state_45570__$1 = state_45570;
var statearr_45592_45613 = state_45570__$1;
(statearr_45592_45613[(2)] = inst_45552);

(statearr_45592_45613[(1)] = (5));


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
});})(c__38256__auto___45598,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38233__auto__,c__38256__auto___45598,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_45593 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45593[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_45593[(1)] = (1));

return statearr_45593;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_45570){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_45570);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45594){if((e45594 instanceof Object)){
var ex__38237__auto__ = e45594;
var statearr_45595_45614 = state_45570;
(statearr_45595_45614[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45594;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45615 = state_45570;
state_45570 = G__45615;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_45570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_45570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___45598,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38258__auto__ = (function (){var statearr_45596 = f__38257__auto__.call(null);
(statearr_45596[(6)] = c__38256__auto___45598);

return statearr_45596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___45598,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__45618 = arguments.length;
switch (G__45618) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38256__auto___45672 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___45672,out){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___45672,out){
return (function (state_45650){
var state_val_45651 = (state_45650[(1)]);
if((state_val_45651 === (7))){
var inst_45630 = (state_45650[(7)]);
var inst_45629 = (state_45650[(8)]);
var inst_45629__$1 = (state_45650[(2)]);
var inst_45630__$1 = cljs.core.nth.call(null,inst_45629__$1,(0),null);
var inst_45631 = cljs.core.nth.call(null,inst_45629__$1,(1),null);
var inst_45632 = (inst_45630__$1 == null);
var state_45650__$1 = (function (){var statearr_45652 = state_45650;
(statearr_45652[(7)] = inst_45630__$1);

(statearr_45652[(9)] = inst_45631);

(statearr_45652[(8)] = inst_45629__$1);

return statearr_45652;
})();
if(cljs.core.truth_(inst_45632)){
var statearr_45653_45673 = state_45650__$1;
(statearr_45653_45673[(1)] = (8));

} else {
var statearr_45654_45674 = state_45650__$1;
(statearr_45654_45674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45651 === (1))){
var inst_45619 = cljs.core.vec.call(null,chs);
var inst_45620 = inst_45619;
var state_45650__$1 = (function (){var statearr_45655 = state_45650;
(statearr_45655[(10)] = inst_45620);

return statearr_45655;
})();
var statearr_45656_45675 = state_45650__$1;
(statearr_45656_45675[(2)] = null);

(statearr_45656_45675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45651 === (4))){
var inst_45620 = (state_45650[(10)]);
var state_45650__$1 = state_45650;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45650__$1,(7),inst_45620);
} else {
if((state_val_45651 === (6))){
var inst_45646 = (state_45650[(2)]);
var state_45650__$1 = state_45650;
var statearr_45657_45676 = state_45650__$1;
(statearr_45657_45676[(2)] = inst_45646);

(statearr_45657_45676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45651 === (3))){
var inst_45648 = (state_45650[(2)]);
var state_45650__$1 = state_45650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45650__$1,inst_45648);
} else {
if((state_val_45651 === (2))){
var inst_45620 = (state_45650[(10)]);
var inst_45622 = cljs.core.count.call(null,inst_45620);
var inst_45623 = (inst_45622 > (0));
var state_45650__$1 = state_45650;
if(cljs.core.truth_(inst_45623)){
var statearr_45659_45677 = state_45650__$1;
(statearr_45659_45677[(1)] = (4));

} else {
var statearr_45660_45678 = state_45650__$1;
(statearr_45660_45678[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45651 === (11))){
var inst_45620 = (state_45650[(10)]);
var inst_45639 = (state_45650[(2)]);
var tmp45658 = inst_45620;
var inst_45620__$1 = tmp45658;
var state_45650__$1 = (function (){var statearr_45661 = state_45650;
(statearr_45661[(10)] = inst_45620__$1);

(statearr_45661[(11)] = inst_45639);

return statearr_45661;
})();
var statearr_45662_45679 = state_45650__$1;
(statearr_45662_45679[(2)] = null);

(statearr_45662_45679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45651 === (9))){
var inst_45630 = (state_45650[(7)]);
var state_45650__$1 = state_45650;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45650__$1,(11),out,inst_45630);
} else {
if((state_val_45651 === (5))){
var inst_45644 = cljs.core.async.close_BANG_.call(null,out);
var state_45650__$1 = state_45650;
var statearr_45663_45680 = state_45650__$1;
(statearr_45663_45680[(2)] = inst_45644);

(statearr_45663_45680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45651 === (10))){
var inst_45642 = (state_45650[(2)]);
var state_45650__$1 = state_45650;
var statearr_45664_45681 = state_45650__$1;
(statearr_45664_45681[(2)] = inst_45642);

(statearr_45664_45681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45651 === (8))){
var inst_45630 = (state_45650[(7)]);
var inst_45620 = (state_45650[(10)]);
var inst_45631 = (state_45650[(9)]);
var inst_45629 = (state_45650[(8)]);
var inst_45634 = (function (){var cs = inst_45620;
var vec__45625 = inst_45629;
var v = inst_45630;
var c = inst_45631;
return ((function (cs,vec__45625,v,c,inst_45630,inst_45620,inst_45631,inst_45629,state_val_45651,c__38256__auto___45672,out){
return (function (p1__45616_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__45616_SHARP_);
});
;})(cs,vec__45625,v,c,inst_45630,inst_45620,inst_45631,inst_45629,state_val_45651,c__38256__auto___45672,out))
})();
var inst_45635 = cljs.core.filterv.call(null,inst_45634,inst_45620);
var inst_45620__$1 = inst_45635;
var state_45650__$1 = (function (){var statearr_45665 = state_45650;
(statearr_45665[(10)] = inst_45620__$1);

return statearr_45665;
})();
var statearr_45666_45682 = state_45650__$1;
(statearr_45666_45682[(2)] = null);

(statearr_45666_45682[(1)] = (2));


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
});})(c__38256__auto___45672,out))
;
return ((function (switch__38233__auto__,c__38256__auto___45672,out){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_45667 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45667[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_45667[(1)] = (1));

return statearr_45667;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_45650){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_45650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45668){if((e45668 instanceof Object)){
var ex__38237__auto__ = e45668;
var statearr_45669_45683 = state_45650;
(statearr_45669_45683[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45684 = state_45650;
state_45650 = G__45684;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_45650){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_45650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___45672,out))
})();
var state__38258__auto__ = (function (){var statearr_45670 = f__38257__auto__.call(null);
(statearr_45670[(6)] = c__38256__auto___45672);

return statearr_45670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___45672,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__45686 = arguments.length;
switch (G__45686) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38256__auto___45731 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___45731,out){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___45731,out){
return (function (state_45710){
var state_val_45711 = (state_45710[(1)]);
if((state_val_45711 === (7))){
var inst_45692 = (state_45710[(7)]);
var inst_45692__$1 = (state_45710[(2)]);
var inst_45693 = (inst_45692__$1 == null);
var inst_45694 = cljs.core.not.call(null,inst_45693);
var state_45710__$1 = (function (){var statearr_45712 = state_45710;
(statearr_45712[(7)] = inst_45692__$1);

return statearr_45712;
})();
if(inst_45694){
var statearr_45713_45732 = state_45710__$1;
(statearr_45713_45732[(1)] = (8));

} else {
var statearr_45714_45733 = state_45710__$1;
(statearr_45714_45733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45711 === (1))){
var inst_45687 = (0);
var state_45710__$1 = (function (){var statearr_45715 = state_45710;
(statearr_45715[(8)] = inst_45687);

return statearr_45715;
})();
var statearr_45716_45734 = state_45710__$1;
(statearr_45716_45734[(2)] = null);

(statearr_45716_45734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45711 === (4))){
var state_45710__$1 = state_45710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45710__$1,(7),ch);
} else {
if((state_val_45711 === (6))){
var inst_45705 = (state_45710[(2)]);
var state_45710__$1 = state_45710;
var statearr_45717_45735 = state_45710__$1;
(statearr_45717_45735[(2)] = inst_45705);

(statearr_45717_45735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45711 === (3))){
var inst_45707 = (state_45710[(2)]);
var inst_45708 = cljs.core.async.close_BANG_.call(null,out);
var state_45710__$1 = (function (){var statearr_45718 = state_45710;
(statearr_45718[(9)] = inst_45707);

return statearr_45718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45710__$1,inst_45708);
} else {
if((state_val_45711 === (2))){
var inst_45687 = (state_45710[(8)]);
var inst_45689 = (inst_45687 < n);
var state_45710__$1 = state_45710;
if(cljs.core.truth_(inst_45689)){
var statearr_45719_45736 = state_45710__$1;
(statearr_45719_45736[(1)] = (4));

} else {
var statearr_45720_45737 = state_45710__$1;
(statearr_45720_45737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45711 === (11))){
var inst_45687 = (state_45710[(8)]);
var inst_45697 = (state_45710[(2)]);
var inst_45698 = (inst_45687 + (1));
var inst_45687__$1 = inst_45698;
var state_45710__$1 = (function (){var statearr_45721 = state_45710;
(statearr_45721[(8)] = inst_45687__$1);

(statearr_45721[(10)] = inst_45697);

return statearr_45721;
})();
var statearr_45722_45738 = state_45710__$1;
(statearr_45722_45738[(2)] = null);

(statearr_45722_45738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45711 === (9))){
var state_45710__$1 = state_45710;
var statearr_45723_45739 = state_45710__$1;
(statearr_45723_45739[(2)] = null);

(statearr_45723_45739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45711 === (5))){
var state_45710__$1 = state_45710;
var statearr_45724_45740 = state_45710__$1;
(statearr_45724_45740[(2)] = null);

(statearr_45724_45740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45711 === (10))){
var inst_45702 = (state_45710[(2)]);
var state_45710__$1 = state_45710;
var statearr_45725_45741 = state_45710__$1;
(statearr_45725_45741[(2)] = inst_45702);

(statearr_45725_45741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45711 === (8))){
var inst_45692 = (state_45710[(7)]);
var state_45710__$1 = state_45710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45710__$1,(11),out,inst_45692);
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
});})(c__38256__auto___45731,out))
;
return ((function (switch__38233__auto__,c__38256__auto___45731,out){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_45726 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45726[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_45726[(1)] = (1));

return statearr_45726;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_45710){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_45710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45727){if((e45727 instanceof Object)){
var ex__38237__auto__ = e45727;
var statearr_45728_45742 = state_45710;
(statearr_45728_45742[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45743 = state_45710;
state_45710 = G__45743;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_45710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_45710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___45731,out))
})();
var state__38258__auto__ = (function (){var statearr_45729 = f__38257__auto__.call(null);
(statearr_45729[(6)] = c__38256__auto___45731);

return statearr_45729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___45731,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45745 = (function (f,ch,meta45746){
this.f = f;
this.ch = ch;
this.meta45746 = meta45746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45747,meta45746__$1){
var self__ = this;
var _45747__$1 = this;
return (new cljs.core.async.t_cljs$core$async45745(self__.f,self__.ch,meta45746__$1));
});

cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45747){
var self__ = this;
var _45747__$1 = this;
return self__.meta45746;
});

cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45748 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45748 = (function (f,ch,meta45746,_,fn1,meta45749){
this.f = f;
this.ch = ch;
this.meta45746 = meta45746;
this._ = _;
this.fn1 = fn1;
this.meta45749 = meta45749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45750,meta45749__$1){
var self__ = this;
var _45750__$1 = this;
return (new cljs.core.async.t_cljs$core$async45748(self__.f,self__.ch,self__.meta45746,self__._,self__.fn1,meta45749__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45750){
var self__ = this;
var _45750__$1 = this;
return self__.meta45749;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45748.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45748.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45744_SHARP_){
return f1.call(null,(((p1__45744_SHARP_ == null))?null:self__.f.call(null,p1__45744_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45748.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45746","meta45746",705037358,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45745","cljs.core.async/t_cljs$core$async45745",-2006975330,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45749","meta45749",-122686593,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45748";

cljs.core.async.t_cljs$core$async45748.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45748");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45748.
 */
cljs.core.async.__GT_t_cljs$core$async45748 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45748(f__$1,ch__$1,meta45746__$1,___$2,fn1__$1,meta45749){
return (new cljs.core.async.t_cljs$core$async45748(f__$1,ch__$1,meta45746__$1,___$2,fn1__$1,meta45749));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45748(self__.f,self__.ch,self__.meta45746,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45745.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45746","meta45746",705037358,null)], null);
});

cljs.core.async.t_cljs$core$async45745.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45745";

cljs.core.async.t_cljs$core$async45745.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45745");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45745.
 */
cljs.core.async.__GT_t_cljs$core$async45745 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45745(f__$1,ch__$1,meta45746){
return (new cljs.core.async.t_cljs$core$async45745(f__$1,ch__$1,meta45746));
});

}

return (new cljs.core.async.t_cljs$core$async45745(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45751 = (function (f,ch,meta45752){
this.f = f;
this.ch = ch;
this.meta45752 = meta45752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45753,meta45752__$1){
var self__ = this;
var _45753__$1 = this;
return (new cljs.core.async.t_cljs$core$async45751(self__.f,self__.ch,meta45752__$1));
});

cljs.core.async.t_cljs$core$async45751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45753){
var self__ = this;
var _45753__$1 = this;
return self__.meta45752;
});

cljs.core.async.t_cljs$core$async45751.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45751.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45751.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45751.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45751.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45751.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45751.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45752","meta45752",254525100,null)], null);
});

cljs.core.async.t_cljs$core$async45751.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45751.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45751";

cljs.core.async.t_cljs$core$async45751.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45751");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45751.
 */
cljs.core.async.__GT_t_cljs$core$async45751 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45751(f__$1,ch__$1,meta45752){
return (new cljs.core.async.t_cljs$core$async45751(f__$1,ch__$1,meta45752));
});

}

return (new cljs.core.async.t_cljs$core$async45751(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45754 = (function (p,ch,meta45755){
this.p = p;
this.ch = ch;
this.meta45755 = meta45755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45756,meta45755__$1){
var self__ = this;
var _45756__$1 = this;
return (new cljs.core.async.t_cljs$core$async45754(self__.p,self__.ch,meta45755__$1));
});

cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45756){
var self__ = this;
var _45756__$1 = this;
return self__.meta45755;
});

cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45754.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45755","meta45755",1421542665,null)], null);
});

cljs.core.async.t_cljs$core$async45754.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45754.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45754";

cljs.core.async.t_cljs$core$async45754.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45754");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45754.
 */
cljs.core.async.__GT_t_cljs$core$async45754 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45754(p__$1,ch__$1,meta45755){
return (new cljs.core.async.t_cljs$core$async45754(p__$1,ch__$1,meta45755));
});

}

return (new cljs.core.async.t_cljs$core$async45754(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__45758 = arguments.length;
switch (G__45758) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38256__auto___45798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___45798,out){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___45798,out){
return (function (state_45779){
var state_val_45780 = (state_45779[(1)]);
if((state_val_45780 === (7))){
var inst_45775 = (state_45779[(2)]);
var state_45779__$1 = state_45779;
var statearr_45781_45799 = state_45779__$1;
(statearr_45781_45799[(2)] = inst_45775);

(statearr_45781_45799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (1))){
var state_45779__$1 = state_45779;
var statearr_45782_45800 = state_45779__$1;
(statearr_45782_45800[(2)] = null);

(statearr_45782_45800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (4))){
var inst_45761 = (state_45779[(7)]);
var inst_45761__$1 = (state_45779[(2)]);
var inst_45762 = (inst_45761__$1 == null);
var state_45779__$1 = (function (){var statearr_45783 = state_45779;
(statearr_45783[(7)] = inst_45761__$1);

return statearr_45783;
})();
if(cljs.core.truth_(inst_45762)){
var statearr_45784_45801 = state_45779__$1;
(statearr_45784_45801[(1)] = (5));

} else {
var statearr_45785_45802 = state_45779__$1;
(statearr_45785_45802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (6))){
var inst_45761 = (state_45779[(7)]);
var inst_45766 = p.call(null,inst_45761);
var state_45779__$1 = state_45779;
if(cljs.core.truth_(inst_45766)){
var statearr_45786_45803 = state_45779__$1;
(statearr_45786_45803[(1)] = (8));

} else {
var statearr_45787_45804 = state_45779__$1;
(statearr_45787_45804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (3))){
var inst_45777 = (state_45779[(2)]);
var state_45779__$1 = state_45779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45779__$1,inst_45777);
} else {
if((state_val_45780 === (2))){
var state_45779__$1 = state_45779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45779__$1,(4),ch);
} else {
if((state_val_45780 === (11))){
var inst_45769 = (state_45779[(2)]);
var state_45779__$1 = state_45779;
var statearr_45788_45805 = state_45779__$1;
(statearr_45788_45805[(2)] = inst_45769);

(statearr_45788_45805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (9))){
var state_45779__$1 = state_45779;
var statearr_45789_45806 = state_45779__$1;
(statearr_45789_45806[(2)] = null);

(statearr_45789_45806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (5))){
var inst_45764 = cljs.core.async.close_BANG_.call(null,out);
var state_45779__$1 = state_45779;
var statearr_45790_45807 = state_45779__$1;
(statearr_45790_45807[(2)] = inst_45764);

(statearr_45790_45807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (10))){
var inst_45772 = (state_45779[(2)]);
var state_45779__$1 = (function (){var statearr_45791 = state_45779;
(statearr_45791[(8)] = inst_45772);

return statearr_45791;
})();
var statearr_45792_45808 = state_45779__$1;
(statearr_45792_45808[(2)] = null);

(statearr_45792_45808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45780 === (8))){
var inst_45761 = (state_45779[(7)]);
var state_45779__$1 = state_45779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45779__$1,(11),out,inst_45761);
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
});})(c__38256__auto___45798,out))
;
return ((function (switch__38233__auto__,c__38256__auto___45798,out){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_45793 = [null,null,null,null,null,null,null,null,null];
(statearr_45793[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_45793[(1)] = (1));

return statearr_45793;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_45779){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_45779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45794){if((e45794 instanceof Object)){
var ex__38237__auto__ = e45794;
var statearr_45795_45809 = state_45779;
(statearr_45795_45809[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45810 = state_45779;
state_45779 = G__45810;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_45779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_45779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___45798,out))
})();
var state__38258__auto__ = (function (){var statearr_45796 = f__38257__auto__.call(null);
(statearr_45796[(6)] = c__38256__auto___45798);

return statearr_45796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___45798,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45812 = arguments.length;
switch (G__45812) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38256__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto__){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto__){
return (function (state_45875){
var state_val_45876 = (state_45875[(1)]);
if((state_val_45876 === (7))){
var inst_45871 = (state_45875[(2)]);
var state_45875__$1 = state_45875;
var statearr_45877_45915 = state_45875__$1;
(statearr_45877_45915[(2)] = inst_45871);

(statearr_45877_45915[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (20))){
var inst_45841 = (state_45875[(7)]);
var inst_45852 = (state_45875[(2)]);
var inst_45853 = cljs.core.next.call(null,inst_45841);
var inst_45827 = inst_45853;
var inst_45828 = null;
var inst_45829 = (0);
var inst_45830 = (0);
var state_45875__$1 = (function (){var statearr_45878 = state_45875;
(statearr_45878[(8)] = inst_45830);

(statearr_45878[(9)] = inst_45827);

(statearr_45878[(10)] = inst_45829);

(statearr_45878[(11)] = inst_45828);

(statearr_45878[(12)] = inst_45852);

return statearr_45878;
})();
var statearr_45879_45916 = state_45875__$1;
(statearr_45879_45916[(2)] = null);

(statearr_45879_45916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (1))){
var state_45875__$1 = state_45875;
var statearr_45880_45917 = state_45875__$1;
(statearr_45880_45917[(2)] = null);

(statearr_45880_45917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (4))){
var inst_45816 = (state_45875[(13)]);
var inst_45816__$1 = (state_45875[(2)]);
var inst_45817 = (inst_45816__$1 == null);
var state_45875__$1 = (function (){var statearr_45881 = state_45875;
(statearr_45881[(13)] = inst_45816__$1);

return statearr_45881;
})();
if(cljs.core.truth_(inst_45817)){
var statearr_45882_45918 = state_45875__$1;
(statearr_45882_45918[(1)] = (5));

} else {
var statearr_45883_45919 = state_45875__$1;
(statearr_45883_45919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (15))){
var state_45875__$1 = state_45875;
var statearr_45887_45920 = state_45875__$1;
(statearr_45887_45920[(2)] = null);

(statearr_45887_45920[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (21))){
var state_45875__$1 = state_45875;
var statearr_45888_45921 = state_45875__$1;
(statearr_45888_45921[(2)] = null);

(statearr_45888_45921[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (13))){
var inst_45830 = (state_45875[(8)]);
var inst_45827 = (state_45875[(9)]);
var inst_45829 = (state_45875[(10)]);
var inst_45828 = (state_45875[(11)]);
var inst_45837 = (state_45875[(2)]);
var inst_45838 = (inst_45830 + (1));
var tmp45884 = inst_45827;
var tmp45885 = inst_45829;
var tmp45886 = inst_45828;
var inst_45827__$1 = tmp45884;
var inst_45828__$1 = tmp45886;
var inst_45829__$1 = tmp45885;
var inst_45830__$1 = inst_45838;
var state_45875__$1 = (function (){var statearr_45889 = state_45875;
(statearr_45889[(8)] = inst_45830__$1);

(statearr_45889[(9)] = inst_45827__$1);

(statearr_45889[(10)] = inst_45829__$1);

(statearr_45889[(11)] = inst_45828__$1);

(statearr_45889[(14)] = inst_45837);

return statearr_45889;
})();
var statearr_45890_45922 = state_45875__$1;
(statearr_45890_45922[(2)] = null);

(statearr_45890_45922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (22))){
var state_45875__$1 = state_45875;
var statearr_45891_45923 = state_45875__$1;
(statearr_45891_45923[(2)] = null);

(statearr_45891_45923[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (6))){
var inst_45816 = (state_45875[(13)]);
var inst_45825 = f.call(null,inst_45816);
var inst_45826 = cljs.core.seq.call(null,inst_45825);
var inst_45827 = inst_45826;
var inst_45828 = null;
var inst_45829 = (0);
var inst_45830 = (0);
var state_45875__$1 = (function (){var statearr_45892 = state_45875;
(statearr_45892[(8)] = inst_45830);

(statearr_45892[(9)] = inst_45827);

(statearr_45892[(10)] = inst_45829);

(statearr_45892[(11)] = inst_45828);

return statearr_45892;
})();
var statearr_45893_45924 = state_45875__$1;
(statearr_45893_45924[(2)] = null);

(statearr_45893_45924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (17))){
var inst_45841 = (state_45875[(7)]);
var inst_45845 = cljs.core.chunk_first.call(null,inst_45841);
var inst_45846 = cljs.core.chunk_rest.call(null,inst_45841);
var inst_45847 = cljs.core.count.call(null,inst_45845);
var inst_45827 = inst_45846;
var inst_45828 = inst_45845;
var inst_45829 = inst_45847;
var inst_45830 = (0);
var state_45875__$1 = (function (){var statearr_45894 = state_45875;
(statearr_45894[(8)] = inst_45830);

(statearr_45894[(9)] = inst_45827);

(statearr_45894[(10)] = inst_45829);

(statearr_45894[(11)] = inst_45828);

return statearr_45894;
})();
var statearr_45895_45925 = state_45875__$1;
(statearr_45895_45925[(2)] = null);

(statearr_45895_45925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (3))){
var inst_45873 = (state_45875[(2)]);
var state_45875__$1 = state_45875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45875__$1,inst_45873);
} else {
if((state_val_45876 === (12))){
var inst_45861 = (state_45875[(2)]);
var state_45875__$1 = state_45875;
var statearr_45896_45926 = state_45875__$1;
(statearr_45896_45926[(2)] = inst_45861);

(statearr_45896_45926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (2))){
var state_45875__$1 = state_45875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45875__$1,(4),in$);
} else {
if((state_val_45876 === (23))){
var inst_45869 = (state_45875[(2)]);
var state_45875__$1 = state_45875;
var statearr_45897_45927 = state_45875__$1;
(statearr_45897_45927[(2)] = inst_45869);

(statearr_45897_45927[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (19))){
var inst_45856 = (state_45875[(2)]);
var state_45875__$1 = state_45875;
var statearr_45898_45928 = state_45875__$1;
(statearr_45898_45928[(2)] = inst_45856);

(statearr_45898_45928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (11))){
var inst_45827 = (state_45875[(9)]);
var inst_45841 = (state_45875[(7)]);
var inst_45841__$1 = cljs.core.seq.call(null,inst_45827);
var state_45875__$1 = (function (){var statearr_45899 = state_45875;
(statearr_45899[(7)] = inst_45841__$1);

return statearr_45899;
})();
if(inst_45841__$1){
var statearr_45900_45929 = state_45875__$1;
(statearr_45900_45929[(1)] = (14));

} else {
var statearr_45901_45930 = state_45875__$1;
(statearr_45901_45930[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (9))){
var inst_45863 = (state_45875[(2)]);
var inst_45864 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45875__$1 = (function (){var statearr_45902 = state_45875;
(statearr_45902[(15)] = inst_45863);

return statearr_45902;
})();
if(cljs.core.truth_(inst_45864)){
var statearr_45903_45931 = state_45875__$1;
(statearr_45903_45931[(1)] = (21));

} else {
var statearr_45904_45932 = state_45875__$1;
(statearr_45904_45932[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (5))){
var inst_45819 = cljs.core.async.close_BANG_.call(null,out);
var state_45875__$1 = state_45875;
var statearr_45905_45933 = state_45875__$1;
(statearr_45905_45933[(2)] = inst_45819);

(statearr_45905_45933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (14))){
var inst_45841 = (state_45875[(7)]);
var inst_45843 = cljs.core.chunked_seq_QMARK_.call(null,inst_45841);
var state_45875__$1 = state_45875;
if(inst_45843){
var statearr_45906_45934 = state_45875__$1;
(statearr_45906_45934[(1)] = (17));

} else {
var statearr_45907_45935 = state_45875__$1;
(statearr_45907_45935[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (16))){
var inst_45859 = (state_45875[(2)]);
var state_45875__$1 = state_45875;
var statearr_45908_45936 = state_45875__$1;
(statearr_45908_45936[(2)] = inst_45859);

(statearr_45908_45936[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45876 === (10))){
var inst_45830 = (state_45875[(8)]);
var inst_45828 = (state_45875[(11)]);
var inst_45835 = cljs.core._nth.call(null,inst_45828,inst_45830);
var state_45875__$1 = state_45875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45875__$1,(13),out,inst_45835);
} else {
if((state_val_45876 === (18))){
var inst_45841 = (state_45875[(7)]);
var inst_45850 = cljs.core.first.call(null,inst_45841);
var state_45875__$1 = state_45875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45875__$1,(20),out,inst_45850);
} else {
if((state_val_45876 === (8))){
var inst_45830 = (state_45875[(8)]);
var inst_45829 = (state_45875[(10)]);
var inst_45832 = (inst_45830 < inst_45829);
var inst_45833 = inst_45832;
var state_45875__$1 = state_45875;
if(cljs.core.truth_(inst_45833)){
var statearr_45909_45937 = state_45875__$1;
(statearr_45909_45937[(1)] = (10));

} else {
var statearr_45910_45938 = state_45875__$1;
(statearr_45910_45938[(1)] = (11));

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
});})(c__38256__auto__))
;
return ((function (switch__38233__auto__,c__38256__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38234__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38234__auto____0 = (function (){
var statearr_45911 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45911[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38234__auto__);

(statearr_45911[(1)] = (1));

return statearr_45911;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38234__auto____1 = (function (state_45875){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_45875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45912){if((e45912 instanceof Object)){
var ex__38237__auto__ = e45912;
var statearr_45913_45939 = state_45875;
(statearr_45913_45939[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45940 = state_45875;
state_45875 = G__45940;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38234__auto__ = function(state_45875){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38234__auto____1.call(this,state_45875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38234__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38234__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto__))
})();
var state__38258__auto__ = (function (){var statearr_45914 = f__38257__auto__.call(null);
(statearr_45914[(6)] = c__38256__auto__);

return statearr_45914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto__))
);

return c__38256__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45942 = arguments.length;
switch (G__45942) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__45945 = arguments.length;
switch (G__45945) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__45948 = arguments.length;
switch (G__45948) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38256__auto___45995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___45995,out){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___45995,out){
return (function (state_45972){
var state_val_45973 = (state_45972[(1)]);
if((state_val_45973 === (7))){
var inst_45967 = (state_45972[(2)]);
var state_45972__$1 = state_45972;
var statearr_45974_45996 = state_45972__$1;
(statearr_45974_45996[(2)] = inst_45967);

(statearr_45974_45996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45973 === (1))){
var inst_45949 = null;
var state_45972__$1 = (function (){var statearr_45975 = state_45972;
(statearr_45975[(7)] = inst_45949);

return statearr_45975;
})();
var statearr_45976_45997 = state_45972__$1;
(statearr_45976_45997[(2)] = null);

(statearr_45976_45997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45973 === (4))){
var inst_45952 = (state_45972[(8)]);
var inst_45952__$1 = (state_45972[(2)]);
var inst_45953 = (inst_45952__$1 == null);
var inst_45954 = cljs.core.not.call(null,inst_45953);
var state_45972__$1 = (function (){var statearr_45977 = state_45972;
(statearr_45977[(8)] = inst_45952__$1);

return statearr_45977;
})();
if(inst_45954){
var statearr_45978_45998 = state_45972__$1;
(statearr_45978_45998[(1)] = (5));

} else {
var statearr_45979_45999 = state_45972__$1;
(statearr_45979_45999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45973 === (6))){
var state_45972__$1 = state_45972;
var statearr_45980_46000 = state_45972__$1;
(statearr_45980_46000[(2)] = null);

(statearr_45980_46000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45973 === (3))){
var inst_45969 = (state_45972[(2)]);
var inst_45970 = cljs.core.async.close_BANG_.call(null,out);
var state_45972__$1 = (function (){var statearr_45981 = state_45972;
(statearr_45981[(9)] = inst_45969);

return statearr_45981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45972__$1,inst_45970);
} else {
if((state_val_45973 === (2))){
var state_45972__$1 = state_45972;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45972__$1,(4),ch);
} else {
if((state_val_45973 === (11))){
var inst_45952 = (state_45972[(8)]);
var inst_45961 = (state_45972[(2)]);
var inst_45949 = inst_45952;
var state_45972__$1 = (function (){var statearr_45982 = state_45972;
(statearr_45982[(10)] = inst_45961);

(statearr_45982[(7)] = inst_45949);

return statearr_45982;
})();
var statearr_45983_46001 = state_45972__$1;
(statearr_45983_46001[(2)] = null);

(statearr_45983_46001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45973 === (9))){
var inst_45952 = (state_45972[(8)]);
var state_45972__$1 = state_45972;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45972__$1,(11),out,inst_45952);
} else {
if((state_val_45973 === (5))){
var inst_45952 = (state_45972[(8)]);
var inst_45949 = (state_45972[(7)]);
var inst_45956 = cljs.core._EQ_.call(null,inst_45952,inst_45949);
var state_45972__$1 = state_45972;
if(inst_45956){
var statearr_45985_46002 = state_45972__$1;
(statearr_45985_46002[(1)] = (8));

} else {
var statearr_45986_46003 = state_45972__$1;
(statearr_45986_46003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45973 === (10))){
var inst_45964 = (state_45972[(2)]);
var state_45972__$1 = state_45972;
var statearr_45987_46004 = state_45972__$1;
(statearr_45987_46004[(2)] = inst_45964);

(statearr_45987_46004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45973 === (8))){
var inst_45949 = (state_45972[(7)]);
var tmp45984 = inst_45949;
var inst_45949__$1 = tmp45984;
var state_45972__$1 = (function (){var statearr_45988 = state_45972;
(statearr_45988[(7)] = inst_45949__$1);

return statearr_45988;
})();
var statearr_45989_46005 = state_45972__$1;
(statearr_45989_46005[(2)] = null);

(statearr_45989_46005[(1)] = (2));


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
});})(c__38256__auto___45995,out))
;
return ((function (switch__38233__auto__,c__38256__auto___45995,out){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_45990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45990[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_45990[(1)] = (1));

return statearr_45990;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_45972){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_45972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e45991){if((e45991 instanceof Object)){
var ex__38237__auto__ = e45991;
var statearr_45992_46006 = state_45972;
(statearr_45992_46006[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46007 = state_45972;
state_45972 = G__46007;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_45972){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_45972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___45995,out))
})();
var state__38258__auto__ = (function (){var statearr_45993 = f__38257__auto__.call(null);
(statearr_45993[(6)] = c__38256__auto___45995);

return statearr_45993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___45995,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__46009 = arguments.length;
switch (G__46009) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38256__auto___46075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___46075,out){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___46075,out){
return (function (state_46047){
var state_val_46048 = (state_46047[(1)]);
if((state_val_46048 === (7))){
var inst_46043 = (state_46047[(2)]);
var state_46047__$1 = state_46047;
var statearr_46049_46076 = state_46047__$1;
(statearr_46049_46076[(2)] = inst_46043);

(statearr_46049_46076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (1))){
var inst_46010 = (new Array(n));
var inst_46011 = inst_46010;
var inst_46012 = (0);
var state_46047__$1 = (function (){var statearr_46050 = state_46047;
(statearr_46050[(7)] = inst_46011);

(statearr_46050[(8)] = inst_46012);

return statearr_46050;
})();
var statearr_46051_46077 = state_46047__$1;
(statearr_46051_46077[(2)] = null);

(statearr_46051_46077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (4))){
var inst_46015 = (state_46047[(9)]);
var inst_46015__$1 = (state_46047[(2)]);
var inst_46016 = (inst_46015__$1 == null);
var inst_46017 = cljs.core.not.call(null,inst_46016);
var state_46047__$1 = (function (){var statearr_46052 = state_46047;
(statearr_46052[(9)] = inst_46015__$1);

return statearr_46052;
})();
if(inst_46017){
var statearr_46053_46078 = state_46047__$1;
(statearr_46053_46078[(1)] = (5));

} else {
var statearr_46054_46079 = state_46047__$1;
(statearr_46054_46079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (15))){
var inst_46037 = (state_46047[(2)]);
var state_46047__$1 = state_46047;
var statearr_46055_46080 = state_46047__$1;
(statearr_46055_46080[(2)] = inst_46037);

(statearr_46055_46080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (13))){
var state_46047__$1 = state_46047;
var statearr_46056_46081 = state_46047__$1;
(statearr_46056_46081[(2)] = null);

(statearr_46056_46081[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (6))){
var inst_46012 = (state_46047[(8)]);
var inst_46033 = (inst_46012 > (0));
var state_46047__$1 = state_46047;
if(cljs.core.truth_(inst_46033)){
var statearr_46057_46082 = state_46047__$1;
(statearr_46057_46082[(1)] = (12));

} else {
var statearr_46058_46083 = state_46047__$1;
(statearr_46058_46083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (3))){
var inst_46045 = (state_46047[(2)]);
var state_46047__$1 = state_46047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46047__$1,inst_46045);
} else {
if((state_val_46048 === (12))){
var inst_46011 = (state_46047[(7)]);
var inst_46035 = cljs.core.vec.call(null,inst_46011);
var state_46047__$1 = state_46047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46047__$1,(15),out,inst_46035);
} else {
if((state_val_46048 === (2))){
var state_46047__$1 = state_46047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46047__$1,(4),ch);
} else {
if((state_val_46048 === (11))){
var inst_46027 = (state_46047[(2)]);
var inst_46028 = (new Array(n));
var inst_46011 = inst_46028;
var inst_46012 = (0);
var state_46047__$1 = (function (){var statearr_46059 = state_46047;
(statearr_46059[(10)] = inst_46027);

(statearr_46059[(7)] = inst_46011);

(statearr_46059[(8)] = inst_46012);

return statearr_46059;
})();
var statearr_46060_46084 = state_46047__$1;
(statearr_46060_46084[(2)] = null);

(statearr_46060_46084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (9))){
var inst_46011 = (state_46047[(7)]);
var inst_46025 = cljs.core.vec.call(null,inst_46011);
var state_46047__$1 = state_46047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46047__$1,(11),out,inst_46025);
} else {
if((state_val_46048 === (5))){
var inst_46020 = (state_46047[(11)]);
var inst_46011 = (state_46047[(7)]);
var inst_46015 = (state_46047[(9)]);
var inst_46012 = (state_46047[(8)]);
var inst_46019 = (inst_46011[inst_46012] = inst_46015);
var inst_46020__$1 = (inst_46012 + (1));
var inst_46021 = (inst_46020__$1 < n);
var state_46047__$1 = (function (){var statearr_46061 = state_46047;
(statearr_46061[(11)] = inst_46020__$1);

(statearr_46061[(12)] = inst_46019);

return statearr_46061;
})();
if(cljs.core.truth_(inst_46021)){
var statearr_46062_46085 = state_46047__$1;
(statearr_46062_46085[(1)] = (8));

} else {
var statearr_46063_46086 = state_46047__$1;
(statearr_46063_46086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (14))){
var inst_46040 = (state_46047[(2)]);
var inst_46041 = cljs.core.async.close_BANG_.call(null,out);
var state_46047__$1 = (function (){var statearr_46065 = state_46047;
(statearr_46065[(13)] = inst_46040);

return statearr_46065;
})();
var statearr_46066_46087 = state_46047__$1;
(statearr_46066_46087[(2)] = inst_46041);

(statearr_46066_46087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (10))){
var inst_46031 = (state_46047[(2)]);
var state_46047__$1 = state_46047;
var statearr_46067_46088 = state_46047__$1;
(statearr_46067_46088[(2)] = inst_46031);

(statearr_46067_46088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46048 === (8))){
var inst_46020 = (state_46047[(11)]);
var inst_46011 = (state_46047[(7)]);
var tmp46064 = inst_46011;
var inst_46011__$1 = tmp46064;
var inst_46012 = inst_46020;
var state_46047__$1 = (function (){var statearr_46068 = state_46047;
(statearr_46068[(7)] = inst_46011__$1);

(statearr_46068[(8)] = inst_46012);

return statearr_46068;
})();
var statearr_46069_46089 = state_46047__$1;
(statearr_46069_46089[(2)] = null);

(statearr_46069_46089[(1)] = (2));


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
});})(c__38256__auto___46075,out))
;
return ((function (switch__38233__auto__,c__38256__auto___46075,out){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_46070 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46070[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_46070[(1)] = (1));

return statearr_46070;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_46047){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_46047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e46071){if((e46071 instanceof Object)){
var ex__38237__auto__ = e46071;
var statearr_46072_46090 = state_46047;
(statearr_46072_46090[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46091 = state_46047;
state_46047 = G__46091;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_46047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_46047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___46075,out))
})();
var state__38258__auto__ = (function (){var statearr_46073 = f__38257__auto__.call(null);
(statearr_46073[(6)] = c__38256__auto___46075);

return statearr_46073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___46075,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__46093 = arguments.length;
switch (G__46093) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38256__auto___46163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38256__auto___46163,out){
return (function (){
var f__38257__auto__ = (function (){var switch__38233__auto__ = ((function (c__38256__auto___46163,out){
return (function (state_46135){
var state_val_46136 = (state_46135[(1)]);
if((state_val_46136 === (7))){
var inst_46131 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46137_46164 = state_46135__$1;
(statearr_46137_46164[(2)] = inst_46131);

(statearr_46137_46164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (1))){
var inst_46094 = [];
var inst_46095 = inst_46094;
var inst_46096 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_46135__$1 = (function (){var statearr_46138 = state_46135;
(statearr_46138[(7)] = inst_46095);

(statearr_46138[(8)] = inst_46096);

return statearr_46138;
})();
var statearr_46139_46165 = state_46135__$1;
(statearr_46139_46165[(2)] = null);

(statearr_46139_46165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (4))){
var inst_46099 = (state_46135[(9)]);
var inst_46099__$1 = (state_46135[(2)]);
var inst_46100 = (inst_46099__$1 == null);
var inst_46101 = cljs.core.not.call(null,inst_46100);
var state_46135__$1 = (function (){var statearr_46140 = state_46135;
(statearr_46140[(9)] = inst_46099__$1);

return statearr_46140;
})();
if(inst_46101){
var statearr_46141_46166 = state_46135__$1;
(statearr_46141_46166[(1)] = (5));

} else {
var statearr_46142_46167 = state_46135__$1;
(statearr_46142_46167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (15))){
var inst_46125 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46143_46168 = state_46135__$1;
(statearr_46143_46168[(2)] = inst_46125);

(statearr_46143_46168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (13))){
var state_46135__$1 = state_46135;
var statearr_46144_46169 = state_46135__$1;
(statearr_46144_46169[(2)] = null);

(statearr_46144_46169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (6))){
var inst_46095 = (state_46135[(7)]);
var inst_46120 = inst_46095.length;
var inst_46121 = (inst_46120 > (0));
var state_46135__$1 = state_46135;
if(cljs.core.truth_(inst_46121)){
var statearr_46145_46170 = state_46135__$1;
(statearr_46145_46170[(1)] = (12));

} else {
var statearr_46146_46171 = state_46135__$1;
(statearr_46146_46171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (3))){
var inst_46133 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46135__$1,inst_46133);
} else {
if((state_val_46136 === (12))){
var inst_46095 = (state_46135[(7)]);
var inst_46123 = cljs.core.vec.call(null,inst_46095);
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46135__$1,(15),out,inst_46123);
} else {
if((state_val_46136 === (2))){
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46135__$1,(4),ch);
} else {
if((state_val_46136 === (11))){
var inst_46103 = (state_46135[(10)]);
var inst_46099 = (state_46135[(9)]);
var inst_46113 = (state_46135[(2)]);
var inst_46114 = [];
var inst_46115 = inst_46114.push(inst_46099);
var inst_46095 = inst_46114;
var inst_46096 = inst_46103;
var state_46135__$1 = (function (){var statearr_46147 = state_46135;
(statearr_46147[(7)] = inst_46095);

(statearr_46147[(11)] = inst_46113);

(statearr_46147[(8)] = inst_46096);

(statearr_46147[(12)] = inst_46115);

return statearr_46147;
})();
var statearr_46148_46172 = state_46135__$1;
(statearr_46148_46172[(2)] = null);

(statearr_46148_46172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (9))){
var inst_46095 = (state_46135[(7)]);
var inst_46111 = cljs.core.vec.call(null,inst_46095);
var state_46135__$1 = state_46135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46135__$1,(11),out,inst_46111);
} else {
if((state_val_46136 === (5))){
var inst_46103 = (state_46135[(10)]);
var inst_46096 = (state_46135[(8)]);
var inst_46099 = (state_46135[(9)]);
var inst_46103__$1 = f.call(null,inst_46099);
var inst_46104 = cljs.core._EQ_.call(null,inst_46103__$1,inst_46096);
var inst_46105 = cljs.core.keyword_identical_QMARK_.call(null,inst_46096,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_46106 = ((inst_46104) || (inst_46105));
var state_46135__$1 = (function (){var statearr_46149 = state_46135;
(statearr_46149[(10)] = inst_46103__$1);

return statearr_46149;
})();
if(cljs.core.truth_(inst_46106)){
var statearr_46150_46173 = state_46135__$1;
(statearr_46150_46173[(1)] = (8));

} else {
var statearr_46151_46174 = state_46135__$1;
(statearr_46151_46174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (14))){
var inst_46128 = (state_46135[(2)]);
var inst_46129 = cljs.core.async.close_BANG_.call(null,out);
var state_46135__$1 = (function (){var statearr_46153 = state_46135;
(statearr_46153[(13)] = inst_46128);

return statearr_46153;
})();
var statearr_46154_46175 = state_46135__$1;
(statearr_46154_46175[(2)] = inst_46129);

(statearr_46154_46175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (10))){
var inst_46118 = (state_46135[(2)]);
var state_46135__$1 = state_46135;
var statearr_46155_46176 = state_46135__$1;
(statearr_46155_46176[(2)] = inst_46118);

(statearr_46155_46176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46136 === (8))){
var inst_46095 = (state_46135[(7)]);
var inst_46103 = (state_46135[(10)]);
var inst_46099 = (state_46135[(9)]);
var inst_46108 = inst_46095.push(inst_46099);
var tmp46152 = inst_46095;
var inst_46095__$1 = tmp46152;
var inst_46096 = inst_46103;
var state_46135__$1 = (function (){var statearr_46156 = state_46135;
(statearr_46156[(7)] = inst_46095__$1);

(statearr_46156[(14)] = inst_46108);

(statearr_46156[(8)] = inst_46096);

return statearr_46156;
})();
var statearr_46157_46177 = state_46135__$1;
(statearr_46157_46177[(2)] = null);

(statearr_46157_46177[(1)] = (2));


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
});})(c__38256__auto___46163,out))
;
return ((function (switch__38233__auto__,c__38256__auto___46163,out){
return (function() {
var cljs$core$async$state_machine__38234__auto__ = null;
var cljs$core$async$state_machine__38234__auto____0 = (function (){
var statearr_46158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46158[(0)] = cljs$core$async$state_machine__38234__auto__);

(statearr_46158[(1)] = (1));

return statearr_46158;
});
var cljs$core$async$state_machine__38234__auto____1 = (function (state_46135){
while(true){
var ret_value__38235__auto__ = (function (){try{while(true){
var result__38236__auto__ = switch__38233__auto__.call(null,state_46135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38236__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38236__auto__;
}
break;
}
}catch (e46159){if((e46159 instanceof Object)){
var ex__38237__auto__ = e46159;
var statearr_46160_46178 = state_46135;
(statearr_46160_46178[(5)] = ex__38237__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38235__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46179 = state_46135;
state_46135 = G__46179;
continue;
} else {
return ret_value__38235__auto__;
}
break;
}
});
cljs$core$async$state_machine__38234__auto__ = function(state_46135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38234__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38234__auto____1.call(this,state_46135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38234__auto____0;
cljs$core$async$state_machine__38234__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38234__auto____1;
return cljs$core$async$state_machine__38234__auto__;
})()
;})(switch__38233__auto__,c__38256__auto___46163,out))
})();
var state__38258__auto__ = (function (){var statearr_46161 = f__38257__auto__.call(null);
(statearr_46161[(6)] = c__38256__auto___46163);

return statearr_46161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38258__auto__);
});})(c__38256__auto___46163,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563208754355
