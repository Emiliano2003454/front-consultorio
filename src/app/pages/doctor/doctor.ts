import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Navbar } from '../../navbar/navbar';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Navbar],
  templateUrl: './doctor.html',
  styleUrl: './doctor.css'
})
export class Doctor {

  doctor = {
    nombreDoctor: '',
    tipoEspecialidad: '',
    numeroDeCedula: '',
    telefono: '',
    correo: ''
  };

   guardarDoctor() {
      // Aquí puedes conectar a una API si quieres
      Swal.fire('Doctor registrado correctamente', JSON.stringify(this.doctor, null, 2), 'success');
    }

}
