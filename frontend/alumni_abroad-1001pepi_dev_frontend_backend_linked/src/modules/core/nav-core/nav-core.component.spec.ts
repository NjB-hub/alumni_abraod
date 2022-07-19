import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCoreComponent } from './nav-core.component';

describe('NavCoreComponent', () => {
  let component: NavCoreComponent;
  let fixture: ComponentFixture<NavCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
