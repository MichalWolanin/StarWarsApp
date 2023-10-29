import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { Character } from "../models/character.interface";

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.API_URL);
  }
}
