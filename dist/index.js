"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_class_1 = require("@writetome51/base-class");
// This class is made specifically for use in Angular 4+.
// Any component class using Subscriptions should extend from this.
// During the ngOnDestroy() hook, it unsubscribes from all subscriptions inside
// this._subscriptions.
// To make sure this unsubscribes all subscriptions your component is using,
// you first need to add those subscriptions into this._subscriptions.
// That should (probably) be done in the ngAfterViewInit() hook.
var UnsubscribeOnDestroyComponent = /** @class */ (function (_super) {
    __extends(UnsubscribeOnDestroyComponent, _super);
    function UnsubscribeOnDestroyComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._subscriptions = [];
        return _this;
    }
    UnsubscribeOnDestroyComponent.prototype.ngOnDestroy = function () {
        this.__unsubscribeAll();
    };
    UnsubscribeOnDestroyComponent.prototype.__unsubscribeAll = function () {
        this._subscriptions.forEach(function (subscription) {
            if (typeof subscription !== ('undefined' || 'null')) {
                subscription.unsubscribe();
            }
        });
    };
    return UnsubscribeOnDestroyComponent;
}(base_class_1.BaseClass));
exports.UnsubscribeOnDestroyComponent = UnsubscribeOnDestroyComponent;
