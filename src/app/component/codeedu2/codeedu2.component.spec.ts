import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codeedu2Component } from './codeedu2.component';

describe('Codeedu2Component', () => {
  let component: Codeedu2Component;
  let fixture: ComponentFixture<Codeedu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codeedu2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codeedu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
