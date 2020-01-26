import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { configureTestSuite } from 'ng-bullet';
import { SharedModule } from '../../../shared/shared.module';
import { UserService } from '../../services/user.service';
import { TestMock } from '../../test-mock/test-mock';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userService: UserService;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [SharedModule],
      providers: [{ provide: UserService, useClass: TestMock }]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getProjects method when onInit is triggered', () => {
    const spyGetProjects = spyOn(userService, 'getProjects').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(spyGetProjects).toHaveBeenCalled();
  });

  it('should call getPersonnel method when onInit is triggerd', () => {
    const spyGetPersonnel = spyOn(userService, 'getPersonnel').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    expect(spyGetPersonnel).toHaveBeenCalled();
  });

});
