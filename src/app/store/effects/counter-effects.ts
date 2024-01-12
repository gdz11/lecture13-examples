import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { CounterService } from "src/app/shared/services/counter.service";
import { loadCounter, loadCounterError, loadCounterSuccess, saveCounter, saveCounterSuccess } from "../actions/counter-actions";
import { map, switchMap } from "rxjs";



@Injectable()
export class CounterEffects
{
    loadCounter$ = createEffect(() => this.actions$.pipe(
        ofType(loadCounter),
        switchMap(action =>
            this.counterService.getCounter(action.id).pipe(
                map(d => loadCounterSuccess({ data: d }))
            )
        )
    ));

    saveCounter$ = createEffect(() => this.actions$.pipe(
        ofType(saveCounter),
        switchMap(action =>
            this.counterService.saveCounter(action.data).pipe(
                map(d => saveCounterSuccess())
            )
        )
    ));

    constructor(private actions$: Actions, private counterService: CounterService)
    {

    }
}