/// <reference path="./../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var lodash_1 = require("lodash");
/**
 * A base React component that can auto-update state properties.
 */
var AutoPropComponent = (function (_super) {
    __extends(AutoPropComponent, _super);
    function AutoPropComponent(props) {
        _super.call(this, props);
    }
    /**
     * Creates a callback function for React form events that will auto update a given state property when changed.
     * @usage <input value={state.myNameProp} onChange={this.updateState((state, newValue) => s.myNameProp = newValue , false)} />
     */
    AutoPropComponent.prototype.updateState = function (predicate, shouldParse) {
        var _this = this;
        if (shouldParse === void 0) { shouldParse = false; }
        return function (event) {
            var state = lodash_1.clone(_this.state);
            var value = event.target["value"];
            predicate(state, shouldParse ? JSON.parse(value) : value);
            _this.setState(state);
        };
    };
    /**
     * Takes a partial new state object and merges it with the current state, preserving undefined values in the result
     * and updating the component's state. An improvement over lodash's _.merge, which does not preserve undefined
     * values.
     * @param newState A partial new state object who's values will overwite the current state.
     */
    AutoPropComponent.prototype.mergeState = function (newState, callback) {
        var finalState = lodash_1.mergeWith({}, this.state, newState, function (oldPropValue, newPropValue, key, resultObject, sourceObject) {
            if (lodash_1.isUndefined(newPropValue)) {
                resultObject[key] = undefined;
            }
            // Not returning a value will default to lodash merging the values itself.
        });
        this.setState(finalState, callback);
    };
    return AutoPropComponent;
}(React.Component));
exports.AutoPropComponent = AutoPropComponent;
