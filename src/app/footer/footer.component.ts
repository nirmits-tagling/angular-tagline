import { Component, Input, OnInit } from '@angular/core';

interface Footer{
  latest: string,
  sharemail: string,
  guides: string,
  and: string,
  industrynews: string,
  subscribe: string,
  unsubscribe: string
}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input()
  footerData!: Footer;

  

  constructor() { }

  ngOnInit(): void {
  }

}
