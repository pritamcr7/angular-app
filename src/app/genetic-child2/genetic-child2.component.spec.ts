import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticChild2Component } from './genetic-child2.component';

describe('GeneticChild2Component', () => {
  let component: GeneticChild2Component;
  let fixture: ComponentFixture<GeneticChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneticChild2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
