import { Component, Input, OnInit } from '@angular/core';
import { SearchResult } from '../_models/search-result';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  @Input() results: SearchResult[];

  constructor() { }

  ngOnInit(): void {
  }

}
