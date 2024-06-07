import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetinvolvedComponent } from './getinvolved.component';

describe('GetinvolvedComponent', () => {
  let component: GetinvolvedComponent;
  let fixture: ComponentFixture<GetinvolvedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetinvolvedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetinvolvedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
