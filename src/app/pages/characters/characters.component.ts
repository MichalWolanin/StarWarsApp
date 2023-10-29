import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import { Character } from "../../models/character.interface";
import {CharacterComponent} from "../../components/character/character.component";
import {CharacterService} from "../../services/character.service";
import { HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, CharacterComponent],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  providers: [HttpClientModule],
})
export class CharactersComponent implements OnInit {

  characters?: Observable<Character[]>;

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
   this.characterService.getCharacters();
  }
}
