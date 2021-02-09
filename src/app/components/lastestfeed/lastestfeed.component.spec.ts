import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestfeedComponent } from './lastestfeed.component';

describe('LastestfeedComponent', () => {
  let component: LastestfeedComponent;
  let fixture: ComponentFixture<LastestfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastestfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
