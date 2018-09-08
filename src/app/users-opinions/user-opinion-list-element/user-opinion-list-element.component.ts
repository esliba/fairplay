import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { UserOpinion } from '../../shared/models/user-opinion.model';


@Component({
  selector: 'app-user-opinion-list-element',
  templateUrl: './user-opinion-list-element.component.html',
  styleUrls: ['./user-opinion-list-element.component.css']
})
export class UserOpinionListElementComponent implements OnInit {

  @Input() analysis: UserOpinion;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAnalysis(){
    this.router.navigate(['/user-opinion', this.analysis.id]);
  }

}
