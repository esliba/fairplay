import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../shared/models/new.model';
import { Opinion } from '../shared/models/opinion.model';
import { UserOpinion } from '../shared/models/user-opinion.model';

import { NewsServices } from '../shared/services/news.services';
import { OpinionsServices } from '../shared/services/opinions.services';
import { UserOpinionsServices } from '../shared/services/user-opinions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private last_new : Article;
  private news : Article[];
  private opinions: Opinion[]
  private user_opinions: UserOpinion[];
  private activeTable: string;

  constructor(private news_services: NewsServices, private opinions_services: OpinionsServices, 
              private user_opinions_servicess: UserOpinionsServices, private router: Router) {}

  ngOnInit() {
    this.last_new = this.news_services.getLastNew();
    this.news = this.news_services.getNews();
    this.opinions = this.opinions_services.getOpinions();
    this.user_opinions = this.user_opinions_servicess.getUserOpinions();
    this.activeTable = "Fecha";
  }

  getLastNews() {
    const aux= (this.news.length);
    return this.news.slice(aux-3, aux-1).reverse();
  }

  getLastOpinions() {
    const aux= (this.opinions.length);
    return this.opinions.slice(aux-2, aux).reverse();
  }

  getLastAnalysis() {
    const aux= (this.user_opinions.length);
    return this.user_opinions.slice(aux-2, aux).reverse();
  }

  navigateToArticle(){
    this.router.navigate(['/new', this.last_new.id]);
  }

  changeTable(table:string) {
    this.activeTable = table;
  }
}
