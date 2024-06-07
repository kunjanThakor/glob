import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codingpage2Component } from './codingpage2.component';

describe('Codingpage2Component', () => {
  let component: Codingpage2Component;
  let fixture: ComponentFixture<Codingpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codingpage2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codingpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
