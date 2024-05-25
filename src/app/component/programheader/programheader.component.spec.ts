import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramheaderComponent } from './programheader.component';

describe('ProgramheaderComponent', () => {
  let component: ProgramheaderComponent;
  let fixture: ComponentFixture<ProgramheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProgramheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
