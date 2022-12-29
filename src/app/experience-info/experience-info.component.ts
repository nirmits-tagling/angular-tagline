import { Component, Input, OnInit } from '@angular/core';
import { ExperienceSubService } from '../allServices/experience-sub.service';
import { Experiencesub } from '../common';


@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrls: ['./experience-info.component.scss']
})
export class ExperienceInfoComponent implements OnInit {

  // @Input()
  experienceInfoData:Experiencesub[]=[];

  constructor(private experienceSubService:ExperienceSubService) { }

  ngOnInit(): void {
    this.experienceInfoData = this.experienceSubService.experincesubs;
  }

}
