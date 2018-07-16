import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

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
      }
    );
    this.player = new BehaviorSubject<Player>(
      {
        name: 'Spock',
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
