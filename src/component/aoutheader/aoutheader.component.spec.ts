import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AoutheaderComponent } from './aoutheader.component';

describe('AoutheaderComponent', () => {
  let component: AoutheaderComponent;
  let fixture: ComponentFixture<AoutheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AoutheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AoutheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
