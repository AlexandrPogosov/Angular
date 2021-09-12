import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})

export class RootService {
  constructor(private http: HttpClient) {}

  public getRoots() {
    return this.http.get('https://swapi.dev/api/')
  }
}
