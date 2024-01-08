import { createSelector } from "@ngrx/store";
import { AppState } from "../state"



export const selectCounterState = (state: AppState) => state.counter;

export const selectCounterValue = createSelector(
    selectCounterState, 
    counter => counter.value
);

export const selectCounterStep = createSelector(
    selectCounterState,
    counter => counter.increment
);