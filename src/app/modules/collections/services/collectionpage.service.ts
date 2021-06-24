import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionpageService{

  constructor(private http: HttpClient) { }

  collectionPageApi = "https://baf-website4-test.itcomrade.us/getcollectiondata"

 

  getCollectionPageData() {
    return this.http.post(this.collectionPageApi, {DataType: 'homepage'})
  }

}





