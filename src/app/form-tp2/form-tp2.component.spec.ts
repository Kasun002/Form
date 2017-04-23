import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTp2Component } from './form-tp2.component';

describe('FormTp2Component', () => {
  let component: FormTp2Component;
  let fixture: ComponentFixture<FormTp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
