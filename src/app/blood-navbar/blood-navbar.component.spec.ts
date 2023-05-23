import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodNavbarComponent } from './blood-navbar.component';

describe('BloodNavbarComponent', () => {
  let component: BloodNavbarComponent;
  let fixture: ComponentFixture<BloodNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BloodNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
