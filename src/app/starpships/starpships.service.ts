import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IStarShipsResponse} from "../../shared/intefaces";

@Injectable({
  providedIn: 'root'
})
export class StarpshipsService {

  constructor(private http: HttpClient) { }

  public getStarships(): Observable<IStarShipsResponse> {
    return this.http.get<IStarShipsResponse>('https://swapi.dev/api/starships/')
  }
}
