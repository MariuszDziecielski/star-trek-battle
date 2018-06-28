import { Component, OnInit } from '@angular/core';

import { GameStateService } from '../game-state.service';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-modal-get-name',
  templateUrl: './modal-get-name.component.html',
  styleUrls: ['./modal-get-name.component.sass']
})
export class ModalGetNameComponent implements OnInit {

  public player: Player;

  constructor(
    private _state: GameStateService,
    private _players: PlayersService
  ) {
    this._players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() {
  }

  public playGame(): void {

    if (this.player.name && this.player.name.length >= 3) {
      this._state.setGameStartedState(true);
      this._players.setPlayer(
        Object.assign(this.player,
          { name: this.player.name }
        )
      );
    }
  }

}
