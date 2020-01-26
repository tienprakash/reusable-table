import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PrimeNGModule } from './primeng';
import { FormatCellPipe } from './pipes/format-cell.pipe';
import { StyleCellDirective } from './directives/style-cell.directive';
import { AppConstants } from '../app.constant';

@NgModule({
  declarations: [TableComponent, FormatCellPipe, StyleCellDirective],
  imports: [
    CommonModule,
    PrimeNGModule,
  ],
  exports: [TableComponent],
  providers: [CurrencyPipe, DatePipe],
})
export class SharedModule { }
