import { Component, Input, OnInit } from '@angular/core';
import { TechnologiesService } from '../allServices/technologies.service';
import { Technologies } from '../common';


@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  // @Input()
  technologiesdata: string[]=[];

  
  constructor(private technologiesService:TechnologiesService) { }

  ngOnInit(): void {
    this.technologiesdata = this.technologiesService.technologies;
   
  }

}
