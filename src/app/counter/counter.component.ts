import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../store/state';
import { Store, select } from '@ngrx/store';
import { selectCounterStep, selectCounterValue } from '../store/selectors/counter-selectors';
import { FormControl, Validators } from '@angular/forms';
import { changeStep, decrement, increment } from '../store/actions/counter-actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  step = new FormControl(1, [ Validators.required ]);

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

  ngOnInit(): void {
    this.counterValue$ = this.store.pipe(select(selectCounterValue));
    this.counterStep$ = this.store.pipe(select(selectCounterStep));
  }

  constructor(private store: Store<AppState>){

  }

}
