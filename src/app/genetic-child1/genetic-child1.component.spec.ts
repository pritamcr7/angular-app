import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneticChild1Component } from './genetic-child1.component';

describe('GeneticChild1Component', () => {
  let component: GeneticChild1Component;
  let fixture: ComponentFixture<GeneticChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneticChild1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneticChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
