import { Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';

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
  @ViewChild('kardasjaninButton')
  private kardasjaninButton: ElementRef;
  @ViewChild('klingonButton')
  private klingonButton: ElementRef;
  @ViewChild('romulaninButton')
  private romulaninButton: ElementRef;

  computer: Player = {
    points: null,
    selection: null
  };

  gameInterfaceElementsSubscriptions = new Subscription();

  listenToKlingonButtonClick: any;
  listenToRomulaninButtonClick: any;
  listenToKardasjanButtonClick: any;

  player: Player = {
    points: null,
    selection: null
  };

  constructor(
    private actions: GameActions,
    private ngRedux: NgRedux<GameState>,
    private renderer: Renderer2
  ) {
    this.gameInterfaceElementsSubscriptions.add(this.ngRedux.select<number>(['computer', 'points'])
      .subscribe(newComputerPoints => this.computer.points = newComputerPoints));

    this.gameInterfaceElementsSubscriptions.add(this.ngRedux.select<string>(['computer', 'selection'])
      .subscribe(newComputerSelection => this.computer.selection = newComputerSelection));

    this.gameInterfaceElementsSubscriptions.add(this.ngRedux.select<number>(['player', 'points'])
      .subscribe(newPlayerPoints => this.player.points = newPlayerPoints));

    this.gameInterfaceElementsSubscriptions.add(this.ngRedux.select<string>(['player', 'selection'])
      .subscribe(newPlayerSelection => this.player.selection = newPlayerSelection));
  }

  ngOnDestroy() {
    this.gameInterfaceElementsSubscriptions.unsubscribe();
    this.toggleGameState('started');
  }

  ngOnInit() {
    this.addPlayerPickButtonsHandler();
    this.toggleGameState('started');
  }

  addPlayerPickButtonsHandler(): void {
    this.listenToKlingonButtonClick = this.renderer.listen(this.klingonButton.nativeElement, 'click', (evt) => {
      this.setPlayersPick(evt);
    });

    this.listenToRomulaninButtonClick = this.renderer.listen(this.romulaninButton.nativeElement, 'click', (evt) => {
      this.setPlayersPick(evt);
    });

    this.listenToKardasjanButtonClick = this.renderer.listen(this.kardasjaninButton.nativeElement, 'click', (evt) => {
      this.setPlayersPick(evt);
    });
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
    $('.js-playerShip, .js-computerShip').removeClass('pulse');
    let winnerIs = 'player';

    if (playerSelection === computerSelection) {
      winnerIs = 'none';
    } else if (
      (computerSelection === 'Klingon' && playerSelection === 'Kardasjanin') ||
      (computerSelection === 'Kardasjanin' && playerSelection === 'Romulanin') ||
      (computerSelection === 'Romulanin' && playerSelection === 'Klingon')) {
      winnerIs = 'computer';
    }

    switch (winnerIs) {
      case 'player':
        this.setPlayersWin(true);
        this.setPlayersShipsImages('_destroyed', '_damaged');
        this.setPlayersShipsImagesAnimation('player', '', 'zoomOutDown');
        break;

      case 'computer':
        this.setPlayersWin(false);
        this.setPlayersShipsImages('_damaged', '_destroyed');
        this.setPlayersShipsImagesAnimation('computer', 'zoomOutDown', '');
        break;

      case 'none':
        this.setPlayersResult();
        this.setPlayersShipsImages('_damaged', '_damaged');
        this.setPlayersShipsImagesAnimation('none', '', '');
    }

    this.checkGameState();
  }

  endGame(playerVictory: boolean): void {
    playerVictory ? $('#js-openModalVictoryButton').click() : $('#js-openModalDefeatButton').click();
    this.toggleGameState('first');
  }

  setPlayersShipsImages(computerShipSrcPart: string = '', playerShipSrcPart: string = ''): void {
    const playerSelectionToLowerCase: string = this.player.selection.toLowerCase();
    const computerSelectionToLowerCase: string = this.computer.selection.toLowerCase();
    $('.js-playerShip').attr('src', `assets/ships/${playerSelectionToLowerCase}_player${playerShipSrcPart}.png`);
    $('.js-computerShip').attr('src', `assets/ships/${computerSelectionToLowerCase}_computer${computerShipSrcPart}.png`);
  }

  setPlayerPickElementThumbnails(e: Event, index: number, logo: boolean): void {
    if (logo) {
      const logoFilesNames: string[] = ['logo_klingon', 'logo_romulan', 'logo_cardassian'];
      $(e.currentTarget).find('img').attr('src', `assets/${logoFilesNames[index]}.png`);
    } else {
      const shipsThumbnailsFilesNames: string[] = ['klingon_ship_thumbnail', 'romulanin_ship_thumbnail', 'cardassian_ship_thumbnail'];
      $(e.currentTarget).find('img').attr('src', `assets/ships/${shipsThumbnailsFilesNames[index]}.png`);
    }
  }

  setPlayersShipsImagesAnimation(winnerIs: string = '', playerShipClass: string = 'bounceInLeft',
    computerShipClass: string = 'bounceInRight'): void {
    if (playerShipClass) {
      $('.js-playerShip').addClass(playerShipClass);
    }

    if (computerShipClass) {
      $('.js-computerShip').addClass(computerShipClass);
    }

    if (winnerIs) {
      $('#js-resultsTableElement .row:nth-child(3) .col-xs-5').addClass('flash');

      if (playerShipClass) {
        $('#js-resultsTableElement .row:nth-child(1) .computer-info').addClass('flash');
      }

      if (computerShipClass) {
        $('#js-resultsTableElement .row:nth-child(1) .player-info').addClass('flash');
      }

      setTimeout(() => {
        if (computerShipClass) {
          $('.js-computerShip').removeClass(computerShipClass).attr('visibility', 'hidden');
        }

        if (playerShipClass) {
          $('.js-playerShip').removeClass(playerShipClass).attr('visibility', 'hidden');
        }

        $('#js-resultsTableElement .row:nth-child(3) .col-xs-5, #js-resultsTableElement .row:nth-child(1) .col-xs-5').removeClass('flash');
      }, 1700);
    } else {
      setTimeout(() => {
        $('.js-playerShip, .js-computerShip').removeClass(`${playerShipClass} ${computerShipClass}`).addClass('pulse');
      }, 1000);
    }
  }

  setPlayersPick(e: any): void {
    this.listenToKlingonButtonClick();
    this.listenToRomulaninButtonClick();
    this.listenToKardasjanButtonClick();

    $('#js-playerPickElement button').css('cursor', 'not-allowed');
    $('.js-playerShip, .js-computerShip').attr('visibility', 'visible');

    this.setPlayersResult(false);
    this.setPlayersSelection(e.currentTarget.classList[0]);

    if (!(this.player.selection === 'Wybór gracza') && !(this.player.selection === 'Wybór') &&
      !(this.computer.selection === 'Wybór komputera') && !(this.computer.selection === 'Wybór')
    ) {
      this.setPlayersShipsImages();
      this.setPlayersShipsImagesAnimation();

      setTimeout(() => {
        this.checkRoundWinner(this.player.selection, this.computer.selection);
      }, 2000);
    }

    setTimeout(() => {
      this.addPlayerPickButtonsHandler();
      $('#js-playerPickElement button').css('cursor', 'pointer');
    }, 3700);
  }

  setPlayersResult(draw: boolean = true): void {
    this.ngRedux.dispatch(this.actions.setPlayersResult(draw));
  }

  setPlayersSelection(playerSelection: string): void {
    this.ngRedux.dispatch(this.actions.setPlayersSelection(playerSelection));
  }

  setPlayersWin(player: boolean): void {
    this.ngRedux.dispatch(this.actions.setPlayersWin(player));
  }

  toggleGameState(state: string): void {
    this.ngRedux.dispatch(this.actions.toggleGameState(state));
  }
}
