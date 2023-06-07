import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game.interface';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private link = 'http://localhost:8080/games';

  constructor(private _http: HttpClient) { }

  getAllGames(): Observable<Game[]> {
    return this._http.get<Game[]>(this.link);
  }

  /* busca y retorna un producto por id. Si no encuentra nada, retorna [object] */

  getGame(id: number): Observable<Game> {
    return this._http.get<Game>(
      'http://localhost:8080/game/' + id.toString()
    );
  }
}

//http://localhost:8080/api/v1/games
