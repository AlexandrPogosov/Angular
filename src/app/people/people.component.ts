import { Component, OnInit } from '@angular/core';
import {PeopleService} from "./people.service";
import {IPeople, IPeopleResponse} from "../../shared/intefaces";

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  public peoples: IPeople[] = [];

  constructor(private httpPeople: PeopleService) { }

  ngOnInit(): void {
    this.httpPeople.getPeople().subscribe((res: IPeopleResponse) => {
      console.log(res)
      this.peoples = res.results;
      console.log(this.peoples)
    })
  }

}
