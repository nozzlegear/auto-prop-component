/// <reference path="./../typings/index.d.ts" />

import * as React from 'react';
import { mergeWith, clone, isUndefined} from "lodash";

/**
 * A base React component that can auto-update state properties.
 */
export class AutoPropComponent<P, S> extends React.Component<P, S>
{
    constructor(props: P)
    {
        super(props);
    }
    
    /**
     * Creates a callback function for React form events that will auto update a given state property when changed.
     * @usage <input value={state.myNameProp} onChange={this.updateState((state, newValue) => s.myNameProp = newValue , false)} />
     */
    public updateState(predicate: (state: S, newValue: any) => void, shouldParse = false)
    {
        return (event: React.FormEvent) =>
        {
            let state = clone(this.state);
            let value = event.target["value"];
            
            predicate(state, shouldParse ? JSON.parse(value) : value);
            
            this.setState(state);  
        };
    }
    
    /**
     * Takes a partial new state object and merges it with the current state, preserving undefined values in the result 
     * and updating the component's state. An improvement over lodash's _.merge, which does not preserve undefined 
     * values.
     * @param newState A partial new state object who's values will overwite the current state.
     */
    public mergeState(newState: S, callback?: () => any)
    {
        let finalState = mergeWith({}, this.state, newState, (oldPropValue, newPropValue, key, resultObject, sourceObject) => 
        { 
            if (isUndefined(newPropValue)) 
            {
                resultObject[key] = undefined;
            }
            
            // Not returning a value will default to lodash merging the values itself.
        });
        
        this.setState(finalState, callback);
    }
}