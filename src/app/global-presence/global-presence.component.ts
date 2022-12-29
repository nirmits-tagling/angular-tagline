import { Component, Input, OnInit } from '@angular/core';
import { GlobalPresenceService } from '../allServices/global-presence.service';
import { Globals } from '../common';


@Component({
  selector: 'app-global-presence',
  templateUrl: './global-presence.component.html',
  styleUrls: ['./global-presence.component.scss']
})
export class GlobalPresenceComponent implements OnInit {

  // @Input()
  globalData:Globals []=[];

  constructor(private globalPresenceService:GlobalPresenceService) { }

  ngOnInit(): void {
    this.globalData = this.globalPresenceService.global;
  }

}
