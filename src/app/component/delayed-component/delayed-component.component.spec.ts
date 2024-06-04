import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayedComponentComponent } from './delayed-component.component';

describe('DelayedComponentComponent', () => {
  let component: DelayedComponentComponent;
  let fixture: ComponentFixture<DelayedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayedComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DelayedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
