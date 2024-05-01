import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChartService {
  private apiUrl = 'http://localhost:3000/age-data';

  constructor(private http: HttpClient) {}

  getAgeData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}