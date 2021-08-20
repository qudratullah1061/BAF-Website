import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { Injectable } from "@angular/core";


@Injectable()


export class HttpValidationInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorMessage = '';
          if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = error.message;
          } else {
            // server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          this.toastr.error('Error', errorMessage);
          return throwError(errorMessage);
        })
      );
  }

}
