import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmoothiesComponent } from './smoothies/smoothies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SmoothieDetailComponent } from './smoothie-detail/smoothie-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'smoothies', component: SmoothiesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: SmoothieDetailComponent },
  { path: '**', redirectTo: '/dashboard' }
]


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
