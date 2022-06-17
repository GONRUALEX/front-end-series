import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { MasterTable } from '../model/MasterTable';

@Injectable({
  providedIn: 'root'
})
export class MasterdataService {

  private baseUrl = Config.api.baseUrl;
  private ValueTableEndPoint = Config.api.mastertable;
  constructor(protected http: HttpClient) { }

  public getPlataforma(): Observable<Array<MasterTable>>{
    const url = this.baseUrl+ this.ValueTableEndPoint.getPlataforma;
    return this.http.get<Array<MasterTable>>(url);

  }

}
