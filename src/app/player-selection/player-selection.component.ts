import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { Subscription } from 'rxjs';

import { GameActions } from '../app.actions';
import { GameState } from '../game-state';
import { Player } from '../player';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.sass']
})
export class PlayerSelectionComponent implements OnInit, OnDestroy {
  computer: Player = {
    points: null,
    selection: null
  };

  computerPointsSubscription: Subscription;
  computerSelectionSubscription: Subscription;

  player: Player = {
    points: null,
    selection: null
  };

  playerPointsSubscription: Subscription;
  playerSelectionSubscription: Subscription;

  constructor(
    private actions: GameActions,
    private ngRedux: NgRedux<GameState>
  ) {
    this.computerPointsSubscription = this.ngRedux.select<number>(['computer', 'points'])
      .subscribe(newComputerPoints => this.computer.points = newComputerPoints);

    this.computerSelectionSubscription = this.ngRedux.select<string>(['computer', 'selection'])
      .subscribe(newComputerSelection => this.computer.selection = newComputerSelection);

    this.playerPointsSubscription = this.ngRedux.select<number>(['player', 'points'])
      .subscribe(newPlayerPoints => this.player.points = newPlayerPoints);

    this.playerSelectionSubscription = this.ngRedux.select<string>(['player', 'selection'])
      .subscribe(newPlayerSelection => this.player.selection = newPlayerSelection);
  }

  ngOnDestroy() {
    this.computerPointsSubscription.unsubscribe();
    this.computerSelectionSubscription.unsubscribe();
    this.playerPointsSubscription.unsubscribe();
    this.playerSelectionSubscription.unsubscribe();

    this.toggleGameState('started');
  }

  ngOnInit() {
    this.toggleGameState('started');
  }

  checkGameState(): void {
    if (this.player.points === 10) {
      this.endGame(true);
    }

    if (this.computer.points === 10) {
      this.endGame(false);
    }
  }

  checkRoundWinner(playerSelection: string, computerSelection: string): void {
    this.setPlayersResult(false);

    let winnerIs = 'player';
    if (playerSelection === computerSelection) {
      winnerIs = 'none';
    } else if (
      (computerSelection === 'Klingon' && playerSelection === 'Kardasjanin') ||
      (computerSelection === 'Kardasjanin' && playerSelection === 'Romulanin') ||
      (computerSelection === 'Romulanin' && playerSelection === 'Klingon')) {
      winnerIs = 'computer';
    }

    if (winnerIs === 'player') {
      this.setPlayersWin(true);
    } else if (winnerIs === 'computer') {
      this.setPlayersWin(false);
    } else {
      this.setPlayersResult();
    }

    this.checkGameState();
  }

  endGame(playerVictory: boolean) {
    playerVictory ? $('#js-openModalVictoryButton').click() : $('#js-openModalDefeatButton').click();
    this.toggleGameState('first');
  }

  setPlayersPick(e): void {
    this.setPlayersSelection(e.currentTarget.classList[0]);

    if (!(this.player.selection === 'Wybór gracza') && !(this.player.selection === 'Wybór') &&
      !(this.computer.selection === 'Wybór komputera') && !(this.computer.selection === 'Wybór')
    ) {
      this.checkRoundWinner(this.player.selection, this.computer.selection);
    }
  }

  setPlayersResult(draw = true) {
    this.ngRedux.dispatch(this.actions.setPlayersResult(draw));
  }

  setPlayersSelection(playerSelection) {
    this.ngRedux.dispatch(this.actions.setPlayersSelection(playerSelection));
  }

  setPlayersWin(player) {
    this.ngRedux.dispatch(this.actions.setPlayersWin(player));
  }

  toggleGameState(state) {
    this.ngRedux.dispatch(this.actions.toggleGameState(state));
  }
}
