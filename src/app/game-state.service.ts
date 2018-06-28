import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {
  private _gameStarted: BehaviorSubject<boolean>;
  private _firstGame: BehaviorSubject<boolean>;

  constructor() {
    this._gameStarted = new BehaviorSubject<boolean>(false);
    this._firstGame = new BehaviorSubject<boolean>(true);
  }

  public getGameStartedState$(): Observable<boolean> {
    return this._gameStarted.asObservable();
  }

  public setGameStartedState(newGameStartedState: boolean): void {
    this._gameStarted.next(newGameStartedState);
  }

  public getFirstGameState$(): Observable<boolean> {
    return this._firstGame.asObservable();
  }

  public setFirstGameState(newFirstGameState: boolean): void {
    this._firstGame.next(newFirstGameState);
  }

}
