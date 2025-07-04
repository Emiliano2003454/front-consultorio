import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

   private baseUrl = "http://localhost:8080";

   constructor(private http: HttpClient) { }

  guardarReceta(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crearReceta`,data);
  }
  buscarReceta(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscarReceta`,data);
  }
  actualizarReceta(data : any,id : number): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizarReceta/${id}`,data);
  }
  eliminarReceta(id : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminarReceta/${id}`);
  }
}
