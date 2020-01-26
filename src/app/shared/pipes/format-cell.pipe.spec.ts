import { FormatCellPipe } from './format-cell.pipe';
import { configureTestSuite } from 'ng-bullet';
import { TestBed } from '@angular/core/testing';
import { CurrencyPipe } from '@angular/common';

describe('FormatCellPipe', () => {
  let pipe: FormatCellPipe;
  let currencyPipe: CurrencyPipe;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      providers: [CurrencyPipe],
    });
  });

  beforeEach(() => {
    pipe = new FormatCellPipe(null);
    currencyPipe = TestBed.get(CurrencyPipe);
  });

  it(`should return 'Not Available'on call tranform`, () => {
    expect(pipe.transform(undefined, null)).toBe('Not Available');
  });

  it(`should return 'Mercury' on call tranform`, () => {
    expect(pipe.transform('Mercury', 'default')).toBe('Mercury');
  });

  it(`should return 'MR-3, Apollo 14' on call tranform`, () => {
    expect(pipe.transform(['MR-3', 'Apollo 14'], 'default')).toBe('MR-3, Apollo 14');
  });

  it(`should return 'MR-3, Apollo 14' on call tranform`, () => {
    expect(pipe.transform([{ name: 'MR-3' }, { name: 'Apollo 14' }], 'default')).toBe('MR-3, Apollo 14');
  });

  it(`should return test value on call tranform`, () => {
    expect(pipe.transform({ name: 'test' }, 'default')).toBe('test');
  });

});
