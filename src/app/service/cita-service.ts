import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

   private baseUrl = "http://localhost:8080";

   constructor(private http: HttpClient) { }

  guardarCita(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crearCita`,data);
  }
  buscarCita(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscarCita`,data);
  }
  actualizarCita(data : any,id : number): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizarCita/${id}`,data);
  }
  eliminarCita(id : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminarCita/${id}`);
  }
}
