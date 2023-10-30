import { Component } from '@angular/core';
import { CharactersComponent } from "./pages/characters/characters.component";
import { HttpClientModule } from "@angular/common/http";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharactersComponent, HttpClientModule, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StarWars';
}
