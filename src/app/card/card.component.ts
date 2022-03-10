import { Component, Input, Output, EventEmitter } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  titulo: string = ''

  @Input()
  subtitulo: string = ''

  @Input()
  storage: string = ''

  @Input()
  users: string = ''

  @Input()
  send: string = ''

  @Input()
  plano: string = 'card'

  @Output()
  btnClickEvent: EventEmitter<any> = new EventEmitter<any>()

  emitirEvento(): void {
    this.btnClickEvent.emit()
  }

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
