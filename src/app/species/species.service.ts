import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ISpeciesResponse} from "../../shared/intefaces";

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {

  constructor(private http: HttpClient) { }

  public getSpecies(): Observable<ISpeciesResponse> {
    return this.http.get<ISpeciesResponse>('https://swapi.dev/api/species/')
  }
}
