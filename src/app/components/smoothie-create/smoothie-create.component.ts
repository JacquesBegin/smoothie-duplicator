import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SmoothieCreateDialogComponent } from '../smoothie-create-dialog/smoothie-create-dialog.component';
import { SmoothieService } from '../../smoothie.service';

@Component({
  selector: 'app-smoothie-create',
  templateUrl: './smoothie-create.component.html',
  styleUrls: ['./smoothie-create.component.css']
})
export class SmoothieCreateComponent implements OnInit {

  smoothieName: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(SmoothieCreateDialogComponent, {
      width: '250px',
      data: { smoothieName: this.smoothieName }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // after dialog closes the smoothie list needs to be updated
      this.smoothieName = result;
    });
  }

  ngOnInit() {
  }

}
