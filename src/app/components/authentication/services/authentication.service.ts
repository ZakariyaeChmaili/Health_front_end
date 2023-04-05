import { env } from './../../../env';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  url = env.url;

  constructor(private http: HttpClient) {}

  login(username: string, password: string):Observable<boolean> {
return this.http.get(`${this.url}/users?username=${username}&password=${password}`).pipe(
  map((data: any) => {
    if(data.length > 0){
      console.log(data);
      localStorage.setItem('user', JSON.stringify(data[0]));
      return true;
    }else{
      return false;
    }
  })
);
  }
}
