import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { LoginComponent } from './componentes/login/login.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';
import { IndexComponent } from './componentes/index/index.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';

const routes: Routes = [
  {path:'', component: IndexComponent},
{path:'portfolio', component:PortfolioComponent},
{path:'login', component:LoginComponent},
{path:'', redirectTo: 'portfolio', pathMatch:'full' },
{path:'experiencia', component: ExperienciaComponent},
{path:'educacion', component: EducacionComponent},
{path:'skills', component: SkillsComponent},
{path:'proyectos', component: ProyectosComponent},
{path:'nueva experiencia', component:NewExperienciaComponent},
{path:'nueva educacion', component:NewEducacionComponent},
{path:'**', component: Pagina404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
