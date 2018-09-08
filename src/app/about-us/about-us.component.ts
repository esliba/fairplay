import { Component, OnInit, Input } from '@angular/core';

import { Journalist } from '../shared/models/journalist.model';

import { JournalistsServices } from '../shared/services/journalists.services';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  journalists: Journalist[];
  
  constructor(private journalists_services: JournalistsServices) { }

  ngOnInit() {
    this.journalists = this.journalists_services.getJournalists();
  }

  getJournalists() {
    return this.journalists.slice();
  }

}
