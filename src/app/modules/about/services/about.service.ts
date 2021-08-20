import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CACHEABLE, CACHEABLEURLMODULE } from '@shared/http-interceptors/http-cache-interceptor';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(private http: HttpClient) { }


  getAboutPageData(): Observable<IAPIBase> {

    // var aboutPageApi = environment.apiUrl + "aboutdata";
    var aboutPageApi = "/api/aboutdata";
    return this.http.get<IAPIBase>(aboutPageApi,{
      context: new HttpContext().set(CACHEABLE, true).set(CACHEABLEURLMODULE, "Stories")
    })

  }



}
