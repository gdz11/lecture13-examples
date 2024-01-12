import { createAction, props } from "@ngrx/store";
import { Counter } from "src/app/shared/models/counter";



enum Actions{
    Increment = '[Counter component] Increment',
    Decrement = '[Counter component] Decrement',
    ChangeStep = '[Counter component] Change step',

    LoadCounter = '[Counter component] Load counter',
    LoadCounterSuccess = '[Counter component] Load counter success',
    LoadCounterError = '[Counter component] Load counter error',

    SaveCounter = '[Counter component] Save counter',
    SaveCounterSuccess = '[Counter component] Save counter success',
    SaveCounterError = '[Counter component] Save counter error'
};

export const increment = createAction(Actions.Increment);

export const decrement = createAction(Actions.Decrement);

export const changeStep = createAction(Actions.ChangeStep,
    props<{ stepValue: number }>()
);

export const loadCounter = createAction(Actions.LoadCounter,
    props<{ id: number}>()
);

export const loadCounterSuccess = createAction(Actions.LoadCounterSuccess,
    props<{ data: Counter }>()
);

export const loadCounterError = createAction(Actions.LoadCounterError,
    props<{ error: any }>()
);

export const saveCounter = createAction(Actions.SaveCounter,
    props<{data: Counter}>()
);

export const saveCounterSuccess = createAction(Actions.SaveCounterSuccess);

export const saveCounterError = createAction(Actions.SaveCounterError);
