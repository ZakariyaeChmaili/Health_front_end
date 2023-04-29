import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class AiService {


  constructor(private http : HttpClient) { }

  predict(data:any){
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(`http://127.0.0.1:5000/ai`, data, { headers });
  }

}
