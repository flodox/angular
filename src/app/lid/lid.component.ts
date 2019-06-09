import { Component, OnInit } from '@angular/core';

export class Lid {
  Id: number;
  voornaam: string;
  achternaam: string;
  geboortedatum: string;
  straat: string;
  huisnummer: string;
  postcode: string;
  land: string;
  email: string;
  telefoon: string;
}
@Component({
  selector: 'app-lid',
  templateUrl: './lid.component.html',
  styleUrls: ['./lid.component.css']
})
export class LidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
