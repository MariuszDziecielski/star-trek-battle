import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHelloComponent } from './modal-hello.component';

describe('ModalHelloComponent', () => {
  let component: ModalHelloComponent;
  let fixture: ComponentFixture<ModalHelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
