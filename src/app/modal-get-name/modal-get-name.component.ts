import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-modal-get-name',
  templateUrl: './modal-get-name.component.html',
  styleUrls: ['./modal-get-name.component.sass']
})
export class ModalGetNameComponent implements OnInit {
  player: Player;

  constructor(
    private players: PlayersService,
    private router: Router
  ) {
    this.players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() { }

  playGame(): void {
    if (this.player.name && this.player.name.length >= 3) {
      this.router.navigate(['app-player-selection']);
      this.players.setPlayer(
        Object.assign(this.player,
          { name: this.player.name }
        )
      );
    }
  }
}
