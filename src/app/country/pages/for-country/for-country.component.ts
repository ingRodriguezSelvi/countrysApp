import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styles: [
    `li {
      cursor: pointer;
      }`
  ]
})
export class ForCountryComponent  {


  flagError:boolean=false;
  countrys:Country[]=[];
  countrysSuggets:Country[]=[];
  termino:string='';
  viewSugges:boolean=false;

  constructor(  private countryService:CountryService) { }

  search(termine:string){
    this.flagError=false
    this.viewSugges=false;
    this.countryService.searchCountry(termine).subscribe(countrys=>{
        this.countrys=countrys;
      },(err)=>{
      this.flagError=true;
      this.countrys=[];
    });
  }

  sugget(termine:string){
    this.termino=termine;
    this.viewSugges=true;
    this.countryService.searchCountry(termine).subscribe(countrys=>{
        this.countrysSuggets=countrys.splice(0,5);
      },(err)=>{
        this.countrysSuggets=[]});
  }

  getSugget( termine:string ){
    this.search(termine);

  }


}
