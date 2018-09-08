import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserOpinion } from '../shared/models/user-opinion.model';

import { UserOpinionsServices } from '../shared/services/user-opinions.service';

@Component({
  selector: 'app-users-opinions',
  templateUrl: './users-opinions.component.html',
  styleUrls: ['./users-opinions.component.css']
})
export class UsersOpinionsComponent implements OnInit {

  private users_opinions : UserOpinion[];
  private last_id: number;
  private index: number;

  constructor(private users_opinions_services: UserOpinionsServices, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.users_opinions = this.users_opinions_services.getUserOpinions();
    this.last_id = Math.ceil(this.users_opinions.length / 4);
    this.index = this.route.snapshot.params['id']-1;
  }

  setIndex(i:number){
    this.index = i;
  }

  getAnalysisByGroupIndex(){
    const aux_index = this.users_opinions.slice(this.index,this.index+4);
    return aux_index;
  }

  getPreviousAllowed() {
    return  +this.route.snapshot.params['id'] == 1 ? false : true;
  }

  getNextAllowed() {
    return  +this.route.snapshot.params['id'] == this.last_id ? false : true;
  }

  onClickPaginationPrevious() {
    this.router.navigate(['/users-opinions', this.route.snapshot.params['id']-1]);
    window.scroll(0,0);
    this.setIndex(this.index-4);
  }

  onClickPaginationNext() {
    this.router.navigate(['/users-opinions', +this.route.snapshot.params['id']+ 1]);
    window.scroll(0,0);
    this.setIndex(this.index+4);
  }

}
