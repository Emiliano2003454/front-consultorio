import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

   private baseUrl = "http://localhost:8080";

   constructor(private http: HttpClient) { }

  guardarPago(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crearPago`,data);
  }
  buscarPago(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscarPago`,data);
  }
  actualizarPago(data : any,id : number): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizarPago/${id}`,data);
  }
  eliminarPago(id : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminarPago/${id}`);
  }
}
