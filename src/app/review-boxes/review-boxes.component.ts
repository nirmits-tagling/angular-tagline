import { Component, Input, OnInit } from '@angular/core';

interface RatingBox{
  rating:string,
  small:string,
  para:string,
  verfied:string
}

@Component({
  selector: 'app-review-boxes',
  templateUrl: './review-boxes.component.html',
  styleUrls: ['./review-boxes.component.scss']
})
export class ReviewBoxesComponent implements OnInit {

  @Input() ratingboxdata:any;
 

  constructor() { }

  ngOnInit(): void {
    console.log('ratingboxdata :>> ', this.ratingboxdata);
  }

}
