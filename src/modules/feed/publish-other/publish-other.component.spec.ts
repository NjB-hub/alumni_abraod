import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishOtherComponent } from './publish-other.component';

describe('PublishOtherComponent', () => {
  let component: PublishOtherComponent;
  let fixture: ComponentFixture<PublishOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
