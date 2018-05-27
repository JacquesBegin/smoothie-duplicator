import { Injectable } from '@angular/core';
import { Smoothie } from './classes/smoothie';
import { Smoothies } from './mock-smoothies';

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  constructor() { }

  getSmoothies(): Smoothie[] {
    return Smoothies;
  }
}
