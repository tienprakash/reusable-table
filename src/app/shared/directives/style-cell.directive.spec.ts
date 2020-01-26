import { StyleCellDirective } from './style-cell.directive';
import { configureTestSuite } from 'ng-bullet';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: '<p appStyleCell="1234"></p>',
})
class TestStyleComponent { }

describe('StyleCellDirective', () => {
  let component: TestStyleComponent;
  let fixture: ComponentFixture<TestStyleComponent>;
  let element: DebugElement;

  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [TestStyleComponent, StyleCellDirective],
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.query(By.css('p'));
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
    fixture.detectChanges();
    const ele: HTMLElement = element.nativeElement;
  });
});
