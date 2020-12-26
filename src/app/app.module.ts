import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './componentes/add/add.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { InputMatComponent } from './shared/input-mat/input-mat.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListaComponent,
    InputMatComponent,

  ],
  imports: [
 BrowserModule,
 HttpClientModule,
 FormsModule,
 AppRoutingModule,
 NgbModule,
 BrowserAnimationsModule,
 MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
