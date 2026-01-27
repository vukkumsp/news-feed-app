import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsFeed {

  private http = inject(HttpClient);
  private baseUrl = 'https://newsdata.io/api/1/latest?apikey=pub_ff2e0a25dc464e9e915556b84391aa0a&q=US%20tariffs&prioritydomain=top';

  private apiKey = "pub_ff2e0a25dc464e9e915556b84391aa0a";


}
