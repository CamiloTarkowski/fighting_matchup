import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
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

  constructor(private gamesService: GamesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.gamesService.getGame(id).subscribe(
        (game: any) => {
          this.game = game;
        },
        (err) => {
          this.router.navigate(['/']);
        }
      );
    });
  }

}
