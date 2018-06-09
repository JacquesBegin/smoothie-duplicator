import { Component, OnInit, Input } from '@angular/core';
import { Smoothie } from '../../classes/smoothie';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-smoothie-card',
  templateUrl: './smoothie-card.component.html',
  styleUrls: ['./smoothie-card.component.css']
})
export class SmoothieCardComponent implements OnInit {

  @Input() smoothie: Smoothie;

  constructor() { }

  ngOnInit() {
  }

}
