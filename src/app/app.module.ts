import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LandingPageItemComponent } from './landing-page-item/landing-page-item.component';
import { LandingPageSectionComponent } from './landing-page-section/landing-page-section.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GamiphyElementsComponent } from './gamiphy-elements/gamiphy-elements.component';
import { GamiphyElementComponent } from './gamiphy-element/gamiphy-element.component';
import { GamiphyElementIconComponent } from './gamiphy-element-icon/gamiphy-element-icon.component';
import { BenefitsSectionComponent } from './benefits-section/benefits-section.component';
import { GamiphySectionComponent } from './gamiphy-section/gamiphy-section.component';
import { GamiphySubSectionComponent } from './gamiphy-sub-section/gamiphy-sub-section.component';
import { GamiphyBenefitElementComponent } from './gamiphy-benefit-element/gamiphy-benefit-element.component';
import { HowItWorksItemComponent } from './how-it-works-item/how-it-works-item.component';
import { HowItWorksSectionComponent } from './how-it-works-section/how-it-works-section.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';

/**
 * Angular material imports
 */
import { MatListModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    LandingPageItemComponent,
    LandingPageSectionComponent,
    FooterComponent,
    ContactUsComponent,
    LandingPageComponent,
    GamiphyElementsComponent,
    GamiphyElementComponent,
    GamiphyElementIconComponent,
    BenefitsSectionComponent,
    GamiphySectionComponent,
    GamiphySubSectionComponent,
    GamiphyBenefitElementComponent,
    HowItWorksItemComponent,
    HowItWorksSectionComponent,
    ContactUsSectionComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CarouselModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
