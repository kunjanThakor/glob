import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularcausesComponent } from './popularcauses.component';

describe('PopularcausesComponent', () => {
  let component: PopularcausesComponent;
  let fixture: ComponentFixture<PopularcausesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularcausesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularcausesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
