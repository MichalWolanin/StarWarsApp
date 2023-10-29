import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import { Character } from "../../models/character.interface";
import {CharacterComponent} from "../../components/character/character.component";
import {CharacterService} from "../../services/character.service";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent {
  characters$ = this.characterService.getCharacters();

  characters?: Observable<Character[]>;

  constructor(private characterService: CharacterService) {}
}
