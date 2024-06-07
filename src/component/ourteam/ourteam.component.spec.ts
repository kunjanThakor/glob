import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurteamComponent } from './ourteam.component';

describe('OurteamComponent', () => {
  let component: OurteamComponent;
  let fixture: ComponentFixture<OurteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurteamComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
