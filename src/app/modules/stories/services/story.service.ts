import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAPIBase } from '@shared/models/IApi-base';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoryService {


  constructor(private http: HttpClient) {
  }

  getStoriesPageData(): Observable<IAPIBase> {
    var getStoryPageApi = environment.apiUrl + "gethomepagestories";
    return this.http.get<IAPIBase>(getStoryPageApi);
  }
}
