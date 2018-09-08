import { Component, OnInit, Input } from '@angular/core';

import { Journalist } from '../../shared/models/journalist.model';

@Component({
  selector: 'app-journalist',
  templateUrl: './journalist.component.html',
  styleUrls: ['./journalist.component.css']
})
export class JournalistComponent implements OnInit {

  @Input() journalist: Journalist;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

}
