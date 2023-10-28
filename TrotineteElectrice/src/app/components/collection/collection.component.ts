import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  collectionImages = [
    { id: 1, url: 'assets/tr1.jpg' },
    { id: 2, url: 'assets/tr2.jpg' },
    { id: 3, url: 'assets/tr3.jpg' },
    { id: 4, url: 'assets/tr4.jpg' },
    { id: 5, url: 'assets/tr5.jpg' },
    { id: 6, url: 'assets/tr6.jpg' },
    // Adaugă mai multe imagini și identificatori aici
  ];

  constructor(private router: Router) { }

  redirectToDetailsPage(imageId: number) {
    this.router.navigate(['/details', imageId]); 
  }
}
