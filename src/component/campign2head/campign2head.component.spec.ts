import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campign2headComponent } from './campign2head.component';

describe('Campign2headComponent', () => {
  let component: Campign2headComponent;
  let fixture: ComponentFixture<Campign2headComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campign2headComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campign2headComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
