import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentPruebaComponent } from './component-prueba/component-prueba.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { AppRoutingModule } from './app-routing.module.ts/app-routing.module';
import { FormsModule } from '@angular/forms';
import { SrcAppComponentesComponent } from './src-app-componentes/src-app-componentes.component';
import { Pagna404Component } from './componentes/pagna404/pagna404.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentPruebaComponent,
    PersonasComponent,
    PersonaComponent,
    SrcAppComponentesComponent,
    Pagna404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
