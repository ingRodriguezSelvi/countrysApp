import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ForCapitalComponent } from './pages/for-capital/for-capital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { SearchComponent } from './components/search/search.component';
import { CountrysTableComponent } from './components/countrys-table/countrys-table.component';





@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    ViewCountryComponent,
    SearchComponent,
    CountrysTableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],exports:[
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    ViewCountryComponent
  ]
})
export class CountryModule { }
