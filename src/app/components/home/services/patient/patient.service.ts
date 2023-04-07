import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http : HttpClient) { }


  getPatient(id:number){
    return this.http.get(`http://localhost:3000/users/?id=${id}&role=patient`);
  }
}
