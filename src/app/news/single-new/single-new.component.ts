import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../../shared/models/new.model'

@Component({
  selector: 'app-single-new',
  templateUrl: './single-new.component.html',
  styleUrls: ['./single-new.component.css']
})
export class SingleNewComponent implements OnInit {

  @Input() new: Article;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToNew(){
    this.router.navigate(['/new', this.new.id]);
  }
}
