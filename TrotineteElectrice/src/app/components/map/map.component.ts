import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private markers: L.Marker[] = []; // Array pentru marcatori

  ngOnInit(): void {
    this.map = L.map('map').setView([45.9432, 24.9668], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 5,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    // Strat de temă
    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
    }).addTo(this.map);
  }

  // Metodă pentru adăugarea checkpoint-urilor pe hartă
  addCheckpoints(checkpoints: any[]) {
    this.clearMarkers(); // Ștergeți marcatorii existenți

    checkpoints.forEach(checkpoint => {
      const marker = L.marker([checkpoint.latitude, checkpoint.longitude]).addTo(this.map);
      this.markers.push(marker);
    });
  }

  // Metodă pentru ștergerea marcatorilor de pe hartă
  clearMarkers() {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
  }
}
