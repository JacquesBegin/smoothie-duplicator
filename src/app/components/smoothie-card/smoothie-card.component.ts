import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Smoothie } from '../../classes/smoothie';

@Component({
  selector: 'app-smoothie-card',
  templateUrl: './smoothie-card.component.html',
  styleUrls: ['./smoothie-card.component.css']
})
export class SmoothieCardComponent implements OnInit {

  @Input() smoothie: Smoothie;
  @Output() deleted = new EventEmitter<Smoothie>();

  constructor(
  ) { }

  ngOnInit() {
  }

  delete(smoothie: Smoothie) {
    this.deleted.emit(smoothie);
  }

}
