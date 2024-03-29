import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.css']
})

export class InputNameComponent implements OnInit {

  inputData = {
    type: "text",
    label: "Testando", //label
    name: "Hello", // name do input
    required: true, // validação
    placeHolder: "teste", //placeholder
    matIconName: "sentiment_very_satisfied", //tem icone?
    matIconPos: "prefix", //posição do icone: 
    pattern: /^[\wÀ-ú]+(\s[\wÀ-ú]+){1,10}/, //padrão recomendado para nomes compostos: ^[\wÀ-ú]+(\s[\wÀ-ú]+){1,10}
  }

  outData = {
    value: ""
  }

  @Output() digited = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  userDigit(event: KeyboardEvent) {
    console.log(this.outData.value);
    this.digited.emit(this.outData.value)
  }
}