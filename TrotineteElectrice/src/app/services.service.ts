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
    image: 'assets/tr1.jpg',
  },

  {
    id:2,
    name: 'WERD 2',
    weightsupported: '150 Kg',
    status: 'Busy',
    energy: '80%',
    latitude: 45.8,
    longitude: 21.25,
    image: 'assets/tr2.jpg',
  },

  {
    id:3,
    name: 'WERD 3',
    weightsupported: '100 Kg',
    status: 'Available',
    energy: '50%',
    latitude: 45.767,
    longitude: 21.3,
    image: 'assets/tr3.jpg',
  },

  {
    id:4,
    name: 'WERD 4',
    weightsupported: '100 Kg',
    status: 'Available',
    energy: '90%',
    latitude: 45.783,
    longitude: 21.383,
    image: 'assets/tr4.jpg',
  },

  {
    id:5,
    name: 'WERD 5',
    weightsupported: '100 Kg',
    status: 'Busy',
    energy: '70%',
    latitude: 45.833,
    longitude: 21.317,
    image: 'assets/tr5.jpg',
  },

  {
    id:6,
    name: 'WERD 6',
    weightsupported: '180 Kg',
    status: 'Busy',
    energy: '30%',
    latitude: 45.6517,
    longitude: 21.1669,
    image: 'assets/tr6.jpg',
  },
];

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  collectionImages = [
    { id: 1, url: 'assets/tr1.jpg' },
    { id: 2, url: 'assets/tr2.jpg' },
    { id: 3, url: 'assets/tr3.jpg' },
    { id: 4, url: 'assets/tr4.jpg' },
    { id: 5, url: 'assets/tr5.jpg' },
    { id: 6, url: 'assets/tr6.jpg' },
    // Adaugă mai multe imagini și identificatori aici
  ];
  getScooterDetailsById(id: number) {
    return scooterData.find(scooter => scooter.id === id);
  }

}



