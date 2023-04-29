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

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this.url}/authentication/login`,{
      cni: username,
      password: password,
    },{withCredentials:true})
    .pipe(
      map((data: any) => {
        console.log(data)
        if (data) {
          console.log(data);
          localStorage.setItem('user', JSON.stringify(data.user));
          return true;
        } else {
          return false;
        }
      })
    );
  }

  signup(patient : any) {
    console.log(patient)
    return this.http.post(`${this.url}/patient/create`,patient);

  }
}
