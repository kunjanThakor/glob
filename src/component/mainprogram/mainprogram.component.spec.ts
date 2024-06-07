import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainprogramComponent } from './mainprogram.component';

describe('MainprogramComponent', () => {
  let component: MainprogramComponent;
  let fixture: ComponentFixture<MainprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainprogramComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
