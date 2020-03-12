import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputComponent } from './output.component';

describe('OutputComponent', () => {
  let component: OutputComponent;
  let fixture: ComponentFixture<OutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // test the event emitter
  it('should spy on the event emitter',()=>{
    spyOn(component.greet,'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.greet.emit).toHaveBeenCalledWith('Hello');
  });

});
