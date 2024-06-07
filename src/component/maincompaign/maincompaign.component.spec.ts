import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincompaignComponent } from './maincompaign.component';

describe('MaincompaignComponent', () => {
  let component: MaincompaignComponent;
  let fixture: ComponentFixture<MaincompaignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaincompaignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaincompaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
