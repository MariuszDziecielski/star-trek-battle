import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private firstGame: BehaviorSubject<boolean>;
  private gameStarted: BehaviorSubject<boolean>;

  constructor() {
    this.firstGame = new BehaviorSubject<boolean>(true);
    this.gameStarted = new BehaviorSubject<boolean>(false);
  }

  getFirstGameState$(): Observable<boolean> {
    return this.firstGame.asObservable();
  }

  getGameStartedState$(): Observable<boolean> {
    return this.gameStarted.asObservable();
  }

  setFirstGameState(newFirstGameState: boolean): void {
    this.firstGame.next(newFirstGameState);
  }

  setGameStartedState(newGameStartedState: boolean): void {
    this.gameStarted.next(newGameStartedState);
  }

}
