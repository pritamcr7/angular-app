import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformfooterComponent } from './ngformfooter.component';

describe('NgformfooterComponent', () => {
  let component: NgformfooterComponent;
  let fixture: ComponentFixture<NgformfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgformfooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgformfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
