import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAPIBase } from '@shared/models/IApi-base';
import { CACHEABLE, CACHEABLEURLMODULE } from '@shared/http-interceptors/http-cache-interceptor';

@Injectable()
export class HomepageService {

  constructor(private http: HttpClient) {

  }

  getHomepageData(): Observable<IAPIBase> {
    // var getHomepageDataUrl = environment.apiUrl + "misc/homePageData";
    var getHomepageDataUrl = "/api/misc/homePageData";
    return this.http.get<IAPIBase>(getHomepageDataUrl, {
      context: new HttpContext().set(CACHEABLE, true).set(CACHEABLEURLMODULE, "Homepage")
    });
  }


}
