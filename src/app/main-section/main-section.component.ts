import { Component, Input, OnInit } from '@angular/core';

interface MainSection{
  softwaretag:string,
  itconsultanytag:string,
  servingtag:string,
  startuptag:string,
  innovationtag:string
  meetingbutton: string,
  backgroundimg:string,
  getquote:string
  changetag:string
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {
  @Input()
  sectiondata!: MainSection;

  constructor() { }

  ngOnInit(): void {
  }

}
