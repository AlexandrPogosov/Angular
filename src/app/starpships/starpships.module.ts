import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {StarpshipsComponent} from "./starpships.component";

const routes: Routes = [
  {
    path: '',
    component: StarpshipsComponent
  }
]

@NgModule({
  declarations: [StarpshipsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StarpshipsModule { }
