
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  guardarLogin(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crearLogin`,data);
  }
  buscarLogin(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscarLogin`,data);
  }
  actualizarLogin(data : any,id : number): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizarLogin/${id}`,data);
  }
  eliminarLogin(id : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminarLogin/${id}`);
  }
}

