import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { Subscription } from 'rxjs';

import { GameActions } from '../app.actions';
import { GameState } from '../game-state';

@Component({
  selector: 'app-player-selection',
  templateUrl: './player-selection.component.html',
  styleUrls: ['./player-selection.component.sass']
})
export class PlayerSelectionComponent implements OnInit, OnDestroy {
  computerPoints: number;
  computerPointsSubscription: Subscription;
  computerSelection: string;
  computerSelectionSubscription: Subscription;
  kardasjanSelectionSubscription: Subscription;
  klingonSelectionSubscription: Subscription;
  playerPoints: number;
  playerPointsSubscription: Subscription;
  playerSelection: string;
  romulaninSelectionSubscription: Subscription;

  constructor(
    private actions: GameActions,
    private ngRedux: NgRedux<GameState>
  ) {
    this.computerPointsSubscription = this.ngRedux.select<number>(['computer', 'points'])
      .subscribe(newComputerPoints => this.computerPoints = newComputerPoints);

    this.computerSelectionSubscription = this.ngRedux.select<string>(['computer', 'selection'])
      .subscribe(newComputerSelection => this.computerSelection = newComputerSelection);

    this.kardasjanSelectionSubscription = this.ngRedux.select<string>(['player', 'selection'])
      .subscribe(newPlayerSelection => this.playerSelection = newPlayerSelection);

    this.klingonSelectionSubscription = this.ngRedux.select<string>(['player', 'selection'])
      .subscribe(newPlayerSelection => this.playerSelection = newPlayerSelection);

    this.playerPointsSubscription = this.ngRedux.select<number>(['player', 'points'])
      .subscribe(newPlayerPoints => this.playerPoints = newPlayerPoints);

    this.romulaninSelectionSubscription = this.ngRedux.select<string>(['player', 'selection'])
      .subscribe(newPlayerSelection => this.playerSelection = newPlayerSelection);
  }

  ngOnInit() {
    this.toggleGameStartedState();
    if ($(window).width() < 480) {
      this.setDefaultPlayersStateOnMobile();
    }
  }

  ngOnDestroy() {
    this.toggleGameStartedState();
    this.computerPointsSubscription.unsubscribe();
    this.computerSelectionSubscription.unsubscribe();
    this.kardasjanSelectionSubscription.unsubscribe();
    this.klingonSelectionSubscription.unsubscribe();
    this.playerPointsSubscription.unsubscribe();
    this.romulaninSelectionSubscription.unsubscribe();
  }

  checkGameState(): void {
    if (this.playerPoints === 10) {
      $('#js-openModalVictoryButton').click();
      this.setGameElements();
    }

    if (this.computerPoints === 10) {
      $('#js-openModalDefeatButton').click();
      this.setGameElements();
    }
  }

  checkRoundWinner(playerSelection: string, computerSelection: string): void {
    this.cleanPlayersResult();
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
      this.setPlayerWin();
      this.playerPointsIncrement();
    } else if (winnerIs === 'computer') {
      this.setComputerWin();
      this.computerPointsIncrement();
    } else {
      this.setDraw();
    }
    this.checkGameState();
  }

  cleanPlayersResult() {
    this.ngRedux.dispatch(this.actions.cleanPlayersResult());
  }

  computerPointsIncrement() {
    this.ngRedux.dispatch(this.actions.computerPointsIncrement());
  }

  playerPointsIncrement() {
    this.ngRedux.dispatch(this.actions.playerPointsIncrement());
  }

  setComputerSelection() {
    this.ngRedux.dispatch(this.actions.setComputerSelection());
  }

  setComputerWin() {
    this.ngRedux.dispatch(this.actions.setComputerWin());
  }

  setDefaultPlayersState() {
    this.ngRedux.dispatch(this.actions.setDefaultPlayersState());
  }

  setDefaultPlayersStateOnMobile() {
    this.ngRedux.dispatch(this.actions.setDefaultPlayersStateOnMobile());
  }

  setDraw() {
    this.ngRedux.dispatch(this.actions.setDraw());
  }

  setKardasjaninSelection() {
    this.ngRedux.dispatch(this.actions.setKardasjaninSelection());
  }

  setKlingonSelection() {
    this.ngRedux.dispatch(this.actions.setKlingonSelection());
  }

  setGameElements(): void {
    this.toggleFirstGameState();
    this.setDefaultPlayersState();

    if ($(window).width() < 480) {
      this.setDefaultPlayersStateOnMobile();
    }
  }

  setPlayersPick(selection): void {
    switch (selection) {
      case 'Klingon': {
        this.setKlingonSelection();
        break;
      }
      case 'Romulanin': {
        this.setRomulaninSelection();
        break;
      }
      case 'Kardasjanin': {
        this.setKardasjaninSelection();
        break;
      }
    }
    this.setComputerSelection();

    if (!(this.playerSelection === 'Wybór gracza') && !(this.playerSelection === 'Wybór') &&
      !(this.computerSelection === 'Wybór komputera') && !(this.computerSelection === 'Wybór')
    ) {
      this.checkRoundWinner(this.playerSelection, this.computerSelection);
    }
  }

  setPlayerWin() {
    this.ngRedux.dispatch(this.actions.setPlayerWin());
  }

  setRomulaninSelection() {
    this.ngRedux.dispatch(this.actions.setRomulaninSelection());
  }

  toggleFirstGameState() {
    this.ngRedux.dispatch(this.actions.toggleFirstGameState());
  }

  toggleGameStartedState() {
    this.ngRedux.dispatch(this.actions.toggleGameStartedState());
  }
}
