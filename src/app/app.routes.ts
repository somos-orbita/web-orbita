import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Órbita | Automatización e IA para empresas'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
