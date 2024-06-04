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
import { CodeeduComponent } from './component/codeedu/codeedu.component';
import { CampaignComponent } from './component/campaign/campaign.component';
import { Campaign1Component } from './component/campaign1/campaign1.component';
import { Campaign2Component } from './component/campaign2/campaign2.component';
import { Campaign1to1Component } from './component/campaign1to1/campaign1to1.component';
import { Campaign2to1Component } from './component/campaign2to1/campaign2to1.component';
import { CourserPBPBComponent } from './component/courser-pbpb/courser-pbpb.component';
import { NewsComponent } from './component/news/news.component';
import { WomenComponent } from './component/women/women.component';
import { AppComponent } from './app.component';
import { MainhomeComponent } from './component/mainhome/mainhome.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminGallaryComponent } from './Admin/admin-gallary/admin-gallary.component';
import { AdminUsersComponent } from './Admin/admin-users/admin-users.component';
import { AdminAllParticipantComponent } from './Admin/admin-all-participant/admin-all-participant.component';
import { AddProjectsComponent } from './Admin/add-projects/add-projects.component';
import { UploadVideoComponent } from './Admin/upload-video/upload-video.component';
import { UploadNewsComponent } from './Admin/upload-news/upload-news.component';
import { ShowVideoComponent } from './Admin/show-video/show-video.component';
import { DisplayProjectComponent } from './Admin/display-project/display-project.component';

export const routes: Routes = [
    {
        path: "", component: MainhomeComponent, children: [
            { path: "", component: HomeComponent },
            { path: "aboutmain", component: AboutmainComponent },
            { path: "mainprogram", component: MainprogramComponent },
            { path: "maincompaign", component: MaincompaignComponent },
            { path: "mainresources", component: MainresourcesComponent },
            { path: "getinvolved", component: GetinvolvedComponent },
            { path: "page", component: PageComponent },
            { path: "contact", component: ContactComponent },
            { path: "program", component: MainprogramComponent },
            { path: "news", component: NewsComponent },


            { path: "vission", component: VisionComponent },
            { path: "mission", component: MissionComponent },
            { path: "value", component: ValuesComponent },
            { path: "approach", component: ApproachComponent },
            { path: "team", component: TeamComponent },
            { path: "advisory", component: AdvisoryBoardComponent },

            { path: "login", component: LoginComponent },
            { path: "registration", component: RegistrationComponent },

            { path: "codingonwheel", component: CodingonwheelComponent },
            { path: "codingeducation", component: CodingeducationComponent },
            { path: "womenempowerment", component: WomenempowermentComponent },

            { path: "codingpage", component: CodingpageComponent },
            { path: "codingedu", component: CodeeduComponent },

            { path: "campaign1", component: Campaign1Component },
            { path: "campaign2", component: Campaign2Component },
            { path: "campaign", component: CampaignComponent },

            { path: "campaign1of1", component: Campaign1to1Component },
            { path: "campaign2of2", component: Campaign2to1Component },

            { path: "courses1", component: CourserPBPBComponent },

            { path: "women", component: WomenComponent }]
    },
    {
        path: 'admin', component: AdminHomeComponent,
        children: [
            { path: 'adminhome', component: AdminHomeComponent },
            { path: 'gallary', component: AdminGallaryComponent },
            { path: 'adminusers', component: AdminUsersComponent },
            { path: 'adminallparticipant', component: AdminAllParticipantComponent },
            { path: 'addprojects', component: AddProjectsComponent },
            { path: 'uploadVideo', component: UploadVideoComponent },
            { path: 'uploadnews', component: UploadNewsComponent },
            { path: 'showvideo', component: ShowVideoComponent },
            { path: 'displayproject', component: DisplayProjectComponent },
            { path: 'logout', component: HomeComponent },
        ]
    },

];
