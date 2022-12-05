import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SharedModule } from './shared/shared.module';
import { DisplayHideModule } from './display-hide/display-hide.module';
import { RouterModule } from '@angular/router';
import { CommunicationModule } from './communication/communication.module';
import { CrudModule } from './crud/crud.module';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    SharedModule,
    DisplayHideModule,
    RouterModule,
    CommunicationModule,
    CrudModule,
    CounterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
