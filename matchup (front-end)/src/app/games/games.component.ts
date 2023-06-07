import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';
import { Game } from '../interfaces/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Game[] =  [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getAllGames().subscribe((games) => {
      this.games = games;
    });
  }

}
