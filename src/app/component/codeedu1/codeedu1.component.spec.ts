import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codeedu1Component } from './codeedu1.component';

describe('Codeedu1Component', () => {
  let component: Codeedu1Component;
  let fixture: ComponentFixture<Codeedu1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codeedu1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codeedu1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
