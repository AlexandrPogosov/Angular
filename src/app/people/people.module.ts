import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import {RouterModule, Routes} from "@angular/router";
import {FilmsComponent} from "../films/films.component";

const routes: Routes = [
  {
    path: '',
    component: PeopleComponent
  }
]

@NgModule({
  declarations: [
    PeopleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [PeopleComponent]
})
export class PeopleModule { }
