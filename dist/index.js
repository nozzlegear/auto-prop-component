"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var lodash_1 = require("lodash");
var AutoPropComponent = (function (_super) {
    __extends(AutoPropComponent, _super);
    function AutoPropComponent(props) {
        _super.call(this, props);
    }
    AutoPropComponent.prototype.updateState = function (predicate, shouldParse) {
        var _this = this;
        if (shouldParse === void 0) { shouldParse = false; }
        return function (event) {
            var state = lodash_1.clone(_this.state);
            var value = event.target.value;
            predicate(state, shouldParse ? JSON.parse(value) : value);
            _this.setState(state);
        };
    };
    AutoPropComponent.prototype.mergeState = function (newState, callback) {
        var finalState = lodash_1.mergeWith({}, this.state, newState, function (oldPropValue, newPropValue, key, resultObject, sourceObject) {
            if (lodash_1.isUndefined(newPropValue)) {
                resultObject[key] = undefined;
            }
            else if (lodash_1.isArray(newPropValue)) {
                return newPropValue;
            }
        });
        this.setState(finalState, callback);
    };
    return AutoPropComponent;
}(React.Component));
exports.AutoPropComponent = AutoPropComponent;
