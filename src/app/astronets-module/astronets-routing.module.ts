import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AstronetsComponent } from './components/astronets/astronets.component';

const routes: Routes = [
  {
    path: '', component: AstronetsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AstronetsRoutingModule { }
