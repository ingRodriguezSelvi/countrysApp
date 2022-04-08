import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  switchMap } from 'rxjs/operators';
import { Country } from '../../models/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styles: [
  ]
})
export class ViewCountryComponent implements OnInit {

  country!:Country;

  constructor(
    private activatedRoute:ActivatedRoute,
    private countryService:CountryService
  ) { }



  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({countryId})=>this.countryService.getCountryByCode(countryId))

    )
    .subscribe(res=>this.country=res);
  }
}
function tab(arg0: void): import("rxjs").OperatorFunction<Country, unknown> {
  throw new Error('Function not implemented.');
}

