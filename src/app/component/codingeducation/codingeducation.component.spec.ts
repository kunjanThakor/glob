import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingeducationComponent } from './codingeducation.component';

describe('CodingeducationComponent', () => {
  let component: CodingeducationComponent;
  let fixture: ComponentFixture<CodingeducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingeducationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodingeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
