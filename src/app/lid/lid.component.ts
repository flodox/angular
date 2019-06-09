import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router, private httpService: HttpService) { }
leden: Lid[];
  ngOnInit() {

    this.httpService.getLeden()
    .subscribe((data: Lid[]) => {
      this.leden = data;
    });

  }


}

