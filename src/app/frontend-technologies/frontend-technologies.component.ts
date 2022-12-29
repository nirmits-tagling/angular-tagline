import { Component, Input, OnInit } from '@angular/core';
import { FrontendService } from '../allServices/frontend.service';
import { Frontend } from '../common';


@Component({
  selector: 'app-frontend-technologies',
  templateUrl: './frontend-technologies.component.html',
  styleUrls: ['./frontend-technologies.component.scss']
})
export class FrontendTechnologiesComponent implements OnInit {

  // @Input()
  frontenddata: Frontend[]=[];

  constructor(private frontendService:FrontendService) { }

  ngOnInit(): void {
    this.frontenddata = this.frontendService.frontend;
  }

}
