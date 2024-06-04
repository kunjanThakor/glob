import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Campaign1headComponent } from './campaign1head.component';

describe('Campaign1headComponent', () => {
  let component: Campaign1headComponent;
  let fixture: ComponentFixture<Campaign1headComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Campaign1headComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Campaign1headComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
