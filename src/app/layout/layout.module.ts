import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SharedModule } from '../shared/shared.module';
import { TopbarComponent } from './topbar/topbar.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenubarComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    MenubarComponent
  ]
})
export class LayoutModule { }
