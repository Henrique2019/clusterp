
import { DownloadComponent } from './shared/download/download.component';
import { PdfComponent } from './componentes/pdf/pdf.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './componentes/add/add.component';
import { ListaComponent } from './componentes/lista/lista.component';


const routes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produtos', component: ListaComponent },
    { path: 'cadastrar', component: AddComponent },
    { path: 'obrigado', component: PdfComponent },
    { path: 'download', component: DownloadComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
