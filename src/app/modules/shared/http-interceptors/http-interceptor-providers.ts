import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpCacheInterceptor } from './http-cache-interceptor';
import { HttpValidationInterceptor } from './http-validation-interceptor';



/** Http interceptor providers in outside-in order */
export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpCacheInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: HttpValidationInterceptor, multi: true },
];
