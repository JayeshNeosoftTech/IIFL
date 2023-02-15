import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './banner/banner.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { InsightsSectionComponent } from './insights-section/insights-section.component';
import { CalculatorSectionComponent } from './calculator-section/calculator-section.component';
import { FooterComponent } from './footer/footer.component';
import { QuicklinkSectionComponent } from './quicklink-section/quicklink-section.component';
import { FooterLinksComponent } from './footer-links/footer-links.component';
import { NewsletterSecComponent } from './newsletter-sec/newsletter-sec.component';
import { ContactusSecComponent } from './contactus-sec/contactus-sec.component';
import { CustomerSecComponent } from './customer-sec/customer-sec.component';
import { MobileAppSecComponent } from './mobile-app-sec/mobile-app-sec.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    BannerComponent,
    CustomerSupportComponent,
    InsightsSectionComponent,
    CalculatorSectionComponent,
    FooterComponent,
    QuicklinkSectionComponent,
    FooterLinksComponent,
    NewsletterSecComponent,
    ContactusSecComponent,
    CustomerSecComponent,
    MobileAppSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
