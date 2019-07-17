import { RouterModule, Routes} from '@angular/router';
import { Component } from '@angular/core';
import { PerfilComponent } from './components/perfil/perfil.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const APP_ROUTES: Routes =[
    { path: '', component: FormularioComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'formulario'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});