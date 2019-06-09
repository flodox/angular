import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeedrunComponent } from './speedrun/speedrun.component';
import { BerichtComponent } from './bericht/bericht.component';
import { LidComponent } from './lid/lid.component';
import { HomeComponent } from './home/home.component';
import { InformatieComponent } from './informatie/informatie.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'speedruns', component: SpeedrunComponent},
  { path: 'berichten', component: BerichtComponent},
  { path: 'leden', component: LidComponent},
  { path: 'home', component: HomeComponent},
  { path: 'informatie', component: InformatieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
