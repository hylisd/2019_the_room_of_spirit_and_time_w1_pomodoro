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
var G__39126 = arguments.length;
switch (G__39126) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39127 = (function (f,blockable,meta39128){
this.f = f;
this.blockable = blockable;
this.meta39128 = meta39128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39129,meta39128__$1){
var self__ = this;
var _39129__$1 = this;
return (new cljs.core.async.t_cljs$core$async39127(self__.f,self__.blockable,meta39128__$1));
});

cljs.core.async.t_cljs$core$async39127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39129){
var self__ = this;
var _39129__$1 = this;
return self__.meta39128;
});

cljs.core.async.t_cljs$core$async39127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39128","meta39128",372166336,null)], null);
});

cljs.core.async.t_cljs$core$async39127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39127";

cljs.core.async.t_cljs$core$async39127.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39127");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39127.
 */
cljs.core.async.__GT_t_cljs$core$async39127 = (function cljs$core$async$__GT_t_cljs$core$async39127(f__$1,blockable__$1,meta39128){
return (new cljs.core.async.t_cljs$core$async39127(f__$1,blockable__$1,meta39128));
});

}

return (new cljs.core.async.t_cljs$core$async39127(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__39133 = arguments.length;
switch (G__39133) {
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
var G__39136 = arguments.length;
switch (G__39136) {
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
var G__39139 = arguments.length;
switch (G__39139) {
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
var val_39141 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39141);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39141,ret){
return (function (){
return fn1.call(null,val_39141);
});})(val_39141,ret))
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
var G__39143 = arguments.length;
switch (G__39143) {
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
var n__4607__auto___39145 = n;
var x_39146 = (0);
while(true){
if((x_39146 < n__4607__auto___39145)){
(a[x_39146] = (0));

var G__39147 = (x_39146 + (1));
x_39146 = G__39147;
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

var G__39148 = (i + (1));
i = G__39148;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39149 = (function (flag,meta39150){
this.flag = flag;
this.meta39150 = meta39150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39151,meta39150__$1){
var self__ = this;
var _39151__$1 = this;
return (new cljs.core.async.t_cljs$core$async39149(self__.flag,meta39150__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39151){
var self__ = this;
var _39151__$1 = this;
return self__.meta39150;
});})(flag))
;

cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39149.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39149.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39150","meta39150",782378856,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39149";

cljs.core.async.t_cljs$core$async39149.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39149");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39149.
 */
cljs.core.async.__GT_t_cljs$core$async39149 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39149(flag__$1,meta39150){
return (new cljs.core.async.t_cljs$core$async39149(flag__$1,meta39150));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39149(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39152 = (function (flag,cb,meta39153){
this.flag = flag;
this.cb = cb;
this.meta39153 = meta39153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39154,meta39153__$1){
var self__ = this;
var _39154__$1 = this;
return (new cljs.core.async.t_cljs$core$async39152(self__.flag,self__.cb,meta39153__$1));
});

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39154){
var self__ = this;
var _39154__$1 = this;
return self__.meta39153;
});

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39153","meta39153",-1937499708,null)], null);
});

cljs.core.async.t_cljs$core$async39152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39152";

cljs.core.async.t_cljs$core$async39152.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39152");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39152.
 */
cljs.core.async.__GT_t_cljs$core$async39152 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39152(flag__$1,cb__$1,meta39153){
return (new cljs.core.async.t_cljs$core$async39152(flag__$1,cb__$1,meta39153));
});

}

return (new cljs.core.async.t_cljs$core$async39152(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39155_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39155_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39156_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39156_SHARP_,port], null));
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
var G__39157 = (i + (1));
i = G__39157;
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
var len__4730__auto___39163 = arguments.length;
var i__4731__auto___39164 = (0);
while(true){
if((i__4731__auto___39164 < len__4730__auto___39163)){
args__4736__auto__.push((arguments[i__4731__auto___39164]));

var G__39165 = (i__4731__auto___39164 + (1));
i__4731__auto___39164 = G__39165;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39160){
var map__39161 = p__39160;
var map__39161__$1 = (((((!((map__39161 == null))))?(((((map__39161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39161):map__39161);
var opts = map__39161__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39158){
var G__39159 = cljs.core.first.call(null,seq39158);
var seq39158__$1 = cljs.core.next.call(null,seq39158);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39159,seq39158__$1);
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
var G__39167 = arguments.length;
switch (G__39167) {
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
var c__37202__auto___39213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___39213){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___39213){
return (function (state_39191){
var state_val_39192 = (state_39191[(1)]);
if((state_val_39192 === (7))){
var inst_39187 = (state_39191[(2)]);
var state_39191__$1 = state_39191;
var statearr_39193_39214 = state_39191__$1;
(statearr_39193_39214[(2)] = inst_39187);

(statearr_39193_39214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (1))){
var state_39191__$1 = state_39191;
var statearr_39194_39215 = state_39191__$1;
(statearr_39194_39215[(2)] = null);

(statearr_39194_39215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (4))){
var inst_39170 = (state_39191[(7)]);
var inst_39170__$1 = (state_39191[(2)]);
var inst_39171 = (inst_39170__$1 == null);
var state_39191__$1 = (function (){var statearr_39195 = state_39191;
(statearr_39195[(7)] = inst_39170__$1);

return statearr_39195;
})();
if(cljs.core.truth_(inst_39171)){
var statearr_39196_39216 = state_39191__$1;
(statearr_39196_39216[(1)] = (5));

} else {
var statearr_39197_39217 = state_39191__$1;
(statearr_39197_39217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (13))){
var state_39191__$1 = state_39191;
var statearr_39198_39218 = state_39191__$1;
(statearr_39198_39218[(2)] = null);

(statearr_39198_39218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (6))){
var inst_39170 = (state_39191[(7)]);
var state_39191__$1 = state_39191;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39191__$1,(11),to,inst_39170);
} else {
if((state_val_39192 === (3))){
var inst_39189 = (state_39191[(2)]);
var state_39191__$1 = state_39191;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39191__$1,inst_39189);
} else {
if((state_val_39192 === (12))){
var state_39191__$1 = state_39191;
var statearr_39199_39219 = state_39191__$1;
(statearr_39199_39219[(2)] = null);

(statearr_39199_39219[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (2))){
var state_39191__$1 = state_39191;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39191__$1,(4),from);
} else {
if((state_val_39192 === (11))){
var inst_39180 = (state_39191[(2)]);
var state_39191__$1 = state_39191;
if(cljs.core.truth_(inst_39180)){
var statearr_39200_39220 = state_39191__$1;
(statearr_39200_39220[(1)] = (12));

} else {
var statearr_39201_39221 = state_39191__$1;
(statearr_39201_39221[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (9))){
var state_39191__$1 = state_39191;
var statearr_39202_39222 = state_39191__$1;
(statearr_39202_39222[(2)] = null);

(statearr_39202_39222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (5))){
var state_39191__$1 = state_39191;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39203_39223 = state_39191__$1;
(statearr_39203_39223[(1)] = (8));

} else {
var statearr_39204_39224 = state_39191__$1;
(statearr_39204_39224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (14))){
var inst_39185 = (state_39191[(2)]);
var state_39191__$1 = state_39191;
var statearr_39205_39225 = state_39191__$1;
(statearr_39205_39225[(2)] = inst_39185);

(statearr_39205_39225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (10))){
var inst_39177 = (state_39191[(2)]);
var state_39191__$1 = state_39191;
var statearr_39206_39226 = state_39191__$1;
(statearr_39206_39226[(2)] = inst_39177);

(statearr_39206_39226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39192 === (8))){
var inst_39174 = cljs.core.async.close_BANG_.call(null,to);
var state_39191__$1 = state_39191;
var statearr_39207_39227 = state_39191__$1;
(statearr_39207_39227[(2)] = inst_39174);

(statearr_39207_39227[(1)] = (10));


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
});})(c__37202__auto___39213))
;
return ((function (switch__37035__auto__,c__37202__auto___39213){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_39208 = [null,null,null,null,null,null,null,null];
(statearr_39208[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_39208[(1)] = (1));

return statearr_39208;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_39191){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39191);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39209){if((e39209 instanceof Object)){
var ex__37039__auto__ = e39209;
var statearr_39210_39228 = state_39191;
(statearr_39210_39228[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39191);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39229 = state_39191;
state_39191 = G__39229;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_39191){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_39191);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___39213))
})();
var state__37204__auto__ = (function (){var statearr_39211 = f__37203__auto__.call(null);
(statearr_39211[(6)] = c__37202__auto___39213);

return statearr_39211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___39213))
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
return (function (p__39230){
var vec__39231 = p__39230;
var v = cljs.core.nth.call(null,vec__39231,(0),null);
var p = cljs.core.nth.call(null,vec__39231,(1),null);
var job = vec__39231;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37202__auto___39402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___39402,res,vec__39231,v,p,job,jobs,results){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___39402,res,vec__39231,v,p,job,jobs,results){
return (function (state_39238){
var state_val_39239 = (state_39238[(1)]);
if((state_val_39239 === (1))){
var state_39238__$1 = state_39238;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39238__$1,(2),res,v);
} else {
if((state_val_39239 === (2))){
var inst_39235 = (state_39238[(2)]);
var inst_39236 = cljs.core.async.close_BANG_.call(null,res);
var state_39238__$1 = (function (){var statearr_39240 = state_39238;
(statearr_39240[(7)] = inst_39235);

return statearr_39240;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39238__$1,inst_39236);
} else {
return null;
}
}
});})(c__37202__auto___39402,res,vec__39231,v,p,job,jobs,results))
;
return ((function (switch__37035__auto__,c__37202__auto___39402,res,vec__39231,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0 = (function (){
var statearr_39241 = [null,null,null,null,null,null,null,null];
(statearr_39241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__);

(statearr_39241[(1)] = (1));

return statearr_39241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1 = (function (state_39238){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39242){if((e39242 instanceof Object)){
var ex__37039__auto__ = e39242;
var statearr_39243_39403 = state_39238;
(statearr_39243_39403[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39404 = state_39238;
state_39238 = G__39404;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = function(state_39238){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1.call(this,state_39238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___39402,res,vec__39231,v,p,job,jobs,results))
})();
var state__37204__auto__ = (function (){var statearr_39244 = f__37203__auto__.call(null);
(statearr_39244[(6)] = c__37202__auto___39402);

return statearr_39244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___39402,res,vec__39231,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__39245){
var vec__39246 = p__39245;
var v = cljs.core.nth.call(null,vec__39246,(0),null);
var p = cljs.core.nth.call(null,vec__39246,(1),null);
var job = vec__39246;
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
var n__4607__auto___39405 = n;
var __39406 = (0);
while(true){
if((__39406 < n__4607__auto___39405)){
var G__39249_39407 = type;
var G__39249_39408__$1 = (((G__39249_39407 instanceof cljs.core.Keyword))?G__39249_39407.fqn:null);
switch (G__39249_39408__$1) {
case "compute":
var c__37202__auto___39410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39406,c__37202__auto___39410,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (__39406,c__37202__auto___39410,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async){
return (function (state_39262){
var state_val_39263 = (state_39262[(1)]);
if((state_val_39263 === (1))){
var state_39262__$1 = state_39262;
var statearr_39264_39411 = state_39262__$1;
(statearr_39264_39411[(2)] = null);

(statearr_39264_39411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (2))){
var state_39262__$1 = state_39262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39262__$1,(4),jobs);
} else {
if((state_val_39263 === (3))){
var inst_39260 = (state_39262[(2)]);
var state_39262__$1 = state_39262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39262__$1,inst_39260);
} else {
if((state_val_39263 === (4))){
var inst_39252 = (state_39262[(2)]);
var inst_39253 = process.call(null,inst_39252);
var state_39262__$1 = state_39262;
if(cljs.core.truth_(inst_39253)){
var statearr_39265_39412 = state_39262__$1;
(statearr_39265_39412[(1)] = (5));

} else {
var statearr_39266_39413 = state_39262__$1;
(statearr_39266_39413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (5))){
var state_39262__$1 = state_39262;
var statearr_39267_39414 = state_39262__$1;
(statearr_39267_39414[(2)] = null);

(statearr_39267_39414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (6))){
var state_39262__$1 = state_39262;
var statearr_39268_39415 = state_39262__$1;
(statearr_39268_39415[(2)] = null);

(statearr_39268_39415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39263 === (7))){
var inst_39258 = (state_39262[(2)]);
var state_39262__$1 = state_39262;
var statearr_39269_39416 = state_39262__$1;
(statearr_39269_39416[(2)] = inst_39258);

(statearr_39269_39416[(1)] = (3));


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
});})(__39406,c__37202__auto___39410,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async))
;
return ((function (__39406,switch__37035__auto__,c__37202__auto___39410,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0 = (function (){
var statearr_39270 = [null,null,null,null,null,null,null];
(statearr_39270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__);

(statearr_39270[(1)] = (1));

return statearr_39270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1 = (function (state_39262){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39271){if((e39271 instanceof Object)){
var ex__37039__auto__ = e39271;
var statearr_39272_39417 = state_39262;
(statearr_39272_39417[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39418 = state_39262;
state_39262 = G__39418;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = function(state_39262){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1.call(this,state_39262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__;
})()
;})(__39406,switch__37035__auto__,c__37202__auto___39410,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async))
})();
var state__37204__auto__ = (function (){var statearr_39273 = f__37203__auto__.call(null);
(statearr_39273[(6)] = c__37202__auto___39410);

return statearr_39273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(__39406,c__37202__auto___39410,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async))
);


break;
case "async":
var c__37202__auto___39419 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39406,c__37202__auto___39419,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (__39406,c__37202__auto___39419,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async){
return (function (state_39286){
var state_val_39287 = (state_39286[(1)]);
if((state_val_39287 === (1))){
var state_39286__$1 = state_39286;
var statearr_39288_39420 = state_39286__$1;
(statearr_39288_39420[(2)] = null);

(statearr_39288_39420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39287 === (2))){
var state_39286__$1 = state_39286;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39286__$1,(4),jobs);
} else {
if((state_val_39287 === (3))){
var inst_39284 = (state_39286[(2)]);
var state_39286__$1 = state_39286;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39286__$1,inst_39284);
} else {
if((state_val_39287 === (4))){
var inst_39276 = (state_39286[(2)]);
var inst_39277 = async.call(null,inst_39276);
var state_39286__$1 = state_39286;
if(cljs.core.truth_(inst_39277)){
var statearr_39289_39421 = state_39286__$1;
(statearr_39289_39421[(1)] = (5));

} else {
var statearr_39290_39422 = state_39286__$1;
(statearr_39290_39422[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39287 === (5))){
var state_39286__$1 = state_39286;
var statearr_39291_39423 = state_39286__$1;
(statearr_39291_39423[(2)] = null);

(statearr_39291_39423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39287 === (6))){
var state_39286__$1 = state_39286;
var statearr_39292_39424 = state_39286__$1;
(statearr_39292_39424[(2)] = null);

(statearr_39292_39424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39287 === (7))){
var inst_39282 = (state_39286[(2)]);
var state_39286__$1 = state_39286;
var statearr_39293_39425 = state_39286__$1;
(statearr_39293_39425[(2)] = inst_39282);

(statearr_39293_39425[(1)] = (3));


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
});})(__39406,c__37202__auto___39419,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async))
;
return ((function (__39406,switch__37035__auto__,c__37202__auto___39419,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0 = (function (){
var statearr_39294 = [null,null,null,null,null,null,null];
(statearr_39294[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__);

(statearr_39294[(1)] = (1));

return statearr_39294;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1 = (function (state_39286){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39286);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39295){if((e39295 instanceof Object)){
var ex__37039__auto__ = e39295;
var statearr_39296_39426 = state_39286;
(statearr_39296_39426[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39286);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39427 = state_39286;
state_39286 = G__39427;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = function(state_39286){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1.call(this,state_39286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__;
})()
;})(__39406,switch__37035__auto__,c__37202__auto___39419,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async))
})();
var state__37204__auto__ = (function (){var statearr_39297 = f__37203__auto__.call(null);
(statearr_39297[(6)] = c__37202__auto___39419);

return statearr_39297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(__39406,c__37202__auto___39419,G__39249_39407,G__39249_39408__$1,n__4607__auto___39405,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39249_39408__$1)].join('')));

}

var G__39428 = (__39406 + (1));
__39406 = G__39428;
continue;
} else {
}
break;
}

var c__37202__auto___39429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___39429,jobs,results,process,async){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___39429,jobs,results,process,async){
return (function (state_39319){
var state_val_39320 = (state_39319[(1)]);
if((state_val_39320 === (7))){
var inst_39315 = (state_39319[(2)]);
var state_39319__$1 = state_39319;
var statearr_39321_39430 = state_39319__$1;
(statearr_39321_39430[(2)] = inst_39315);

(statearr_39321_39430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39320 === (1))){
var state_39319__$1 = state_39319;
var statearr_39322_39431 = state_39319__$1;
(statearr_39322_39431[(2)] = null);

(statearr_39322_39431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39320 === (4))){
var inst_39300 = (state_39319[(7)]);
var inst_39300__$1 = (state_39319[(2)]);
var inst_39301 = (inst_39300__$1 == null);
var state_39319__$1 = (function (){var statearr_39323 = state_39319;
(statearr_39323[(7)] = inst_39300__$1);

return statearr_39323;
})();
if(cljs.core.truth_(inst_39301)){
var statearr_39324_39432 = state_39319__$1;
(statearr_39324_39432[(1)] = (5));

} else {
var statearr_39325_39433 = state_39319__$1;
(statearr_39325_39433[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39320 === (6))){
var inst_39305 = (state_39319[(8)]);
var inst_39300 = (state_39319[(7)]);
var inst_39305__$1 = cljs.core.async.chan.call(null,(1));
var inst_39306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39307 = [inst_39300,inst_39305__$1];
var inst_39308 = (new cljs.core.PersistentVector(null,2,(5),inst_39306,inst_39307,null));
var state_39319__$1 = (function (){var statearr_39326 = state_39319;
(statearr_39326[(8)] = inst_39305__$1);

return statearr_39326;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39319__$1,(8),jobs,inst_39308);
} else {
if((state_val_39320 === (3))){
var inst_39317 = (state_39319[(2)]);
var state_39319__$1 = state_39319;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39319__$1,inst_39317);
} else {
if((state_val_39320 === (2))){
var state_39319__$1 = state_39319;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39319__$1,(4),from);
} else {
if((state_val_39320 === (9))){
var inst_39312 = (state_39319[(2)]);
var state_39319__$1 = (function (){var statearr_39327 = state_39319;
(statearr_39327[(9)] = inst_39312);

return statearr_39327;
})();
var statearr_39328_39434 = state_39319__$1;
(statearr_39328_39434[(2)] = null);

(statearr_39328_39434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39320 === (5))){
var inst_39303 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39319__$1 = state_39319;
var statearr_39329_39435 = state_39319__$1;
(statearr_39329_39435[(2)] = inst_39303);

(statearr_39329_39435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39320 === (8))){
var inst_39305 = (state_39319[(8)]);
var inst_39310 = (state_39319[(2)]);
var state_39319__$1 = (function (){var statearr_39330 = state_39319;
(statearr_39330[(10)] = inst_39310);

return statearr_39330;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39319__$1,(9),results,inst_39305);
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
});})(c__37202__auto___39429,jobs,results,process,async))
;
return ((function (switch__37035__auto__,c__37202__auto___39429,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0 = (function (){
var statearr_39331 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39331[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__);

(statearr_39331[(1)] = (1));

return statearr_39331;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1 = (function (state_39319){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39319);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39332){if((e39332 instanceof Object)){
var ex__37039__auto__ = e39332;
var statearr_39333_39436 = state_39319;
(statearr_39333_39436[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39319);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39437 = state_39319;
state_39319 = G__39437;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = function(state_39319){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1.call(this,state_39319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___39429,jobs,results,process,async))
})();
var state__37204__auto__ = (function (){var statearr_39334 = f__37203__auto__.call(null);
(statearr_39334[(6)] = c__37202__auto___39429);

return statearr_39334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___39429,jobs,results,process,async))
);


var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__,jobs,results,process,async){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__,jobs,results,process,async){
return (function (state_39372){
var state_val_39373 = (state_39372[(1)]);
if((state_val_39373 === (7))){
var inst_39368 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39374_39438 = state_39372__$1;
(statearr_39374_39438[(2)] = inst_39368);

(statearr_39374_39438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (20))){
var state_39372__$1 = state_39372;
var statearr_39375_39439 = state_39372__$1;
(statearr_39375_39439[(2)] = null);

(statearr_39375_39439[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (1))){
var state_39372__$1 = state_39372;
var statearr_39376_39440 = state_39372__$1;
(statearr_39376_39440[(2)] = null);

(statearr_39376_39440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (4))){
var inst_39337 = (state_39372[(7)]);
var inst_39337__$1 = (state_39372[(2)]);
var inst_39338 = (inst_39337__$1 == null);
var state_39372__$1 = (function (){var statearr_39377 = state_39372;
(statearr_39377[(7)] = inst_39337__$1);

return statearr_39377;
})();
if(cljs.core.truth_(inst_39338)){
var statearr_39378_39441 = state_39372__$1;
(statearr_39378_39441[(1)] = (5));

} else {
var statearr_39379_39442 = state_39372__$1;
(statearr_39379_39442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (15))){
var inst_39350 = (state_39372[(8)]);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39372__$1,(18),to,inst_39350);
} else {
if((state_val_39373 === (21))){
var inst_39363 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39380_39443 = state_39372__$1;
(statearr_39380_39443[(2)] = inst_39363);

(statearr_39380_39443[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (13))){
var inst_39365 = (state_39372[(2)]);
var state_39372__$1 = (function (){var statearr_39381 = state_39372;
(statearr_39381[(9)] = inst_39365);

return statearr_39381;
})();
var statearr_39382_39444 = state_39372__$1;
(statearr_39382_39444[(2)] = null);

(statearr_39382_39444[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (6))){
var inst_39337 = (state_39372[(7)]);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(11),inst_39337);
} else {
if((state_val_39373 === (17))){
var inst_39358 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
if(cljs.core.truth_(inst_39358)){
var statearr_39383_39445 = state_39372__$1;
(statearr_39383_39445[(1)] = (19));

} else {
var statearr_39384_39446 = state_39372__$1;
(statearr_39384_39446[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (3))){
var inst_39370 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39372__$1,inst_39370);
} else {
if((state_val_39373 === (12))){
var inst_39347 = (state_39372[(10)]);
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(14),inst_39347);
} else {
if((state_val_39373 === (2))){
var state_39372__$1 = state_39372;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39372__$1,(4),results);
} else {
if((state_val_39373 === (19))){
var state_39372__$1 = state_39372;
var statearr_39385_39447 = state_39372__$1;
(statearr_39385_39447[(2)] = null);

(statearr_39385_39447[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (11))){
var inst_39347 = (state_39372[(2)]);
var state_39372__$1 = (function (){var statearr_39386 = state_39372;
(statearr_39386[(10)] = inst_39347);

return statearr_39386;
})();
var statearr_39387_39448 = state_39372__$1;
(statearr_39387_39448[(2)] = null);

(statearr_39387_39448[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (9))){
var state_39372__$1 = state_39372;
var statearr_39388_39449 = state_39372__$1;
(statearr_39388_39449[(2)] = null);

(statearr_39388_39449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (5))){
var state_39372__$1 = state_39372;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39389_39450 = state_39372__$1;
(statearr_39389_39450[(1)] = (8));

} else {
var statearr_39390_39451 = state_39372__$1;
(statearr_39390_39451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (14))){
var inst_39352 = (state_39372[(11)]);
var inst_39350 = (state_39372[(8)]);
var inst_39350__$1 = (state_39372[(2)]);
var inst_39351 = (inst_39350__$1 == null);
var inst_39352__$1 = cljs.core.not.call(null,inst_39351);
var state_39372__$1 = (function (){var statearr_39391 = state_39372;
(statearr_39391[(11)] = inst_39352__$1);

(statearr_39391[(8)] = inst_39350__$1);

return statearr_39391;
})();
if(inst_39352__$1){
var statearr_39392_39452 = state_39372__$1;
(statearr_39392_39452[(1)] = (15));

} else {
var statearr_39393_39453 = state_39372__$1;
(statearr_39393_39453[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (16))){
var inst_39352 = (state_39372[(11)]);
var state_39372__$1 = state_39372;
var statearr_39394_39454 = state_39372__$1;
(statearr_39394_39454[(2)] = inst_39352);

(statearr_39394_39454[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (10))){
var inst_39344 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39395_39455 = state_39372__$1;
(statearr_39395_39455[(2)] = inst_39344);

(statearr_39395_39455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (18))){
var inst_39355 = (state_39372[(2)]);
var state_39372__$1 = state_39372;
var statearr_39396_39456 = state_39372__$1;
(statearr_39396_39456[(2)] = inst_39355);

(statearr_39396_39456[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39373 === (8))){
var inst_39341 = cljs.core.async.close_BANG_.call(null,to);
var state_39372__$1 = state_39372;
var statearr_39397_39457 = state_39372__$1;
(statearr_39397_39457[(2)] = inst_39341);

(statearr_39397_39457[(1)] = (10));


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
});})(c__37202__auto__,jobs,results,process,async))
;
return ((function (switch__37035__auto__,c__37202__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0 = (function (){
var statearr_39398 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39398[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__);

(statearr_39398[(1)] = (1));

return statearr_39398;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1 = (function (state_39372){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39372);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39399){if((e39399 instanceof Object)){
var ex__37039__auto__ = e39399;
var statearr_39400_39458 = state_39372;
(statearr_39400_39458[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39372);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39459 = state_39372;
state_39372 = G__39459;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__ = function(state_39372){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1.call(this,state_39372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37036__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__,jobs,results,process,async))
})();
var state__37204__auto__ = (function (){var statearr_39401 = f__37203__auto__.call(null);
(statearr_39401[(6)] = c__37202__auto__);

return statearr_39401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__,jobs,results,process,async))
);

return c__37202__auto__;
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
var G__39461 = arguments.length;
switch (G__39461) {
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
var G__39464 = arguments.length;
switch (G__39464) {
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
var G__39467 = arguments.length;
switch (G__39467) {
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
var c__37202__auto___39516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___39516,tc,fc){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___39516,tc,fc){
return (function (state_39493){
var state_val_39494 = (state_39493[(1)]);
if((state_val_39494 === (7))){
var inst_39489 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
var statearr_39495_39517 = state_39493__$1;
(statearr_39495_39517[(2)] = inst_39489);

(statearr_39495_39517[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (1))){
var state_39493__$1 = state_39493;
var statearr_39496_39518 = state_39493__$1;
(statearr_39496_39518[(2)] = null);

(statearr_39496_39518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (4))){
var inst_39470 = (state_39493[(7)]);
var inst_39470__$1 = (state_39493[(2)]);
var inst_39471 = (inst_39470__$1 == null);
var state_39493__$1 = (function (){var statearr_39497 = state_39493;
(statearr_39497[(7)] = inst_39470__$1);

return statearr_39497;
})();
if(cljs.core.truth_(inst_39471)){
var statearr_39498_39519 = state_39493__$1;
(statearr_39498_39519[(1)] = (5));

} else {
var statearr_39499_39520 = state_39493__$1;
(statearr_39499_39520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (13))){
var state_39493__$1 = state_39493;
var statearr_39500_39521 = state_39493__$1;
(statearr_39500_39521[(2)] = null);

(statearr_39500_39521[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (6))){
var inst_39470 = (state_39493[(7)]);
var inst_39476 = p.call(null,inst_39470);
var state_39493__$1 = state_39493;
if(cljs.core.truth_(inst_39476)){
var statearr_39501_39522 = state_39493__$1;
(statearr_39501_39522[(1)] = (9));

} else {
var statearr_39502_39523 = state_39493__$1;
(statearr_39502_39523[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (3))){
var inst_39491 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39493__$1,inst_39491);
} else {
if((state_val_39494 === (12))){
var state_39493__$1 = state_39493;
var statearr_39503_39524 = state_39493__$1;
(statearr_39503_39524[(2)] = null);

(statearr_39503_39524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (2))){
var state_39493__$1 = state_39493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39493__$1,(4),ch);
} else {
if((state_val_39494 === (11))){
var inst_39470 = (state_39493[(7)]);
var inst_39480 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39493__$1,(8),inst_39480,inst_39470);
} else {
if((state_val_39494 === (9))){
var state_39493__$1 = state_39493;
var statearr_39504_39525 = state_39493__$1;
(statearr_39504_39525[(2)] = tc);

(statearr_39504_39525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (5))){
var inst_39473 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39474 = cljs.core.async.close_BANG_.call(null,fc);
var state_39493__$1 = (function (){var statearr_39505 = state_39493;
(statearr_39505[(8)] = inst_39473);

return statearr_39505;
})();
var statearr_39506_39526 = state_39493__$1;
(statearr_39506_39526[(2)] = inst_39474);

(statearr_39506_39526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (14))){
var inst_39487 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
var statearr_39507_39527 = state_39493__$1;
(statearr_39507_39527[(2)] = inst_39487);

(statearr_39507_39527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (10))){
var state_39493__$1 = state_39493;
var statearr_39508_39528 = state_39493__$1;
(statearr_39508_39528[(2)] = fc);

(statearr_39508_39528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39494 === (8))){
var inst_39482 = (state_39493[(2)]);
var state_39493__$1 = state_39493;
if(cljs.core.truth_(inst_39482)){
var statearr_39509_39529 = state_39493__$1;
(statearr_39509_39529[(1)] = (12));

} else {
var statearr_39510_39530 = state_39493__$1;
(statearr_39510_39530[(1)] = (13));

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
});})(c__37202__auto___39516,tc,fc))
;
return ((function (switch__37035__auto__,c__37202__auto___39516,tc,fc){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_39511 = [null,null,null,null,null,null,null,null,null];
(statearr_39511[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_39511[(1)] = (1));

return statearr_39511;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_39493){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39512){if((e39512 instanceof Object)){
var ex__37039__auto__ = e39512;
var statearr_39513_39531 = state_39493;
(statearr_39513_39531[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39532 = state_39493;
state_39493 = G__39532;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_39493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_39493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___39516,tc,fc))
})();
var state__37204__auto__ = (function (){var statearr_39514 = f__37203__auto__.call(null);
(statearr_39514[(6)] = c__37202__auto___39516);

return statearr_39514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___39516,tc,fc))
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
var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__){
return (function (state_39553){
var state_val_39554 = (state_39553[(1)]);
if((state_val_39554 === (7))){
var inst_39549 = (state_39553[(2)]);
var state_39553__$1 = state_39553;
var statearr_39555_39573 = state_39553__$1;
(statearr_39555_39573[(2)] = inst_39549);

(statearr_39555_39573[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39554 === (1))){
var inst_39533 = init;
var state_39553__$1 = (function (){var statearr_39556 = state_39553;
(statearr_39556[(7)] = inst_39533);

return statearr_39556;
})();
var statearr_39557_39574 = state_39553__$1;
(statearr_39557_39574[(2)] = null);

(statearr_39557_39574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39554 === (4))){
var inst_39536 = (state_39553[(8)]);
var inst_39536__$1 = (state_39553[(2)]);
var inst_39537 = (inst_39536__$1 == null);
var state_39553__$1 = (function (){var statearr_39558 = state_39553;
(statearr_39558[(8)] = inst_39536__$1);

return statearr_39558;
})();
if(cljs.core.truth_(inst_39537)){
var statearr_39559_39575 = state_39553__$1;
(statearr_39559_39575[(1)] = (5));

} else {
var statearr_39560_39576 = state_39553__$1;
(statearr_39560_39576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39554 === (6))){
var inst_39533 = (state_39553[(7)]);
var inst_39540 = (state_39553[(9)]);
var inst_39536 = (state_39553[(8)]);
var inst_39540__$1 = f.call(null,inst_39533,inst_39536);
var inst_39541 = cljs.core.reduced_QMARK_.call(null,inst_39540__$1);
var state_39553__$1 = (function (){var statearr_39561 = state_39553;
(statearr_39561[(9)] = inst_39540__$1);

return statearr_39561;
})();
if(inst_39541){
var statearr_39562_39577 = state_39553__$1;
(statearr_39562_39577[(1)] = (8));

} else {
var statearr_39563_39578 = state_39553__$1;
(statearr_39563_39578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39554 === (3))){
var inst_39551 = (state_39553[(2)]);
var state_39553__$1 = state_39553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39553__$1,inst_39551);
} else {
if((state_val_39554 === (2))){
var state_39553__$1 = state_39553;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39553__$1,(4),ch);
} else {
if((state_val_39554 === (9))){
var inst_39540 = (state_39553[(9)]);
var inst_39533 = inst_39540;
var state_39553__$1 = (function (){var statearr_39564 = state_39553;
(statearr_39564[(7)] = inst_39533);

return statearr_39564;
})();
var statearr_39565_39579 = state_39553__$1;
(statearr_39565_39579[(2)] = null);

(statearr_39565_39579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39554 === (5))){
var inst_39533 = (state_39553[(7)]);
var state_39553__$1 = state_39553;
var statearr_39566_39580 = state_39553__$1;
(statearr_39566_39580[(2)] = inst_39533);

(statearr_39566_39580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39554 === (10))){
var inst_39547 = (state_39553[(2)]);
var state_39553__$1 = state_39553;
var statearr_39567_39581 = state_39553__$1;
(statearr_39567_39581[(2)] = inst_39547);

(statearr_39567_39581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39554 === (8))){
var inst_39540 = (state_39553[(9)]);
var inst_39543 = cljs.core.deref.call(null,inst_39540);
var state_39553__$1 = state_39553;
var statearr_39568_39582 = state_39553__$1;
(statearr_39568_39582[(2)] = inst_39543);

(statearr_39568_39582[(1)] = (10));


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
});})(c__37202__auto__))
;
return ((function (switch__37035__auto__,c__37202__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37036__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37036__auto____0 = (function (){
var statearr_39569 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39569[(0)] = cljs$core$async$reduce_$_state_machine__37036__auto__);

(statearr_39569[(1)] = (1));

return statearr_39569;
});
var cljs$core$async$reduce_$_state_machine__37036__auto____1 = (function (state_39553){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39570){if((e39570 instanceof Object)){
var ex__37039__auto__ = e39570;
var statearr_39571_39583 = state_39553;
(statearr_39571_39583[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39584 = state_39553;
state_39553 = G__39584;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37036__auto__ = function(state_39553){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37036__auto____1.call(this,state_39553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37036__auto____0;
cljs$core$async$reduce_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37036__auto____1;
return cljs$core$async$reduce_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__))
})();
var state__37204__auto__ = (function (){var statearr_39572 = f__37203__auto__.call(null);
(statearr_39572[(6)] = c__37202__auto__);

return statearr_39572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__))
);

return c__37202__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__,f__$1){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__,f__$1){
return (function (state_39590){
var state_val_39591 = (state_39590[(1)]);
if((state_val_39591 === (1))){
var inst_39585 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39590__$1,(2),inst_39585);
} else {
if((state_val_39591 === (2))){
var inst_39587 = (state_39590[(2)]);
var inst_39588 = f__$1.call(null,inst_39587);
var state_39590__$1 = state_39590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39590__$1,inst_39588);
} else {
return null;
}
}
});})(c__37202__auto__,f__$1))
;
return ((function (switch__37035__auto__,c__37202__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__37036__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37036__auto____0 = (function (){
var statearr_39592 = [null,null,null,null,null,null,null];
(statearr_39592[(0)] = cljs$core$async$transduce_$_state_machine__37036__auto__);

(statearr_39592[(1)] = (1));

return statearr_39592;
});
var cljs$core$async$transduce_$_state_machine__37036__auto____1 = (function (state_39590){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39593){if((e39593 instanceof Object)){
var ex__37039__auto__ = e39593;
var statearr_39594_39596 = state_39590;
(statearr_39594_39596[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39597 = state_39590;
state_39590 = G__39597;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37036__auto__ = function(state_39590){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37036__auto____1.call(this,state_39590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37036__auto____0;
cljs$core$async$transduce_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37036__auto____1;
return cljs$core$async$transduce_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__,f__$1))
})();
var state__37204__auto__ = (function (){var statearr_39595 = f__37203__auto__.call(null);
(statearr_39595[(6)] = c__37202__auto__);

return statearr_39595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__,f__$1))
);

return c__37202__auto__;
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
var G__39599 = arguments.length;
switch (G__39599) {
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
var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__){
return (function (state_39624){
var state_val_39625 = (state_39624[(1)]);
if((state_val_39625 === (7))){
var inst_39606 = (state_39624[(2)]);
var state_39624__$1 = state_39624;
var statearr_39626_39647 = state_39624__$1;
(statearr_39626_39647[(2)] = inst_39606);

(statearr_39626_39647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (1))){
var inst_39600 = cljs.core.seq.call(null,coll);
var inst_39601 = inst_39600;
var state_39624__$1 = (function (){var statearr_39627 = state_39624;
(statearr_39627[(7)] = inst_39601);

return statearr_39627;
})();
var statearr_39628_39648 = state_39624__$1;
(statearr_39628_39648[(2)] = null);

(statearr_39628_39648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (4))){
var inst_39601 = (state_39624[(7)]);
var inst_39604 = cljs.core.first.call(null,inst_39601);
var state_39624__$1 = state_39624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39624__$1,(7),ch,inst_39604);
} else {
if((state_val_39625 === (13))){
var inst_39618 = (state_39624[(2)]);
var state_39624__$1 = state_39624;
var statearr_39629_39649 = state_39624__$1;
(statearr_39629_39649[(2)] = inst_39618);

(statearr_39629_39649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (6))){
var inst_39609 = (state_39624[(2)]);
var state_39624__$1 = state_39624;
if(cljs.core.truth_(inst_39609)){
var statearr_39630_39650 = state_39624__$1;
(statearr_39630_39650[(1)] = (8));

} else {
var statearr_39631_39651 = state_39624__$1;
(statearr_39631_39651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (3))){
var inst_39622 = (state_39624[(2)]);
var state_39624__$1 = state_39624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39624__$1,inst_39622);
} else {
if((state_val_39625 === (12))){
var state_39624__$1 = state_39624;
var statearr_39632_39652 = state_39624__$1;
(statearr_39632_39652[(2)] = null);

(statearr_39632_39652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (2))){
var inst_39601 = (state_39624[(7)]);
var state_39624__$1 = state_39624;
if(cljs.core.truth_(inst_39601)){
var statearr_39633_39653 = state_39624__$1;
(statearr_39633_39653[(1)] = (4));

} else {
var statearr_39634_39654 = state_39624__$1;
(statearr_39634_39654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (11))){
var inst_39615 = cljs.core.async.close_BANG_.call(null,ch);
var state_39624__$1 = state_39624;
var statearr_39635_39655 = state_39624__$1;
(statearr_39635_39655[(2)] = inst_39615);

(statearr_39635_39655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (9))){
var state_39624__$1 = state_39624;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39636_39656 = state_39624__$1;
(statearr_39636_39656[(1)] = (11));

} else {
var statearr_39637_39657 = state_39624__$1;
(statearr_39637_39657[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (5))){
var inst_39601 = (state_39624[(7)]);
var state_39624__$1 = state_39624;
var statearr_39638_39658 = state_39624__$1;
(statearr_39638_39658[(2)] = inst_39601);

(statearr_39638_39658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (10))){
var inst_39620 = (state_39624[(2)]);
var state_39624__$1 = state_39624;
var statearr_39639_39659 = state_39624__$1;
(statearr_39639_39659[(2)] = inst_39620);

(statearr_39639_39659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39625 === (8))){
var inst_39601 = (state_39624[(7)]);
var inst_39611 = cljs.core.next.call(null,inst_39601);
var inst_39601__$1 = inst_39611;
var state_39624__$1 = (function (){var statearr_39640 = state_39624;
(statearr_39640[(7)] = inst_39601__$1);

return statearr_39640;
})();
var statearr_39641_39660 = state_39624__$1;
(statearr_39641_39660[(2)] = null);

(statearr_39641_39660[(1)] = (2));


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
});})(c__37202__auto__))
;
return ((function (switch__37035__auto__,c__37202__auto__){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_39642 = [null,null,null,null,null,null,null,null];
(statearr_39642[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_39642[(1)] = (1));

return statearr_39642;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_39624){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39643){if((e39643 instanceof Object)){
var ex__37039__auto__ = e39643;
var statearr_39644_39661 = state_39624;
(statearr_39644_39661[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39643;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39662 = state_39624;
state_39624 = G__39662;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_39624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_39624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__))
})();
var state__37204__auto__ = (function (){var statearr_39645 = f__37203__auto__.call(null);
(statearr_39645[(6)] = c__37202__auto__);

return statearr_39645;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__))
);

return c__37202__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39663 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39663 = (function (ch,cs,meta39664){
this.ch = ch;
this.cs = cs;
this.meta39664 = meta39664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39665,meta39664__$1){
var self__ = this;
var _39665__$1 = this;
return (new cljs.core.async.t_cljs$core$async39663(self__.ch,self__.cs,meta39664__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39665){
var self__ = this;
var _39665__$1 = this;
return self__.meta39664;
});})(cs))
;

cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39663.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39663.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39664","meta39664",652003304,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39663";

cljs.core.async.t_cljs$core$async39663.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39663");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39663.
 */
cljs.core.async.__GT_t_cljs$core$async39663 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39663(ch__$1,cs__$1,meta39664){
return (new cljs.core.async.t_cljs$core$async39663(ch__$1,cs__$1,meta39664));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39663(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37202__auto___39885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___39885,cs,m,dchan,dctr,done){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___39885,cs,m,dchan,dctr,done){
return (function (state_39800){
var state_val_39801 = (state_39800[(1)]);
if((state_val_39801 === (7))){
var inst_39796 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39802_39886 = state_39800__$1;
(statearr_39802_39886[(2)] = inst_39796);

(statearr_39802_39886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (20))){
var inst_39699 = (state_39800[(7)]);
var inst_39711 = cljs.core.first.call(null,inst_39699);
var inst_39712 = cljs.core.nth.call(null,inst_39711,(0),null);
var inst_39713 = cljs.core.nth.call(null,inst_39711,(1),null);
var state_39800__$1 = (function (){var statearr_39803 = state_39800;
(statearr_39803[(8)] = inst_39712);

return statearr_39803;
})();
if(cljs.core.truth_(inst_39713)){
var statearr_39804_39887 = state_39800__$1;
(statearr_39804_39887[(1)] = (22));

} else {
var statearr_39805_39888 = state_39800__$1;
(statearr_39805_39888[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (27))){
var inst_39741 = (state_39800[(9)]);
var inst_39743 = (state_39800[(10)]);
var inst_39668 = (state_39800[(11)]);
var inst_39748 = (state_39800[(12)]);
var inst_39748__$1 = cljs.core._nth.call(null,inst_39741,inst_39743);
var inst_39749 = cljs.core.async.put_BANG_.call(null,inst_39748__$1,inst_39668,done);
var state_39800__$1 = (function (){var statearr_39806 = state_39800;
(statearr_39806[(12)] = inst_39748__$1);

return statearr_39806;
})();
if(cljs.core.truth_(inst_39749)){
var statearr_39807_39889 = state_39800__$1;
(statearr_39807_39889[(1)] = (30));

} else {
var statearr_39808_39890 = state_39800__$1;
(statearr_39808_39890[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (1))){
var state_39800__$1 = state_39800;
var statearr_39809_39891 = state_39800__$1;
(statearr_39809_39891[(2)] = null);

(statearr_39809_39891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (24))){
var inst_39699 = (state_39800[(7)]);
var inst_39718 = (state_39800[(2)]);
var inst_39719 = cljs.core.next.call(null,inst_39699);
var inst_39677 = inst_39719;
var inst_39678 = null;
var inst_39679 = (0);
var inst_39680 = (0);
var state_39800__$1 = (function (){var statearr_39810 = state_39800;
(statearr_39810[(13)] = inst_39679);

(statearr_39810[(14)] = inst_39678);

(statearr_39810[(15)] = inst_39677);

(statearr_39810[(16)] = inst_39718);

(statearr_39810[(17)] = inst_39680);

return statearr_39810;
})();
var statearr_39811_39892 = state_39800__$1;
(statearr_39811_39892[(2)] = null);

(statearr_39811_39892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (39))){
var state_39800__$1 = state_39800;
var statearr_39815_39893 = state_39800__$1;
(statearr_39815_39893[(2)] = null);

(statearr_39815_39893[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (4))){
var inst_39668 = (state_39800[(11)]);
var inst_39668__$1 = (state_39800[(2)]);
var inst_39669 = (inst_39668__$1 == null);
var state_39800__$1 = (function (){var statearr_39816 = state_39800;
(statearr_39816[(11)] = inst_39668__$1);

return statearr_39816;
})();
if(cljs.core.truth_(inst_39669)){
var statearr_39817_39894 = state_39800__$1;
(statearr_39817_39894[(1)] = (5));

} else {
var statearr_39818_39895 = state_39800__$1;
(statearr_39818_39895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (15))){
var inst_39679 = (state_39800[(13)]);
var inst_39678 = (state_39800[(14)]);
var inst_39677 = (state_39800[(15)]);
var inst_39680 = (state_39800[(17)]);
var inst_39695 = (state_39800[(2)]);
var inst_39696 = (inst_39680 + (1));
var tmp39812 = inst_39679;
var tmp39813 = inst_39678;
var tmp39814 = inst_39677;
var inst_39677__$1 = tmp39814;
var inst_39678__$1 = tmp39813;
var inst_39679__$1 = tmp39812;
var inst_39680__$1 = inst_39696;
var state_39800__$1 = (function (){var statearr_39819 = state_39800;
(statearr_39819[(18)] = inst_39695);

(statearr_39819[(13)] = inst_39679__$1);

(statearr_39819[(14)] = inst_39678__$1);

(statearr_39819[(15)] = inst_39677__$1);

(statearr_39819[(17)] = inst_39680__$1);

return statearr_39819;
})();
var statearr_39820_39896 = state_39800__$1;
(statearr_39820_39896[(2)] = null);

(statearr_39820_39896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (21))){
var inst_39722 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39824_39897 = state_39800__$1;
(statearr_39824_39897[(2)] = inst_39722);

(statearr_39824_39897[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (31))){
var inst_39748 = (state_39800[(12)]);
var inst_39752 = done.call(null,null);
var inst_39753 = cljs.core.async.untap_STAR_.call(null,m,inst_39748);
var state_39800__$1 = (function (){var statearr_39825 = state_39800;
(statearr_39825[(19)] = inst_39752);

return statearr_39825;
})();
var statearr_39826_39898 = state_39800__$1;
(statearr_39826_39898[(2)] = inst_39753);

(statearr_39826_39898[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (32))){
var inst_39741 = (state_39800[(9)]);
var inst_39743 = (state_39800[(10)]);
var inst_39740 = (state_39800[(20)]);
var inst_39742 = (state_39800[(21)]);
var inst_39755 = (state_39800[(2)]);
var inst_39756 = (inst_39743 + (1));
var tmp39821 = inst_39741;
var tmp39822 = inst_39740;
var tmp39823 = inst_39742;
var inst_39740__$1 = tmp39822;
var inst_39741__$1 = tmp39821;
var inst_39742__$1 = tmp39823;
var inst_39743__$1 = inst_39756;
var state_39800__$1 = (function (){var statearr_39827 = state_39800;
(statearr_39827[(9)] = inst_39741__$1);

(statearr_39827[(10)] = inst_39743__$1);

(statearr_39827[(22)] = inst_39755);

(statearr_39827[(20)] = inst_39740__$1);

(statearr_39827[(21)] = inst_39742__$1);

return statearr_39827;
})();
var statearr_39828_39899 = state_39800__$1;
(statearr_39828_39899[(2)] = null);

(statearr_39828_39899[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (40))){
var inst_39768 = (state_39800[(23)]);
var inst_39772 = done.call(null,null);
var inst_39773 = cljs.core.async.untap_STAR_.call(null,m,inst_39768);
var state_39800__$1 = (function (){var statearr_39829 = state_39800;
(statearr_39829[(24)] = inst_39772);

return statearr_39829;
})();
var statearr_39830_39900 = state_39800__$1;
(statearr_39830_39900[(2)] = inst_39773);

(statearr_39830_39900[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (33))){
var inst_39759 = (state_39800[(25)]);
var inst_39761 = cljs.core.chunked_seq_QMARK_.call(null,inst_39759);
var state_39800__$1 = state_39800;
if(inst_39761){
var statearr_39831_39901 = state_39800__$1;
(statearr_39831_39901[(1)] = (36));

} else {
var statearr_39832_39902 = state_39800__$1;
(statearr_39832_39902[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (13))){
var inst_39689 = (state_39800[(26)]);
var inst_39692 = cljs.core.async.close_BANG_.call(null,inst_39689);
var state_39800__$1 = state_39800;
var statearr_39833_39903 = state_39800__$1;
(statearr_39833_39903[(2)] = inst_39692);

(statearr_39833_39903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (22))){
var inst_39712 = (state_39800[(8)]);
var inst_39715 = cljs.core.async.close_BANG_.call(null,inst_39712);
var state_39800__$1 = state_39800;
var statearr_39834_39904 = state_39800__$1;
(statearr_39834_39904[(2)] = inst_39715);

(statearr_39834_39904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (36))){
var inst_39759 = (state_39800[(25)]);
var inst_39763 = cljs.core.chunk_first.call(null,inst_39759);
var inst_39764 = cljs.core.chunk_rest.call(null,inst_39759);
var inst_39765 = cljs.core.count.call(null,inst_39763);
var inst_39740 = inst_39764;
var inst_39741 = inst_39763;
var inst_39742 = inst_39765;
var inst_39743 = (0);
var state_39800__$1 = (function (){var statearr_39835 = state_39800;
(statearr_39835[(9)] = inst_39741);

(statearr_39835[(10)] = inst_39743);

(statearr_39835[(20)] = inst_39740);

(statearr_39835[(21)] = inst_39742);

return statearr_39835;
})();
var statearr_39836_39905 = state_39800__$1;
(statearr_39836_39905[(2)] = null);

(statearr_39836_39905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (41))){
var inst_39759 = (state_39800[(25)]);
var inst_39775 = (state_39800[(2)]);
var inst_39776 = cljs.core.next.call(null,inst_39759);
var inst_39740 = inst_39776;
var inst_39741 = null;
var inst_39742 = (0);
var inst_39743 = (0);
var state_39800__$1 = (function (){var statearr_39837 = state_39800;
(statearr_39837[(9)] = inst_39741);

(statearr_39837[(10)] = inst_39743);

(statearr_39837[(27)] = inst_39775);

(statearr_39837[(20)] = inst_39740);

(statearr_39837[(21)] = inst_39742);

return statearr_39837;
})();
var statearr_39838_39906 = state_39800__$1;
(statearr_39838_39906[(2)] = null);

(statearr_39838_39906[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (43))){
var state_39800__$1 = state_39800;
var statearr_39839_39907 = state_39800__$1;
(statearr_39839_39907[(2)] = null);

(statearr_39839_39907[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (29))){
var inst_39784 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39840_39908 = state_39800__$1;
(statearr_39840_39908[(2)] = inst_39784);

(statearr_39840_39908[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (44))){
var inst_39793 = (state_39800[(2)]);
var state_39800__$1 = (function (){var statearr_39841 = state_39800;
(statearr_39841[(28)] = inst_39793);

return statearr_39841;
})();
var statearr_39842_39909 = state_39800__$1;
(statearr_39842_39909[(2)] = null);

(statearr_39842_39909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (6))){
var inst_39732 = (state_39800[(29)]);
var inst_39731 = cljs.core.deref.call(null,cs);
var inst_39732__$1 = cljs.core.keys.call(null,inst_39731);
var inst_39733 = cljs.core.count.call(null,inst_39732__$1);
var inst_39734 = cljs.core.reset_BANG_.call(null,dctr,inst_39733);
var inst_39739 = cljs.core.seq.call(null,inst_39732__$1);
var inst_39740 = inst_39739;
var inst_39741 = null;
var inst_39742 = (0);
var inst_39743 = (0);
var state_39800__$1 = (function (){var statearr_39843 = state_39800;
(statearr_39843[(9)] = inst_39741);

(statearr_39843[(10)] = inst_39743);

(statearr_39843[(29)] = inst_39732__$1);

(statearr_39843[(20)] = inst_39740);

(statearr_39843[(30)] = inst_39734);

(statearr_39843[(21)] = inst_39742);

return statearr_39843;
})();
var statearr_39844_39910 = state_39800__$1;
(statearr_39844_39910[(2)] = null);

(statearr_39844_39910[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (28))){
var inst_39740 = (state_39800[(20)]);
var inst_39759 = (state_39800[(25)]);
var inst_39759__$1 = cljs.core.seq.call(null,inst_39740);
var state_39800__$1 = (function (){var statearr_39845 = state_39800;
(statearr_39845[(25)] = inst_39759__$1);

return statearr_39845;
})();
if(inst_39759__$1){
var statearr_39846_39911 = state_39800__$1;
(statearr_39846_39911[(1)] = (33));

} else {
var statearr_39847_39912 = state_39800__$1;
(statearr_39847_39912[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (25))){
var inst_39743 = (state_39800[(10)]);
var inst_39742 = (state_39800[(21)]);
var inst_39745 = (inst_39743 < inst_39742);
var inst_39746 = inst_39745;
var state_39800__$1 = state_39800;
if(cljs.core.truth_(inst_39746)){
var statearr_39848_39913 = state_39800__$1;
(statearr_39848_39913[(1)] = (27));

} else {
var statearr_39849_39914 = state_39800__$1;
(statearr_39849_39914[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (34))){
var state_39800__$1 = state_39800;
var statearr_39850_39915 = state_39800__$1;
(statearr_39850_39915[(2)] = null);

(statearr_39850_39915[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (17))){
var state_39800__$1 = state_39800;
var statearr_39851_39916 = state_39800__$1;
(statearr_39851_39916[(2)] = null);

(statearr_39851_39916[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (3))){
var inst_39798 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39800__$1,inst_39798);
} else {
if((state_val_39801 === (12))){
var inst_39727 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39852_39917 = state_39800__$1;
(statearr_39852_39917[(2)] = inst_39727);

(statearr_39852_39917[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (2))){
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39800__$1,(4),ch);
} else {
if((state_val_39801 === (23))){
var state_39800__$1 = state_39800;
var statearr_39853_39918 = state_39800__$1;
(statearr_39853_39918[(2)] = null);

(statearr_39853_39918[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (35))){
var inst_39782 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39854_39919 = state_39800__$1;
(statearr_39854_39919[(2)] = inst_39782);

(statearr_39854_39919[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (19))){
var inst_39699 = (state_39800[(7)]);
var inst_39703 = cljs.core.chunk_first.call(null,inst_39699);
var inst_39704 = cljs.core.chunk_rest.call(null,inst_39699);
var inst_39705 = cljs.core.count.call(null,inst_39703);
var inst_39677 = inst_39704;
var inst_39678 = inst_39703;
var inst_39679 = inst_39705;
var inst_39680 = (0);
var state_39800__$1 = (function (){var statearr_39855 = state_39800;
(statearr_39855[(13)] = inst_39679);

(statearr_39855[(14)] = inst_39678);

(statearr_39855[(15)] = inst_39677);

(statearr_39855[(17)] = inst_39680);

return statearr_39855;
})();
var statearr_39856_39920 = state_39800__$1;
(statearr_39856_39920[(2)] = null);

(statearr_39856_39920[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (11))){
var inst_39699 = (state_39800[(7)]);
var inst_39677 = (state_39800[(15)]);
var inst_39699__$1 = cljs.core.seq.call(null,inst_39677);
var state_39800__$1 = (function (){var statearr_39857 = state_39800;
(statearr_39857[(7)] = inst_39699__$1);

return statearr_39857;
})();
if(inst_39699__$1){
var statearr_39858_39921 = state_39800__$1;
(statearr_39858_39921[(1)] = (16));

} else {
var statearr_39859_39922 = state_39800__$1;
(statearr_39859_39922[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (9))){
var inst_39729 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39860_39923 = state_39800__$1;
(statearr_39860_39923[(2)] = inst_39729);

(statearr_39860_39923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (5))){
var inst_39675 = cljs.core.deref.call(null,cs);
var inst_39676 = cljs.core.seq.call(null,inst_39675);
var inst_39677 = inst_39676;
var inst_39678 = null;
var inst_39679 = (0);
var inst_39680 = (0);
var state_39800__$1 = (function (){var statearr_39861 = state_39800;
(statearr_39861[(13)] = inst_39679);

(statearr_39861[(14)] = inst_39678);

(statearr_39861[(15)] = inst_39677);

(statearr_39861[(17)] = inst_39680);

return statearr_39861;
})();
var statearr_39862_39924 = state_39800__$1;
(statearr_39862_39924[(2)] = null);

(statearr_39862_39924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (14))){
var state_39800__$1 = state_39800;
var statearr_39863_39925 = state_39800__$1;
(statearr_39863_39925[(2)] = null);

(statearr_39863_39925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (45))){
var inst_39790 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39864_39926 = state_39800__$1;
(statearr_39864_39926[(2)] = inst_39790);

(statearr_39864_39926[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (26))){
var inst_39732 = (state_39800[(29)]);
var inst_39786 = (state_39800[(2)]);
var inst_39787 = cljs.core.seq.call(null,inst_39732);
var state_39800__$1 = (function (){var statearr_39865 = state_39800;
(statearr_39865[(31)] = inst_39786);

return statearr_39865;
})();
if(inst_39787){
var statearr_39866_39927 = state_39800__$1;
(statearr_39866_39927[(1)] = (42));

} else {
var statearr_39867_39928 = state_39800__$1;
(statearr_39867_39928[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (16))){
var inst_39699 = (state_39800[(7)]);
var inst_39701 = cljs.core.chunked_seq_QMARK_.call(null,inst_39699);
var state_39800__$1 = state_39800;
if(inst_39701){
var statearr_39868_39929 = state_39800__$1;
(statearr_39868_39929[(1)] = (19));

} else {
var statearr_39869_39930 = state_39800__$1;
(statearr_39869_39930[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (38))){
var inst_39779 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39870_39931 = state_39800__$1;
(statearr_39870_39931[(2)] = inst_39779);

(statearr_39870_39931[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (30))){
var state_39800__$1 = state_39800;
var statearr_39871_39932 = state_39800__$1;
(statearr_39871_39932[(2)] = null);

(statearr_39871_39932[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (10))){
var inst_39678 = (state_39800[(14)]);
var inst_39680 = (state_39800[(17)]);
var inst_39688 = cljs.core._nth.call(null,inst_39678,inst_39680);
var inst_39689 = cljs.core.nth.call(null,inst_39688,(0),null);
var inst_39690 = cljs.core.nth.call(null,inst_39688,(1),null);
var state_39800__$1 = (function (){var statearr_39872 = state_39800;
(statearr_39872[(26)] = inst_39689);

return statearr_39872;
})();
if(cljs.core.truth_(inst_39690)){
var statearr_39873_39933 = state_39800__$1;
(statearr_39873_39933[(1)] = (13));

} else {
var statearr_39874_39934 = state_39800__$1;
(statearr_39874_39934[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (18))){
var inst_39725 = (state_39800[(2)]);
var state_39800__$1 = state_39800;
var statearr_39875_39935 = state_39800__$1;
(statearr_39875_39935[(2)] = inst_39725);

(statearr_39875_39935[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (42))){
var state_39800__$1 = state_39800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39800__$1,(45),dchan);
} else {
if((state_val_39801 === (37))){
var inst_39668 = (state_39800[(11)]);
var inst_39759 = (state_39800[(25)]);
var inst_39768 = (state_39800[(23)]);
var inst_39768__$1 = cljs.core.first.call(null,inst_39759);
var inst_39769 = cljs.core.async.put_BANG_.call(null,inst_39768__$1,inst_39668,done);
var state_39800__$1 = (function (){var statearr_39876 = state_39800;
(statearr_39876[(23)] = inst_39768__$1);

return statearr_39876;
})();
if(cljs.core.truth_(inst_39769)){
var statearr_39877_39936 = state_39800__$1;
(statearr_39877_39936[(1)] = (39));

} else {
var statearr_39878_39937 = state_39800__$1;
(statearr_39878_39937[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39801 === (8))){
var inst_39679 = (state_39800[(13)]);
var inst_39680 = (state_39800[(17)]);
var inst_39682 = (inst_39680 < inst_39679);
var inst_39683 = inst_39682;
var state_39800__$1 = state_39800;
if(cljs.core.truth_(inst_39683)){
var statearr_39879_39938 = state_39800__$1;
(statearr_39879_39938[(1)] = (10));

} else {
var statearr_39880_39939 = state_39800__$1;
(statearr_39880_39939[(1)] = (11));

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
});})(c__37202__auto___39885,cs,m,dchan,dctr,done))
;
return ((function (switch__37035__auto__,c__37202__auto___39885,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37036__auto__ = null;
var cljs$core$async$mult_$_state_machine__37036__auto____0 = (function (){
var statearr_39881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39881[(0)] = cljs$core$async$mult_$_state_machine__37036__auto__);

(statearr_39881[(1)] = (1));

return statearr_39881;
});
var cljs$core$async$mult_$_state_machine__37036__auto____1 = (function (state_39800){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_39800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e39882){if((e39882 instanceof Object)){
var ex__37039__auto__ = e39882;
var statearr_39883_39940 = state_39800;
(statearr_39883_39940[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39941 = state_39800;
state_39800 = G__39941;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37036__auto__ = function(state_39800){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37036__auto____1.call(this,state_39800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37036__auto____0;
cljs$core$async$mult_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37036__auto____1;
return cljs$core$async$mult_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___39885,cs,m,dchan,dctr,done))
})();
var state__37204__auto__ = (function (){var statearr_39884 = f__37203__auto__.call(null);
(statearr_39884[(6)] = c__37202__auto___39885);

return statearr_39884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___39885,cs,m,dchan,dctr,done))
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
var G__39943 = arguments.length;
switch (G__39943) {
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
var len__4730__auto___39955 = arguments.length;
var i__4731__auto___39956 = (0);
while(true){
if((i__4731__auto___39956 < len__4730__auto___39955)){
args__4736__auto__.push((arguments[i__4731__auto___39956]));

var G__39957 = (i__4731__auto___39956 + (1));
i__4731__auto___39956 = G__39957;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39949){
var map__39950 = p__39949;
var map__39950__$1 = (((((!((map__39950 == null))))?(((((map__39950.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39950.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39950):map__39950);
var opts = map__39950__$1;
var statearr_39952_39958 = state;
(statearr_39952_39958[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__39950,map__39950__$1,opts){
return (function (val){
var statearr_39953_39959 = state;
(statearr_39953_39959[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39950,map__39950__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_39954_39960 = state;
(statearr_39954_39960[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39945){
var G__39946 = cljs.core.first.call(null,seq39945);
var seq39945__$1 = cljs.core.next.call(null,seq39945);
var G__39947 = cljs.core.first.call(null,seq39945__$1);
var seq39945__$2 = cljs.core.next.call(null,seq39945__$1);
var G__39948 = cljs.core.first.call(null,seq39945__$2);
var seq39945__$3 = cljs.core.next.call(null,seq39945__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39946,G__39947,G__39948,seq39945__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39961 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39962){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta39962 = meta39962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39963,meta39962__$1){
var self__ = this;
var _39963__$1 = this;
return (new cljs.core.async.t_cljs$core$async39961(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39962__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39963){
var self__ = this;
var _39963__$1 = this;
return self__.meta39962;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39961.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async39961.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39962","meta39962",-1887749685,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39961.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39961.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39961";

cljs.core.async.t_cljs$core$async39961.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39961");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39961.
 */
cljs.core.async.__GT_t_cljs$core$async39961 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39961(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39962){
return (new cljs.core.async.t_cljs$core$async39961(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39962));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39961(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37202__auto___40125 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40065){
var state_val_40066 = (state_40065[(1)]);
if((state_val_40066 === (7))){
var inst_39980 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
var statearr_40067_40126 = state_40065__$1;
(statearr_40067_40126[(2)] = inst_39980);

(statearr_40067_40126[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (20))){
var inst_39992 = (state_40065[(7)]);
var state_40065__$1 = state_40065;
var statearr_40068_40127 = state_40065__$1;
(statearr_40068_40127[(2)] = inst_39992);

(statearr_40068_40127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (27))){
var state_40065__$1 = state_40065;
var statearr_40069_40128 = state_40065__$1;
(statearr_40069_40128[(2)] = null);

(statearr_40069_40128[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (1))){
var inst_39967 = (state_40065[(8)]);
var inst_39967__$1 = calc_state.call(null);
var inst_39969 = (inst_39967__$1 == null);
var inst_39970 = cljs.core.not.call(null,inst_39969);
var state_40065__$1 = (function (){var statearr_40070 = state_40065;
(statearr_40070[(8)] = inst_39967__$1);

return statearr_40070;
})();
if(inst_39970){
var statearr_40071_40129 = state_40065__$1;
(statearr_40071_40129[(1)] = (2));

} else {
var statearr_40072_40130 = state_40065__$1;
(statearr_40072_40130[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (24))){
var inst_40025 = (state_40065[(9)]);
var inst_40016 = (state_40065[(10)]);
var inst_40039 = (state_40065[(11)]);
var inst_40039__$1 = inst_40016.call(null,inst_40025);
var state_40065__$1 = (function (){var statearr_40073 = state_40065;
(statearr_40073[(11)] = inst_40039__$1);

return statearr_40073;
})();
if(cljs.core.truth_(inst_40039__$1)){
var statearr_40074_40131 = state_40065__$1;
(statearr_40074_40131[(1)] = (29));

} else {
var statearr_40075_40132 = state_40065__$1;
(statearr_40075_40132[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (4))){
var inst_39983 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
if(cljs.core.truth_(inst_39983)){
var statearr_40076_40133 = state_40065__$1;
(statearr_40076_40133[(1)] = (8));

} else {
var statearr_40077_40134 = state_40065__$1;
(statearr_40077_40134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (15))){
var inst_40010 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
if(cljs.core.truth_(inst_40010)){
var statearr_40078_40135 = state_40065__$1;
(statearr_40078_40135[(1)] = (19));

} else {
var statearr_40079_40136 = state_40065__$1;
(statearr_40079_40136[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (21))){
var inst_40015 = (state_40065[(12)]);
var inst_40015__$1 = (state_40065[(2)]);
var inst_40016 = cljs.core.get.call(null,inst_40015__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40017 = cljs.core.get.call(null,inst_40015__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40018 = cljs.core.get.call(null,inst_40015__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40065__$1 = (function (){var statearr_40080 = state_40065;
(statearr_40080[(10)] = inst_40016);

(statearr_40080[(12)] = inst_40015__$1);

(statearr_40080[(13)] = inst_40017);

return statearr_40080;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40065__$1,(22),inst_40018);
} else {
if((state_val_40066 === (31))){
var inst_40047 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
if(cljs.core.truth_(inst_40047)){
var statearr_40081_40137 = state_40065__$1;
(statearr_40081_40137[(1)] = (32));

} else {
var statearr_40082_40138 = state_40065__$1;
(statearr_40082_40138[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (32))){
var inst_40024 = (state_40065[(14)]);
var state_40065__$1 = state_40065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40065__$1,(35),out,inst_40024);
} else {
if((state_val_40066 === (33))){
var inst_40015 = (state_40065[(12)]);
var inst_39992 = inst_40015;
var state_40065__$1 = (function (){var statearr_40083 = state_40065;
(statearr_40083[(7)] = inst_39992);

return statearr_40083;
})();
var statearr_40084_40139 = state_40065__$1;
(statearr_40084_40139[(2)] = null);

(statearr_40084_40139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (13))){
var inst_39992 = (state_40065[(7)]);
var inst_39999 = inst_39992.cljs$lang$protocol_mask$partition0$;
var inst_40000 = (inst_39999 & (64));
var inst_40001 = inst_39992.cljs$core$ISeq$;
var inst_40002 = (cljs.core.PROTOCOL_SENTINEL === inst_40001);
var inst_40003 = ((inst_40000) || (inst_40002));
var state_40065__$1 = state_40065;
if(cljs.core.truth_(inst_40003)){
var statearr_40085_40140 = state_40065__$1;
(statearr_40085_40140[(1)] = (16));

} else {
var statearr_40086_40141 = state_40065__$1;
(statearr_40086_40141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (22))){
var inst_40025 = (state_40065[(9)]);
var inst_40024 = (state_40065[(14)]);
var inst_40023 = (state_40065[(2)]);
var inst_40024__$1 = cljs.core.nth.call(null,inst_40023,(0),null);
var inst_40025__$1 = cljs.core.nth.call(null,inst_40023,(1),null);
var inst_40026 = (inst_40024__$1 == null);
var inst_40027 = cljs.core._EQ_.call(null,inst_40025__$1,change);
var inst_40028 = ((inst_40026) || (inst_40027));
var state_40065__$1 = (function (){var statearr_40087 = state_40065;
(statearr_40087[(9)] = inst_40025__$1);

(statearr_40087[(14)] = inst_40024__$1);

return statearr_40087;
})();
if(cljs.core.truth_(inst_40028)){
var statearr_40088_40142 = state_40065__$1;
(statearr_40088_40142[(1)] = (23));

} else {
var statearr_40089_40143 = state_40065__$1;
(statearr_40089_40143[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (36))){
var inst_40015 = (state_40065[(12)]);
var inst_39992 = inst_40015;
var state_40065__$1 = (function (){var statearr_40090 = state_40065;
(statearr_40090[(7)] = inst_39992);

return statearr_40090;
})();
var statearr_40091_40144 = state_40065__$1;
(statearr_40091_40144[(2)] = null);

(statearr_40091_40144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (29))){
var inst_40039 = (state_40065[(11)]);
var state_40065__$1 = state_40065;
var statearr_40092_40145 = state_40065__$1;
(statearr_40092_40145[(2)] = inst_40039);

(statearr_40092_40145[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (6))){
var state_40065__$1 = state_40065;
var statearr_40093_40146 = state_40065__$1;
(statearr_40093_40146[(2)] = false);

(statearr_40093_40146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (28))){
var inst_40035 = (state_40065[(2)]);
var inst_40036 = calc_state.call(null);
var inst_39992 = inst_40036;
var state_40065__$1 = (function (){var statearr_40094 = state_40065;
(statearr_40094[(7)] = inst_39992);

(statearr_40094[(15)] = inst_40035);

return statearr_40094;
})();
var statearr_40095_40147 = state_40065__$1;
(statearr_40095_40147[(2)] = null);

(statearr_40095_40147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (25))){
var inst_40061 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
var statearr_40096_40148 = state_40065__$1;
(statearr_40096_40148[(2)] = inst_40061);

(statearr_40096_40148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (34))){
var inst_40059 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
var statearr_40097_40149 = state_40065__$1;
(statearr_40097_40149[(2)] = inst_40059);

(statearr_40097_40149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (17))){
var state_40065__$1 = state_40065;
var statearr_40098_40150 = state_40065__$1;
(statearr_40098_40150[(2)] = false);

(statearr_40098_40150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (3))){
var state_40065__$1 = state_40065;
var statearr_40099_40151 = state_40065__$1;
(statearr_40099_40151[(2)] = false);

(statearr_40099_40151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (12))){
var inst_40063 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40065__$1,inst_40063);
} else {
if((state_val_40066 === (2))){
var inst_39967 = (state_40065[(8)]);
var inst_39972 = inst_39967.cljs$lang$protocol_mask$partition0$;
var inst_39973 = (inst_39972 & (64));
var inst_39974 = inst_39967.cljs$core$ISeq$;
var inst_39975 = (cljs.core.PROTOCOL_SENTINEL === inst_39974);
var inst_39976 = ((inst_39973) || (inst_39975));
var state_40065__$1 = state_40065;
if(cljs.core.truth_(inst_39976)){
var statearr_40100_40152 = state_40065__$1;
(statearr_40100_40152[(1)] = (5));

} else {
var statearr_40101_40153 = state_40065__$1;
(statearr_40101_40153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (23))){
var inst_40024 = (state_40065[(14)]);
var inst_40030 = (inst_40024 == null);
var state_40065__$1 = state_40065;
if(cljs.core.truth_(inst_40030)){
var statearr_40102_40154 = state_40065__$1;
(statearr_40102_40154[(1)] = (26));

} else {
var statearr_40103_40155 = state_40065__$1;
(statearr_40103_40155[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (35))){
var inst_40050 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
if(cljs.core.truth_(inst_40050)){
var statearr_40104_40156 = state_40065__$1;
(statearr_40104_40156[(1)] = (36));

} else {
var statearr_40105_40157 = state_40065__$1;
(statearr_40105_40157[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (19))){
var inst_39992 = (state_40065[(7)]);
var inst_40012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39992);
var state_40065__$1 = state_40065;
var statearr_40106_40158 = state_40065__$1;
(statearr_40106_40158[(2)] = inst_40012);

(statearr_40106_40158[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (11))){
var inst_39992 = (state_40065[(7)]);
var inst_39996 = (inst_39992 == null);
var inst_39997 = cljs.core.not.call(null,inst_39996);
var state_40065__$1 = state_40065;
if(inst_39997){
var statearr_40107_40159 = state_40065__$1;
(statearr_40107_40159[(1)] = (13));

} else {
var statearr_40108_40160 = state_40065__$1;
(statearr_40108_40160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (9))){
var inst_39967 = (state_40065[(8)]);
var state_40065__$1 = state_40065;
var statearr_40109_40161 = state_40065__$1;
(statearr_40109_40161[(2)] = inst_39967);

(statearr_40109_40161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (5))){
var state_40065__$1 = state_40065;
var statearr_40110_40162 = state_40065__$1;
(statearr_40110_40162[(2)] = true);

(statearr_40110_40162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (14))){
var state_40065__$1 = state_40065;
var statearr_40111_40163 = state_40065__$1;
(statearr_40111_40163[(2)] = false);

(statearr_40111_40163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (26))){
var inst_40025 = (state_40065[(9)]);
var inst_40032 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40025);
var state_40065__$1 = state_40065;
var statearr_40112_40164 = state_40065__$1;
(statearr_40112_40164[(2)] = inst_40032);

(statearr_40112_40164[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (16))){
var state_40065__$1 = state_40065;
var statearr_40113_40165 = state_40065__$1;
(statearr_40113_40165[(2)] = true);

(statearr_40113_40165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (38))){
var inst_40055 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
var statearr_40114_40166 = state_40065__$1;
(statearr_40114_40166[(2)] = inst_40055);

(statearr_40114_40166[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (30))){
var inst_40025 = (state_40065[(9)]);
var inst_40016 = (state_40065[(10)]);
var inst_40017 = (state_40065[(13)]);
var inst_40042 = cljs.core.empty_QMARK_.call(null,inst_40016);
var inst_40043 = inst_40017.call(null,inst_40025);
var inst_40044 = cljs.core.not.call(null,inst_40043);
var inst_40045 = ((inst_40042) && (inst_40044));
var state_40065__$1 = state_40065;
var statearr_40115_40167 = state_40065__$1;
(statearr_40115_40167[(2)] = inst_40045);

(statearr_40115_40167[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (10))){
var inst_39967 = (state_40065[(8)]);
var inst_39988 = (state_40065[(2)]);
var inst_39989 = cljs.core.get.call(null,inst_39988,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39990 = cljs.core.get.call(null,inst_39988,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39991 = cljs.core.get.call(null,inst_39988,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39992 = inst_39967;
var state_40065__$1 = (function (){var statearr_40116 = state_40065;
(statearr_40116[(16)] = inst_39989);

(statearr_40116[(7)] = inst_39992);

(statearr_40116[(17)] = inst_39990);

(statearr_40116[(18)] = inst_39991);

return statearr_40116;
})();
var statearr_40117_40168 = state_40065__$1;
(statearr_40117_40168[(2)] = null);

(statearr_40117_40168[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (18))){
var inst_40007 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
var statearr_40118_40169 = state_40065__$1;
(statearr_40118_40169[(2)] = inst_40007);

(statearr_40118_40169[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (37))){
var state_40065__$1 = state_40065;
var statearr_40119_40170 = state_40065__$1;
(statearr_40119_40170[(2)] = null);

(statearr_40119_40170[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (8))){
var inst_39967 = (state_40065[(8)]);
var inst_39985 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39967);
var state_40065__$1 = state_40065;
var statearr_40120_40171 = state_40065__$1;
(statearr_40120_40171[(2)] = inst_39985);

(statearr_40120_40171[(1)] = (10));


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
});})(c__37202__auto___40125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37035__auto__,c__37202__auto___40125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37036__auto__ = null;
var cljs$core$async$mix_$_state_machine__37036__auto____0 = (function (){
var statearr_40121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40121[(0)] = cljs$core$async$mix_$_state_machine__37036__auto__);

(statearr_40121[(1)] = (1));

return statearr_40121;
});
var cljs$core$async$mix_$_state_machine__37036__auto____1 = (function (state_40065){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40122){if((e40122 instanceof Object)){
var ex__37039__auto__ = e40122;
var statearr_40123_40172 = state_40065;
(statearr_40123_40172[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40122;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40173 = state_40065;
state_40065 = G__40173;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37036__auto__ = function(state_40065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37036__auto____1.call(this,state_40065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37036__auto____0;
cljs$core$async$mix_$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37036__auto____1;
return cljs$core$async$mix_$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37204__auto__ = (function (){var statearr_40124 = f__37203__auto__.call(null);
(statearr_40124[(6)] = c__37202__auto___40125);

return statearr_40124;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40125,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__40175 = arguments.length;
switch (G__40175) {
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
var G__40179 = arguments.length;
switch (G__40179) {
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
return (function (p1__40177_SHARP_){
if(cljs.core.truth_(p1__40177_SHARP_.call(null,topic))){
return p1__40177_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40177_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40180 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40180 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40181){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40181 = meta40181;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40182,meta40181__$1){
var self__ = this;
var _40182__$1 = this;
return (new cljs.core.async.t_cljs$core$async40180(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40181__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40182){
var self__ = this;
var _40182__$1 = this;
return self__.meta40181;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40180.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40181","meta40181",2058220186,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40180.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40180.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40180";

cljs.core.async.t_cljs$core$async40180.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async40180");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40180.
 */
cljs.core.async.__GT_t_cljs$core$async40180 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40180(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40181){
return (new cljs.core.async.t_cljs$core$async40180(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40181));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40180(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37202__auto___40300 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40300,mults,ensure_mult,p){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40300,mults,ensure_mult,p){
return (function (state_40254){
var state_val_40255 = (state_40254[(1)]);
if((state_val_40255 === (7))){
var inst_40250 = (state_40254[(2)]);
var state_40254__$1 = state_40254;
var statearr_40256_40301 = state_40254__$1;
(statearr_40256_40301[(2)] = inst_40250);

(statearr_40256_40301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (20))){
var state_40254__$1 = state_40254;
var statearr_40257_40302 = state_40254__$1;
(statearr_40257_40302[(2)] = null);

(statearr_40257_40302[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (1))){
var state_40254__$1 = state_40254;
var statearr_40258_40303 = state_40254__$1;
(statearr_40258_40303[(2)] = null);

(statearr_40258_40303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (24))){
var inst_40233 = (state_40254[(7)]);
var inst_40242 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40233);
var state_40254__$1 = state_40254;
var statearr_40259_40304 = state_40254__$1;
(statearr_40259_40304[(2)] = inst_40242);

(statearr_40259_40304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (4))){
var inst_40185 = (state_40254[(8)]);
var inst_40185__$1 = (state_40254[(2)]);
var inst_40186 = (inst_40185__$1 == null);
var state_40254__$1 = (function (){var statearr_40260 = state_40254;
(statearr_40260[(8)] = inst_40185__$1);

return statearr_40260;
})();
if(cljs.core.truth_(inst_40186)){
var statearr_40261_40305 = state_40254__$1;
(statearr_40261_40305[(1)] = (5));

} else {
var statearr_40262_40306 = state_40254__$1;
(statearr_40262_40306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (15))){
var inst_40227 = (state_40254[(2)]);
var state_40254__$1 = state_40254;
var statearr_40263_40307 = state_40254__$1;
(statearr_40263_40307[(2)] = inst_40227);

(statearr_40263_40307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (21))){
var inst_40247 = (state_40254[(2)]);
var state_40254__$1 = (function (){var statearr_40264 = state_40254;
(statearr_40264[(9)] = inst_40247);

return statearr_40264;
})();
var statearr_40265_40308 = state_40254__$1;
(statearr_40265_40308[(2)] = null);

(statearr_40265_40308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (13))){
var inst_40209 = (state_40254[(10)]);
var inst_40211 = cljs.core.chunked_seq_QMARK_.call(null,inst_40209);
var state_40254__$1 = state_40254;
if(inst_40211){
var statearr_40266_40309 = state_40254__$1;
(statearr_40266_40309[(1)] = (16));

} else {
var statearr_40267_40310 = state_40254__$1;
(statearr_40267_40310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (22))){
var inst_40239 = (state_40254[(2)]);
var state_40254__$1 = state_40254;
if(cljs.core.truth_(inst_40239)){
var statearr_40268_40311 = state_40254__$1;
(statearr_40268_40311[(1)] = (23));

} else {
var statearr_40269_40312 = state_40254__$1;
(statearr_40269_40312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (6))){
var inst_40185 = (state_40254[(8)]);
var inst_40233 = (state_40254[(7)]);
var inst_40235 = (state_40254[(11)]);
var inst_40233__$1 = topic_fn.call(null,inst_40185);
var inst_40234 = cljs.core.deref.call(null,mults);
var inst_40235__$1 = cljs.core.get.call(null,inst_40234,inst_40233__$1);
var state_40254__$1 = (function (){var statearr_40270 = state_40254;
(statearr_40270[(7)] = inst_40233__$1);

(statearr_40270[(11)] = inst_40235__$1);

return statearr_40270;
})();
if(cljs.core.truth_(inst_40235__$1)){
var statearr_40271_40313 = state_40254__$1;
(statearr_40271_40313[(1)] = (19));

} else {
var statearr_40272_40314 = state_40254__$1;
(statearr_40272_40314[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (25))){
var inst_40244 = (state_40254[(2)]);
var state_40254__$1 = state_40254;
var statearr_40273_40315 = state_40254__$1;
(statearr_40273_40315[(2)] = inst_40244);

(statearr_40273_40315[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (17))){
var inst_40209 = (state_40254[(10)]);
var inst_40218 = cljs.core.first.call(null,inst_40209);
var inst_40219 = cljs.core.async.muxch_STAR_.call(null,inst_40218);
var inst_40220 = cljs.core.async.close_BANG_.call(null,inst_40219);
var inst_40221 = cljs.core.next.call(null,inst_40209);
var inst_40195 = inst_40221;
var inst_40196 = null;
var inst_40197 = (0);
var inst_40198 = (0);
var state_40254__$1 = (function (){var statearr_40274 = state_40254;
(statearr_40274[(12)] = inst_40196);

(statearr_40274[(13)] = inst_40195);

(statearr_40274[(14)] = inst_40198);

(statearr_40274[(15)] = inst_40220);

(statearr_40274[(16)] = inst_40197);

return statearr_40274;
})();
var statearr_40275_40316 = state_40254__$1;
(statearr_40275_40316[(2)] = null);

(statearr_40275_40316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (3))){
var inst_40252 = (state_40254[(2)]);
var state_40254__$1 = state_40254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40254__$1,inst_40252);
} else {
if((state_val_40255 === (12))){
var inst_40229 = (state_40254[(2)]);
var state_40254__$1 = state_40254;
var statearr_40276_40317 = state_40254__$1;
(statearr_40276_40317[(2)] = inst_40229);

(statearr_40276_40317[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (2))){
var state_40254__$1 = state_40254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40254__$1,(4),ch);
} else {
if((state_val_40255 === (23))){
var state_40254__$1 = state_40254;
var statearr_40277_40318 = state_40254__$1;
(statearr_40277_40318[(2)] = null);

(statearr_40277_40318[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (19))){
var inst_40185 = (state_40254[(8)]);
var inst_40235 = (state_40254[(11)]);
var inst_40237 = cljs.core.async.muxch_STAR_.call(null,inst_40235);
var state_40254__$1 = state_40254;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40254__$1,(22),inst_40237,inst_40185);
} else {
if((state_val_40255 === (11))){
var inst_40195 = (state_40254[(13)]);
var inst_40209 = (state_40254[(10)]);
var inst_40209__$1 = cljs.core.seq.call(null,inst_40195);
var state_40254__$1 = (function (){var statearr_40278 = state_40254;
(statearr_40278[(10)] = inst_40209__$1);

return statearr_40278;
})();
if(inst_40209__$1){
var statearr_40279_40319 = state_40254__$1;
(statearr_40279_40319[(1)] = (13));

} else {
var statearr_40280_40320 = state_40254__$1;
(statearr_40280_40320[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (9))){
var inst_40231 = (state_40254[(2)]);
var state_40254__$1 = state_40254;
var statearr_40281_40321 = state_40254__$1;
(statearr_40281_40321[(2)] = inst_40231);

(statearr_40281_40321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (5))){
var inst_40192 = cljs.core.deref.call(null,mults);
var inst_40193 = cljs.core.vals.call(null,inst_40192);
var inst_40194 = cljs.core.seq.call(null,inst_40193);
var inst_40195 = inst_40194;
var inst_40196 = null;
var inst_40197 = (0);
var inst_40198 = (0);
var state_40254__$1 = (function (){var statearr_40282 = state_40254;
(statearr_40282[(12)] = inst_40196);

(statearr_40282[(13)] = inst_40195);

(statearr_40282[(14)] = inst_40198);

(statearr_40282[(16)] = inst_40197);

return statearr_40282;
})();
var statearr_40283_40322 = state_40254__$1;
(statearr_40283_40322[(2)] = null);

(statearr_40283_40322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (14))){
var state_40254__$1 = state_40254;
var statearr_40287_40323 = state_40254__$1;
(statearr_40287_40323[(2)] = null);

(statearr_40287_40323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (16))){
var inst_40209 = (state_40254[(10)]);
var inst_40213 = cljs.core.chunk_first.call(null,inst_40209);
var inst_40214 = cljs.core.chunk_rest.call(null,inst_40209);
var inst_40215 = cljs.core.count.call(null,inst_40213);
var inst_40195 = inst_40214;
var inst_40196 = inst_40213;
var inst_40197 = inst_40215;
var inst_40198 = (0);
var state_40254__$1 = (function (){var statearr_40288 = state_40254;
(statearr_40288[(12)] = inst_40196);

(statearr_40288[(13)] = inst_40195);

(statearr_40288[(14)] = inst_40198);

(statearr_40288[(16)] = inst_40197);

return statearr_40288;
})();
var statearr_40289_40324 = state_40254__$1;
(statearr_40289_40324[(2)] = null);

(statearr_40289_40324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (10))){
var inst_40196 = (state_40254[(12)]);
var inst_40195 = (state_40254[(13)]);
var inst_40198 = (state_40254[(14)]);
var inst_40197 = (state_40254[(16)]);
var inst_40203 = cljs.core._nth.call(null,inst_40196,inst_40198);
var inst_40204 = cljs.core.async.muxch_STAR_.call(null,inst_40203);
var inst_40205 = cljs.core.async.close_BANG_.call(null,inst_40204);
var inst_40206 = (inst_40198 + (1));
var tmp40284 = inst_40196;
var tmp40285 = inst_40195;
var tmp40286 = inst_40197;
var inst_40195__$1 = tmp40285;
var inst_40196__$1 = tmp40284;
var inst_40197__$1 = tmp40286;
var inst_40198__$1 = inst_40206;
var state_40254__$1 = (function (){var statearr_40290 = state_40254;
(statearr_40290[(12)] = inst_40196__$1);

(statearr_40290[(17)] = inst_40205);

(statearr_40290[(13)] = inst_40195__$1);

(statearr_40290[(14)] = inst_40198__$1);

(statearr_40290[(16)] = inst_40197__$1);

return statearr_40290;
})();
var statearr_40291_40325 = state_40254__$1;
(statearr_40291_40325[(2)] = null);

(statearr_40291_40325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (18))){
var inst_40224 = (state_40254[(2)]);
var state_40254__$1 = state_40254;
var statearr_40292_40326 = state_40254__$1;
(statearr_40292_40326[(2)] = inst_40224);

(statearr_40292_40326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40255 === (8))){
var inst_40198 = (state_40254[(14)]);
var inst_40197 = (state_40254[(16)]);
var inst_40200 = (inst_40198 < inst_40197);
var inst_40201 = inst_40200;
var state_40254__$1 = state_40254;
if(cljs.core.truth_(inst_40201)){
var statearr_40293_40327 = state_40254__$1;
(statearr_40293_40327[(1)] = (10));

} else {
var statearr_40294_40328 = state_40254__$1;
(statearr_40294_40328[(1)] = (11));

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
});})(c__37202__auto___40300,mults,ensure_mult,p))
;
return ((function (switch__37035__auto__,c__37202__auto___40300,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_40295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40295[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_40295[(1)] = (1));

return statearr_40295;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_40254){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40296){if((e40296 instanceof Object)){
var ex__37039__auto__ = e40296;
var statearr_40297_40329 = state_40254;
(statearr_40297_40329[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40330 = state_40254;
state_40254 = G__40330;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_40254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_40254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40300,mults,ensure_mult,p))
})();
var state__37204__auto__ = (function (){var statearr_40298 = f__37203__auto__.call(null);
(statearr_40298[(6)] = c__37202__auto___40300);

return statearr_40298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40300,mults,ensure_mult,p))
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
var G__40332 = arguments.length;
switch (G__40332) {
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
var G__40335 = arguments.length;
switch (G__40335) {
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
var G__40338 = arguments.length;
switch (G__40338) {
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
var c__37202__auto___40405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40377){
var state_val_40378 = (state_40377[(1)]);
if((state_val_40378 === (7))){
var state_40377__$1 = state_40377;
var statearr_40379_40406 = state_40377__$1;
(statearr_40379_40406[(2)] = null);

(statearr_40379_40406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (1))){
var state_40377__$1 = state_40377;
var statearr_40380_40407 = state_40377__$1;
(statearr_40380_40407[(2)] = null);

(statearr_40380_40407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (4))){
var inst_40341 = (state_40377[(7)]);
var inst_40343 = (inst_40341 < cnt);
var state_40377__$1 = state_40377;
if(cljs.core.truth_(inst_40343)){
var statearr_40381_40408 = state_40377__$1;
(statearr_40381_40408[(1)] = (6));

} else {
var statearr_40382_40409 = state_40377__$1;
(statearr_40382_40409[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (15))){
var inst_40373 = (state_40377[(2)]);
var state_40377__$1 = state_40377;
var statearr_40383_40410 = state_40377__$1;
(statearr_40383_40410[(2)] = inst_40373);

(statearr_40383_40410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (13))){
var inst_40366 = cljs.core.async.close_BANG_.call(null,out);
var state_40377__$1 = state_40377;
var statearr_40384_40411 = state_40377__$1;
(statearr_40384_40411[(2)] = inst_40366);

(statearr_40384_40411[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (6))){
var state_40377__$1 = state_40377;
var statearr_40385_40412 = state_40377__$1;
(statearr_40385_40412[(2)] = null);

(statearr_40385_40412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (3))){
var inst_40375 = (state_40377[(2)]);
var state_40377__$1 = state_40377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40377__$1,inst_40375);
} else {
if((state_val_40378 === (12))){
var inst_40363 = (state_40377[(8)]);
var inst_40363__$1 = (state_40377[(2)]);
var inst_40364 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40363__$1);
var state_40377__$1 = (function (){var statearr_40386 = state_40377;
(statearr_40386[(8)] = inst_40363__$1);

return statearr_40386;
})();
if(cljs.core.truth_(inst_40364)){
var statearr_40387_40413 = state_40377__$1;
(statearr_40387_40413[(1)] = (13));

} else {
var statearr_40388_40414 = state_40377__$1;
(statearr_40388_40414[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (2))){
var inst_40340 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40341 = (0);
var state_40377__$1 = (function (){var statearr_40389 = state_40377;
(statearr_40389[(7)] = inst_40341);

(statearr_40389[(9)] = inst_40340);

return statearr_40389;
})();
var statearr_40390_40415 = state_40377__$1;
(statearr_40390_40415[(2)] = null);

(statearr_40390_40415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (11))){
var inst_40341 = (state_40377[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40377,(10),Object,null,(9));
var inst_40350 = chs__$1.call(null,inst_40341);
var inst_40351 = done.call(null,inst_40341);
var inst_40352 = cljs.core.async.take_BANG_.call(null,inst_40350,inst_40351);
var state_40377__$1 = state_40377;
var statearr_40391_40416 = state_40377__$1;
(statearr_40391_40416[(2)] = inst_40352);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (9))){
var inst_40341 = (state_40377[(7)]);
var inst_40354 = (state_40377[(2)]);
var inst_40355 = (inst_40341 + (1));
var inst_40341__$1 = inst_40355;
var state_40377__$1 = (function (){var statearr_40392 = state_40377;
(statearr_40392[(7)] = inst_40341__$1);

(statearr_40392[(10)] = inst_40354);

return statearr_40392;
})();
var statearr_40393_40417 = state_40377__$1;
(statearr_40393_40417[(2)] = null);

(statearr_40393_40417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (5))){
var inst_40361 = (state_40377[(2)]);
var state_40377__$1 = (function (){var statearr_40394 = state_40377;
(statearr_40394[(11)] = inst_40361);

return statearr_40394;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40377__$1,(12),dchan);
} else {
if((state_val_40378 === (14))){
var inst_40363 = (state_40377[(8)]);
var inst_40368 = cljs.core.apply.call(null,f,inst_40363);
var state_40377__$1 = state_40377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40377__$1,(16),out,inst_40368);
} else {
if((state_val_40378 === (16))){
var inst_40370 = (state_40377[(2)]);
var state_40377__$1 = (function (){var statearr_40395 = state_40377;
(statearr_40395[(12)] = inst_40370);

return statearr_40395;
})();
var statearr_40396_40418 = state_40377__$1;
(statearr_40396_40418[(2)] = null);

(statearr_40396_40418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (10))){
var inst_40345 = (state_40377[(2)]);
var inst_40346 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40377__$1 = (function (){var statearr_40397 = state_40377;
(statearr_40397[(13)] = inst_40345);

return statearr_40397;
})();
var statearr_40398_40419 = state_40377__$1;
(statearr_40398_40419[(2)] = inst_40346);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40377__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (8))){
var inst_40359 = (state_40377[(2)]);
var state_40377__$1 = state_40377;
var statearr_40399_40420 = state_40377__$1;
(statearr_40399_40420[(2)] = inst_40359);

(statearr_40399_40420[(1)] = (5));


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
});})(c__37202__auto___40405,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37035__auto__,c__37202__auto___40405,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_40400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40400[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_40400[(1)] = (1));

return statearr_40400;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_40377){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40401){if((e40401 instanceof Object)){
var ex__37039__auto__ = e40401;
var statearr_40402_40421 = state_40377;
(statearr_40402_40421[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40422 = state_40377;
state_40377 = G__40422;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_40377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_40377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40405,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37204__auto__ = (function (){var statearr_40403 = f__37203__auto__.call(null);
(statearr_40403[(6)] = c__37202__auto___40405);

return statearr_40403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40405,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__40425 = arguments.length;
switch (G__40425) {
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
var c__37202__auto___40479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40479,out){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40479,out){
return (function (state_40457){
var state_val_40458 = (state_40457[(1)]);
if((state_val_40458 === (7))){
var inst_40436 = (state_40457[(7)]);
var inst_40437 = (state_40457[(8)]);
var inst_40436__$1 = (state_40457[(2)]);
var inst_40437__$1 = cljs.core.nth.call(null,inst_40436__$1,(0),null);
var inst_40438 = cljs.core.nth.call(null,inst_40436__$1,(1),null);
var inst_40439 = (inst_40437__$1 == null);
var state_40457__$1 = (function (){var statearr_40459 = state_40457;
(statearr_40459[(9)] = inst_40438);

(statearr_40459[(7)] = inst_40436__$1);

(statearr_40459[(8)] = inst_40437__$1);

return statearr_40459;
})();
if(cljs.core.truth_(inst_40439)){
var statearr_40460_40480 = state_40457__$1;
(statearr_40460_40480[(1)] = (8));

} else {
var statearr_40461_40481 = state_40457__$1;
(statearr_40461_40481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (1))){
var inst_40426 = cljs.core.vec.call(null,chs);
var inst_40427 = inst_40426;
var state_40457__$1 = (function (){var statearr_40462 = state_40457;
(statearr_40462[(10)] = inst_40427);

return statearr_40462;
})();
var statearr_40463_40482 = state_40457__$1;
(statearr_40463_40482[(2)] = null);

(statearr_40463_40482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (4))){
var inst_40427 = (state_40457[(10)]);
var state_40457__$1 = state_40457;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40457__$1,(7),inst_40427);
} else {
if((state_val_40458 === (6))){
var inst_40453 = (state_40457[(2)]);
var state_40457__$1 = state_40457;
var statearr_40464_40483 = state_40457__$1;
(statearr_40464_40483[(2)] = inst_40453);

(statearr_40464_40483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (3))){
var inst_40455 = (state_40457[(2)]);
var state_40457__$1 = state_40457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40457__$1,inst_40455);
} else {
if((state_val_40458 === (2))){
var inst_40427 = (state_40457[(10)]);
var inst_40429 = cljs.core.count.call(null,inst_40427);
var inst_40430 = (inst_40429 > (0));
var state_40457__$1 = state_40457;
if(cljs.core.truth_(inst_40430)){
var statearr_40466_40484 = state_40457__$1;
(statearr_40466_40484[(1)] = (4));

} else {
var statearr_40467_40485 = state_40457__$1;
(statearr_40467_40485[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (11))){
var inst_40427 = (state_40457[(10)]);
var inst_40446 = (state_40457[(2)]);
var tmp40465 = inst_40427;
var inst_40427__$1 = tmp40465;
var state_40457__$1 = (function (){var statearr_40468 = state_40457;
(statearr_40468[(10)] = inst_40427__$1);

(statearr_40468[(11)] = inst_40446);

return statearr_40468;
})();
var statearr_40469_40486 = state_40457__$1;
(statearr_40469_40486[(2)] = null);

(statearr_40469_40486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (9))){
var inst_40437 = (state_40457[(8)]);
var state_40457__$1 = state_40457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40457__$1,(11),out,inst_40437);
} else {
if((state_val_40458 === (5))){
var inst_40451 = cljs.core.async.close_BANG_.call(null,out);
var state_40457__$1 = state_40457;
var statearr_40470_40487 = state_40457__$1;
(statearr_40470_40487[(2)] = inst_40451);

(statearr_40470_40487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (10))){
var inst_40449 = (state_40457[(2)]);
var state_40457__$1 = state_40457;
var statearr_40471_40488 = state_40457__$1;
(statearr_40471_40488[(2)] = inst_40449);

(statearr_40471_40488[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40458 === (8))){
var inst_40427 = (state_40457[(10)]);
var inst_40438 = (state_40457[(9)]);
var inst_40436 = (state_40457[(7)]);
var inst_40437 = (state_40457[(8)]);
var inst_40441 = (function (){var cs = inst_40427;
var vec__40432 = inst_40436;
var v = inst_40437;
var c = inst_40438;
return ((function (cs,vec__40432,v,c,inst_40427,inst_40438,inst_40436,inst_40437,state_val_40458,c__37202__auto___40479,out){
return (function (p1__40423_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40423_SHARP_);
});
;})(cs,vec__40432,v,c,inst_40427,inst_40438,inst_40436,inst_40437,state_val_40458,c__37202__auto___40479,out))
})();
var inst_40442 = cljs.core.filterv.call(null,inst_40441,inst_40427);
var inst_40427__$1 = inst_40442;
var state_40457__$1 = (function (){var statearr_40472 = state_40457;
(statearr_40472[(10)] = inst_40427__$1);

return statearr_40472;
})();
var statearr_40473_40489 = state_40457__$1;
(statearr_40473_40489[(2)] = null);

(statearr_40473_40489[(1)] = (2));


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
});})(c__37202__auto___40479,out))
;
return ((function (switch__37035__auto__,c__37202__auto___40479,out){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_40474 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40474[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_40474[(1)] = (1));

return statearr_40474;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_40457){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40475){if((e40475 instanceof Object)){
var ex__37039__auto__ = e40475;
var statearr_40476_40490 = state_40457;
(statearr_40476_40490[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40491 = state_40457;
state_40457 = G__40491;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_40457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_40457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40479,out))
})();
var state__37204__auto__ = (function (){var statearr_40477 = f__37203__auto__.call(null);
(statearr_40477[(6)] = c__37202__auto___40479);

return statearr_40477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40479,out))
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
var G__40493 = arguments.length;
switch (G__40493) {
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
var c__37202__auto___40538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40538,out){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40538,out){
return (function (state_40517){
var state_val_40518 = (state_40517[(1)]);
if((state_val_40518 === (7))){
var inst_40499 = (state_40517[(7)]);
var inst_40499__$1 = (state_40517[(2)]);
var inst_40500 = (inst_40499__$1 == null);
var inst_40501 = cljs.core.not.call(null,inst_40500);
var state_40517__$1 = (function (){var statearr_40519 = state_40517;
(statearr_40519[(7)] = inst_40499__$1);

return statearr_40519;
})();
if(inst_40501){
var statearr_40520_40539 = state_40517__$1;
(statearr_40520_40539[(1)] = (8));

} else {
var statearr_40521_40540 = state_40517__$1;
(statearr_40521_40540[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (1))){
var inst_40494 = (0);
var state_40517__$1 = (function (){var statearr_40522 = state_40517;
(statearr_40522[(8)] = inst_40494);

return statearr_40522;
})();
var statearr_40523_40541 = state_40517__$1;
(statearr_40523_40541[(2)] = null);

(statearr_40523_40541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (4))){
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40517__$1,(7),ch);
} else {
if((state_val_40518 === (6))){
var inst_40512 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40524_40542 = state_40517__$1;
(statearr_40524_40542[(2)] = inst_40512);

(statearr_40524_40542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (3))){
var inst_40514 = (state_40517[(2)]);
var inst_40515 = cljs.core.async.close_BANG_.call(null,out);
var state_40517__$1 = (function (){var statearr_40525 = state_40517;
(statearr_40525[(9)] = inst_40514);

return statearr_40525;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40517__$1,inst_40515);
} else {
if((state_val_40518 === (2))){
var inst_40494 = (state_40517[(8)]);
var inst_40496 = (inst_40494 < n);
var state_40517__$1 = state_40517;
if(cljs.core.truth_(inst_40496)){
var statearr_40526_40543 = state_40517__$1;
(statearr_40526_40543[(1)] = (4));

} else {
var statearr_40527_40544 = state_40517__$1;
(statearr_40527_40544[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (11))){
var inst_40494 = (state_40517[(8)]);
var inst_40504 = (state_40517[(2)]);
var inst_40505 = (inst_40494 + (1));
var inst_40494__$1 = inst_40505;
var state_40517__$1 = (function (){var statearr_40528 = state_40517;
(statearr_40528[(10)] = inst_40504);

(statearr_40528[(8)] = inst_40494__$1);

return statearr_40528;
})();
var statearr_40529_40545 = state_40517__$1;
(statearr_40529_40545[(2)] = null);

(statearr_40529_40545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (9))){
var state_40517__$1 = state_40517;
var statearr_40530_40546 = state_40517__$1;
(statearr_40530_40546[(2)] = null);

(statearr_40530_40546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (5))){
var state_40517__$1 = state_40517;
var statearr_40531_40547 = state_40517__$1;
(statearr_40531_40547[(2)] = null);

(statearr_40531_40547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (10))){
var inst_40509 = (state_40517[(2)]);
var state_40517__$1 = state_40517;
var statearr_40532_40548 = state_40517__$1;
(statearr_40532_40548[(2)] = inst_40509);

(statearr_40532_40548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40518 === (8))){
var inst_40499 = (state_40517[(7)]);
var state_40517__$1 = state_40517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40517__$1,(11),out,inst_40499);
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
});})(c__37202__auto___40538,out))
;
return ((function (switch__37035__auto__,c__37202__auto___40538,out){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_40533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40533[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_40533[(1)] = (1));

return statearr_40533;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_40517){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40534){if((e40534 instanceof Object)){
var ex__37039__auto__ = e40534;
var statearr_40535_40549 = state_40517;
(statearr_40535_40549[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40550 = state_40517;
state_40517 = G__40550;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_40517){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_40517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40538,out))
})();
var state__37204__auto__ = (function (){var statearr_40536 = f__37203__auto__.call(null);
(statearr_40536[(6)] = c__37202__auto___40538);

return statearr_40536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40538,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40552 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40552 = (function (f,ch,meta40553){
this.f = f;
this.ch = ch;
this.meta40553 = meta40553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40554,meta40553__$1){
var self__ = this;
var _40554__$1 = this;
return (new cljs.core.async.t_cljs$core$async40552(self__.f,self__.ch,meta40553__$1));
});

cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40554){
var self__ = this;
var _40554__$1 = this;
return self__.meta40553;
});

cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40555 = (function (f,ch,meta40553,_,fn1,meta40556){
this.f = f;
this.ch = ch;
this.meta40553 = meta40553;
this._ = _;
this.fn1 = fn1;
this.meta40556 = meta40556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40557,meta40556__$1){
var self__ = this;
var _40557__$1 = this;
return (new cljs.core.async.t_cljs$core$async40555(self__.f,self__.ch,self__.meta40553,self__._,self__.fn1,meta40556__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40557){
var self__ = this;
var _40557__$1 = this;
return self__.meta40556;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40555.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40555.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40555.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40555.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40551_SHARP_){
return f1.call(null,(((p1__40551_SHARP_ == null))?null:self__.f.call(null,p1__40551_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40555.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40553","meta40553",-1719041264,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40552","cljs.core.async/t_cljs$core$async40552",-996488137,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40556","meta40556",-754269972,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40555.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40555";

cljs.core.async.t_cljs$core$async40555.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async40555");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40555.
 */
cljs.core.async.__GT_t_cljs$core$async40555 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40555(f__$1,ch__$1,meta40553__$1,___$2,fn1__$1,meta40556){
return (new cljs.core.async.t_cljs$core$async40555(f__$1,ch__$1,meta40553__$1,___$2,fn1__$1,meta40556));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40555(self__.f,self__.ch,self__.meta40553,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40552.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40553","meta40553",-1719041264,null)], null);
});

cljs.core.async.t_cljs$core$async40552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40552";

cljs.core.async.t_cljs$core$async40552.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async40552");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40552.
 */
cljs.core.async.__GT_t_cljs$core$async40552 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40552(f__$1,ch__$1,meta40553){
return (new cljs.core.async.t_cljs$core$async40552(f__$1,ch__$1,meta40553));
});

}

return (new cljs.core.async.t_cljs$core$async40552(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40558 = (function (f,ch,meta40559){
this.f = f;
this.ch = ch;
this.meta40559 = meta40559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40560,meta40559__$1){
var self__ = this;
var _40560__$1 = this;
return (new cljs.core.async.t_cljs$core$async40558(self__.f,self__.ch,meta40559__$1));
});

cljs.core.async.t_cljs$core$async40558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40560){
var self__ = this;
var _40560__$1 = this;
return self__.meta40559;
});

cljs.core.async.t_cljs$core$async40558.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40558.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40558.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40558.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40558.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40558.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40559","meta40559",-492704444,null)], null);
});

cljs.core.async.t_cljs$core$async40558.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40558";

cljs.core.async.t_cljs$core$async40558.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async40558");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40558.
 */
cljs.core.async.__GT_t_cljs$core$async40558 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40558(f__$1,ch__$1,meta40559){
return (new cljs.core.async.t_cljs$core$async40558(f__$1,ch__$1,meta40559));
});

}

return (new cljs.core.async.t_cljs$core$async40558(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async40561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40561 = (function (p,ch,meta40562){
this.p = p;
this.ch = ch;
this.meta40562 = meta40562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40563,meta40562__$1){
var self__ = this;
var _40563__$1 = this;
return (new cljs.core.async.t_cljs$core$async40561(self__.p,self__.ch,meta40562__$1));
});

cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40563){
var self__ = this;
var _40563__$1 = this;
return self__.meta40562;
});

cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40562","meta40562",843639016,null)], null);
});

cljs.core.async.t_cljs$core$async40561.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40561";

cljs.core.async.t_cljs$core$async40561.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async40561");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40561.
 */
cljs.core.async.__GT_t_cljs$core$async40561 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40561(p__$1,ch__$1,meta40562){
return (new cljs.core.async.t_cljs$core$async40561(p__$1,ch__$1,meta40562));
});

}

return (new cljs.core.async.t_cljs$core$async40561(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__40565 = arguments.length;
switch (G__40565) {
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
var c__37202__auto___40605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40605,out){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40605,out){
return (function (state_40586){
var state_val_40587 = (state_40586[(1)]);
if((state_val_40587 === (7))){
var inst_40582 = (state_40586[(2)]);
var state_40586__$1 = state_40586;
var statearr_40588_40606 = state_40586__$1;
(statearr_40588_40606[(2)] = inst_40582);

(statearr_40588_40606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40587 === (1))){
var state_40586__$1 = state_40586;
var statearr_40589_40607 = state_40586__$1;
(statearr_40589_40607[(2)] = null);

(statearr_40589_40607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40587 === (4))){
var inst_40568 = (state_40586[(7)]);
var inst_40568__$1 = (state_40586[(2)]);
var inst_40569 = (inst_40568__$1 == null);
var state_40586__$1 = (function (){var statearr_40590 = state_40586;
(statearr_40590[(7)] = inst_40568__$1);

return statearr_40590;
})();
if(cljs.core.truth_(inst_40569)){
var statearr_40591_40608 = state_40586__$1;
(statearr_40591_40608[(1)] = (5));

} else {
var statearr_40592_40609 = state_40586__$1;
(statearr_40592_40609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40587 === (6))){
var inst_40568 = (state_40586[(7)]);
var inst_40573 = p.call(null,inst_40568);
var state_40586__$1 = state_40586;
if(cljs.core.truth_(inst_40573)){
var statearr_40593_40610 = state_40586__$1;
(statearr_40593_40610[(1)] = (8));

} else {
var statearr_40594_40611 = state_40586__$1;
(statearr_40594_40611[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40587 === (3))){
var inst_40584 = (state_40586[(2)]);
var state_40586__$1 = state_40586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40586__$1,inst_40584);
} else {
if((state_val_40587 === (2))){
var state_40586__$1 = state_40586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40586__$1,(4),ch);
} else {
if((state_val_40587 === (11))){
var inst_40576 = (state_40586[(2)]);
var state_40586__$1 = state_40586;
var statearr_40595_40612 = state_40586__$1;
(statearr_40595_40612[(2)] = inst_40576);

(statearr_40595_40612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40587 === (9))){
var state_40586__$1 = state_40586;
var statearr_40596_40613 = state_40586__$1;
(statearr_40596_40613[(2)] = null);

(statearr_40596_40613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40587 === (5))){
var inst_40571 = cljs.core.async.close_BANG_.call(null,out);
var state_40586__$1 = state_40586;
var statearr_40597_40614 = state_40586__$1;
(statearr_40597_40614[(2)] = inst_40571);

(statearr_40597_40614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40587 === (10))){
var inst_40579 = (state_40586[(2)]);
var state_40586__$1 = (function (){var statearr_40598 = state_40586;
(statearr_40598[(8)] = inst_40579);

return statearr_40598;
})();
var statearr_40599_40615 = state_40586__$1;
(statearr_40599_40615[(2)] = null);

(statearr_40599_40615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40587 === (8))){
var inst_40568 = (state_40586[(7)]);
var state_40586__$1 = state_40586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40586__$1,(11),out,inst_40568);
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
});})(c__37202__auto___40605,out))
;
return ((function (switch__37035__auto__,c__37202__auto___40605,out){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_40600 = [null,null,null,null,null,null,null,null,null];
(statearr_40600[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_40600[(1)] = (1));

return statearr_40600;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_40586){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40601){if((e40601 instanceof Object)){
var ex__37039__auto__ = e40601;
var statearr_40602_40616 = state_40586;
(statearr_40602_40616[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40617 = state_40586;
state_40586 = G__40617;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_40586){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_40586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40605,out))
})();
var state__37204__auto__ = (function (){var statearr_40603 = f__37203__auto__.call(null);
(statearr_40603[(6)] = c__37202__auto___40605);

return statearr_40603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40605,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40619 = arguments.length;
switch (G__40619) {
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
var c__37202__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto__){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto__){
return (function (state_40682){
var state_val_40683 = (state_40682[(1)]);
if((state_val_40683 === (7))){
var inst_40678 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
var statearr_40684_40722 = state_40682__$1;
(statearr_40684_40722[(2)] = inst_40678);

(statearr_40684_40722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (20))){
var inst_40648 = (state_40682[(7)]);
var inst_40659 = (state_40682[(2)]);
var inst_40660 = cljs.core.next.call(null,inst_40648);
var inst_40634 = inst_40660;
var inst_40635 = null;
var inst_40636 = (0);
var inst_40637 = (0);
var state_40682__$1 = (function (){var statearr_40685 = state_40682;
(statearr_40685[(8)] = inst_40659);

(statearr_40685[(9)] = inst_40634);

(statearr_40685[(10)] = inst_40637);

(statearr_40685[(11)] = inst_40636);

(statearr_40685[(12)] = inst_40635);

return statearr_40685;
})();
var statearr_40686_40723 = state_40682__$1;
(statearr_40686_40723[(2)] = null);

(statearr_40686_40723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (1))){
var state_40682__$1 = state_40682;
var statearr_40687_40724 = state_40682__$1;
(statearr_40687_40724[(2)] = null);

(statearr_40687_40724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (4))){
var inst_40623 = (state_40682[(13)]);
var inst_40623__$1 = (state_40682[(2)]);
var inst_40624 = (inst_40623__$1 == null);
var state_40682__$1 = (function (){var statearr_40688 = state_40682;
(statearr_40688[(13)] = inst_40623__$1);

return statearr_40688;
})();
if(cljs.core.truth_(inst_40624)){
var statearr_40689_40725 = state_40682__$1;
(statearr_40689_40725[(1)] = (5));

} else {
var statearr_40690_40726 = state_40682__$1;
(statearr_40690_40726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (15))){
var state_40682__$1 = state_40682;
var statearr_40694_40727 = state_40682__$1;
(statearr_40694_40727[(2)] = null);

(statearr_40694_40727[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (21))){
var state_40682__$1 = state_40682;
var statearr_40695_40728 = state_40682__$1;
(statearr_40695_40728[(2)] = null);

(statearr_40695_40728[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (13))){
var inst_40634 = (state_40682[(9)]);
var inst_40637 = (state_40682[(10)]);
var inst_40636 = (state_40682[(11)]);
var inst_40635 = (state_40682[(12)]);
var inst_40644 = (state_40682[(2)]);
var inst_40645 = (inst_40637 + (1));
var tmp40691 = inst_40634;
var tmp40692 = inst_40636;
var tmp40693 = inst_40635;
var inst_40634__$1 = tmp40691;
var inst_40635__$1 = tmp40693;
var inst_40636__$1 = tmp40692;
var inst_40637__$1 = inst_40645;
var state_40682__$1 = (function (){var statearr_40696 = state_40682;
(statearr_40696[(14)] = inst_40644);

(statearr_40696[(9)] = inst_40634__$1);

(statearr_40696[(10)] = inst_40637__$1);

(statearr_40696[(11)] = inst_40636__$1);

(statearr_40696[(12)] = inst_40635__$1);

return statearr_40696;
})();
var statearr_40697_40729 = state_40682__$1;
(statearr_40697_40729[(2)] = null);

(statearr_40697_40729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (22))){
var state_40682__$1 = state_40682;
var statearr_40698_40730 = state_40682__$1;
(statearr_40698_40730[(2)] = null);

(statearr_40698_40730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (6))){
var inst_40623 = (state_40682[(13)]);
var inst_40632 = f.call(null,inst_40623);
var inst_40633 = cljs.core.seq.call(null,inst_40632);
var inst_40634 = inst_40633;
var inst_40635 = null;
var inst_40636 = (0);
var inst_40637 = (0);
var state_40682__$1 = (function (){var statearr_40699 = state_40682;
(statearr_40699[(9)] = inst_40634);

(statearr_40699[(10)] = inst_40637);

(statearr_40699[(11)] = inst_40636);

(statearr_40699[(12)] = inst_40635);

return statearr_40699;
})();
var statearr_40700_40731 = state_40682__$1;
(statearr_40700_40731[(2)] = null);

(statearr_40700_40731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (17))){
var inst_40648 = (state_40682[(7)]);
var inst_40652 = cljs.core.chunk_first.call(null,inst_40648);
var inst_40653 = cljs.core.chunk_rest.call(null,inst_40648);
var inst_40654 = cljs.core.count.call(null,inst_40652);
var inst_40634 = inst_40653;
var inst_40635 = inst_40652;
var inst_40636 = inst_40654;
var inst_40637 = (0);
var state_40682__$1 = (function (){var statearr_40701 = state_40682;
(statearr_40701[(9)] = inst_40634);

(statearr_40701[(10)] = inst_40637);

(statearr_40701[(11)] = inst_40636);

(statearr_40701[(12)] = inst_40635);

return statearr_40701;
})();
var statearr_40702_40732 = state_40682__$1;
(statearr_40702_40732[(2)] = null);

(statearr_40702_40732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (3))){
var inst_40680 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40682__$1,inst_40680);
} else {
if((state_val_40683 === (12))){
var inst_40668 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
var statearr_40703_40733 = state_40682__$1;
(statearr_40703_40733[(2)] = inst_40668);

(statearr_40703_40733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (2))){
var state_40682__$1 = state_40682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40682__$1,(4),in$);
} else {
if((state_val_40683 === (23))){
var inst_40676 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
var statearr_40704_40734 = state_40682__$1;
(statearr_40704_40734[(2)] = inst_40676);

(statearr_40704_40734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (19))){
var inst_40663 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
var statearr_40705_40735 = state_40682__$1;
(statearr_40705_40735[(2)] = inst_40663);

(statearr_40705_40735[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (11))){
var inst_40648 = (state_40682[(7)]);
var inst_40634 = (state_40682[(9)]);
var inst_40648__$1 = cljs.core.seq.call(null,inst_40634);
var state_40682__$1 = (function (){var statearr_40706 = state_40682;
(statearr_40706[(7)] = inst_40648__$1);

return statearr_40706;
})();
if(inst_40648__$1){
var statearr_40707_40736 = state_40682__$1;
(statearr_40707_40736[(1)] = (14));

} else {
var statearr_40708_40737 = state_40682__$1;
(statearr_40708_40737[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (9))){
var inst_40670 = (state_40682[(2)]);
var inst_40671 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40682__$1 = (function (){var statearr_40709 = state_40682;
(statearr_40709[(15)] = inst_40670);

return statearr_40709;
})();
if(cljs.core.truth_(inst_40671)){
var statearr_40710_40738 = state_40682__$1;
(statearr_40710_40738[(1)] = (21));

} else {
var statearr_40711_40739 = state_40682__$1;
(statearr_40711_40739[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (5))){
var inst_40626 = cljs.core.async.close_BANG_.call(null,out);
var state_40682__$1 = state_40682;
var statearr_40712_40740 = state_40682__$1;
(statearr_40712_40740[(2)] = inst_40626);

(statearr_40712_40740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (14))){
var inst_40648 = (state_40682[(7)]);
var inst_40650 = cljs.core.chunked_seq_QMARK_.call(null,inst_40648);
var state_40682__$1 = state_40682;
if(inst_40650){
var statearr_40713_40741 = state_40682__$1;
(statearr_40713_40741[(1)] = (17));

} else {
var statearr_40714_40742 = state_40682__$1;
(statearr_40714_40742[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (16))){
var inst_40666 = (state_40682[(2)]);
var state_40682__$1 = state_40682;
var statearr_40715_40743 = state_40682__$1;
(statearr_40715_40743[(2)] = inst_40666);

(statearr_40715_40743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40683 === (10))){
var inst_40637 = (state_40682[(10)]);
var inst_40635 = (state_40682[(12)]);
var inst_40642 = cljs.core._nth.call(null,inst_40635,inst_40637);
var state_40682__$1 = state_40682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40682__$1,(13),out,inst_40642);
} else {
if((state_val_40683 === (18))){
var inst_40648 = (state_40682[(7)]);
var inst_40657 = cljs.core.first.call(null,inst_40648);
var state_40682__$1 = state_40682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40682__$1,(20),out,inst_40657);
} else {
if((state_val_40683 === (8))){
var inst_40637 = (state_40682[(10)]);
var inst_40636 = (state_40682[(11)]);
var inst_40639 = (inst_40637 < inst_40636);
var inst_40640 = inst_40639;
var state_40682__$1 = state_40682;
if(cljs.core.truth_(inst_40640)){
var statearr_40716_40744 = state_40682__$1;
(statearr_40716_40744[(1)] = (10));

} else {
var statearr_40717_40745 = state_40682__$1;
(statearr_40717_40745[(1)] = (11));

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
});})(c__37202__auto__))
;
return ((function (switch__37035__auto__,c__37202__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37036__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37036__auto____0 = (function (){
var statearr_40718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40718[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37036__auto__);

(statearr_40718[(1)] = (1));

return statearr_40718;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37036__auto____1 = (function (state_40682){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40719){if((e40719 instanceof Object)){
var ex__37039__auto__ = e40719;
var statearr_40720_40746 = state_40682;
(statearr_40720_40746[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40747 = state_40682;
state_40682 = G__40747;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37036__auto__ = function(state_40682){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37036__auto____1.call(this,state_40682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37036__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37036__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto__))
})();
var state__37204__auto__ = (function (){var statearr_40721 = f__37203__auto__.call(null);
(statearr_40721[(6)] = c__37202__auto__);

return statearr_40721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto__))
);

return c__37202__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40749 = arguments.length;
switch (G__40749) {
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
var G__40752 = arguments.length;
switch (G__40752) {
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
var G__40755 = arguments.length;
switch (G__40755) {
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
var c__37202__auto___40802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40802,out){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40802,out){
return (function (state_40779){
var state_val_40780 = (state_40779[(1)]);
if((state_val_40780 === (7))){
var inst_40774 = (state_40779[(2)]);
var state_40779__$1 = state_40779;
var statearr_40781_40803 = state_40779__$1;
(statearr_40781_40803[(2)] = inst_40774);

(statearr_40781_40803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (1))){
var inst_40756 = null;
var state_40779__$1 = (function (){var statearr_40782 = state_40779;
(statearr_40782[(7)] = inst_40756);

return statearr_40782;
})();
var statearr_40783_40804 = state_40779__$1;
(statearr_40783_40804[(2)] = null);

(statearr_40783_40804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (4))){
var inst_40759 = (state_40779[(8)]);
var inst_40759__$1 = (state_40779[(2)]);
var inst_40760 = (inst_40759__$1 == null);
var inst_40761 = cljs.core.not.call(null,inst_40760);
var state_40779__$1 = (function (){var statearr_40784 = state_40779;
(statearr_40784[(8)] = inst_40759__$1);

return statearr_40784;
})();
if(inst_40761){
var statearr_40785_40805 = state_40779__$1;
(statearr_40785_40805[(1)] = (5));

} else {
var statearr_40786_40806 = state_40779__$1;
(statearr_40786_40806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (6))){
var state_40779__$1 = state_40779;
var statearr_40787_40807 = state_40779__$1;
(statearr_40787_40807[(2)] = null);

(statearr_40787_40807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (3))){
var inst_40776 = (state_40779[(2)]);
var inst_40777 = cljs.core.async.close_BANG_.call(null,out);
var state_40779__$1 = (function (){var statearr_40788 = state_40779;
(statearr_40788[(9)] = inst_40776);

return statearr_40788;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40779__$1,inst_40777);
} else {
if((state_val_40780 === (2))){
var state_40779__$1 = state_40779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40779__$1,(4),ch);
} else {
if((state_val_40780 === (11))){
var inst_40759 = (state_40779[(8)]);
var inst_40768 = (state_40779[(2)]);
var inst_40756 = inst_40759;
var state_40779__$1 = (function (){var statearr_40789 = state_40779;
(statearr_40789[(7)] = inst_40756);

(statearr_40789[(10)] = inst_40768);

return statearr_40789;
})();
var statearr_40790_40808 = state_40779__$1;
(statearr_40790_40808[(2)] = null);

(statearr_40790_40808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (9))){
var inst_40759 = (state_40779[(8)]);
var state_40779__$1 = state_40779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40779__$1,(11),out,inst_40759);
} else {
if((state_val_40780 === (5))){
var inst_40756 = (state_40779[(7)]);
var inst_40759 = (state_40779[(8)]);
var inst_40763 = cljs.core._EQ_.call(null,inst_40759,inst_40756);
var state_40779__$1 = state_40779;
if(inst_40763){
var statearr_40792_40809 = state_40779__$1;
(statearr_40792_40809[(1)] = (8));

} else {
var statearr_40793_40810 = state_40779__$1;
(statearr_40793_40810[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (10))){
var inst_40771 = (state_40779[(2)]);
var state_40779__$1 = state_40779;
var statearr_40794_40811 = state_40779__$1;
(statearr_40794_40811[(2)] = inst_40771);

(statearr_40794_40811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40780 === (8))){
var inst_40756 = (state_40779[(7)]);
var tmp40791 = inst_40756;
var inst_40756__$1 = tmp40791;
var state_40779__$1 = (function (){var statearr_40795 = state_40779;
(statearr_40795[(7)] = inst_40756__$1);

return statearr_40795;
})();
var statearr_40796_40812 = state_40779__$1;
(statearr_40796_40812[(2)] = null);

(statearr_40796_40812[(1)] = (2));


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
});})(c__37202__auto___40802,out))
;
return ((function (switch__37035__auto__,c__37202__auto___40802,out){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_40797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40797[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_40797[(1)] = (1));

return statearr_40797;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_40779){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40798){if((e40798 instanceof Object)){
var ex__37039__auto__ = e40798;
var statearr_40799_40813 = state_40779;
(statearr_40799_40813[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40814 = state_40779;
state_40779 = G__40814;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_40779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_40779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40802,out))
})();
var state__37204__auto__ = (function (){var statearr_40800 = f__37203__auto__.call(null);
(statearr_40800[(6)] = c__37202__auto___40802);

return statearr_40800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40802,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40816 = arguments.length;
switch (G__40816) {
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
var c__37202__auto___40882 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40882,out){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40882,out){
return (function (state_40854){
var state_val_40855 = (state_40854[(1)]);
if((state_val_40855 === (7))){
var inst_40850 = (state_40854[(2)]);
var state_40854__$1 = state_40854;
var statearr_40856_40883 = state_40854__$1;
(statearr_40856_40883[(2)] = inst_40850);

(statearr_40856_40883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (1))){
var inst_40817 = (new Array(n));
var inst_40818 = inst_40817;
var inst_40819 = (0);
var state_40854__$1 = (function (){var statearr_40857 = state_40854;
(statearr_40857[(7)] = inst_40819);

(statearr_40857[(8)] = inst_40818);

return statearr_40857;
})();
var statearr_40858_40884 = state_40854__$1;
(statearr_40858_40884[(2)] = null);

(statearr_40858_40884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (4))){
var inst_40822 = (state_40854[(9)]);
var inst_40822__$1 = (state_40854[(2)]);
var inst_40823 = (inst_40822__$1 == null);
var inst_40824 = cljs.core.not.call(null,inst_40823);
var state_40854__$1 = (function (){var statearr_40859 = state_40854;
(statearr_40859[(9)] = inst_40822__$1);

return statearr_40859;
})();
if(inst_40824){
var statearr_40860_40885 = state_40854__$1;
(statearr_40860_40885[(1)] = (5));

} else {
var statearr_40861_40886 = state_40854__$1;
(statearr_40861_40886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (15))){
var inst_40844 = (state_40854[(2)]);
var state_40854__$1 = state_40854;
var statearr_40862_40887 = state_40854__$1;
(statearr_40862_40887[(2)] = inst_40844);

(statearr_40862_40887[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (13))){
var state_40854__$1 = state_40854;
var statearr_40863_40888 = state_40854__$1;
(statearr_40863_40888[(2)] = null);

(statearr_40863_40888[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (6))){
var inst_40819 = (state_40854[(7)]);
var inst_40840 = (inst_40819 > (0));
var state_40854__$1 = state_40854;
if(cljs.core.truth_(inst_40840)){
var statearr_40864_40889 = state_40854__$1;
(statearr_40864_40889[(1)] = (12));

} else {
var statearr_40865_40890 = state_40854__$1;
(statearr_40865_40890[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (3))){
var inst_40852 = (state_40854[(2)]);
var state_40854__$1 = state_40854;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40854__$1,inst_40852);
} else {
if((state_val_40855 === (12))){
var inst_40818 = (state_40854[(8)]);
var inst_40842 = cljs.core.vec.call(null,inst_40818);
var state_40854__$1 = state_40854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40854__$1,(15),out,inst_40842);
} else {
if((state_val_40855 === (2))){
var state_40854__$1 = state_40854;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40854__$1,(4),ch);
} else {
if((state_val_40855 === (11))){
var inst_40834 = (state_40854[(2)]);
var inst_40835 = (new Array(n));
var inst_40818 = inst_40835;
var inst_40819 = (0);
var state_40854__$1 = (function (){var statearr_40866 = state_40854;
(statearr_40866[(10)] = inst_40834);

(statearr_40866[(7)] = inst_40819);

(statearr_40866[(8)] = inst_40818);

return statearr_40866;
})();
var statearr_40867_40891 = state_40854__$1;
(statearr_40867_40891[(2)] = null);

(statearr_40867_40891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (9))){
var inst_40818 = (state_40854[(8)]);
var inst_40832 = cljs.core.vec.call(null,inst_40818);
var state_40854__$1 = state_40854;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40854__$1,(11),out,inst_40832);
} else {
if((state_val_40855 === (5))){
var inst_40822 = (state_40854[(9)]);
var inst_40819 = (state_40854[(7)]);
var inst_40827 = (state_40854[(11)]);
var inst_40818 = (state_40854[(8)]);
var inst_40826 = (inst_40818[inst_40819] = inst_40822);
var inst_40827__$1 = (inst_40819 + (1));
var inst_40828 = (inst_40827__$1 < n);
var state_40854__$1 = (function (){var statearr_40868 = state_40854;
(statearr_40868[(12)] = inst_40826);

(statearr_40868[(11)] = inst_40827__$1);

return statearr_40868;
})();
if(cljs.core.truth_(inst_40828)){
var statearr_40869_40892 = state_40854__$1;
(statearr_40869_40892[(1)] = (8));

} else {
var statearr_40870_40893 = state_40854__$1;
(statearr_40870_40893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (14))){
var inst_40847 = (state_40854[(2)]);
var inst_40848 = cljs.core.async.close_BANG_.call(null,out);
var state_40854__$1 = (function (){var statearr_40872 = state_40854;
(statearr_40872[(13)] = inst_40847);

return statearr_40872;
})();
var statearr_40873_40894 = state_40854__$1;
(statearr_40873_40894[(2)] = inst_40848);

(statearr_40873_40894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (10))){
var inst_40838 = (state_40854[(2)]);
var state_40854__$1 = state_40854;
var statearr_40874_40895 = state_40854__$1;
(statearr_40874_40895[(2)] = inst_40838);

(statearr_40874_40895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40855 === (8))){
var inst_40827 = (state_40854[(11)]);
var inst_40818 = (state_40854[(8)]);
var tmp40871 = inst_40818;
var inst_40818__$1 = tmp40871;
var inst_40819 = inst_40827;
var state_40854__$1 = (function (){var statearr_40875 = state_40854;
(statearr_40875[(7)] = inst_40819);

(statearr_40875[(8)] = inst_40818__$1);

return statearr_40875;
})();
var statearr_40876_40896 = state_40854__$1;
(statearr_40876_40896[(2)] = null);

(statearr_40876_40896[(1)] = (2));


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
});})(c__37202__auto___40882,out))
;
return ((function (switch__37035__auto__,c__37202__auto___40882,out){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_40877 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40877[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_40877[(1)] = (1));

return statearr_40877;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_40854){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40854);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40878){if((e40878 instanceof Object)){
var ex__37039__auto__ = e40878;
var statearr_40879_40897 = state_40854;
(statearr_40879_40897[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40854);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40898 = state_40854;
state_40854 = G__40898;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_40854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_40854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40882,out))
})();
var state__37204__auto__ = (function (){var statearr_40880 = f__37203__auto__.call(null);
(statearr_40880[(6)] = c__37202__auto___40882);

return statearr_40880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40882,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40900 = arguments.length;
switch (G__40900) {
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
var c__37202__auto___40970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37202__auto___40970,out){
return (function (){
var f__37203__auto__ = (function (){var switch__37035__auto__ = ((function (c__37202__auto___40970,out){
return (function (state_40942){
var state_val_40943 = (state_40942[(1)]);
if((state_val_40943 === (7))){
var inst_40938 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
var statearr_40944_40971 = state_40942__$1;
(statearr_40944_40971[(2)] = inst_40938);

(statearr_40944_40971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (1))){
var inst_40901 = [];
var inst_40902 = inst_40901;
var inst_40903 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40942__$1 = (function (){var statearr_40945 = state_40942;
(statearr_40945[(7)] = inst_40903);

(statearr_40945[(8)] = inst_40902);

return statearr_40945;
})();
var statearr_40946_40972 = state_40942__$1;
(statearr_40946_40972[(2)] = null);

(statearr_40946_40972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (4))){
var inst_40906 = (state_40942[(9)]);
var inst_40906__$1 = (state_40942[(2)]);
var inst_40907 = (inst_40906__$1 == null);
var inst_40908 = cljs.core.not.call(null,inst_40907);
var state_40942__$1 = (function (){var statearr_40947 = state_40942;
(statearr_40947[(9)] = inst_40906__$1);

return statearr_40947;
})();
if(inst_40908){
var statearr_40948_40973 = state_40942__$1;
(statearr_40948_40973[(1)] = (5));

} else {
var statearr_40949_40974 = state_40942__$1;
(statearr_40949_40974[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (15))){
var inst_40932 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
var statearr_40950_40975 = state_40942__$1;
(statearr_40950_40975[(2)] = inst_40932);

(statearr_40950_40975[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (13))){
var state_40942__$1 = state_40942;
var statearr_40951_40976 = state_40942__$1;
(statearr_40951_40976[(2)] = null);

(statearr_40951_40976[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (6))){
var inst_40902 = (state_40942[(8)]);
var inst_40927 = inst_40902.length;
var inst_40928 = (inst_40927 > (0));
var state_40942__$1 = state_40942;
if(cljs.core.truth_(inst_40928)){
var statearr_40952_40977 = state_40942__$1;
(statearr_40952_40977[(1)] = (12));

} else {
var statearr_40953_40978 = state_40942__$1;
(statearr_40953_40978[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (3))){
var inst_40940 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40942__$1,inst_40940);
} else {
if((state_val_40943 === (12))){
var inst_40902 = (state_40942[(8)]);
var inst_40930 = cljs.core.vec.call(null,inst_40902);
var state_40942__$1 = state_40942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40942__$1,(15),out,inst_40930);
} else {
if((state_val_40943 === (2))){
var state_40942__$1 = state_40942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40942__$1,(4),ch);
} else {
if((state_val_40943 === (11))){
var inst_40906 = (state_40942[(9)]);
var inst_40910 = (state_40942[(10)]);
var inst_40920 = (state_40942[(2)]);
var inst_40921 = [];
var inst_40922 = inst_40921.push(inst_40906);
var inst_40902 = inst_40921;
var inst_40903 = inst_40910;
var state_40942__$1 = (function (){var statearr_40954 = state_40942;
(statearr_40954[(7)] = inst_40903);

(statearr_40954[(11)] = inst_40922);

(statearr_40954[(12)] = inst_40920);

(statearr_40954[(8)] = inst_40902);

return statearr_40954;
})();
var statearr_40955_40979 = state_40942__$1;
(statearr_40955_40979[(2)] = null);

(statearr_40955_40979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (9))){
var inst_40902 = (state_40942[(8)]);
var inst_40918 = cljs.core.vec.call(null,inst_40902);
var state_40942__$1 = state_40942;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40942__$1,(11),out,inst_40918);
} else {
if((state_val_40943 === (5))){
var inst_40903 = (state_40942[(7)]);
var inst_40906 = (state_40942[(9)]);
var inst_40910 = (state_40942[(10)]);
var inst_40910__$1 = f.call(null,inst_40906);
var inst_40911 = cljs.core._EQ_.call(null,inst_40910__$1,inst_40903);
var inst_40912 = cljs.core.keyword_identical_QMARK_.call(null,inst_40903,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40913 = ((inst_40911) || (inst_40912));
var state_40942__$1 = (function (){var statearr_40956 = state_40942;
(statearr_40956[(10)] = inst_40910__$1);

return statearr_40956;
})();
if(cljs.core.truth_(inst_40913)){
var statearr_40957_40980 = state_40942__$1;
(statearr_40957_40980[(1)] = (8));

} else {
var statearr_40958_40981 = state_40942__$1;
(statearr_40958_40981[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (14))){
var inst_40935 = (state_40942[(2)]);
var inst_40936 = cljs.core.async.close_BANG_.call(null,out);
var state_40942__$1 = (function (){var statearr_40960 = state_40942;
(statearr_40960[(13)] = inst_40935);

return statearr_40960;
})();
var statearr_40961_40982 = state_40942__$1;
(statearr_40961_40982[(2)] = inst_40936);

(statearr_40961_40982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (10))){
var inst_40925 = (state_40942[(2)]);
var state_40942__$1 = state_40942;
var statearr_40962_40983 = state_40942__$1;
(statearr_40962_40983[(2)] = inst_40925);

(statearr_40962_40983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40943 === (8))){
var inst_40906 = (state_40942[(9)]);
var inst_40910 = (state_40942[(10)]);
var inst_40902 = (state_40942[(8)]);
var inst_40915 = inst_40902.push(inst_40906);
var tmp40959 = inst_40902;
var inst_40902__$1 = tmp40959;
var inst_40903 = inst_40910;
var state_40942__$1 = (function (){var statearr_40963 = state_40942;
(statearr_40963[(7)] = inst_40903);

(statearr_40963[(14)] = inst_40915);

(statearr_40963[(8)] = inst_40902__$1);

return statearr_40963;
})();
var statearr_40964_40984 = state_40942__$1;
(statearr_40964_40984[(2)] = null);

(statearr_40964_40984[(1)] = (2));


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
});})(c__37202__auto___40970,out))
;
return ((function (switch__37035__auto__,c__37202__auto___40970,out){
return (function() {
var cljs$core$async$state_machine__37036__auto__ = null;
var cljs$core$async$state_machine__37036__auto____0 = (function (){
var statearr_40965 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40965[(0)] = cljs$core$async$state_machine__37036__auto__);

(statearr_40965[(1)] = (1));

return statearr_40965;
});
var cljs$core$async$state_machine__37036__auto____1 = (function (state_40942){
while(true){
var ret_value__37037__auto__ = (function (){try{while(true){
var result__37038__auto__ = switch__37035__auto__.call(null,state_40942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37038__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37038__auto__;
}
break;
}
}catch (e40966){if((e40966 instanceof Object)){
var ex__37039__auto__ = e40966;
var statearr_40967_40985 = state_40942;
(statearr_40967_40985[(5)] = ex__37039__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40966;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37037__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40986 = state_40942;
state_40942 = G__40986;
continue;
} else {
return ret_value__37037__auto__;
}
break;
}
});
cljs$core$async$state_machine__37036__auto__ = function(state_40942){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37036__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37036__auto____1.call(this,state_40942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37036__auto____0;
cljs$core$async$state_machine__37036__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37036__auto____1;
return cljs$core$async$state_machine__37036__auto__;
})()
;})(switch__37035__auto__,c__37202__auto___40970,out))
})();
var state__37204__auto__ = (function (){var statearr_40968 = f__37203__auto__.call(null);
(statearr_40968[(6)] = c__37202__auto___40970);

return statearr_40968;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37204__auto__);
});})(c__37202__auto___40970,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1562998441573
