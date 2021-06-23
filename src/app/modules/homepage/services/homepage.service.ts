import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IAPIBase } from '../../shared/models/IApi-base';

@Injectable()
export class HomepageService {

  getHomepageDataUrl = environment.apiUrl + "misc/homePageData";

  constructor(private http: HttpClient) {

  }

  getHomepageData(): Observable<IAPIBase> {
    return this.http.get<IAPIBase>(this.getHomepageDataUrl);
  }


}
