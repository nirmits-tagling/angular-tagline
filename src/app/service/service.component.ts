import { Component, Input, OnInit } from '@angular/core';

interface Services{
  button: string;
  description: string;
  tag: string;
  img: string;
    // ourservices:string,
    // find:string,
    // rightoffer:string,
    // foryou:string,
  }

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @Input()
  serviceData!: Services;

  constructor() { }

  ngOnInit(): void {
  }

}
