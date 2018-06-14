import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Smoothie } from '../../classes/smoothie';


@Component({
  selector: 'app-smoothie-create-dialog',
  templateUrl: './smoothie-create-dialog.component.html',
  styleUrls: ['./smoothie-create-dialog.component.css']
})
export class SmoothieCreateDialogComponent implements OnInit {

  newSmoothie: Smoothie;

  constructor(
    public dialogRef: MatDialogRef<SmoothieCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit() {
  }

}
