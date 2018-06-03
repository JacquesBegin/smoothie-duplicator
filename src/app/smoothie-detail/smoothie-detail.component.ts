import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SmoothieService } from '../smoothie.service';
import { Smoothie } from '../classes/smoothie';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-smoothie-detail',
  templateUrl: './smoothie-detail.component.html',
  styleUrls: ['./smoothie-detail.component.css']
})
export class SmoothieDetailComponent implements OnInit {

  // @Input() smoothie: Smoothie;

  smoothie$: Observable<Smoothie>;

  constructor(
    private route: ActivatedRoute,
    private smoothieService: SmoothieService,
    private location: Location,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.smoothie$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.smoothieService.getSmoothie(params.get('id')))
    );
  }

  goBack(): void {
    this.location.back();
  }

  save(s): void {
    console.log("s: ", s);
    this.smoothieService.updateSmoothie(s)
      .subscribe((res) => {
        console.log("res: ", res);
        // this.goBack();
      });
  }

  // displaySaveMessage(message: string) {

  // }

}
