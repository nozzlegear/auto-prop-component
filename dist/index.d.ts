/// <reference types="react" />
import * as React from 'react';
export declare class AutoPropComponent<P, S> extends React.Component<P, S> {
    constructor(props: P, context?: any);
    getAndUpdateState(predicate: (state: S) => S): void;
    transformState(predicate: (state: S) => void): void;
    updateStateFromEvent(predicate: (state: S, newValue: any) => void, shouldParse?: boolean): (event: any) => void;
    mergeState(newState: S, callback?: () => any): void;
}
