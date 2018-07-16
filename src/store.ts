import { Action } from 'redux';

import { GameActions } from './app/app.actions';
import { GameState } from './app/game-state';

export const INITIAL_STATE: GameState = {
    game: {
        started: false,
        first: true
    },
    computer: {
        name: 'Enterprise',
        selection: 'Wybór komputera',
        result: 'Wynik komputera',
        points: 0
    },
    player: {
        name: 'Spock',
        selection: 'Wybór gracza',
        result: 'Wynik gracza',
        points: 0
    }
};

export function rootReducer(lastState: GameState, action: Action): GameState {
    const possiblePicks: string[] = ['Klingon', 'Romulanin', 'Kardasjanin'];

    switch (action.type) {
        case GameActions.TOGGLE_GAME_STARTED_STATE: return Object.assign(
            {}, lastState, {
                game: {
                    started: !lastState.game.started,
                    first: lastState.game.first
                },
            }
        );

        case GameActions.TOGGLE_FIRST_GAME_STATE: return Object.assign(
            {}, lastState, {
                game: {
                    started: lastState.game.started,
                    first: !lastState.game.first
                },
            }
        );

        case GameActions.COMPUTER_POINTS_INCREMENT: return Object.assign(
            {}, lastState, {
                computer: {
                    name: lastState.computer.name,
                    selection: lastState.computer.selection,
                    result: lastState.computer.result,
                    points: lastState.computer.points + 1
                }
            }
        );

        case GameActions.PLAYER_POINTS_INCREMENT: return Object.assign(
            {}, lastState, {
                player: {
                    name: lastState.player.name,
                    selection: lastState.player.selection,
                    result: lastState.player.result,
                    points: lastState.player.points + 1
                }
            }
        );

        case GameActions.SET_COMPUTER_SELECTION: return Object.assign(
            {}, lastState, {
                computer: {
                    name: lastState.computer.name,
                    selection: possiblePicks[Math.floor(Math.random() * 3)],
                    result: lastState.computer.result,
                    points: lastState.computer.points
                }
            }
        );

        case GameActions.SET_KLINGON_SELECTION: return Object.assign(
            {}, lastState, {
                player: {
                    name: lastState.player.name,
                    selection: 'Klingon',
                    result: lastState.player.result,
                    points: lastState.player.points
                }
            }
        );

        case GameActions.SET_ROMULANIN_SELECTION: return Object.assign(
            {}, lastState, {
                player: {
                    name: lastState.player.name,
                    selection: 'Romulanin',
                    result: lastState.player.result,
                    points: lastState.player.points
                }
            }
        );

        case GameActions.SET_KARDASJANIN_SELECTION: return Object.assign(
            {}, lastState, {
                player: {
                    name: lastState.player.name,
                    selection: 'Kardasjanin',
                    result: lastState.player.result,
                    points: lastState.player.points
                }
            }
        );

        case GameActions.CLEAN_PLAYERS_RESULT: return Object.assign(
            {}, lastState, {
                computer: {
                    name: lastState.computer.name,
                    selection: lastState.computer.selection,
                    result: '',
                    points: lastState.computer.points
                },
                player: {
                    name: lastState.player.name,
                    selection: lastState.player.selection,
                    result: '',
                    points: lastState.player.points
                }
            }
        );

        case GameActions.SET_PLAYER_WIN: return Object.assign(
            {}, lastState, {
                player: {
                    name: lastState.player.name,
                    selection: lastState.player.selection,
                    result: 'Wygrana!',
                    points: lastState.player.points
                }
            }
        );

        case GameActions.SET_COMPUTER_WIN: return Object.assign(
            {}, lastState, {
                computer: {
                    name: lastState.computer.name,
                    selection: lastState.computer.selection,
                    result: 'Wygrana!',
                    points: lastState.computer.points
                }
            }
        );

        case GameActions.SET_DRAW: return Object.assign(
            {}, lastState, {
                computer: {
                    name: lastState.computer.name,
                    selection: lastState.computer.selection,
                    result: 'Remis!',
                    points: lastState.computer.points
                },
                player: {
                    name: lastState.player.name,
                    selection: lastState.player.selection,
                    result: 'Remis!',
                    points: lastState.player.points
                }
            }
        );

        case GameActions.SET_DEFAULT_PLAYERS_STATE: return Object.assign(
            {}, lastState, {
                computer: {
                    name: 'Enterprise',
                    selection: 'Wybór komputera',
                    result: 'Wynik komputera',
                    points: 0
                },
                player: {
                    name: 'Spock',
                    selection: 'Wybór gracza',
                    result: 'Wynik gracza',
                    points: 0
                }
            }
        );

        case GameActions.SET_DEFAULT_PLAYERS_STATE_ON_MOBILE: return Object.assign(
            {}, lastState, {
                computer: {
                    name: 'Enterprise',
                    selection: 'Wybór',
                    result: 'Wynik',
                    points: 0
                },
                player: {
                    name: 'Spock',
                    selection: 'Wybór',
                    result: 'Wynik',
                    points: 0
                }
            }
        );

    }
    return lastState;
}
