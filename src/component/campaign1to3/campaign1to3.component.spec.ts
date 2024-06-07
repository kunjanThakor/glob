import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign1to3Component } from './campaign1to3.component';

describe('Campaign1to3Component', () => {
  let component: Campaign1to3Component;
  let fixture: ComponentFixture<Campaign1to3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign1to3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign1to3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
