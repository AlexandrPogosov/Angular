import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPeopleResponse} from "../../shared/intefaces";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  public getPeople(): Observable<IPeopleResponse> {
    return this.http.get<IPeopleResponse>('https://swapi.dev/api/people/')
  }
}
