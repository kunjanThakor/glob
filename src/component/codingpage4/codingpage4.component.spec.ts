import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Codingpage4Component } from './codingpage4.component';

describe('Codingpage4Component', () => {
  let component: Codingpage4Component;
  let fixture: ComponentFixture<Codingpage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Codingpage4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Codingpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
