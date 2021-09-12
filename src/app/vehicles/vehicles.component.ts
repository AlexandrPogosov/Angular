import { Component, OnInit } from '@angular/core';
import {VehiclesService} from "./vehicles.service";
import {IVechicles, IVechiclesResponse} from "../../shared/intefaces";

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {

  public vechicles: IVechicles[] = []
  constructor(private httVehicles: VehiclesService) { }

  ngOnInit(): void {
    this.httVehicles.getVehicles().subscribe((res: IVechiclesResponse) => {
      this.vechicles = res.results
      console.log(this.vechicles);
    })
  }

}
