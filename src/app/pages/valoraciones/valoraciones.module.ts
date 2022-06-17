import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValoracionesRoutingModule } from './valoraciones-routing.module';
import { ValoracionesService } from './valoraciones.service';
import { ValoracionesComponent } from './valoraciones.component';



@NgModule({
  providers:[
    ValoracionesService
  ],
  declarations: [ValoracionesComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ValoracionesRoutingModule
  ]
})
export class ValoracionesModule { }
