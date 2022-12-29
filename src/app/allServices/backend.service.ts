import { Injectable } from '@angular/core';
import { Backend } from '../common';


@Injectable({
  providedIn: 'root'
})
export class BackendService {


  backend:Backend[]= [
    {
    tag: 'ROR',
    img: '../assets/images/ror.png',
  },{
    tag: 'Python',
    img: '../assets/images/python.png',
   
  },{
    img: '../assets/images/node_js.png',
    tag: 'Node_JS',
  },
  {
    tag: 'Php',
  img: '../assets/images/php.png',
  },
  {
    tag: 'Java',
    img: '../assets/images/android-java.png',
  },
    
   {
    img: '../assets/images/go.png',
    tag: 'Go Lang'
  }
]

  constructor() { }
}
