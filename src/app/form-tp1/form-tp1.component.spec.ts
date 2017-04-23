import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTp1Component } from './form-tp1.component';

describe('FormTp1Component', () => {
  let component: FormTp1Component;
  let fixture: ComponentFixture<FormTp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
