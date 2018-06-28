import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDefeatComponent } from './modal-defeat.component';

describe('ModalDefeatComponent', () => {
  let component: ModalDefeatComponent;
  let fixture: ComponentFixture<ModalDefeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDefeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDefeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
