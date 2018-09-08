import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Opinion } from '../../shared/models/opinion.model';

@Component({
  selector: 'app-opinion-list-element',
  templateUrl: './opinion-list-element.component.html',
  styleUrls: ['./opinion-list-element.component.css']
})
export class OpinionListElementComponent implements OnInit {

  @Input() opinion: Opinion;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToOpinion(){
    this.router.navigate(['/opinion', this.opinion.id]);
  }

}
