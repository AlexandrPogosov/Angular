import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SpeciesComponent} from "./species.component";

const routes: Routes = [
  {
    path: '',
    component: SpeciesComponent
  }
]


@NgModule({
  declarations: [SpeciesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SpeciesModule { }
