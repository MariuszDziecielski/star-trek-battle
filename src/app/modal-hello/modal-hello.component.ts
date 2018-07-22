import { Component, OnInit } from '@angular/core';

import { NgRedux } from '@angular-redux/store';

import { GameActions } from '../app.actions';
import { GameState } from '../game-state';

@Component({
  selector: 'app-modal-hello',
  templateUrl: './modal-hello.component.html',
  styleUrls: ['./modal-hello.component.sass']
})
export class ModalHelloComponent implements OnInit {
  constructor(
    private actions: GameActions,
    private ngRedux: NgRedux<GameState>,
  ) { }

  ngOnInit() {
    if ($(window).width() < 480) {
      this.setDefaultPlayersState();
    }
  }

  openGetNameModal(): void {
    this.setDefaultPlayersState(false);

    if ($(window).width() < 480) {
      this.setDefaultPlayersState();
    }

    $('#js-openModalGetNameButton').click();
  }

  setDefaultPlayersState(mobile = true) {
    this.ngRedux.dispatch(this.actions.setDefaultPlayersState(mobile));
  }
}
