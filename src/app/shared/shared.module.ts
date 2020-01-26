import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { PrimeNGModule } from './primeng';
import { FormatCellPipe } from './pipes/format-cell.pipe';
import { StyleCellDirective } from './directives/style-cell.directive';

@NgModule({
  declarations: [TableComponent, FormatCellPipe, StyleCellDirective],
  imports: [
    CommonModule,
    PrimeNGModule,
  ],
  exports: [TableComponent],
  providers: [CurrencyPipe],
})
export class SharedModule { }
