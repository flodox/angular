import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Speedrun} from  './speedrun/speedrun.component';
import {Observable} from "rxjs/index";

@Injectable()
  


export class HttpService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:5001/api/';

  getSpeedruns(){
    return this.http.get(this.baseUrl + 'Speedrun/Speedruns');
    }

  getLidById(id: string){
    
    return this.http.get(this.baseUrl + 'Lid/' + id);
  }

  getBerichten(){
    return this.http.get(this.baseUrl + 'Bericht/Berichten');
  }
}
