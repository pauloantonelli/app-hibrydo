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
import { PaoMilhoPage } from '../pao-milho/pao-milho';
import { BeliscaoGoiabadaPage } from '../beliscao-goiabada/beliscao-goiabada';
import { BiscoitoAmantegadoPage } from '../biscoito-amantegado/biscoito-amantegado';

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
    RoscaEstrelaPage,
    PaoMilhoPage,
    BeliscaoGoiabadaPage,
    BiscoitoAmantegadoPage];
    public pgNome = ['Pao de Cenoura',
    'Pao de Beterraba',
    'Pao de Caseiro',
    'Pao de Forma Tradicional',
    'Pao de Maca',
    'Pao de Integral',
    'Pao de Batata com Catupiry',
    'Pao de Ervas',
    'Pao de Fuba Recheado com Goiabada',
    'Pao de Mandioca',
    'Rosca de Estrela',
    'Pao de Milho',
    'Beliscao de Goiabada',
    'Biscoito Amantegado'];
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
  constructor(public navCtrl: NavController) {

  }
  gotoPage(pg:string){
    console.log(pg);
    this.navCtrl.push(pg);
  }

}
