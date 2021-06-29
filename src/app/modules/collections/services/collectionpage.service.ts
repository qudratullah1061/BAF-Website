import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectionpageService {

  constructor(private http: HttpClient) { }


  getCollectionPageData(): Observable<IAPIBase> {

    var getCollectionHomepageDataUrl = environment.apiUrl + "getcollectiondata";
    var formData: any = new FormData();
    formData.append("DataType", "homepage");

    return this.http.post<IAPIBase>(getCollectionHomepageDataUrl, formData);
  }




  getCollectionDetailPageData(code: string): Observable<IAPIBase> {

    var getCollectionDetailApiData = environment.apiUrl + "getcollectiondata";
    var formData: any = new FormData();
    formData.append("DataType", "Detail");
    formData.append("Code", code);

    return this.http.post<IAPIBase>(getCollectionDetailApiData, formData);
  }



}





