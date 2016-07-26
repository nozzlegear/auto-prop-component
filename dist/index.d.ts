/// <reference types="react" />
import * as React from 'react';
export declare class AutoPropComponent<P, S> extends React.Component<P, S> {
    constructor(props: P);
    getAndUpdateState(predicate: (state: S) => S): void;
    updateStateFromEvent(predicate: (state: S, newValue: any) => void, shouldParse?: boolean): (event: React.FormEvent<{
        value: string;
    }>) => void;
    mergeState(newState: S, callback?: () => any): void;
}
