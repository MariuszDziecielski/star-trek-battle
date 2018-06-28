import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-modal-defeat',
  templateUrl: './modal-defeat.component.html',
  styleUrls: ['./modal-defeat.component.sass']
})
export class ModalDefeatComponent implements OnInit {

  public player: Player;

  constructor(
    private _players: PlayersService
  ) {
    this._players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() {
  }

}
