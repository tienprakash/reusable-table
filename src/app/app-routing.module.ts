import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
const routes: Routes = [
  /*   {
      path: '', children: [
        { path: '', loadChildren: () => import('./user/user.module').then((u) => u.UserModule) },
      ],
    }, */
  {
    path: 'projects', loadChildren: () => import('./projects-module/projects.module').then((p) => p.ProjectsModule),
  },
  {
    path: 'astronets', loadChildren: () => import('./astronets-module/astronets.module').then((a) => a.AstronetsModule),
  },
  {
    path: '',
    redirectTo: '/projects',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
