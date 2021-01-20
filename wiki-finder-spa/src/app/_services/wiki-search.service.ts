import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SearchResults } from './../_models/search-results';

@Injectable({
  providedIn: 'root'
})

export class WikiSearchService {
  baseUrl = 'mediawiki.org/w/api.php?';

  constructor(private http: HttpClient) { }

  getTest(): Observable<any> {
    return this.http.get(this.baseUrl + 'action=help');
  }

  getResults(): Observable<SearchResults> {
    return this.http.get<SearchResults>(this.baseUrl + 'action=help');
  }
}
