import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeriesRoutingModule } from './series-routing.module';
import { SerieComponent } from './serie/serie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SeriesService } from './series.service';



@NgModule({
  declarations: [SeriesComponent, SerieComponent],
  providers:[
    SeriesService
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    SeriesRoutingModule
  ]
})
export class SeriesModule { }
