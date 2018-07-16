import { Player } from './player';
import { Game } from './game';

export interface GameState {
    game: Game;
    computer: Player;
    player: Player;
}
