import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hire-developers',
  templateUrl: './hire-developers.component.html',
  styleUrls: ['./hire-developers.component.scss']
})
export class HireDevelopersComponent implements OnInit {
@Input() hireDeveloper:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
