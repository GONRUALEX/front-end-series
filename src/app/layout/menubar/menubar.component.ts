import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/service/layout.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {

  public isLogged: boolean = false;

  constructor(private layoutService: LayoutService) { }

  ngOnInit(): void {
    this.layoutService.isLogged().subscribe((logged: boolean) => {
      this.isLogged = logged;
    });
  }


}
