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

  getRows(): any[][] { 
    const rows = [];
    for (let i = 0; i < this.characters.length; i += 8) {
      rows.push(this.characters.slice(i, i + 8));
    }
    return rows;
  } 
  // getRows() define la cantidad de filas de 8 elementos basándose en el total de elementos del arreglo de objetos

  constructor(private gamesService: GamesService,
              private route: ActivatedRoute,
              private router: Router,
              private characterService: CharactersService)
              {
  
               }

  ngOnInit(): void {
    
    function sortByName(characters : Character[]){ //ordenar personajes alfabéticamente
      return characters.sort((a, b) => a.name.localeCompare(b.name));
    }

    function rowCharacters(index : number){

    }

    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.gamesService.getGame(id).subscribe(
        (game) => {
          this.game = game;
          this.characterService.getAllCharacter(this.game.id).subscribe((characters) => {
            this.characters = characters;
            this.characters = sortByName(this.characters);
          });
        },
        (err) => {
          this.router.navigate(['/']);
        }
      );
    });

    
  }

}
