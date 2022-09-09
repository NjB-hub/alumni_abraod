import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BugsReportedComponent } from './bugs-reported.component';

describe('BugsReportedComponent', () => {
  let component: BugsReportedComponent;
  let fixture: ComponentFixture<BugsReportedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BugsReportedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BugsReportedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
