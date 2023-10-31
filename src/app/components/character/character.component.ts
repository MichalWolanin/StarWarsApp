import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {Character} from "../../models/character.interface";

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  @Input() character!: Character;
}
