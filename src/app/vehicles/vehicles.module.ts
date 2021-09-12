import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StarpshipsComponent} from "../starpships/starpships.component";
import {VehiclesComponent} from "./vehicles.component";


const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent
  }
]


@NgModule({
  declarations: [VehiclesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class VehiclesModule { }
