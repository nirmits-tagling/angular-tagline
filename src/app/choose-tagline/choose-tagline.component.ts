import { Component, Input, OnInit } from '@angular/core';

interface whytagline{
  number:string,
  tittle:string,
  description:string,
  img:string
}
@Component({
  selector: 'app-choose-tagline',
  templateUrl: './choose-tagline.component.html',
  styleUrls: ['./choose-tagline.component.scss']
})
export class ChooseTaglineComponent implements OnInit {

  @Input()
  chooseTagline!: whytagline;

  constructor() { }

  ngOnInit(): void {
  }

}
