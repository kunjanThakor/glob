import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Women4Component } from './women4.component';

describe('Women4Component', () => {
  let component: Women4Component;
  let fixture: ComponentFixture<Women4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Women4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Women4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
