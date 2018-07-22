import { Component } from '@angular/core';

import { select } from '@angular-redux/store';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-defeat',
  templateUrl: './modal-defeat.component.html',
  styleUrls: ['./modal-defeat.component.sass']
})
export class ModalDefeatComponent {
  @select(['player', 'name']) readonly playerName$: Observable<string>;
}
