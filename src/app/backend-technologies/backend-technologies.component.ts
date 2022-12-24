import { Component, Input, OnInit } from '@angular/core';

interface Backend{
  backendtag:string,
  rubyimg:string,
  pythonimg:string,
  nodejsimg:string,
  phpimg:string,
  javaimg:string,
  golangimg:string,
  rubytag:string,
  pythontag:string,
  nodejstag:string,
  phptag:string,
  javatag:string,
  golangtag:string,
}

@Component({
  selector: 'app-backend-technologies',
  templateUrl: './backend-technologies.component.html',
  styleUrls: ['./backend-technologies.component.scss']
})
export class BackendTechnologiesComponent implements OnInit {
  @Input()
  backenddata!: Backend;

  constructor() { }

  ngOnInit(): void {
  }

}
