import { Injectable } from '@angular/core';

import { Action } from 'redux';

@Injectable()
export class GameActions {
  static TOGGLE_GAME_STARTED_STATE = 'TOGGLE_GAME_STARTED_STATE';
  static TOGGLE_FIRST_GAME_STATE = 'TOGGLE_FIRST_GAME_STATE';
  static SET_DEFAULT_PLAYERS_STATE_ON_MOBILE = 'SET_DEFAULT_PLAYERS_STATE_ON_MOBILE';
  static SET_DEFAULT_PLAYERS_STATE = 'SET_DEFAULT_PLAYERS_STATE';
  static SET_DRAW = 'SET_DRAW';
  static SET_COMPUTER_WIN = 'SET_COMPUTER_WIN';
  static SET_PLAYER_WIN = 'SET_PLAYER_WIN';
  static CLEAN_PLAYERS_RESULT = 'CLEAN_PLAYERS_RESULT';
  static COMPUTER_POINTS_INCREMENT = 'COMPUTER_POINTS_INCREMENT';
  static PLAYER_POINTS_INCREMENT = 'PLAYER_POINTS_INCREMENT';
  static SET_COMPUTER_SELECTION = 'SET_COMPUTER_SELECTION';
  static SET_KLINGON_SELECTION = 'SET_KLINGON_SELECTION';
  static SET_ROMULANIN_SELECTION = 'SET_ROMULANIN_SELECTION';
  static SET_KARDASJANIN_SELECTION = 'SET_KARDASJANIN_SELECTION';

  toggleGameStartedState(): Action {
    return { type: GameActions.TOGGLE_GAME_STARTED_STATE };
  }

  toggleFirstGameState(): Action {
    return { type: GameActions.TOGGLE_FIRST_GAME_STATE };
  }

  setDefaultPlayersStateOnMobile(): Action {
    return { type: GameActions.SET_DEFAULT_PLAYERS_STATE_ON_MOBILE };
  }

  setDefaultPlayersState(): Action {
    return { type: GameActions.SET_DEFAULT_PLAYERS_STATE };
  }

  setDraw(): Action {
    return { type: GameActions.SET_DRAW };
  }

  setComputerWin(): Action {
    return { type: GameActions.SET_COMPUTER_WIN };
  }

  setPlayerWin(): Action {
    return { type: GameActions.SET_PLAYER_WIN };
  }

  cleanPlayersResult(): Action {
    return { type: GameActions.CLEAN_PLAYERS_RESULT };
  }

  computerPointsIncrement(): Action {
    return { type: GameActions.COMPUTER_POINTS_INCREMENT };
  }

  playerPointsIncrement(): Action {
    return { type: GameActions.PLAYER_POINTS_INCREMENT };
  }

  setComputerSelection(): Action {
    return { type: GameActions.SET_COMPUTER_SELECTION };
  }

  setKlingonSelection(): Action {
    return { type: GameActions.SET_KLINGON_SELECTION };
  }

  setRomulaninSelection(): Action {
    return { type: GameActions.SET_ROMULANIN_SELECTION };
  }

  setKardasjaninSelection(): Action {
    return { type: GameActions.SET_KARDASJANIN_SELECTION };
  }

}

