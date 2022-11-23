import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SidemenuComponent } from './layouts/sidemenu/sidemenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { QAndAComponent } from './components/q-and-a/q-and-a.component';
import { RegisteredUsersComponent } from './components/registered-users/registered-users.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FaqComponent } from './components/faq/faq.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {NzFormModule} from 'ng-zorro-antd/form';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    DashboardComponent,
    AppointmentsComponent,
    QAndAComponent,
    RegisteredUsersComponent,
    AboutMeComponent,
    ArticlesComponent,
    GalleryComponent,
    FaqComponent,
    TestimonialsComponent,
    SettingsComponent,
    ResetPasswordComponent,
    HomePageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    CommonModule,
    NzFormModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
