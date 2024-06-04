import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codeedu4Component } from './codeedu4.component';

describe('Codeedu4Component', () => {
  let component: Codeedu4Component;
  let fixture: ComponentFixture<Codeedu4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codeedu4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codeedu4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
