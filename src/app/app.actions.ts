import { Injectable } from '@angular/core';

import { AnyAction } from 'redux';

@Injectable()
export class GameActions {
  static SET_DEFAULT_PLAYERS_STATE = 'SET_DEFAULT_PLAYERS_STATE';
  static SET_PLAYER_NAME = 'SET_PLAYER_NAME';
  static SET_PLAYERS_RESULT = 'SET_PLAYERS_RESULT';
  static SET_PLAYERS_SELECTION = 'SET_PLAYERS_SELECTION';
  static SET_PLAYERS_WIN = 'SET_PLAYERS_WIN';
  static TOGGLE_GAME_STATE = 'TOGGLE_GAME_STATE';

  setDefaultPlayersState(mobile: boolean): AnyAction {
    return {
      type: GameActions.SET_DEFAULT_PLAYERS_STATE,
      mobile
    };
  }

  setPlayerName(name: string): AnyAction {
    return {
      type: GameActions.SET_PLAYER_NAME,
      name
    };
  }

  setPlayersResult(draw: boolean): AnyAction {
    return {
      type: GameActions.SET_PLAYERS_RESULT,
      draw
    };
  }

  setPlayersSelection(playerSelection: string): AnyAction {
    return {
      type: GameActions.SET_PLAYERS_SELECTION,
      playerSelection
    };
  }

  setPlayersWin(player: boolean): AnyAction {
    return {
      type: GameActions.SET_PLAYERS_WIN,
      player
    };
  }

  toggleGameState(state: string): AnyAction {
    return {
      type: GameActions.TOGGLE_GAME_STATE,
      state
    };
  }

}

