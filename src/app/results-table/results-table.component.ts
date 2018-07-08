import { Component, OnInit } from '@angular/core';

import { GameStateService } from '../game-state.service';
import { Player } from '../player';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.sass']
})
export class ResultsTableComponent implements OnInit {

  get computer(): Player {
    return this._computer;
  }

  set computer(computer: Player) {
    if (computer) {
      this._computer = computer;
    }
    if (!(this.player.selection === 'Wybór gracza') && !(this.player.selection === 'Wybór')) {
      this.checkRoundWinner(this.player.selection, this.computer.selection);
    }
  }

  computerPoints = 0;
  computerResult = 'Wynik komputera';
  gameStarted: boolean;

  get player(): Player {
    return this._player;
  }

  set player(player: Player) {
    if (player) {
      this._player = player;
    }
  }

  playerPoints = 0;
  playerResult = 'Wynik gracza';

  private _computer: Player;
  private _player: Player;

  constructor(
    private players: PlayersService,
    private state: GameStateService
  ) {
    this.state.getGameStartedState$().subscribe(newGameStartedState => this.gameStarted = newGameStartedState);
    this.players.getPlayer$().subscribe(newPlayer => this.player = newPlayer);
    this.players.getComputer$().subscribe(newComputer => this.computer = newComputer);
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

  checkRoundWinner(playerPick: string, computerPick: string): void {
    this.playerResult = this.computerResult = '';
    let winnerIs = 'player';
    if (playerPick === computerPick) {
      winnerIs = 'none';
    } else if (
      (computerPick === 'Klingon' && playerPick === 'Kardasjanin') ||
      (computerPick === 'Kardasjanin' && playerPick === 'Romulanin') ||
      (computerPick === 'Romulanin' && playerPick === 'Klingon')) {
      winnerIs = 'computer';
    }
    if (winnerIs === 'player') {
      this.playerResult = 'Wygrana!';
      this.playerPoints++;
    } else if (winnerIs === 'computer') {
      this.computerResult = 'Wygrana!';
      this.computerPoints++;
    } else {
      this.playerResult = 'Remis!';
      this.computerResult = 'Remis!';
    }
    this.checkGameState();
  }

  ngOnInit() {
    if ($(window).width() < 480) {
      this.setDefaultGameElements('Wynik', 'Wynik', 'Wybór', 'Wybór');
    }
  }

  setDefaultGameElements(playerResult = 'Wynik gracza', computerResult = 'Wynik komputera',
    playerSelection = 'Wybór gracza', computerSelection = 'Wybór komputera'): void {
    this.playerResult = playerResult;
    this.computerResult = computerResult;

    this.players.setPlayer(
      Object.assign(this.player,
        { selection: playerSelection }
      )
    );

    this.players.setComputer(
      Object.assign(this.computer,
        { selection: computerSelection }
      )
    );
  }

  setGameElements(): void {
    this.state.setFirstGameState(false);
    this.playerPoints = 0;
    this.computerPoints = 0;
    this.setDefaultGameElements();

    if ($(window).width() < 480) {
      this.setDefaultGameElements('Wynik', 'Wynik', 'Wybór', 'Wybór');
    }
  }

}
