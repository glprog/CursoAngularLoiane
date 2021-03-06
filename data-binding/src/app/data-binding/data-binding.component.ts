import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular : boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/nature/';
  valorAtual = '';
  valorSalvo = '';
  isMouseOver : boolean = false;
  nomeDoCurso: string = 'Angular';
  valorInicial: number = 15;
  
  constructor() { }

  getValor() {
    return 10;
  }

  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    //console.log((<HTMLInputElement> evento.target).value);
    this.valorAtual = (<HTMLInputElement> evento.target).value;
  }
  
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  ngOnInit() {
  }

}
