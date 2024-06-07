import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign1to4Component } from './campaign1to4.component';

describe('Campaign1to4Component', () => {
  let component: Campaign1to4Component;
  let fixture: ComponentFixture<Campaign1to4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign1to4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign1to4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
