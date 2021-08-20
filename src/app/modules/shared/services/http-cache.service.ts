import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: "root"
})

export class HttpCacheService {
  public requests: any = {};
  constructor() {
  }

  setModuleArr(module: string): void {
    if (this.requests[module] == undefined) {
      this.requests[module] = {};
    }
  }

  put(module: string, url: string, response: HttpResponse<any>): void {
    this.setModuleArr(module);
    this.requests[module][url] = response;
  }

  get(module: string, url: string): HttpResponse<any> | undefined {
    this.setModuleArr(module);
    return this.requests[module][url];
  }

  delete(module: string, url: string): void {
    this.setModuleArr(module);
    this.requests[module][url] = undefined;
  }

  deleteAll(): void {
    this.requests = {};
  }
}
