import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AstronetsService } from '../../services/astronets.service';
import { IPersonnelModel } from '../../models/personnel-model';

@Component({
  selector: 'app-astronets',
  templateUrl: './astronets.component.html',
  styleUrls: ['./astronets.component.scss']
})
export class AstronetsComponent implements OnInit, OnDestroy {

  public personnelData: IPersonnelModel[];

  public personnelSubscription: Subscription;

  constructor(private astronetsService: AstronetsService) { }

  ngOnInit() {
    this.personnelSubscription = this.astronetsService.getPersonnel().subscribe((res: IPersonnelModel[]) => {
      this.personnelData = res;
    });
  }

  ngOnDestroy() {
    this.personnelSubscription.unsubscribe();
  }

}
