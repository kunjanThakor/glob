import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign2Component } from './campaign2.component';

describe('Campaign2Component', () => {
  let component: Campaign2Component;
  let fixture: ComponentFixture<Campaign2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
