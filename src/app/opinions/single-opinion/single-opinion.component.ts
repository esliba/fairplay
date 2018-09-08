import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Opinion } from '../../shared/models/opinion.model';

@Component({
  selector: 'app-single-opinion',
  templateUrl: './single-opinion.component.html',
  styleUrls: ['./single-opinion.component.css']
})
export class SingleOpinionComponent implements OnInit {

  @Input() opinion: Opinion;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToOpinion(){
    this.router.navigate(['/opinion', this.opinion.id]);
  }
}
