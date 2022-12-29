import { Component, Input, OnInit } from '@angular/core';
import { BackendService } from '../allServices/backend.service';
import { Backend } from '../common';



@Component({
  selector: 'app-backend-technologies',
  templateUrl: './backend-technologies.component.html',
  styleUrls: ['./backend-technologies.component.scss']
})
export class BackendTechnologiesComponent implements OnInit {
  // @Input()
  backenddata: Backend[]=[];

  constructor(private backendService:BackendService) { }

  ngOnInit(): void {
    this.backenddata = this.backendService.backend;
  }

}
