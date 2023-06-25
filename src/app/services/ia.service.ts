import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Chatbot {
  response: any;
  loading: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class IaService {
  private store = new BehaviorSubject<Chatbot>({ response: null, loading: true });
  private _store$ = this.store.asObservable();
  private readonly API_BASE = "http://localhost:4000/api/cuentaFanClan";
  private readonly http = inject(HttpClient);
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor() { }

  answerQuestion = (question: string): Observable<any> => {
    return this.http.post(`${this.API_BASE}/search`, { "query": question }, this.httpOptions);
  }

  getState(): Observable<Chatbot> {
    return this._store$;
  }

  setState(data: Chatbot) {
    this.store.next(data);
  }
}
