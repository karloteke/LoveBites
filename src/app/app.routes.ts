import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { ContactComponent } from './main/contact/contact.component';
import { DisenosComponent } from './main/disenos/disenos.component';
import { BlogComponent } from './main/blog/blog.component';
import { LegalComponent } from './main/legal/legal.component'
import { PrivacityComponent } from './main/privacity/privacity.component';
import { CookiesComponent } from './main/cookies/cookies.component';

export const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: HomeComponent },
    { path: 'diseños', component: DisenosComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'legal', component: LegalComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: 'privacity', component: PrivacityComponent },
];