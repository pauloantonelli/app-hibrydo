import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PaoCenouraPage } from '../pao-cenoura/pao-cenoura';
import { PaoBeterrabaPage } from '../pao-beterraba/pao-beterraba';
import { PaoCaseiroPage } from '../pao-caseiro/pao-caseiro';
import { PaoFormaTradicionalPage } from '../pao-forma-tradicional/pao-forma-tradicional';
import { PaoMacaPage } from '../pao-maca/pao-maca';
import { PaoIntegralPage } from '../pao-integral/pao-integral';
import { PaoBatataCatupiryPage } from '../pao-batata-catupiry/pao-batata-catupiry';
import { PaoErvasPage } from '../pao-ervas/pao-ervas';
import { PaoFubaRecheadoGoiabadaPage } from '../pao-fuba-recheado-goiabada/pao-fuba-recheado-goiabada';
import { PaoMandiocaPage } from '../pao-mandioca/pao-mandioca';
import { RoscaEstrelaPage } from '../rosca-estrela/rosca-estrela';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public pg = [PaoCenouraPage,
    PaoBeterrabaPage,
    PaoCaseiroPage,
    PaoFormaTradicionalPage,
    PaoMacaPage,
    PaoIntegralPage,
    PaoBatataCatupiryPage,
    PaoErvasPage,
    PaoFubaRecheadoGoiabadaPage,
    PaoMandiocaPage,
    RoscaEstrelaPage
    ];
    public pgNome = ['Pao de Cenoura',
    'Pao de Beterraba',
    'Pao Caseiro',
    'Pao de Forma Tradicional',
    'Pao de Maca',
    'Pao Integral',
    'Pao de Batata Catupiry',
    'Pao de Ervas',
    'Pao de Fuba Recheado',
    'Pao de Mandioca',
    'Rosca Estrela'
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
    'assets/imgs/rosca-estrela.jpg'
    ];
  constructor(public navCtrl: NavController) {

  }
  gotoPage(pg:string){
    this.navCtrl.push(pg);
  }

}
