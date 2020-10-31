import { AddComponent } from './dados/add/add.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './dados/lista/lista.component';

const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full'},
  { path: 'lista', component: ListaComponent },
  { path: 'add', component: AddComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
