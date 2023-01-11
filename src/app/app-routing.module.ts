import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { Page404Component } from './componentes/page404/page404.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { EdicionComponent } from './componentes/edicion/edicion.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
  {path:'profile', component: PerfilComponent},
  {path:'login', component: LoginComponent},
  {path:'edit', component: EdicionComponent},
  {path:'**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
