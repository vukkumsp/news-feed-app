import { Component, inject } from '@angular/core';
import { NewsFeed } from '../../services/news-feed/news-feed';
import { toSignal } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { Card } from "../../components/card/card";

@Component({
  selector: 'app-home',
  imports: [Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  newsFeed: NewsFeed = inject(NewsFeed);

  articles = toSignal(
    this.newsFeed.fetchLatestNews(),
    { initialValue: [] }
  )
}
