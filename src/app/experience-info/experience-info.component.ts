import { Component, Input, OnInit } from '@angular/core';

// interface Experience{
//   experiencetag:string,
//   experiencedescription:string,
//   contactbtn:string,
//   imgtag:string
// }

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.scss']
})
export class ExperienceInfoComponent implements OnInit {

  @Input()experienceInfoData:any;

  constructor() { }

  ngOnInit(): void {
  }

}
