import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const api_key = 'test123';
    const modifiedReq = request.clone({
      setHeaders: { api_key, }
    })

    return next.handle(modifiedReq).pipe(
      map(event => {

        if (event instanceof HttpResponse) {
          console.log(event);
        }
        return event;

      })
    );
  }
}
