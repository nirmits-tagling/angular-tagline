import { Component, Input, OnInit } from '@angular/core';
interface Technologies{
  technologies:string,
  web:string,
  mobile:string,
  desktop:string,
plateform:string,
database:string,
bigData:string
machineLearning:string,
devOps:string,
clouds:string,

}

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  @Input()
  technologiesdata!: Technologies;

  
  constructor() { }

  ngOnInit(): void {
   
  }

}
