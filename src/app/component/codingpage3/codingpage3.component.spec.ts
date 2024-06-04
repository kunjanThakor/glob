import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codingpage3Component } from './codingpage3.component';

describe('Codingpage3Component', () => {
  let component: Codingpage3Component;
  let fixture: ComponentFixture<Codingpage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codingpage3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codingpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
