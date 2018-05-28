import { Component, OnInit } from '@angular/core';
import { Smoothie } from '../classes/smoothie';
import { SmoothieService } from '../smoothie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  smoothies: Smoothie[] = [];

  constructor(private smoothieService: SmoothieService) { }

  ngOnInit() {
    this.getSmoothies();
  }

  getSmoothies(): void {
    this.smoothieService.getSmoothies()
      .subscribe(smoothies => this.smoothies = smoothies.slice(1, 5));
  }

}
