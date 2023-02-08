import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './banner/banner.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { InsightsSectionComponent } from './insights-section/insights-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    BannerComponent,
    CustomerSupportComponent,
    InsightsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
