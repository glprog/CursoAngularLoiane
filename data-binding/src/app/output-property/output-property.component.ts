import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoInputValor: ElementRef;
  
  incrementa() {
    //console.log(this.campoInputValor.nativeElement.value);
    //this.valor++;
    this.campoInputValor.nativeElement.value++;
    this.mudouValor.emit({novoValor: this.campoInputValor.nativeElement.value});
  }

  decrementa() {
    //this.valor--;
    this.campoInputValor.nativeElement.value--;
    this.mudouValor.emit({novoValor: this.campoInputValor.nativeElement.value});
  }

  constructor() { }

  ngOnInit() {
  }

}
