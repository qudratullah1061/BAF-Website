import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }


  getAboutPageData(): Observable<IAPIBase> {

    // var aboutPageApi = environment.apiUrl + "aboutdata";
    var aboutPageApi = "/api/aboutdata";
    return this.http.get<IAPIBase>(aboutPageApi)

  }



}
