import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContactPageData(): Observable<IAPIBase> {
    // var contactPageApi = environment.apiUrl + "contactdata";
    var contactPageApi = "/api/contactdata";
    return this.http.get<IAPIBase>(contactPageApi);
  }
}
