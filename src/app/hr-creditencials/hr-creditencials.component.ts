import { Component, Input, OnInit } from '@angular/core';
interface Hr{
  inquiry: string,
    email: string,
    no:string,
    saless:string,
    tagline:string
}
@Component({
  selector: 'app-hr-creditencials',
  templateUrl: './hr-creditencials.component.html',
  styleUrls: ['./hr-creditencials.component.scss']
})
export class HrCreditencialsComponent implements OnInit {
  @Input()
  hrData!: Hr;

  constructor() { }

  ngOnInit(): void {
  }

}
