import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeedrunComponent } from './speedrun/speedrun.component';
import { SpeedrunDetailsComponent } from './speedrun-details/speedrun-details.component';
import { BerichtComponent } from './bericht/bericht.component';
import { LidComponent } from './lid/lid.component';
import { HomeComponent } from './home/home.component';
import { InformatieComponent } from './informatie/informatie.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list'},
  { path: 'list', component: SpeedrunComponent},
  { path: 'details/:id', component: SpeedrunDetailsComponent},
  { path: 'berichten', component: BerichtComponent},
  { path: 'leden', component: LidComponent},
  { path: 'Home', component: HomeComponent},
  { path: 'Informatie', component: InformatieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
