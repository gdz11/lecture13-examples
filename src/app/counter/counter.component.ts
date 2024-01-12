import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../store/state';
import { Store, select } from '@ngrx/store';
import { selectCounterStep, selectCounterValue } from '../store/selectors/counter-selectors';
import { FormControl, Validators } from '@angular/forms';
import { changeStep, decrement, increment, loadCounter, saveCounter } from '../store/actions/counter-actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  step = new FormControl(1, [ Validators.required ]);

  id = new FormControl(null, [Validators.required])

  counterValue$!: Observable<number>;
  counterStep$!: Observable<number>;

  onIncrement(){
    this.store.dispatch(increment());
  }

  onDecrement(){
    this.store.dispatch(decrement());
  }

  onUpdateStep(){
    if(this.step.valid){
      this.store.dispatch(changeStep({ stepValue: this.step.value! }));
    }
  }

  onLoad(){
    if(this.id.valid)
    {
      this.store.dispatch(loadCounter({ id: this.id.value! }));
    }
  }

  onSave(counterValue: number){
    if(this.id.valid){
      this.store.dispatch(saveCounter({ data: {
        id: this.id.value!,
        value: counterValue
      }}));
    }
  }

  ngOnInit(): void {
    this.counterValue$ = this.store.pipe(select(selectCounterValue));
    this.counterStep$ = this.store.pipe(select(selectCounterStep));

    //load counter value from server
  }

  constructor(private store: Store<AppState>){

  }

}
