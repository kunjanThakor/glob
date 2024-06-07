import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeeduheadComponent } from './codeeduhead.component';

describe('CodeeduheadComponent', () => {
  let component: CodeeduheadComponent;
  let fixture: ComponentFixture<CodeeduheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeeduheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeeduheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
