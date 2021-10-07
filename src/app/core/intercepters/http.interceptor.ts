import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, first, filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class HttpCachingInterceptor implements HttpInterceptor {
  public readonly store: Record<string, Observable<HttpEvent<any>>> = {};

  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('intercepting');

    if (req.method !== 'GET') {
      return next.handle(req);
    }

    if (!this.store[req.urlWithParams]) {
      this.store[req.urlWithParams] = next.handle(req).pipe(
        filter((res) => res instanceof HttpResponse),
        shareReplay(1)
      );
    }

    return this.store[req.urlWithParams].pipe(first());
  }
}
