import { Injectable } from '@angular/core';
import { Backend } from '../common';

@Injectable({
  providedIn: 'root'
})
export class BackendService {


  backend:Backend = {
    backendtag: 'Backend',
    rubyimg: '../assets/images/ror.png',
    pythonimg: '../assets/images/python.png',
    nodejsimg: '../assets/images/node_js.png',
    phpimg: '../assets/images/php.png',
    javaimg: '../assets/images/android-java.png',
    golangimg: '../assets/images/go.png',
    rubytag: 'Ruby On Rails',
    pythontag: 'Python',
    nodejstag: 'Node_JS',
    phptag: 'Php',
    javatag: 'Java',
    golangtag: 'Go Lang'
  }

  constructor() { }
}
