import { Component, OnInit } from '@angular/core';

import { GameStateService } from '../game-state.service';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.sass']
})
export class PlayerSelectionComponent implements OnInit {
  public gameStarted: boolean;
  public player: Player;
  public computer: Player;
  public possiblePicks: string[] = ['Klingon', 'Romulanin', 'Kardasjanin'];

  constructor(
    private _state: GameStateService,
    private _players: PlayersService
  ) {
    this._state.getGameStartedState$().subscribe(newGameStartedState => this.gameStarted = newGameStartedState);
    this._players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
    this._players.getComputer$().subscribe(newPlayer => this.computer = newPlayer);
  }

  ngOnInit() {
  }

  public setPlayersPick(e): void {
    this._players.setPlayer(
      Object.assign(this.player,
        { selection: e.currentTarget.classList[0] }
      )
    );
    this._players.setComputer(
      Object.assign(this.computer,
        { selection: this.possiblePicks[Math.floor(Math.random() * 3)] }
      )
    );
  }

}
