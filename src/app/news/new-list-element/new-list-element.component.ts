import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from '../../shared/models/new.model';

@Component({
  selector: 'app-new-list-element',
  templateUrl: './new-list-element.component.html',
  styleUrls: ['./new-list-element.component.css']
})
export class NewListElementComponent implements OnInit {

  @Input() new: Article;
  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToNew(){
    this.router.navigate(['/new', this.new.id]);
  }

}
