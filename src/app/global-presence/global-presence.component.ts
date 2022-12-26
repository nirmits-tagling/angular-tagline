import { Component, Input, OnInit } from '@angular/core';

interface Global{
  global:string,
  hq:string,
  address1:string,
  no1:string,
  usa:string, 
  address2:string,
  no2:string,
  uk:string,
  address3:string,
  no3:string,
  email:string,
}


@Component({
  selector: 'app-global-presence',
  templateUrl: './global-presence.component.html',
  styleUrls: ['./global-presence.component.scss']
})
export class GlobalPresenceComponent implements OnInit {

  @Input()
  globalData!: Global;

  constructor() { }

  ngOnInit(): void {
  }

}
