import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign2to2Component } from './campaign2to2.component';

describe('Campaign2to2Component', () => {
  let component: Campaign2to2Component;
  let fixture: ComponentFixture<Campaign2to2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign2to2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign2to2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
