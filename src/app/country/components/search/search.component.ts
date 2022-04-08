import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onTermine : EventEmitter<string> = new EventEmitter<string>();
  @Output() onDebunce: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder:string = "";

  debunce:Subject<string>= new Subject();

  termine:string='';
  constructor() { }

  ngOnInit(): void {
    this.debunce.pipe(
      debounceTime(500)
    ).subscribe(termine=>{
      this.onDebunce.emit(termine);
    });
  }

  search(){
    this.onTermine.emit(this.termine);
  }

  pressKey(){
    this.debunce.next(this.termine);
  }

}
