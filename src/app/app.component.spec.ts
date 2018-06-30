import { TestBed, async } from '@angular/core/testing';
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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        FormsModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Star Trek Battle'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Star Trek Battle');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Witaj w grze Star Trek Battle!');
  }));
});
