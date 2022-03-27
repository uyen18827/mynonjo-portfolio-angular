import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CommissionGuideComponent } from './pages/commission-guide/commission-guide.component';
import { SideNavbarComponent } from './components/side-navbar/side-navbar.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HomepageComponent,
    CommissionGuideComponent,
    SideNavbarComponent
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
