import { createAction, props } from "@ngrx/store";



enum Actions{
    Increment = '[Counter component] Increment',
    Decrement = '[Counter component] Decrement',
    ChangeStep = '[Counter component] Change step'
};

export const increment = createAction(Actions.Increment);

export const decrement = createAction(Actions.Decrement);

export const changeStep = createAction(Actions.ChangeStep,
    props<{ stepValue: number }>()
);