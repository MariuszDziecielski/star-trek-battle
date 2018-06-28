import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModalHelloComponent } from './modal-hello/modal-hello.component';
import { GameIntroductionComponent } from './game-introduction/game-introduction.component';
import { NewGameComponent } from './new-game/new-game.component';
import { ModalGetNameComponent } from './modal-get-name/modal-get-name.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { ResultsTableComponent } from './results-table/results-table.component';
import { ModalVictoryComponent } from './modal-victory/modal-victory.component';
import { ModalDefeatComponent } from './modal-defeat/modal-defeat.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalHelloComponent,
    GameIntroductionComponent,
    NewGameComponent,
    ModalGetNameComponent,
    PlayerSelectionComponent,
    ResultsTableComponent,
    ModalVictoryComponent,
    ModalDefeatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
