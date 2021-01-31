import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainarticleComponent } from './mainarticle.component';

describe('MainarticleComponent', () => {
  let component: MainarticleComponent;
  let fixture: ComponentFixture<MainarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
