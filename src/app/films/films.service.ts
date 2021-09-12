import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFilmsResponse} from "../../shared/intefaces";

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  public getFilms(): Observable<IFilmsResponse> {
   return this.http.get<IFilmsResponse>('https://swapi.dev/api/films')
  }
}
