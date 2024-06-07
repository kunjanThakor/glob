import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourserPBPBComponent } from './courser-pbpb.component';

describe('CourserPBPBComponent', () => {
  let component: CourserPBPBComponent;
  let fixture: ComponentFixture<CourserPBPBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourserPBPBComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourserPBPBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
