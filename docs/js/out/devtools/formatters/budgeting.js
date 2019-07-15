// Compiled by ClojureScript 1.10.520 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__36417__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__36417__auto__["add"]).call(o__36417__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__36417__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__36417__auto__["delete"]).call(o__36417__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__36417__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__36417__auto__["has"]).call(o__36417__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__38531 = data;
var target__36422__auto__ = G__38531;
if(cljs.core.truth_(target__36422__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38531)].join(''),"\n","target__36422__auto__"].join('')));
}

(target__36422__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__38531;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_38536 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_38536);
} else {
var seq__38532_38537 = cljs.core.seq.call(null,json_ml);
var chunk__38533_38538 = null;
var count__38534_38539 = (0);
var i__38535_38540 = (0);
while(true){
if((i__38535_38540 < count__38534_38539)){
var item_38541 = cljs.core._nth.call(null,chunk__38533_38538,i__38535_38540);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_38541,new_depth_budget_38536);


var G__38542 = seq__38532_38537;
var G__38543 = chunk__38533_38538;
var G__38544 = count__38534_38539;
var G__38545 = (i__38535_38540 + (1));
seq__38532_38537 = G__38542;
chunk__38533_38538 = G__38543;
count__38534_38539 = G__38544;
i__38535_38540 = G__38545;
continue;
} else {
var temp__5735__auto___38546 = cljs.core.seq.call(null,seq__38532_38537);
if(temp__5735__auto___38546){
var seq__38532_38547__$1 = temp__5735__auto___38546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38532_38547__$1)){
var c__4550__auto___38548 = cljs.core.chunk_first.call(null,seq__38532_38547__$1);
var G__38549 = cljs.core.chunk_rest.call(null,seq__38532_38547__$1);
var G__38550 = c__4550__auto___38548;
var G__38551 = cljs.core.count.call(null,c__4550__auto___38548);
var G__38552 = (0);
seq__38532_38537 = G__38549;
chunk__38533_38538 = G__38550;
count__38534_38539 = G__38551;
i__38535_38540 = G__38552;
continue;
} else {
var item_38553 = cljs.core.first.call(null,seq__38532_38547__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_38553,new_depth_budget_38536);


var G__38554 = cljs.core.next.call(null,seq__38532_38547__$1);
var G__38555 = null;
var G__38556 = (0);
var G__38557 = (0);
seq__38532_38537 = G__38554;
chunk__38533_38538 = G__38555;
count__38534_38539 = G__38556;
i__38535_38540 = G__38557;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5733__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5733__auto__)){
var initial_hierarchy_depth_budget = temp__5733__auto__;
var remaining_depth_budget = (function (){var or__4131__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1562982102637
