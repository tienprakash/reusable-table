import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  providers: [UserService],
})
export class UserModule { }
