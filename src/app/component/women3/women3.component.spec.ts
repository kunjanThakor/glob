import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Women3Component } from './women3.component';

describe('Women3Component', () => {
  let component: Women3Component;
  let fixture: ComponentFixture<Women3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Women3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Women3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
