import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private computer: BehaviorSubject<Player>;
  private player: BehaviorSubject<Player>;

  constructor() {
    this.computer = new BehaviorSubject<Player>(
      {
        name: 'Enterprise',
        selection: 'Wybór komputera',
      }
    );
    this.player = new BehaviorSubject<Player>(
      {
        name: 'Spock',
        selection: 'Wybór gracza',
      }
    );
  }

  getComputer$(): Observable<Player> {
    return this.computer.asObservable();
  }

  getPlayer$(): Observable<Player> {
    return this.player.asObservable();
  }

  setComputer(newComputer: Player): void {
    this.computer.next(newComputer);
  }

  setPlayer(newPlayer: Player): void {
    this.player.next(newPlayer);
  }

}
