import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let startTime=(new Date()).getTime();

    return next.handle(request).pipe(
      map(event=>{
        const endTime=(new Date()).getTime();
        const difference= endTime-startTime;
        console.log(event+' succeed in '+difference+'milliseconds')
        return event
      })
    )
  }
}
