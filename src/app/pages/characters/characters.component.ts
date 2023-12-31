import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {CharacterComponent} from "../../components/character/character.component";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  characters$ = this.dataService.getCharacters();

  constructor(private dataService: DataService) {}
}
