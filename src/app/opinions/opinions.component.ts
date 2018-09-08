import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Opinion } from '../shared/models/opinion.model';

import { OpinionsServices } from '../shared/services/opinions.services';

@Component({
  selector: 'app-opinions',
  templateUrl: './opinions.component.html',
  styleUrls: ['./opinions.component.css']
})
export class OpinionsComponent implements OnInit {

  private opinions : Opinion[];
  private last_id: number;
  private index: number;

  constructor(private opinions_services: OpinionsServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.opinions = this.opinions_services.getOpinions();
    this.last_id = Math.ceil(this.opinions.length / 4);
    this.index = this.route.snapshot.params['id']-1;
  }

  setIndex(i:number){
    this.index = i;
  }

  getOpinionsByGroupIndex(){
    const aux_index = this.opinions.slice(this.index,this.index+4);
    return aux_index;
  }

  getPreviousAllowed() {
    return  +this.route.snapshot.params['id'] == 1 ? false : true;
  }

  getNextAllowed() {
    return  +this.route.snapshot.params['id'] == this.last_id ? false : true;
  }

  onClickPaginationPrevious() {
    this.router.navigate(['/opinions', this.route.snapshot.params['id']-1]);
    window.scroll(0,0);
    this.setIndex(this.index-4);
  }

  onClickPaginationNext() {
    this.router.navigate(['/opinions', +this.route.snapshot.params['id']+ 1]);
    window.scroll(0,0);
    this.setIndex(this.index+4);
  }

}
