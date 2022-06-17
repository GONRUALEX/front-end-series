import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Serie } from 'src/app/shared/model/Serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss'],
})
export class SerieComponent implements OnInit {

  @Input('serie') serie: any;
  constructor() { }

  ngOnInit(): void {
  }

}
