import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';
import Card from '../../model/Card';
import CardContent from '../../model/CardContent';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @ViewChild('gmap') private gmapElement: any;
  private map: google.maps.Map;
  private infowindow: google.maps.InfoWindow;
  private marker: google.maps.Marker;
  private mapOption: google.maps.MapOptions;
  private latLng: google.maps.LatLng;
  public card: Card;

  constructor() {
  }

  ngOnInit() {
    this.initMap();
    this.initCard();
  }

  initCard(): void {
    this.card = new Card({
      title:  'Joël CHRABIE',
      subtitle:  'Développeur Web',
      icon:  'code',
      imagePath:  '/assets/carteDeVisite.jpg ',
      imageAlt:  ' ',
      content: [
        new CardContent('06 88 74 00 93', 'Mobile', 'phone'),
        new CardContent('36 Boulevard du Tertre - Saint-Herblain', 'Localisation', 'place'),
        new CardContent('joel.chrabie@gmail.com', 'Mail', 'email')
      ]
    });
  }

  initMap(): void {
    this.latLng = new google.maps.LatLng(47.215350, -1.606093);
    this.mapOption = {
      center: this.latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapOption);

    this.initMarker();
  }

  initMarker(): void {
    this.infowindow = new google.maps.InfoWindow({
      content: `<div id= 'infoWindow '>
        <h3>Joël CHRABIE</h3>
        <div>36 Boulevard du Tertre</div>
        <div>44800 Saint-Herblain</div>
      <div>`,
    });

    this.marker = new google.maps.Marker({
      position: this.latLng,
      map: this.map,
      title: 'Joël CHRABIE'
    });

    this.marker.addListener('click', function() {
      this.infowindow.open(this.map, this.marker);
    });

    this.infowindow.open(this.map, this.marker);
  }
}
