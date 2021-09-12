import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: 'people',
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
  },
  {
    path: 'planets',
    loadChildren: () => import('./planets/planets.module').then(m => m.PlanetsModule),
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule),
  },
  {
    path: 'species',
    loadChildren: () => import('./species/species.module').then(m => m.SpeciesModule),
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule),
  },
  {
    path: 'starships',
    loadChildren: () => import('./starpships/starpships.module').then(m => m.StarpshipsModule),
  },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
