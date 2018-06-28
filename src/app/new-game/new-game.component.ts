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
  public gameStarted: boolean;
  public firstGame: boolean;
  public player: Player;

  public get newGameText(): string {
    return this.firstGame ? 'Nowa Gra!' : 'Jeszcze raz!';
  }

  constructor(
    private _state: GameStateService,
    private _players: PlayersService
  ) {
    this._state.getGameStartedState$().subscribe(newGameStartedState => this.gameStarted = newGameStartedState);
    this._state.getFirstGameState$().subscribe(newFirstGameState => this.firstGame = newFirstGameState);
    this._players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() {
  }

  public openGetNameModal(): void {
    this._players.setPlayer(
      Object.assign(this.player,
        { name: 'Spock' }
      )
    );
    $('#js-openModalGetNameButton').click();
  }

}
