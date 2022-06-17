import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterTable } from 'src/app/shared/model/MasterTable';
import { Serie } from 'src/app/shared/model/Serie';
import { LayoutService } from 'src/app/shared/service/layout.service';
import { MasterdataService } from 'src/app/shared/service/masterdata.service';
import { SeriesService } from './series.service';


@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SeriesComponent implements OnInit {
  public isLogged: boolean = false;
  public minPassLength: number = 100;
  public seriesList: Serie[] = [];
  public anadirForm: boolean = false;
  public plataformaItems: Array<MasterTable> = [];
  public seleccionado:MasterTable = {};
  public formGroupSerie: FormGroup = this.formBuilder.group({});
  constructor(private layoutService: LayoutService, 
    private seriesService: SeriesService,
    private masterDataService: MasterdataService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.layoutService.isLogged().subscribe((logged: boolean) => {
      this.isLogged = logged;
    });
    this.layoutService.isLoggedUser();
    this.search();
    this.getPlataforma();  
    this.buildForm(); 
  }

  public search(): void {
    this.seriesService.search().subscribe((data) => {
      this.seriesList = data as Serie[];
    });
  }

  public getPlataforma():void{
    this.masterDataService.getPlataforma().subscribe((data)=>{
      this.plataformaItems = data;
    });
  }

  private buildForm() {
    this.formGroupSerie = this.formBuilder.group({
      nombre: ['', [
        Validators.required, Validators.maxLength(this.minPassLength)
      ]],
      caratula: ['', [
        Validators.required
      ]],
      sinopsis: ['', [
        Validators.required, Validators.maxLength(500)
      ]],plataforma: ['', [
        Validators.required, Validators.maxLength(500)
      ]],
    });
  }

  public anadirSerie(): void {
    this.anadirForm = true;
  }

  public atras():void{
    this.anadirForm = false;
  }

  public crearSerie(e) {
    let serie: Serie =  this.formGroupSerie.value;
    serie.plataforma = this.plataformaItems.filter(items => items.description == serie.plataforma)[0];
    serie.caratula = null;
   this.seriesService.create(serie).subscribe(data => {
      this.anadirForm = false;
      this.search();
      this.formGroupSerie.reset();
    });
  }

  public getError(controlName: string): string {
    let error = '';
    let control = this.formGroupSerie.get(controlName);
    if (control != null && control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

}
