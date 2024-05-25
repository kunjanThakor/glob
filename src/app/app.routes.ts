import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { AboutmainComponent } from './component/aboutmain/aboutmain.component';
import { MainprogramComponent } from './component/mainprogram/mainprogram.component';
import { MaincompaignComponent } from './component/maincompaign/maincompaign.component';
import { MainresourcesComponent } from './component/mainresources/mainresources.component';
import { GetinvolvedComponent } from './component/getinvolved/getinvolved.component';
import { PageComponent } from './component/page/page.component';
import { WhoAreWeComponent } from './component/who-are-we/who-are-we.component';
import { VisionComponent } from './component/vision/vision.component';
import { PathLocationStrategy } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { MissionComponent } from './component/mission/mission.component';
import { ValuesComponent } from './component/values/values.component';
import { ApproachComponent } from './component/approach/approach.component';
import { TeamComponent } from './component/team/team.component';
import { AdvisoryBoardComponent } from './component/advisory-board/advisory-board.component';
import { CodingonwheelComponent } from './component/codingonwheel/codingonwheel.component';
import { CodingeducationComponent } from './component/codingeducation/codingeducation.component';
import { WomenempowermentComponent } from './component/womenempowerment/womenempowerment.component';
import { CodingpageComponent } from './component/codingpage/codingpage.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "aboutmain",component: AboutmainComponent},
    {path: "mainprogram",component: MainprogramComponent},
    {path: "maincompaign",component: MaincompaignComponent},
    {path: "mainresources",component: MainresourcesComponent},
    {path: "getinvolved",component: GetinvolvedComponent},
    {path: "page",component: PageComponent},
    {path: "contact",component: ContactComponent},
    {path:"program",component:MainprogramComponent},

    {path: "vission",component:VisionComponent},
    {path:"mission",component:MissionComponent},
    {path:"value",component:ValuesComponent},
    {path:"approach",component:ApproachComponent},
    {path:"team",component:TeamComponent},
    {path:"advisory",component:AdvisoryBoardComponent},

    {path:"login",component:LoginComponent},
    {path:"registration",component:RegistrationComponent},

    {path:"codingonwheel",component:CodingonwheelComponent},
    {path:"codingeducation",component:CodingeducationComponent},
    {path:"womenempowerment",component:WomenempowermentComponent},
    
    {path:"codingpage",component:CodingpageComponent},

];
