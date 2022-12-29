import { Injectable } from '@angular/core';
import { Experiencesub } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ExperienceSubService {


 public experincesubs:Experiencesub []= [
    {
      img:'../assets/../assets/images/contentlogo.webp',
  tittle:'125+',
  description:'Professional'

    },
    {
      img:'../assets/../assets/images/contentlogo2.webp',
  tittle:'450+',
  description:'Completed Projects'

    },
    {
      img:'../assets/../assets/images/contentlogo3.webp',
  tittle:'150+',
  description:'Freelance Hours'

    },
    {
      img:'../assets/../assets/images/contentlogo4.webp',
  tittle:'5+',
  description:'Years of experience'

    }
  ]
    
  

  constructor() { }
}
