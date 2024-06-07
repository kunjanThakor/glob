import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codingpage1Component } from './codingpage1.component';

describe('Codingpage1Component', () => {
  let component: Codingpage1Component;
  let fixture: ComponentFixture<Codingpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codingpage1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codingpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
