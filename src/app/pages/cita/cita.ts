import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Navbar } from '../../navbar/navbar';

@Component({
  selector: 'app-cita',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Navbar],
  templateUrl: './cita.html',
  styleUrl: './cita.css'
})
export class Cita {
 cita = {
    idCita: 0,
    nombrePaciente: '',
    tipoEspecialidad: '',
    numeroDeConsultorio: 1,
    fechaHora: ''
  };

  guardarCita() {
    // Aquí puedes conectar a una API si quieres
    Swal.fire('Cita registrada', JSON.stringify(this.cita, null, 2), 'success');
  }
}

