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
  show1 : boolean = false;
  show2: boolean = false;
  character1: Character = {} as Character;
  character2: Character = {} as Character;
  charactersOrdered: Character[] = [];
  id1: number = 0;
  id2: number = 0;

  getRows(): any[][] { 
    const rows = [];
    for (let i = 0; i < this.characters.length; i += 8) {
      rows.push(this.characters.slice(i, i + 8));
    }
    return rows;
  }

  isSelected1 (id : number) : Character{
    for(let character of this.charactersOrdered){
      if(character.id == id){
        console.log("id : "+ id);
        this.showCharacter1(id);
        return this.characters[id];        
      }
    }
    return {} as Character;
  }
  isSelected2 (id : number) : Character{
    for(let character of this.charactersOrdered){
      if(character.id == id){
        console.log("id : "+ id);
        this.showCharacter2(id);
        return this.characters[id];        
      }
    }
    return {} as Character;
  }
  
  showCharacter1(id : number){
    for(let character of this.charactersOrdered){
      if(character.id == id){
        this.show1 = true;
        this.character1 = character;
      }
    }
    return {} as Character;
  }
  showCharacter2(id : number){
    for(let character of this.charactersOrdered){
      if(character.id == id){
        this.show2 = true;
        this.character2 = character;
      }
    }
    return {} as Character;
  }
  twoId(id1: number | any, id2: number | any){
    let aux;
    if(id1 > id2){
      aux = id1;
      id1 = id2;
      id2 = aux;
    }
    this.router.navigate(['/matchups/',id1,id2]);
  }

  // getRows() define la cantidad de filas de 8 elementos basándose en el total de elementos del arreglo de objetos

  sortByName(characters : Character[]){ //ordenar personajes alfabéticamente
    return characters.sort((a, b) => a.name.localeCompare(b.name));
}

  constructor(private gamesService: GamesService,
              private route: ActivatedRoute,
              private router: Router,
              private characterService: CharactersService)
              {
  
               }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.gamesService.getGame(id).subscribe(
        (game) => {
          this.game = game;
          this.characterService.getAllCharacter(this.game.id).subscribe((characters) => {
            this.characters = characters;
            this.charactersOrdered = this.sortByName(this.characters);
          });
        },
        (err) => {
          this.router.navigate(['/']);
        }
      );
    }
    );
  }

}
