import { TestBed } from '@angular/core/testing';

import { AstronetsService } from './astronets.service';
import { configureTestSuite } from 'ng-bullet';
import { IPersonnelModel } from '../models/personnel-model';
import { TestMock } from 'src/app/fake-storage/test-mock/test-mock';

describe('AstronetsService', () => {
  let astronetsService: AstronetsService;
  let mockDatas: TestMock;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [AstronetsService, TestMock],
    });
  });

  beforeEach(() => {
    astronetsService = TestBed.get(AstronetsService);
    mockDatas = TestBed.get(TestMock);
  });

  it('should be created', () => {
    expect(astronetsService).toBeTruthy();
  });

  it('should return list on calling getPersonnel', () => {
    astronetsService.getPersonnel().subscribe((res: IPersonnelModel[]) => {
      expect(res[0]).toEqual(mockDatas.personnal[0]);
    });
  });

});
