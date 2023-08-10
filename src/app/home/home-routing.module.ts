import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { 
        path: '', 
        redirectTo: 'presentation', 
        pathMatch: 'full' 
      },
      {
        path: 'presentation',
        component: PresentationComponent,
      },
      {
        path: 'skills',
        component: SkillsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
