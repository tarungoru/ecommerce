import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(url, { params });
  }

  // POST
  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }

  // PUT
  put<T>(url: string, body: any): Observable<T> {
    return this.http.put<T>(url, body);
  }

  // DELETE
  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(url);
  }
}
