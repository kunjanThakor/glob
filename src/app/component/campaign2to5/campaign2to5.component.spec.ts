import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign2to5Component } from './campaign2to5.component';

describe('Campaign2to5Component', () => {
  let component: Campaign2to5Component;
  let fixture: ComponentFixture<Campaign2to5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign2to5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign2to5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
