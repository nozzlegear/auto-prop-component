import * as React from 'react';
export declare class AutoPropComponent<P, S> extends React.Component<P, S> {
    constructor(props: P);
    updateState(predicate: (state: S, newValue: any) => void, shouldParse?: boolean): (event: React.FormEvent<{
        value: string;
    }>) => void;
    mergeState(newState: S, callback?: () => any): void;
}
