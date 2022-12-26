import { Component, Input, OnInit } from '@angular/core';

interface Blog {

  title:string,
  description:string,
  readmore:string,
  img:string,
  button:string
  
}


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  @Input() blogData:Blog[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
