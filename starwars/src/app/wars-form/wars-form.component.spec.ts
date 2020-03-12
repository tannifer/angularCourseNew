import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarsFormComponent } from './wars-form.component';

describe('WarsFormComponent', () => {
  let component: WarsFormComponent;
  let fixture: ComponentFixture<WarsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
