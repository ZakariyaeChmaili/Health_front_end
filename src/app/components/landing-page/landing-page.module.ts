import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { MatIconModule } from '@angular/material/icon';
import { HeroComponent } from './hero/hero.component';
import { HealthServicesComponent } from './health-services/health-services.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from 'src/app/components/landing-page/index.component';


@NgModule({
  declarations: [
    TopNavComponent,
    HeroComponent,
    HealthServicesComponent,
    AboutComponent,
    FooterComponent,
    IndexComponent

  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    MatIconModule,
    MatButtonModule


  ]
})
export class LandingPageModule { }
