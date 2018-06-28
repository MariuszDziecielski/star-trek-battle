import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private _player: BehaviorSubject<Player>;
  private _computer: BehaviorSubject<Player>;

  constructor() {
    this._player = new BehaviorSubject<Player>(
      {
        name: 'Spock',
        selection: 'Wybór gracza',
      }
    );
    this._computer = new BehaviorSubject<Player>(
      {
        name: 'Enterprise',
        selection: 'Wybór komputera',
      }
    );
  }

  public getPlayer$(): Observable<Player> {
    return this._player.asObservable();
  }

  public setPlayer(newPlayer: Player): void {
    this._player.next(newPlayer);
  }

  public getComputer$(): Observable<Player> {
    return this._computer.asObservable();
  }

  public setComputer(newComputer: Player): void {
    this._computer.next(newComputer);
  }

}
