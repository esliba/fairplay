import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserOpinion } from '../../shared/models/user-opinion.model';

import { UserOpinionsServices } from '../../shared/services/user-opinions.service';


@Component({
  selector: 'app-navigate-user-opinion',
  templateUrl: './navigate-user-opinion.component.html',
  styleUrls: ['./navigate-user-opinion.component.css']
})
export class NavigateUserOpinionComponent implements OnInit {

  private analysis: UserOpinion;

  constructor(private users_opinions_services: UserOpinionsServices, private route: ActivatedRoute) { }

  ngOnInit() {
    this.analysis = this.users_opinions_services.getUserOpinionById(this.route.snapshot.params['id']-1);
  }

}
