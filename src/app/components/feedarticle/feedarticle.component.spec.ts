import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedarticleComponent } from './feedarticle.component';

describe('FeedarticleComponent', () => {
  let component: FeedarticleComponent;
  let fixture: ComponentFixture<FeedarticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedarticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedarticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
