import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SmoothieService } from '../smoothie.service';
import { Smoothie } from '../classes/smoothie';

@Component({
  selector: 'app-smoothie-detail',
  templateUrl: './smoothie-detail.component.html',
  styleUrls: ['./smoothie-detail.component.css']
})
export class SmoothieDetailComponent implements OnInit {

  @Input() smoothie: Smoothie;

  constructor(
    private route: ActivatedRoute,
    private smoothieService: SmoothieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSmoothie();
  }

  getSmoothie(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.smoothieService.getSmoothie(id)
      .subscribe(smoothie => this.smoothie = smoothie);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.smoothieService.updateSmoothie(this.smoothie)
      .subscribe(() => this.goBack());
  }

}
