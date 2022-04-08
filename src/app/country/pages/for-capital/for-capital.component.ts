import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
  styles: [
  ]
})
export class ForCapitalComponent implements OnInit {

  countrys:Country[]=[];
  flagError:boolean=false;
  constructor(
    private countryService:CountryService
  ) { }


  ngOnInit(): void {
  }

  search(termine:string){
    this.flagError=false
    this.countryService.searchCountryByCapital(termine).subscribe(countrys=>{
        this.countrys=countrys;
      },(err)=>{
      this.flagError=true;
      this.countrys=[];
    });
  }

  sugget(termine:string){

  }
}
