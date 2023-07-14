import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  
  private link = 'http://localhost:8080/characters/';

  constructor(private _http: HttpClient) { }

  getAllCharacter(gameId: number): Observable<Character[]> {
    return this._http.get<Character[]>(this.link + gameId.toString());
  }

  getCharacter(id: number): Observable<Character> {
    return this._http.get<Character>(
      'http://localhost:8080/character/' + id.toString()
    );
  }
  
}
