import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Counter } from '../models/counter';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private apiUrl = 'http://localhost:3000/counters'

  getCounter(id: number){
    return this.http.get<Counter>(`${this.apiUrl}/${id}`);
  }

  saveCounter(data: Counter){
    return this.http.put<Counter>(`${this.apiUrl}/${data.id}`, data);
  }

  constructor(private http: HttpClient) { }
}
