import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Config } from 'src/app/shared/config/config';
import { Serie } from 'src/app/shared/model/Serie';


@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private baseUrl = Config.api.baseUrl;
  private endPoint = Config.api.series;

  constructor(private http: HttpClient) { }

  public search():Observable<Serie>{
    const endPoint = this.endPoint.search;
    const url = this.baseUrl + endPoint;

    return this.http.get(url);
  }

  public create(record: Serie):Observable<Serie>{
    const endPoint = this.endPoint.create;
    const url = this.baseUrl + endPoint;

    return this.http.post(url, record);
  }


}
