import { Component, OnInit } from '@angular/core';
import {StarpshipsService} from "./starpships.service";
import {IStarShips, IStarShipsResponse} from "../../shared/intefaces";

@Component({
  selector: 'app-starpships',
  templateUrl: './starpships.component.html',
  styleUrls: ['./starpships.component.css']
})
export class StarpshipsComponent implements OnInit {

  public starships: IStarShips[] = []

  constructor(private httpStarships: StarpshipsService) { }

  ngOnInit(): void {
    this.httpStarships.getStarships().subscribe((res: IStarShipsResponse) => {
      this.starships = res.results;
      console.log(this.starships)
    })
  }

}
