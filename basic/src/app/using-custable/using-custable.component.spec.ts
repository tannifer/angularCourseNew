import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingCustableComponent } from './using-custable.component';

describe('UsingCustableComponent', () => {
  let component: UsingCustableComponent;
  let fixture: ComponentFixture<UsingCustableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingCustableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingCustableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
