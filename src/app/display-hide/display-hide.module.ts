import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DisplayHide } from './display-hide.component';
import { HiddenComponentComponent } from './components/hidden-component/hidden-component.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DisplayHide, HiddenComponentComponent, HeaderComponent],
  imports: [BrowserModule, HttpClientModule],
  exports: [DisplayHide],
  providers: [],
  bootstrap: [DisplayHide],
})
export class DisplayHideModule {}
