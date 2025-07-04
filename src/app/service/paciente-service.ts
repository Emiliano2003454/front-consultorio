import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

   private baseUrl = "http://localhost:8080";

   constructor(private http: HttpClient) { }

  guardarPaciente(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/crearPaciente`,data);
  }
  buscarPaciente(data : any): Observable<any> {
    return this.http.post(`${this.baseUrl}/buscarPaciente`,data);
  }
  actualizarPaciente(data : any,id : number): Observable<any> {
    return this.http.put(`${this.baseUrl}/actualizarPaciente/${id}`,data);
  }
  eliminarPaciente(id : number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminarPaciente/${id}`);
  }
}
