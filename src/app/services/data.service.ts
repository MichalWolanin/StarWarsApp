import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "../../environments/environment";
import { Character } from "../models/character.interface";

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  getCharacters(): Observable<Character[]> {
    const peopleURL = `${this.API_URL}/people`;
    return this.http.get<Character[]>(peopleURL);
  }
}
