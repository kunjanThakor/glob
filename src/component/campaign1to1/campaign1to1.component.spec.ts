import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign1to1Component } from './campaign1to1.component';

describe('Campaign1to1Component', () => {
  let component: Campaign1to1Component;
  let fixture: ComponentFixture<Campaign1to1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign1to1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign1to1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
