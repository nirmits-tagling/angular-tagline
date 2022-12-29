import { Injectable } from '@angular/core';
import { Globals } from '../common';

@Injectable({
  providedIn: 'root'
})
export class GlobalPresenceService {


  global:Globals[] = [
    // global: 'Our Global Presence',
    // hq: 'India (HQ)',
    {
      address : 'Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101',
    no: '+91 9874662135',
    country: 'USA'
    },
    {
      address : '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
    no: '+91 9874662135',
    country: 'United KIngdom'
  },
  //   {address3: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
  //   country?: '+91 9874662135',
  //   // email: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052'
  // }]
  ];
  constructor() { }
}
