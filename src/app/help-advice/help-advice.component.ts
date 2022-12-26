import { Component, Input, OnInit } from '@angular/core';

interface Helpadvice{
  help: string,
    career: string,
    aboutus: string,
    contactus: string,
    blog: string,
    privacy: string,
    sitemap:string
}
@Component({
  selector: 'app-help-advice',
  templateUrl: './help-advice.component.html',
  styleUrls: ['./help-advice.component.scss']
})
export class HelpAdviceComponent implements OnInit {

  @Input()
  helpData: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
