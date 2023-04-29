import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private url = env.url;

  constructor(private http : HttpClient) { }


  getPatient(id:number){
    return this.http.get(`http://localhost:3000/users/?id=${id}&role=patient`);
  }

  updatePatient(data:any,id:any){
    return this.http.put(`${this.url}/patient/update/${id}`,data);
  }

}
