import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserGuideComponent } from './dashboard-user-guide.component';

describe('DashboardUserGuideComponent', () => {
  let component: DashboardUserGuideComponent;
  let fixture: ComponentFixture<DashboardUserGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardUserGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUserGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
