import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { CharactersService } from '../services/characters.service';
import { Game } from '../interfaces/game.interface';
import { GamesService } from '../services/games.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  characters: Character[] = [];
  game: Game = {} as Game;
  game_id : number = 0;

  constructor(private gamesService: GamesService,
              private route: ActivatedRoute,
              private router: Router,
              private characterService: CharactersService)
              { }
  getGameId(gameId : number){
    this.game_id = gameId;
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.gamesService.getGame(id).subscribe(
        (game: Game) => {
          this.game = game;
          this.characterService.getAllCharacter(this.game.id).subscribe((characters) => {
            this.characters = characters;
          });
        },
        (err) => {
          this.router.navigate(['/']);
        }
      );
    });

    
  }

}
