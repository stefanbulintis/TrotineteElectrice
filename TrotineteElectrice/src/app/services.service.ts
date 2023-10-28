import { Injectable } from '@angular/core';

const scooterData = [
  {
    id:1,
    name: 'WERD 1',
    weightsupported: '120 Kg',
    status: 'Available',
    energy: '100%',
    latitude: 45.7,
    longitude: 21.233,
  },

  {
    id:2,
    name: 'WERD 2',
    weightsupported: '150 Kg',
    status: 'Busy',
    energy: '80%',
    latitudine: 45.8,
    longitudine: 21.25,
  },

  {
    id:3,
    name: 'WERD 3',
    weightsupported: '100 Kg',
    status: 'Available',
    energy: '50%',
    latitudine: 45.767,
    longitudine: 21.3,
  },

  {
    id:4,
    name: 'WERD 4',
    weightsupported: '100 Kg',
    status: 'Available',
    energy: '90%',
    latitudine: 45.767,
    longitudine: 21.3,
  },

  {
    id:5,
    name: 'WERD 5',
    weightsupported: '100 Kg',
    status: 'Busy',
    energy: '70%',
    latitudine: 45.767,
    longitudine: 21.3,
  },

  {
    id:6,
    name: 'WERD 6',
    weightsupported: '180 Kg',
    status: 'Busy',
    energy: '30%',
    latitudine: 45.767,
    longitudine: 21.3,
  },
];

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  getScooterDetailsById(id: number) {
    return scooterData.find(scooter => scooter.id === id);
  }

}
