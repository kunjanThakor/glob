import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewGallaryComponent } from './view-gallary.component';

describe('ViewGallaryComponent', () => {
  let component: ViewGallaryComponent;
  let fixture: ComponentFixture<ViewGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewGallaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
