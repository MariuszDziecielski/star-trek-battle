import { Component, OnInit } from '@angular/core';

import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-modal-hello',
  templateUrl: './modal-hello.component.html',
  styleUrls: ['./modal-hello.component.sass']
})
export class ModalHelloComponent implements OnInit {
  player: Player;

  constructor(
    private players: PlayersService,
  ) {
    this.players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
  }

  ngOnInit() { }

  openGetNameModal(): void {
    this.players.setPlayer(
      Object.assign(this.player,
        { name: 'Spock' }
      )
    );
    $('#js-openModalGetNameButton').click();
  }
}
