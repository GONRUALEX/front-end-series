import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../../model/Usuario';
import { LayoutService } from '../../service/layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isLogged: boolean = false;
  public iniciaSesion: boolean = false;
  public formGroup: FormGroup = this.formBuilder.group({});
  public minPassLength: number = 100;
  public errorInSesion: boolean = false;
  public verFormulario: boolean = false;
  public registra: boolean = false;
  public nombreUsuario: string = "";

  constructor(private layoutService: LayoutService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.layoutService.isLogged().subscribe((logged: boolean) => {
      this.isLogged = logged;
    });
    this.layoutService.isLoggedUser();
    this.buildForm();
  }

  public iniciarSesion() {
    this.iniciaSesion = true;
    this.verFormulario = true;
    this.registra = false;
  }

  public cerrarSesion() {
    localStorage.removeItem('usuario');
    this.layoutService.setLogged(false);
    this.layoutService.setUsuario({});
    this.iniciaSesion = false;
    this.verFormulario = false;
    this.registra = false;
    this.errorInSesion = false;
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ['', [
        Validators.required, Validators.maxLength(this.minPassLength)
      ]],
      apellido: ['', [
        Validators.required, Validators.maxLength(this.minPassLength)
      ]]
    });
  }

  public enviarLogin() {
    let usuario: Usuario = this.formGroup.value;
    this.layoutService.getUsuariosByNombreAndApellido(usuario).subscribe(data => {
      this.loginValido(data);
      localStorage.setItem('usuario', JSON.stringify(data));
    });
  }

  public registro() {
    let usuario: Usuario = this.formGroup.value;
    this.layoutService.create(usuario).subscribe(data => {
      this.loginValido(data);
    });
  }

  private loginValido(data: Usuario): void {
    if (data != null && data.id != null) {
      this.layoutService.setLogged(true);
      this.layoutService.setUsuario(data);
      this.iniciaSesion = false;
      this.verFormulario = false;
      this.registra = false;
      this.errorInSesion = false;
      this.nombreUsuario = data.nombre != null ? data.nombre : "";
    } else {
      this.errorInSesion = true;
    }
  }

  public registrarse() {
    this.registra = true;
    this.iniciaSesion = false;
    this.verFormulario = true;
  }

  public getError(controlName: string): string {
    let error = '';
    let control = this.formGroup.get(controlName);
    if (control != null && control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
