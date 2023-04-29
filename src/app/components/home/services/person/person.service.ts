import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
private url = env.url;
  constructor(private http : HttpClient) { }


  getPerson(id:any){
    return this.http.get(`${this.url}/authentication/person/${id}`);
  }

  updateDoctor(data:any,id:any){
    return this.http.put(`${this.url}/authentication/update/${id}`,data);
  }
}
