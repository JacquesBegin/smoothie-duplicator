import { Component, OnInit, Input } from '@angular/core';
import { Smoothie } from '../classes/smoothie';

@Component({
  selector: 'app-smoothie-detail',
  templateUrl: './smoothie-detail.component.html',
  styleUrls: ['./smoothie-detail.component.css']
})
export class SmoothieDetailComponent implements OnInit {

  @Input() smoothie: Smoothie;

  constructor() { }

  ngOnInit() {
  }

}
