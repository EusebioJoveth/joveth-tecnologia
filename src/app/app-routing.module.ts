import { ServiiceComponent } from './components/portal/serviice/serviice.component';
import { IndexComponent } from './components/portal/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/portal/about/about.component';
import { ContactoComponent } from './components/portal/contacto/contacto.component';
import { RegisterComponent } from './components/portal/register/register.component';
import { LoginComponent } from './components/portal/login/login.component';
import { ClientComponent } from './components/portal/client/client.component';
import { InitComponent } from './components/portal/init/init.component';

const routes: Routes = [
  { path: 'inicio', component: InitComponent},
  { path: 'about', component: AboutComponent},
  { path: 'service', component: ServiiceComponent},
  { path: 'contact', component: ContactoComponent},
  { path: 'client', component: ClientComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  /*{
    path: 'portal',
    loadChildren: () => import('./components/portal/portal.module').then(m => m.PortalModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
