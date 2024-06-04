import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign1to2Component } from './campaign1to2.component';

describe('Campaign1to2Component', () => {
  let component: Campaign1to2Component;
  let fixture: ComponentFixture<Campaign1to2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign1to2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign1to2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
