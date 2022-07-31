import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericStatCardComponent } from './generic-stat-card.component';

describe('GenericStatCardComponent', () => {
  let component: GenericStatCardComponent;
  let fixture: ComponentFixture<GenericStatCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericStatCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericStatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
