"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
// This class is made specifically for use in Angular 4 and above.
// Any component class using Subscriptions should extend from this.
// During the ngOnDestroy() hook, it unsubscribes from all subscriptions inside
// this._subscriptions.
// To make sure this unsubscribes all subscriptions your component is using,
// you first need to add those subscriptions into `this._subscriptions`.
// That should (probably) be done in the ngAfterViewInit() hook.
var UnsubscribeOnDestroyComponent = /** @class */ (function () {
    function UnsubscribeOnDestroyComponent() {
        this._subscriptions = [];
    }
    UnsubscribeOnDestroyComponent.prototype.ngOnDestroy = function () {
        this.__unsubscribeAll();
    };
    UnsubscribeOnDestroyComponent.prototype.__unsubscribeAll = function () {
        this._subscriptions.forEach(function (subscription) {
            if (has_value_no_value_1.hasValue(subscription.unsubscribe)) {
                subscription.unsubscribe();
            }
        });
    };
    return UnsubscribeOnDestroyComponent;
}());
exports.UnsubscribeOnDestroyComponent = UnsubscribeOnDestroyComponent;
