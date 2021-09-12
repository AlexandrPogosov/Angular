import { Component, OnInit } from '@angular/core';
import {SpeciesService} from "./species.service";
import {ISpecies, ISpeciesResponse} from "../../shared/intefaces";

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  public species: ISpecies[] = [];

  constructor(private httpSpecies: SpeciesService) { }

  ngOnInit(): void {
    this.httpSpecies.getSpecies().subscribe((res: ISpeciesResponse) => {
      this.species = res.results
      console.log(this.species)
    })
  }

}
