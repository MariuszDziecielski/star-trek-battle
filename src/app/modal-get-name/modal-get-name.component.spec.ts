import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ModalGetNameComponent } from './modal-get-name.component';

describe('ModalGetNameComponent', () => {
  let component: ModalGetNameComponent;
  let fixture: ComponentFixture<ModalGetNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGetNameComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalGetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
