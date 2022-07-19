import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUserListComponent } from './result-user-list.component';

describe('ResultUserListComponent', () => {
  let component: ResultUserListComponent;
  let fixture: ComponentFixture<ResultUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
