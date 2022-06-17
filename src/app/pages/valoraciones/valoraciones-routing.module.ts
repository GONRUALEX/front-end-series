import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ValoracionesComponent } from './valoraciones.component';

const routes: Routes = [
  {
    path: '',
    component: ValoracionesComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ValoracionesRoutingModule { }
