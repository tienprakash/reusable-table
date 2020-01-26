import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, OnChanges } from '@angular/core';
import { ColumnMap } from '../layout.model';
import { SortEvent } from 'primeng/api/sortevent';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnChanges {
  @Input() records: any;
  @Input() settings: any[];

  cols: any[] = [];
  columnMaps: ColumnMap[];

  constructor() { }

  ngOnChanges() {
    if (this.settings) {
      const record = Object.keys(this.records[0]);
      for (const col of record) {
        const check = this.settings.filter((set) => set.primaryKey === col);
        this.cols.push(check.length > 0 ? check[0] : { primaryKey: col });
      }
      this.columnMaps = this.cols
        .map(col => new ColumnMap(col));
    } else {
      this.columnMaps = Object.keys(this.records[0])
        .map(key => {
          return new ColumnMap({ primaryKey: key });
        });
    }
  }

  customSort(event: SortEvent) {
    const searchField = this.columnMaps.filter((column) => column.primaryKey === event.field);
    const format = searchField[0].format;
    if (format === 'date') {
      event.data.sort((data1, data2) => {
        const value1 = new Date(data1[event.field]);
        const value2 = new Date(data2[event.field]);
        if (event.order === 1) {
          if (value1 < value2) {
            return -1;
          }
        } else {
          if (value1 > value2) {
            return -1;
          }
        }
      });
    } else if (format === 'currency') {
      event.data.sort((data1, data2) => {
        const value1 = data1[event.field] || 0;
        const value2 = data2[event.field] || 0;
        if (event.order === 1) {
          if (value1 < value2) {
            return -1;
          }
        } else {
          if (value1 > value2) {
            return -1;
          }
        }
      });
    } else {
      event.data.sort((data1, data2) => {
        const value1 = data1[event.field];
        const value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null) {
          result = -1;
        } else if (value1 != null && value2 == null) {
          result = 1;
        } else if (value1 == null && value2 == null) {
          result = 0;
        } else if (typeof value1 === 'string' && typeof value2 === 'string') {
          result = value1.localeCompare(value2);
        } else {
          result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
        }
        return (event.order * result);
      });
    }
  }

}
