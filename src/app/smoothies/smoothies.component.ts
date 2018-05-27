import { Component, OnInit } from '@angular/core';
import { Smoothie } from '../classes/smoothie';

@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {

  smoothie: Smoothie = {
    id: 1,
    name: 'Lime Crush'
  };


  constructor() { }

  ngOnInit() {
  }

}
