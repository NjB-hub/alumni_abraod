import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationListItemComponent } from './education-list-item.component';

describe('EducationListItemComponent', () => {
  let component: EducationListItemComponent;
  let fixture: ComponentFixture<EducationListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
