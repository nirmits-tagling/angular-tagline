import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {

  @Input() awardData:string[]=[];

  
  constructor() { }

  ngOnInit(): void {
  }

}
