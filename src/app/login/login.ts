import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login{
  validUsers: any;
  username: string = '';
  password: string = '';
  tipoLogin: string = '';
  nombreLogin: string = '';
  isRegisterMode: boolean | undefined;

  constructor(private loginService: LoginService,private router: Router){}



  registrarUsuario() {

  const nuevoLogin = {
    idLogin:1,
    usuario:this.username,
    password:this.password,
    tipoLogin:this.tipoLogin,
    nombreLogin:this.nombreLogin
  };

  this.loginService.guardarLogin(nuevoLogin).subscribe({
    next: (data) => {
      if(data != null){
         Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Se guardo correctamente el usuario :'+data.usuario
        });
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al guardar el usuario'
        });

      }

      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al guardar el usuario'
        });
      }
  });
  }

  iniciaSesion() {
  const iniciaLogin = {
    usuario: this.username,
    password: this.password,
  };

  this.loginService.buscarLogin(iniciaLogin).subscribe({
    next: (data) => {
      if (data != null) {
        if(data.tipoLogin === "Paciente"){

        Swal.fire({
          icon: 'success',
          title: 'Login correcto',
          text: 'Se ha iniciado sesión con el usuario: ' + data.usuario
        }).then(() => {
          console.log('navegando a ruta')
          this.router.navigate(['/']);
        });

        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Usuario o contraseña incorrecta'
        });
      }
    },
    error: () => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al iniciar sesión'
      });
    }
  });
}

  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
}

