import { Injectable } from '@angular/core';
import { Frontend } from '../common';

@Injectable({
  providedIn: 'root'
})
export class FrontendService {

    
  frontend:Frontend[] = [
    
    {
    img: '../assets/images/react-js.png',
    tag: 'React_JS'
    },
    {img: '../assets/images/angular-icon.png',
    tag: 'Angular'
    },
    { img: '../assets/images/typescript-icon.png',
    tag: 'Typescript',
},
    {img: '../assets/images/vue-js.png',
    tag: 'Vue_JS',
},
    {img: '../assets/images/meter-js.png',
    tag: 'Mateor_Js',
},
    {img: '../assets/images/javascript-icon.png',
    tag: 'Javascript'},

    {img: '../assets/images/html5.png',
    tag: 'HTML5'}

  
]


  constructor() { }
}
