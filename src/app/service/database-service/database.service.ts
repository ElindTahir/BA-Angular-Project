import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/items`);
  }

  deleteAllItems(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/items`);
  }

  restoreCSV(): Observable<any> {
    return this.http.post(`${this.apiUrl}/restore-csv`, {});
  }

  delete100Items(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/items/delete100`);
  }

  add100Items(): Observable<any> {
    return this.http.post(`${this.apiUrl}/items/add100`, {});
  }
}
