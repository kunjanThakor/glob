import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenheadComponent } from './womenhead.component';

describe('WomenheadComponent', () => {
  let component: WomenheadComponent;
  let fixture: ComponentFixture<WomenheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
