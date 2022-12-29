import { Component, Input, OnInit } from '@angular/core';
import { FormService } from '../allServices/form.service';

interface Globalform{
  getquote:string,
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  // @Input()
  formData:string = 'Get Your Free Quote Today';

  constructor(private formService:FormService) { }

  ngOnInit(): void {
    this.formData = this.formService.globalform;
  }
  

}
