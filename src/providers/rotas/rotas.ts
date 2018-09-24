import { Injectable } from '@angular/core';

@Injectable()
export class RotasProvider {
    public pgNome = [
    'Pao de Cenoura',
    'Pao de Beterraba',
    'Pao Caseiro',
    'Pao de Forma Tradicional',
    'Pao de Maca',
    'Pao Integral',
    'Pao de Batata com Catupiry',
    'Pao de Ervas',
    'Pao de Fuba Recheado com Goiabada',
    'Pao de Mandioca',
    'Rosca Estrela',
    'Pao de Milho',
    'Beliscao de Goiabada',
    'Biscoito Amantegado',
    'Compras'
    ];
    public img = ['assets/imgs/pao-cenoura.jpg',
    'assets/imgs/pao-beterraba.jpg',
    'assets/imgs/pao-caseiro.jpg',
    'assets/imgs/pao-forma.jpg',
    'assets/imgs/pao-maca.jpg',
    'assets/imgs/pao-integral.jpg',
    'assets/imgs/pao-batata.jpg',
    'assets/imgs/pao-ervas.jpg',
    'assets/imgs/pao-fuba.jpg',
    'assets/imgs/pao-mandioca.jpg',
    'assets/imgs/rosca-estrela.jpg',
    'assets/imgs/pao-milho.jpg',
    'assets/imgs/beliscao-goiabada.jpg',
    'assets/imgs/biscoito-amanteigado.jpg'
    ];
    public compraIngrediente = [
    //kilos
    'farinha de Trigo',
    'farelo de Trigo',
    'aveia em Flocos Grossos',
    'acucar',
    'sal',
    'cenoura',
    'beterraba',
    'maca',
    'uva',
    'limao',
    'batata',
    'mandioca',
    'cebola',
    'alho',
    'fuba',
    'presunto',
    'mussarela',
    //gramas
    'cheiro Verde',
    'manjericao',
    'alecrim',
    'oregano',
    'erva Doce',
    'azeitona Verde',
    'coco Ralado',
    'canela em Po',
    'canela em Bastao',
    //litros
    'leite',
    'oleo',
    'leite de Coco',
    //unidades
    'ovos',
    'fermento Biologico',
    'fermento Quimico',
    'goiabada',
    'margarina',
    'requeijao Catupiry',
    'embalagem',
    'farinha Trigo Integral',
    'cebolinha'
    ];
  constructor() {
  }

}
