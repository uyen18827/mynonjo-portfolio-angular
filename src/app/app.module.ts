import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { CommissionGuideComponent } from './pages/commission-guide/commission-guide.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    HomepageComponent,
    CommissionGuideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
