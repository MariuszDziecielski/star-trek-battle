import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-modal-defeat',
  templateUrl: './modal-defeat.component.html',
  styleUrls: ['./modal-defeat.component.sass']
})
export class ModalDefeatComponent implements OnInit {

  player: Player;

  constructor(
    private players: PlayersService
  ) {
    this.players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() {
  }

}
