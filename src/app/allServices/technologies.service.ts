import { Injectable } from '@angular/core';
import { Technologies } from '../common';

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

 public technologies:string []= [
    'Our Technologies',
   'Web',
 'Mobile',
    'Desktop',
   'Plateform',
 'BigData',
 'MachineLearning',
  'DevOps',
  'Clouds'
]


  constructor() { }
}
