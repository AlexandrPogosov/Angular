import {Component, OnInit} from '@angular/core';
import {RootService} from "../shared/root.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SWAPI API';
  public routes: string[] = []
  constructor(private rootService: RootService, private router: Router) {
  }

  ngOnInit(): void {
    this.rootService.getRoots().subscribe(res => {
      for (const resKey in res) {
          this.routes.push(resKey);
      }
      console.log(this.routes);
    })
  }

  navigateTo(route: string): void
  {
    this.router.navigate([route])
  }
}
