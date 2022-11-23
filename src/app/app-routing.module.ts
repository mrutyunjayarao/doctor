import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FaqComponent } from './components/faq/faq.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { QAndAComponent } from './components/q-and-a/q-and-a.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

const routes: Routes = [
  {path:'dashboard',component: DashboardComponent},
  {path:'appointments',component: AppointmentsComponent},
  {path:'qanda',component: QAndAComponent},
  {path:'registered_users',component: RegisteredUsersComponent},
  {path:'about_me',component: AboutMeComponent},
  {path:'articles',component: ArticlesComponent},
  {path:'gallery',component: GalleryComponent},
  {path:'faq',component: FaqComponent},
  {path:'testimonials',component: TestimonialsComponent},
  {path:'settings',component: SettingsComponent},
  {path:'reset_password',component: ResetPasswordComponent},
  {path:'',redirectTo:'dashboard',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
