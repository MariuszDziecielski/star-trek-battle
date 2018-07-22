import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';

import { INITIAL_STATE, rootReducer } from '../store';
import { GameActions } from './app.actions';
import { GameState } from './game-state';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameIntroductionComponent } from './game-introduction/game-introduction.component';
import { ModalDefeatComponent } from './modal-defeat/modal-defeat.component';
import { ModalGetNameComponent } from './modal-get-name/modal-get-name.component';
import { ModalHelloComponent } from './modal-hello/modal-hello.component';
import { ModalVictoryComponent } from './modal-victory/modal-victory.component';
import { NewGameComponent } from './new-game/new-game.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { ResultsTableComponent } from './results-table/results-table.component';

@NgModule({
  declarations: [
    AppComponent,
    GameIntroductionComponent,
    ModalDefeatComponent,
    ModalGetNameComponent,
    ModalHelloComponent,
    ModalVictoryComponent,
    NewGameComponent,
    PlayerSelectionComponent,
    ResultsTableComponent
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgReduxModule
  ],

  providers: [
    GameActions
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    devTools: DevToolsExtension,
    ngRedux: NgRedux<GameState>
  ) {
    const storeEnhancers = devTools.isEnabled() ? [devTools.enhancer()] : [];
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [],
      storeEnhancers
    );
  }
}
