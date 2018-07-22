import { Component } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { Subscription } from 'rxjs';

import { Game } from '../game';
import { GameState } from '../game-state';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent {
  firstGameSubscription: Subscription;

  game: Game = {
    first: null
  };

  get newGameText(): string {
    return this.game.first ? 'Nowa Gra!' : 'Jeszcze raz!';
  }

  constructor(
    private ngRedux: NgRedux<GameState>,
  ) {
    this.firstGameSubscription = this.ngRedux.select<boolean>(['game', 'first'])
      .subscribe(newFirstGameState => this.game.first = newFirstGameState);
  }

  openHelloModal(): void {
    $('#js-openModalHelloButton').click();
  }
}
