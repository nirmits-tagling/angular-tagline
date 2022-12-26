import { Component, Input, OnInit } from '@angular/core';

interface Globalform{
  getquote:string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input()
  formData!: Globalform;

  constructor() { }

  ngOnInit(): void {
  }

}
