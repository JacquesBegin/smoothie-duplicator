import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Smoothie } from './classes/smoothie';
import { Smoothies } from './mock-smoothies';

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  constructor() { }

  getSmoothies(): Observable<Smoothie[]> {
    return of(Smoothies);
  }
}
