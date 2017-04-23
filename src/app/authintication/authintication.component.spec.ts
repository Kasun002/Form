import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthinticationComponent } from './authintication.component';

describe('AuthinticationComponent', () => {
  let component: AuthinticationComponent;
  let fixture: ComponentFixture<AuthinticationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthinticationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthinticationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
