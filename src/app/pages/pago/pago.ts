import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Navbar } from '../../navbar/navbar';

@Component({
  selector: 'app-pago',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, Navbar],
  templateUrl: './pago.html',
  styleUrl: './pago.css'
})
export class Pago {

   pago = {
      tipoServicio: '',
      fechaPago: '',
      totalPago:"",
      formaPago: ''
    };

         guardarPago() {
            // Aquí puedes conectar a una API si quieres
            Swal.fire('Pago registrado correctamente', JSON.stringify(this.pago, null, 2), 'success');
          }

}
