import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CommissionGuideComponent } from './pages/commission-guide/commission-guide.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { SwiperModule } from 'swiper/angular';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SocialFooterComponent } from './components/social-footer/social-footer.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UnderConstructionComponent } from './pages/under-construction/under-construction.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HomepageComponent,
    CommissionGuideComponent,
    SideNavbarComponent,
    ProjectsComponent,
    SocialFooterComponent,
    BackToTopComponent,
    PageNotFoundComponent,
    UnderConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
