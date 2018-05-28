import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Smoothie } from './classes/smoothie';
import { Smoothies } from './mock-smoothies';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SmoothieService {

  constructor(private messageService: MessageService) { }

  getSmoothies(): Observable<Smoothie[]> {
    this.messageService.add('SmoothieService: fetched smoothies');
    return of(Smoothies);
  }

  getSmoothie(id: number): Observable<Smoothie> {
    this.messageService.add(`SmoothieService: fetched smoothie id=${id}`);
    return of(Smoothies.find(smoothie => smoothie.id === id));
  }
}
