import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headernavbar',
  templateUrl: './headernavbar.component.html',
  styleUrls: ['./headernavbar.component.scss']
})
export class HeadernavbarComponent implements OnInit {

  @Input() headernavcontent:any;

  btnHeaderType:string ="button"
  getquote:string = "Get Quote"
  taglinelogo:string = "../assets/../assets/images/tagline.png"
  
  constructor() { }

  ngOnInit(): void {
  }

}
