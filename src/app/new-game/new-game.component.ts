import { Component, OnInit } from '@angular/core';

import { GameStateService } from '../game-state.service';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent implements OnInit {
  firstGame: boolean;
  gameStarted: boolean;

  get newGameText(): string {
    return this.firstGame ? 'Nowa Gra!' : 'Jeszcze raz!';
  }

  player: Player;

  constructor(
    private players: PlayersService,
    private state: GameStateService
  ) {
    this.state.getGameStartedState$().subscribe(newGameStartedState => this.gameStarted = newGameStartedState);
    this.state.getFirstGameState$().subscribe(newFirstGameState => this.firstGame = newFirstGameState);
    this.players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() {
  }

  openGetNameModal(): void {
    this.players.setPlayer(
      Object.assign(this.player,
        { name: 'Spock' }
      )
    );
    $('#js-openModalGetNameButton').click();
  }

}
