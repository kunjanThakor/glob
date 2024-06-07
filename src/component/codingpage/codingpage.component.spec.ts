import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingpageComponent } from './codingpage.component';

describe('CodingpageComponent', () => {
  let component: CodingpageComponent;
  let fixture: ComponentFixture<CodingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
