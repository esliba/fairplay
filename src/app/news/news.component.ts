import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Article } from '../shared/models/new.model';

import { NewsServices } from '../shared/services/news.services';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private news : Article[];
  private last_id: number;
  private index: number;

  constructor(private news_services: NewsServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.news = this.news_services.getNews();
    this.last_id = Math.ceil(this.news.length / 4);
    this.index = this.route.snapshot.params['id']-1;
  }

  setIndex(i:number){
    this.index = i;
  }

  getFirstOldNews(){
    const aux_index = this.news.slice(this.index+3,this.index+5);
    return aux_index;
  }

  getSecondOldNews(){
    const aux_index = this.news.slice(this.index+5,this.index+7);
    return aux_index;
  }

  getImportantNews(){
    const aux_index = this.news.slice(this.index,this.index+3);
    return aux_index;
  }

  getPreviousAllowed() {
    return  +this.route.snapshot.params['id'] == 1 ? false : true;
  }

  getNextAllowed() {
    return  +this.route.snapshot.params['id'] == this.last_id ? false : true;
  }

  onClickPaginationPrevious() {
    this.router.navigate(['/news', this.route.snapshot.params['id']-1]);
    window.scroll(0,0);
    this.setIndex(this.index-4);
  }

  onClickPaginationNext() {
    this.router.navigate(['/news', +this.route.snapshot.params['id']+ 1]);
    window.scroll(0,0);
    this.setIndex(this.index+4);
  }

}
