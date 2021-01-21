import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchResults } from './../_models/search-results';

@Injectable({
  providedIn: 'root'
})

export class WikiSearchService {
  // baseUrl = 'https://www.mediawiki.org/w/api.php?';
  baseUrl = 'https://www.mediawiki.org/w/api.php?format=json&origin=*&';

  constructor(private http: HttpClient) { }

  getTest() {
    const params = 'action=query&list=allimages&ailimit=3';
    return this.http.get(this.baseUrl + params);
  }

  getSearchResults(searchTerm: string): Observable<SearchResults> {
    const params = 'action=query&list=search&srsearch=' + searchTerm;
    return this.http.get<SearchResults>(this.baseUrl + params);
  }
}
