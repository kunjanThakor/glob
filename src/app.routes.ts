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
import { ParticipentMainComponent } from './component/participent-main/participent-main.component';
// import { AdminNavComponent } from './component/admin-nav/admin-nav.component';
import { MaiComponentComponent } from './component/mai-component/mai-component.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { AdminGallaryComponent } from './Admin/admin-gallary/admin-gallary.component';
import { AdminUsersComponent } from './Admin/admin-users/admin-users.component';
import { AdminAllParticipantComponent } from './Admin/admin-all-participant/admin-all-participant.component';
import { AddProjectsComponent } from './Admin/add-projects/add-projects.component';
import { DisplayProjectComponent } from './Admin/display-project/display-project.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { UploadVideoComponent } from './Admin/upload-video/upload-video.component';
import { ShowVideoComponent } from './Admin/show-video/show-video.component';
import { UploadNewsComponent } from './Admin/upload-news/upload-news.component';
import { ShowNewsComponent } from './component/show-news/show-news.component';
// import { AdminGallaryComponent } from './component/admin-gallary/admin-gallary.component';
// import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';

export const routes: Routes = [
    // { path: "", component: HomeComponent },
    // { path: "aboutmain", component: AboutmainComponent },
    // { path: "mainprogram", component: MainprogramComponent },
    // { path: "maincompaign", component: MaincompaignComponent },
    // { path: "mainresources", component: MainresourcesComponent },
    // { path: "getinvolved", component: GetinvolvedComponent },
    // { path: "page", component: PageComponent },
    // { path: "contact", component: ContactComponent },
    // { path: "program", component: MainprogramComponent },

    // { path: "vission", component: VisionComponent },
    // { path: "mission", component: MissionComponent },
    // { path: "value", component: ValuesComponent },
    // { path: "approach", component: ApproachComponent },
    // { path: "team", component: TeamComponent },
    // { path: "advisory", component: AdvisoryBoardComponent },

    // { path: "login", component: LoginComponent },
    // { path: "registration", component: RegistrationComponent },

    // { path: "codingonwheel", component: CodingonwheelComponent },
    // { path: "codingeducation", component: CodingeducationComponent },
    // { path: "womenempowerment", component: WomenempowermentComponent },

    // { path: "codingpage", component: CodingpageComponent },
    {
        path: "", component: MaiComponentComponent,
        children: [
            { path: "", component: HomeComponent },
            // { path: "donation", component: DonateComponent },
            { path: "home", component: HomeComponent },
            { path: "about", component: AboutmainComponent },
            { path: "contact", component: ContactComponent },
            { path: "reset", component: ResetPasswordComponent },
            { path: 'shownews', component: ShowNewsComponent },
            // { path: "blog", component: BlogComponent },
            // { path: "single-blog", component: SingleBlogComponent },
            // // { path: "page-elemet", component: ElementPageComponent },
            // { path: "page-cause", component: CausePageComponent },
            // { path: "contact", component: ContactComponent },
            // { path: "volunteer", component: VolunteersComponent },
            // { path: "reason", component: AddreasonsComponent },
            // { path: "user", component: UserComponent },
            { path: "login", component: LoginComponent },
            { path: "registration", component: RegistrationComponent },

        ]
    },

    {
        path: 'participentMain', component: ParticipentMainComponent,
        children: [
            { path: 'dashboard', component: LoginComponent },
            // { path: 'newuser', component: NewuserComponent },
        ]
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
