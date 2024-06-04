import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign2to1Component } from './campaign2to1.component';

describe('Campaign2to1Component', () => {
  let component: Campaign2to1Component;
  let fixture: ComponentFixture<Campaign2to1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign2to1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign2to1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
