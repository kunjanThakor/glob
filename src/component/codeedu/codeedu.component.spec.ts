import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeeduComponent } from './codeedu.component';

describe('CodeeduComponent', () => {
  let component: CodeeduComponent;
  let fixture: ComponentFixture<CodeeduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeeduComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodeeduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
