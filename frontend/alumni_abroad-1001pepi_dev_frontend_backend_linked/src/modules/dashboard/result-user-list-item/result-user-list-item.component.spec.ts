import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultUserListItemComponent } from './result-user-list-item.component';

describe('ResultUserListItemComponent', () => {
  let component: ResultUserListItemComponent;
  let fixture: ComponentFixture<ResultUserListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultUserListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultUserListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
