import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { Usuario } from '../model/Usuario';
import { HttpClient } from "@angular/common/http";
 

@Injectable({
  providedIn: 'root'
})
export class LayoutService implements OnInit{
  private baseUrl = Config.api.baseUrl;
  private endPoint = Config.api.usuarios;
  private isLogged$:Subject<boolean> = new Subject<boolean>();
  private usuario$:Subject<Usuario> = new Subject<Usuario>();
  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.isLoggedUser();
  }

  public isLoggedUser():void{
    let usuario: string;
    usuario = localStorage.getItem('usuario')!=null?localStorage.getItem('usuario')!:"";
    if (usuario != ""){
      this.setLogged(true);
      this.setUsuario(JSON.parse(usuario));
    }else{
      this.setLogged(false);
      this.setUsuario({});
    }
  }

  public setUsuario(usuario: Usuario):void {
    this.usuario$.next(usuario);
  }

  public getUsuario():Observable<any>{
    return this.usuario$.asObservable();
  }

  public isLogged():Observable<any>{
    this.isLoggedUser();
    return this.isLogged$.asObservable();
  }

  public setLogged(logged: boolean):void{
    this.isLogged$.next(logged);
  }

  public getUsuariosByNombreAndApellido(record: Usuario):Observable<Usuario>{
    const endPoint = this.endPoint.getUsuariosByNombreAndApellido;
    const url = this.baseUrl + endPoint;

    return this.http.post(url, record);
  }

  public create(record: Usuario):Observable<Usuario>{
    const endPoint = this.endPoint.create;
    const url = this.baseUrl + endPoint;

    return this.http.post(url, record);
  }

}
