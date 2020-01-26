import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstronetsComponent } from './components/astronets/astronets.component';
import { SharedModule } from '../shared/shared.module';
import { AstronetsRoutingModule } from './astronets-routing.module';

@NgModule({
  declarations: [AstronetsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AstronetsRoutingModule,
  ]
})
export class AstronetsModule { }
