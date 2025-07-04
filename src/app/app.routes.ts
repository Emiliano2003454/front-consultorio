import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Cita } from './pages/cita/cita';
import { Home } from './home/home';
import { Doctor } from './pages/doctor/doctor';
import { Paciente } from './pages/paciente/paciente';
import { Receta } from './pages/receta/receta';
import { Pago } from './pages/pago/pago';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'cita', component: Cita },
    { path: 'home', component: Home },
    { path: 'doctor', component: Doctor },
    { path: 'paciente', component: Paciente },
    { path: 'receta', component: Receta },
    { path: 'pago', component: Pago },
];
