import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAPIBase } from '@shared/models/IApi-base';

@Injectable()
export class HomepageService {

  constructor(private http: HttpClient) {

  }

  getHomepageData(): Observable<IAPIBase> {
    // var getHomepageDataUrl = environment.apiUrl + "misc/homePageData";
    var getHomepageDataUrl = "/api/misc/homePageData";
    return this.http.get<IAPIBase>(getHomepageDataUrl);
  }


}
