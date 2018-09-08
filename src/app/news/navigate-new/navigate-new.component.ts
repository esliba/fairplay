import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../../shared/models/new.model'

import { NewsServices } from '../../shared/services/news.services';

@Component({
  selector: 'app-navigate-new',
  templateUrl: './navigate-new.component.html',
  styleUrls: ['./navigate-new.component.css']
})
export class NavigateNewComponent implements OnInit {

  private new: Article;

  constructor(private news_service: NewsServices, private route: ActivatedRoute) { }

  ngOnInit() {
    this.new = this.news_service.getNewById(this.route.snapshot.params['id']-1);
  }

}
