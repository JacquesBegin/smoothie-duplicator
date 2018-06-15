import { Component, OnInit } from '@angular/core';
import { Smoothie } from '../../classes/smoothie';
import { SmoothieService } from '../../smoothie.service';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';


@Component({
  selector: 'app-smoothies',
  templateUrl: './smoothies.component.html',
  styleUrls: ['./smoothies.component.css']
})
export class SmoothiesComponent implements OnInit {

  smoothies: Smoothie[];
  snackBarRef: MatSnackBarRef<SimpleSnackBar>;

  constructor(
    private smoothieService: SmoothieService,
    public snackBar: MatSnackBar
  ) { }

  

  ngOnInit() {
    this.getSmoothies();
  }


  getSmoothies(): void {
    this.smoothieService.getSmoothies()
      .subscribe(smoothies => this.smoothies = smoothies);
  }

  // need to add a smoothie instance not just a name
  // need to check for at least 1 ingredient
  add(name: string): void {
    // name = name.trim();
    if (!name) { return; }
    this.smoothieService.addSmoothie({ name } as Smoothie)
      .subscribe(smoothie => {
      this.smoothies.push(smoothie);
    });
  }

  delete(smoothie: Smoothie): void {
    this.smoothies = this.smoothies.filter(s => s !== smoothie);
    this.smoothieService.deleteSmoothie(smoothie).subscribe(() => {
      this.displayDeleteMessage("Smoothie Deleted", "Undo", smoothie);
    });
  }

  displayDeleteMessage(message: string, action: string, smoothie: Smoothie) {
    this.snackBarRef = this.snackBar.open(message, action, { duration: 20000 });

    this.snackBarRef.onAction().subscribe(() => {
      this.add(smoothie.name);
    })
  }

}
