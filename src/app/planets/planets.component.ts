import { Component, OnInit } from '@angular/core';
import {PlanetsService} from "./planets.service";
import {IPlanetResponse, IPlanets} from "../../shared/intefaces";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  public planets: IPlanets[] = []

  constructor(private httpPlanets: PlanetsService) { }

  ngOnInit(): void {
    this.httpPlanets.getPlanets().subscribe((res: IPlanetResponse) => {
        this.planets = res.results;
      console.log(this.planets)
    })
  }

}
