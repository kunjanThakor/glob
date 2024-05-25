import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingonwheelComponent } from './codingonwheel.component';

describe('CodingonwheelComponent', () => {
  let component: CodingonwheelComponent;
  let fixture: ComponentFixture<CodingonwheelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingonwheelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodingonwheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
