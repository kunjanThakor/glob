import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiComponentComponent } from './mai-component.component';

describe('MaiComponentComponent', () => {
  let component: MaiComponentComponent;
  let fixture: ComponentFixture<MaiComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaiComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaiComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
