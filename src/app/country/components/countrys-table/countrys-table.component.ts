import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../models/country.interface';

@Component({
  selector: 'app-countrys-table',
  templateUrl: './countrys-table.component.html',
  styleUrls: ['./countrys-table.component.css']
})
export class CountrysTableComponent implements OnInit {

  constructor() { }

  @Input() countrys:Country[]=[];

  ngOnInit(): void {
  }

}
