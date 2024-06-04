import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseComponent } from './choose.component';

describe('ChooseComponent', () => {
  let component: ChooseComponent;
  let fixture: ComponentFixture<ChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
