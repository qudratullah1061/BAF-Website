import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { HttpCacheService } from "@shared/services/http-cache.service";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";

export const CACHEABLE = new HttpContextToken(() => false);
export const CACHEABLEURLMODULE = new HttpContextToken(() => "");

@Injectable()

export class HttpCacheInterceptor implements HttpInterceptor {
  constructor(private httpCacheService: HttpCacheService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // pass along non-cacheable requests
    if (!req.context.get(CACHEABLE) || req.context.get(CACHEABLEURLMODULE) == "") {
      console.log("No cacheable");
      return next.handle(req);
    }

    console.log("Cacheable");
    // attempt to retrieve a cached response
    const cacheResponse: HttpResponse<any> = this.httpCacheService.get(req.context.get(CACHEABLEURLMODULE), req.url);

    // return cached response
    if (cacheResponse && cacheResponse instanceof HttpResponse) {
      console.log("Returning cache response");
      return of(cacheResponse);
    }

    // send request to server and add response to cache

    return next.handle(req)
      .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
            console.log("Adding item to cache");
            this.httpCacheService.put(req.context.get(CACHEABLEURLMODULE), req.url, event);
          }
        })
      )

  }

}
