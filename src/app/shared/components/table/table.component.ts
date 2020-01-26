import { Component, OnInit, ViewEncapsulation, Input, OnDestroy, OnChanges } from '@angular/core';
import { ColumnMap } from '../layout.model';

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

}

/*
  this.cols = Object.keys(this.records[0]).map((rec: string) => {
    let name = ''
    const rec_name = rec.split('_');
    for (let rec of rec_name) {
      name += rec[0].toUpperCase() + rec.slice(1) + ' ';
    }
    const sett = this.settings.filter((setting) => {
      return setting.primaryKey === rec;
    });
    return {
      primaryKey: rec,
      header: name,
      format: sett.length > 0 ? sett[0].format : 'default',
      alternativeKeys: sett.length > 0 ? sett[0].alternativeKeys : undefined,
    };
  });

*/

/*
  access(data: any, obj: any) {
    if (data[obj.primaryKey] || !obj.alternativeKeys) {
      return obj.primaryKey;
    }

    if (obj.alternativeKeys.length > 0) {
      for (let key of obj.alternativeKeys) {
        if (data[key]) {
          return key;
        }
      }
    }
    return obj.primaryKey;
  }
*/

/*
  for (let record of this.records) {
    const recProperties = Object.keys(record);
    for (let key of recProperties) {
      if (keys[key] === undefined) {
        keys[key] = key;
      }
    }
  }
*/
