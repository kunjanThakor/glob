import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Campaign1Component } from '../campaign1/campaign1.component';
import { Campaign2Component } from '../campaign2/campaign2.component';
import { CampaignheaderComponent } from '../campaignheader/campaignheader.component';

@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [RouterLink,Campaign1Component,Campaign2Component,CampaignheaderComponent],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.css'
})
export class CampaignComponent {

}
