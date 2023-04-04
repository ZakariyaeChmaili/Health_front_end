import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from 'src/app/env';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
    private url = env.url;
  constructor(private http:HttpClient) { }


  getReport(){
    return this.http.get(`${this.url}/reports`);
  }
  addReport(data:any){
    return this.http.post(`${this.url}/reports`,data);
  }
}
