import { env } from './../../../env';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = env.url;

  constructor(private http : HttpClient) { }

  login(username:string, password:string){
    return this.http.post(`${this.url}/login`, {username, password});
  }

}
