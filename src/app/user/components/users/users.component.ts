import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { IProjectModel } from '../../models/project-model';
import { IPersonnelModel } from '../../models/personnel-model';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit, OnDestroy {

  public projects: IProjectModel[];
  public personnelData: IPersonnelModel[];

  public customSettings = [
    {
      primaryKey: 'cost',
      format: 'currency',
      alternativeKeys: ['total_cost'],
    },
    {
      primaryKey: 'first_flight',
      format: 'default',
      alternativeKeys: ['launch'],
    }
  ];

  public projectsSubscription: Subscription;
  public personnelSubscription: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.projectsSubscription = this.userService.getProjects().subscribe((res: IProjectModel[]) => {
      this.projects = res;
    });
    this.personnelSubscription = this.userService.getPersonnel().subscribe((res: IPersonnelModel[]) => {
      this.personnelData = res;
    });
  }

  ngOnDestroy() {
    this.personnelSubscription.unsubscribe();
    this.projectsSubscription.unsubscribe();
  }

}
