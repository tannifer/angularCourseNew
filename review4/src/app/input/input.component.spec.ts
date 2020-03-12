import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Check the input value renders correctly
  it('should correctly render the @Input value Empty',()=>{
    const h3Element: HTMLElement = fixture.nativeElement;
    const h3 = h3Element.querySelector('h3');
    expect(h3.innerHTML).toEqual('');
  });

  // new set the @Input to be a string value.

  it('should correctly render the @Input value (with value)',()=>{
    component.message ='greetings';
    fixture.detectChanges();
    const h3Element: HTMLElement = fixture.nativeElement;
    const h3 = h3Element.querySelector('h3');
    expect(h3.innerHTML).toEqual('greetings');
  });

});
