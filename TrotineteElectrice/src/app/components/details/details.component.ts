import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as L from 'leaflet';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent {
  scooterDetails: any; 
  private map: L.Map;
  private checkpointMarker: L.Marker;

  constructor(
    private route: ActivatedRoute,
    private servicesService: ServicesService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.scooterDetails = this.servicesService.getScooterDetailsById(id);

     
      this.map = L.map('map').setView([this.scooterDetails.latitude, this.scooterDetails.longitude], 12);

    
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 5,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);

     
      this.checkpointMarker = L.marker([this.scooterDetails.latitude, this.scooterDetails.longitude])
        .addTo(this.map)
        .bindPopup(this.scooterDetails.name); 
    }
    
    
  }
}
