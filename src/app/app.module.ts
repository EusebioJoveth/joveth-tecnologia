import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './components/portal/index/index.component';
import { MaterialModule } from './components/material/material.module';
import { AboutComponent } from './components/portal/about/about.component';
import { ServiiceComponent } from './components/portal/serviice/serviice.component';
import { ContactoComponent } from './components/portal/contacto/contacto.component';
import { LoginComponent } from './components/portal/login/login.component';
import { RegisterComponent } from './components/portal/register/register.component';
import { ClientComponent } from './components/portal/client/client.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AboutComponent,
    ServiiceComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
