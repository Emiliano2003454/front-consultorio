import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Navbar } from '../../navbar/navbar';

@Component({
  selector: 'app-paciente',
  standalone: true,
   imports: [CommonModule, FormsModule, RouterModule, Navbar],
  templateUrl: './paciente.html',
  styleUrl: './paciente.css'
})
export class Paciente {


    paciente = {
      nombrePaciente: ''
    };

     guardarPaciente() {
        // Aquí puedes conectar a una API si quieres
        Swal.fire('Paciente registrado correctamente', JSON.stringify(this.paciente, null, 2), 'success');
      }

}
