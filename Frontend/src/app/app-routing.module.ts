import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { FollowingComponent } from './containers/following/following.component';
import { EditProfileComponent } from './containers/edit-profile/edit-profile.component';
import { LandingComponent } from './containers/landing/landing.component';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomeComponent,
    canActivate: [AuthGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'edit-profile', component: EditProfileComponent},
  {path: 'user/:lastName', component: FollowingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
