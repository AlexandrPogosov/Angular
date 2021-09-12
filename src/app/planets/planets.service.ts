import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPeopleResponse, IPlanetResponse} from "../../shared/intefaces";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private http: HttpClient) { }

  public getPlanets():  Observable<IPlanetResponse> {
    return this.http.get<IPlanetResponse>('https://swapi.dev/api/planets')
  }
}
