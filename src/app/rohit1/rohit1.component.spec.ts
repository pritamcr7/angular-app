import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rohit1Component } from './rohit1.component';

describe('Rohit1Component', () => {
  let component: Rohit1Component;
  let fixture: ComponentFixture<Rohit1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rohit1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rohit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
