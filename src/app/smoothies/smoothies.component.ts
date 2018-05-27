import { Component, OnInit } from '@angular/core';
import { Smoothie } from '../classes/smoothie';
import { SmoothieService } from '../smoothie.service';

@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {

  selectedSmoothie: Smoothie;
  smoothies: Smoothie[];


  constructor(private smoothieService: SmoothieService) { }

  ngOnInit() {
    this.getSmoothies();
  }


  onSelect(smoothie: Smoothie): void {
    this.selectedSmoothie = smoothie;
  }


  getSmoothies(): void {
    this.smoothies = this.smoothieService.getSmoothies();
  }

}
