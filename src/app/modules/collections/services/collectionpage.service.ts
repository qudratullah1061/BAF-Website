import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CACHEABLE, CACHEABLEURLMODULE } from '@shared/http-interceptors/http-cache-interceptor';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionpageService {

  constructor(private http: HttpClient) { }


  getCollectionPageData(): Observable<IAPIBase> {

    // var getCollectionHomepageDataUrl = environment.apiUrl + "getcollectiondata";
    var getCollectionHomepageDataUrl = "/api/getcollectiondata";
    var formData: any = new FormData();
    formData.append("DataType", "homepage");

    return this.http.post<IAPIBase>(getCollectionHomepageDataUrl, formData,{
      context: new HttpContext().set(CACHEABLE, true).set(CACHEABLEURLMODULE, "Collections")
    });
  }




  getCollectionDetailPageData(code: any): Observable<IAPIBase> {

    // var getCollectionDetailApiData = environment.apiUrl + "getcollectiondata";
    var getCollectionDetailApiData = "/api/getcollectiondata";
    var formData: any = new FormData();
    formData.append("DataType", "Detail");
    if (isNaN(code)) {
      formData.append("Code", code);
    } else {
      formData.append("Id", code);
    }

    return this.http.post<IAPIBase>(getCollectionDetailApiData, formData,{
      context: new HttpContext().set(CACHEABLE, true).set(CACHEABLEURLMODULE, `Collection${code}`)
    });
  }



}





