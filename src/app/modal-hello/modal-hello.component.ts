import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-hello',
  templateUrl: './modal-hello.component.html',
  styleUrls: ['./modal-hello.component.sass']
})
export class ModalHelloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#js-openModalHelloButton').click();
  }

}
