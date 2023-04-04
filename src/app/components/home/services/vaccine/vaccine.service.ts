import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private url = env.url;
  constructor(private http:HttpClient) { }


  getVaccine(){
    return this.http.get(`${this.url}/vaccin`);
  }
}
