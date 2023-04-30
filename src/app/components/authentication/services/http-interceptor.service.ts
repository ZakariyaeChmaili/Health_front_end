import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // throw new Error('Method not implemented.');
    console.log("interceptor is working")
    console.log(req)
    if(req.url.includes('127.0.0.1:5000'))
    return next.handle(req);
    const modifiedReq = req.clone({ withCredentials: true });
    return next.handle(modifiedReq);
    // return next.handle(req);

  }
}
