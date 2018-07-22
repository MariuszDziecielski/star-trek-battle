import { Component, OnDestroy } from '@angular/core';

import { Router } from '@angular/router';

import { NgRedux } from '@angular-redux/store';

import { Subscription } from 'rxjs';

import { GameActions } from '../app.actions';
import { GameState } from '../game-state';
import { Player } from '../player';

@Component({
  selector: 'app-modal-get-name',
  templateUrl: './modal-get-name.component.html',
  styleUrls: ['./modal-get-name.component.sass']
})
export class ModalGetNameComponent implements OnDestroy {
  player: Player = {
    name
  };

  playerNameSubscription: Subscription;

  constructor(
    private actions: GameActions,
    private ngRedux: NgRedux<GameState>,
    private router: Router
  ) {
    this.playerNameSubscription = this.ngRedux.select<string>(['player', 'name'])
      .subscribe(newPlayerName => this.player.name = newPlayerName);
  }

  ngOnDestroy() {
    this.playerNameSubscription.unsubscribe();
  }

  playGame(): void {
    if (this.player.name && this.player.name.length >= 3) {
      this.router.navigate(['app-player-selection']);
      this.setPlayerName(this.player.name);
    } else {
      this.player.name = 'Spock';
    }
  }

  setPlayerName(name) {
    this.ngRedux.dispatch(this.actions.setPlayerName(name));
  }
}
