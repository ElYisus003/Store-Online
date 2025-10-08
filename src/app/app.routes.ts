import { Routes, RouterModule } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Header } from './components/header/header';
import { Favorites } from './components/favorites/favorites';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { Footer } from './components/footer/footer';
import { Vartest } from './components/vartest/vartest';
import { NgModule } from '@angular/core';

// @NgModule({
//     imports: [RouterModule, forRoot(routes)],
//     exports:[RouterModule]
// })
// function forRoot(routes: Routes): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
//     throw new Error('Function not implemented.');
// }

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'home/:userType',
        component: Home
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'header',
        component: Header
    },
    {
        path: 'favorites',
        component: Favorites
    },
    {
        path: 'forgot-password',
        component: ForgotPassword
    },
    {
        path: 'footer',
        component: Footer
    },
    {
        path: 'vartest',
        component: Vartest
    }
];



