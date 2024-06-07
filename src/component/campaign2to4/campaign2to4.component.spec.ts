import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign2to4Component } from './campaign2to4.component';

describe('Campaign2to4Component', () => {
  let component: Campaign2to4Component;
  let fixture: ComponentFixture<Campaign2to4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign2to4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign2to4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
