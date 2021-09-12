import { Component, OnInit } from '@angular/core';
import {FilmsService} from "./films.service";
import {IFilms, IFilmsResponse} from "../../shared/intefaces";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  public films: IFilms[] = [];

  constructor(private httpFilms: FilmsService) { }

  ngOnInit(): void {
    this.httpFilms.getFilms().subscribe( (res: IFilmsResponse) => {
      this.films = res.results
      console.log(this.films)
    })
  }

}
