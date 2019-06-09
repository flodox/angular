import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LidComponent } from './lid/lid.component';
import { BerichtComponent } from './bericht/bericht.component';
import { SpeedrunComponent } from './speedrun/speedrun.component';
import { SpeedrunDetailsComponent } from './speedrun-details/speedrun-details.component';
import {HttpService} from './http.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LidComponent,
    BerichtComponent,
    SpeedrunComponent,
    SpeedrunDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
