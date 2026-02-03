import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NewsFeed {

  private http = inject(HttpClient);
  // private apiKey = "pub_ff2e0a25dc464e9e915556b84391aa0a";
  private apiKey = environment.apiKey;
  private baseUrl = `https://newsdata.io/api/1/latest?apikey=${this.apiKey}`;
  private filterParams = '&q=US%20tariffs&prioritydomain=top';

  
  fetchLatestNews() {
    const url = `${this.baseUrl}`;
    return this.http.get(url).pipe(
      map((response: any) => response.results || [])
    );
  }

}
