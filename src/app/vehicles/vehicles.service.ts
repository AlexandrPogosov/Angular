import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IVechiclesResponse} from "../../shared/intefaces";

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private http: HttpClient) { }

  public getVehicles(): Observable<IVechiclesResponse> {
    return this.http.get<IVechiclesResponse>('https://swapi.dev/api/vehicles')
  }
}
