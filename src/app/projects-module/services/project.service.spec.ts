import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { configureTestSuite } from 'ng-bullet';
import { IProjectModel } from '../models/project-model';
import { TestMock } from '../../fake-storage/test-mock/test-mock';

describe('ProjectService', () => {
  let projectService: ProjectService;
  let mockDatas: TestMock;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [ProjectService, TestMock],
    });
  });

  beforeEach(() => {
    projectService = TestBed.get(ProjectService);
    mockDatas = TestBed.get(TestMock);
  });

  it('should be created', () => {
    expect(projectService).toBeTruthy();
  });

  it('should return list on calling getProjects', () => {
    projectService.getProjects().subscribe((res: IProjectModel[]) => {
      expect(res[0]).toEqual(mockDatas.projects[0]);
    });
  });

});
