import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { configureTestSuite } from 'ng-bullet';
import { TestMock } from '../test-mock/test-mock';
import { IProjectModel } from '../models/project-model';
import { IPersonnelModel } from '../models/personnel-model';

describe('UserService', () => {
  let userService: UserService;
  let mockDatas: TestMock;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [UserService, TestMock],
    });
  });

  beforeEach(() => {
    userService = TestBed.get(UserService);
    mockDatas = TestBed.get(TestMock);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return list on calling getProjects', () => {
    userService.getProjects().subscribe((res: IProjectModel[]) => {
      expect(res[0]).toEqual(mockDatas.projects[0]);
    });
  });

  it('should return list on calling getPersonnel', () => {
    userService.getPersonnel().subscribe((res: IPersonnelModel[]) => {
      expect(res[0]).toEqual(mockDatas.personnal[0]);
    });
  });

});
