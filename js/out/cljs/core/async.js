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
var G__43610 = arguments.length;
switch (G__43610) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43611 = (function (f,blockable,meta43612){
this.f = f;
this.blockable = blockable;
this.meta43612 = meta43612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43613,meta43612__$1){
var self__ = this;
var _43613__$1 = this;
return (new cljs.core.async.t_cljs$core$async43611(self__.f,self__.blockable,meta43612__$1));
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43613){
var self__ = this;
var _43613__$1 = this;
return self__.meta43612;
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async43611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async43611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43612","meta43612",1651472095,null)], null);
});

cljs.core.async.t_cljs$core$async43611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43611";

cljs.core.async.t_cljs$core$async43611.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43611");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43611.
 */
cljs.core.async.__GT_t_cljs$core$async43611 = (function cljs$core$async$__GT_t_cljs$core$async43611(f__$1,blockable__$1,meta43612){
return (new cljs.core.async.t_cljs$core$async43611(f__$1,blockable__$1,meta43612));
});

}

return (new cljs.core.async.t_cljs$core$async43611(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__43617 = arguments.length;
switch (G__43617) {
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
var G__43620 = arguments.length;
switch (G__43620) {
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
var G__43623 = arguments.length;
switch (G__43623) {
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
var val_43625 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43625);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_43625,ret){
return (function (){
return fn1.call(null,val_43625);
});})(val_43625,ret))
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
var G__43627 = arguments.length;
switch (G__43627) {
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
var n__4607__auto___43629 = n;
var x_43630 = (0);
while(true){
if((x_43630 < n__4607__auto___43629)){
(a[x_43630] = (0));

var G__43631 = (x_43630 + (1));
x_43630 = G__43631;
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

var G__43632 = (i + (1));
i = G__43632;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43633 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43633 = (function (flag,meta43634){
this.flag = flag;
this.meta43634 = meta43634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_43635,meta43634__$1){
var self__ = this;
var _43635__$1 = this;
return (new cljs.core.async.t_cljs$core$async43633(self__.flag,meta43634__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_43635){
var self__ = this;
var _43635__$1 = this;
return self__.meta43634;
});})(flag))
;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async43633.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43634","meta43634",2003606398,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async43633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43633";

cljs.core.async.t_cljs$core$async43633.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43633");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43633.
 */
cljs.core.async.__GT_t_cljs$core$async43633 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43633(flag__$1,meta43634){
return (new cljs.core.async.t_cljs$core$async43633(flag__$1,meta43634));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async43633(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43636 = (function (flag,cb,meta43637){
this.flag = flag;
this.cb = cb;
this.meta43637 = meta43637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async43636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43638,meta43637__$1){
var self__ = this;
var _43638__$1 = this;
return (new cljs.core.async.t_cljs$core$async43636(self__.flag,self__.cb,meta43637__$1));
});

cljs.core.async.t_cljs$core$async43636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43638){
var self__ = this;
var _43638__$1 = this;
return self__.meta43637;
});

cljs.core.async.t_cljs$core$async43636.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async43636.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async43636.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async43636.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async43636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43637","meta43637",-1350847434,null)], null);
});

cljs.core.async.t_cljs$core$async43636.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43636";

cljs.core.async.t_cljs$core$async43636.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async43636");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43636.
 */
cljs.core.async.__GT_t_cljs$core$async43636 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43636(flag__$1,cb__$1,meta43637){
return (new cljs.core.async.t_cljs$core$async43636(flag__$1,cb__$1,meta43637));
});

}

return (new cljs.core.async.t_cljs$core$async43636(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43639_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43639_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43640_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43640_SHARP_,port], null));
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
var G__43641 = (i + (1));
i = G__43641;
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
var len__4730__auto___43647 = arguments.length;
var i__4731__auto___43648 = (0);
while(true){
if((i__4731__auto___43648 < len__4730__auto___43647)){
args__4736__auto__.push((arguments[i__4731__auto___43648]));

var G__43649 = (i__4731__auto___43648 + (1));
i__4731__auto___43648 = G__43649;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43644){
var map__43645 = p__43644;
var map__43645__$1 = (((((!((map__43645 == null))))?(((((map__43645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43645):map__43645);
var opts = map__43645__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43642){
var G__43643 = cljs.core.first.call(null,seq43642);
var seq43642__$1 = cljs.core.next.call(null,seq43642);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43643,seq43642__$1);
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
var G__43651 = arguments.length;
switch (G__43651) {
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
var c__43550__auto___43697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___43697){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___43697){
return (function (state_43675){
var state_val_43676 = (state_43675[(1)]);
if((state_val_43676 === (7))){
var inst_43671 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43677_43698 = state_43675__$1;
(statearr_43677_43698[(2)] = inst_43671);

(statearr_43677_43698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (1))){
var state_43675__$1 = state_43675;
var statearr_43678_43699 = state_43675__$1;
(statearr_43678_43699[(2)] = null);

(statearr_43678_43699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (4))){
var inst_43654 = (state_43675[(7)]);
var inst_43654__$1 = (state_43675[(2)]);
var inst_43655 = (inst_43654__$1 == null);
var state_43675__$1 = (function (){var statearr_43679 = state_43675;
(statearr_43679[(7)] = inst_43654__$1);

return statearr_43679;
})();
if(cljs.core.truth_(inst_43655)){
var statearr_43680_43700 = state_43675__$1;
(statearr_43680_43700[(1)] = (5));

} else {
var statearr_43681_43701 = state_43675__$1;
(statearr_43681_43701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (13))){
var state_43675__$1 = state_43675;
var statearr_43682_43702 = state_43675__$1;
(statearr_43682_43702[(2)] = null);

(statearr_43682_43702[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (6))){
var inst_43654 = (state_43675[(7)]);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43675__$1,(11),to,inst_43654);
} else {
if((state_val_43676 === (3))){
var inst_43673 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43675__$1,inst_43673);
} else {
if((state_val_43676 === (12))){
var state_43675__$1 = state_43675;
var statearr_43683_43703 = state_43675__$1;
(statearr_43683_43703[(2)] = null);

(statearr_43683_43703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (2))){
var state_43675__$1 = state_43675;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43675__$1,(4),from);
} else {
if((state_val_43676 === (11))){
var inst_43664 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
if(cljs.core.truth_(inst_43664)){
var statearr_43684_43704 = state_43675__$1;
(statearr_43684_43704[(1)] = (12));

} else {
var statearr_43685_43705 = state_43675__$1;
(statearr_43685_43705[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (9))){
var state_43675__$1 = state_43675;
var statearr_43686_43706 = state_43675__$1;
(statearr_43686_43706[(2)] = null);

(statearr_43686_43706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (5))){
var state_43675__$1 = state_43675;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43687_43707 = state_43675__$1;
(statearr_43687_43707[(1)] = (8));

} else {
var statearr_43688_43708 = state_43675__$1;
(statearr_43688_43708[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (14))){
var inst_43669 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43689_43709 = state_43675__$1;
(statearr_43689_43709[(2)] = inst_43669);

(statearr_43689_43709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (10))){
var inst_43661 = (state_43675[(2)]);
var state_43675__$1 = state_43675;
var statearr_43690_43710 = state_43675__$1;
(statearr_43690_43710[(2)] = inst_43661);

(statearr_43690_43710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43676 === (8))){
var inst_43658 = cljs.core.async.close_BANG_.call(null,to);
var state_43675__$1 = state_43675;
var statearr_43691_43711 = state_43675__$1;
(statearr_43691_43711[(2)] = inst_43658);

(statearr_43691_43711[(1)] = (10));


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
});})(c__43550__auto___43697))
;
return ((function (switch__43455__auto__,c__43550__auto___43697){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_43692 = [null,null,null,null,null,null,null,null];
(statearr_43692[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_43692[(1)] = (1));

return statearr_43692;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_43675){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_43675);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e43693){if((e43693 instanceof Object)){
var ex__43459__auto__ = e43693;
var statearr_43694_43712 = state_43675;
(statearr_43694_43712[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43675);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43713 = state_43675;
state_43675 = G__43713;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_43675){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_43675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___43697))
})();
var state__43552__auto__ = (function (){var statearr_43695 = f__43551__auto__.call(null);
(statearr_43695[(6)] = c__43550__auto___43697);

return statearr_43695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___43697))
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
return (function (p__43714){
var vec__43715 = p__43714;
var v = cljs.core.nth.call(null,vec__43715,(0),null);
var p = cljs.core.nth.call(null,vec__43715,(1),null);
var job = vec__43715;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__43550__auto___43886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___43886,res,vec__43715,v,p,job,jobs,results){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___43886,res,vec__43715,v,p,job,jobs,results){
return (function (state_43722){
var state_val_43723 = (state_43722[(1)]);
if((state_val_43723 === (1))){
var state_43722__$1 = state_43722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43722__$1,(2),res,v);
} else {
if((state_val_43723 === (2))){
var inst_43719 = (state_43722[(2)]);
var inst_43720 = cljs.core.async.close_BANG_.call(null,res);
var state_43722__$1 = (function (){var statearr_43724 = state_43722;
(statearr_43724[(7)] = inst_43719);

return statearr_43724;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43722__$1,inst_43720);
} else {
return null;
}
}
});})(c__43550__auto___43886,res,vec__43715,v,p,job,jobs,results))
;
return ((function (switch__43455__auto__,c__43550__auto___43886,res,vec__43715,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0 = (function (){
var statearr_43725 = [null,null,null,null,null,null,null,null];
(statearr_43725[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__);

(statearr_43725[(1)] = (1));

return statearr_43725;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1 = (function (state_43722){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_43722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e43726){if((e43726 instanceof Object)){
var ex__43459__auto__ = e43726;
var statearr_43727_43887 = state_43722;
(statearr_43727_43887[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43888 = state_43722;
state_43722 = G__43888;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = function(state_43722){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1.call(this,state_43722);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___43886,res,vec__43715,v,p,job,jobs,results))
})();
var state__43552__auto__ = (function (){var statearr_43728 = f__43551__auto__.call(null);
(statearr_43728[(6)] = c__43550__auto___43886);

return statearr_43728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___43886,res,vec__43715,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__43729){
var vec__43730 = p__43729;
var v = cljs.core.nth.call(null,vec__43730,(0),null);
var p = cljs.core.nth.call(null,vec__43730,(1),null);
var job = vec__43730;
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
var n__4607__auto___43889 = n;
var __43890 = (0);
while(true){
if((__43890 < n__4607__auto___43889)){
var G__43733_43891 = type;
var G__43733_43892__$1 = (((G__43733_43891 instanceof cljs.core.Keyword))?G__43733_43891.fqn:null);
switch (G__43733_43892__$1) {
case "compute":
var c__43550__auto___43894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43890,c__43550__auto___43894,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (__43890,c__43550__auto___43894,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async){
return (function (state_43746){
var state_val_43747 = (state_43746[(1)]);
if((state_val_43747 === (1))){
var state_43746__$1 = state_43746;
var statearr_43748_43895 = state_43746__$1;
(statearr_43748_43895[(2)] = null);

(statearr_43748_43895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (2))){
var state_43746__$1 = state_43746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43746__$1,(4),jobs);
} else {
if((state_val_43747 === (3))){
var inst_43744 = (state_43746[(2)]);
var state_43746__$1 = state_43746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43746__$1,inst_43744);
} else {
if((state_val_43747 === (4))){
var inst_43736 = (state_43746[(2)]);
var inst_43737 = process.call(null,inst_43736);
var state_43746__$1 = state_43746;
if(cljs.core.truth_(inst_43737)){
var statearr_43749_43896 = state_43746__$1;
(statearr_43749_43896[(1)] = (5));

} else {
var statearr_43750_43897 = state_43746__$1;
(statearr_43750_43897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (5))){
var state_43746__$1 = state_43746;
var statearr_43751_43898 = state_43746__$1;
(statearr_43751_43898[(2)] = null);

(statearr_43751_43898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (6))){
var state_43746__$1 = state_43746;
var statearr_43752_43899 = state_43746__$1;
(statearr_43752_43899[(2)] = null);

(statearr_43752_43899[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43747 === (7))){
var inst_43742 = (state_43746[(2)]);
var state_43746__$1 = state_43746;
var statearr_43753_43900 = state_43746__$1;
(statearr_43753_43900[(2)] = inst_43742);

(statearr_43753_43900[(1)] = (3));


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
});})(__43890,c__43550__auto___43894,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async))
;
return ((function (__43890,switch__43455__auto__,c__43550__auto___43894,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0 = (function (){
var statearr_43754 = [null,null,null,null,null,null,null];
(statearr_43754[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__);

(statearr_43754[(1)] = (1));

return statearr_43754;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1 = (function (state_43746){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_43746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e43755){if((e43755 instanceof Object)){
var ex__43459__auto__ = e43755;
var statearr_43756_43901 = state_43746;
(statearr_43756_43901[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43902 = state_43746;
state_43746 = G__43902;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = function(state_43746){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1.call(this,state_43746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__;
})()
;})(__43890,switch__43455__auto__,c__43550__auto___43894,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async))
})();
var state__43552__auto__ = (function (){var statearr_43757 = f__43551__auto__.call(null);
(statearr_43757[(6)] = c__43550__auto___43894);

return statearr_43757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(__43890,c__43550__auto___43894,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async))
);


break;
case "async":
var c__43550__auto___43903 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43890,c__43550__auto___43903,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (__43890,c__43550__auto___43903,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async){
return (function (state_43770){
var state_val_43771 = (state_43770[(1)]);
if((state_val_43771 === (1))){
var state_43770__$1 = state_43770;
var statearr_43772_43904 = state_43770__$1;
(statearr_43772_43904[(2)] = null);

(statearr_43772_43904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43771 === (2))){
var state_43770__$1 = state_43770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43770__$1,(4),jobs);
} else {
if((state_val_43771 === (3))){
var inst_43768 = (state_43770[(2)]);
var state_43770__$1 = state_43770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43770__$1,inst_43768);
} else {
if((state_val_43771 === (4))){
var inst_43760 = (state_43770[(2)]);
var inst_43761 = async.call(null,inst_43760);
var state_43770__$1 = state_43770;
if(cljs.core.truth_(inst_43761)){
var statearr_43773_43905 = state_43770__$1;
(statearr_43773_43905[(1)] = (5));

} else {
var statearr_43774_43906 = state_43770__$1;
(statearr_43774_43906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43771 === (5))){
var state_43770__$1 = state_43770;
var statearr_43775_43907 = state_43770__$1;
(statearr_43775_43907[(2)] = null);

(statearr_43775_43907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43771 === (6))){
var state_43770__$1 = state_43770;
var statearr_43776_43908 = state_43770__$1;
(statearr_43776_43908[(2)] = null);

(statearr_43776_43908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43771 === (7))){
var inst_43766 = (state_43770[(2)]);
var state_43770__$1 = state_43770;
var statearr_43777_43909 = state_43770__$1;
(statearr_43777_43909[(2)] = inst_43766);

(statearr_43777_43909[(1)] = (3));


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
});})(__43890,c__43550__auto___43903,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async))
;
return ((function (__43890,switch__43455__auto__,c__43550__auto___43903,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0 = (function (){
var statearr_43778 = [null,null,null,null,null,null,null];
(statearr_43778[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__);

(statearr_43778[(1)] = (1));

return statearr_43778;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1 = (function (state_43770){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_43770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e43779){if((e43779 instanceof Object)){
var ex__43459__auto__ = e43779;
var statearr_43780_43910 = state_43770;
(statearr_43780_43910[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43911 = state_43770;
state_43770 = G__43911;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = function(state_43770){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1.call(this,state_43770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__;
})()
;})(__43890,switch__43455__auto__,c__43550__auto___43903,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async))
})();
var state__43552__auto__ = (function (){var statearr_43781 = f__43551__auto__.call(null);
(statearr_43781[(6)] = c__43550__auto___43903);

return statearr_43781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(__43890,c__43550__auto___43903,G__43733_43891,G__43733_43892__$1,n__4607__auto___43889,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43733_43892__$1)].join('')));

}

var G__43912 = (__43890 + (1));
__43890 = G__43912;
continue;
} else {
}
break;
}

var c__43550__auto___43913 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___43913,jobs,results,process,async){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___43913,jobs,results,process,async){
return (function (state_43803){
var state_val_43804 = (state_43803[(1)]);
if((state_val_43804 === (7))){
var inst_43799 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43805_43914 = state_43803__$1;
(statearr_43805_43914[(2)] = inst_43799);

(statearr_43805_43914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (1))){
var state_43803__$1 = state_43803;
var statearr_43806_43915 = state_43803__$1;
(statearr_43806_43915[(2)] = null);

(statearr_43806_43915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (4))){
var inst_43784 = (state_43803[(7)]);
var inst_43784__$1 = (state_43803[(2)]);
var inst_43785 = (inst_43784__$1 == null);
var state_43803__$1 = (function (){var statearr_43807 = state_43803;
(statearr_43807[(7)] = inst_43784__$1);

return statearr_43807;
})();
if(cljs.core.truth_(inst_43785)){
var statearr_43808_43916 = state_43803__$1;
(statearr_43808_43916[(1)] = (5));

} else {
var statearr_43809_43917 = state_43803__$1;
(statearr_43809_43917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (6))){
var inst_43784 = (state_43803[(7)]);
var inst_43789 = (state_43803[(8)]);
var inst_43789__$1 = cljs.core.async.chan.call(null,(1));
var inst_43790 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43791 = [inst_43784,inst_43789__$1];
var inst_43792 = (new cljs.core.PersistentVector(null,2,(5),inst_43790,inst_43791,null));
var state_43803__$1 = (function (){var statearr_43810 = state_43803;
(statearr_43810[(8)] = inst_43789__$1);

return statearr_43810;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43803__$1,(8),jobs,inst_43792);
} else {
if((state_val_43804 === (3))){
var inst_43801 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43803__$1,inst_43801);
} else {
if((state_val_43804 === (2))){
var state_43803__$1 = state_43803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43803__$1,(4),from);
} else {
if((state_val_43804 === (9))){
var inst_43796 = (state_43803[(2)]);
var state_43803__$1 = (function (){var statearr_43811 = state_43803;
(statearr_43811[(9)] = inst_43796);

return statearr_43811;
})();
var statearr_43812_43918 = state_43803__$1;
(statearr_43812_43918[(2)] = null);

(statearr_43812_43918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (5))){
var inst_43787 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43803__$1 = state_43803;
var statearr_43813_43919 = state_43803__$1;
(statearr_43813_43919[(2)] = inst_43787);

(statearr_43813_43919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (8))){
var inst_43789 = (state_43803[(8)]);
var inst_43794 = (state_43803[(2)]);
var state_43803__$1 = (function (){var statearr_43814 = state_43803;
(statearr_43814[(10)] = inst_43794);

return statearr_43814;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43803__$1,(9),results,inst_43789);
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
});})(c__43550__auto___43913,jobs,results,process,async))
;
return ((function (switch__43455__auto__,c__43550__auto___43913,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0 = (function (){
var statearr_43815 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__);

(statearr_43815[(1)] = (1));

return statearr_43815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1 = (function (state_43803){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_43803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e43816){if((e43816 instanceof Object)){
var ex__43459__auto__ = e43816;
var statearr_43817_43920 = state_43803;
(statearr_43817_43920[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43921 = state_43803;
state_43803 = G__43921;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = function(state_43803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1.call(this,state_43803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___43913,jobs,results,process,async))
})();
var state__43552__auto__ = (function (){var statearr_43818 = f__43551__auto__.call(null);
(statearr_43818[(6)] = c__43550__auto___43913);

return statearr_43818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___43913,jobs,results,process,async))
);


var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__,jobs,results,process,async){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__,jobs,results,process,async){
return (function (state_43856){
var state_val_43857 = (state_43856[(1)]);
if((state_val_43857 === (7))){
var inst_43852 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
var statearr_43858_43922 = state_43856__$1;
(statearr_43858_43922[(2)] = inst_43852);

(statearr_43858_43922[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (20))){
var state_43856__$1 = state_43856;
var statearr_43859_43923 = state_43856__$1;
(statearr_43859_43923[(2)] = null);

(statearr_43859_43923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (1))){
var state_43856__$1 = state_43856;
var statearr_43860_43924 = state_43856__$1;
(statearr_43860_43924[(2)] = null);

(statearr_43860_43924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (4))){
var inst_43821 = (state_43856[(7)]);
var inst_43821__$1 = (state_43856[(2)]);
var inst_43822 = (inst_43821__$1 == null);
var state_43856__$1 = (function (){var statearr_43861 = state_43856;
(statearr_43861[(7)] = inst_43821__$1);

return statearr_43861;
})();
if(cljs.core.truth_(inst_43822)){
var statearr_43862_43925 = state_43856__$1;
(statearr_43862_43925[(1)] = (5));

} else {
var statearr_43863_43926 = state_43856__$1;
(statearr_43863_43926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (15))){
var inst_43834 = (state_43856[(8)]);
var state_43856__$1 = state_43856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43856__$1,(18),to,inst_43834);
} else {
if((state_val_43857 === (21))){
var inst_43847 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
var statearr_43864_43927 = state_43856__$1;
(statearr_43864_43927[(2)] = inst_43847);

(statearr_43864_43927[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (13))){
var inst_43849 = (state_43856[(2)]);
var state_43856__$1 = (function (){var statearr_43865 = state_43856;
(statearr_43865[(9)] = inst_43849);

return statearr_43865;
})();
var statearr_43866_43928 = state_43856__$1;
(statearr_43866_43928[(2)] = null);

(statearr_43866_43928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (6))){
var inst_43821 = (state_43856[(7)]);
var state_43856__$1 = state_43856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43856__$1,(11),inst_43821);
} else {
if((state_val_43857 === (17))){
var inst_43842 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
if(cljs.core.truth_(inst_43842)){
var statearr_43867_43929 = state_43856__$1;
(statearr_43867_43929[(1)] = (19));

} else {
var statearr_43868_43930 = state_43856__$1;
(statearr_43868_43930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (3))){
var inst_43854 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43856__$1,inst_43854);
} else {
if((state_val_43857 === (12))){
var inst_43831 = (state_43856[(10)]);
var state_43856__$1 = state_43856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43856__$1,(14),inst_43831);
} else {
if((state_val_43857 === (2))){
var state_43856__$1 = state_43856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43856__$1,(4),results);
} else {
if((state_val_43857 === (19))){
var state_43856__$1 = state_43856;
var statearr_43869_43931 = state_43856__$1;
(statearr_43869_43931[(2)] = null);

(statearr_43869_43931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (11))){
var inst_43831 = (state_43856[(2)]);
var state_43856__$1 = (function (){var statearr_43870 = state_43856;
(statearr_43870[(10)] = inst_43831);

return statearr_43870;
})();
var statearr_43871_43932 = state_43856__$1;
(statearr_43871_43932[(2)] = null);

(statearr_43871_43932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (9))){
var state_43856__$1 = state_43856;
var statearr_43872_43933 = state_43856__$1;
(statearr_43872_43933[(2)] = null);

(statearr_43872_43933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (5))){
var state_43856__$1 = state_43856;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43873_43934 = state_43856__$1;
(statearr_43873_43934[(1)] = (8));

} else {
var statearr_43874_43935 = state_43856__$1;
(statearr_43874_43935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (14))){
var inst_43836 = (state_43856[(11)]);
var inst_43834 = (state_43856[(8)]);
var inst_43834__$1 = (state_43856[(2)]);
var inst_43835 = (inst_43834__$1 == null);
var inst_43836__$1 = cljs.core.not.call(null,inst_43835);
var state_43856__$1 = (function (){var statearr_43875 = state_43856;
(statearr_43875[(11)] = inst_43836__$1);

(statearr_43875[(8)] = inst_43834__$1);

return statearr_43875;
})();
if(inst_43836__$1){
var statearr_43876_43936 = state_43856__$1;
(statearr_43876_43936[(1)] = (15));

} else {
var statearr_43877_43937 = state_43856__$1;
(statearr_43877_43937[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (16))){
var inst_43836 = (state_43856[(11)]);
var state_43856__$1 = state_43856;
var statearr_43878_43938 = state_43856__$1;
(statearr_43878_43938[(2)] = inst_43836);

(statearr_43878_43938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (10))){
var inst_43828 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
var statearr_43879_43939 = state_43856__$1;
(statearr_43879_43939[(2)] = inst_43828);

(statearr_43879_43939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (18))){
var inst_43839 = (state_43856[(2)]);
var state_43856__$1 = state_43856;
var statearr_43880_43940 = state_43856__$1;
(statearr_43880_43940[(2)] = inst_43839);

(statearr_43880_43940[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43857 === (8))){
var inst_43825 = cljs.core.async.close_BANG_.call(null,to);
var state_43856__$1 = state_43856;
var statearr_43881_43941 = state_43856__$1;
(statearr_43881_43941[(2)] = inst_43825);

(statearr_43881_43941[(1)] = (10));


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
});})(c__43550__auto__,jobs,results,process,async))
;
return ((function (switch__43455__auto__,c__43550__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0 = (function (){
var statearr_43882 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__);

(statearr_43882[(1)] = (1));

return statearr_43882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1 = (function (state_43856){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_43856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e43883){if((e43883 instanceof Object)){
var ex__43459__auto__ = e43883;
var statearr_43884_43942 = state_43856;
(statearr_43884_43942[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43943 = state_43856;
state_43856 = G__43943;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__ = function(state_43856){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1.call(this,state_43856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__43456__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__,jobs,results,process,async))
})();
var state__43552__auto__ = (function (){var statearr_43885 = f__43551__auto__.call(null);
(statearr_43885[(6)] = c__43550__auto__);

return statearr_43885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__,jobs,results,process,async))
);

return c__43550__auto__;
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
var G__43945 = arguments.length;
switch (G__43945) {
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
var G__43948 = arguments.length;
switch (G__43948) {
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
var G__43951 = arguments.length;
switch (G__43951) {
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
var c__43550__auto___44000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___44000,tc,fc){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___44000,tc,fc){
return (function (state_43977){
var state_val_43978 = (state_43977[(1)]);
if((state_val_43978 === (7))){
var inst_43973 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
var statearr_43979_44001 = state_43977__$1;
(statearr_43979_44001[(2)] = inst_43973);

(statearr_43979_44001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (1))){
var state_43977__$1 = state_43977;
var statearr_43980_44002 = state_43977__$1;
(statearr_43980_44002[(2)] = null);

(statearr_43980_44002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (4))){
var inst_43954 = (state_43977[(7)]);
var inst_43954__$1 = (state_43977[(2)]);
var inst_43955 = (inst_43954__$1 == null);
var state_43977__$1 = (function (){var statearr_43981 = state_43977;
(statearr_43981[(7)] = inst_43954__$1);

return statearr_43981;
})();
if(cljs.core.truth_(inst_43955)){
var statearr_43982_44003 = state_43977__$1;
(statearr_43982_44003[(1)] = (5));

} else {
var statearr_43983_44004 = state_43977__$1;
(statearr_43983_44004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (13))){
var state_43977__$1 = state_43977;
var statearr_43984_44005 = state_43977__$1;
(statearr_43984_44005[(2)] = null);

(statearr_43984_44005[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (6))){
var inst_43954 = (state_43977[(7)]);
var inst_43960 = p.call(null,inst_43954);
var state_43977__$1 = state_43977;
if(cljs.core.truth_(inst_43960)){
var statearr_43985_44006 = state_43977__$1;
(statearr_43985_44006[(1)] = (9));

} else {
var statearr_43986_44007 = state_43977__$1;
(statearr_43986_44007[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (3))){
var inst_43975 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43977__$1,inst_43975);
} else {
if((state_val_43978 === (12))){
var state_43977__$1 = state_43977;
var statearr_43987_44008 = state_43977__$1;
(statearr_43987_44008[(2)] = null);

(statearr_43987_44008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (2))){
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43977__$1,(4),ch);
} else {
if((state_val_43978 === (11))){
var inst_43954 = (state_43977[(7)]);
var inst_43964 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43977__$1,(8),inst_43964,inst_43954);
} else {
if((state_val_43978 === (9))){
var state_43977__$1 = state_43977;
var statearr_43988_44009 = state_43977__$1;
(statearr_43988_44009[(2)] = tc);

(statearr_43988_44009[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (5))){
var inst_43957 = cljs.core.async.close_BANG_.call(null,tc);
var inst_43958 = cljs.core.async.close_BANG_.call(null,fc);
var state_43977__$1 = (function (){var statearr_43989 = state_43977;
(statearr_43989[(8)] = inst_43957);

return statearr_43989;
})();
var statearr_43990_44010 = state_43977__$1;
(statearr_43990_44010[(2)] = inst_43958);

(statearr_43990_44010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (14))){
var inst_43971 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
var statearr_43991_44011 = state_43977__$1;
(statearr_43991_44011[(2)] = inst_43971);

(statearr_43991_44011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (10))){
var state_43977__$1 = state_43977;
var statearr_43992_44012 = state_43977__$1;
(statearr_43992_44012[(2)] = fc);

(statearr_43992_44012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43978 === (8))){
var inst_43966 = (state_43977[(2)]);
var state_43977__$1 = state_43977;
if(cljs.core.truth_(inst_43966)){
var statearr_43993_44013 = state_43977__$1;
(statearr_43993_44013[(1)] = (12));

} else {
var statearr_43994_44014 = state_43977__$1;
(statearr_43994_44014[(1)] = (13));

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
});})(c__43550__auto___44000,tc,fc))
;
return ((function (switch__43455__auto__,c__43550__auto___44000,tc,fc){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_43995 = [null,null,null,null,null,null,null,null,null];
(statearr_43995[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_43995[(1)] = (1));

return statearr_43995;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_43977){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_43977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e43996){if((e43996 instanceof Object)){
var ex__43459__auto__ = e43996;
var statearr_43997_44015 = state_43977;
(statearr_43997_44015[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44016 = state_43977;
state_43977 = G__44016;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_43977){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_43977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___44000,tc,fc))
})();
var state__43552__auto__ = (function (){var statearr_43998 = f__43551__auto__.call(null);
(statearr_43998[(6)] = c__43550__auto___44000);

return statearr_43998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___44000,tc,fc))
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
var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__){
return (function (state_44037){
var state_val_44038 = (state_44037[(1)]);
if((state_val_44038 === (7))){
var inst_44033 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
var statearr_44039_44057 = state_44037__$1;
(statearr_44039_44057[(2)] = inst_44033);

(statearr_44039_44057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (1))){
var inst_44017 = init;
var state_44037__$1 = (function (){var statearr_44040 = state_44037;
(statearr_44040[(7)] = inst_44017);

return statearr_44040;
})();
var statearr_44041_44058 = state_44037__$1;
(statearr_44041_44058[(2)] = null);

(statearr_44041_44058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (4))){
var inst_44020 = (state_44037[(8)]);
var inst_44020__$1 = (state_44037[(2)]);
var inst_44021 = (inst_44020__$1 == null);
var state_44037__$1 = (function (){var statearr_44042 = state_44037;
(statearr_44042[(8)] = inst_44020__$1);

return statearr_44042;
})();
if(cljs.core.truth_(inst_44021)){
var statearr_44043_44059 = state_44037__$1;
(statearr_44043_44059[(1)] = (5));

} else {
var statearr_44044_44060 = state_44037__$1;
(statearr_44044_44060[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (6))){
var inst_44020 = (state_44037[(8)]);
var inst_44017 = (state_44037[(7)]);
var inst_44024 = (state_44037[(9)]);
var inst_44024__$1 = f.call(null,inst_44017,inst_44020);
var inst_44025 = cljs.core.reduced_QMARK_.call(null,inst_44024__$1);
var state_44037__$1 = (function (){var statearr_44045 = state_44037;
(statearr_44045[(9)] = inst_44024__$1);

return statearr_44045;
})();
if(inst_44025){
var statearr_44046_44061 = state_44037__$1;
(statearr_44046_44061[(1)] = (8));

} else {
var statearr_44047_44062 = state_44037__$1;
(statearr_44047_44062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (3))){
var inst_44035 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44037__$1,inst_44035);
} else {
if((state_val_44038 === (2))){
var state_44037__$1 = state_44037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44037__$1,(4),ch);
} else {
if((state_val_44038 === (9))){
var inst_44024 = (state_44037[(9)]);
var inst_44017 = inst_44024;
var state_44037__$1 = (function (){var statearr_44048 = state_44037;
(statearr_44048[(7)] = inst_44017);

return statearr_44048;
})();
var statearr_44049_44063 = state_44037__$1;
(statearr_44049_44063[(2)] = null);

(statearr_44049_44063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (5))){
var inst_44017 = (state_44037[(7)]);
var state_44037__$1 = state_44037;
var statearr_44050_44064 = state_44037__$1;
(statearr_44050_44064[(2)] = inst_44017);

(statearr_44050_44064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (10))){
var inst_44031 = (state_44037[(2)]);
var state_44037__$1 = state_44037;
var statearr_44051_44065 = state_44037__$1;
(statearr_44051_44065[(2)] = inst_44031);

(statearr_44051_44065[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44038 === (8))){
var inst_44024 = (state_44037[(9)]);
var inst_44027 = cljs.core.deref.call(null,inst_44024);
var state_44037__$1 = state_44037;
var statearr_44052_44066 = state_44037__$1;
(statearr_44052_44066[(2)] = inst_44027);

(statearr_44052_44066[(1)] = (10));


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
});})(c__43550__auto__))
;
return ((function (switch__43455__auto__,c__43550__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__43456__auto__ = null;
var cljs$core$async$reduce_$_state_machine__43456__auto____0 = (function (){
var statearr_44053 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44053[(0)] = cljs$core$async$reduce_$_state_machine__43456__auto__);

(statearr_44053[(1)] = (1));

return statearr_44053;
});
var cljs$core$async$reduce_$_state_machine__43456__auto____1 = (function (state_44037){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_44037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e44054){if((e44054 instanceof Object)){
var ex__43459__auto__ = e44054;
var statearr_44055_44067 = state_44037;
(statearr_44055_44067[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44068 = state_44037;
state_44037 = G__44068;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__43456__auto__ = function(state_44037){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__43456__auto____1.call(this,state_44037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__43456__auto____0;
cljs$core$async$reduce_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__43456__auto____1;
return cljs$core$async$reduce_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__))
})();
var state__43552__auto__ = (function (){var statearr_44056 = f__43551__auto__.call(null);
(statearr_44056[(6)] = c__43550__auto__);

return statearr_44056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__))
);

return c__43550__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__,f__$1){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__,f__$1){
return (function (state_44074){
var state_val_44075 = (state_44074[(1)]);
if((state_val_44075 === (1))){
var inst_44069 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_44074__$1 = state_44074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44074__$1,(2),inst_44069);
} else {
if((state_val_44075 === (2))){
var inst_44071 = (state_44074[(2)]);
var inst_44072 = f__$1.call(null,inst_44071);
var state_44074__$1 = state_44074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44074__$1,inst_44072);
} else {
return null;
}
}
});})(c__43550__auto__,f__$1))
;
return ((function (switch__43455__auto__,c__43550__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__43456__auto__ = null;
var cljs$core$async$transduce_$_state_machine__43456__auto____0 = (function (){
var statearr_44076 = [null,null,null,null,null,null,null];
(statearr_44076[(0)] = cljs$core$async$transduce_$_state_machine__43456__auto__);

(statearr_44076[(1)] = (1));

return statearr_44076;
});
var cljs$core$async$transduce_$_state_machine__43456__auto____1 = (function (state_44074){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_44074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e44077){if((e44077 instanceof Object)){
var ex__43459__auto__ = e44077;
var statearr_44078_44080 = state_44074;
(statearr_44078_44080[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44081 = state_44074;
state_44074 = G__44081;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__43456__auto__ = function(state_44074){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__43456__auto____1.call(this,state_44074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__43456__auto____0;
cljs$core$async$transduce_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__43456__auto____1;
return cljs$core$async$transduce_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__,f__$1))
})();
var state__43552__auto__ = (function (){var statearr_44079 = f__43551__auto__.call(null);
(statearr_44079[(6)] = c__43550__auto__);

return statearr_44079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__,f__$1))
);

return c__43550__auto__;
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
var G__44083 = arguments.length;
switch (G__44083) {
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
var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__){
return (function (state_44108){
var state_val_44109 = (state_44108[(1)]);
if((state_val_44109 === (7))){
var inst_44090 = (state_44108[(2)]);
var state_44108__$1 = state_44108;
var statearr_44110_44131 = state_44108__$1;
(statearr_44110_44131[(2)] = inst_44090);

(statearr_44110_44131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (1))){
var inst_44084 = cljs.core.seq.call(null,coll);
var inst_44085 = inst_44084;
var state_44108__$1 = (function (){var statearr_44111 = state_44108;
(statearr_44111[(7)] = inst_44085);

return statearr_44111;
})();
var statearr_44112_44132 = state_44108__$1;
(statearr_44112_44132[(2)] = null);

(statearr_44112_44132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (4))){
var inst_44085 = (state_44108[(7)]);
var inst_44088 = cljs.core.first.call(null,inst_44085);
var state_44108__$1 = state_44108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44108__$1,(7),ch,inst_44088);
} else {
if((state_val_44109 === (13))){
var inst_44102 = (state_44108[(2)]);
var state_44108__$1 = state_44108;
var statearr_44113_44133 = state_44108__$1;
(statearr_44113_44133[(2)] = inst_44102);

(statearr_44113_44133[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (6))){
var inst_44093 = (state_44108[(2)]);
var state_44108__$1 = state_44108;
if(cljs.core.truth_(inst_44093)){
var statearr_44114_44134 = state_44108__$1;
(statearr_44114_44134[(1)] = (8));

} else {
var statearr_44115_44135 = state_44108__$1;
(statearr_44115_44135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (3))){
var inst_44106 = (state_44108[(2)]);
var state_44108__$1 = state_44108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44108__$1,inst_44106);
} else {
if((state_val_44109 === (12))){
var state_44108__$1 = state_44108;
var statearr_44116_44136 = state_44108__$1;
(statearr_44116_44136[(2)] = null);

(statearr_44116_44136[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (2))){
var inst_44085 = (state_44108[(7)]);
var state_44108__$1 = state_44108;
if(cljs.core.truth_(inst_44085)){
var statearr_44117_44137 = state_44108__$1;
(statearr_44117_44137[(1)] = (4));

} else {
var statearr_44118_44138 = state_44108__$1;
(statearr_44118_44138[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (11))){
var inst_44099 = cljs.core.async.close_BANG_.call(null,ch);
var state_44108__$1 = state_44108;
var statearr_44119_44139 = state_44108__$1;
(statearr_44119_44139[(2)] = inst_44099);

(statearr_44119_44139[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (9))){
var state_44108__$1 = state_44108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_44120_44140 = state_44108__$1;
(statearr_44120_44140[(1)] = (11));

} else {
var statearr_44121_44141 = state_44108__$1;
(statearr_44121_44141[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (5))){
var inst_44085 = (state_44108[(7)]);
var state_44108__$1 = state_44108;
var statearr_44122_44142 = state_44108__$1;
(statearr_44122_44142[(2)] = inst_44085);

(statearr_44122_44142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (10))){
var inst_44104 = (state_44108[(2)]);
var state_44108__$1 = state_44108;
var statearr_44123_44143 = state_44108__$1;
(statearr_44123_44143[(2)] = inst_44104);

(statearr_44123_44143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44109 === (8))){
var inst_44085 = (state_44108[(7)]);
var inst_44095 = cljs.core.next.call(null,inst_44085);
var inst_44085__$1 = inst_44095;
var state_44108__$1 = (function (){var statearr_44124 = state_44108;
(statearr_44124[(7)] = inst_44085__$1);

return statearr_44124;
})();
var statearr_44125_44144 = state_44108__$1;
(statearr_44125_44144[(2)] = null);

(statearr_44125_44144[(1)] = (2));


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
});})(c__43550__auto__))
;
return ((function (switch__43455__auto__,c__43550__auto__){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_44126 = [null,null,null,null,null,null,null,null];
(statearr_44126[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_44126[(1)] = (1));

return statearr_44126;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_44108){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_44108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e44127){if((e44127 instanceof Object)){
var ex__43459__auto__ = e44127;
var statearr_44128_44145 = state_44108;
(statearr_44128_44145[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44146 = state_44108;
state_44108 = G__44146;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_44108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_44108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__))
})();
var state__43552__auto__ = (function (){var statearr_44129 = f__43551__auto__.call(null);
(statearr_44129[(6)] = c__43550__auto__);

return statearr_44129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__))
);

return c__43550__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44147 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44147 = (function (ch,cs,meta44148){
this.ch = ch;
this.cs = cs;
this.meta44148 = meta44148;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_44149,meta44148__$1){
var self__ = this;
var _44149__$1 = this;
return (new cljs.core.async.t_cljs$core$async44147(self__.ch,self__.cs,meta44148__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async44147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_44149){
var self__ = this;
var _44149__$1 = this;
return self__.meta44148;
});})(cs))
;

cljs.core.async.t_cljs$core$async44147.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44147.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async44147.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44147.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44147.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44147.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async44147.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta44148","meta44148",1434952425,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async44147.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44147.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44147";

cljs.core.async.t_cljs$core$async44147.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44147");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44147.
 */
cljs.core.async.__GT_t_cljs$core$async44147 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async44147(ch__$1,cs__$1,meta44148){
return (new cljs.core.async.t_cljs$core$async44147(ch__$1,cs__$1,meta44148));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async44147(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__43550__auto___44369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___44369,cs,m,dchan,dctr,done){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___44369,cs,m,dchan,dctr,done){
return (function (state_44284){
var state_val_44285 = (state_44284[(1)]);
if((state_val_44285 === (7))){
var inst_44280 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44286_44370 = state_44284__$1;
(statearr_44286_44370[(2)] = inst_44280);

(statearr_44286_44370[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (20))){
var inst_44183 = (state_44284[(7)]);
var inst_44195 = cljs.core.first.call(null,inst_44183);
var inst_44196 = cljs.core.nth.call(null,inst_44195,(0),null);
var inst_44197 = cljs.core.nth.call(null,inst_44195,(1),null);
var state_44284__$1 = (function (){var statearr_44287 = state_44284;
(statearr_44287[(8)] = inst_44196);

return statearr_44287;
})();
if(cljs.core.truth_(inst_44197)){
var statearr_44288_44371 = state_44284__$1;
(statearr_44288_44371[(1)] = (22));

} else {
var statearr_44289_44372 = state_44284__$1;
(statearr_44289_44372[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (27))){
var inst_44225 = (state_44284[(9)]);
var inst_44227 = (state_44284[(10)]);
var inst_44232 = (state_44284[(11)]);
var inst_44152 = (state_44284[(12)]);
var inst_44232__$1 = cljs.core._nth.call(null,inst_44225,inst_44227);
var inst_44233 = cljs.core.async.put_BANG_.call(null,inst_44232__$1,inst_44152,done);
var state_44284__$1 = (function (){var statearr_44290 = state_44284;
(statearr_44290[(11)] = inst_44232__$1);

return statearr_44290;
})();
if(cljs.core.truth_(inst_44233)){
var statearr_44291_44373 = state_44284__$1;
(statearr_44291_44373[(1)] = (30));

} else {
var statearr_44292_44374 = state_44284__$1;
(statearr_44292_44374[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (1))){
var state_44284__$1 = state_44284;
var statearr_44293_44375 = state_44284__$1;
(statearr_44293_44375[(2)] = null);

(statearr_44293_44375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (24))){
var inst_44183 = (state_44284[(7)]);
var inst_44202 = (state_44284[(2)]);
var inst_44203 = cljs.core.next.call(null,inst_44183);
var inst_44161 = inst_44203;
var inst_44162 = null;
var inst_44163 = (0);
var inst_44164 = (0);
var state_44284__$1 = (function (){var statearr_44294 = state_44284;
(statearr_44294[(13)] = inst_44161);

(statearr_44294[(14)] = inst_44202);

(statearr_44294[(15)] = inst_44164);

(statearr_44294[(16)] = inst_44163);

(statearr_44294[(17)] = inst_44162);

return statearr_44294;
})();
var statearr_44295_44376 = state_44284__$1;
(statearr_44295_44376[(2)] = null);

(statearr_44295_44376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (39))){
var state_44284__$1 = state_44284;
var statearr_44299_44377 = state_44284__$1;
(statearr_44299_44377[(2)] = null);

(statearr_44299_44377[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (4))){
var inst_44152 = (state_44284[(12)]);
var inst_44152__$1 = (state_44284[(2)]);
var inst_44153 = (inst_44152__$1 == null);
var state_44284__$1 = (function (){var statearr_44300 = state_44284;
(statearr_44300[(12)] = inst_44152__$1);

return statearr_44300;
})();
if(cljs.core.truth_(inst_44153)){
var statearr_44301_44378 = state_44284__$1;
(statearr_44301_44378[(1)] = (5));

} else {
var statearr_44302_44379 = state_44284__$1;
(statearr_44302_44379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (15))){
var inst_44161 = (state_44284[(13)]);
var inst_44164 = (state_44284[(15)]);
var inst_44163 = (state_44284[(16)]);
var inst_44162 = (state_44284[(17)]);
var inst_44179 = (state_44284[(2)]);
var inst_44180 = (inst_44164 + (1));
var tmp44296 = inst_44161;
var tmp44297 = inst_44163;
var tmp44298 = inst_44162;
var inst_44161__$1 = tmp44296;
var inst_44162__$1 = tmp44298;
var inst_44163__$1 = tmp44297;
var inst_44164__$1 = inst_44180;
var state_44284__$1 = (function (){var statearr_44303 = state_44284;
(statearr_44303[(13)] = inst_44161__$1);

(statearr_44303[(15)] = inst_44164__$1);

(statearr_44303[(16)] = inst_44163__$1);

(statearr_44303[(17)] = inst_44162__$1);

(statearr_44303[(18)] = inst_44179);

return statearr_44303;
})();
var statearr_44304_44380 = state_44284__$1;
(statearr_44304_44380[(2)] = null);

(statearr_44304_44380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (21))){
var inst_44206 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44308_44381 = state_44284__$1;
(statearr_44308_44381[(2)] = inst_44206);

(statearr_44308_44381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (31))){
var inst_44232 = (state_44284[(11)]);
var inst_44236 = done.call(null,null);
var inst_44237 = cljs.core.async.untap_STAR_.call(null,m,inst_44232);
var state_44284__$1 = (function (){var statearr_44309 = state_44284;
(statearr_44309[(19)] = inst_44236);

return statearr_44309;
})();
var statearr_44310_44382 = state_44284__$1;
(statearr_44310_44382[(2)] = inst_44237);

(statearr_44310_44382[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (32))){
var inst_44225 = (state_44284[(9)]);
var inst_44226 = (state_44284[(20)]);
var inst_44227 = (state_44284[(10)]);
var inst_44224 = (state_44284[(21)]);
var inst_44239 = (state_44284[(2)]);
var inst_44240 = (inst_44227 + (1));
var tmp44305 = inst_44225;
var tmp44306 = inst_44226;
var tmp44307 = inst_44224;
var inst_44224__$1 = tmp44307;
var inst_44225__$1 = tmp44305;
var inst_44226__$1 = tmp44306;
var inst_44227__$1 = inst_44240;
var state_44284__$1 = (function (){var statearr_44311 = state_44284;
(statearr_44311[(9)] = inst_44225__$1);

(statearr_44311[(20)] = inst_44226__$1);

(statearr_44311[(10)] = inst_44227__$1);

(statearr_44311[(21)] = inst_44224__$1);

(statearr_44311[(22)] = inst_44239);

return statearr_44311;
})();
var statearr_44312_44383 = state_44284__$1;
(statearr_44312_44383[(2)] = null);

(statearr_44312_44383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (40))){
var inst_44252 = (state_44284[(23)]);
var inst_44256 = done.call(null,null);
var inst_44257 = cljs.core.async.untap_STAR_.call(null,m,inst_44252);
var state_44284__$1 = (function (){var statearr_44313 = state_44284;
(statearr_44313[(24)] = inst_44256);

return statearr_44313;
})();
var statearr_44314_44384 = state_44284__$1;
(statearr_44314_44384[(2)] = inst_44257);

(statearr_44314_44384[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (33))){
var inst_44243 = (state_44284[(25)]);
var inst_44245 = cljs.core.chunked_seq_QMARK_.call(null,inst_44243);
var state_44284__$1 = state_44284;
if(inst_44245){
var statearr_44315_44385 = state_44284__$1;
(statearr_44315_44385[(1)] = (36));

} else {
var statearr_44316_44386 = state_44284__$1;
(statearr_44316_44386[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (13))){
var inst_44173 = (state_44284[(26)]);
var inst_44176 = cljs.core.async.close_BANG_.call(null,inst_44173);
var state_44284__$1 = state_44284;
var statearr_44317_44387 = state_44284__$1;
(statearr_44317_44387[(2)] = inst_44176);

(statearr_44317_44387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (22))){
var inst_44196 = (state_44284[(8)]);
var inst_44199 = cljs.core.async.close_BANG_.call(null,inst_44196);
var state_44284__$1 = state_44284;
var statearr_44318_44388 = state_44284__$1;
(statearr_44318_44388[(2)] = inst_44199);

(statearr_44318_44388[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (36))){
var inst_44243 = (state_44284[(25)]);
var inst_44247 = cljs.core.chunk_first.call(null,inst_44243);
var inst_44248 = cljs.core.chunk_rest.call(null,inst_44243);
var inst_44249 = cljs.core.count.call(null,inst_44247);
var inst_44224 = inst_44248;
var inst_44225 = inst_44247;
var inst_44226 = inst_44249;
var inst_44227 = (0);
var state_44284__$1 = (function (){var statearr_44319 = state_44284;
(statearr_44319[(9)] = inst_44225);

(statearr_44319[(20)] = inst_44226);

(statearr_44319[(10)] = inst_44227);

(statearr_44319[(21)] = inst_44224);

return statearr_44319;
})();
var statearr_44320_44389 = state_44284__$1;
(statearr_44320_44389[(2)] = null);

(statearr_44320_44389[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (41))){
var inst_44243 = (state_44284[(25)]);
var inst_44259 = (state_44284[(2)]);
var inst_44260 = cljs.core.next.call(null,inst_44243);
var inst_44224 = inst_44260;
var inst_44225 = null;
var inst_44226 = (0);
var inst_44227 = (0);
var state_44284__$1 = (function (){var statearr_44321 = state_44284;
(statearr_44321[(9)] = inst_44225);

(statearr_44321[(27)] = inst_44259);

(statearr_44321[(20)] = inst_44226);

(statearr_44321[(10)] = inst_44227);

(statearr_44321[(21)] = inst_44224);

return statearr_44321;
})();
var statearr_44322_44390 = state_44284__$1;
(statearr_44322_44390[(2)] = null);

(statearr_44322_44390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (43))){
var state_44284__$1 = state_44284;
var statearr_44323_44391 = state_44284__$1;
(statearr_44323_44391[(2)] = null);

(statearr_44323_44391[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (29))){
var inst_44268 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44324_44392 = state_44284__$1;
(statearr_44324_44392[(2)] = inst_44268);

(statearr_44324_44392[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (44))){
var inst_44277 = (state_44284[(2)]);
var state_44284__$1 = (function (){var statearr_44325 = state_44284;
(statearr_44325[(28)] = inst_44277);

return statearr_44325;
})();
var statearr_44326_44393 = state_44284__$1;
(statearr_44326_44393[(2)] = null);

(statearr_44326_44393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (6))){
var inst_44216 = (state_44284[(29)]);
var inst_44215 = cljs.core.deref.call(null,cs);
var inst_44216__$1 = cljs.core.keys.call(null,inst_44215);
var inst_44217 = cljs.core.count.call(null,inst_44216__$1);
var inst_44218 = cljs.core.reset_BANG_.call(null,dctr,inst_44217);
var inst_44223 = cljs.core.seq.call(null,inst_44216__$1);
var inst_44224 = inst_44223;
var inst_44225 = null;
var inst_44226 = (0);
var inst_44227 = (0);
var state_44284__$1 = (function (){var statearr_44327 = state_44284;
(statearr_44327[(9)] = inst_44225);

(statearr_44327[(20)] = inst_44226);

(statearr_44327[(30)] = inst_44218);

(statearr_44327[(10)] = inst_44227);

(statearr_44327[(21)] = inst_44224);

(statearr_44327[(29)] = inst_44216__$1);

return statearr_44327;
})();
var statearr_44328_44394 = state_44284__$1;
(statearr_44328_44394[(2)] = null);

(statearr_44328_44394[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (28))){
var inst_44243 = (state_44284[(25)]);
var inst_44224 = (state_44284[(21)]);
var inst_44243__$1 = cljs.core.seq.call(null,inst_44224);
var state_44284__$1 = (function (){var statearr_44329 = state_44284;
(statearr_44329[(25)] = inst_44243__$1);

return statearr_44329;
})();
if(inst_44243__$1){
var statearr_44330_44395 = state_44284__$1;
(statearr_44330_44395[(1)] = (33));

} else {
var statearr_44331_44396 = state_44284__$1;
(statearr_44331_44396[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (25))){
var inst_44226 = (state_44284[(20)]);
var inst_44227 = (state_44284[(10)]);
var inst_44229 = (inst_44227 < inst_44226);
var inst_44230 = inst_44229;
var state_44284__$1 = state_44284;
if(cljs.core.truth_(inst_44230)){
var statearr_44332_44397 = state_44284__$1;
(statearr_44332_44397[(1)] = (27));

} else {
var statearr_44333_44398 = state_44284__$1;
(statearr_44333_44398[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (34))){
var state_44284__$1 = state_44284;
var statearr_44334_44399 = state_44284__$1;
(statearr_44334_44399[(2)] = null);

(statearr_44334_44399[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (17))){
var state_44284__$1 = state_44284;
var statearr_44335_44400 = state_44284__$1;
(statearr_44335_44400[(2)] = null);

(statearr_44335_44400[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (3))){
var inst_44282 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44284__$1,inst_44282);
} else {
if((state_val_44285 === (12))){
var inst_44211 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44336_44401 = state_44284__$1;
(statearr_44336_44401[(2)] = inst_44211);

(statearr_44336_44401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (2))){
var state_44284__$1 = state_44284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44284__$1,(4),ch);
} else {
if((state_val_44285 === (23))){
var state_44284__$1 = state_44284;
var statearr_44337_44402 = state_44284__$1;
(statearr_44337_44402[(2)] = null);

(statearr_44337_44402[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (35))){
var inst_44266 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44338_44403 = state_44284__$1;
(statearr_44338_44403[(2)] = inst_44266);

(statearr_44338_44403[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (19))){
var inst_44183 = (state_44284[(7)]);
var inst_44187 = cljs.core.chunk_first.call(null,inst_44183);
var inst_44188 = cljs.core.chunk_rest.call(null,inst_44183);
var inst_44189 = cljs.core.count.call(null,inst_44187);
var inst_44161 = inst_44188;
var inst_44162 = inst_44187;
var inst_44163 = inst_44189;
var inst_44164 = (0);
var state_44284__$1 = (function (){var statearr_44339 = state_44284;
(statearr_44339[(13)] = inst_44161);

(statearr_44339[(15)] = inst_44164);

(statearr_44339[(16)] = inst_44163);

(statearr_44339[(17)] = inst_44162);

return statearr_44339;
})();
var statearr_44340_44404 = state_44284__$1;
(statearr_44340_44404[(2)] = null);

(statearr_44340_44404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (11))){
var inst_44183 = (state_44284[(7)]);
var inst_44161 = (state_44284[(13)]);
var inst_44183__$1 = cljs.core.seq.call(null,inst_44161);
var state_44284__$1 = (function (){var statearr_44341 = state_44284;
(statearr_44341[(7)] = inst_44183__$1);

return statearr_44341;
})();
if(inst_44183__$1){
var statearr_44342_44405 = state_44284__$1;
(statearr_44342_44405[(1)] = (16));

} else {
var statearr_44343_44406 = state_44284__$1;
(statearr_44343_44406[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (9))){
var inst_44213 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44344_44407 = state_44284__$1;
(statearr_44344_44407[(2)] = inst_44213);

(statearr_44344_44407[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (5))){
var inst_44159 = cljs.core.deref.call(null,cs);
var inst_44160 = cljs.core.seq.call(null,inst_44159);
var inst_44161 = inst_44160;
var inst_44162 = null;
var inst_44163 = (0);
var inst_44164 = (0);
var state_44284__$1 = (function (){var statearr_44345 = state_44284;
(statearr_44345[(13)] = inst_44161);

(statearr_44345[(15)] = inst_44164);

(statearr_44345[(16)] = inst_44163);

(statearr_44345[(17)] = inst_44162);

return statearr_44345;
})();
var statearr_44346_44408 = state_44284__$1;
(statearr_44346_44408[(2)] = null);

(statearr_44346_44408[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (14))){
var state_44284__$1 = state_44284;
var statearr_44347_44409 = state_44284__$1;
(statearr_44347_44409[(2)] = null);

(statearr_44347_44409[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (45))){
var inst_44274 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44348_44410 = state_44284__$1;
(statearr_44348_44410[(2)] = inst_44274);

(statearr_44348_44410[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (26))){
var inst_44216 = (state_44284[(29)]);
var inst_44270 = (state_44284[(2)]);
var inst_44271 = cljs.core.seq.call(null,inst_44216);
var state_44284__$1 = (function (){var statearr_44349 = state_44284;
(statearr_44349[(31)] = inst_44270);

return statearr_44349;
})();
if(inst_44271){
var statearr_44350_44411 = state_44284__$1;
(statearr_44350_44411[(1)] = (42));

} else {
var statearr_44351_44412 = state_44284__$1;
(statearr_44351_44412[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (16))){
var inst_44183 = (state_44284[(7)]);
var inst_44185 = cljs.core.chunked_seq_QMARK_.call(null,inst_44183);
var state_44284__$1 = state_44284;
if(inst_44185){
var statearr_44352_44413 = state_44284__$1;
(statearr_44352_44413[(1)] = (19));

} else {
var statearr_44353_44414 = state_44284__$1;
(statearr_44353_44414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (38))){
var inst_44263 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44354_44415 = state_44284__$1;
(statearr_44354_44415[(2)] = inst_44263);

(statearr_44354_44415[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (30))){
var state_44284__$1 = state_44284;
var statearr_44355_44416 = state_44284__$1;
(statearr_44355_44416[(2)] = null);

(statearr_44355_44416[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (10))){
var inst_44164 = (state_44284[(15)]);
var inst_44162 = (state_44284[(17)]);
var inst_44172 = cljs.core._nth.call(null,inst_44162,inst_44164);
var inst_44173 = cljs.core.nth.call(null,inst_44172,(0),null);
var inst_44174 = cljs.core.nth.call(null,inst_44172,(1),null);
var state_44284__$1 = (function (){var statearr_44356 = state_44284;
(statearr_44356[(26)] = inst_44173);

return statearr_44356;
})();
if(cljs.core.truth_(inst_44174)){
var statearr_44357_44417 = state_44284__$1;
(statearr_44357_44417[(1)] = (13));

} else {
var statearr_44358_44418 = state_44284__$1;
(statearr_44358_44418[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (18))){
var inst_44209 = (state_44284[(2)]);
var state_44284__$1 = state_44284;
var statearr_44359_44419 = state_44284__$1;
(statearr_44359_44419[(2)] = inst_44209);

(statearr_44359_44419[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (42))){
var state_44284__$1 = state_44284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44284__$1,(45),dchan);
} else {
if((state_val_44285 === (37))){
var inst_44243 = (state_44284[(25)]);
var inst_44252 = (state_44284[(23)]);
var inst_44152 = (state_44284[(12)]);
var inst_44252__$1 = cljs.core.first.call(null,inst_44243);
var inst_44253 = cljs.core.async.put_BANG_.call(null,inst_44252__$1,inst_44152,done);
var state_44284__$1 = (function (){var statearr_44360 = state_44284;
(statearr_44360[(23)] = inst_44252__$1);

return statearr_44360;
})();
if(cljs.core.truth_(inst_44253)){
var statearr_44361_44420 = state_44284__$1;
(statearr_44361_44420[(1)] = (39));

} else {
var statearr_44362_44421 = state_44284__$1;
(statearr_44362_44421[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44285 === (8))){
var inst_44164 = (state_44284[(15)]);
var inst_44163 = (state_44284[(16)]);
var inst_44166 = (inst_44164 < inst_44163);
var inst_44167 = inst_44166;
var state_44284__$1 = state_44284;
if(cljs.core.truth_(inst_44167)){
var statearr_44363_44422 = state_44284__$1;
(statearr_44363_44422[(1)] = (10));

} else {
var statearr_44364_44423 = state_44284__$1;
(statearr_44364_44423[(1)] = (11));

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
});})(c__43550__auto___44369,cs,m,dchan,dctr,done))
;
return ((function (switch__43455__auto__,c__43550__auto___44369,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__43456__auto__ = null;
var cljs$core$async$mult_$_state_machine__43456__auto____0 = (function (){
var statearr_44365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44365[(0)] = cljs$core$async$mult_$_state_machine__43456__auto__);

(statearr_44365[(1)] = (1));

return statearr_44365;
});
var cljs$core$async$mult_$_state_machine__43456__auto____1 = (function (state_44284){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_44284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e44366){if((e44366 instanceof Object)){
var ex__43459__auto__ = e44366;
var statearr_44367_44424 = state_44284;
(statearr_44367_44424[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44425 = state_44284;
state_44284 = G__44425;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__43456__auto__ = function(state_44284){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__43456__auto____1.call(this,state_44284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__43456__auto____0;
cljs$core$async$mult_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__43456__auto____1;
return cljs$core$async$mult_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___44369,cs,m,dchan,dctr,done))
})();
var state__43552__auto__ = (function (){var statearr_44368 = f__43551__auto__.call(null);
(statearr_44368[(6)] = c__43550__auto___44369);

return statearr_44368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___44369,cs,m,dchan,dctr,done))
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
var G__44427 = arguments.length;
switch (G__44427) {
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
var len__4730__auto___44439 = arguments.length;
var i__4731__auto___44440 = (0);
while(true){
if((i__4731__auto___44440 < len__4730__auto___44439)){
args__4736__auto__.push((arguments[i__4731__auto___44440]));

var G__44441 = (i__4731__auto___44440 + (1));
i__4731__auto___44440 = G__44441;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__44433){
var map__44434 = p__44433;
var map__44434__$1 = (((((!((map__44434 == null))))?(((((map__44434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44434):map__44434);
var opts = map__44434__$1;
var statearr_44436_44442 = state;
(statearr_44436_44442[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__44434,map__44434__$1,opts){
return (function (val){
var statearr_44437_44443 = state;
(statearr_44437_44443[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__44434,map__44434__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_44438_44444 = state;
(statearr_44438_44444[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq44429){
var G__44430 = cljs.core.first.call(null,seq44429);
var seq44429__$1 = cljs.core.next.call(null,seq44429);
var G__44431 = cljs.core.first.call(null,seq44429__$1);
var seq44429__$2 = cljs.core.next.call(null,seq44429__$1);
var G__44432 = cljs.core.first.call(null,seq44429__$2);
var seq44429__$3 = cljs.core.next.call(null,seq44429__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44430,G__44431,G__44432,seq44429__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44445 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta44446){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta44446 = meta44446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44447,meta44446__$1){
var self__ = this;
var _44447__$1 = this;
return (new cljs.core.async.t_cljs$core$async44445(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta44446__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_44447){
var self__ = this;
var _44447__$1 = this;
return self__.meta44446;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44445.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async44445.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta44446","meta44446",-1880808130,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async44445.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44445";

cljs.core.async.t_cljs$core$async44445.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44445");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44445.
 */
cljs.core.async.__GT_t_cljs$core$async44445 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async44445(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44446){
return (new cljs.core.async.t_cljs$core$async44445(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta44446));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async44445(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43550__auto___44609 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___44609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___44609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_44549){
var state_val_44550 = (state_44549[(1)]);
if((state_val_44550 === (7))){
var inst_44464 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44551_44610 = state_44549__$1;
(statearr_44551_44610[(2)] = inst_44464);

(statearr_44551_44610[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (20))){
var inst_44476 = (state_44549[(7)]);
var state_44549__$1 = state_44549;
var statearr_44552_44611 = state_44549__$1;
(statearr_44552_44611[(2)] = inst_44476);

(statearr_44552_44611[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (27))){
var state_44549__$1 = state_44549;
var statearr_44553_44612 = state_44549__$1;
(statearr_44553_44612[(2)] = null);

(statearr_44553_44612[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (1))){
var inst_44451 = (state_44549[(8)]);
var inst_44451__$1 = calc_state.call(null);
var inst_44453 = (inst_44451__$1 == null);
var inst_44454 = cljs.core.not.call(null,inst_44453);
var state_44549__$1 = (function (){var statearr_44554 = state_44549;
(statearr_44554[(8)] = inst_44451__$1);

return statearr_44554;
})();
if(inst_44454){
var statearr_44555_44613 = state_44549__$1;
(statearr_44555_44613[(1)] = (2));

} else {
var statearr_44556_44614 = state_44549__$1;
(statearr_44556_44614[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (24))){
var inst_44509 = (state_44549[(9)]);
var inst_44500 = (state_44549[(10)]);
var inst_44523 = (state_44549[(11)]);
var inst_44523__$1 = inst_44500.call(null,inst_44509);
var state_44549__$1 = (function (){var statearr_44557 = state_44549;
(statearr_44557[(11)] = inst_44523__$1);

return statearr_44557;
})();
if(cljs.core.truth_(inst_44523__$1)){
var statearr_44558_44615 = state_44549__$1;
(statearr_44558_44615[(1)] = (29));

} else {
var statearr_44559_44616 = state_44549__$1;
(statearr_44559_44616[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (4))){
var inst_44467 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44467)){
var statearr_44560_44617 = state_44549__$1;
(statearr_44560_44617[(1)] = (8));

} else {
var statearr_44561_44618 = state_44549__$1;
(statearr_44561_44618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (15))){
var inst_44494 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44494)){
var statearr_44562_44619 = state_44549__$1;
(statearr_44562_44619[(1)] = (19));

} else {
var statearr_44563_44620 = state_44549__$1;
(statearr_44563_44620[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (21))){
var inst_44499 = (state_44549[(12)]);
var inst_44499__$1 = (state_44549[(2)]);
var inst_44500 = cljs.core.get.call(null,inst_44499__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44501 = cljs.core.get.call(null,inst_44499__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44502 = cljs.core.get.call(null,inst_44499__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44549__$1 = (function (){var statearr_44564 = state_44549;
(statearr_44564[(10)] = inst_44500);

(statearr_44564[(13)] = inst_44501);

(statearr_44564[(12)] = inst_44499__$1);

return statearr_44564;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44549__$1,(22),inst_44502);
} else {
if((state_val_44550 === (31))){
var inst_44531 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44531)){
var statearr_44565_44621 = state_44549__$1;
(statearr_44565_44621[(1)] = (32));

} else {
var statearr_44566_44622 = state_44549__$1;
(statearr_44566_44622[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (32))){
var inst_44508 = (state_44549[(14)]);
var state_44549__$1 = state_44549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44549__$1,(35),out,inst_44508);
} else {
if((state_val_44550 === (33))){
var inst_44499 = (state_44549[(12)]);
var inst_44476 = inst_44499;
var state_44549__$1 = (function (){var statearr_44567 = state_44549;
(statearr_44567[(7)] = inst_44476);

return statearr_44567;
})();
var statearr_44568_44623 = state_44549__$1;
(statearr_44568_44623[(2)] = null);

(statearr_44568_44623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (13))){
var inst_44476 = (state_44549[(7)]);
var inst_44483 = inst_44476.cljs$lang$protocol_mask$partition0$;
var inst_44484 = (inst_44483 & (64));
var inst_44485 = inst_44476.cljs$core$ISeq$;
var inst_44486 = (cljs.core.PROTOCOL_SENTINEL === inst_44485);
var inst_44487 = ((inst_44484) || (inst_44486));
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44487)){
var statearr_44569_44624 = state_44549__$1;
(statearr_44569_44624[(1)] = (16));

} else {
var statearr_44570_44625 = state_44549__$1;
(statearr_44570_44625[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (22))){
var inst_44509 = (state_44549[(9)]);
var inst_44508 = (state_44549[(14)]);
var inst_44507 = (state_44549[(2)]);
var inst_44508__$1 = cljs.core.nth.call(null,inst_44507,(0),null);
var inst_44509__$1 = cljs.core.nth.call(null,inst_44507,(1),null);
var inst_44510 = (inst_44508__$1 == null);
var inst_44511 = cljs.core._EQ_.call(null,inst_44509__$1,change);
var inst_44512 = ((inst_44510) || (inst_44511));
var state_44549__$1 = (function (){var statearr_44571 = state_44549;
(statearr_44571[(9)] = inst_44509__$1);

(statearr_44571[(14)] = inst_44508__$1);

return statearr_44571;
})();
if(cljs.core.truth_(inst_44512)){
var statearr_44572_44626 = state_44549__$1;
(statearr_44572_44626[(1)] = (23));

} else {
var statearr_44573_44627 = state_44549__$1;
(statearr_44573_44627[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (36))){
var inst_44499 = (state_44549[(12)]);
var inst_44476 = inst_44499;
var state_44549__$1 = (function (){var statearr_44574 = state_44549;
(statearr_44574[(7)] = inst_44476);

return statearr_44574;
})();
var statearr_44575_44628 = state_44549__$1;
(statearr_44575_44628[(2)] = null);

(statearr_44575_44628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (29))){
var inst_44523 = (state_44549[(11)]);
var state_44549__$1 = state_44549;
var statearr_44576_44629 = state_44549__$1;
(statearr_44576_44629[(2)] = inst_44523);

(statearr_44576_44629[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (6))){
var state_44549__$1 = state_44549;
var statearr_44577_44630 = state_44549__$1;
(statearr_44577_44630[(2)] = false);

(statearr_44577_44630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (28))){
var inst_44519 = (state_44549[(2)]);
var inst_44520 = calc_state.call(null);
var inst_44476 = inst_44520;
var state_44549__$1 = (function (){var statearr_44578 = state_44549;
(statearr_44578[(15)] = inst_44519);

(statearr_44578[(7)] = inst_44476);

return statearr_44578;
})();
var statearr_44579_44631 = state_44549__$1;
(statearr_44579_44631[(2)] = null);

(statearr_44579_44631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (25))){
var inst_44545 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44580_44632 = state_44549__$1;
(statearr_44580_44632[(2)] = inst_44545);

(statearr_44580_44632[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (34))){
var inst_44543 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44581_44633 = state_44549__$1;
(statearr_44581_44633[(2)] = inst_44543);

(statearr_44581_44633[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (17))){
var state_44549__$1 = state_44549;
var statearr_44582_44634 = state_44549__$1;
(statearr_44582_44634[(2)] = false);

(statearr_44582_44634[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (3))){
var state_44549__$1 = state_44549;
var statearr_44583_44635 = state_44549__$1;
(statearr_44583_44635[(2)] = false);

(statearr_44583_44635[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (12))){
var inst_44547 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44549__$1,inst_44547);
} else {
if((state_val_44550 === (2))){
var inst_44451 = (state_44549[(8)]);
var inst_44456 = inst_44451.cljs$lang$protocol_mask$partition0$;
var inst_44457 = (inst_44456 & (64));
var inst_44458 = inst_44451.cljs$core$ISeq$;
var inst_44459 = (cljs.core.PROTOCOL_SENTINEL === inst_44458);
var inst_44460 = ((inst_44457) || (inst_44459));
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44460)){
var statearr_44584_44636 = state_44549__$1;
(statearr_44584_44636[(1)] = (5));

} else {
var statearr_44585_44637 = state_44549__$1;
(statearr_44585_44637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (23))){
var inst_44508 = (state_44549[(14)]);
var inst_44514 = (inst_44508 == null);
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44514)){
var statearr_44586_44638 = state_44549__$1;
(statearr_44586_44638[(1)] = (26));

} else {
var statearr_44587_44639 = state_44549__$1;
(statearr_44587_44639[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (35))){
var inst_44534 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
if(cljs.core.truth_(inst_44534)){
var statearr_44588_44640 = state_44549__$1;
(statearr_44588_44640[(1)] = (36));

} else {
var statearr_44589_44641 = state_44549__$1;
(statearr_44589_44641[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (19))){
var inst_44476 = (state_44549[(7)]);
var inst_44496 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44476);
var state_44549__$1 = state_44549;
var statearr_44590_44642 = state_44549__$1;
(statearr_44590_44642[(2)] = inst_44496);

(statearr_44590_44642[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (11))){
var inst_44476 = (state_44549[(7)]);
var inst_44480 = (inst_44476 == null);
var inst_44481 = cljs.core.not.call(null,inst_44480);
var state_44549__$1 = state_44549;
if(inst_44481){
var statearr_44591_44643 = state_44549__$1;
(statearr_44591_44643[(1)] = (13));

} else {
var statearr_44592_44644 = state_44549__$1;
(statearr_44592_44644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (9))){
var inst_44451 = (state_44549[(8)]);
var state_44549__$1 = state_44549;
var statearr_44593_44645 = state_44549__$1;
(statearr_44593_44645[(2)] = inst_44451);

(statearr_44593_44645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (5))){
var state_44549__$1 = state_44549;
var statearr_44594_44646 = state_44549__$1;
(statearr_44594_44646[(2)] = true);

(statearr_44594_44646[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (14))){
var state_44549__$1 = state_44549;
var statearr_44595_44647 = state_44549__$1;
(statearr_44595_44647[(2)] = false);

(statearr_44595_44647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (26))){
var inst_44509 = (state_44549[(9)]);
var inst_44516 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44509);
var state_44549__$1 = state_44549;
var statearr_44596_44648 = state_44549__$1;
(statearr_44596_44648[(2)] = inst_44516);

(statearr_44596_44648[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (16))){
var state_44549__$1 = state_44549;
var statearr_44597_44649 = state_44549__$1;
(statearr_44597_44649[(2)] = true);

(statearr_44597_44649[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (38))){
var inst_44539 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44598_44650 = state_44549__$1;
(statearr_44598_44650[(2)] = inst_44539);

(statearr_44598_44650[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (30))){
var inst_44509 = (state_44549[(9)]);
var inst_44500 = (state_44549[(10)]);
var inst_44501 = (state_44549[(13)]);
var inst_44526 = cljs.core.empty_QMARK_.call(null,inst_44500);
var inst_44527 = inst_44501.call(null,inst_44509);
var inst_44528 = cljs.core.not.call(null,inst_44527);
var inst_44529 = ((inst_44526) && (inst_44528));
var state_44549__$1 = state_44549;
var statearr_44599_44651 = state_44549__$1;
(statearr_44599_44651[(2)] = inst_44529);

(statearr_44599_44651[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (10))){
var inst_44451 = (state_44549[(8)]);
var inst_44472 = (state_44549[(2)]);
var inst_44473 = cljs.core.get.call(null,inst_44472,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44474 = cljs.core.get.call(null,inst_44472,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44475 = cljs.core.get.call(null,inst_44472,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_44476 = inst_44451;
var state_44549__$1 = (function (){var statearr_44600 = state_44549;
(statearr_44600[(7)] = inst_44476);

(statearr_44600[(16)] = inst_44474);

(statearr_44600[(17)] = inst_44475);

(statearr_44600[(18)] = inst_44473);

return statearr_44600;
})();
var statearr_44601_44652 = state_44549__$1;
(statearr_44601_44652[(2)] = null);

(statearr_44601_44652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (18))){
var inst_44491 = (state_44549[(2)]);
var state_44549__$1 = state_44549;
var statearr_44602_44653 = state_44549__$1;
(statearr_44602_44653[(2)] = inst_44491);

(statearr_44602_44653[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (37))){
var state_44549__$1 = state_44549;
var statearr_44603_44654 = state_44549__$1;
(statearr_44603_44654[(2)] = null);

(statearr_44603_44654[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44550 === (8))){
var inst_44451 = (state_44549[(8)]);
var inst_44469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44451);
var state_44549__$1 = state_44549;
var statearr_44604_44655 = state_44549__$1;
(statearr_44604_44655[(2)] = inst_44469);

(statearr_44604_44655[(1)] = (10));


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
});})(c__43550__auto___44609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__43455__auto__,c__43550__auto___44609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__43456__auto__ = null;
var cljs$core$async$mix_$_state_machine__43456__auto____0 = (function (){
var statearr_44605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44605[(0)] = cljs$core$async$mix_$_state_machine__43456__auto__);

(statearr_44605[(1)] = (1));

return statearr_44605;
});
var cljs$core$async$mix_$_state_machine__43456__auto____1 = (function (state_44549){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_44549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e44606){if((e44606 instanceof Object)){
var ex__43459__auto__ = e44606;
var statearr_44607_44656 = state_44549;
(statearr_44607_44656[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44657 = state_44549;
state_44549 = G__44657;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__43456__auto__ = function(state_44549){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__43456__auto____1.call(this,state_44549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__43456__auto____0;
cljs$core$async$mix_$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__43456__auto____1;
return cljs$core$async$mix_$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___44609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__43552__auto__ = (function (){var statearr_44608 = f__43551__auto__.call(null);
(statearr_44608[(6)] = c__43550__auto___44609);

return statearr_44608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___44609,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__44659 = arguments.length;
switch (G__44659) {
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
var G__44663 = arguments.length;
switch (G__44663) {
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
return (function (p1__44661_SHARP_){
if(cljs.core.truth_(p1__44661_SHARP_.call(null,topic))){
return p1__44661_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44661_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44664 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44665){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44665 = meta44665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_44666,meta44665__$1){
var self__ = this;
var _44666__$1 = this;
return (new cljs.core.async.t_cljs$core$async44664(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44665__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_44666){
var self__ = this;
var _44666__$1 = this;
return self__.meta44665;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44664.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44664.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44665","meta44665",-725052756,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async44664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async44664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44664";

cljs.core.async.t_cljs$core$async44664.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async44664");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44664.
 */
cljs.core.async.__GT_t_cljs$core$async44664 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async44664(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44665){
return (new cljs.core.async.t_cljs$core$async44664(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44665));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async44664(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__43550__auto___44784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___44784,mults,ensure_mult,p){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___44784,mults,ensure_mult,p){
return (function (state_44738){
var state_val_44739 = (state_44738[(1)]);
if((state_val_44739 === (7))){
var inst_44734 = (state_44738[(2)]);
var state_44738__$1 = state_44738;
var statearr_44740_44785 = state_44738__$1;
(statearr_44740_44785[(2)] = inst_44734);

(statearr_44740_44785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (20))){
var state_44738__$1 = state_44738;
var statearr_44741_44786 = state_44738__$1;
(statearr_44741_44786[(2)] = null);

(statearr_44741_44786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (1))){
var state_44738__$1 = state_44738;
var statearr_44742_44787 = state_44738__$1;
(statearr_44742_44787[(2)] = null);

(statearr_44742_44787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (24))){
var inst_44717 = (state_44738[(7)]);
var inst_44726 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44717);
var state_44738__$1 = state_44738;
var statearr_44743_44788 = state_44738__$1;
(statearr_44743_44788[(2)] = inst_44726);

(statearr_44743_44788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (4))){
var inst_44669 = (state_44738[(8)]);
var inst_44669__$1 = (state_44738[(2)]);
var inst_44670 = (inst_44669__$1 == null);
var state_44738__$1 = (function (){var statearr_44744 = state_44738;
(statearr_44744[(8)] = inst_44669__$1);

return statearr_44744;
})();
if(cljs.core.truth_(inst_44670)){
var statearr_44745_44789 = state_44738__$1;
(statearr_44745_44789[(1)] = (5));

} else {
var statearr_44746_44790 = state_44738__$1;
(statearr_44746_44790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (15))){
var inst_44711 = (state_44738[(2)]);
var state_44738__$1 = state_44738;
var statearr_44747_44791 = state_44738__$1;
(statearr_44747_44791[(2)] = inst_44711);

(statearr_44747_44791[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (21))){
var inst_44731 = (state_44738[(2)]);
var state_44738__$1 = (function (){var statearr_44748 = state_44738;
(statearr_44748[(9)] = inst_44731);

return statearr_44748;
})();
var statearr_44749_44792 = state_44738__$1;
(statearr_44749_44792[(2)] = null);

(statearr_44749_44792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (13))){
var inst_44693 = (state_44738[(10)]);
var inst_44695 = cljs.core.chunked_seq_QMARK_.call(null,inst_44693);
var state_44738__$1 = state_44738;
if(inst_44695){
var statearr_44750_44793 = state_44738__$1;
(statearr_44750_44793[(1)] = (16));

} else {
var statearr_44751_44794 = state_44738__$1;
(statearr_44751_44794[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (22))){
var inst_44723 = (state_44738[(2)]);
var state_44738__$1 = state_44738;
if(cljs.core.truth_(inst_44723)){
var statearr_44752_44795 = state_44738__$1;
(statearr_44752_44795[(1)] = (23));

} else {
var statearr_44753_44796 = state_44738__$1;
(statearr_44753_44796[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (6))){
var inst_44719 = (state_44738[(11)]);
var inst_44717 = (state_44738[(7)]);
var inst_44669 = (state_44738[(8)]);
var inst_44717__$1 = topic_fn.call(null,inst_44669);
var inst_44718 = cljs.core.deref.call(null,mults);
var inst_44719__$1 = cljs.core.get.call(null,inst_44718,inst_44717__$1);
var state_44738__$1 = (function (){var statearr_44754 = state_44738;
(statearr_44754[(11)] = inst_44719__$1);

(statearr_44754[(7)] = inst_44717__$1);

return statearr_44754;
})();
if(cljs.core.truth_(inst_44719__$1)){
var statearr_44755_44797 = state_44738__$1;
(statearr_44755_44797[(1)] = (19));

} else {
var statearr_44756_44798 = state_44738__$1;
(statearr_44756_44798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (25))){
var inst_44728 = (state_44738[(2)]);
var state_44738__$1 = state_44738;
var statearr_44757_44799 = state_44738__$1;
(statearr_44757_44799[(2)] = inst_44728);

(statearr_44757_44799[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (17))){
var inst_44693 = (state_44738[(10)]);
var inst_44702 = cljs.core.first.call(null,inst_44693);
var inst_44703 = cljs.core.async.muxch_STAR_.call(null,inst_44702);
var inst_44704 = cljs.core.async.close_BANG_.call(null,inst_44703);
var inst_44705 = cljs.core.next.call(null,inst_44693);
var inst_44679 = inst_44705;
var inst_44680 = null;
var inst_44681 = (0);
var inst_44682 = (0);
var state_44738__$1 = (function (){var statearr_44758 = state_44738;
(statearr_44758[(12)] = inst_44679);

(statearr_44758[(13)] = inst_44681);

(statearr_44758[(14)] = inst_44704);

(statearr_44758[(15)] = inst_44680);

(statearr_44758[(16)] = inst_44682);

return statearr_44758;
})();
var statearr_44759_44800 = state_44738__$1;
(statearr_44759_44800[(2)] = null);

(statearr_44759_44800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (3))){
var inst_44736 = (state_44738[(2)]);
var state_44738__$1 = state_44738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44738__$1,inst_44736);
} else {
if((state_val_44739 === (12))){
var inst_44713 = (state_44738[(2)]);
var state_44738__$1 = state_44738;
var statearr_44760_44801 = state_44738__$1;
(statearr_44760_44801[(2)] = inst_44713);

(statearr_44760_44801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (2))){
var state_44738__$1 = state_44738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44738__$1,(4),ch);
} else {
if((state_val_44739 === (23))){
var state_44738__$1 = state_44738;
var statearr_44761_44802 = state_44738__$1;
(statearr_44761_44802[(2)] = null);

(statearr_44761_44802[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (19))){
var inst_44719 = (state_44738[(11)]);
var inst_44669 = (state_44738[(8)]);
var inst_44721 = cljs.core.async.muxch_STAR_.call(null,inst_44719);
var state_44738__$1 = state_44738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44738__$1,(22),inst_44721,inst_44669);
} else {
if((state_val_44739 === (11))){
var inst_44679 = (state_44738[(12)]);
var inst_44693 = (state_44738[(10)]);
var inst_44693__$1 = cljs.core.seq.call(null,inst_44679);
var state_44738__$1 = (function (){var statearr_44762 = state_44738;
(statearr_44762[(10)] = inst_44693__$1);

return statearr_44762;
})();
if(inst_44693__$1){
var statearr_44763_44803 = state_44738__$1;
(statearr_44763_44803[(1)] = (13));

} else {
var statearr_44764_44804 = state_44738__$1;
(statearr_44764_44804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (9))){
var inst_44715 = (state_44738[(2)]);
var state_44738__$1 = state_44738;
var statearr_44765_44805 = state_44738__$1;
(statearr_44765_44805[(2)] = inst_44715);

(statearr_44765_44805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (5))){
var inst_44676 = cljs.core.deref.call(null,mults);
var inst_44677 = cljs.core.vals.call(null,inst_44676);
var inst_44678 = cljs.core.seq.call(null,inst_44677);
var inst_44679 = inst_44678;
var inst_44680 = null;
var inst_44681 = (0);
var inst_44682 = (0);
var state_44738__$1 = (function (){var statearr_44766 = state_44738;
(statearr_44766[(12)] = inst_44679);

(statearr_44766[(13)] = inst_44681);

(statearr_44766[(15)] = inst_44680);

(statearr_44766[(16)] = inst_44682);

return statearr_44766;
})();
var statearr_44767_44806 = state_44738__$1;
(statearr_44767_44806[(2)] = null);

(statearr_44767_44806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (14))){
var state_44738__$1 = state_44738;
var statearr_44771_44807 = state_44738__$1;
(statearr_44771_44807[(2)] = null);

(statearr_44771_44807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (16))){
var inst_44693 = (state_44738[(10)]);
var inst_44697 = cljs.core.chunk_first.call(null,inst_44693);
var inst_44698 = cljs.core.chunk_rest.call(null,inst_44693);
var inst_44699 = cljs.core.count.call(null,inst_44697);
var inst_44679 = inst_44698;
var inst_44680 = inst_44697;
var inst_44681 = inst_44699;
var inst_44682 = (0);
var state_44738__$1 = (function (){var statearr_44772 = state_44738;
(statearr_44772[(12)] = inst_44679);

(statearr_44772[(13)] = inst_44681);

(statearr_44772[(15)] = inst_44680);

(statearr_44772[(16)] = inst_44682);

return statearr_44772;
})();
var statearr_44773_44808 = state_44738__$1;
(statearr_44773_44808[(2)] = null);

(statearr_44773_44808[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (10))){
var inst_44679 = (state_44738[(12)]);
var inst_44681 = (state_44738[(13)]);
var inst_44680 = (state_44738[(15)]);
var inst_44682 = (state_44738[(16)]);
var inst_44687 = cljs.core._nth.call(null,inst_44680,inst_44682);
var inst_44688 = cljs.core.async.muxch_STAR_.call(null,inst_44687);
var inst_44689 = cljs.core.async.close_BANG_.call(null,inst_44688);
var inst_44690 = (inst_44682 + (1));
var tmp44768 = inst_44679;
var tmp44769 = inst_44681;
var tmp44770 = inst_44680;
var inst_44679__$1 = tmp44768;
var inst_44680__$1 = tmp44770;
var inst_44681__$1 = tmp44769;
var inst_44682__$1 = inst_44690;
var state_44738__$1 = (function (){var statearr_44774 = state_44738;
(statearr_44774[(12)] = inst_44679__$1);

(statearr_44774[(13)] = inst_44681__$1);

(statearr_44774[(15)] = inst_44680__$1);

(statearr_44774[(16)] = inst_44682__$1);

(statearr_44774[(17)] = inst_44689);

return statearr_44774;
})();
var statearr_44775_44809 = state_44738__$1;
(statearr_44775_44809[(2)] = null);

(statearr_44775_44809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (18))){
var inst_44708 = (state_44738[(2)]);
var state_44738__$1 = state_44738;
var statearr_44776_44810 = state_44738__$1;
(statearr_44776_44810[(2)] = inst_44708);

(statearr_44776_44810[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44739 === (8))){
var inst_44681 = (state_44738[(13)]);
var inst_44682 = (state_44738[(16)]);
var inst_44684 = (inst_44682 < inst_44681);
var inst_44685 = inst_44684;
var state_44738__$1 = state_44738;
if(cljs.core.truth_(inst_44685)){
var statearr_44777_44811 = state_44738__$1;
(statearr_44777_44811[(1)] = (10));

} else {
var statearr_44778_44812 = state_44738__$1;
(statearr_44778_44812[(1)] = (11));

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
});})(c__43550__auto___44784,mults,ensure_mult,p))
;
return ((function (switch__43455__auto__,c__43550__auto___44784,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_44779 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44779[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_44779[(1)] = (1));

return statearr_44779;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_44738){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_44738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e44780){if((e44780 instanceof Object)){
var ex__43459__auto__ = e44780;
var statearr_44781_44813 = state_44738;
(statearr_44781_44813[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44814 = state_44738;
state_44738 = G__44814;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_44738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_44738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___44784,mults,ensure_mult,p))
})();
var state__43552__auto__ = (function (){var statearr_44782 = f__43551__auto__.call(null);
(statearr_44782[(6)] = c__43550__auto___44784);

return statearr_44782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___44784,mults,ensure_mult,p))
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
var G__44816 = arguments.length;
switch (G__44816) {
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
var G__44819 = arguments.length;
switch (G__44819) {
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
var G__44822 = arguments.length;
switch (G__44822) {
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
var c__43550__auto___44889 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___44889,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___44889,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_44861){
var state_val_44862 = (state_44861[(1)]);
if((state_val_44862 === (7))){
var state_44861__$1 = state_44861;
var statearr_44863_44890 = state_44861__$1;
(statearr_44863_44890[(2)] = null);

(statearr_44863_44890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (1))){
var state_44861__$1 = state_44861;
var statearr_44864_44891 = state_44861__$1;
(statearr_44864_44891[(2)] = null);

(statearr_44864_44891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (4))){
var inst_44825 = (state_44861[(7)]);
var inst_44827 = (inst_44825 < cnt);
var state_44861__$1 = state_44861;
if(cljs.core.truth_(inst_44827)){
var statearr_44865_44892 = state_44861__$1;
(statearr_44865_44892[(1)] = (6));

} else {
var statearr_44866_44893 = state_44861__$1;
(statearr_44866_44893[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (15))){
var inst_44857 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44867_44894 = state_44861__$1;
(statearr_44867_44894[(2)] = inst_44857);

(statearr_44867_44894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (13))){
var inst_44850 = cljs.core.async.close_BANG_.call(null,out);
var state_44861__$1 = state_44861;
var statearr_44868_44895 = state_44861__$1;
(statearr_44868_44895[(2)] = inst_44850);

(statearr_44868_44895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (6))){
var state_44861__$1 = state_44861;
var statearr_44869_44896 = state_44861__$1;
(statearr_44869_44896[(2)] = null);

(statearr_44869_44896[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (3))){
var inst_44859 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44861__$1,inst_44859);
} else {
if((state_val_44862 === (12))){
var inst_44847 = (state_44861[(8)]);
var inst_44847__$1 = (state_44861[(2)]);
var inst_44848 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44847__$1);
var state_44861__$1 = (function (){var statearr_44870 = state_44861;
(statearr_44870[(8)] = inst_44847__$1);

return statearr_44870;
})();
if(cljs.core.truth_(inst_44848)){
var statearr_44871_44897 = state_44861__$1;
(statearr_44871_44897[(1)] = (13));

} else {
var statearr_44872_44898 = state_44861__$1;
(statearr_44872_44898[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (2))){
var inst_44824 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44825 = (0);
var state_44861__$1 = (function (){var statearr_44873 = state_44861;
(statearr_44873[(9)] = inst_44824);

(statearr_44873[(7)] = inst_44825);

return statearr_44873;
})();
var statearr_44874_44899 = state_44861__$1;
(statearr_44874_44899[(2)] = null);

(statearr_44874_44899[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (11))){
var inst_44825 = (state_44861[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44861,(10),Object,null,(9));
var inst_44834 = chs__$1.call(null,inst_44825);
var inst_44835 = done.call(null,inst_44825);
var inst_44836 = cljs.core.async.take_BANG_.call(null,inst_44834,inst_44835);
var state_44861__$1 = state_44861;
var statearr_44875_44900 = state_44861__$1;
(statearr_44875_44900[(2)] = inst_44836);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (9))){
var inst_44825 = (state_44861[(7)]);
var inst_44838 = (state_44861[(2)]);
var inst_44839 = (inst_44825 + (1));
var inst_44825__$1 = inst_44839;
var state_44861__$1 = (function (){var statearr_44876 = state_44861;
(statearr_44876[(7)] = inst_44825__$1);

(statearr_44876[(10)] = inst_44838);

return statearr_44876;
})();
var statearr_44877_44901 = state_44861__$1;
(statearr_44877_44901[(2)] = null);

(statearr_44877_44901[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (5))){
var inst_44845 = (state_44861[(2)]);
var state_44861__$1 = (function (){var statearr_44878 = state_44861;
(statearr_44878[(11)] = inst_44845);

return statearr_44878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44861__$1,(12),dchan);
} else {
if((state_val_44862 === (14))){
var inst_44847 = (state_44861[(8)]);
var inst_44852 = cljs.core.apply.call(null,f,inst_44847);
var state_44861__$1 = state_44861;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44861__$1,(16),out,inst_44852);
} else {
if((state_val_44862 === (16))){
var inst_44854 = (state_44861[(2)]);
var state_44861__$1 = (function (){var statearr_44879 = state_44861;
(statearr_44879[(12)] = inst_44854);

return statearr_44879;
})();
var statearr_44880_44902 = state_44861__$1;
(statearr_44880_44902[(2)] = null);

(statearr_44880_44902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (10))){
var inst_44829 = (state_44861[(2)]);
var inst_44830 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44861__$1 = (function (){var statearr_44881 = state_44861;
(statearr_44881[(13)] = inst_44829);

return statearr_44881;
})();
var statearr_44882_44903 = state_44861__$1;
(statearr_44882_44903[(2)] = inst_44830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44862 === (8))){
var inst_44843 = (state_44861[(2)]);
var state_44861__$1 = state_44861;
var statearr_44883_44904 = state_44861__$1;
(statearr_44883_44904[(2)] = inst_44843);

(statearr_44883_44904[(1)] = (5));


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
});})(c__43550__auto___44889,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__43455__auto__,c__43550__auto___44889,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_44884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44884[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_44884[(1)] = (1));

return statearr_44884;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_44861){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_44861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e44885){if((e44885 instanceof Object)){
var ex__43459__auto__ = e44885;
var statearr_44886_44905 = state_44861;
(statearr_44886_44905[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44906 = state_44861;
state_44861 = G__44906;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_44861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_44861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___44889,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__43552__auto__ = (function (){var statearr_44887 = f__43551__auto__.call(null);
(statearr_44887[(6)] = c__43550__auto___44889);

return statearr_44887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___44889,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__44909 = arguments.length;
switch (G__44909) {
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
var c__43550__auto___44963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___44963,out){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___44963,out){
return (function (state_44941){
var state_val_44942 = (state_44941[(1)]);
if((state_val_44942 === (7))){
var inst_44921 = (state_44941[(7)]);
var inst_44920 = (state_44941[(8)]);
var inst_44920__$1 = (state_44941[(2)]);
var inst_44921__$1 = cljs.core.nth.call(null,inst_44920__$1,(0),null);
var inst_44922 = cljs.core.nth.call(null,inst_44920__$1,(1),null);
var inst_44923 = (inst_44921__$1 == null);
var state_44941__$1 = (function (){var statearr_44943 = state_44941;
(statearr_44943[(9)] = inst_44922);

(statearr_44943[(7)] = inst_44921__$1);

(statearr_44943[(8)] = inst_44920__$1);

return statearr_44943;
})();
if(cljs.core.truth_(inst_44923)){
var statearr_44944_44964 = state_44941__$1;
(statearr_44944_44964[(1)] = (8));

} else {
var statearr_44945_44965 = state_44941__$1;
(statearr_44945_44965[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (1))){
var inst_44910 = cljs.core.vec.call(null,chs);
var inst_44911 = inst_44910;
var state_44941__$1 = (function (){var statearr_44946 = state_44941;
(statearr_44946[(10)] = inst_44911);

return statearr_44946;
})();
var statearr_44947_44966 = state_44941__$1;
(statearr_44947_44966[(2)] = null);

(statearr_44947_44966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (4))){
var inst_44911 = (state_44941[(10)]);
var state_44941__$1 = state_44941;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44941__$1,(7),inst_44911);
} else {
if((state_val_44942 === (6))){
var inst_44937 = (state_44941[(2)]);
var state_44941__$1 = state_44941;
var statearr_44948_44967 = state_44941__$1;
(statearr_44948_44967[(2)] = inst_44937);

(statearr_44948_44967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (3))){
var inst_44939 = (state_44941[(2)]);
var state_44941__$1 = state_44941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44941__$1,inst_44939);
} else {
if((state_val_44942 === (2))){
var inst_44911 = (state_44941[(10)]);
var inst_44913 = cljs.core.count.call(null,inst_44911);
var inst_44914 = (inst_44913 > (0));
var state_44941__$1 = state_44941;
if(cljs.core.truth_(inst_44914)){
var statearr_44950_44968 = state_44941__$1;
(statearr_44950_44968[(1)] = (4));

} else {
var statearr_44951_44969 = state_44941__$1;
(statearr_44951_44969[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (11))){
var inst_44911 = (state_44941[(10)]);
var inst_44930 = (state_44941[(2)]);
var tmp44949 = inst_44911;
var inst_44911__$1 = tmp44949;
var state_44941__$1 = (function (){var statearr_44952 = state_44941;
(statearr_44952[(11)] = inst_44930);

(statearr_44952[(10)] = inst_44911__$1);

return statearr_44952;
})();
var statearr_44953_44970 = state_44941__$1;
(statearr_44953_44970[(2)] = null);

(statearr_44953_44970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (9))){
var inst_44921 = (state_44941[(7)]);
var state_44941__$1 = state_44941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44941__$1,(11),out,inst_44921);
} else {
if((state_val_44942 === (5))){
var inst_44935 = cljs.core.async.close_BANG_.call(null,out);
var state_44941__$1 = state_44941;
var statearr_44954_44971 = state_44941__$1;
(statearr_44954_44971[(2)] = inst_44935);

(statearr_44954_44971[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (10))){
var inst_44933 = (state_44941[(2)]);
var state_44941__$1 = state_44941;
var statearr_44955_44972 = state_44941__$1;
(statearr_44955_44972[(2)] = inst_44933);

(statearr_44955_44972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44942 === (8))){
var inst_44922 = (state_44941[(9)]);
var inst_44921 = (state_44941[(7)]);
var inst_44911 = (state_44941[(10)]);
var inst_44920 = (state_44941[(8)]);
var inst_44925 = (function (){var cs = inst_44911;
var vec__44916 = inst_44920;
var v = inst_44921;
var c = inst_44922;
return ((function (cs,vec__44916,v,c,inst_44922,inst_44921,inst_44911,inst_44920,state_val_44942,c__43550__auto___44963,out){
return (function (p1__44907_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44907_SHARP_);
});
;})(cs,vec__44916,v,c,inst_44922,inst_44921,inst_44911,inst_44920,state_val_44942,c__43550__auto___44963,out))
})();
var inst_44926 = cljs.core.filterv.call(null,inst_44925,inst_44911);
var inst_44911__$1 = inst_44926;
var state_44941__$1 = (function (){var statearr_44956 = state_44941;
(statearr_44956[(10)] = inst_44911__$1);

return statearr_44956;
})();
var statearr_44957_44973 = state_44941__$1;
(statearr_44957_44973[(2)] = null);

(statearr_44957_44973[(1)] = (2));


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
});})(c__43550__auto___44963,out))
;
return ((function (switch__43455__auto__,c__43550__auto___44963,out){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_44958 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44958[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_44958[(1)] = (1));

return statearr_44958;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_44941){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_44941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e44959){if((e44959 instanceof Object)){
var ex__43459__auto__ = e44959;
var statearr_44960_44974 = state_44941;
(statearr_44960_44974[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44975 = state_44941;
state_44941 = G__44975;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_44941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_44941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___44963,out))
})();
var state__43552__auto__ = (function (){var statearr_44961 = f__43551__auto__.call(null);
(statearr_44961[(6)] = c__43550__auto___44963);

return statearr_44961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___44963,out))
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
var G__44977 = arguments.length;
switch (G__44977) {
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
var c__43550__auto___45022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___45022,out){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___45022,out){
return (function (state_45001){
var state_val_45002 = (state_45001[(1)]);
if((state_val_45002 === (7))){
var inst_44983 = (state_45001[(7)]);
var inst_44983__$1 = (state_45001[(2)]);
var inst_44984 = (inst_44983__$1 == null);
var inst_44985 = cljs.core.not.call(null,inst_44984);
var state_45001__$1 = (function (){var statearr_45003 = state_45001;
(statearr_45003[(7)] = inst_44983__$1);

return statearr_45003;
})();
if(inst_44985){
var statearr_45004_45023 = state_45001__$1;
(statearr_45004_45023[(1)] = (8));

} else {
var statearr_45005_45024 = state_45001__$1;
(statearr_45005_45024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (1))){
var inst_44978 = (0);
var state_45001__$1 = (function (){var statearr_45006 = state_45001;
(statearr_45006[(8)] = inst_44978);

return statearr_45006;
})();
var statearr_45007_45025 = state_45001__$1;
(statearr_45007_45025[(2)] = null);

(statearr_45007_45025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (4))){
var state_45001__$1 = state_45001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45001__$1,(7),ch);
} else {
if((state_val_45002 === (6))){
var inst_44996 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
var statearr_45008_45026 = state_45001__$1;
(statearr_45008_45026[(2)] = inst_44996);

(statearr_45008_45026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (3))){
var inst_44998 = (state_45001[(2)]);
var inst_44999 = cljs.core.async.close_BANG_.call(null,out);
var state_45001__$1 = (function (){var statearr_45009 = state_45001;
(statearr_45009[(9)] = inst_44998);

return statearr_45009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45001__$1,inst_44999);
} else {
if((state_val_45002 === (2))){
var inst_44978 = (state_45001[(8)]);
var inst_44980 = (inst_44978 < n);
var state_45001__$1 = state_45001;
if(cljs.core.truth_(inst_44980)){
var statearr_45010_45027 = state_45001__$1;
(statearr_45010_45027[(1)] = (4));

} else {
var statearr_45011_45028 = state_45001__$1;
(statearr_45011_45028[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (11))){
var inst_44978 = (state_45001[(8)]);
var inst_44988 = (state_45001[(2)]);
var inst_44989 = (inst_44978 + (1));
var inst_44978__$1 = inst_44989;
var state_45001__$1 = (function (){var statearr_45012 = state_45001;
(statearr_45012[(8)] = inst_44978__$1);

(statearr_45012[(10)] = inst_44988);

return statearr_45012;
})();
var statearr_45013_45029 = state_45001__$1;
(statearr_45013_45029[(2)] = null);

(statearr_45013_45029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (9))){
var state_45001__$1 = state_45001;
var statearr_45014_45030 = state_45001__$1;
(statearr_45014_45030[(2)] = null);

(statearr_45014_45030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (5))){
var state_45001__$1 = state_45001;
var statearr_45015_45031 = state_45001__$1;
(statearr_45015_45031[(2)] = null);

(statearr_45015_45031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (10))){
var inst_44993 = (state_45001[(2)]);
var state_45001__$1 = state_45001;
var statearr_45016_45032 = state_45001__$1;
(statearr_45016_45032[(2)] = inst_44993);

(statearr_45016_45032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45002 === (8))){
var inst_44983 = (state_45001[(7)]);
var state_45001__$1 = state_45001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45001__$1,(11),out,inst_44983);
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
});})(c__43550__auto___45022,out))
;
return ((function (switch__43455__auto__,c__43550__auto___45022,out){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_45017 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45017[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_45017[(1)] = (1));

return statearr_45017;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_45001){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_45001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e45018){if((e45018 instanceof Object)){
var ex__43459__auto__ = e45018;
var statearr_45019_45033 = state_45001;
(statearr_45019_45033[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45034 = state_45001;
state_45001 = G__45034;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_45001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_45001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___45022,out))
})();
var state__43552__auto__ = (function (){var statearr_45020 = f__43551__auto__.call(null);
(statearr_45020[(6)] = c__43550__auto___45022);

return statearr_45020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___45022,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45036 = (function (f,ch,meta45037){
this.f = f;
this.ch = ch;
this.meta45037 = meta45037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45038,meta45037__$1){
var self__ = this;
var _45038__$1 = this;
return (new cljs.core.async.t_cljs$core$async45036(self__.f,self__.ch,meta45037__$1));
});

cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45038){
var self__ = this;
var _45038__$1 = this;
return self__.meta45037;
});

cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45039 = (function (f,ch,meta45037,_,fn1,meta45040){
this.f = f;
this.ch = ch;
this.meta45037 = meta45037;
this._ = _;
this.fn1 = fn1;
this.meta45040 = meta45040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_45041,meta45040__$1){
var self__ = this;
var _45041__$1 = this;
return (new cljs.core.async.t_cljs$core$async45039(self__.f,self__.ch,self__.meta45037,self__._,self__.fn1,meta45040__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async45039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_45041){
var self__ = this;
var _45041__$1 = this;
return self__.meta45040;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45039.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45039.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45039.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async45039.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__45035_SHARP_){
return f1.call(null,(((p1__45035_SHARP_ == null))?null:self__.f.call(null,p1__45035_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async45039.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45037","meta45037",-1458985848,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async45036","cljs.core.async/t_cljs$core$async45036",1815886574,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta45040","meta45040",689323587,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async45039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45039";

cljs.core.async.t_cljs$core$async45039.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45039");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45039.
 */
cljs.core.async.__GT_t_cljs$core$async45039 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45039(f__$1,ch__$1,meta45037__$1,___$2,fn1__$1,meta45040){
return (new cljs.core.async.t_cljs$core$async45039(f__$1,ch__$1,meta45037__$1,___$2,fn1__$1,meta45040));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async45039(self__.f,self__.ch,self__.meta45037,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async45036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45037","meta45037",-1458985848,null)], null);
});

cljs.core.async.t_cljs$core$async45036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45036";

cljs.core.async.t_cljs$core$async45036.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45036");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45036.
 */
cljs.core.async.__GT_t_cljs$core$async45036 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async45036(f__$1,ch__$1,meta45037){
return (new cljs.core.async.t_cljs$core$async45036(f__$1,ch__$1,meta45037));
});

}

return (new cljs.core.async.t_cljs$core$async45036(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45042 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45042 = (function (f,ch,meta45043){
this.f = f;
this.ch = ch;
this.meta45043 = meta45043;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45044,meta45043__$1){
var self__ = this;
var _45044__$1 = this;
return (new cljs.core.async.t_cljs$core$async45042(self__.f,self__.ch,meta45043__$1));
});

cljs.core.async.t_cljs$core$async45042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45044){
var self__ = this;
var _45044__$1 = this;
return self__.meta45043;
});

cljs.core.async.t_cljs$core$async45042.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45042.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45042.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45042.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45042.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45042.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async45042.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45043","meta45043",1252525792,null)], null);
});

cljs.core.async.t_cljs$core$async45042.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45042.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45042";

cljs.core.async.t_cljs$core$async45042.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45042");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45042.
 */
cljs.core.async.__GT_t_cljs$core$async45042 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async45042(f__$1,ch__$1,meta45043){
return (new cljs.core.async.t_cljs$core$async45042(f__$1,ch__$1,meta45043));
});

}

return (new cljs.core.async.t_cljs$core$async45042(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async45045 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async45045 = (function (p,ch,meta45046){
this.p = p;
this.ch = ch;
this.meta45046 = meta45046;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45047,meta45046__$1){
var self__ = this;
var _45047__$1 = this;
return (new cljs.core.async.t_cljs$core$async45045(self__.p,self__.ch,meta45046__$1));
});

cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45047){
var self__ = this;
var _45047__$1 = this;
return self__.meta45046;
});

cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async45045.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async45045.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta45046","meta45046",-953065603,null)], null);
});

cljs.core.async.t_cljs$core$async45045.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async45045.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async45045";

cljs.core.async.t_cljs$core$async45045.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async45045");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async45045.
 */
cljs.core.async.__GT_t_cljs$core$async45045 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async45045(p__$1,ch__$1,meta45046){
return (new cljs.core.async.t_cljs$core$async45045(p__$1,ch__$1,meta45046));
});

}

return (new cljs.core.async.t_cljs$core$async45045(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__45049 = arguments.length;
switch (G__45049) {
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
var c__43550__auto___45089 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___45089,out){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___45089,out){
return (function (state_45070){
var state_val_45071 = (state_45070[(1)]);
if((state_val_45071 === (7))){
var inst_45066 = (state_45070[(2)]);
var state_45070__$1 = state_45070;
var statearr_45072_45090 = state_45070__$1;
(statearr_45072_45090[(2)] = inst_45066);

(statearr_45072_45090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45071 === (1))){
var state_45070__$1 = state_45070;
var statearr_45073_45091 = state_45070__$1;
(statearr_45073_45091[(2)] = null);

(statearr_45073_45091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45071 === (4))){
var inst_45052 = (state_45070[(7)]);
var inst_45052__$1 = (state_45070[(2)]);
var inst_45053 = (inst_45052__$1 == null);
var state_45070__$1 = (function (){var statearr_45074 = state_45070;
(statearr_45074[(7)] = inst_45052__$1);

return statearr_45074;
})();
if(cljs.core.truth_(inst_45053)){
var statearr_45075_45092 = state_45070__$1;
(statearr_45075_45092[(1)] = (5));

} else {
var statearr_45076_45093 = state_45070__$1;
(statearr_45076_45093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45071 === (6))){
var inst_45052 = (state_45070[(7)]);
var inst_45057 = p.call(null,inst_45052);
var state_45070__$1 = state_45070;
if(cljs.core.truth_(inst_45057)){
var statearr_45077_45094 = state_45070__$1;
(statearr_45077_45094[(1)] = (8));

} else {
var statearr_45078_45095 = state_45070__$1;
(statearr_45078_45095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45071 === (3))){
var inst_45068 = (state_45070[(2)]);
var state_45070__$1 = state_45070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45070__$1,inst_45068);
} else {
if((state_val_45071 === (2))){
var state_45070__$1 = state_45070;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45070__$1,(4),ch);
} else {
if((state_val_45071 === (11))){
var inst_45060 = (state_45070[(2)]);
var state_45070__$1 = state_45070;
var statearr_45079_45096 = state_45070__$1;
(statearr_45079_45096[(2)] = inst_45060);

(statearr_45079_45096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45071 === (9))){
var state_45070__$1 = state_45070;
var statearr_45080_45097 = state_45070__$1;
(statearr_45080_45097[(2)] = null);

(statearr_45080_45097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45071 === (5))){
var inst_45055 = cljs.core.async.close_BANG_.call(null,out);
var state_45070__$1 = state_45070;
var statearr_45081_45098 = state_45070__$1;
(statearr_45081_45098[(2)] = inst_45055);

(statearr_45081_45098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45071 === (10))){
var inst_45063 = (state_45070[(2)]);
var state_45070__$1 = (function (){var statearr_45082 = state_45070;
(statearr_45082[(8)] = inst_45063);

return statearr_45082;
})();
var statearr_45083_45099 = state_45070__$1;
(statearr_45083_45099[(2)] = null);

(statearr_45083_45099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45071 === (8))){
var inst_45052 = (state_45070[(7)]);
var state_45070__$1 = state_45070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45070__$1,(11),out,inst_45052);
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
});})(c__43550__auto___45089,out))
;
return ((function (switch__43455__auto__,c__43550__auto___45089,out){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_45084 = [null,null,null,null,null,null,null,null,null];
(statearr_45084[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_45084[(1)] = (1));

return statearr_45084;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_45070){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_45070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e45085){if((e45085 instanceof Object)){
var ex__43459__auto__ = e45085;
var statearr_45086_45100 = state_45070;
(statearr_45086_45100[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45101 = state_45070;
state_45070 = G__45101;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_45070){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_45070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___45089,out))
})();
var state__43552__auto__ = (function (){var statearr_45087 = f__43551__auto__.call(null);
(statearr_45087[(6)] = c__43550__auto___45089);

return statearr_45087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___45089,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__45103 = arguments.length;
switch (G__45103) {
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
var c__43550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto__){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto__){
return (function (state_45166){
var state_val_45167 = (state_45166[(1)]);
if((state_val_45167 === (7))){
var inst_45162 = (state_45166[(2)]);
var state_45166__$1 = state_45166;
var statearr_45168_45206 = state_45166__$1;
(statearr_45168_45206[(2)] = inst_45162);

(statearr_45168_45206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (20))){
var inst_45132 = (state_45166[(7)]);
var inst_45143 = (state_45166[(2)]);
var inst_45144 = cljs.core.next.call(null,inst_45132);
var inst_45118 = inst_45144;
var inst_45119 = null;
var inst_45120 = (0);
var inst_45121 = (0);
var state_45166__$1 = (function (){var statearr_45169 = state_45166;
(statearr_45169[(8)] = inst_45120);

(statearr_45169[(9)] = inst_45118);

(statearr_45169[(10)] = inst_45143);

(statearr_45169[(11)] = inst_45121);

(statearr_45169[(12)] = inst_45119);

return statearr_45169;
})();
var statearr_45170_45207 = state_45166__$1;
(statearr_45170_45207[(2)] = null);

(statearr_45170_45207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (1))){
var state_45166__$1 = state_45166;
var statearr_45171_45208 = state_45166__$1;
(statearr_45171_45208[(2)] = null);

(statearr_45171_45208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (4))){
var inst_45107 = (state_45166[(13)]);
var inst_45107__$1 = (state_45166[(2)]);
var inst_45108 = (inst_45107__$1 == null);
var state_45166__$1 = (function (){var statearr_45172 = state_45166;
(statearr_45172[(13)] = inst_45107__$1);

return statearr_45172;
})();
if(cljs.core.truth_(inst_45108)){
var statearr_45173_45209 = state_45166__$1;
(statearr_45173_45209[(1)] = (5));

} else {
var statearr_45174_45210 = state_45166__$1;
(statearr_45174_45210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (15))){
var state_45166__$1 = state_45166;
var statearr_45178_45211 = state_45166__$1;
(statearr_45178_45211[(2)] = null);

(statearr_45178_45211[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (21))){
var state_45166__$1 = state_45166;
var statearr_45179_45212 = state_45166__$1;
(statearr_45179_45212[(2)] = null);

(statearr_45179_45212[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (13))){
var inst_45120 = (state_45166[(8)]);
var inst_45118 = (state_45166[(9)]);
var inst_45121 = (state_45166[(11)]);
var inst_45119 = (state_45166[(12)]);
var inst_45128 = (state_45166[(2)]);
var inst_45129 = (inst_45121 + (1));
var tmp45175 = inst_45120;
var tmp45176 = inst_45118;
var tmp45177 = inst_45119;
var inst_45118__$1 = tmp45176;
var inst_45119__$1 = tmp45177;
var inst_45120__$1 = tmp45175;
var inst_45121__$1 = inst_45129;
var state_45166__$1 = (function (){var statearr_45180 = state_45166;
(statearr_45180[(8)] = inst_45120__$1);

(statearr_45180[(9)] = inst_45118__$1);

(statearr_45180[(11)] = inst_45121__$1);

(statearr_45180[(12)] = inst_45119__$1);

(statearr_45180[(14)] = inst_45128);

return statearr_45180;
})();
var statearr_45181_45213 = state_45166__$1;
(statearr_45181_45213[(2)] = null);

(statearr_45181_45213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (22))){
var state_45166__$1 = state_45166;
var statearr_45182_45214 = state_45166__$1;
(statearr_45182_45214[(2)] = null);

(statearr_45182_45214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (6))){
var inst_45107 = (state_45166[(13)]);
var inst_45116 = f.call(null,inst_45107);
var inst_45117 = cljs.core.seq.call(null,inst_45116);
var inst_45118 = inst_45117;
var inst_45119 = null;
var inst_45120 = (0);
var inst_45121 = (0);
var state_45166__$1 = (function (){var statearr_45183 = state_45166;
(statearr_45183[(8)] = inst_45120);

(statearr_45183[(9)] = inst_45118);

(statearr_45183[(11)] = inst_45121);

(statearr_45183[(12)] = inst_45119);

return statearr_45183;
})();
var statearr_45184_45215 = state_45166__$1;
(statearr_45184_45215[(2)] = null);

(statearr_45184_45215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (17))){
var inst_45132 = (state_45166[(7)]);
var inst_45136 = cljs.core.chunk_first.call(null,inst_45132);
var inst_45137 = cljs.core.chunk_rest.call(null,inst_45132);
var inst_45138 = cljs.core.count.call(null,inst_45136);
var inst_45118 = inst_45137;
var inst_45119 = inst_45136;
var inst_45120 = inst_45138;
var inst_45121 = (0);
var state_45166__$1 = (function (){var statearr_45185 = state_45166;
(statearr_45185[(8)] = inst_45120);

(statearr_45185[(9)] = inst_45118);

(statearr_45185[(11)] = inst_45121);

(statearr_45185[(12)] = inst_45119);

return statearr_45185;
})();
var statearr_45186_45216 = state_45166__$1;
(statearr_45186_45216[(2)] = null);

(statearr_45186_45216[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (3))){
var inst_45164 = (state_45166[(2)]);
var state_45166__$1 = state_45166;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45166__$1,inst_45164);
} else {
if((state_val_45167 === (12))){
var inst_45152 = (state_45166[(2)]);
var state_45166__$1 = state_45166;
var statearr_45187_45217 = state_45166__$1;
(statearr_45187_45217[(2)] = inst_45152);

(statearr_45187_45217[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (2))){
var state_45166__$1 = state_45166;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45166__$1,(4),in$);
} else {
if((state_val_45167 === (23))){
var inst_45160 = (state_45166[(2)]);
var state_45166__$1 = state_45166;
var statearr_45188_45218 = state_45166__$1;
(statearr_45188_45218[(2)] = inst_45160);

(statearr_45188_45218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (19))){
var inst_45147 = (state_45166[(2)]);
var state_45166__$1 = state_45166;
var statearr_45189_45219 = state_45166__$1;
(statearr_45189_45219[(2)] = inst_45147);

(statearr_45189_45219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (11))){
var inst_45132 = (state_45166[(7)]);
var inst_45118 = (state_45166[(9)]);
var inst_45132__$1 = cljs.core.seq.call(null,inst_45118);
var state_45166__$1 = (function (){var statearr_45190 = state_45166;
(statearr_45190[(7)] = inst_45132__$1);

return statearr_45190;
})();
if(inst_45132__$1){
var statearr_45191_45220 = state_45166__$1;
(statearr_45191_45220[(1)] = (14));

} else {
var statearr_45192_45221 = state_45166__$1;
(statearr_45192_45221[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (9))){
var inst_45154 = (state_45166[(2)]);
var inst_45155 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_45166__$1 = (function (){var statearr_45193 = state_45166;
(statearr_45193[(15)] = inst_45154);

return statearr_45193;
})();
if(cljs.core.truth_(inst_45155)){
var statearr_45194_45222 = state_45166__$1;
(statearr_45194_45222[(1)] = (21));

} else {
var statearr_45195_45223 = state_45166__$1;
(statearr_45195_45223[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (5))){
var inst_45110 = cljs.core.async.close_BANG_.call(null,out);
var state_45166__$1 = state_45166;
var statearr_45196_45224 = state_45166__$1;
(statearr_45196_45224[(2)] = inst_45110);

(statearr_45196_45224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (14))){
var inst_45132 = (state_45166[(7)]);
var inst_45134 = cljs.core.chunked_seq_QMARK_.call(null,inst_45132);
var state_45166__$1 = state_45166;
if(inst_45134){
var statearr_45197_45225 = state_45166__$1;
(statearr_45197_45225[(1)] = (17));

} else {
var statearr_45198_45226 = state_45166__$1;
(statearr_45198_45226[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (16))){
var inst_45150 = (state_45166[(2)]);
var state_45166__$1 = state_45166;
var statearr_45199_45227 = state_45166__$1;
(statearr_45199_45227[(2)] = inst_45150);

(statearr_45199_45227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45167 === (10))){
var inst_45121 = (state_45166[(11)]);
var inst_45119 = (state_45166[(12)]);
var inst_45126 = cljs.core._nth.call(null,inst_45119,inst_45121);
var state_45166__$1 = state_45166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45166__$1,(13),out,inst_45126);
} else {
if((state_val_45167 === (18))){
var inst_45132 = (state_45166[(7)]);
var inst_45141 = cljs.core.first.call(null,inst_45132);
var state_45166__$1 = state_45166;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45166__$1,(20),out,inst_45141);
} else {
if((state_val_45167 === (8))){
var inst_45120 = (state_45166[(8)]);
var inst_45121 = (state_45166[(11)]);
var inst_45123 = (inst_45121 < inst_45120);
var inst_45124 = inst_45123;
var state_45166__$1 = state_45166;
if(cljs.core.truth_(inst_45124)){
var statearr_45200_45228 = state_45166__$1;
(statearr_45200_45228[(1)] = (10));

} else {
var statearr_45201_45229 = state_45166__$1;
(statearr_45201_45229[(1)] = (11));

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
});})(c__43550__auto__))
;
return ((function (switch__43455__auto__,c__43550__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__43456__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__43456__auto____0 = (function (){
var statearr_45202 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45202[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__43456__auto__);

(statearr_45202[(1)] = (1));

return statearr_45202;
});
var cljs$core$async$mapcat_STAR__$_state_machine__43456__auto____1 = (function (state_45166){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_45166);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e45203){if((e45203 instanceof Object)){
var ex__43459__auto__ = e45203;
var statearr_45204_45230 = state_45166;
(statearr_45204_45230[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45166);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45231 = state_45166;
state_45166 = G__45231;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__43456__auto__ = function(state_45166){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__43456__auto____1.call(this,state_45166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__43456__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__43456__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto__))
})();
var state__43552__auto__ = (function (){var statearr_45205 = f__43551__auto__.call(null);
(statearr_45205[(6)] = c__43550__auto__);

return statearr_45205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto__))
);

return c__43550__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__45233 = arguments.length;
switch (G__45233) {
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
var G__45236 = arguments.length;
switch (G__45236) {
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
var G__45239 = arguments.length;
switch (G__45239) {
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
var c__43550__auto___45286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___45286,out){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___45286,out){
return (function (state_45263){
var state_val_45264 = (state_45263[(1)]);
if((state_val_45264 === (7))){
var inst_45258 = (state_45263[(2)]);
var state_45263__$1 = state_45263;
var statearr_45265_45287 = state_45263__$1;
(statearr_45265_45287[(2)] = inst_45258);

(statearr_45265_45287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45264 === (1))){
var inst_45240 = null;
var state_45263__$1 = (function (){var statearr_45266 = state_45263;
(statearr_45266[(7)] = inst_45240);

return statearr_45266;
})();
var statearr_45267_45288 = state_45263__$1;
(statearr_45267_45288[(2)] = null);

(statearr_45267_45288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45264 === (4))){
var inst_45243 = (state_45263[(8)]);
var inst_45243__$1 = (state_45263[(2)]);
var inst_45244 = (inst_45243__$1 == null);
var inst_45245 = cljs.core.not.call(null,inst_45244);
var state_45263__$1 = (function (){var statearr_45268 = state_45263;
(statearr_45268[(8)] = inst_45243__$1);

return statearr_45268;
})();
if(inst_45245){
var statearr_45269_45289 = state_45263__$1;
(statearr_45269_45289[(1)] = (5));

} else {
var statearr_45270_45290 = state_45263__$1;
(statearr_45270_45290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45264 === (6))){
var state_45263__$1 = state_45263;
var statearr_45271_45291 = state_45263__$1;
(statearr_45271_45291[(2)] = null);

(statearr_45271_45291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45264 === (3))){
var inst_45260 = (state_45263[(2)]);
var inst_45261 = cljs.core.async.close_BANG_.call(null,out);
var state_45263__$1 = (function (){var statearr_45272 = state_45263;
(statearr_45272[(9)] = inst_45260);

return statearr_45272;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45263__$1,inst_45261);
} else {
if((state_val_45264 === (2))){
var state_45263__$1 = state_45263;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45263__$1,(4),ch);
} else {
if((state_val_45264 === (11))){
var inst_45243 = (state_45263[(8)]);
var inst_45252 = (state_45263[(2)]);
var inst_45240 = inst_45243;
var state_45263__$1 = (function (){var statearr_45273 = state_45263;
(statearr_45273[(7)] = inst_45240);

(statearr_45273[(10)] = inst_45252);

return statearr_45273;
})();
var statearr_45274_45292 = state_45263__$1;
(statearr_45274_45292[(2)] = null);

(statearr_45274_45292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45264 === (9))){
var inst_45243 = (state_45263[(8)]);
var state_45263__$1 = state_45263;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45263__$1,(11),out,inst_45243);
} else {
if((state_val_45264 === (5))){
var inst_45240 = (state_45263[(7)]);
var inst_45243 = (state_45263[(8)]);
var inst_45247 = cljs.core._EQ_.call(null,inst_45243,inst_45240);
var state_45263__$1 = state_45263;
if(inst_45247){
var statearr_45276_45293 = state_45263__$1;
(statearr_45276_45293[(1)] = (8));

} else {
var statearr_45277_45294 = state_45263__$1;
(statearr_45277_45294[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45264 === (10))){
var inst_45255 = (state_45263[(2)]);
var state_45263__$1 = state_45263;
var statearr_45278_45295 = state_45263__$1;
(statearr_45278_45295[(2)] = inst_45255);

(statearr_45278_45295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45264 === (8))){
var inst_45240 = (state_45263[(7)]);
var tmp45275 = inst_45240;
var inst_45240__$1 = tmp45275;
var state_45263__$1 = (function (){var statearr_45279 = state_45263;
(statearr_45279[(7)] = inst_45240__$1);

return statearr_45279;
})();
var statearr_45280_45296 = state_45263__$1;
(statearr_45280_45296[(2)] = null);

(statearr_45280_45296[(1)] = (2));


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
});})(c__43550__auto___45286,out))
;
return ((function (switch__43455__auto__,c__43550__auto___45286,out){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_45281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_45281[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_45281[(1)] = (1));

return statearr_45281;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_45263){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_45263);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e45282){if((e45282 instanceof Object)){
var ex__43459__auto__ = e45282;
var statearr_45283_45297 = state_45263;
(statearr_45283_45297[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45263);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45298 = state_45263;
state_45263 = G__45298;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_45263){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_45263);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___45286,out))
})();
var state__43552__auto__ = (function (){var statearr_45284 = f__43551__auto__.call(null);
(statearr_45284[(6)] = c__43550__auto___45286);

return statearr_45284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___45286,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__45300 = arguments.length;
switch (G__45300) {
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
var c__43550__auto___45366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___45366,out){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___45366,out){
return (function (state_45338){
var state_val_45339 = (state_45338[(1)]);
if((state_val_45339 === (7))){
var inst_45334 = (state_45338[(2)]);
var state_45338__$1 = state_45338;
var statearr_45340_45367 = state_45338__$1;
(statearr_45340_45367[(2)] = inst_45334);

(statearr_45340_45367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (1))){
var inst_45301 = (new Array(n));
var inst_45302 = inst_45301;
var inst_45303 = (0);
var state_45338__$1 = (function (){var statearr_45341 = state_45338;
(statearr_45341[(7)] = inst_45303);

(statearr_45341[(8)] = inst_45302);

return statearr_45341;
})();
var statearr_45342_45368 = state_45338__$1;
(statearr_45342_45368[(2)] = null);

(statearr_45342_45368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (4))){
var inst_45306 = (state_45338[(9)]);
var inst_45306__$1 = (state_45338[(2)]);
var inst_45307 = (inst_45306__$1 == null);
var inst_45308 = cljs.core.not.call(null,inst_45307);
var state_45338__$1 = (function (){var statearr_45343 = state_45338;
(statearr_45343[(9)] = inst_45306__$1);

return statearr_45343;
})();
if(inst_45308){
var statearr_45344_45369 = state_45338__$1;
(statearr_45344_45369[(1)] = (5));

} else {
var statearr_45345_45370 = state_45338__$1;
(statearr_45345_45370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (15))){
var inst_45328 = (state_45338[(2)]);
var state_45338__$1 = state_45338;
var statearr_45346_45371 = state_45338__$1;
(statearr_45346_45371[(2)] = inst_45328);

(statearr_45346_45371[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (13))){
var state_45338__$1 = state_45338;
var statearr_45347_45372 = state_45338__$1;
(statearr_45347_45372[(2)] = null);

(statearr_45347_45372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (6))){
var inst_45303 = (state_45338[(7)]);
var inst_45324 = (inst_45303 > (0));
var state_45338__$1 = state_45338;
if(cljs.core.truth_(inst_45324)){
var statearr_45348_45373 = state_45338__$1;
(statearr_45348_45373[(1)] = (12));

} else {
var statearr_45349_45374 = state_45338__$1;
(statearr_45349_45374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (3))){
var inst_45336 = (state_45338[(2)]);
var state_45338__$1 = state_45338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45338__$1,inst_45336);
} else {
if((state_val_45339 === (12))){
var inst_45302 = (state_45338[(8)]);
var inst_45326 = cljs.core.vec.call(null,inst_45302);
var state_45338__$1 = state_45338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45338__$1,(15),out,inst_45326);
} else {
if((state_val_45339 === (2))){
var state_45338__$1 = state_45338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45338__$1,(4),ch);
} else {
if((state_val_45339 === (11))){
var inst_45318 = (state_45338[(2)]);
var inst_45319 = (new Array(n));
var inst_45302 = inst_45319;
var inst_45303 = (0);
var state_45338__$1 = (function (){var statearr_45350 = state_45338;
(statearr_45350[(7)] = inst_45303);

(statearr_45350[(10)] = inst_45318);

(statearr_45350[(8)] = inst_45302);

return statearr_45350;
})();
var statearr_45351_45375 = state_45338__$1;
(statearr_45351_45375[(2)] = null);

(statearr_45351_45375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (9))){
var inst_45302 = (state_45338[(8)]);
var inst_45316 = cljs.core.vec.call(null,inst_45302);
var state_45338__$1 = state_45338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45338__$1,(11),out,inst_45316);
} else {
if((state_val_45339 === (5))){
var inst_45306 = (state_45338[(9)]);
var inst_45303 = (state_45338[(7)]);
var inst_45302 = (state_45338[(8)]);
var inst_45311 = (state_45338[(11)]);
var inst_45310 = (inst_45302[inst_45303] = inst_45306);
var inst_45311__$1 = (inst_45303 + (1));
var inst_45312 = (inst_45311__$1 < n);
var state_45338__$1 = (function (){var statearr_45352 = state_45338;
(statearr_45352[(12)] = inst_45310);

(statearr_45352[(11)] = inst_45311__$1);

return statearr_45352;
})();
if(cljs.core.truth_(inst_45312)){
var statearr_45353_45376 = state_45338__$1;
(statearr_45353_45376[(1)] = (8));

} else {
var statearr_45354_45377 = state_45338__$1;
(statearr_45354_45377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (14))){
var inst_45331 = (state_45338[(2)]);
var inst_45332 = cljs.core.async.close_BANG_.call(null,out);
var state_45338__$1 = (function (){var statearr_45356 = state_45338;
(statearr_45356[(13)] = inst_45331);

return statearr_45356;
})();
var statearr_45357_45378 = state_45338__$1;
(statearr_45357_45378[(2)] = inst_45332);

(statearr_45357_45378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (10))){
var inst_45322 = (state_45338[(2)]);
var state_45338__$1 = state_45338;
var statearr_45358_45379 = state_45338__$1;
(statearr_45358_45379[(2)] = inst_45322);

(statearr_45358_45379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45339 === (8))){
var inst_45302 = (state_45338[(8)]);
var inst_45311 = (state_45338[(11)]);
var tmp45355 = inst_45302;
var inst_45302__$1 = tmp45355;
var inst_45303 = inst_45311;
var state_45338__$1 = (function (){var statearr_45359 = state_45338;
(statearr_45359[(7)] = inst_45303);

(statearr_45359[(8)] = inst_45302__$1);

return statearr_45359;
})();
var statearr_45360_45380 = state_45338__$1;
(statearr_45360_45380[(2)] = null);

(statearr_45360_45380[(1)] = (2));


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
});})(c__43550__auto___45366,out))
;
return ((function (switch__43455__auto__,c__43550__auto___45366,out){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_45361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45361[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_45361[(1)] = (1));

return statearr_45361;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_45338){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_45338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e45362){if((e45362 instanceof Object)){
var ex__43459__auto__ = e45362;
var statearr_45363_45381 = state_45338;
(statearr_45363_45381[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45382 = state_45338;
state_45338 = G__45382;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_45338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_45338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___45366,out))
})();
var state__43552__auto__ = (function (){var statearr_45364 = f__43551__auto__.call(null);
(statearr_45364[(6)] = c__43550__auto___45366);

return statearr_45364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___45366,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__45384 = arguments.length;
switch (G__45384) {
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
var c__43550__auto___45454 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43550__auto___45454,out){
return (function (){
var f__43551__auto__ = (function (){var switch__43455__auto__ = ((function (c__43550__auto___45454,out){
return (function (state_45426){
var state_val_45427 = (state_45426[(1)]);
if((state_val_45427 === (7))){
var inst_45422 = (state_45426[(2)]);
var state_45426__$1 = state_45426;
var statearr_45428_45455 = state_45426__$1;
(statearr_45428_45455[(2)] = inst_45422);

(statearr_45428_45455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (1))){
var inst_45385 = [];
var inst_45386 = inst_45385;
var inst_45387 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_45426__$1 = (function (){var statearr_45429 = state_45426;
(statearr_45429[(7)] = inst_45387);

(statearr_45429[(8)] = inst_45386);

return statearr_45429;
})();
var statearr_45430_45456 = state_45426__$1;
(statearr_45430_45456[(2)] = null);

(statearr_45430_45456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (4))){
var inst_45390 = (state_45426[(9)]);
var inst_45390__$1 = (state_45426[(2)]);
var inst_45391 = (inst_45390__$1 == null);
var inst_45392 = cljs.core.not.call(null,inst_45391);
var state_45426__$1 = (function (){var statearr_45431 = state_45426;
(statearr_45431[(9)] = inst_45390__$1);

return statearr_45431;
})();
if(inst_45392){
var statearr_45432_45457 = state_45426__$1;
(statearr_45432_45457[(1)] = (5));

} else {
var statearr_45433_45458 = state_45426__$1;
(statearr_45433_45458[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (15))){
var inst_45416 = (state_45426[(2)]);
var state_45426__$1 = state_45426;
var statearr_45434_45459 = state_45426__$1;
(statearr_45434_45459[(2)] = inst_45416);

(statearr_45434_45459[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (13))){
var state_45426__$1 = state_45426;
var statearr_45435_45460 = state_45426__$1;
(statearr_45435_45460[(2)] = null);

(statearr_45435_45460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (6))){
var inst_45386 = (state_45426[(8)]);
var inst_45411 = inst_45386.length;
var inst_45412 = (inst_45411 > (0));
var state_45426__$1 = state_45426;
if(cljs.core.truth_(inst_45412)){
var statearr_45436_45461 = state_45426__$1;
(statearr_45436_45461[(1)] = (12));

} else {
var statearr_45437_45462 = state_45426__$1;
(statearr_45437_45462[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (3))){
var inst_45424 = (state_45426[(2)]);
var state_45426__$1 = state_45426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45426__$1,inst_45424);
} else {
if((state_val_45427 === (12))){
var inst_45386 = (state_45426[(8)]);
var inst_45414 = cljs.core.vec.call(null,inst_45386);
var state_45426__$1 = state_45426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45426__$1,(15),out,inst_45414);
} else {
if((state_val_45427 === (2))){
var state_45426__$1 = state_45426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45426__$1,(4),ch);
} else {
if((state_val_45427 === (11))){
var inst_45390 = (state_45426[(9)]);
var inst_45394 = (state_45426[(10)]);
var inst_45404 = (state_45426[(2)]);
var inst_45405 = [];
var inst_45406 = inst_45405.push(inst_45390);
var inst_45386 = inst_45405;
var inst_45387 = inst_45394;
var state_45426__$1 = (function (){var statearr_45438 = state_45426;
(statearr_45438[(7)] = inst_45387);

(statearr_45438[(11)] = inst_45404);

(statearr_45438[(8)] = inst_45386);

(statearr_45438[(12)] = inst_45406);

return statearr_45438;
})();
var statearr_45439_45463 = state_45426__$1;
(statearr_45439_45463[(2)] = null);

(statearr_45439_45463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (9))){
var inst_45386 = (state_45426[(8)]);
var inst_45402 = cljs.core.vec.call(null,inst_45386);
var state_45426__$1 = state_45426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45426__$1,(11),out,inst_45402);
} else {
if((state_val_45427 === (5))){
var inst_45387 = (state_45426[(7)]);
var inst_45390 = (state_45426[(9)]);
var inst_45394 = (state_45426[(10)]);
var inst_45394__$1 = f.call(null,inst_45390);
var inst_45395 = cljs.core._EQ_.call(null,inst_45394__$1,inst_45387);
var inst_45396 = cljs.core.keyword_identical_QMARK_.call(null,inst_45387,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_45397 = ((inst_45395) || (inst_45396));
var state_45426__$1 = (function (){var statearr_45440 = state_45426;
(statearr_45440[(10)] = inst_45394__$1);

return statearr_45440;
})();
if(cljs.core.truth_(inst_45397)){
var statearr_45441_45464 = state_45426__$1;
(statearr_45441_45464[(1)] = (8));

} else {
var statearr_45442_45465 = state_45426__$1;
(statearr_45442_45465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (14))){
var inst_45419 = (state_45426[(2)]);
var inst_45420 = cljs.core.async.close_BANG_.call(null,out);
var state_45426__$1 = (function (){var statearr_45444 = state_45426;
(statearr_45444[(13)] = inst_45419);

return statearr_45444;
})();
var statearr_45445_45466 = state_45426__$1;
(statearr_45445_45466[(2)] = inst_45420);

(statearr_45445_45466[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (10))){
var inst_45409 = (state_45426[(2)]);
var state_45426__$1 = state_45426;
var statearr_45446_45467 = state_45426__$1;
(statearr_45446_45467[(2)] = inst_45409);

(statearr_45446_45467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45427 === (8))){
var inst_45386 = (state_45426[(8)]);
var inst_45390 = (state_45426[(9)]);
var inst_45394 = (state_45426[(10)]);
var inst_45399 = inst_45386.push(inst_45390);
var tmp45443 = inst_45386;
var inst_45386__$1 = tmp45443;
var inst_45387 = inst_45394;
var state_45426__$1 = (function (){var statearr_45447 = state_45426;
(statearr_45447[(7)] = inst_45387);

(statearr_45447[(8)] = inst_45386__$1);

(statearr_45447[(14)] = inst_45399);

return statearr_45447;
})();
var statearr_45448_45468 = state_45426__$1;
(statearr_45448_45468[(2)] = null);

(statearr_45448_45468[(1)] = (2));


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
});})(c__43550__auto___45454,out))
;
return ((function (switch__43455__auto__,c__43550__auto___45454,out){
return (function() {
var cljs$core$async$state_machine__43456__auto__ = null;
var cljs$core$async$state_machine__43456__auto____0 = (function (){
var statearr_45449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45449[(0)] = cljs$core$async$state_machine__43456__auto__);

(statearr_45449[(1)] = (1));

return statearr_45449;
});
var cljs$core$async$state_machine__43456__auto____1 = (function (state_45426){
while(true){
var ret_value__43457__auto__ = (function (){try{while(true){
var result__43458__auto__ = switch__43455__auto__.call(null,state_45426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43458__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43458__auto__;
}
break;
}
}catch (e45450){if((e45450 instanceof Object)){
var ex__43459__auto__ = e45450;
var statearr_45451_45469 = state_45426;
(statearr_45451_45469[(5)] = ex__43459__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45470 = state_45426;
state_45426 = G__45470;
continue;
} else {
return ret_value__43457__auto__;
}
break;
}
});
cljs$core$async$state_machine__43456__auto__ = function(state_45426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__43456__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__43456__auto____1.call(this,state_45426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__43456__auto____0;
cljs$core$async$state_machine__43456__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__43456__auto____1;
return cljs$core$async$state_machine__43456__auto__;
})()
;})(switch__43455__auto__,c__43550__auto___45454,out))
})();
var state__43552__auto__ = (function (){var statearr_45452 = f__43551__auto__.call(null);
(statearr_45452[(6)] = c__43550__auto___45454);

return statearr_45452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43552__auto__);
});})(c__43550__auto___45454,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1563183877053
