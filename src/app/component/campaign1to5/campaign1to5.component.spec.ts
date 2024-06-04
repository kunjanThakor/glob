import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign1to5Component } from './campaign1to5.component';

describe('Campaign1to5Component', () => {
  let component: Campaign1to5Component;
  let fixture: ComponentFixture<Campaign1to5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign1to5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign1to5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
