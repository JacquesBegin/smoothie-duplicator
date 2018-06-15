import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Smoothie } from '../../classes/smoothie';
import { Ingredient } from '../../classes/ingredient';


@Component({
  selector: 'app-smoothie-create-dialog',
  templateUrl: './smoothie-create-dialog.component.html',
  styleUrls: ['./smoothie-create-dialog.component.css']
})
export class SmoothieCreateDialogComponent implements OnInit {

  @Input() newSmoothie: Smoothie;
  smoothieName: string;
  smoothieIngredients: Array<Ingredient>;

  constructor(
    public dialogRef: MatDialogRef<SmoothieCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

    save(): void {

    }

  ngOnInit() {
  }

}
