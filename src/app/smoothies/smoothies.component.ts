import { Component, OnInit } from '@angular/core';
import { Smoothie } from '../classes/smoothie';
import { SmoothieService } from '../smoothie.service';

@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {

  smoothies: Smoothie[];


  constructor(private smoothieService: SmoothieService) { }

  ngOnInit() {
    this.getSmoothies();
  }


  getSmoothies(): void {
    this.smoothieService.getSmoothies()
      .subscribe(smoothies => this.smoothies = smoothies);
  }

}
