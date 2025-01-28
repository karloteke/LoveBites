import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ContactComponent } from './main/contact/contact.component';
import { DisenosComponent } from './main/disenos/disenos.component';
import { BlogComponent } from './main/blog/blog.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: HomeComponent },
    { path: 'diseños', component: DisenosComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contacto', component: ContactComponent },
];