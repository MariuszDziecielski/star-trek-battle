import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-modal-victory',
  templateUrl: './modal-victory.component.html',
  styleUrls: ['./modal-victory.component.sass']
})
export class ModalVictoryComponent implements OnInit {
  player: Player;

  constructor(
    private players: PlayersService
  ) {
    this.players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() {
  }

}
