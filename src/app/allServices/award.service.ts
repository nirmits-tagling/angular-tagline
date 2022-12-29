import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwardService {


  awards:string[] = [
    
    // awards: 'Awards &',
    // recognization: 'Recognitions',
     '../assets/images/award-2.webp',
    '../assets/images/award-3.webp',
    '../assets/images/award-4.webp',
    '../assets/images/award-5.webp',
    '../assets/images/award-6.webp'
  ]
  
  constructor() { }
}
