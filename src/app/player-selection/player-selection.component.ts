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
  computer: Player;
  gameStarted: boolean;
  player: Player;
  possiblePicks: string[] = ['Klingon', 'Romulanin', 'Kardasjanin'];

  constructor(
    private players: PlayersService,
    private state: GameStateService
  ) {
    this.state.getGameStartedState$().subscribe(newGameStartedState => this.gameStarted = newGameStartedState);
    this.players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
    this.players.getComputer$().subscribe(newPlayer => this.computer = newPlayer);
  }

  ngOnInit() {
  }

  setPlayersPick(e): void {
    this.players.setPlayer(
      Object.assign(this.player,
        { selection: e.currentTarget.classList[0] }
      )
    );
    this.players.setComputer(
      Object.assign(this.computer,
        { selection: this.possiblePicks[Math.floor(Math.random() * 3)] }
      )
    );
  }

}
