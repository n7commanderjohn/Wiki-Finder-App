import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getSearchResults(searchTerm: string) {
    const params = 'action=query&list=search&srsearch=' + searchTerm;
    return this.http.get(this.baseUrl + params);
  }
}
