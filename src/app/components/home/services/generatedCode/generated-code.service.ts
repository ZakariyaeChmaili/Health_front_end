import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GeneratedCodeService {

  constructor(private http : HttpClient) { }
  generateCode(code:string,patient:any){

    return this.http.post('http://localhost:3000/generatedCode', {
      "code": code,
      "patient_id":patient.id
    });
  }

  deleteCode(patient:any){
    return this.http.delete(`http://localhost:3000/generatedCode/${patient.generatedCodeId}`);
  }

  getGeneratedCode(code:any){
    return this.http.get(`http://localhost:3000/generatedCode?code=${code}`);
  }
}


