import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-modal-victory',
  templateUrl: './modal-victory.component.html',
  styleUrls: ['./modal-victory.component.sass']
})
export class ModalVictoryComponent implements OnInit {
  public player: Player;

  constructor(
    private _players: PlayersService
  ) {
    this._players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() {
  }

}
