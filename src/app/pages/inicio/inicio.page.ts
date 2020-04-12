import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
  {
    icone: 'heart-outline',
    nome: 'Alerta',
    link: '/alert'
  },

  {
    icone: 'moon-outline',
    nome: 'Abas',
    link: '/action-sheet'
  },

  {
    icone: 'card',
    nome: 'Cards',
    link: '/cards'
  },
];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
    icone: string;
    nome: string;
    link: string;
    
}