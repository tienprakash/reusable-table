import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { configureTestSuite } from 'ng-bullet';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  configureTestSuite(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
      ],
    });
  });

  beforeEach(async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

});
