import { Component, OnInit, OnDestroy } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { Subscription } from 'rxjs';

import { GameState } from '../game-state';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.sass']
})
export class ResultsTableComponent implements OnInit, OnDestroy {
  computer: Player;
  computerPoints: number;
  computerPointsSubscription: Subscription;
  computerResult: string;
  computerResultSubscription: Subscription;
  computerSelection: string;
  computerSelectionSubscription: Subscription;
  computerSubscription: Subscription;
  gameStarted: boolean;
  gameStartedSubscription: Subscription;
  kardasjanSelectionSubscription: Subscription;
  klingonSelectionSubscription: Subscription;
  player: Player;
  playerPoints: number;
  playerPointsSubscription: Subscription;
  playerResult: string;
  playerResultSubscription: Subscription;
  playerSelection: string;
  playerSubscription: Subscription;
  romulaninSelectionSubscription: Subscription;

  constructor(
    private ngRedux: NgRedux<GameState>,
    private players: PlayersService
  ) {
    this.computerPointsSubscription = this.ngRedux.select<number>(['computer', 'points'])
      .subscribe(newComputerPoints => this.computerPoints = newComputerPoints);

    this.computerResultSubscription = this.ngRedux.select<string>(['computer', 'result'])
      .subscribe(newComputerResult => this.computerResult = newComputerResult);

    this.computerSelectionSubscription = this.ngRedux.select<string>(['computer', 'selection'])
      .subscribe(newComputerSelection => this.computerSelection = newComputerSelection);

    this.computerSubscription = this.players.getComputer$().subscribe(newPlayer => this.computer = newPlayer);

    this.gameStartedSubscription = this.ngRedux.select<boolean>(['game', 'started'])
      .subscribe(newGameStartedState => this.gameStarted = newGameStartedState);

    this.kardasjanSelectionSubscription = this.ngRedux.select<string>(['player', 'selection'])
      .subscribe(newPlayerSelection => this.playerSelection = newPlayerSelection);

    this.klingonSelectionSubscription = this.ngRedux.select<string>(['player', 'selection'])
      .subscribe(newPlayerSelection => this.playerSelection = newPlayerSelection);

    this.playerPointsSubscription = this.ngRedux.select<number>(['player', 'points'])
      .subscribe(newPlayerPoints => this.playerPoints = newPlayerPoints);

    this.playerResultSubscription = this.ngRedux.select<string>(['player', 'result'])
      .subscribe(newPlayerResult => this.playerResult = newPlayerResult);

    this.playerSubscription = this.players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);

    this.romulaninSelectionSubscription = this.ngRedux.select<string>(['player', 'selection'])
      .subscribe(newPlayerSelection => this.playerSelection = newPlayerSelection);

  }

  ngOnDestroy() {
    this.computerPointsSubscription.unsubscribe();
    this.computerResultSubscription.unsubscribe();
    this.computerSelectionSubscription.unsubscribe();
    this.computerSubscription.unsubscribe();
    this.gameStartedSubscription.unsubscribe();
    this.kardasjanSelectionSubscription.unsubscribe();
    this.klingonSelectionSubscription.unsubscribe();
    this.playerPointsSubscription.unsubscribe();
    this.playerResultSubscription.unsubscribe();
    this.playerSubscription.unsubscribe();
    this.romulaninSelectionSubscription.unsubscribe();
  }

  ngOnInit() { }
}
