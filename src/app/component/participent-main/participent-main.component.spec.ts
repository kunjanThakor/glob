import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipentMainComponent } from './participent-main.component';

describe('ParticipentMainComponent', () => {
  let component: ParticipentMainComponent;
  let fixture: ComponentFixture<ParticipentMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipentMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipentMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
