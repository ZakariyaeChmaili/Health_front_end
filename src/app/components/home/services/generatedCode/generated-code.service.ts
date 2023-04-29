import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env';
@Injectable({
  providedIn: 'root'
})
export class GeneratedCodeService {
  private url = env.url;
  constructor(private http : HttpClient) { }
  generateCode(code:string,patient:any){

    return this.http.post(`${this.url}/session/create`, {
      "code": code,
      "idpatient":patient.id
    });
  }

  deleteCode(patient:any){
    return this.http.delete(`${this.url}/session/delete/${patient.generatedCodeId}`);
  }

  getGeneratedCode(code:any){
    return this.http.get(`${this.url}/session/getCode/${code}`);
  }
  getGeneratedCodeByPatientId(id:any){
    console.log(id)
    return this.http.get(`${this.url}/session/get/${id}`);
  }
}


