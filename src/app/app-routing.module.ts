import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridBackgroundComponent } from './shared/components/grid-background/grid-background.component';
import { RebootComponent } from './reboot/reboot.component';

const routes: Routes = [
  {
    path: 'secret',
    loadChildren: () => import('src/app/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'reboot',
    component: RebootComponent
  },

  {
    path: '',
    redirectTo: 'reboot',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
