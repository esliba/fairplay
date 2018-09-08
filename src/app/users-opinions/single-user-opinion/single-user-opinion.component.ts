import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserOpinion } from '../../shared/models/user-opinion.model';

@Component({
  selector: 'app-single-user-opinion',
  templateUrl: './single-user-opinion.component.html',
  styleUrls: ['./single-user-opinion.component.css']
})
export class SingleUserOpinionComponent implements OnInit {

  @Input() analysis: UserOpinion;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAnalysis(){
    this.router.navigate(['/user-opinion', this.analysis.id]);
  }
}


