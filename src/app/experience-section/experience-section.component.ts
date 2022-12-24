import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.scss']
})
export class ExperienceSectionComponent implements OnInit {

  @Input() experiencedata:any;

  constructor() { }

  ngOnInit(): void {
  }

}
