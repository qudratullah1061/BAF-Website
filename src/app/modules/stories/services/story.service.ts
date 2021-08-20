import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CACHEABLE, CACHEABLEURLMODULE } from '@shared/http-interceptors/http-cache-interceptor';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';

@Injectable()
export class StoryService {


  constructor(private http: HttpClient) {
  }

  getStoriesPageData(): Observable<IAPIBase> {
    // var getStoryPageApi = environment.apiUrl + "gethomepagestories";
    var getStoryPageApi = "/api/gethomepagestories";
    return this.http.get<IAPIBase>(getStoryPageApi,{
      context: new HttpContext().set(CACHEABLE, true).set(CACHEABLEURLMODULE, "Stories")
    });
  }
}
