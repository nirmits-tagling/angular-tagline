import { Component, Input, OnInit } from '@angular/core';
import { AwardService } from '../allServices/award.service';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {

  // @Input() 
  awardData:string[]=[];

  
  constructor(private awardService:AwardService) { }

  ngOnInit(): void {
    this.awardData = this.awardService.awards;
  }

}
