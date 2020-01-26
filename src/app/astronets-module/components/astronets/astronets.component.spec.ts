import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AstronetsComponent } from './astronets.component';

describe('AstronetsComponent', () => {
  let component: AstronetsComponent;
  let fixture: ComponentFixture<AstronetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AstronetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AstronetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
