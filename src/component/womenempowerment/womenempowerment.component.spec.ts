import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenempowermentComponent } from './womenempowerment.component';

describe('WomenempowermentComponent', () => {
  let component: WomenempowermentComponent;
  let fixture: ComponentFixture<WomenempowermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomenempowermentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WomenempowermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
