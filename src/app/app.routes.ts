import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './pages/login/login.component';
// import { SignupComponent } from './pages/signup/signup.component';

export const routes: Routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'home', component: HomeComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'signup', component: SignupComponent},
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').
        then((c)=> c.HomeComponent),
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').
        then((c)=> c.LoginComponent),
    },
    {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component').
        then((c)=> c.SignupComponent),
    },
];
