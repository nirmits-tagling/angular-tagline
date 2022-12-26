import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-footer',
  templateUrl: './last-footer.component.html',
  styleUrls: ['./last-footer.component.scss']
})
export class LastFooterComponent implements OnInit {

  @Input() footerSection:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
