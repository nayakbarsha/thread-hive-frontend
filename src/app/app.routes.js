"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
// import { HomeComponent } from './pages/home/home.component';
// import { LoginComponent } from './pages/login/login.component';
// import { SignupComponent } from './pages/signup/signup.component';
exports.routes = [
    // {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: 'home', component: HomeComponent},
    // {path: 'login', component: LoginComponent},
    // {path: 'signup', component: SignupComponent},
    {
        path: 'home',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/home/home.component'); }).then(function (c) { return c.HomeComponent; }); },
    },
    {
        path: 'login',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/login/login.component'); }).then(function (c) { return c.LoginComponent; }); },
    },
    {
        path: 'signup',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./pages/signup/signup.component'); }).then(function (c) { return c.SignupComponent; }); },
    },
];
