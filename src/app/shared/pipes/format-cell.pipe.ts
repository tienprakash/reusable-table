import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { AppConstants } from 'src/app/app.constant';

@Pipe({
  name: 'formatCell',
})
export class FormatCellPipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe, private datePipe: DatePipe) { }

  transform(value: any, format: string): any {
    if (value === undefined) {
      return 'Not Available';
    }
    if (format === 'default') {
      if (Array.isArray(value)) {
        if (typeof value[0] !== 'object') {
          return value.join(', ');
        } else {
          return value.map(obj => {
            return obj.name;
          }).join(', ');
        }
      }
      if (typeof value === 'object') {
        return value.name;
      }
    }

    if (format === 'currency') {
      return this.currencyPipe.transform(value, AppConstants.currencyFormat, true);
    }

    if (format === 'date') {
      return this.datePipe.transform(value, AppConstants.dateFormat);
    }

    return value;
  }

}
