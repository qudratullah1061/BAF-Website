import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class StoryService {


  constructor(private http: HttpClient) {
  }

  getStoriesPageData(): Observable<IAPIBase> {
    // var getStoryPageApi = environment.apiUrl + "gethomepagestories";
    var getStoryPageApi = "/api/gethomepagestories";
    return this.http.get<IAPIBase>(getStoryPageApi);
  }
}
