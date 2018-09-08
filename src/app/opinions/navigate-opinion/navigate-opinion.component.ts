import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Opinion } from '../../shared/models/opinion.model';

import { OpinionsServices } from '../../shared/services/opinions.services';

@Component({
  selector: 'app-navigate-opinion',
  templateUrl: './navigate-opinion.component.html',
  styleUrls: ['./navigate-opinion.component.css']
})
export class NavigateOpinionComponent implements OnInit {

  private opinion: Opinion;

  constructor(private opinions_services: OpinionsServices, private route: ActivatedRoute) { }

  ngOnInit() {
    this.opinion = this.opinions_services.getOpinionById(this.route.snapshot.params['id']-1);
  }

}
