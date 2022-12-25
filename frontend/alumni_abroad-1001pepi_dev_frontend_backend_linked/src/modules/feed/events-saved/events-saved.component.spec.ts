import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSavedComponent } from './events-saved.component';

describe('EventsSavedComponent', () => {
  let component: EventsSavedComponent;
  let fixture: ComponentFixture<EventsSavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSavedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
