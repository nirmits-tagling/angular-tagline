import { Component, Input, OnInit } from '@angular/core';

interface Whytagline{
  tag ?:string,
  title ?:string,
  description ?:string,
  img ?:string,
  chooseustag?: string,
  dropline ?:string,
  contactbtn ?: string
}
@Component({
  selector: 'app-choose-tagline',
  templateUrl: './choose-tagline.component.html',
  styleUrls: ['./choose-tagline.component.scss']
})
export class ChooseTaglineComponent implements OnInit {

  @Input()
  chooseTagline:Whytagline[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
