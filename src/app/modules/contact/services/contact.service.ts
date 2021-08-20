import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CACHEABLE, CACHEABLEURLMODULE } from '@shared/http-interceptors/http-cache-interceptor';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContactPageData(): Observable<IAPIBase> {
    // var contactPageApi = environment.apiUrl + "contactdata";
    var contactPageApi = "/api/contactdata";
    return this.http.get<IAPIBase>(contactPageApi,{
      context: new HttpContext().set(CACHEABLE, true).set(CACHEABLEURLMODULE, "Stories")
    });
  }
}
