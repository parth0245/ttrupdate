import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AllServiceService } from './all-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    constructor(private service:AllServiceService){}
    intercept(req :HttpRequest<any>,next:HttpHandler){
        const authToken = this.service.getToken();
        const authRequest = req.clone({
            headers:req.headers.set('authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
    }
}