import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FilmsComponent} from "../films/films.component";
import {PlanetsComponent} from "./planets.component";

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  }
]

@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlanetsModule { }
