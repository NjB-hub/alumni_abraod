import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvExpertiseItemComponent } from './cv-expertise-item.component';

describe('CvExpertiseItemComponent', () => {
  let component: CvExpertiseItemComponent;
  let fixture: ComponentFixture<CvExpertiseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvExpertiseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvExpertiseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
