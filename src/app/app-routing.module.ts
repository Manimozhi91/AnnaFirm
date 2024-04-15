import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login } from './login';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientComponent } from './client/client.component';
import { RegisterclientComponent } from './registerclient/registerclient.component';
import { MeetingComponent } from './meeting/meeting.component';
import { ViewmeetingsComponent } from './viewmeetings/viewmeetings.component';
import { AddmeetingComponent } from './addmeeting/addmeeting.component';

const routes: Routes = [{
  path:"",component: LoginComponent
},
{path:"home", component: DashboardComponent,children:[{path:"client",component:ClientComponent}]
},
{path:"home", component: DashboardComponent,children:[{path:"register",component:RegisterclientComponent}]
},
{path:"home", component: DashboardComponent
},
{path:"login", component: LoginComponent
},
{path:"meetings", component: MeetingComponent
},
 {path:"meetings", component: MeetingComponent,children:[{path:"addMeeting",component:AddmeetingComponent}]
 },
 {path:"meetings", component: MeetingComponent,children:[{path:"viewMeetings",component:ViewmeetingsComponent}]
 },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
