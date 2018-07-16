import { Component, OnInit } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { Subscription } from 'rxjs';

import { GameState } from '../game-state';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.sass']
})
export class NewGameComponent implements OnInit {
  firstGame: boolean;
  firstGameSubscription: Subscription;

  get newGameText(): string {
    return this.firstGame ? 'Nowa Gra!' : 'Jeszcze raz!';
  }

  constructor(
    private ngRedux: NgRedux<GameState>,
  ) {
    this.firstGameSubscription = this.ngRedux.select<boolean>(['game', 'first'])
      .subscribe(newFirstGameState => this.firstGame = newFirstGameState);
  }

  ngOnInit() { }

  openHelloModal(): void {
    $('#js-openModalHelloButton').click();
  }
}
