import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codeedu3Component } from './codeedu3.component';

describe('Codeedu3Component', () => {
  let component: Codeedu3Component;
  let fixture: ComponentFixture<Codeedu3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codeedu3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codeedu3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
