import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarsInfoComponent } from './wars-info.component';

describe('WarsInfoComponent', () => {
  let component: WarsInfoComponent;
  let fixture: ComponentFixture<WarsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
