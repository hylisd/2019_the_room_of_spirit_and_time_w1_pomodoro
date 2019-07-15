// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31160 = arguments.length;
switch (G__31160) {
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
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31161 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31161 = (function (f,blockable,meta31162){
this.f = f;
this.blockable = blockable;
this.meta31162 = meta31162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31163,meta31162__$1){
var self__ = this;
var _31163__$1 = this;
return (new cljs.core.async.t_cljs$core$async31161(self__.f,self__.blockable,meta31162__$1));
});

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31163){
var self__ = this;
var _31163__$1 = this;
return self__.meta31162;
});

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async31161.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async31161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$blockable,cljs.core.cst$sym$meta31162], null);
});

cljs.core.async.t_cljs$core$async31161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31161";

cljs.core.async.t_cljs$core$async31161.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31161");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31161.
 */
cljs.core.async.__GT_t_cljs$core$async31161 = (function cljs$core$async$__GT_t_cljs$core$async31161(f__$1,blockable__$1,meta31162){
return (new cljs.core.async.t_cljs$core$async31161(f__$1,blockable__$1,meta31162));
});

}

return (new cljs.core.async.t_cljs$core$async31161(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
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
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__31167 = arguments.length;
switch (G__31167) {
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
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__31170 = arguments.length;
switch (G__31170) {
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
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__31173 = arguments.length;
switch (G__31173) {
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
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_31175 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31175) : fn1.call(null,val_31175));
} else {
cljs.core.async.impl.dispatch.run(((function (val_31175,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_31175) : fn1.call(null,val_31175));
});})(val_31175,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
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
var G__31177 = arguments.length;
switch (G__31177) {
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
var temp__5735__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5735__auto__)){
var ret = temp__5735__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5735__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5735__auto__)){
var retb = temp__5735__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5735__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5735__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___31179 = n;
var x_31180 = (0);
while(true){
if((x_31180 < n__4607__auto___31179)){
(a[x_31180] = (0));

var G__31181 = (x_31180 + (1));
x_31180 = G__31181;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__31182 = (i + (1));
i = G__31182;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31183 = (function (flag,meta31184){
this.flag = flag;
this.meta31184 = meta31184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31185,meta31184__$1){
var self__ = this;
var _31185__$1 = this;
return (new cljs.core.async.t_cljs$core$async31183(self__.flag,meta31184__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31185){
var self__ = this;
var _31185__$1 = this;
return self__.meta31184;
});})(flag))
;

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31183.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async31183.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$meta31184], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async31183.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31183";

cljs.core.async.t_cljs$core$async31183.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31183");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31183.
 */
cljs.core.async.__GT_t_cljs$core$async31183 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async31183(flag__$1,meta31184){
return (new cljs.core.async.t_cljs$core$async31183(flag__$1,meta31184));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async31183(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31186 = (function (flag,cb,meta31187){
this.flag = flag;
this.cb = cb;
this.meta31187 = meta31187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31188,meta31187__$1){
var self__ = this;
var _31188__$1 = this;
return (new cljs.core.async.t_cljs$core$async31186(self__.flag,self__.cb,meta31187__$1));
});

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31188){
var self__ = this;
var _31188__$1 = this;
return self__.meta31187;
});

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async31186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async31186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$flag,cljs.core.cst$sym$cb,cljs.core.cst$sym$meta31187], null);
});

cljs.core.async.t_cljs$core$async31186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31186";

cljs.core.async.t_cljs$core$async31186.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31186");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31186.
 */
cljs.core.async.__GT_t_cljs$core$async31186 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async31186(flag__$1,cb__$1,meta31187){
return (new cljs.core.async.t_cljs$core$async31186(flag__$1,cb__$1,meta31187));
});

}

return (new cljs.core.async.t_cljs$core$async31186(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.cst$kw$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31189_SHARP_){
var G__31191 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31189_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31191) : fret.call(null,G__31191));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31190_SHARP_){
var G__31192 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31190_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31192) : fret.call(null,G__31192));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__31193 = (i + (1));
i = G__31193;
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
if(cljs.core.contains_QMARK_(opts,cljs.core.cst$kw$default)){
var temp__5737__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5737__auto__)){
var got = temp__5737__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.cst$kw$default], null));
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
var len__4730__auto___31199 = arguments.length;
var i__4731__auto___31200 = (0);
while(true){
if((i__4731__auto___31200 < len__4730__auto___31199)){
args__4736__auto__.push((arguments[i__4731__auto___31200]));

var G__31201 = (i__4731__auto___31200 + (1));
i__4731__auto___31200 = G__31201;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31196){
var map__31197 = p__31196;
var map__31197__$1 = (((((!((map__31197 == null))))?(((((map__31197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31197):map__31197);
var opts = map__31197__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31194){
var G__31195 = cljs.core.first(seq31194);
var seq31194__$1 = cljs.core.next(seq31194);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31195,seq31194__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__31203 = arguments.length;
switch (G__31203) {
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
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31100__auto___31249 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___31249){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___31249){
return (function (state_31227){
var state_val_31228 = (state_31227[(1)]);
if((state_val_31228 === (7))){
var inst_31223 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
var statearr_31229_31250 = state_31227__$1;
(statearr_31229_31250[(2)] = inst_31223);

(statearr_31229_31250[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (1))){
var state_31227__$1 = state_31227;
var statearr_31230_31251 = state_31227__$1;
(statearr_31230_31251[(2)] = null);

(statearr_31230_31251[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (4))){
var inst_31206 = (state_31227[(7)]);
var inst_31206__$1 = (state_31227[(2)]);
var inst_31207 = (inst_31206__$1 == null);
var state_31227__$1 = (function (){var statearr_31231 = state_31227;
(statearr_31231[(7)] = inst_31206__$1);

return statearr_31231;
})();
if(cljs.core.truth_(inst_31207)){
var statearr_31232_31252 = state_31227__$1;
(statearr_31232_31252[(1)] = (5));

} else {
var statearr_31233_31253 = state_31227__$1;
(statearr_31233_31253[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (13))){
var state_31227__$1 = state_31227;
var statearr_31234_31254 = state_31227__$1;
(statearr_31234_31254[(2)] = null);

(statearr_31234_31254[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (6))){
var inst_31206 = (state_31227[(7)]);
var state_31227__$1 = state_31227;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31227__$1,(11),to,inst_31206);
} else {
if((state_val_31228 === (3))){
var inst_31225 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31227__$1,inst_31225);
} else {
if((state_val_31228 === (12))){
var state_31227__$1 = state_31227;
var statearr_31235_31255 = state_31227__$1;
(statearr_31235_31255[(2)] = null);

(statearr_31235_31255[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (2))){
var state_31227__$1 = state_31227;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31227__$1,(4),from);
} else {
if((state_val_31228 === (11))){
var inst_31216 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
if(cljs.core.truth_(inst_31216)){
var statearr_31236_31256 = state_31227__$1;
(statearr_31236_31256[(1)] = (12));

} else {
var statearr_31237_31257 = state_31227__$1;
(statearr_31237_31257[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (9))){
var state_31227__$1 = state_31227;
var statearr_31238_31258 = state_31227__$1;
(statearr_31238_31258[(2)] = null);

(statearr_31238_31258[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (5))){
var state_31227__$1 = state_31227;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31239_31259 = state_31227__$1;
(statearr_31239_31259[(1)] = (8));

} else {
var statearr_31240_31260 = state_31227__$1;
(statearr_31240_31260[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (14))){
var inst_31221 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
var statearr_31241_31261 = state_31227__$1;
(statearr_31241_31261[(2)] = inst_31221);

(statearr_31241_31261[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (10))){
var inst_31213 = (state_31227[(2)]);
var state_31227__$1 = state_31227;
var statearr_31242_31262 = state_31227__$1;
(statearr_31242_31262[(2)] = inst_31213);

(statearr_31242_31262[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31228 === (8))){
var inst_31210 = cljs.core.async.close_BANG_(to);
var state_31227__$1 = state_31227;
var statearr_31243_31263 = state_31227__$1;
(statearr_31243_31263[(2)] = inst_31210);

(statearr_31243_31263[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___31249))
;
return ((function (switch__30993__auto__,c__31100__auto___31249){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_31244 = [null,null,null,null,null,null,null,null];
(statearr_31244[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_31244[(1)] = (1));

return statearr_31244;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_31227){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31227);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31245){if((e31245 instanceof Object)){
var ex__30997__auto__ = e31245;
var statearr_31246_31264 = state_31227;
(statearr_31246_31264[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31227);

return cljs.core.cst$kw$recur;
} else {
throw e31245;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31265 = state_31227;
state_31227 = G__31265;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_31227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_31227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___31249))
})();
var state__31102__auto__ = (function (){var statearr_31247 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31247[(6)] = c__31100__auto___31249);

return statearr_31247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___31249))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__31266){
var vec__31267 = p__31266;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31267,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31267,(1),null);
var job = vec__31267;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31100__auto___31438 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___31438,res,vec__31267,v,p,job,jobs,results){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___31438,res,vec__31267,v,p,job,jobs,results){
return (function (state_31274){
var state_val_31275 = (state_31274[(1)]);
if((state_val_31275 === (1))){
var state_31274__$1 = state_31274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31274__$1,(2),res,v);
} else {
if((state_val_31275 === (2))){
var inst_31271 = (state_31274[(2)]);
var inst_31272 = cljs.core.async.close_BANG_(res);
var state_31274__$1 = (function (){var statearr_31276 = state_31274;
(statearr_31276[(7)] = inst_31271);

return statearr_31276;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31274__$1,inst_31272);
} else {
return null;
}
}
});})(c__31100__auto___31438,res,vec__31267,v,p,job,jobs,results))
;
return ((function (switch__30993__auto__,c__31100__auto___31438,res,vec__31267,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0 = (function (){
var statearr_31277 = [null,null,null,null,null,null,null,null];
(statearr_31277[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__);

(statearr_31277[(1)] = (1));

return statearr_31277;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1 = (function (state_31274){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31274);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31278){if((e31278 instanceof Object)){
var ex__30997__auto__ = e31278;
var statearr_31279_31439 = state_31274;
(statearr_31279_31439[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31274);

return cljs.core.cst$kw$recur;
} else {
throw e31278;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31440 = state_31274;
state_31274 = G__31440;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = function(state_31274){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1.call(this,state_31274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___31438,res,vec__31267,v,p,job,jobs,results))
})();
var state__31102__auto__ = (function (){var statearr_31280 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31280[(6)] = c__31100__auto___31438);

return statearr_31280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___31438,res,vec__31267,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__31281){
var vec__31282 = p__31281;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31282,(1),null);
var job = vec__31282;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___31441 = n;
var __31442 = (0);
while(true){
if((__31442 < n__4607__auto___31441)){
var G__31285_31443 = type;
var G__31285_31444__$1 = (((G__31285_31443 instanceof cljs.core.Keyword))?G__31285_31443.fqn:null);
switch (G__31285_31444__$1) {
case "compute":
var c__31100__auto___31446 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31442,c__31100__auto___31446,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (__31442,c__31100__auto___31446,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async){
return (function (state_31298){
var state_val_31299 = (state_31298[(1)]);
if((state_val_31299 === (1))){
var state_31298__$1 = state_31298;
var statearr_31300_31447 = state_31298__$1;
(statearr_31300_31447[(2)] = null);

(statearr_31300_31447[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (2))){
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31298__$1,(4),jobs);
} else {
if((state_val_31299 === (3))){
var inst_31296 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31298__$1,inst_31296);
} else {
if((state_val_31299 === (4))){
var inst_31288 = (state_31298[(2)]);
var inst_31289 = process(inst_31288);
var state_31298__$1 = state_31298;
if(cljs.core.truth_(inst_31289)){
var statearr_31301_31448 = state_31298__$1;
(statearr_31301_31448[(1)] = (5));

} else {
var statearr_31302_31449 = state_31298__$1;
(statearr_31302_31449[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (5))){
var state_31298__$1 = state_31298;
var statearr_31303_31450 = state_31298__$1;
(statearr_31303_31450[(2)] = null);

(statearr_31303_31450[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (6))){
var state_31298__$1 = state_31298;
var statearr_31304_31451 = state_31298__$1;
(statearr_31304_31451[(2)] = null);

(statearr_31304_31451[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31299 === (7))){
var inst_31294 = (state_31298[(2)]);
var state_31298__$1 = state_31298;
var statearr_31305_31452 = state_31298__$1;
(statearr_31305_31452[(2)] = inst_31294);

(statearr_31305_31452[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__31442,c__31100__auto___31446,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async))
;
return ((function (__31442,switch__30993__auto__,c__31100__auto___31446,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0 = (function (){
var statearr_31306 = [null,null,null,null,null,null,null];
(statearr_31306[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__);

(statearr_31306[(1)] = (1));

return statearr_31306;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1 = (function (state_31298){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31298);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31307){if((e31307 instanceof Object)){
var ex__30997__auto__ = e31307;
var statearr_31308_31453 = state_31298;
(statearr_31308_31453[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31298);

return cljs.core.cst$kw$recur;
} else {
throw e31307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31454 = state_31298;
state_31298 = G__31454;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = function(state_31298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1.call(this,state_31298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__;
})()
;})(__31442,switch__30993__auto__,c__31100__auto___31446,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async))
})();
var state__31102__auto__ = (function (){var statearr_31309 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31309[(6)] = c__31100__auto___31446);

return statearr_31309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(__31442,c__31100__auto___31446,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async))
);


break;
case "async":
var c__31100__auto___31455 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__31442,c__31100__auto___31455,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (__31442,c__31100__auto___31455,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async){
return (function (state_31322){
var state_val_31323 = (state_31322[(1)]);
if((state_val_31323 === (1))){
var state_31322__$1 = state_31322;
var statearr_31324_31456 = state_31322__$1;
(statearr_31324_31456[(2)] = null);

(statearr_31324_31456[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31323 === (2))){
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31322__$1,(4),jobs);
} else {
if((state_val_31323 === (3))){
var inst_31320 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31322__$1,inst_31320);
} else {
if((state_val_31323 === (4))){
var inst_31312 = (state_31322[(2)]);
var inst_31313 = async(inst_31312);
var state_31322__$1 = state_31322;
if(cljs.core.truth_(inst_31313)){
var statearr_31325_31457 = state_31322__$1;
(statearr_31325_31457[(1)] = (5));

} else {
var statearr_31326_31458 = state_31322__$1;
(statearr_31326_31458[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31323 === (5))){
var state_31322__$1 = state_31322;
var statearr_31327_31459 = state_31322__$1;
(statearr_31327_31459[(2)] = null);

(statearr_31327_31459[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31323 === (6))){
var state_31322__$1 = state_31322;
var statearr_31328_31460 = state_31322__$1;
(statearr_31328_31460[(2)] = null);

(statearr_31328_31460[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31323 === (7))){
var inst_31318 = (state_31322[(2)]);
var state_31322__$1 = state_31322;
var statearr_31329_31461 = state_31322__$1;
(statearr_31329_31461[(2)] = inst_31318);

(statearr_31329_31461[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
return null;
}
}
}
}
}
}
}
});})(__31442,c__31100__auto___31455,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async))
;
return ((function (__31442,switch__30993__auto__,c__31100__auto___31455,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0 = (function (){
var statearr_31330 = [null,null,null,null,null,null,null];
(statearr_31330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__);

(statearr_31330[(1)] = (1));

return statearr_31330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1 = (function (state_31322){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31322);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31331){if((e31331 instanceof Object)){
var ex__30997__auto__ = e31331;
var statearr_31332_31462 = state_31322;
(statearr_31332_31462[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31322);

return cljs.core.cst$kw$recur;
} else {
throw e31331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31463 = state_31322;
state_31322 = G__31463;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = function(state_31322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1.call(this,state_31322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__;
})()
;})(__31442,switch__30993__auto__,c__31100__auto___31455,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async))
})();
var state__31102__auto__ = (function (){var statearr_31333 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31333[(6)] = c__31100__auto___31455);

return statearr_31333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(__31442,c__31100__auto___31455,G__31285_31443,G__31285_31444__$1,n__4607__auto___31441,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31285_31444__$1)].join('')));

}

var G__31464 = (__31442 + (1));
__31442 = G__31464;
continue;
} else {
}
break;
}

var c__31100__auto___31465 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___31465,jobs,results,process,async){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___31465,jobs,results,process,async){
return (function (state_31355){
var state_val_31356 = (state_31355[(1)]);
if((state_val_31356 === (7))){
var inst_31351 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
var statearr_31357_31466 = state_31355__$1;
(statearr_31357_31466[(2)] = inst_31351);

(statearr_31357_31466[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31356 === (1))){
var state_31355__$1 = state_31355;
var statearr_31358_31467 = state_31355__$1;
(statearr_31358_31467[(2)] = null);

(statearr_31358_31467[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31356 === (4))){
var inst_31336 = (state_31355[(7)]);
var inst_31336__$1 = (state_31355[(2)]);
var inst_31337 = (inst_31336__$1 == null);
var state_31355__$1 = (function (){var statearr_31359 = state_31355;
(statearr_31359[(7)] = inst_31336__$1);

return statearr_31359;
})();
if(cljs.core.truth_(inst_31337)){
var statearr_31360_31468 = state_31355__$1;
(statearr_31360_31468[(1)] = (5));

} else {
var statearr_31361_31469 = state_31355__$1;
(statearr_31361_31469[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31356 === (6))){
var inst_31341 = (state_31355[(8)]);
var inst_31336 = (state_31355[(7)]);
var inst_31341__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_31342 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31343 = [inst_31336,inst_31341__$1];
var inst_31344 = (new cljs.core.PersistentVector(null,2,(5),inst_31342,inst_31343,null));
var state_31355__$1 = (function (){var statearr_31362 = state_31355;
(statearr_31362[(8)] = inst_31341__$1);

return statearr_31362;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31355__$1,(8),jobs,inst_31344);
} else {
if((state_val_31356 === (3))){
var inst_31353 = (state_31355[(2)]);
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31355__$1,inst_31353);
} else {
if((state_val_31356 === (2))){
var state_31355__$1 = state_31355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31355__$1,(4),from);
} else {
if((state_val_31356 === (9))){
var inst_31348 = (state_31355[(2)]);
var state_31355__$1 = (function (){var statearr_31363 = state_31355;
(statearr_31363[(9)] = inst_31348);

return statearr_31363;
})();
var statearr_31364_31470 = state_31355__$1;
(statearr_31364_31470[(2)] = null);

(statearr_31364_31470[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31356 === (5))){
var inst_31339 = cljs.core.async.close_BANG_(jobs);
var state_31355__$1 = state_31355;
var statearr_31365_31471 = state_31355__$1;
(statearr_31365_31471[(2)] = inst_31339);

(statearr_31365_31471[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31356 === (8))){
var inst_31341 = (state_31355[(8)]);
var inst_31346 = (state_31355[(2)]);
var state_31355__$1 = (function (){var statearr_31366 = state_31355;
(statearr_31366[(10)] = inst_31346);

return statearr_31366;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31355__$1,(9),results,inst_31341);
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
});})(c__31100__auto___31465,jobs,results,process,async))
;
return ((function (switch__30993__auto__,c__31100__auto___31465,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0 = (function (){
var statearr_31367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__);

(statearr_31367[(1)] = (1));

return statearr_31367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1 = (function (state_31355){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31355);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31368){if((e31368 instanceof Object)){
var ex__30997__auto__ = e31368;
var statearr_31369_31472 = state_31355;
(statearr_31369_31472[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31355);

return cljs.core.cst$kw$recur;
} else {
throw e31368;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31473 = state_31355;
state_31355 = G__31473;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = function(state_31355){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1.call(this,state_31355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___31465,jobs,results,process,async))
})();
var state__31102__auto__ = (function (){var statearr_31370 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31370[(6)] = c__31100__auto___31465);

return statearr_31370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___31465,jobs,results,process,async))
);


var c__31100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto__,jobs,results,process,async){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto__,jobs,results,process,async){
return (function (state_31408){
var state_val_31409 = (state_31408[(1)]);
if((state_val_31409 === (7))){
var inst_31404 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31410_31474 = state_31408__$1;
(statearr_31410_31474[(2)] = inst_31404);

(statearr_31410_31474[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (20))){
var state_31408__$1 = state_31408;
var statearr_31411_31475 = state_31408__$1;
(statearr_31411_31475[(2)] = null);

(statearr_31411_31475[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (1))){
var state_31408__$1 = state_31408;
var statearr_31412_31476 = state_31408__$1;
(statearr_31412_31476[(2)] = null);

(statearr_31412_31476[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (4))){
var inst_31373 = (state_31408[(7)]);
var inst_31373__$1 = (state_31408[(2)]);
var inst_31374 = (inst_31373__$1 == null);
var state_31408__$1 = (function (){var statearr_31413 = state_31408;
(statearr_31413[(7)] = inst_31373__$1);

return statearr_31413;
})();
if(cljs.core.truth_(inst_31374)){
var statearr_31414_31477 = state_31408__$1;
(statearr_31414_31477[(1)] = (5));

} else {
var statearr_31415_31478 = state_31408__$1;
(statearr_31415_31478[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (15))){
var inst_31386 = (state_31408[(8)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31408__$1,(18),to,inst_31386);
} else {
if((state_val_31409 === (21))){
var inst_31399 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31416_31479 = state_31408__$1;
(statearr_31416_31479[(2)] = inst_31399);

(statearr_31416_31479[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (13))){
var inst_31401 = (state_31408[(2)]);
var state_31408__$1 = (function (){var statearr_31417 = state_31408;
(statearr_31417[(9)] = inst_31401);

return statearr_31417;
})();
var statearr_31418_31480 = state_31408__$1;
(statearr_31418_31480[(2)] = null);

(statearr_31418_31480[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (6))){
var inst_31373 = (state_31408[(7)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31408__$1,(11),inst_31373);
} else {
if((state_val_31409 === (17))){
var inst_31394 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
if(cljs.core.truth_(inst_31394)){
var statearr_31419_31481 = state_31408__$1;
(statearr_31419_31481[(1)] = (19));

} else {
var statearr_31420_31482 = state_31408__$1;
(statearr_31420_31482[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (3))){
var inst_31406 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31408__$1,inst_31406);
} else {
if((state_val_31409 === (12))){
var inst_31383 = (state_31408[(10)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31408__$1,(14),inst_31383);
} else {
if((state_val_31409 === (2))){
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31408__$1,(4),results);
} else {
if((state_val_31409 === (19))){
var state_31408__$1 = state_31408;
var statearr_31421_31483 = state_31408__$1;
(statearr_31421_31483[(2)] = null);

(statearr_31421_31483[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (11))){
var inst_31383 = (state_31408[(2)]);
var state_31408__$1 = (function (){var statearr_31422 = state_31408;
(statearr_31422[(10)] = inst_31383);

return statearr_31422;
})();
var statearr_31423_31484 = state_31408__$1;
(statearr_31423_31484[(2)] = null);

(statearr_31423_31484[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (9))){
var state_31408__$1 = state_31408;
var statearr_31424_31485 = state_31408__$1;
(statearr_31424_31485[(2)] = null);

(statearr_31424_31485[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (5))){
var state_31408__$1 = state_31408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31425_31486 = state_31408__$1;
(statearr_31425_31486[(1)] = (8));

} else {
var statearr_31426_31487 = state_31408__$1;
(statearr_31426_31487[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (14))){
var inst_31388 = (state_31408[(11)]);
var inst_31386 = (state_31408[(8)]);
var inst_31386__$1 = (state_31408[(2)]);
var inst_31387 = (inst_31386__$1 == null);
var inst_31388__$1 = cljs.core.not(inst_31387);
var state_31408__$1 = (function (){var statearr_31427 = state_31408;
(statearr_31427[(11)] = inst_31388__$1);

(statearr_31427[(8)] = inst_31386__$1);

return statearr_31427;
})();
if(inst_31388__$1){
var statearr_31428_31488 = state_31408__$1;
(statearr_31428_31488[(1)] = (15));

} else {
var statearr_31429_31489 = state_31408__$1;
(statearr_31429_31489[(1)] = (16));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (16))){
var inst_31388 = (state_31408[(11)]);
var state_31408__$1 = state_31408;
var statearr_31430_31490 = state_31408__$1;
(statearr_31430_31490[(2)] = inst_31388);

(statearr_31430_31490[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (10))){
var inst_31380 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31431_31491 = state_31408__$1;
(statearr_31431_31491[(2)] = inst_31380);

(statearr_31431_31491[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (18))){
var inst_31391 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31432_31492 = state_31408__$1;
(statearr_31432_31492[(2)] = inst_31391);

(statearr_31432_31492[(1)] = (17));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31409 === (8))){
var inst_31377 = cljs.core.async.close_BANG_(to);
var state_31408__$1 = state_31408;
var statearr_31433_31493 = state_31408__$1;
(statearr_31433_31493[(2)] = inst_31377);

(statearr_31433_31493[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto__,jobs,results,process,async))
;
return ((function (switch__30993__auto__,c__31100__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0 = (function (){
var statearr_31434 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31434[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__);

(statearr_31434[(1)] = (1));

return statearr_31434;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1 = (function (state_31408){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31408);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31435){if((e31435 instanceof Object)){
var ex__30997__auto__ = e31435;
var statearr_31436_31494 = state_31408;
(statearr_31436_31494[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31408);

return cljs.core.cst$kw$recur;
} else {
throw e31435;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31495 = state_31408;
state_31408 = G__31495;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__ = function(state_31408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1.call(this,state_31408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30994__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto__,jobs,results,process,async))
})();
var state__31102__auto__ = (function (){var statearr_31437 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31437[(6)] = c__31100__auto__);

return statearr_31437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto__,jobs,results,process,async))
);

return c__31100__auto__;
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
var G__31497 = arguments.length;
switch (G__31497) {
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
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.cst$kw$async);
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
var G__31500 = arguments.length;
switch (G__31500) {
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
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.cst$kw$compute);
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
var G__31503 = arguments.length;
switch (G__31503) {
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
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31100__auto___31552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___31552,tc,fc){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___31552,tc,fc){
return (function (state_31529){
var state_val_31530 = (state_31529[(1)]);
if((state_val_31530 === (7))){
var inst_31525 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
var statearr_31531_31553 = state_31529__$1;
(statearr_31531_31553[(2)] = inst_31525);

(statearr_31531_31553[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (1))){
var state_31529__$1 = state_31529;
var statearr_31532_31554 = state_31529__$1;
(statearr_31532_31554[(2)] = null);

(statearr_31532_31554[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (4))){
var inst_31506 = (state_31529[(7)]);
var inst_31506__$1 = (state_31529[(2)]);
var inst_31507 = (inst_31506__$1 == null);
var state_31529__$1 = (function (){var statearr_31533 = state_31529;
(statearr_31533[(7)] = inst_31506__$1);

return statearr_31533;
})();
if(cljs.core.truth_(inst_31507)){
var statearr_31534_31555 = state_31529__$1;
(statearr_31534_31555[(1)] = (5));

} else {
var statearr_31535_31556 = state_31529__$1;
(statearr_31535_31556[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (13))){
var state_31529__$1 = state_31529;
var statearr_31536_31557 = state_31529__$1;
(statearr_31536_31557[(2)] = null);

(statearr_31536_31557[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (6))){
var inst_31506 = (state_31529[(7)]);
var inst_31512 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31506) : p.call(null,inst_31506));
var state_31529__$1 = state_31529;
if(cljs.core.truth_(inst_31512)){
var statearr_31537_31558 = state_31529__$1;
(statearr_31537_31558[(1)] = (9));

} else {
var statearr_31538_31559 = state_31529__$1;
(statearr_31538_31559[(1)] = (10));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (3))){
var inst_31527 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31529__$1,inst_31527);
} else {
if((state_val_31530 === (12))){
var state_31529__$1 = state_31529;
var statearr_31539_31560 = state_31529__$1;
(statearr_31539_31560[(2)] = null);

(statearr_31539_31560[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (2))){
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31529__$1,(4),ch);
} else {
if((state_val_31530 === (11))){
var inst_31506 = (state_31529[(7)]);
var inst_31516 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31529__$1,(8),inst_31516,inst_31506);
} else {
if((state_val_31530 === (9))){
var state_31529__$1 = state_31529;
var statearr_31540_31561 = state_31529__$1;
(statearr_31540_31561[(2)] = tc);

(statearr_31540_31561[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (5))){
var inst_31509 = cljs.core.async.close_BANG_(tc);
var inst_31510 = cljs.core.async.close_BANG_(fc);
var state_31529__$1 = (function (){var statearr_31541 = state_31529;
(statearr_31541[(8)] = inst_31509);

return statearr_31541;
})();
var statearr_31542_31562 = state_31529__$1;
(statearr_31542_31562[(2)] = inst_31510);

(statearr_31542_31562[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (14))){
var inst_31523 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
var statearr_31543_31563 = state_31529__$1;
(statearr_31543_31563[(2)] = inst_31523);

(statearr_31543_31563[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (10))){
var state_31529__$1 = state_31529;
var statearr_31544_31564 = state_31529__$1;
(statearr_31544_31564[(2)] = fc);

(statearr_31544_31564[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31530 === (8))){
var inst_31518 = (state_31529[(2)]);
var state_31529__$1 = state_31529;
if(cljs.core.truth_(inst_31518)){
var statearr_31545_31565 = state_31529__$1;
(statearr_31545_31565[(1)] = (12));

} else {
var statearr_31546_31566 = state_31529__$1;
(statearr_31546_31566[(1)] = (13));

}

return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___31552,tc,fc))
;
return ((function (switch__30993__auto__,c__31100__auto___31552,tc,fc){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_31547 = [null,null,null,null,null,null,null,null,null];
(statearr_31547[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_31547[(1)] = (1));

return statearr_31547;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_31529){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31529);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31548){if((e31548 instanceof Object)){
var ex__30997__auto__ = e31548;
var statearr_31549_31567 = state_31529;
(statearr_31549_31567[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31529);

return cljs.core.cst$kw$recur;
} else {
throw e31548;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31568 = state_31529;
state_31529 = G__31568;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_31529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_31529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___31552,tc,fc))
})();
var state__31102__auto__ = (function (){var statearr_31550 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31550[(6)] = c__31100__auto___31552);

return statearr_31550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___31552,tc,fc))
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
var c__31100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto__){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto__){
return (function (state_31589){
var state_val_31590 = (state_31589[(1)]);
if((state_val_31590 === (7))){
var inst_31585 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31591_31609 = state_31589__$1;
(statearr_31591_31609[(2)] = inst_31585);

(statearr_31591_31609[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31590 === (1))){
var inst_31569 = init;
var state_31589__$1 = (function (){var statearr_31592 = state_31589;
(statearr_31592[(7)] = inst_31569);

return statearr_31592;
})();
var statearr_31593_31610 = state_31589__$1;
(statearr_31593_31610[(2)] = null);

(statearr_31593_31610[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31590 === (4))){
var inst_31572 = (state_31589[(8)]);
var inst_31572__$1 = (state_31589[(2)]);
var inst_31573 = (inst_31572__$1 == null);
var state_31589__$1 = (function (){var statearr_31594 = state_31589;
(statearr_31594[(8)] = inst_31572__$1);

return statearr_31594;
})();
if(cljs.core.truth_(inst_31573)){
var statearr_31595_31611 = state_31589__$1;
(statearr_31595_31611[(1)] = (5));

} else {
var statearr_31596_31612 = state_31589__$1;
(statearr_31596_31612[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31590 === (6))){
var inst_31572 = (state_31589[(8)]);
var inst_31576 = (state_31589[(9)]);
var inst_31569 = (state_31589[(7)]);
var inst_31576__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_31569,inst_31572) : f.call(null,inst_31569,inst_31572));
var inst_31577 = cljs.core.reduced_QMARK_(inst_31576__$1);
var state_31589__$1 = (function (){var statearr_31597 = state_31589;
(statearr_31597[(9)] = inst_31576__$1);

return statearr_31597;
})();
if(inst_31577){
var statearr_31598_31613 = state_31589__$1;
(statearr_31598_31613[(1)] = (8));

} else {
var statearr_31599_31614 = state_31589__$1;
(statearr_31599_31614[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31590 === (3))){
var inst_31587 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31589__$1,inst_31587);
} else {
if((state_val_31590 === (2))){
var state_31589__$1 = state_31589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31589__$1,(4),ch);
} else {
if((state_val_31590 === (9))){
var inst_31576 = (state_31589[(9)]);
var inst_31569 = inst_31576;
var state_31589__$1 = (function (){var statearr_31600 = state_31589;
(statearr_31600[(7)] = inst_31569);

return statearr_31600;
})();
var statearr_31601_31615 = state_31589__$1;
(statearr_31601_31615[(2)] = null);

(statearr_31601_31615[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31590 === (5))){
var inst_31569 = (state_31589[(7)]);
var state_31589__$1 = state_31589;
var statearr_31602_31616 = state_31589__$1;
(statearr_31602_31616[(2)] = inst_31569);

(statearr_31602_31616[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31590 === (10))){
var inst_31583 = (state_31589[(2)]);
var state_31589__$1 = state_31589;
var statearr_31603_31617 = state_31589__$1;
(statearr_31603_31617[(2)] = inst_31583);

(statearr_31603_31617[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31590 === (8))){
var inst_31576 = (state_31589[(9)]);
var inst_31579 = cljs.core.deref(inst_31576);
var state_31589__$1 = state_31589;
var statearr_31604_31618 = state_31589__$1;
(statearr_31604_31618[(2)] = inst_31579);

(statearr_31604_31618[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto__))
;
return ((function (switch__30993__auto__,c__31100__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30994__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30994__auto____0 = (function (){
var statearr_31605 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31605[(0)] = cljs$core$async$reduce_$_state_machine__30994__auto__);

(statearr_31605[(1)] = (1));

return statearr_31605;
});
var cljs$core$async$reduce_$_state_machine__30994__auto____1 = (function (state_31589){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31589);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31606){if((e31606 instanceof Object)){
var ex__30997__auto__ = e31606;
var statearr_31607_31619 = state_31589;
(statearr_31607_31619[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31589);

return cljs.core.cst$kw$recur;
} else {
throw e31606;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31620 = state_31589;
state_31589 = G__31620;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30994__auto__ = function(state_31589){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30994__auto____1.call(this,state_31589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30994__auto____0;
cljs$core$async$reduce_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30994__auto____1;
return cljs$core$async$reduce_$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto__))
})();
var state__31102__auto__ = (function (){var statearr_31608 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31608[(6)] = c__31100__auto__);

return statearr_31608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto__))
);

return c__31100__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto__,f__$1){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto__,f__$1){
return (function (state_31626){
var state_val_31627 = (state_31626[(1)]);
if((state_val_31627 === (1))){
var inst_31621 = cljs.core.async.reduce(f__$1,init,ch);
var state_31626__$1 = state_31626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31626__$1,(2),inst_31621);
} else {
if((state_val_31627 === (2))){
var inst_31623 = (state_31626[(2)]);
var inst_31624 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_31623) : f__$1.call(null,inst_31623));
var state_31626__$1 = state_31626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31626__$1,inst_31624);
} else {
return null;
}
}
});})(c__31100__auto__,f__$1))
;
return ((function (switch__30993__auto__,c__31100__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__30994__auto__ = null;
var cljs$core$async$transduce_$_state_machine__30994__auto____0 = (function (){
var statearr_31628 = [null,null,null,null,null,null,null];
(statearr_31628[(0)] = cljs$core$async$transduce_$_state_machine__30994__auto__);

(statearr_31628[(1)] = (1));

return statearr_31628;
});
var cljs$core$async$transduce_$_state_machine__30994__auto____1 = (function (state_31626){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31626);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31629){if((e31629 instanceof Object)){
var ex__30997__auto__ = e31629;
var statearr_31630_31632 = state_31626;
(statearr_31630_31632[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31626);

return cljs.core.cst$kw$recur;
} else {
throw e31629;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31633 = state_31626;
state_31626 = G__31633;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__30994__auto__ = function(state_31626){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__30994__auto____1.call(this,state_31626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__30994__auto____0;
cljs$core$async$transduce_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__30994__auto____1;
return cljs$core$async$transduce_$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto__,f__$1))
})();
var state__31102__auto__ = (function (){var statearr_31631 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31631[(6)] = c__31100__auto__);

return statearr_31631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto__,f__$1))
);

return c__31100__auto__;
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
var G__31635 = arguments.length;
switch (G__31635) {
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
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto__){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto__){
return (function (state_31660){
var state_val_31661 = (state_31660[(1)]);
if((state_val_31661 === (7))){
var inst_31642 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31662_31683 = state_31660__$1;
(statearr_31662_31683[(2)] = inst_31642);

(statearr_31662_31683[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (1))){
var inst_31636 = cljs.core.seq(coll);
var inst_31637 = inst_31636;
var state_31660__$1 = (function (){var statearr_31663 = state_31660;
(statearr_31663[(7)] = inst_31637);

return statearr_31663;
})();
var statearr_31664_31684 = state_31660__$1;
(statearr_31664_31684[(2)] = null);

(statearr_31664_31684[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (4))){
var inst_31637 = (state_31660[(7)]);
var inst_31640 = cljs.core.first(inst_31637);
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31660__$1,(7),ch,inst_31640);
} else {
if((state_val_31661 === (13))){
var inst_31654 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31665_31685 = state_31660__$1;
(statearr_31665_31685[(2)] = inst_31654);

(statearr_31665_31685[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (6))){
var inst_31645 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
if(cljs.core.truth_(inst_31645)){
var statearr_31666_31686 = state_31660__$1;
(statearr_31666_31686[(1)] = (8));

} else {
var statearr_31667_31687 = state_31660__$1;
(statearr_31667_31687[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (3))){
var inst_31658 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31660__$1,inst_31658);
} else {
if((state_val_31661 === (12))){
var state_31660__$1 = state_31660;
var statearr_31668_31688 = state_31660__$1;
(statearr_31668_31688[(2)] = null);

(statearr_31668_31688[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (2))){
var inst_31637 = (state_31660[(7)]);
var state_31660__$1 = state_31660;
if(cljs.core.truth_(inst_31637)){
var statearr_31669_31689 = state_31660__$1;
(statearr_31669_31689[(1)] = (4));

} else {
var statearr_31670_31690 = state_31660__$1;
(statearr_31670_31690[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (11))){
var inst_31651 = cljs.core.async.close_BANG_(ch);
var state_31660__$1 = state_31660;
var statearr_31671_31691 = state_31660__$1;
(statearr_31671_31691[(2)] = inst_31651);

(statearr_31671_31691[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (9))){
var state_31660__$1 = state_31660;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31672_31692 = state_31660__$1;
(statearr_31672_31692[(1)] = (11));

} else {
var statearr_31673_31693 = state_31660__$1;
(statearr_31673_31693[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (5))){
var inst_31637 = (state_31660[(7)]);
var state_31660__$1 = state_31660;
var statearr_31674_31694 = state_31660__$1;
(statearr_31674_31694[(2)] = inst_31637);

(statearr_31674_31694[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (10))){
var inst_31656 = (state_31660[(2)]);
var state_31660__$1 = state_31660;
var statearr_31675_31695 = state_31660__$1;
(statearr_31675_31695[(2)] = inst_31656);

(statearr_31675_31695[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31661 === (8))){
var inst_31637 = (state_31660[(7)]);
var inst_31647 = cljs.core.next(inst_31637);
var inst_31637__$1 = inst_31647;
var state_31660__$1 = (function (){var statearr_31676 = state_31660;
(statearr_31676[(7)] = inst_31637__$1);

return statearr_31676;
})();
var statearr_31677_31696 = state_31660__$1;
(statearr_31677_31696[(2)] = null);

(statearr_31677_31696[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto__))
;
return ((function (switch__30993__auto__,c__31100__auto__){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_31678 = [null,null,null,null,null,null,null,null];
(statearr_31678[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_31678[(1)] = (1));

return statearr_31678;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_31660){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31660);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31679){if((e31679 instanceof Object)){
var ex__30997__auto__ = e31679;
var statearr_31680_31697 = state_31660;
(statearr_31680_31697[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31660);

return cljs.core.cst$kw$recur;
} else {
throw e31679;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31698 = state_31660;
state_31660 = G__31698;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_31660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_31660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto__))
})();
var state__31102__auto__ = (function (){var statearr_31681 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31681[(6)] = c__31100__auto__);

return statearr_31681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto__))
);

return c__31100__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31699 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31699 = (function (ch,cs,meta31700){
this.ch = ch;
this.cs = cs;
this.meta31700 = meta31700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31701,meta31700__$1){
var self__ = this;
var _31701__$1 = this;
return (new cljs.core.async.t_cljs$core$async31699(self__.ch,self__.cs,meta31700__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31701){
var self__ = this;
var _31701__$1 = this;
return self__.meta31700;
});})(cs))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31699.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31699.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$cs,cljs.core.cst$sym$meta31700], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31699.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31699.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31699";

cljs.core.async.t_cljs$core$async31699.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31699");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31699.
 */
cljs.core.async.__GT_t_cljs$core$async31699 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31699(ch__$1,cs__$1,meta31700){
return (new cljs.core.async.t_cljs$core$async31699(ch__$1,cs__$1,meta31700));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31699(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__31100__auto___31921 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___31921,cs,m,dchan,dctr,done){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___31921,cs,m,dchan,dctr,done){
return (function (state_31836){
var state_val_31837 = (state_31836[(1)]);
if((state_val_31837 === (7))){
var inst_31832 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31838_31922 = state_31836__$1;
(statearr_31838_31922[(2)] = inst_31832);

(statearr_31838_31922[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (20))){
var inst_31735 = (state_31836[(7)]);
var inst_31747 = cljs.core.first(inst_31735);
var inst_31748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31747,(0),null);
var inst_31749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31747,(1),null);
var state_31836__$1 = (function (){var statearr_31839 = state_31836;
(statearr_31839[(8)] = inst_31748);

return statearr_31839;
})();
if(cljs.core.truth_(inst_31749)){
var statearr_31840_31923 = state_31836__$1;
(statearr_31840_31923[(1)] = (22));

} else {
var statearr_31841_31924 = state_31836__$1;
(statearr_31841_31924[(1)] = (23));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (27))){
var inst_31779 = (state_31836[(9)]);
var inst_31704 = (state_31836[(10)]);
var inst_31777 = (state_31836[(11)]);
var inst_31784 = (state_31836[(12)]);
var inst_31784__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31777,inst_31779);
var inst_31785 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31784__$1,inst_31704,done);
var state_31836__$1 = (function (){var statearr_31842 = state_31836;
(statearr_31842[(12)] = inst_31784__$1);

return statearr_31842;
})();
if(cljs.core.truth_(inst_31785)){
var statearr_31843_31925 = state_31836__$1;
(statearr_31843_31925[(1)] = (30));

} else {
var statearr_31844_31926 = state_31836__$1;
(statearr_31844_31926[(1)] = (31));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (1))){
var state_31836__$1 = state_31836;
var statearr_31845_31927 = state_31836__$1;
(statearr_31845_31927[(2)] = null);

(statearr_31845_31927[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (24))){
var inst_31735 = (state_31836[(7)]);
var inst_31754 = (state_31836[(2)]);
var inst_31755 = cljs.core.next(inst_31735);
var inst_31713 = inst_31755;
var inst_31714 = null;
var inst_31715 = (0);
var inst_31716 = (0);
var state_31836__$1 = (function (){var statearr_31846 = state_31836;
(statearr_31846[(13)] = inst_31714);

(statearr_31846[(14)] = inst_31716);

(statearr_31846[(15)] = inst_31754);

(statearr_31846[(16)] = inst_31715);

(statearr_31846[(17)] = inst_31713);

return statearr_31846;
})();
var statearr_31847_31928 = state_31836__$1;
(statearr_31847_31928[(2)] = null);

(statearr_31847_31928[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (39))){
var state_31836__$1 = state_31836;
var statearr_31851_31929 = state_31836__$1;
(statearr_31851_31929[(2)] = null);

(statearr_31851_31929[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (4))){
var inst_31704 = (state_31836[(10)]);
var inst_31704__$1 = (state_31836[(2)]);
var inst_31705 = (inst_31704__$1 == null);
var state_31836__$1 = (function (){var statearr_31852 = state_31836;
(statearr_31852[(10)] = inst_31704__$1);

return statearr_31852;
})();
if(cljs.core.truth_(inst_31705)){
var statearr_31853_31930 = state_31836__$1;
(statearr_31853_31930[(1)] = (5));

} else {
var statearr_31854_31931 = state_31836__$1;
(statearr_31854_31931[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (15))){
var inst_31714 = (state_31836[(13)]);
var inst_31716 = (state_31836[(14)]);
var inst_31715 = (state_31836[(16)]);
var inst_31713 = (state_31836[(17)]);
var inst_31731 = (state_31836[(2)]);
var inst_31732 = (inst_31716 + (1));
var tmp31848 = inst_31714;
var tmp31849 = inst_31715;
var tmp31850 = inst_31713;
var inst_31713__$1 = tmp31850;
var inst_31714__$1 = tmp31848;
var inst_31715__$1 = tmp31849;
var inst_31716__$1 = inst_31732;
var state_31836__$1 = (function (){var statearr_31855 = state_31836;
(statearr_31855[(13)] = inst_31714__$1);

(statearr_31855[(14)] = inst_31716__$1);

(statearr_31855[(18)] = inst_31731);

(statearr_31855[(16)] = inst_31715__$1);

(statearr_31855[(17)] = inst_31713__$1);

return statearr_31855;
})();
var statearr_31856_31932 = state_31836__$1;
(statearr_31856_31932[(2)] = null);

(statearr_31856_31932[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (21))){
var inst_31758 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31860_31933 = state_31836__$1;
(statearr_31860_31933[(2)] = inst_31758);

(statearr_31860_31933[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (31))){
var inst_31784 = (state_31836[(12)]);
var inst_31788 = done(null);
var inst_31789 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31784);
var state_31836__$1 = (function (){var statearr_31861 = state_31836;
(statearr_31861[(19)] = inst_31788);

return statearr_31861;
})();
var statearr_31862_31934 = state_31836__$1;
(statearr_31862_31934[(2)] = inst_31789);

(statearr_31862_31934[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (32))){
var inst_31779 = (state_31836[(9)]);
var inst_31778 = (state_31836[(20)]);
var inst_31777 = (state_31836[(11)]);
var inst_31776 = (state_31836[(21)]);
var inst_31791 = (state_31836[(2)]);
var inst_31792 = (inst_31779 + (1));
var tmp31857 = inst_31778;
var tmp31858 = inst_31777;
var tmp31859 = inst_31776;
var inst_31776__$1 = tmp31859;
var inst_31777__$1 = tmp31858;
var inst_31778__$1 = tmp31857;
var inst_31779__$1 = inst_31792;
var state_31836__$1 = (function (){var statearr_31863 = state_31836;
(statearr_31863[(9)] = inst_31779__$1);

(statearr_31863[(22)] = inst_31791);

(statearr_31863[(20)] = inst_31778__$1);

(statearr_31863[(11)] = inst_31777__$1);

(statearr_31863[(21)] = inst_31776__$1);

return statearr_31863;
})();
var statearr_31864_31935 = state_31836__$1;
(statearr_31864_31935[(2)] = null);

(statearr_31864_31935[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (40))){
var inst_31804 = (state_31836[(23)]);
var inst_31808 = done(null);
var inst_31809 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_31804);
var state_31836__$1 = (function (){var statearr_31865 = state_31836;
(statearr_31865[(24)] = inst_31808);

return statearr_31865;
})();
var statearr_31866_31936 = state_31836__$1;
(statearr_31866_31936[(2)] = inst_31809);

(statearr_31866_31936[(1)] = (41));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (33))){
var inst_31795 = (state_31836[(25)]);
var inst_31797 = cljs.core.chunked_seq_QMARK_(inst_31795);
var state_31836__$1 = state_31836;
if(inst_31797){
var statearr_31867_31937 = state_31836__$1;
(statearr_31867_31937[(1)] = (36));

} else {
var statearr_31868_31938 = state_31836__$1;
(statearr_31868_31938[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (13))){
var inst_31725 = (state_31836[(26)]);
var inst_31728 = cljs.core.async.close_BANG_(inst_31725);
var state_31836__$1 = state_31836;
var statearr_31869_31939 = state_31836__$1;
(statearr_31869_31939[(2)] = inst_31728);

(statearr_31869_31939[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (22))){
var inst_31748 = (state_31836[(8)]);
var inst_31751 = cljs.core.async.close_BANG_(inst_31748);
var state_31836__$1 = state_31836;
var statearr_31870_31940 = state_31836__$1;
(statearr_31870_31940[(2)] = inst_31751);

(statearr_31870_31940[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (36))){
var inst_31795 = (state_31836[(25)]);
var inst_31799 = cljs.core.chunk_first(inst_31795);
var inst_31800 = cljs.core.chunk_rest(inst_31795);
var inst_31801 = cljs.core.count(inst_31799);
var inst_31776 = inst_31800;
var inst_31777 = inst_31799;
var inst_31778 = inst_31801;
var inst_31779 = (0);
var state_31836__$1 = (function (){var statearr_31871 = state_31836;
(statearr_31871[(9)] = inst_31779);

(statearr_31871[(20)] = inst_31778);

(statearr_31871[(11)] = inst_31777);

(statearr_31871[(21)] = inst_31776);

return statearr_31871;
})();
var statearr_31872_31941 = state_31836__$1;
(statearr_31872_31941[(2)] = null);

(statearr_31872_31941[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (41))){
var inst_31795 = (state_31836[(25)]);
var inst_31811 = (state_31836[(2)]);
var inst_31812 = cljs.core.next(inst_31795);
var inst_31776 = inst_31812;
var inst_31777 = null;
var inst_31778 = (0);
var inst_31779 = (0);
var state_31836__$1 = (function (){var statearr_31873 = state_31836;
(statearr_31873[(9)] = inst_31779);

(statearr_31873[(27)] = inst_31811);

(statearr_31873[(20)] = inst_31778);

(statearr_31873[(11)] = inst_31777);

(statearr_31873[(21)] = inst_31776);

return statearr_31873;
})();
var statearr_31874_31942 = state_31836__$1;
(statearr_31874_31942[(2)] = null);

(statearr_31874_31942[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (43))){
var state_31836__$1 = state_31836;
var statearr_31875_31943 = state_31836__$1;
(statearr_31875_31943[(2)] = null);

(statearr_31875_31943[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (29))){
var inst_31820 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31876_31944 = state_31836__$1;
(statearr_31876_31944[(2)] = inst_31820);

(statearr_31876_31944[(1)] = (26));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (44))){
var inst_31829 = (state_31836[(2)]);
var state_31836__$1 = (function (){var statearr_31877 = state_31836;
(statearr_31877[(28)] = inst_31829);

return statearr_31877;
})();
var statearr_31878_31945 = state_31836__$1;
(statearr_31878_31945[(2)] = null);

(statearr_31878_31945[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (6))){
var inst_31768 = (state_31836[(29)]);
var inst_31767 = cljs.core.deref(cs);
var inst_31768__$1 = cljs.core.keys(inst_31767);
var inst_31769 = cljs.core.count(inst_31768__$1);
var inst_31770 = cljs.core.reset_BANG_(dctr,inst_31769);
var inst_31775 = cljs.core.seq(inst_31768__$1);
var inst_31776 = inst_31775;
var inst_31777 = null;
var inst_31778 = (0);
var inst_31779 = (0);
var state_31836__$1 = (function (){var statearr_31879 = state_31836;
(statearr_31879[(30)] = inst_31770);

(statearr_31879[(9)] = inst_31779);

(statearr_31879[(20)] = inst_31778);

(statearr_31879[(29)] = inst_31768__$1);

(statearr_31879[(11)] = inst_31777);

(statearr_31879[(21)] = inst_31776);

return statearr_31879;
})();
var statearr_31880_31946 = state_31836__$1;
(statearr_31880_31946[(2)] = null);

(statearr_31880_31946[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (28))){
var inst_31795 = (state_31836[(25)]);
var inst_31776 = (state_31836[(21)]);
var inst_31795__$1 = cljs.core.seq(inst_31776);
var state_31836__$1 = (function (){var statearr_31881 = state_31836;
(statearr_31881[(25)] = inst_31795__$1);

return statearr_31881;
})();
if(inst_31795__$1){
var statearr_31882_31947 = state_31836__$1;
(statearr_31882_31947[(1)] = (33));

} else {
var statearr_31883_31948 = state_31836__$1;
(statearr_31883_31948[(1)] = (34));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (25))){
var inst_31779 = (state_31836[(9)]);
var inst_31778 = (state_31836[(20)]);
var inst_31781 = (inst_31779 < inst_31778);
var inst_31782 = inst_31781;
var state_31836__$1 = state_31836;
if(cljs.core.truth_(inst_31782)){
var statearr_31884_31949 = state_31836__$1;
(statearr_31884_31949[(1)] = (27));

} else {
var statearr_31885_31950 = state_31836__$1;
(statearr_31885_31950[(1)] = (28));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (34))){
var state_31836__$1 = state_31836;
var statearr_31886_31951 = state_31836__$1;
(statearr_31886_31951[(2)] = null);

(statearr_31886_31951[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (17))){
var state_31836__$1 = state_31836;
var statearr_31887_31952 = state_31836__$1;
(statearr_31887_31952[(2)] = null);

(statearr_31887_31952[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (3))){
var inst_31834 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31836__$1,inst_31834);
} else {
if((state_val_31837 === (12))){
var inst_31763 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31888_31953 = state_31836__$1;
(statearr_31888_31953[(2)] = inst_31763);

(statearr_31888_31953[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (2))){
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31836__$1,(4),ch);
} else {
if((state_val_31837 === (23))){
var state_31836__$1 = state_31836;
var statearr_31889_31954 = state_31836__$1;
(statearr_31889_31954[(2)] = null);

(statearr_31889_31954[(1)] = (24));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (35))){
var inst_31818 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31890_31955 = state_31836__$1;
(statearr_31890_31955[(2)] = inst_31818);

(statearr_31890_31955[(1)] = (29));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (19))){
var inst_31735 = (state_31836[(7)]);
var inst_31739 = cljs.core.chunk_first(inst_31735);
var inst_31740 = cljs.core.chunk_rest(inst_31735);
var inst_31741 = cljs.core.count(inst_31739);
var inst_31713 = inst_31740;
var inst_31714 = inst_31739;
var inst_31715 = inst_31741;
var inst_31716 = (0);
var state_31836__$1 = (function (){var statearr_31891 = state_31836;
(statearr_31891[(13)] = inst_31714);

(statearr_31891[(14)] = inst_31716);

(statearr_31891[(16)] = inst_31715);

(statearr_31891[(17)] = inst_31713);

return statearr_31891;
})();
var statearr_31892_31956 = state_31836__$1;
(statearr_31892_31956[(2)] = null);

(statearr_31892_31956[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (11))){
var inst_31735 = (state_31836[(7)]);
var inst_31713 = (state_31836[(17)]);
var inst_31735__$1 = cljs.core.seq(inst_31713);
var state_31836__$1 = (function (){var statearr_31893 = state_31836;
(statearr_31893[(7)] = inst_31735__$1);

return statearr_31893;
})();
if(inst_31735__$1){
var statearr_31894_31957 = state_31836__$1;
(statearr_31894_31957[(1)] = (16));

} else {
var statearr_31895_31958 = state_31836__$1;
(statearr_31895_31958[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (9))){
var inst_31765 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31896_31959 = state_31836__$1;
(statearr_31896_31959[(2)] = inst_31765);

(statearr_31896_31959[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (5))){
var inst_31711 = cljs.core.deref(cs);
var inst_31712 = cljs.core.seq(inst_31711);
var inst_31713 = inst_31712;
var inst_31714 = null;
var inst_31715 = (0);
var inst_31716 = (0);
var state_31836__$1 = (function (){var statearr_31897 = state_31836;
(statearr_31897[(13)] = inst_31714);

(statearr_31897[(14)] = inst_31716);

(statearr_31897[(16)] = inst_31715);

(statearr_31897[(17)] = inst_31713);

return statearr_31897;
})();
var statearr_31898_31960 = state_31836__$1;
(statearr_31898_31960[(2)] = null);

(statearr_31898_31960[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (14))){
var state_31836__$1 = state_31836;
var statearr_31899_31961 = state_31836__$1;
(statearr_31899_31961[(2)] = null);

(statearr_31899_31961[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (45))){
var inst_31826 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31900_31962 = state_31836__$1;
(statearr_31900_31962[(2)] = inst_31826);

(statearr_31900_31962[(1)] = (44));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (26))){
var inst_31768 = (state_31836[(29)]);
var inst_31822 = (state_31836[(2)]);
var inst_31823 = cljs.core.seq(inst_31768);
var state_31836__$1 = (function (){var statearr_31901 = state_31836;
(statearr_31901[(31)] = inst_31822);

return statearr_31901;
})();
if(inst_31823){
var statearr_31902_31963 = state_31836__$1;
(statearr_31902_31963[(1)] = (42));

} else {
var statearr_31903_31964 = state_31836__$1;
(statearr_31903_31964[(1)] = (43));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (16))){
var inst_31735 = (state_31836[(7)]);
var inst_31737 = cljs.core.chunked_seq_QMARK_(inst_31735);
var state_31836__$1 = state_31836;
if(inst_31737){
var statearr_31904_31965 = state_31836__$1;
(statearr_31904_31965[(1)] = (19));

} else {
var statearr_31905_31966 = state_31836__$1;
(statearr_31905_31966[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (38))){
var inst_31815 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31906_31967 = state_31836__$1;
(statearr_31906_31967[(2)] = inst_31815);

(statearr_31906_31967[(1)] = (35));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (30))){
var state_31836__$1 = state_31836;
var statearr_31907_31968 = state_31836__$1;
(statearr_31907_31968[(2)] = null);

(statearr_31907_31968[(1)] = (32));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (10))){
var inst_31714 = (state_31836[(13)]);
var inst_31716 = (state_31836[(14)]);
var inst_31724 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31714,inst_31716);
var inst_31725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31724,(0),null);
var inst_31726 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31724,(1),null);
var state_31836__$1 = (function (){var statearr_31908 = state_31836;
(statearr_31908[(26)] = inst_31725);

return statearr_31908;
})();
if(cljs.core.truth_(inst_31726)){
var statearr_31909_31969 = state_31836__$1;
(statearr_31909_31969[(1)] = (13));

} else {
var statearr_31910_31970 = state_31836__$1;
(statearr_31910_31970[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (18))){
var inst_31761 = (state_31836[(2)]);
var state_31836__$1 = state_31836;
var statearr_31911_31971 = state_31836__$1;
(statearr_31911_31971[(2)] = inst_31761);

(statearr_31911_31971[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (42))){
var state_31836__$1 = state_31836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31836__$1,(45),dchan);
} else {
if((state_val_31837 === (37))){
var inst_31704 = (state_31836[(10)]);
var inst_31804 = (state_31836[(23)]);
var inst_31795 = (state_31836[(25)]);
var inst_31804__$1 = cljs.core.first(inst_31795);
var inst_31805 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_31804__$1,inst_31704,done);
var state_31836__$1 = (function (){var statearr_31912 = state_31836;
(statearr_31912[(23)] = inst_31804__$1);

return statearr_31912;
})();
if(cljs.core.truth_(inst_31805)){
var statearr_31913_31972 = state_31836__$1;
(statearr_31913_31972[(1)] = (39));

} else {
var statearr_31914_31973 = state_31836__$1;
(statearr_31914_31973[(1)] = (40));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_31837 === (8))){
var inst_31716 = (state_31836[(14)]);
var inst_31715 = (state_31836[(16)]);
var inst_31718 = (inst_31716 < inst_31715);
var inst_31719 = inst_31718;
var state_31836__$1 = state_31836;
if(cljs.core.truth_(inst_31719)){
var statearr_31915_31974 = state_31836__$1;
(statearr_31915_31974[(1)] = (10));

} else {
var statearr_31916_31975 = state_31836__$1;
(statearr_31916_31975[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___31921,cs,m,dchan,dctr,done))
;
return ((function (switch__30993__auto__,c__31100__auto___31921,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30994__auto__ = null;
var cljs$core$async$mult_$_state_machine__30994__auto____0 = (function (){
var statearr_31917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31917[(0)] = cljs$core$async$mult_$_state_machine__30994__auto__);

(statearr_31917[(1)] = (1));

return statearr_31917;
});
var cljs$core$async$mult_$_state_machine__30994__auto____1 = (function (state_31836){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_31836);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e31918){if((e31918 instanceof Object)){
var ex__30997__auto__ = e31918;
var statearr_31919_31976 = state_31836;
(statearr_31919_31976[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31836);

return cljs.core.cst$kw$recur;
} else {
throw e31918;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__31977 = state_31836;
state_31836 = G__31977;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30994__auto__ = function(state_31836){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30994__auto____1.call(this,state_31836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30994__auto____0;
cljs$core$async$mult_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30994__auto____1;
return cljs$core$async$mult_$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___31921,cs,m,dchan,dctr,done))
})();
var state__31102__auto__ = (function (){var statearr_31920 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_31920[(6)] = c__31100__auto___31921);

return statearr_31920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___31921,cs,m,dchan,dctr,done))
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
var G__31979 = arguments.length;
switch (G__31979) {
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
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___31991 = arguments.length;
var i__4731__auto___31992 = (0);
while(true){
if((i__4731__auto___31992 < len__4730__auto___31991)){
args__4736__auto__.push((arguments[i__4731__auto___31992]));

var G__31993 = (i__4731__auto___31992 + (1));
i__4731__auto___31992 = G__31993;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31985){
var map__31986 = p__31985;
var map__31986__$1 = (((((!((map__31986 == null))))?(((((map__31986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31986):map__31986);
var opts = map__31986__$1;
var statearr_31988_31994 = state;
(statearr_31988_31994[(1)] = cont_block);


var temp__5737__auto__ = cljs.core.async.do_alts(((function (map__31986,map__31986__$1,opts){
return (function (val){
var statearr_31989_31995 = state;
(statearr_31989_31995[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__31986,map__31986__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5737__auto__)){
var cb = temp__5737__auto__;
var statearr_31990_31996 = state;
(statearr_31990_31996[(2)] = cljs.core.deref(cb));


return cljs.core.cst$kw$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31981){
var G__31982 = cljs.core.first(seq31981);
var seq31981__$1 = cljs.core.next(seq31981);
var G__31983 = cljs.core.first(seq31981__$1);
var seq31981__$2 = cljs.core.next(seq31981__$1);
var G__31984 = cljs.core.first(seq31981__$2);
var seq31981__$3 = cljs.core.next(seq31981__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31982,G__31983,G__31984,seq31981__$3);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pause,null,cljs.core.cst$kw$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.cst$kw$solo);
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$mute);
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(cljs.core.cst$kw$solo,chs);
var pauses = pick(cljs.core.cst$kw$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$solos,solos,cljs.core.cst$kw$mutes,pick(cljs.core.cst$kw$mute,chs),cljs.core.cst$kw$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.cst$kw$pause)) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31997 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta31998){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta31998 = meta31998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31999,meta31998__$1){
var self__ = this;
var _31999__$1 = this;
return (new cljs.core.async.t_cljs$core$async31997(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta31998__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31999){
var self__ = this;
var _31999__$1 = this;
return self__.meta31998;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$change,cljs.core.cst$sym$solo_DASH_mode,cljs.core.cst$sym$pick,cljs.core.cst$sym$cs,cljs.core.cst$sym$calc_DASH_state,cljs.core.cst$sym$out,cljs.core.cst$sym$changed,cljs.core.cst$sym$solo_DASH_modes,cljs.core.cst$sym$attrs,cljs.core.cst$sym$meta31998], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31997.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31997";

cljs.core.async.t_cljs$core$async31997.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async31997");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31997.
 */
cljs.core.async.__GT_t_cljs$core$async31997 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31997(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31998){
return (new cljs.core.async.t_cljs$core$async31997(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta31998));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31997(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31100__auto___32161 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___32161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___32161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_32016 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32103_32162 = state_32101__$1;
(statearr_32103_32162[(2)] = inst_32016);

(statearr_32103_32162[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (20))){
var inst_32028 = (state_32101[(7)]);
var state_32101__$1 = state_32101;
var statearr_32104_32163 = state_32101__$1;
(statearr_32104_32163[(2)] = inst_32028);

(statearr_32104_32163[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (27))){
var state_32101__$1 = state_32101;
var statearr_32105_32164 = state_32101__$1;
(statearr_32105_32164[(2)] = null);

(statearr_32105_32164[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (1))){
var inst_32003 = (state_32101[(8)]);
var inst_32003__$1 = calc_state();
var inst_32005 = (inst_32003__$1 == null);
var inst_32006 = cljs.core.not(inst_32005);
var state_32101__$1 = (function (){var statearr_32106 = state_32101;
(statearr_32106[(8)] = inst_32003__$1);

return statearr_32106;
})();
if(inst_32006){
var statearr_32107_32165 = state_32101__$1;
(statearr_32107_32165[(1)] = (2));

} else {
var statearr_32108_32166 = state_32101__$1;
(statearr_32108_32166[(1)] = (3));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (24))){
var inst_32052 = (state_32101[(9)]);
var inst_32075 = (state_32101[(10)]);
var inst_32061 = (state_32101[(11)]);
var inst_32075__$1 = (inst_32052.cljs$core$IFn$_invoke$arity$1 ? inst_32052.cljs$core$IFn$_invoke$arity$1(inst_32061) : inst_32052.call(null,inst_32061));
var state_32101__$1 = (function (){var statearr_32109 = state_32101;
(statearr_32109[(10)] = inst_32075__$1);

return statearr_32109;
})();
if(cljs.core.truth_(inst_32075__$1)){
var statearr_32110_32167 = state_32101__$1;
(statearr_32110_32167[(1)] = (29));

} else {
var statearr_32111_32168 = state_32101__$1;
(statearr_32111_32168[(1)] = (30));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (4))){
var inst_32019 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32019)){
var statearr_32112_32169 = state_32101__$1;
(statearr_32112_32169[(1)] = (8));

} else {
var statearr_32113_32170 = state_32101__$1;
(statearr_32113_32170[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (15))){
var inst_32046 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32046)){
var statearr_32114_32171 = state_32101__$1;
(statearr_32114_32171[(1)] = (19));

} else {
var statearr_32115_32172 = state_32101__$1;
(statearr_32115_32172[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (21))){
var inst_32051 = (state_32101[(12)]);
var inst_32051__$1 = (state_32101[(2)]);
var inst_32052 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32051__$1,cljs.core.cst$kw$solos);
var inst_32053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32051__$1,cljs.core.cst$kw$mutes);
var inst_32054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32051__$1,cljs.core.cst$kw$reads);
var state_32101__$1 = (function (){var statearr_32116 = state_32101;
(statearr_32116[(9)] = inst_32052);

(statearr_32116[(12)] = inst_32051__$1);

(statearr_32116[(13)] = inst_32053);

return statearr_32116;
})();
return cljs.core.async.ioc_alts_BANG_(state_32101__$1,(22),inst_32054);
} else {
if((state_val_32102 === (31))){
var inst_32083 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32083)){
var statearr_32117_32173 = state_32101__$1;
(statearr_32117_32173[(1)] = (32));

} else {
var statearr_32118_32174 = state_32101__$1;
(statearr_32118_32174[(1)] = (33));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (32))){
var inst_32060 = (state_32101[(14)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32101__$1,(35),out,inst_32060);
} else {
if((state_val_32102 === (33))){
var inst_32051 = (state_32101[(12)]);
var inst_32028 = inst_32051;
var state_32101__$1 = (function (){var statearr_32119 = state_32101;
(statearr_32119[(7)] = inst_32028);

return statearr_32119;
})();
var statearr_32120_32175 = state_32101__$1;
(statearr_32120_32175[(2)] = null);

(statearr_32120_32175[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (13))){
var inst_32028 = (state_32101[(7)]);
var inst_32035 = inst_32028.cljs$lang$protocol_mask$partition0$;
var inst_32036 = (inst_32035 & (64));
var inst_32037 = inst_32028.cljs$core$ISeq$;
var inst_32038 = (cljs.core.PROTOCOL_SENTINEL === inst_32037);
var inst_32039 = ((inst_32036) || (inst_32038));
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32039)){
var statearr_32121_32176 = state_32101__$1;
(statearr_32121_32176[(1)] = (16));

} else {
var statearr_32122_32177 = state_32101__$1;
(statearr_32122_32177[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (22))){
var inst_32061 = (state_32101[(11)]);
var inst_32060 = (state_32101[(14)]);
var inst_32059 = (state_32101[(2)]);
var inst_32060__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32059,(0),null);
var inst_32061__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32059,(1),null);
var inst_32062 = (inst_32060__$1 == null);
var inst_32063 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32061__$1,change);
var inst_32064 = ((inst_32062) || (inst_32063));
var state_32101__$1 = (function (){var statearr_32123 = state_32101;
(statearr_32123[(11)] = inst_32061__$1);

(statearr_32123[(14)] = inst_32060__$1);

return statearr_32123;
})();
if(cljs.core.truth_(inst_32064)){
var statearr_32124_32178 = state_32101__$1;
(statearr_32124_32178[(1)] = (23));

} else {
var statearr_32125_32179 = state_32101__$1;
(statearr_32125_32179[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (36))){
var inst_32051 = (state_32101[(12)]);
var inst_32028 = inst_32051;
var state_32101__$1 = (function (){var statearr_32126 = state_32101;
(statearr_32126[(7)] = inst_32028);

return statearr_32126;
})();
var statearr_32127_32180 = state_32101__$1;
(statearr_32127_32180[(2)] = null);

(statearr_32127_32180[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (29))){
var inst_32075 = (state_32101[(10)]);
var state_32101__$1 = state_32101;
var statearr_32128_32181 = state_32101__$1;
(statearr_32128_32181[(2)] = inst_32075);

(statearr_32128_32181[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (6))){
var state_32101__$1 = state_32101;
var statearr_32129_32182 = state_32101__$1;
(statearr_32129_32182[(2)] = false);

(statearr_32129_32182[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (28))){
var inst_32071 = (state_32101[(2)]);
var inst_32072 = calc_state();
var inst_32028 = inst_32072;
var state_32101__$1 = (function (){var statearr_32130 = state_32101;
(statearr_32130[(15)] = inst_32071);

(statearr_32130[(7)] = inst_32028);

return statearr_32130;
})();
var statearr_32131_32183 = state_32101__$1;
(statearr_32131_32183[(2)] = null);

(statearr_32131_32183[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (25))){
var inst_32097 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32132_32184 = state_32101__$1;
(statearr_32132_32184[(2)] = inst_32097);

(statearr_32132_32184[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (34))){
var inst_32095 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32133_32185 = state_32101__$1;
(statearr_32133_32185[(2)] = inst_32095);

(statearr_32133_32185[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (17))){
var state_32101__$1 = state_32101;
var statearr_32134_32186 = state_32101__$1;
(statearr_32134_32186[(2)] = false);

(statearr_32134_32186[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (3))){
var state_32101__$1 = state_32101;
var statearr_32135_32187 = state_32101__$1;
(statearr_32135_32187[(2)] = false);

(statearr_32135_32187[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (12))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (2))){
var inst_32003 = (state_32101[(8)]);
var inst_32008 = inst_32003.cljs$lang$protocol_mask$partition0$;
var inst_32009 = (inst_32008 & (64));
var inst_32010 = inst_32003.cljs$core$ISeq$;
var inst_32011 = (cljs.core.PROTOCOL_SENTINEL === inst_32010);
var inst_32012 = ((inst_32009) || (inst_32011));
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32012)){
var statearr_32136_32188 = state_32101__$1;
(statearr_32136_32188[(1)] = (5));

} else {
var statearr_32137_32189 = state_32101__$1;
(statearr_32137_32189[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (23))){
var inst_32060 = (state_32101[(14)]);
var inst_32066 = (inst_32060 == null);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32066)){
var statearr_32138_32190 = state_32101__$1;
(statearr_32138_32190[(1)] = (26));

} else {
var statearr_32139_32191 = state_32101__$1;
(statearr_32139_32191[(1)] = (27));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (35))){
var inst_32086 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32086)){
var statearr_32140_32192 = state_32101__$1;
(statearr_32140_32192[(1)] = (36));

} else {
var statearr_32141_32193 = state_32101__$1;
(statearr_32141_32193[(1)] = (37));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (19))){
var inst_32028 = (state_32101[(7)]);
var inst_32048 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32028);
var state_32101__$1 = state_32101;
var statearr_32142_32194 = state_32101__$1;
(statearr_32142_32194[(2)] = inst_32048);

(statearr_32142_32194[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (11))){
var inst_32028 = (state_32101[(7)]);
var inst_32032 = (inst_32028 == null);
var inst_32033 = cljs.core.not(inst_32032);
var state_32101__$1 = state_32101;
if(inst_32033){
var statearr_32143_32195 = state_32101__$1;
(statearr_32143_32195[(1)] = (13));

} else {
var statearr_32144_32196 = state_32101__$1;
(statearr_32144_32196[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (9))){
var inst_32003 = (state_32101[(8)]);
var state_32101__$1 = state_32101;
var statearr_32145_32197 = state_32101__$1;
(statearr_32145_32197[(2)] = inst_32003);

(statearr_32145_32197[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (5))){
var state_32101__$1 = state_32101;
var statearr_32146_32198 = state_32101__$1;
(statearr_32146_32198[(2)] = true);

(statearr_32146_32198[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (14))){
var state_32101__$1 = state_32101;
var statearr_32147_32199 = state_32101__$1;
(statearr_32147_32199[(2)] = false);

(statearr_32147_32199[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (26))){
var inst_32061 = (state_32101[(11)]);
var inst_32068 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_32061);
var state_32101__$1 = state_32101;
var statearr_32148_32200 = state_32101__$1;
(statearr_32148_32200[(2)] = inst_32068);

(statearr_32148_32200[(1)] = (28));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (16))){
var state_32101__$1 = state_32101;
var statearr_32149_32201 = state_32101__$1;
(statearr_32149_32201[(2)] = true);

(statearr_32149_32201[(1)] = (18));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (38))){
var inst_32091 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32150_32202 = state_32101__$1;
(statearr_32150_32202[(2)] = inst_32091);

(statearr_32150_32202[(1)] = (34));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (30))){
var inst_32052 = (state_32101[(9)]);
var inst_32061 = (state_32101[(11)]);
var inst_32053 = (state_32101[(13)]);
var inst_32078 = cljs.core.empty_QMARK_(inst_32052);
var inst_32079 = (inst_32053.cljs$core$IFn$_invoke$arity$1 ? inst_32053.cljs$core$IFn$_invoke$arity$1(inst_32061) : inst_32053.call(null,inst_32061));
var inst_32080 = cljs.core.not(inst_32079);
var inst_32081 = ((inst_32078) && (inst_32080));
var state_32101__$1 = state_32101;
var statearr_32151_32203 = state_32101__$1;
(statearr_32151_32203[(2)] = inst_32081);

(statearr_32151_32203[(1)] = (31));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (10))){
var inst_32003 = (state_32101[(8)]);
var inst_32024 = (state_32101[(2)]);
var inst_32025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32024,cljs.core.cst$kw$solos);
var inst_32026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32024,cljs.core.cst$kw$mutes);
var inst_32027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32024,cljs.core.cst$kw$reads);
var inst_32028 = inst_32003;
var state_32101__$1 = (function (){var statearr_32152 = state_32101;
(statearr_32152[(16)] = inst_32027);

(statearr_32152[(17)] = inst_32025);

(statearr_32152[(7)] = inst_32028);

(statearr_32152[(18)] = inst_32026);

return statearr_32152;
})();
var statearr_32153_32204 = state_32101__$1;
(statearr_32153_32204[(2)] = null);

(statearr_32153_32204[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (18))){
var inst_32043 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32154_32205 = state_32101__$1;
(statearr_32154_32205[(2)] = inst_32043);

(statearr_32154_32205[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (37))){
var state_32101__$1 = state_32101;
var statearr_32155_32206 = state_32101__$1;
(statearr_32155_32206[(2)] = null);

(statearr_32155_32206[(1)] = (38));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32102 === (8))){
var inst_32003 = (state_32101[(8)]);
var inst_32021 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32003);
var state_32101__$1 = state_32101;
var statearr_32156_32207 = state_32101__$1;
(statearr_32156_32207[(2)] = inst_32021);

(statearr_32156_32207[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___32161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30993__auto__,c__31100__auto___32161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30994__auto__ = null;
var cljs$core$async$mix_$_state_machine__30994__auto____0 = (function (){
var statearr_32157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32157[(0)] = cljs$core$async$mix_$_state_machine__30994__auto__);

(statearr_32157[(1)] = (1));

return statearr_32157;
});
var cljs$core$async$mix_$_state_machine__30994__auto____1 = (function (state_32101){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32101);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32158){if((e32158 instanceof Object)){
var ex__30997__auto__ = e32158;
var statearr_32159_32208 = state_32101;
(statearr_32159_32208[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32101);

return cljs.core.cst$kw$recur;
} else {
throw e32158;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32209 = state_32101;
state_32101 = G__32209;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30994__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30994__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30994__auto____0;
cljs$core$async$mix_$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30994__auto____1;
return cljs$core$async$mix_$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___32161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__31102__auto__ = (function (){var statearr_32160 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32160[(6)] = c__31100__auto___32161);

return statearr_32160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___32161,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__32211 = arguments.length;
switch (G__32211) {
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
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
var G__32215 = arguments.length;
switch (G__32215) {
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
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__32213_SHARP_){
if(cljs.core.truth_((p1__32213_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__32213_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__32213_SHARP_.call(null,topic)))){
return p1__32213_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__32213_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32216 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32216 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta32217){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta32217 = meta32217;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32218,meta32217__$1){
var self__ = this;
var _32218__$1 = this;
return (new cljs.core.async.t_cljs$core$async32216(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta32217__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32218){
var self__ = this;
var _32218__$1 = this;
return self__.meta32217;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5737__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5737__auto__)){
var m = temp__5737__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32216.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32216.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$ch,cljs.core.cst$sym$topic_DASH_fn,cljs.core.cst$sym$buf_DASH_fn,cljs.core.cst$sym$mults,cljs.core.cst$sym$ensure_DASH_mult,cljs.core.cst$sym$meta32217], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async32216.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32216.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32216";

cljs.core.async.t_cljs$core$async32216.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32216");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32216.
 */
cljs.core.async.__GT_t_cljs$core$async32216 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async32216(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32217){
return (new cljs.core.async.t_cljs$core$async32216(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta32217));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async32216(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__31100__auto___32336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___32336,mults,ensure_mult,p){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___32336,mults,ensure_mult,p){
return (function (state_32290){
var state_val_32291 = (state_32290[(1)]);
if((state_val_32291 === (7))){
var inst_32286 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32292_32337 = state_32290__$1;
(statearr_32292_32337[(2)] = inst_32286);

(statearr_32292_32337[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (20))){
var state_32290__$1 = state_32290;
var statearr_32293_32338 = state_32290__$1;
(statearr_32293_32338[(2)] = null);

(statearr_32293_32338[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (1))){
var state_32290__$1 = state_32290;
var statearr_32294_32339 = state_32290__$1;
(statearr_32294_32339[(2)] = null);

(statearr_32294_32339[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (24))){
var inst_32269 = (state_32290[(7)]);
var inst_32278 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_32269);
var state_32290__$1 = state_32290;
var statearr_32295_32340 = state_32290__$1;
(statearr_32295_32340[(2)] = inst_32278);

(statearr_32295_32340[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (4))){
var inst_32221 = (state_32290[(8)]);
var inst_32221__$1 = (state_32290[(2)]);
var inst_32222 = (inst_32221__$1 == null);
var state_32290__$1 = (function (){var statearr_32296 = state_32290;
(statearr_32296[(8)] = inst_32221__$1);

return statearr_32296;
})();
if(cljs.core.truth_(inst_32222)){
var statearr_32297_32341 = state_32290__$1;
(statearr_32297_32341[(1)] = (5));

} else {
var statearr_32298_32342 = state_32290__$1;
(statearr_32298_32342[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (15))){
var inst_32263 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32299_32343 = state_32290__$1;
(statearr_32299_32343[(2)] = inst_32263);

(statearr_32299_32343[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (21))){
var inst_32283 = (state_32290[(2)]);
var state_32290__$1 = (function (){var statearr_32300 = state_32290;
(statearr_32300[(9)] = inst_32283);

return statearr_32300;
})();
var statearr_32301_32344 = state_32290__$1;
(statearr_32301_32344[(2)] = null);

(statearr_32301_32344[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (13))){
var inst_32245 = (state_32290[(10)]);
var inst_32247 = cljs.core.chunked_seq_QMARK_(inst_32245);
var state_32290__$1 = state_32290;
if(inst_32247){
var statearr_32302_32345 = state_32290__$1;
(statearr_32302_32345[(1)] = (16));

} else {
var statearr_32303_32346 = state_32290__$1;
(statearr_32303_32346[(1)] = (17));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (22))){
var inst_32275 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
if(cljs.core.truth_(inst_32275)){
var statearr_32304_32347 = state_32290__$1;
(statearr_32304_32347[(1)] = (23));

} else {
var statearr_32305_32348 = state_32290__$1;
(statearr_32305_32348[(1)] = (24));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (6))){
var inst_32269 = (state_32290[(7)]);
var inst_32221 = (state_32290[(8)]);
var inst_32271 = (state_32290[(11)]);
var inst_32269__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_32221) : topic_fn.call(null,inst_32221));
var inst_32270 = cljs.core.deref(mults);
var inst_32271__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32270,inst_32269__$1);
var state_32290__$1 = (function (){var statearr_32306 = state_32290;
(statearr_32306[(7)] = inst_32269__$1);

(statearr_32306[(11)] = inst_32271__$1);

return statearr_32306;
})();
if(cljs.core.truth_(inst_32271__$1)){
var statearr_32307_32349 = state_32290__$1;
(statearr_32307_32349[(1)] = (19));

} else {
var statearr_32308_32350 = state_32290__$1;
(statearr_32308_32350[(1)] = (20));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (25))){
var inst_32280 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32309_32351 = state_32290__$1;
(statearr_32309_32351[(2)] = inst_32280);

(statearr_32309_32351[(1)] = (21));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (17))){
var inst_32245 = (state_32290[(10)]);
var inst_32254 = cljs.core.first(inst_32245);
var inst_32255 = cljs.core.async.muxch_STAR_(inst_32254);
var inst_32256 = cljs.core.async.close_BANG_(inst_32255);
var inst_32257 = cljs.core.next(inst_32245);
var inst_32231 = inst_32257;
var inst_32232 = null;
var inst_32233 = (0);
var inst_32234 = (0);
var state_32290__$1 = (function (){var statearr_32310 = state_32290;
(statearr_32310[(12)] = inst_32234);

(statearr_32310[(13)] = inst_32233);

(statearr_32310[(14)] = inst_32232);

(statearr_32310[(15)] = inst_32256);

(statearr_32310[(16)] = inst_32231);

return statearr_32310;
})();
var statearr_32311_32352 = state_32290__$1;
(statearr_32311_32352[(2)] = null);

(statearr_32311_32352[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (3))){
var inst_32288 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32290__$1,inst_32288);
} else {
if((state_val_32291 === (12))){
var inst_32265 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32312_32353 = state_32290__$1;
(statearr_32312_32353[(2)] = inst_32265);

(statearr_32312_32353[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (2))){
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32290__$1,(4),ch);
} else {
if((state_val_32291 === (23))){
var state_32290__$1 = state_32290;
var statearr_32313_32354 = state_32290__$1;
(statearr_32313_32354[(2)] = null);

(statearr_32313_32354[(1)] = (25));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (19))){
var inst_32221 = (state_32290[(8)]);
var inst_32271 = (state_32290[(11)]);
var inst_32273 = cljs.core.async.muxch_STAR_(inst_32271);
var state_32290__$1 = state_32290;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32290__$1,(22),inst_32273,inst_32221);
} else {
if((state_val_32291 === (11))){
var inst_32245 = (state_32290[(10)]);
var inst_32231 = (state_32290[(16)]);
var inst_32245__$1 = cljs.core.seq(inst_32231);
var state_32290__$1 = (function (){var statearr_32314 = state_32290;
(statearr_32314[(10)] = inst_32245__$1);

return statearr_32314;
})();
if(inst_32245__$1){
var statearr_32315_32355 = state_32290__$1;
(statearr_32315_32355[(1)] = (13));

} else {
var statearr_32316_32356 = state_32290__$1;
(statearr_32316_32356[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (9))){
var inst_32267 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32317_32357 = state_32290__$1;
(statearr_32317_32357[(2)] = inst_32267);

(statearr_32317_32357[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (5))){
var inst_32228 = cljs.core.deref(mults);
var inst_32229 = cljs.core.vals(inst_32228);
var inst_32230 = cljs.core.seq(inst_32229);
var inst_32231 = inst_32230;
var inst_32232 = null;
var inst_32233 = (0);
var inst_32234 = (0);
var state_32290__$1 = (function (){var statearr_32318 = state_32290;
(statearr_32318[(12)] = inst_32234);

(statearr_32318[(13)] = inst_32233);

(statearr_32318[(14)] = inst_32232);

(statearr_32318[(16)] = inst_32231);

return statearr_32318;
})();
var statearr_32319_32358 = state_32290__$1;
(statearr_32319_32358[(2)] = null);

(statearr_32319_32358[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (14))){
var state_32290__$1 = state_32290;
var statearr_32323_32359 = state_32290__$1;
(statearr_32323_32359[(2)] = null);

(statearr_32323_32359[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (16))){
var inst_32245 = (state_32290[(10)]);
var inst_32249 = cljs.core.chunk_first(inst_32245);
var inst_32250 = cljs.core.chunk_rest(inst_32245);
var inst_32251 = cljs.core.count(inst_32249);
var inst_32231 = inst_32250;
var inst_32232 = inst_32249;
var inst_32233 = inst_32251;
var inst_32234 = (0);
var state_32290__$1 = (function (){var statearr_32324 = state_32290;
(statearr_32324[(12)] = inst_32234);

(statearr_32324[(13)] = inst_32233);

(statearr_32324[(14)] = inst_32232);

(statearr_32324[(16)] = inst_32231);

return statearr_32324;
})();
var statearr_32325_32360 = state_32290__$1;
(statearr_32325_32360[(2)] = null);

(statearr_32325_32360[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (10))){
var inst_32234 = (state_32290[(12)]);
var inst_32233 = (state_32290[(13)]);
var inst_32232 = (state_32290[(14)]);
var inst_32231 = (state_32290[(16)]);
var inst_32239 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32232,inst_32234);
var inst_32240 = cljs.core.async.muxch_STAR_(inst_32239);
var inst_32241 = cljs.core.async.close_BANG_(inst_32240);
var inst_32242 = (inst_32234 + (1));
var tmp32320 = inst_32233;
var tmp32321 = inst_32232;
var tmp32322 = inst_32231;
var inst_32231__$1 = tmp32322;
var inst_32232__$1 = tmp32321;
var inst_32233__$1 = tmp32320;
var inst_32234__$1 = inst_32242;
var state_32290__$1 = (function (){var statearr_32326 = state_32290;
(statearr_32326[(12)] = inst_32234__$1);

(statearr_32326[(13)] = inst_32233__$1);

(statearr_32326[(14)] = inst_32232__$1);

(statearr_32326[(17)] = inst_32241);

(statearr_32326[(16)] = inst_32231__$1);

return statearr_32326;
})();
var statearr_32327_32361 = state_32290__$1;
(statearr_32327_32361[(2)] = null);

(statearr_32327_32361[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (18))){
var inst_32260 = (state_32290[(2)]);
var state_32290__$1 = state_32290;
var statearr_32328_32362 = state_32290__$1;
(statearr_32328_32362[(2)] = inst_32260);

(statearr_32328_32362[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32291 === (8))){
var inst_32234 = (state_32290[(12)]);
var inst_32233 = (state_32290[(13)]);
var inst_32236 = (inst_32234 < inst_32233);
var inst_32237 = inst_32236;
var state_32290__$1 = state_32290;
if(cljs.core.truth_(inst_32237)){
var statearr_32329_32363 = state_32290__$1;
(statearr_32329_32363[(1)] = (10));

} else {
var statearr_32330_32364 = state_32290__$1;
(statearr_32330_32364[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___32336,mults,ensure_mult,p))
;
return ((function (switch__30993__auto__,c__31100__auto___32336,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_32331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32331[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_32331[(1)] = (1));

return statearr_32331;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_32290){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32290);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32332){if((e32332 instanceof Object)){
var ex__30997__auto__ = e32332;
var statearr_32333_32365 = state_32290;
(statearr_32333_32365[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32290);

return cljs.core.cst$kw$recur;
} else {
throw e32332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32366 = state_32290;
state_32290 = G__32366;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_32290){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_32290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___32336,mults,ensure_mult,p))
})();
var state__31102__auto__ = (function (){var statearr_32334 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32334[(6)] = c__31100__auto___32336);

return statearr_32334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___32336,mults,ensure_mult,p))
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
var G__32368 = arguments.length;
switch (G__32368) {
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
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__32371 = arguments.length;
switch (G__32371) {
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
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
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
var G__32374 = arguments.length;
switch (G__32374) {
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
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__31100__auto___32441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___32441,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___32441,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32413){
var state_val_32414 = (state_32413[(1)]);
if((state_val_32414 === (7))){
var state_32413__$1 = state_32413;
var statearr_32415_32442 = state_32413__$1;
(statearr_32415_32442[(2)] = null);

(statearr_32415_32442[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (1))){
var state_32413__$1 = state_32413;
var statearr_32416_32443 = state_32413__$1;
(statearr_32416_32443[(2)] = null);

(statearr_32416_32443[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (4))){
var inst_32377 = (state_32413[(7)]);
var inst_32379 = (inst_32377 < cnt);
var state_32413__$1 = state_32413;
if(cljs.core.truth_(inst_32379)){
var statearr_32417_32444 = state_32413__$1;
(statearr_32417_32444[(1)] = (6));

} else {
var statearr_32418_32445 = state_32413__$1;
(statearr_32418_32445[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (15))){
var inst_32409 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32419_32446 = state_32413__$1;
(statearr_32419_32446[(2)] = inst_32409);

(statearr_32419_32446[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (13))){
var inst_32402 = cljs.core.async.close_BANG_(out);
var state_32413__$1 = state_32413;
var statearr_32420_32447 = state_32413__$1;
(statearr_32420_32447[(2)] = inst_32402);

(statearr_32420_32447[(1)] = (15));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (6))){
var state_32413__$1 = state_32413;
var statearr_32421_32448 = state_32413__$1;
(statearr_32421_32448[(2)] = null);

(statearr_32421_32448[(1)] = (11));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (3))){
var inst_32411 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32413__$1,inst_32411);
} else {
if((state_val_32414 === (12))){
var inst_32399 = (state_32413[(8)]);
var inst_32399__$1 = (state_32413[(2)]);
var inst_32400 = cljs.core.some(cljs.core.nil_QMARK_,inst_32399__$1);
var state_32413__$1 = (function (){var statearr_32422 = state_32413;
(statearr_32422[(8)] = inst_32399__$1);

return statearr_32422;
})();
if(cljs.core.truth_(inst_32400)){
var statearr_32423_32449 = state_32413__$1;
(statearr_32423_32449[(1)] = (13));

} else {
var statearr_32424_32450 = state_32413__$1;
(statearr_32424_32450[(1)] = (14));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (2))){
var inst_32376 = cljs.core.reset_BANG_(dctr,cnt);
var inst_32377 = (0);
var state_32413__$1 = (function (){var statearr_32425 = state_32413;
(statearr_32425[(7)] = inst_32377);

(statearr_32425[(9)] = inst_32376);

return statearr_32425;
})();
var statearr_32426_32451 = state_32413__$1;
(statearr_32426_32451[(2)] = null);

(statearr_32426_32451[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (11))){
var inst_32377 = (state_32413[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_32413,(10),Object,null,(9));
var inst_32386 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_32377) : chs__$1.call(null,inst_32377));
var inst_32387 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_32377) : done.call(null,inst_32377));
var inst_32388 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_32386,inst_32387);
var state_32413__$1 = state_32413;
var statearr_32427_32452 = state_32413__$1;
(statearr_32427_32452[(2)] = inst_32388);


cljs.core.async.impl.ioc_helpers.process_exception(state_32413__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (9))){
var inst_32377 = (state_32413[(7)]);
var inst_32390 = (state_32413[(2)]);
var inst_32391 = (inst_32377 + (1));
var inst_32377__$1 = inst_32391;
var state_32413__$1 = (function (){var statearr_32428 = state_32413;
(statearr_32428[(7)] = inst_32377__$1);

(statearr_32428[(10)] = inst_32390);

return statearr_32428;
})();
var statearr_32429_32453 = state_32413__$1;
(statearr_32429_32453[(2)] = null);

(statearr_32429_32453[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (5))){
var inst_32397 = (state_32413[(2)]);
var state_32413__$1 = (function (){var statearr_32430 = state_32413;
(statearr_32430[(11)] = inst_32397);

return statearr_32430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32413__$1,(12),dchan);
} else {
if((state_val_32414 === (14))){
var inst_32399 = (state_32413[(8)]);
var inst_32404 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_32399);
var state_32413__$1 = state_32413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32413__$1,(16),out,inst_32404);
} else {
if((state_val_32414 === (16))){
var inst_32406 = (state_32413[(2)]);
var state_32413__$1 = (function (){var statearr_32431 = state_32413;
(statearr_32431[(12)] = inst_32406);

return statearr_32431;
})();
var statearr_32432_32454 = state_32413__$1;
(statearr_32432_32454[(2)] = null);

(statearr_32432_32454[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (10))){
var inst_32381 = (state_32413[(2)]);
var inst_32382 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_32413__$1 = (function (){var statearr_32433 = state_32413;
(statearr_32433[(13)] = inst_32381);

return statearr_32433;
})();
var statearr_32434_32455 = state_32413__$1;
(statearr_32434_32455[(2)] = inst_32382);


cljs.core.async.impl.ioc_helpers.process_exception(state_32413__$1);

return cljs.core.cst$kw$recur;
} else {
if((state_val_32414 === (8))){
var inst_32395 = (state_32413[(2)]);
var state_32413__$1 = state_32413;
var statearr_32435_32456 = state_32413__$1;
(statearr_32435_32456[(2)] = inst_32395);

(statearr_32435_32456[(1)] = (5));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___32441,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30993__auto__,c__31100__auto___32441,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_32436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32436[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_32436[(1)] = (1));

return statearr_32436;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_32413){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32413);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32437){if((e32437 instanceof Object)){
var ex__30997__auto__ = e32437;
var statearr_32438_32457 = state_32413;
(statearr_32438_32457[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32413);

return cljs.core.cst$kw$recur;
} else {
throw e32437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32458 = state_32413;
state_32413 = G__32458;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_32413){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_32413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___32441,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__31102__auto__ = (function (){var statearr_32439 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32439[(6)] = c__31100__auto___32441);

return statearr_32439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___32441,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__32461 = arguments.length;
switch (G__32461) {
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
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31100__auto___32515 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___32515,out){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___32515,out){
return (function (state_32493){
var state_val_32494 = (state_32493[(1)]);
if((state_val_32494 === (7))){
var inst_32473 = (state_32493[(7)]);
var inst_32472 = (state_32493[(8)]);
var inst_32472__$1 = (state_32493[(2)]);
var inst_32473__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32472__$1,(0),null);
var inst_32474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32472__$1,(1),null);
var inst_32475 = (inst_32473__$1 == null);
var state_32493__$1 = (function (){var statearr_32495 = state_32493;
(statearr_32495[(9)] = inst_32474);

(statearr_32495[(7)] = inst_32473__$1);

(statearr_32495[(8)] = inst_32472__$1);

return statearr_32495;
})();
if(cljs.core.truth_(inst_32475)){
var statearr_32496_32516 = state_32493__$1;
(statearr_32496_32516[(1)] = (8));

} else {
var statearr_32497_32517 = state_32493__$1;
(statearr_32497_32517[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32494 === (1))){
var inst_32462 = cljs.core.vec(chs);
var inst_32463 = inst_32462;
var state_32493__$1 = (function (){var statearr_32498 = state_32493;
(statearr_32498[(10)] = inst_32463);

return statearr_32498;
})();
var statearr_32499_32518 = state_32493__$1;
(statearr_32499_32518[(2)] = null);

(statearr_32499_32518[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32494 === (4))){
var inst_32463 = (state_32493[(10)]);
var state_32493__$1 = state_32493;
return cljs.core.async.ioc_alts_BANG_(state_32493__$1,(7),inst_32463);
} else {
if((state_val_32494 === (6))){
var inst_32489 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32500_32519 = state_32493__$1;
(statearr_32500_32519[(2)] = inst_32489);

(statearr_32500_32519[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32494 === (3))){
var inst_32491 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32493__$1,inst_32491);
} else {
if((state_val_32494 === (2))){
var inst_32463 = (state_32493[(10)]);
var inst_32465 = cljs.core.count(inst_32463);
var inst_32466 = (inst_32465 > (0));
var state_32493__$1 = state_32493;
if(cljs.core.truth_(inst_32466)){
var statearr_32502_32520 = state_32493__$1;
(statearr_32502_32520[(1)] = (4));

} else {
var statearr_32503_32521 = state_32493__$1;
(statearr_32503_32521[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32494 === (11))){
var inst_32463 = (state_32493[(10)]);
var inst_32482 = (state_32493[(2)]);
var tmp32501 = inst_32463;
var inst_32463__$1 = tmp32501;
var state_32493__$1 = (function (){var statearr_32504 = state_32493;
(statearr_32504[(11)] = inst_32482);

(statearr_32504[(10)] = inst_32463__$1);

return statearr_32504;
})();
var statearr_32505_32522 = state_32493__$1;
(statearr_32505_32522[(2)] = null);

(statearr_32505_32522[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32494 === (9))){
var inst_32473 = (state_32493[(7)]);
var state_32493__$1 = state_32493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32493__$1,(11),out,inst_32473);
} else {
if((state_val_32494 === (5))){
var inst_32487 = cljs.core.async.close_BANG_(out);
var state_32493__$1 = state_32493;
var statearr_32506_32523 = state_32493__$1;
(statearr_32506_32523[(2)] = inst_32487);

(statearr_32506_32523[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32494 === (10))){
var inst_32485 = (state_32493[(2)]);
var state_32493__$1 = state_32493;
var statearr_32507_32524 = state_32493__$1;
(statearr_32507_32524[(2)] = inst_32485);

(statearr_32507_32524[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32494 === (8))){
var inst_32474 = (state_32493[(9)]);
var inst_32473 = (state_32493[(7)]);
var inst_32463 = (state_32493[(10)]);
var inst_32472 = (state_32493[(8)]);
var inst_32477 = (function (){var cs = inst_32463;
var vec__32468 = inst_32472;
var v = inst_32473;
var c = inst_32474;
return ((function (cs,vec__32468,v,c,inst_32474,inst_32473,inst_32463,inst_32472,state_val_32494,c__31100__auto___32515,out){
return (function (p1__32459_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__32459_SHARP_);
});
;})(cs,vec__32468,v,c,inst_32474,inst_32473,inst_32463,inst_32472,state_val_32494,c__31100__auto___32515,out))
})();
var inst_32478 = cljs.core.filterv(inst_32477,inst_32463);
var inst_32463__$1 = inst_32478;
var state_32493__$1 = (function (){var statearr_32508 = state_32493;
(statearr_32508[(10)] = inst_32463__$1);

return statearr_32508;
})();
var statearr_32509_32525 = state_32493__$1;
(statearr_32509_32525[(2)] = null);

(statearr_32509_32525[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___32515,out))
;
return ((function (switch__30993__auto__,c__31100__auto___32515,out){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_32510 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32510[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_32510[(1)] = (1));

return statearr_32510;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_32493){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32493);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32511){if((e32511 instanceof Object)){
var ex__30997__auto__ = e32511;
var statearr_32512_32526 = state_32493;
(statearr_32512_32526[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32493);

return cljs.core.cst$kw$recur;
} else {
throw e32511;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32527 = state_32493;
state_32493 = G__32527;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_32493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_32493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___32515,out))
})();
var state__31102__auto__ = (function (){var statearr_32513 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32513[(6)] = c__31100__auto___32515);

return statearr_32513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___32515,out))
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
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__32529 = arguments.length;
switch (G__32529) {
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
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31100__auto___32574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___32574,out){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___32574,out){
return (function (state_32553){
var state_val_32554 = (state_32553[(1)]);
if((state_val_32554 === (7))){
var inst_32535 = (state_32553[(7)]);
var inst_32535__$1 = (state_32553[(2)]);
var inst_32536 = (inst_32535__$1 == null);
var inst_32537 = cljs.core.not(inst_32536);
var state_32553__$1 = (function (){var statearr_32555 = state_32553;
(statearr_32555[(7)] = inst_32535__$1);

return statearr_32555;
})();
if(inst_32537){
var statearr_32556_32575 = state_32553__$1;
(statearr_32556_32575[(1)] = (8));

} else {
var statearr_32557_32576 = state_32553__$1;
(statearr_32557_32576[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32554 === (1))){
var inst_32530 = (0);
var state_32553__$1 = (function (){var statearr_32558 = state_32553;
(statearr_32558[(8)] = inst_32530);

return statearr_32558;
})();
var statearr_32559_32577 = state_32553__$1;
(statearr_32559_32577[(2)] = null);

(statearr_32559_32577[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32554 === (4))){
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32553__$1,(7),ch);
} else {
if((state_val_32554 === (6))){
var inst_32548 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32560_32578 = state_32553__$1;
(statearr_32560_32578[(2)] = inst_32548);

(statearr_32560_32578[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32554 === (3))){
var inst_32550 = (state_32553[(2)]);
var inst_32551 = cljs.core.async.close_BANG_(out);
var state_32553__$1 = (function (){var statearr_32561 = state_32553;
(statearr_32561[(9)] = inst_32550);

return statearr_32561;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32553__$1,inst_32551);
} else {
if((state_val_32554 === (2))){
var inst_32530 = (state_32553[(8)]);
var inst_32532 = (inst_32530 < n);
var state_32553__$1 = state_32553;
if(cljs.core.truth_(inst_32532)){
var statearr_32562_32579 = state_32553__$1;
(statearr_32562_32579[(1)] = (4));

} else {
var statearr_32563_32580 = state_32553__$1;
(statearr_32563_32580[(1)] = (5));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32554 === (11))){
var inst_32530 = (state_32553[(8)]);
var inst_32540 = (state_32553[(2)]);
var inst_32541 = (inst_32530 + (1));
var inst_32530__$1 = inst_32541;
var state_32553__$1 = (function (){var statearr_32564 = state_32553;
(statearr_32564[(10)] = inst_32540);

(statearr_32564[(8)] = inst_32530__$1);

return statearr_32564;
})();
var statearr_32565_32581 = state_32553__$1;
(statearr_32565_32581[(2)] = null);

(statearr_32565_32581[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32554 === (9))){
var state_32553__$1 = state_32553;
var statearr_32566_32582 = state_32553__$1;
(statearr_32566_32582[(2)] = null);

(statearr_32566_32582[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32554 === (5))){
var state_32553__$1 = state_32553;
var statearr_32567_32583 = state_32553__$1;
(statearr_32567_32583[(2)] = null);

(statearr_32567_32583[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32554 === (10))){
var inst_32545 = (state_32553[(2)]);
var state_32553__$1 = state_32553;
var statearr_32568_32584 = state_32553__$1;
(statearr_32568_32584[(2)] = inst_32545);

(statearr_32568_32584[(1)] = (6));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32554 === (8))){
var inst_32535 = (state_32553[(7)]);
var state_32553__$1 = state_32553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32553__$1,(11),out,inst_32535);
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
});})(c__31100__auto___32574,out))
;
return ((function (switch__30993__auto__,c__31100__auto___32574,out){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_32569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32569[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_32569[(1)] = (1));

return statearr_32569;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_32553){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32553);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32570){if((e32570 instanceof Object)){
var ex__30997__auto__ = e32570;
var statearr_32571_32585 = state_32553;
(statearr_32571_32585[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32553);

return cljs.core.cst$kw$recur;
} else {
throw e32570;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32586 = state_32553;
state_32553 = G__32586;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_32553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_32553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___32574,out))
})();
var state__31102__auto__ = (function (){var statearr_32572 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32572[(6)] = c__31100__auto___32574);

return statearr_32572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___32574,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32588 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32588 = (function (f,ch,meta32589){
this.f = f;
this.ch = ch;
this.meta32589 = meta32589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32590,meta32589__$1){
var self__ = this;
var _32590__$1 = this;
return (new cljs.core.async.t_cljs$core$async32588(self__.f,self__.ch,meta32589__$1));
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32590){
var self__ = this;
var _32590__$1 = this;
return self__.meta32589;
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32591 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32591 = (function (f,ch,meta32589,_,fn1,meta32592){
this.f = f;
this.ch = ch;
this.meta32589 = meta32589;
this._ = _;
this.fn1 = fn1;
this.meta32592 = meta32592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32593,meta32592__$1){
var self__ = this;
var _32593__$1 = this;
return (new cljs.core.async.t_cljs$core$async32591(self__.f,self__.ch,self__.meta32589,self__._,self__.fn1,meta32592__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32593){
var self__ = this;
var _32593__$1 = this;
return self__.meta32592;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32591.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32591.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32587_SHARP_){
var G__32594 = (((p1__32587_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__32587_SHARP_) : self__.f.call(null,p1__32587_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__32594) : f1.call(null,G__32594));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32591.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32589,cljs.core.with_meta(cljs.core.cst$sym$_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tag,cljs.core.cst$sym$cljs$core$async_SLASH_t_cljs$core$async32588], null)),cljs.core.cst$sym$fn1,cljs.core.cst$sym$meta32592], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32591";

cljs.core.async.t_cljs$core$async32591.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32591");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32591.
 */
cljs.core.async.__GT_t_cljs$core$async32591 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32591(f__$1,ch__$1,meta32589__$1,___$2,fn1__$1,meta32592){
return (new cljs.core.async.t_cljs$core$async32591(f__$1,ch__$1,meta32589__$1,___$2,fn1__$1,meta32592));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32591(self__.f,self__.ch,self__.meta32589,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__32595 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__32595) : self__.f.call(null,G__32595));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32589], null);
});

cljs.core.async.t_cljs$core$async32588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32588";

cljs.core.async.t_cljs$core$async32588.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32588");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32588.
 */
cljs.core.async.__GT_t_cljs$core$async32588 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32588(f__$1,ch__$1,meta32589){
return (new cljs.core.async.t_cljs$core$async32588(f__$1,ch__$1,meta32589));
});

}

return (new cljs.core.async.t_cljs$core$async32588(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32596 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32596 = (function (f,ch,meta32597){
this.f = f;
this.ch = ch;
this.meta32597 = meta32597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32598,meta32597__$1){
var self__ = this;
var _32598__$1 = this;
return (new cljs.core.async.t_cljs$core$async32596(self__.f,self__.ch,meta32597__$1));
});

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32598){
var self__ = this;
var _32598__$1 = this;
return self__.meta32597;
});

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async32596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$f,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32597], null);
});

cljs.core.async.t_cljs$core$async32596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32596";

cljs.core.async.t_cljs$core$async32596.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32596");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32596.
 */
cljs.core.async.__GT_t_cljs$core$async32596 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32596(f__$1,ch__$1,meta32597){
return (new cljs.core.async.t_cljs$core$async32596(f__$1,ch__$1,meta32597));
});

}

return (new cljs.core.async.t_cljs$core$async32596(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32599 = (function (p,ch,meta32600){
this.p = p;
this.ch = ch;
this.meta32600 = meta32600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32601,meta32600__$1){
var self__ = this;
var _32601__$1 = this;
return (new cljs.core.async.t_cljs$core$async32599(self__.p,self__.ch,meta32600__$1));
});

cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32601){
var self__ = this;
var _32601__$1 = this;
return self__.meta32600;
});

cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32599.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32599.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$p,cljs.core.cst$sym$ch,cljs.core.cst$sym$meta32600], null);
});

cljs.core.async.t_cljs$core$async32599.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32599.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32599";

cljs.core.async.t_cljs$core$async32599.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async32599");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32599.
 */
cljs.core.async.__GT_t_cljs$core$async32599 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32599(p__$1,ch__$1,meta32600){
return (new cljs.core.async.t_cljs$core$async32599(p__$1,ch__$1,meta32600));
});

}

return (new cljs.core.async.t_cljs$core$async32599(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__32603 = arguments.length;
switch (G__32603) {
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
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31100__auto___32643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___32643,out){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___32643,out){
return (function (state_32624){
var state_val_32625 = (state_32624[(1)]);
if((state_val_32625 === (7))){
var inst_32620 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32626_32644 = state_32624__$1;
(statearr_32626_32644[(2)] = inst_32620);

(statearr_32626_32644[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32625 === (1))){
var state_32624__$1 = state_32624;
var statearr_32627_32645 = state_32624__$1;
(statearr_32627_32645[(2)] = null);

(statearr_32627_32645[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32625 === (4))){
var inst_32606 = (state_32624[(7)]);
var inst_32606__$1 = (state_32624[(2)]);
var inst_32607 = (inst_32606__$1 == null);
var state_32624__$1 = (function (){var statearr_32628 = state_32624;
(statearr_32628[(7)] = inst_32606__$1);

return statearr_32628;
})();
if(cljs.core.truth_(inst_32607)){
var statearr_32629_32646 = state_32624__$1;
(statearr_32629_32646[(1)] = (5));

} else {
var statearr_32630_32647 = state_32624__$1;
(statearr_32630_32647[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32625 === (6))){
var inst_32606 = (state_32624[(7)]);
var inst_32611 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32606) : p.call(null,inst_32606));
var state_32624__$1 = state_32624;
if(cljs.core.truth_(inst_32611)){
var statearr_32631_32648 = state_32624__$1;
(statearr_32631_32648[(1)] = (8));

} else {
var statearr_32632_32649 = state_32624__$1;
(statearr_32632_32649[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32625 === (3))){
var inst_32622 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32624__$1,inst_32622);
} else {
if((state_val_32625 === (2))){
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32624__$1,(4),ch);
} else {
if((state_val_32625 === (11))){
var inst_32614 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32633_32650 = state_32624__$1;
(statearr_32633_32650[(2)] = inst_32614);

(statearr_32633_32650[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32625 === (9))){
var state_32624__$1 = state_32624;
var statearr_32634_32651 = state_32624__$1;
(statearr_32634_32651[(2)] = null);

(statearr_32634_32651[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32625 === (5))){
var inst_32609 = cljs.core.async.close_BANG_(out);
var state_32624__$1 = state_32624;
var statearr_32635_32652 = state_32624__$1;
(statearr_32635_32652[(2)] = inst_32609);

(statearr_32635_32652[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32625 === (10))){
var inst_32617 = (state_32624[(2)]);
var state_32624__$1 = (function (){var statearr_32636 = state_32624;
(statearr_32636[(8)] = inst_32617);

return statearr_32636;
})();
var statearr_32637_32653 = state_32624__$1;
(statearr_32637_32653[(2)] = null);

(statearr_32637_32653[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32625 === (8))){
var inst_32606 = (state_32624[(7)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32624__$1,(11),out,inst_32606);
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
});})(c__31100__auto___32643,out))
;
return ((function (switch__30993__auto__,c__31100__auto___32643,out){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_32638 = [null,null,null,null,null,null,null,null,null];
(statearr_32638[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_32638[(1)] = (1));

return statearr_32638;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_32624){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32624);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32639){if((e32639 instanceof Object)){
var ex__30997__auto__ = e32639;
var statearr_32640_32654 = state_32624;
(statearr_32640_32654[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32624);

return cljs.core.cst$kw$recur;
} else {
throw e32639;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32655 = state_32624;
state_32624 = G__32655;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_32624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_32624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___32643,out))
})();
var state__31102__auto__ = (function (){var statearr_32641 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32641[(6)] = c__31100__auto___32643);

return statearr_32641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___32643,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__32657 = arguments.length;
switch (G__32657) {
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
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31100__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto__){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto__){
return (function (state_32720){
var state_val_32721 = (state_32720[(1)]);
if((state_val_32721 === (7))){
var inst_32716 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32722_32760 = state_32720__$1;
(statearr_32722_32760[(2)] = inst_32716);

(statearr_32722_32760[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (20))){
var inst_32686 = (state_32720[(7)]);
var inst_32697 = (state_32720[(2)]);
var inst_32698 = cljs.core.next(inst_32686);
var inst_32672 = inst_32698;
var inst_32673 = null;
var inst_32674 = (0);
var inst_32675 = (0);
var state_32720__$1 = (function (){var statearr_32723 = state_32720;
(statearr_32723[(8)] = inst_32674);

(statearr_32723[(9)] = inst_32675);

(statearr_32723[(10)] = inst_32697);

(statearr_32723[(11)] = inst_32672);

(statearr_32723[(12)] = inst_32673);

return statearr_32723;
})();
var statearr_32724_32761 = state_32720__$1;
(statearr_32724_32761[(2)] = null);

(statearr_32724_32761[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (1))){
var state_32720__$1 = state_32720;
var statearr_32725_32762 = state_32720__$1;
(statearr_32725_32762[(2)] = null);

(statearr_32725_32762[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (4))){
var inst_32661 = (state_32720[(13)]);
var inst_32661__$1 = (state_32720[(2)]);
var inst_32662 = (inst_32661__$1 == null);
var state_32720__$1 = (function (){var statearr_32726 = state_32720;
(statearr_32726[(13)] = inst_32661__$1);

return statearr_32726;
})();
if(cljs.core.truth_(inst_32662)){
var statearr_32727_32763 = state_32720__$1;
(statearr_32727_32763[(1)] = (5));

} else {
var statearr_32728_32764 = state_32720__$1;
(statearr_32728_32764[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (15))){
var state_32720__$1 = state_32720;
var statearr_32732_32765 = state_32720__$1;
(statearr_32732_32765[(2)] = null);

(statearr_32732_32765[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (21))){
var state_32720__$1 = state_32720;
var statearr_32733_32766 = state_32720__$1;
(statearr_32733_32766[(2)] = null);

(statearr_32733_32766[(1)] = (23));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (13))){
var inst_32674 = (state_32720[(8)]);
var inst_32675 = (state_32720[(9)]);
var inst_32672 = (state_32720[(11)]);
var inst_32673 = (state_32720[(12)]);
var inst_32682 = (state_32720[(2)]);
var inst_32683 = (inst_32675 + (1));
var tmp32729 = inst_32674;
var tmp32730 = inst_32672;
var tmp32731 = inst_32673;
var inst_32672__$1 = tmp32730;
var inst_32673__$1 = tmp32731;
var inst_32674__$1 = tmp32729;
var inst_32675__$1 = inst_32683;
var state_32720__$1 = (function (){var statearr_32734 = state_32720;
(statearr_32734[(14)] = inst_32682);

(statearr_32734[(8)] = inst_32674__$1);

(statearr_32734[(9)] = inst_32675__$1);

(statearr_32734[(11)] = inst_32672__$1);

(statearr_32734[(12)] = inst_32673__$1);

return statearr_32734;
})();
var statearr_32735_32767 = state_32720__$1;
(statearr_32735_32767[(2)] = null);

(statearr_32735_32767[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (22))){
var state_32720__$1 = state_32720;
var statearr_32736_32768 = state_32720__$1;
(statearr_32736_32768[(2)] = null);

(statearr_32736_32768[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (6))){
var inst_32661 = (state_32720[(13)]);
var inst_32670 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32661) : f.call(null,inst_32661));
var inst_32671 = cljs.core.seq(inst_32670);
var inst_32672 = inst_32671;
var inst_32673 = null;
var inst_32674 = (0);
var inst_32675 = (0);
var state_32720__$1 = (function (){var statearr_32737 = state_32720;
(statearr_32737[(8)] = inst_32674);

(statearr_32737[(9)] = inst_32675);

(statearr_32737[(11)] = inst_32672);

(statearr_32737[(12)] = inst_32673);

return statearr_32737;
})();
var statearr_32738_32769 = state_32720__$1;
(statearr_32738_32769[(2)] = null);

(statearr_32738_32769[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (17))){
var inst_32686 = (state_32720[(7)]);
var inst_32690 = cljs.core.chunk_first(inst_32686);
var inst_32691 = cljs.core.chunk_rest(inst_32686);
var inst_32692 = cljs.core.count(inst_32690);
var inst_32672 = inst_32691;
var inst_32673 = inst_32690;
var inst_32674 = inst_32692;
var inst_32675 = (0);
var state_32720__$1 = (function (){var statearr_32739 = state_32720;
(statearr_32739[(8)] = inst_32674);

(statearr_32739[(9)] = inst_32675);

(statearr_32739[(11)] = inst_32672);

(statearr_32739[(12)] = inst_32673);

return statearr_32739;
})();
var statearr_32740_32770 = state_32720__$1;
(statearr_32740_32770[(2)] = null);

(statearr_32740_32770[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (3))){
var inst_32718 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32720__$1,inst_32718);
} else {
if((state_val_32721 === (12))){
var inst_32706 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32741_32771 = state_32720__$1;
(statearr_32741_32771[(2)] = inst_32706);

(statearr_32741_32771[(1)] = (9));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (2))){
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32720__$1,(4),in$);
} else {
if((state_val_32721 === (23))){
var inst_32714 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32742_32772 = state_32720__$1;
(statearr_32742_32772[(2)] = inst_32714);

(statearr_32742_32772[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (19))){
var inst_32701 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32743_32773 = state_32720__$1;
(statearr_32743_32773[(2)] = inst_32701);

(statearr_32743_32773[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (11))){
var inst_32686 = (state_32720[(7)]);
var inst_32672 = (state_32720[(11)]);
var inst_32686__$1 = cljs.core.seq(inst_32672);
var state_32720__$1 = (function (){var statearr_32744 = state_32720;
(statearr_32744[(7)] = inst_32686__$1);

return statearr_32744;
})();
if(inst_32686__$1){
var statearr_32745_32774 = state_32720__$1;
(statearr_32745_32774[(1)] = (14));

} else {
var statearr_32746_32775 = state_32720__$1;
(statearr_32746_32775[(1)] = (15));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (9))){
var inst_32708 = (state_32720[(2)]);
var inst_32709 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_32720__$1 = (function (){var statearr_32747 = state_32720;
(statearr_32747[(15)] = inst_32708);

return statearr_32747;
})();
if(cljs.core.truth_(inst_32709)){
var statearr_32748_32776 = state_32720__$1;
(statearr_32748_32776[(1)] = (21));

} else {
var statearr_32749_32777 = state_32720__$1;
(statearr_32749_32777[(1)] = (22));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (5))){
var inst_32664 = cljs.core.async.close_BANG_(out);
var state_32720__$1 = state_32720;
var statearr_32750_32778 = state_32720__$1;
(statearr_32750_32778[(2)] = inst_32664);

(statearr_32750_32778[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (14))){
var inst_32686 = (state_32720[(7)]);
var inst_32688 = cljs.core.chunked_seq_QMARK_(inst_32686);
var state_32720__$1 = state_32720;
if(inst_32688){
var statearr_32751_32779 = state_32720__$1;
(statearr_32751_32779[(1)] = (17));

} else {
var statearr_32752_32780 = state_32720__$1;
(statearr_32752_32780[(1)] = (18));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (16))){
var inst_32704 = (state_32720[(2)]);
var state_32720__$1 = state_32720;
var statearr_32753_32781 = state_32720__$1;
(statearr_32753_32781[(2)] = inst_32704);

(statearr_32753_32781[(1)] = (12));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32721 === (10))){
var inst_32675 = (state_32720[(9)]);
var inst_32673 = (state_32720[(12)]);
var inst_32680 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_32673,inst_32675);
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32720__$1,(13),out,inst_32680);
} else {
if((state_val_32721 === (18))){
var inst_32686 = (state_32720[(7)]);
var inst_32695 = cljs.core.first(inst_32686);
var state_32720__$1 = state_32720;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32720__$1,(20),out,inst_32695);
} else {
if((state_val_32721 === (8))){
var inst_32674 = (state_32720[(8)]);
var inst_32675 = (state_32720[(9)]);
var inst_32677 = (inst_32675 < inst_32674);
var inst_32678 = inst_32677;
var state_32720__$1 = state_32720;
if(cljs.core.truth_(inst_32678)){
var statearr_32754_32782 = state_32720__$1;
(statearr_32754_32782[(1)] = (10));

} else {
var statearr_32755_32783 = state_32720__$1;
(statearr_32755_32783[(1)] = (11));

}

return cljs.core.cst$kw$recur;
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
});})(c__31100__auto__))
;
return ((function (switch__30993__auto__,c__31100__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30994__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30994__auto____0 = (function (){
var statearr_32756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32756[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30994__auto__);

(statearr_32756[(1)] = (1));

return statearr_32756;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30994__auto____1 = (function (state_32720){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32720);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32757){if((e32757 instanceof Object)){
var ex__30997__auto__ = e32757;
var statearr_32758_32784 = state_32720;
(statearr_32758_32784[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32720);

return cljs.core.cst$kw$recur;
} else {
throw e32757;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32785 = state_32720;
state_32720 = G__32785;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30994__auto__ = function(state_32720){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30994__auto____1.call(this,state_32720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30994__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30994__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto__))
})();
var state__31102__auto__ = (function (){var statearr_32759 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32759[(6)] = c__31100__auto__);

return statearr_32759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto__))
);

return c__31100__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__32787 = arguments.length;
switch (G__32787) {
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
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__32790 = arguments.length;
switch (G__32790) {
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
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__32793 = arguments.length;
switch (G__32793) {
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
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31100__auto___32840 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___32840,out){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___32840,out){
return (function (state_32817){
var state_val_32818 = (state_32817[(1)]);
if((state_val_32818 === (7))){
var inst_32812 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32819_32841 = state_32817__$1;
(statearr_32819_32841[(2)] = inst_32812);

(statearr_32819_32841[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32818 === (1))){
var inst_32794 = null;
var state_32817__$1 = (function (){var statearr_32820 = state_32817;
(statearr_32820[(7)] = inst_32794);

return statearr_32820;
})();
var statearr_32821_32842 = state_32817__$1;
(statearr_32821_32842[(2)] = null);

(statearr_32821_32842[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32818 === (4))){
var inst_32797 = (state_32817[(8)]);
var inst_32797__$1 = (state_32817[(2)]);
var inst_32798 = (inst_32797__$1 == null);
var inst_32799 = cljs.core.not(inst_32798);
var state_32817__$1 = (function (){var statearr_32822 = state_32817;
(statearr_32822[(8)] = inst_32797__$1);

return statearr_32822;
})();
if(inst_32799){
var statearr_32823_32843 = state_32817__$1;
(statearr_32823_32843[(1)] = (5));

} else {
var statearr_32824_32844 = state_32817__$1;
(statearr_32824_32844[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32818 === (6))){
var state_32817__$1 = state_32817;
var statearr_32825_32845 = state_32817__$1;
(statearr_32825_32845[(2)] = null);

(statearr_32825_32845[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32818 === (3))){
var inst_32814 = (state_32817[(2)]);
var inst_32815 = cljs.core.async.close_BANG_(out);
var state_32817__$1 = (function (){var statearr_32826 = state_32817;
(statearr_32826[(9)] = inst_32814);

return statearr_32826;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32817__$1,inst_32815);
} else {
if((state_val_32818 === (2))){
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32817__$1,(4),ch);
} else {
if((state_val_32818 === (11))){
var inst_32797 = (state_32817[(8)]);
var inst_32806 = (state_32817[(2)]);
var inst_32794 = inst_32797;
var state_32817__$1 = (function (){var statearr_32827 = state_32817;
(statearr_32827[(10)] = inst_32806);

(statearr_32827[(7)] = inst_32794);

return statearr_32827;
})();
var statearr_32828_32846 = state_32817__$1;
(statearr_32828_32846[(2)] = null);

(statearr_32828_32846[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32818 === (9))){
var inst_32797 = (state_32817[(8)]);
var state_32817__$1 = state_32817;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32817__$1,(11),out,inst_32797);
} else {
if((state_val_32818 === (5))){
var inst_32794 = (state_32817[(7)]);
var inst_32797 = (state_32817[(8)]);
var inst_32801 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32797,inst_32794);
var state_32817__$1 = state_32817;
if(inst_32801){
var statearr_32830_32847 = state_32817__$1;
(statearr_32830_32847[(1)] = (8));

} else {
var statearr_32831_32848 = state_32817__$1;
(statearr_32831_32848[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32818 === (10))){
var inst_32809 = (state_32817[(2)]);
var state_32817__$1 = state_32817;
var statearr_32832_32849 = state_32817__$1;
(statearr_32832_32849[(2)] = inst_32809);

(statearr_32832_32849[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32818 === (8))){
var inst_32794 = (state_32817[(7)]);
var tmp32829 = inst_32794;
var inst_32794__$1 = tmp32829;
var state_32817__$1 = (function (){var statearr_32833 = state_32817;
(statearr_32833[(7)] = inst_32794__$1);

return statearr_32833;
})();
var statearr_32834_32850 = state_32817__$1;
(statearr_32834_32850[(2)] = null);

(statearr_32834_32850[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___32840,out))
;
return ((function (switch__30993__auto__,c__31100__auto___32840,out){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_32835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32835[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_32835[(1)] = (1));

return statearr_32835;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_32817){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32817);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32836){if((e32836 instanceof Object)){
var ex__30997__auto__ = e32836;
var statearr_32837_32851 = state_32817;
(statearr_32837_32851[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32817);

return cljs.core.cst$kw$recur;
} else {
throw e32836;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32852 = state_32817;
state_32817 = G__32852;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_32817){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_32817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___32840,out))
})();
var state__31102__auto__ = (function (){var statearr_32838 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32838[(6)] = c__31100__auto___32840);

return statearr_32838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___32840,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__32854 = arguments.length;
switch (G__32854) {
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
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31100__auto___32920 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___32920,out){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___32920,out){
return (function (state_32892){
var state_val_32893 = (state_32892[(1)]);
if((state_val_32893 === (7))){
var inst_32888 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32894_32921 = state_32892__$1;
(statearr_32894_32921[(2)] = inst_32888);

(statearr_32894_32921[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (1))){
var inst_32855 = (new Array(n));
var inst_32856 = inst_32855;
var inst_32857 = (0);
var state_32892__$1 = (function (){var statearr_32895 = state_32892;
(statearr_32895[(7)] = inst_32857);

(statearr_32895[(8)] = inst_32856);

return statearr_32895;
})();
var statearr_32896_32922 = state_32892__$1;
(statearr_32896_32922[(2)] = null);

(statearr_32896_32922[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (4))){
var inst_32860 = (state_32892[(9)]);
var inst_32860__$1 = (state_32892[(2)]);
var inst_32861 = (inst_32860__$1 == null);
var inst_32862 = cljs.core.not(inst_32861);
var state_32892__$1 = (function (){var statearr_32897 = state_32892;
(statearr_32897[(9)] = inst_32860__$1);

return statearr_32897;
})();
if(inst_32862){
var statearr_32898_32923 = state_32892__$1;
(statearr_32898_32923[(1)] = (5));

} else {
var statearr_32899_32924 = state_32892__$1;
(statearr_32899_32924[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (15))){
var inst_32882 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32900_32925 = state_32892__$1;
(statearr_32900_32925[(2)] = inst_32882);

(statearr_32900_32925[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (13))){
var state_32892__$1 = state_32892;
var statearr_32901_32926 = state_32892__$1;
(statearr_32901_32926[(2)] = null);

(statearr_32901_32926[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (6))){
var inst_32857 = (state_32892[(7)]);
var inst_32878 = (inst_32857 > (0));
var state_32892__$1 = state_32892;
if(cljs.core.truth_(inst_32878)){
var statearr_32902_32927 = state_32892__$1;
(statearr_32902_32927[(1)] = (12));

} else {
var statearr_32903_32928 = state_32892__$1;
(statearr_32903_32928[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (3))){
var inst_32890 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32892__$1,inst_32890);
} else {
if((state_val_32893 === (12))){
var inst_32856 = (state_32892[(8)]);
var inst_32880 = cljs.core.vec(inst_32856);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32892__$1,(15),out,inst_32880);
} else {
if((state_val_32893 === (2))){
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32892__$1,(4),ch);
} else {
if((state_val_32893 === (11))){
var inst_32872 = (state_32892[(2)]);
var inst_32873 = (new Array(n));
var inst_32856 = inst_32873;
var inst_32857 = (0);
var state_32892__$1 = (function (){var statearr_32904 = state_32892;
(statearr_32904[(7)] = inst_32857);

(statearr_32904[(8)] = inst_32856);

(statearr_32904[(10)] = inst_32872);

return statearr_32904;
})();
var statearr_32905_32929 = state_32892__$1;
(statearr_32905_32929[(2)] = null);

(statearr_32905_32929[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (9))){
var inst_32856 = (state_32892[(8)]);
var inst_32870 = cljs.core.vec(inst_32856);
var state_32892__$1 = state_32892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32892__$1,(11),out,inst_32870);
} else {
if((state_val_32893 === (5))){
var inst_32857 = (state_32892[(7)]);
var inst_32856 = (state_32892[(8)]);
var inst_32860 = (state_32892[(9)]);
var inst_32865 = (state_32892[(11)]);
var inst_32864 = (inst_32856[inst_32857] = inst_32860);
var inst_32865__$1 = (inst_32857 + (1));
var inst_32866 = (inst_32865__$1 < n);
var state_32892__$1 = (function (){var statearr_32906 = state_32892;
(statearr_32906[(12)] = inst_32864);

(statearr_32906[(11)] = inst_32865__$1);

return statearr_32906;
})();
if(cljs.core.truth_(inst_32866)){
var statearr_32907_32930 = state_32892__$1;
(statearr_32907_32930[(1)] = (8));

} else {
var statearr_32908_32931 = state_32892__$1;
(statearr_32908_32931[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (14))){
var inst_32885 = (state_32892[(2)]);
var inst_32886 = cljs.core.async.close_BANG_(out);
var state_32892__$1 = (function (){var statearr_32910 = state_32892;
(statearr_32910[(13)] = inst_32885);

return statearr_32910;
})();
var statearr_32911_32932 = state_32892__$1;
(statearr_32911_32932[(2)] = inst_32886);

(statearr_32911_32932[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (10))){
var inst_32876 = (state_32892[(2)]);
var state_32892__$1 = state_32892;
var statearr_32912_32933 = state_32892__$1;
(statearr_32912_32933[(2)] = inst_32876);

(statearr_32912_32933[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32893 === (8))){
var inst_32856 = (state_32892[(8)]);
var inst_32865 = (state_32892[(11)]);
var tmp32909 = inst_32856;
var inst_32856__$1 = tmp32909;
var inst_32857 = inst_32865;
var state_32892__$1 = (function (){var statearr_32913 = state_32892;
(statearr_32913[(7)] = inst_32857);

(statearr_32913[(8)] = inst_32856__$1);

return statearr_32913;
})();
var statearr_32914_32934 = state_32892__$1;
(statearr_32914_32934[(2)] = null);

(statearr_32914_32934[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___32920,out))
;
return ((function (switch__30993__auto__,c__31100__auto___32920,out){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_32915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32915[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_32915[(1)] = (1));

return statearr_32915;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_32892){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32892);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e32916){if((e32916 instanceof Object)){
var ex__30997__auto__ = e32916;
var statearr_32917_32935 = state_32892;
(statearr_32917_32935[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32892);

return cljs.core.cst$kw$recur;
} else {
throw e32916;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__32936 = state_32892;
state_32892 = G__32936;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_32892){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_32892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___32920,out))
})();
var state__31102__auto__ = (function (){var statearr_32918 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_32918[(6)] = c__31100__auto___32920);

return statearr_32918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___32920,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__32938 = arguments.length;
switch (G__32938) {
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
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31100__auto___33008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__31100__auto___33008,out){
return (function (){
var f__31101__auto__ = (function (){var switch__30993__auto__ = ((function (c__31100__auto___33008,out){
return (function (state_32980){
var state_val_32981 = (state_32980[(1)]);
if((state_val_32981 === (7))){
var inst_32976 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_32982_33009 = state_32980__$1;
(statearr_32982_33009[(2)] = inst_32976);

(statearr_32982_33009[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (1))){
var inst_32939 = [];
var inst_32940 = inst_32939;
var inst_32941 = cljs.core.cst$kw$cljs$core$async_SLASH_nothing;
var state_32980__$1 = (function (){var statearr_32983 = state_32980;
(statearr_32983[(7)] = inst_32941);

(statearr_32983[(8)] = inst_32940);

return statearr_32983;
})();
var statearr_32984_33010 = state_32980__$1;
(statearr_32984_33010[(2)] = null);

(statearr_32984_33010[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (4))){
var inst_32944 = (state_32980[(9)]);
var inst_32944__$1 = (state_32980[(2)]);
var inst_32945 = (inst_32944__$1 == null);
var inst_32946 = cljs.core.not(inst_32945);
var state_32980__$1 = (function (){var statearr_32985 = state_32980;
(statearr_32985[(9)] = inst_32944__$1);

return statearr_32985;
})();
if(inst_32946){
var statearr_32986_33011 = state_32980__$1;
(statearr_32986_33011[(1)] = (5));

} else {
var statearr_32987_33012 = state_32980__$1;
(statearr_32987_33012[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (15))){
var inst_32970 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_32988_33013 = state_32980__$1;
(statearr_32988_33013[(2)] = inst_32970);

(statearr_32988_33013[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (13))){
var state_32980__$1 = state_32980;
var statearr_32989_33014 = state_32980__$1;
(statearr_32989_33014[(2)] = null);

(statearr_32989_33014[(1)] = (14));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (6))){
var inst_32940 = (state_32980[(8)]);
var inst_32965 = inst_32940.length;
var inst_32966 = (inst_32965 > (0));
var state_32980__$1 = state_32980;
if(cljs.core.truth_(inst_32966)){
var statearr_32990_33015 = state_32980__$1;
(statearr_32990_33015[(1)] = (12));

} else {
var statearr_32991_33016 = state_32980__$1;
(statearr_32991_33016[(1)] = (13));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (3))){
var inst_32978 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32980__$1,inst_32978);
} else {
if((state_val_32981 === (12))){
var inst_32940 = (state_32980[(8)]);
var inst_32968 = cljs.core.vec(inst_32940);
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32980__$1,(15),out,inst_32968);
} else {
if((state_val_32981 === (2))){
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32980__$1,(4),ch);
} else {
if((state_val_32981 === (11))){
var inst_32948 = (state_32980[(10)]);
var inst_32944 = (state_32980[(9)]);
var inst_32958 = (state_32980[(2)]);
var inst_32959 = [];
var inst_32960 = inst_32959.push(inst_32944);
var inst_32940 = inst_32959;
var inst_32941 = inst_32948;
var state_32980__$1 = (function (){var statearr_32992 = state_32980;
(statearr_32992[(7)] = inst_32941);

(statearr_32992[(11)] = inst_32958);

(statearr_32992[(12)] = inst_32960);

(statearr_32992[(8)] = inst_32940);

return statearr_32992;
})();
var statearr_32993_33017 = state_32980__$1;
(statearr_32993_33017[(2)] = null);

(statearr_32993_33017[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (9))){
var inst_32940 = (state_32980[(8)]);
var inst_32956 = cljs.core.vec(inst_32940);
var state_32980__$1 = state_32980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32980__$1,(11),out,inst_32956);
} else {
if((state_val_32981 === (5))){
var inst_32941 = (state_32980[(7)]);
var inst_32948 = (state_32980[(10)]);
var inst_32944 = (state_32980[(9)]);
var inst_32948__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_32944) : f.call(null,inst_32944));
var inst_32949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32948__$1,inst_32941);
var inst_32950 = cljs.core.keyword_identical_QMARK_(inst_32941,cljs.core.cst$kw$cljs$core$async_SLASH_nothing);
var inst_32951 = ((inst_32949) || (inst_32950));
var state_32980__$1 = (function (){var statearr_32994 = state_32980;
(statearr_32994[(10)] = inst_32948__$1);

return statearr_32994;
})();
if(cljs.core.truth_(inst_32951)){
var statearr_32995_33018 = state_32980__$1;
(statearr_32995_33018[(1)] = (8));

} else {
var statearr_32996_33019 = state_32980__$1;
(statearr_32996_33019[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (14))){
var inst_32973 = (state_32980[(2)]);
var inst_32974 = cljs.core.async.close_BANG_(out);
var state_32980__$1 = (function (){var statearr_32998 = state_32980;
(statearr_32998[(13)] = inst_32973);

return statearr_32998;
})();
var statearr_32999_33020 = state_32980__$1;
(statearr_32999_33020[(2)] = inst_32974);

(statearr_32999_33020[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (10))){
var inst_32963 = (state_32980[(2)]);
var state_32980__$1 = state_32980;
var statearr_33000_33021 = state_32980__$1;
(statearr_33000_33021[(2)] = inst_32963);

(statearr_33000_33021[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_32981 === (8))){
var inst_32948 = (state_32980[(10)]);
var inst_32944 = (state_32980[(9)]);
var inst_32940 = (state_32980[(8)]);
var inst_32953 = inst_32940.push(inst_32944);
var tmp32997 = inst_32940;
var inst_32940__$1 = tmp32997;
var inst_32941 = inst_32948;
var state_32980__$1 = (function (){var statearr_33001 = state_32980;
(statearr_33001[(7)] = inst_32941);

(statearr_33001[(14)] = inst_32953);

(statearr_33001[(8)] = inst_32940__$1);

return statearr_33001;
})();
var statearr_33002_33022 = state_32980__$1;
(statearr_33002_33022[(2)] = null);

(statearr_33002_33022[(1)] = (2));


return cljs.core.cst$kw$recur;
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
});})(c__31100__auto___33008,out))
;
return ((function (switch__30993__auto__,c__31100__auto___33008,out){
return (function() {
var cljs$core$async$state_machine__30994__auto__ = null;
var cljs$core$async$state_machine__30994__auto____0 = (function (){
var statearr_33003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33003[(0)] = cljs$core$async$state_machine__30994__auto__);

(statearr_33003[(1)] = (1));

return statearr_33003;
});
var cljs$core$async$state_machine__30994__auto____1 = (function (state_32980){
while(true){
var ret_value__30995__auto__ = (function (){try{while(true){
var result__30996__auto__ = switch__30993__auto__(state_32980);
if(cljs.core.keyword_identical_QMARK_(result__30996__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__30996__auto__;
}
break;
}
}catch (e33004){if((e33004 instanceof Object)){
var ex__30997__auto__ = e33004;
var statearr_33005_33023 = state_32980;
(statearr_33005_33023[(5)] = ex__30997__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32980);

return cljs.core.cst$kw$recur;
} else {
throw e33004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30995__auto__,cljs.core.cst$kw$recur)){
var G__33024 = state_32980;
state_32980 = G__33024;
continue;
} else {
return ret_value__30995__auto__;
}
break;
}
});
cljs$core$async$state_machine__30994__auto__ = function(state_32980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__30994__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__30994__auto____1.call(this,state_32980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__30994__auto____0;
cljs$core$async$state_machine__30994__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__30994__auto____1;
return cljs$core$async$state_machine__30994__auto__;
})()
;})(switch__30993__auto__,c__31100__auto___33008,out))
})();
var state__31102__auto__ = (function (){var statearr_33006 = (f__31101__auto__.cljs$core$IFn$_invoke$arity$0 ? f__31101__auto__.cljs$core$IFn$_invoke$arity$0() : f__31101__auto__.call(null));
(statearr_33006[(6)] = c__31100__auto___33008);

return statearr_33006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31102__auto__);
});})(c__31100__auto___33008,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

