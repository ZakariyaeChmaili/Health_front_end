import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {
  private url = env.url;
  constructor(private http:HttpClient) { }

  getVaccines(patientId:number){
    return this.http.get(`${this.url}/vaccins/patientVaccins/${patientId}`);
  }


  getVaccine(patientId : number){
    return this.http.get(`${this.url}/vaccin?patient_id=${patientId}`);
  }
  addVaccine(vaccine : any){
    return this.http.post(`${this.url}/vaccins/create`,vaccine);
  }

  searchVaccine(kword : string,patientId : number){
    console.log(patientId)
    return this.http.get(`${this.url}/vaccins/search/${kword}/${patientId}`);
  }
}
