import { AnyAction } from 'redux';

import { GameActions } from './app/app.actions';
import { GameState } from './app/game-state';

export const INITIAL_STATE: GameState = {
    computer: {
        name: 'Enterprise',
        points: 0,
        result: 'Wynik komputera',
        selection: 'Wybór komputera'
    },

    game: {
        first: true,
        started: false
    },

    player: {
        name: 'Spock',
        points: 0,
        result: 'Wynik gracza',
        selection: 'Wybór gracza'
    }
};

export function rootReducer(lastState: GameState, action: AnyAction): GameState {
    const possiblePicks: string[] = ['Klingon', 'Romulanin', 'Kardasjanin'];

    switch (action.type) {
        case GameActions.SET_DEFAULT_PLAYERS_STATE: return Object.assign(
            {}, lastState, {
                computer: {
                    name: 'Enterprise',
                    points: 0,
                    result: action.mobile ? 'Wynik' : 'Wynik komputera',
                    selection: action.mobile ? 'Wybór' : 'Wybór komputera'
                },

                player: {
                    name: 'Spock',
                    points: 0,
                    result: action.mobile ? 'Wynik' : 'Wynik gracza',
                    selection: action.mobile ? 'Wybór' : 'Wybór gracza',
                }
            }
        );

        case GameActions.SET_PLAYER_NAME: return Object.assign(
            {}, lastState, {
                player: Object.assign(
                    {}, lastState.player, {
                        name: action.name
                    }
                ),
            }
        );

        case GameActions.SET_PLAYERS_RESULT: return Object.assign(
            {}, lastState, {
                computer: Object.assign(
                    {}, lastState.computer, {
                        result: action.draw ? 'Remis!' : ''
                    }
                ),

                player: Object.assign(
                    {}, lastState.player, {
                        result: action.draw ? 'Remis!' : ''
                    }
                )
            }
        );

        case GameActions.SET_PLAYERS_SELECTION: return Object.assign(
            {}, lastState, {
                computer: Object.assign(
                    {}, lastState.computer, {
                        selection: possiblePicks[Math.floor(Math.random() * 3)]
                    }
                ),

                player: Object.assign(
                    {}, lastState.player, {
                        selection: action.playerSelection
                    }
                ),
            }
        );

        case GameActions.SET_PLAYERS_WIN: return Object.assign(
            {}, lastState, {
                computer: Object.assign(
                    {}, lastState.computer, {
                        points: action.player ? lastState.computer.points : lastState.computer.points + 1,
                        result: action.player ? '' : 'Wygrana!'
                    }
                ),

                player: Object.assign(
                    {}, lastState.player, {
                        points: action.player ? lastState.player.points + 1 : lastState.player.points,
                        result: action.player ? 'Wygrana!' : ''
                    }
                ),
            }
        );

        case GameActions.TOGGLE_GAME_STATE: return Object.assign(
            {}, lastState, {
                game: {
                    first: action.state === 'started' ? lastState.game.first : !lastState.game.first,
                    started: action.state === 'started' ? !lastState.game.started : lastState.game.started,
                },
            }
        );

    }
    return lastState;
}
