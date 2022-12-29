import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../allServices/data.service';
import { Services } from '../common';

// interface Services{
//   button?: string,
//   description?: string,
//   tag?: string,
//   img?: string,
//   chooseustag ?:string,
//   dropline ?:string,
//   contactbtn ?:string
//   }

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @Input()
 serviceData: Services[]=[];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.serviceData = this.dataService.services;
  }

}
