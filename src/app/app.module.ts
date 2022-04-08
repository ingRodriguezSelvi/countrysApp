import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    CountryModule,
    RoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
