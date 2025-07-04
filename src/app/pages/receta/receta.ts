import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Navbar } from '../../navbar/navbar';

@Component({
  selector: 'app-receta',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Navbar],
  templateUrl: './receta.html',
  styleUrl: './receta.css'
})
export class Receta {

   receta = {
    tipoReceta: ''

      };

       guardarReceta() {
          // Aquí puedes conectar a una API si quieres
          Swal.fire('Receta registrada correctamente', JSON.stringify(this.receta, null, 2), 'success');
        }

}
