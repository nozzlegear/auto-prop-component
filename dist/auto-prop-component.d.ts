/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
/**
 * A base React component that can auto-update state properties.
 */
export declare class AutoPropComponent<P, S> extends React.Component<P, S> {
    constructor(props: P);
    /**
     * Creates a callback function for React form events that will auto update a given state property when changed.
     * @usage <input value={state.myNameProp} onChange={this.updateState((state, newValue) => s.myNameProp = newValue , false)} />
     */
    updateState(predicate: (state: S, newValue: any) => void, shouldParse?: boolean): (event: React.FormEvent) => void;
    /**
     * Takes a partial new state object and merges it with the current state, preserving undefined values in the result
     * and updating the component's state. An improvement over lodash's _.merge, which does not preserve undefined
     * values.
     * @param newState A partial new state object who's values will overwite the current state.
     */
    mergeState(newState: S, callback?: () => any): void;
}
