import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingpageheaderComponent } from './codingpageheader.component';

describe('CodingpageheaderComponent', () => {
  let component: CodingpageheaderComponent;
  let fixture: ComponentFixture<CodingpageheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingpageheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CodingpageheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
