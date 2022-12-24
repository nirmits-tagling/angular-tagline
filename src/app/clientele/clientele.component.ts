import { Component, Input, OnInit } from '@angular/core';


interface Clientele {
  headtag:string,
  description1:string,
  description2:string,


}
@Component({
  selector: 'app-clientele',
  templateUrl: './clientele.component.html',
  styleUrls: ['./clientele.component.scss']
})
export class ClienteleComponent implements OnInit {

  @Input()
  cilentData!: Clientele;

  constructor() { }

  ngOnInit(): void {
  }

}
