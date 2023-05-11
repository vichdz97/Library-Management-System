import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  item = '';
  
  @Output() newItemEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchFor(value: string) {
    this.newItemEvent.emit(value);
    this.item = '';
  }

}
