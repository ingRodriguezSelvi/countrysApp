import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ForCapitalComponent } from "./country/pages/for-capital/for-capital.component";
import { ForCountryComponent } from "./country/pages/for-country/for-country.component";
import { ForRegionComponent } from "./country/pages/for-region/for-region.component";
import { ViewCountryComponent } from "./country/pages/view-country/view-country.component";

const routes: Routes = [
  {
    path: "",
    component: ForCountryComponent,
    pathMatch: "full"
  },
  {
    path: "region",
    component: ForRegionComponent
  },
  {
    path: "capital",
    component: ForCapitalComponent
  },
  {
    path: "country/:countryId",
    component: ViewCountryComponent
  },
  {
    path: "**",
    redirectTo: "ForCountryComponent"
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: []
})

export class RoutingModule {}
