import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AppState } from '../state';
import { changeStep, decrement, increment, loadCounterSuccess } from '../actions/counter-actions';


const initialState = {
    value: 0,
    increment: 1
};

export const counterReducer = createReducer(initialState,
  on(increment, (state, action) =>{

    return { ... state, value: state.value + state.increment };//TODO try yourself immerjs (createImmerReducer for simplifying code)
  }),
  on(decrement, (state, action) =>{

    return { ... state, value: state.value - state.increment };
  }),
  on(changeStep, (state, action) =>{

    return { ... state, increment: action.stepValue };
  }),
  on(loadCounterSuccess, (state, action) => {
    return { ... state, value: action.data.value };
  })
);

export const reducers: ActionReducerMap<AppState> = {
  counter: counterReducer
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
