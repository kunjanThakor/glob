import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Women1Component } from './women1.component';

describe('Women1Component', () => {
  let component: Women1Component;
  let fixture: ComponentFixture<Women1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Women1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Women1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
