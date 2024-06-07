import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign2to3Component } from './campaign2to3.component';

describe('Campaign2to3Component', () => {
  let component: Campaign2to3Component;
  let fixture: ComponentFixture<Campaign2to3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign2to3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign2to3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
