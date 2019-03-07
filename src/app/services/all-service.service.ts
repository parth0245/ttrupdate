import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllServiceService {
  private authStatus = false;
  private isAuthenticated = new Subject<boolean>();
  private token: string;
  constructor(private http: HttpClient) { }
  getToken() {
    return this.token;
  }
  getAuthStatus() {
    return this.authStatus;
  }
  getIsAuthenticated(){
    return this.isAuthenticated.asObservable();
  }
  registerUser(email: string, name: string, mobile: string, password: string) {
    const userRegisterData = {
      email: email,
      password: password,
      name: name,
      mobile: mobile
    }
    return this.http.post('http://172.16.3.250:3000/api/user/register', userRegisterData);
  }

  login(email: string, password: string) {
    const userRegisterData = {
      email: email,
      password: password,
    }
    return this.http.post<{ token: string }>('http://172.16.3.250:3000/api/user/login', userRegisterData).subscribe(token => {
      this.token = token.token;
      if (this.token) {
        this.authStatus = true;
        this.isAuthenticated.next(true);
        localStorage.setItem('token', this.token)//to be removed later
      }
    });
  }

  logout(){
    this.token = null;
    this.authStatus = false;
    this.isAuthenticated.next(false);
  }


}
