import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammainComponent } from './teammain.component';

describe('TeammainComponent', () => {
  let component: TeammainComponent;
  let fixture: ComponentFixture<TeammainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeammainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeammainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
