import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rohit2Component } from './rohit2.component';

describe('Rohit2Component', () => {
  let component: Rohit2Component;
  let fixture: ComponentFixture<Rohit2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rohit2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rohit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
