import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { env } from 'src/app/env';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  private url = env.url;
  constructor(private http: HttpClient) {}

  getReports(patientId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.url}/reports/patientReports/${patientId}`
    );
  }
  addReport(data: any) {
    console.log(data);
    return this.http.post(`${this.url}/reports/create`, data);
  }

  getReport(id: number) {
    return this.http.get(`${this.url}/reports/report/${id}`);
  }

  getDiagnostic(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/diagnostic`);
  }

  searchReport(kword: string, patientId: number): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.url}/reports/search/${kword}/${patientId}`
    );
  }
}
