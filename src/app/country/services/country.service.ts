import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl:string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields','name,capital,population,flag,alpha2Code;');
  }


  constructor(  private http:HttpClient ) { }

  searchCountry(countryName:string):Observable<Country[]>{
    const url = `${this.apiUrl}/name/${countryName}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  searchCountryByCapital(capital:string):Observable<Country[]>{
    const url = `${this.apiUrl}/capital/${capital}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }

  getCountryByCode(code:string):Observable<Country>{
    const url = `${this.apiUrl}/alpha/${code}`;
    return this.http.get<Country>(url,{params:this.httpParams});
  }

  getCountryByRegion(region:string):Observable<Country[]>{

    const url = `${this.apiUrl}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url,{params:this.httpParams});
  }
}
