  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
  import { NavigationEnd, Router, RouterModule } from '@angular/router';

  @Component({
    selector: 'app-navbar',
    standalone :true,
     imports: [CommonModule, FormsModule, RouterModule],
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css']
  })
  export class Navbar {
    currentRoute: string = '';

  navLinks = [
    { path: '/paciente', label: 'Paciente', icon: 'bi bi-person-add' },
    { path: '/doctor', label: 'Doctor', icon: 'bi bi-clipboard-plus' },
    { path: '/cita', label: 'Cita', icon: 'bi bi-calendar-check' },
    { path: '/recetas', label: 'Receta', icon: 'bi bi-file-earmark-text' },
    { path: '/pago', label: 'Pago', icon: 'bi bi-credit-card' }
  ];

  constructor(private router: Router) {
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
  }
