import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { configureTestSuite } from 'ng-bullet';
import { PrimeNGModule } from '../../primeng';
import { FormatCellPipe } from '../../pipes/format-cell.pipe';
import { StyleCellDirective } from '../../directives/style-cell.directive';
import { CurrencyPipe } from '@angular/common';
import { TestMock } from '../../../user/test-mock/test-mock';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let mockData: TestMock;
  const settings = [
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

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, FormatCellPipe, StyleCellDirective],
      imports: [PrimeNGModule],
      providers: [
        CurrencyPipe, TestMock,
      ],
    });
  });

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    mockData = TestBed.get(TestMock);
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should', () => {
    component.settings = null;
    component.records = mockData.projects;
    component.ngOnChanges();
  });

  it('should sdf', () => {
    component.settings = settings;
    component.records = mockData.projects;
    component.ngOnChanges();
  });

});
