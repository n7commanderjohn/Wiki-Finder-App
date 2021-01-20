import { Component, OnInit } from '@angular/core';

import { WikiSearchService } from './../_services/wiki-search.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  searchTerm: string;

  constructor(private wikiSearch: WikiSearchService) { }

  ngOnInit(): void {
  }

  doSearch() {
    console.log(this.searchTerm);
  }

}
