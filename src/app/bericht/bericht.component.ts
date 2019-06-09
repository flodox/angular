import { Component, OnInit } from '@angular/core';
import { Lid } from '../lid/lid.component';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

export class Bericht {
  Id: number;
  titel: string;
  inhoud: string;
  datum: string;
  lidId: string;
  lid: Lid

}
@Component({
  selector: 'app-bericht',
  templateUrl: './bericht.component.html',
  styleUrls: ['./bericht.component.css']
})
export class BerichtComponent implements OnInit {

 berichten: Bericht[];
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {

    this.httpService.getBerichten()
    .subscribe((data: Bericht[]) => {
      this.berichten = data;
      this.berichten.forEach(Bericht => {
      this.httpService.getLidById(Bericht.lidId)
      .subscribe((datalid: Lid) =>  {
        Bericht.lid = datalid;
        console.log(Bericht.lid.achternaam);
      });

      })
    });
  
  } 
}


