import { Component, Input, OnInit } from '@angular/core';

interface Frontend{
  fronttag:string,
  reactimg:string,
  angularimg:string,
  typscriptimg:string,
  vueimg:string,
  mateorimg:string,
  javascriptimg:string,
  htmlimg:string,
  reacttag:string,
  angulartag:string,
  typescripttag:string,
  vuetag:string,
  mateortag:string,
  javascripttag:string,
  htmltag:string,
}

@Component({
  selector: 'app-frontend-technologies',
  templateUrl: './frontend-technologies.component.html',
  styleUrls: ['./frontend-technologies.component.scss']
})
export class FrontendTechnologiesComponent implements OnInit {

  @Input()
  frontenddata!: Frontend;

  constructor() { }

  ngOnInit(): void {
  }

}
