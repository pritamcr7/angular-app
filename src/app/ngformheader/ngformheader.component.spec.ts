import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgformheaderComponent } from './ngformheader.component';

describe('NgformheaderComponent', () => {
  let component: NgformheaderComponent;
  let fixture: ComponentFixture<NgformheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgformheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgformheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
