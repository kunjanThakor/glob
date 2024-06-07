import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutmainComponent } from './aboutmain.component';

describe('AboutmainComponent', () => {
  let component: AboutmainComponent;
  let fixture: ComponentFixture<AboutmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutmainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
