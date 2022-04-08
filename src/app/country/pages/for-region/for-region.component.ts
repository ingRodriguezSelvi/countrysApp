import { Component, OnInit } from '@angular/core';
import { Country } from '../../models/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-region',
  templateUrl: './for-region.component.html',
  styles: [
    `
    button{
      margin-right:10px;
      margin-bottom:5px;
    }
    `
  ]
})
export class ForRegionComponent implements OnInit {

  regions:string[]=['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regionActiva:string='';
  countrys:Country[]=[];
  flagError:boolean=false;

  constructor( private countryService:CountryService) { }

  ngOnInit(): void {
  }

  activateRegion(region:string){
    this.regionActiva=region;
    this.countryService.getCountryByRegion(region).subscribe(
      countrys=>{
        this.countrys=countrys;
      },(err)=>{
        this.flagError=true;
        this.countrys=[];
      }
    )
  }

  getClassCSS(region:string):string{
    return (this.regionActiva===region)?'btn btn-primary':'btn btn-outline-primary';
  }

}
