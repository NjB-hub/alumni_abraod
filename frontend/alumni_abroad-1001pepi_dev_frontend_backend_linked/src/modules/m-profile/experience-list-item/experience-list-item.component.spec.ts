import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceListItemComponent } from './experience-list-item.component';

describe('ExperienceListItemComponent', () => {
  let component: ExperienceListItemComponent;
  let fixture: ComponentFixture<ExperienceListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
