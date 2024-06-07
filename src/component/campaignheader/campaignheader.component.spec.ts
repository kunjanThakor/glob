import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignheaderComponent } from './campaignheader.component';

describe('CampaignheaderComponent', () => {
  let component: CampaignheaderComponent;
  let fixture: ComponentFixture<CampaignheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CampaignheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
