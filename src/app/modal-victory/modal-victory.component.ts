import { Component } from '@angular/core';

import { select } from '@angular-redux/store';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-victory',
  templateUrl: './modal-victory.component.html',
  styleUrls: ['./modal-victory.component.sass']
})
export class ModalVictoryComponent {
  @select(['player', 'name']) readonly playerName$: Observable<string>;
}
