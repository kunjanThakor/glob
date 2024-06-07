import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGallaryComponent } from './admin-gallary.component';

describe('AdminGallaryComponent', () => {
  let component: AdminGallaryComponent;
  let fixture: ComponentFixture<AdminGallaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminGallaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminGallaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
