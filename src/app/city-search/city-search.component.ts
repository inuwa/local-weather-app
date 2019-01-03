import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CitySearchComponent implements OnInit {
  public search = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
