import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './components/projects/projects.component';
import { SharedModule } from '../shared/shared.module';
import { ProjectRoutingModule } from './projects-routing.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProjectRoutingModule,
  ]
})
export class ProjectsModule { }
