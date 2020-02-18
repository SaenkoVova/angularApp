import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  error$ = new BehaviorSubject(false);

  constructor() { }

  getErrorState() {
    return this.error$;
  }

  setError() {
    this.error$.next(true);
  }
  unsetError() {
    this.error$.next(false);
  }
}
