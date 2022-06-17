import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', pathMatch: 'full', redirectTo: 'series'},
  {
    path:'series',
    loadChildren: (): Promise<any> =>
      import('../app/pages/series/series.module').then((m)=>m.SeriesModule),
  },
  {
    path:'valoraciones',
    loadChildren: (): Promise<any> =>
      import('../app/pages/valoraciones/valoraciones.module').then((m)=>m.ValoracionesModule),
  },
  {path:'**', pathMatch: 'full', redirectTo: 'series'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
