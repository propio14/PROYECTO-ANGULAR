import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


export const routes: Routes = [
    {path: '', redirectTo: '/inicio', pathMatch: 'full' },
    {path:'inicio',component:InicioComponent},
    {path:'acercade',component:AcercadeComponent},
    { path: 'contacto', component: ContactoComponent }
];