import { Component, OnInit } from '@angular/core';

import { SearchResult } from '../_models/search-result';
import { WikiSearchService } from './../_services/wiki-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchTerm: string;
  results: SearchResult[];

  constructor(private wikiSearch: WikiSearchService) { }

  ngOnInit(): void {
  }

  doSearch() {
    console.log(this.searchTerm);
    this.wikiSearch.getSearchResults(this.searchTerm).subscribe({
      next: response => {
        // @ts-ignore
        const results: SearchResult[] = response.query.search;

        console.log(results);
        this.results = results;
      }
    });
  }

}
