import { Routes } from '@angular/router';
import { Login } from './views/login/login';
import { Home } from './views/home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login }
];
