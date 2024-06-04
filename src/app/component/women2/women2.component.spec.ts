import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Women2Component } from './women2.component';

describe('Women2Component', () => {
  let component: Women2Component;
  let fixture: ComponentFixture<Women2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Women2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Women2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
