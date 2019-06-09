import { Component, OnInit, inject } from '@angular/core';
import {Router} from "@angular/router";
import { LidComponent, Lid} from '../lid/lid.component';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {HttpService} from '../http.service';
import { getLocaleId } from '@angular/common';
export class Speedrun {

  Id: number;
  snelheid: number;
  datum: string;
  plank: string;
  zeil: string;
  lidId: string;
  lid: Lid;
  naam: string;
}

@Component({
  selector: 'app-speedrun',
  templateUrl: './speedrun.component.html',
  styleUrls: ['./speedrun.component.css']
})
export class SpeedrunComponent implements OnInit {
 
  speedruns: Speedrun[];
  
    
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
   
    this.httpService.getSpeedruns()
    .subscribe((data: Speedrun[]) => {
      this.speedruns = data;
      this.speedruns.forEach(Speedrun => {
      this.httpService.getLidById(Speedrun.lidId)
      .subscribe((datalid: Lid) =>  {
        Speedrun.lid = datalid;
        console.log(Speedrun.lid.achternaam);
      });
      
      })
    });
  
  } 



  getlid(){
    for (const Speedrun of this.speedruns) {
      
    }
  }
     
} 

       
  
