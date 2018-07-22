import { Component } from '@angular/core';

import { select } from '@angular-redux/store';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-results-table',
  templateUrl: './results-table.component.html',
  styleUrls: ['./results-table.component.sass']
})
export class ResultsTableComponent {
  @select(['computer', 'name']) readonly computerName$: Observable<string>;
  @select(['computer', 'points']) readonly computerPoints$: Observable<number>;
  @select(['computer', 'result']) readonly computerResult$: Observable<string>;
  @select(['computer', 'selection']) readonly computerSelection$: Observable<string>;

  @select(['game', 'started']) readonly gameStarted$: Observable<boolean>;

  @select(['player', 'name']) readonly playerName$: Observable<string>;
  @select(['player', 'points']) readonly playerPoints$: Observable<number>;
  @select(['player', 'result']) readonly playerResult$: Observable<string>;
  @select(['player', 'selection']) readonly playerSelection$: Observable<string>;
}
