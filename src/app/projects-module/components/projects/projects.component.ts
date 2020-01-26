import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../services/project.service';
import { IProjectModel } from '../../models/project-model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  public projects: IProjectModel[];

  public customSettings = [
    {
      primaryKey: 'cost',
      format: 'currency',
      alternativeKeys: ['total_cost'],
    },
    {
      primaryKey: 'first_flight',
      format: 'date',
    }
  ];

  public projectsSubscription: Subscription;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectsSubscription = this.projectService.getProjects().subscribe((res: IProjectModel[]) => {
      this.projects = res;
    });
  }

  ngOnDestroy() {
    this.projectsSubscription.unsubscribe();
  }

}
