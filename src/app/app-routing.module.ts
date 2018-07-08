import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewGameComponent } from './new-game/new-game.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-new-game', pathMatch: 'full' },
  { path: 'app-new-game', component: NewGameComponent },
  { path: 'app-player-selection', component: PlayerSelectionComponent },
  { path: '**', redirectTo: '/app-new-game', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
