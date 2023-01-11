import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ExperienciasComponent } from './componentes/experiencias/experiencias.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { LoginComponent } from './componentes/login/login.component';
import { EdicionComponent } from './componentes/edicion/edicion.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './componentes/index/index.component';
import { Page404Component } from './componentes/page404/page404.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    ExperienciasComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectoComponent,
    LoginComponent,
    EdicionComponent,
    IndexComponent,
    Page404Component,
    NavbarComponent,
    FooterComponent,
    AboutmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
