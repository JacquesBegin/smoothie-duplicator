import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Smoothie } from '../classes/smoothie';
import { SmoothieService } from '../smoothie.service';


@Component({
  selector: 'app-smoothie-search',
  templateUrl: './smoothie-search.component.html',
  styleUrls: ['./smoothie-search.component.css']
})
export class SmoothieSearchComponent implements OnInit {

  smoothies$: Observable<Smoothie[]>;
  private searchTerms = new Subject<string>();

  constructor(private smoothieService: SmoothieService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.addLiveSearch();
  }

  addLiveSearch(): void {
    this.smoothies$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) =>
        this.smoothieService.searchSmoothies(term)),
    );
  }

  clearDropDown(): void {
    this.smoothies$ = new Observable<Smoothie[]>();
    this.addLiveSearch();
  }
  
}
