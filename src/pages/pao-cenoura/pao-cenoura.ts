import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ConexaoProvider } from '../../providers/conexao/conexao';

/**
 * Generated class for the PaoCenouraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pao-cenoura',
  templateUrl: 'pao-cenoura.html',
})
export class PaoCenouraPage {
  private imagens = ['assets/imgs/beliscao-goiabada.jpg','assets/imgs/biscoito-amanteigado.jpg','assets/imgs/pao-caseiro.jpg','assets/imgs/pao-batata.jpg','assets/imgs/pao-beterraba.jpg','assets/imgs/pao-cenoura.jpg','assets/imgs/pao-ervas.jpg','assets/imgs/pao-forma.jpg','assets/imgs/pao-fuba.jpg','assets/imgs/pao-maca.jpg','assets/imgs/pao-mandioca.jpg','assets/imgs/pao-milho.jpg','assets/imgs/pao-integral.jpg','assets/imgs/rosca-estrela.jpg'];
  private receitaPg = ['Beliscão de goiaba', 'Biscoito amanteigado', 'Pão caseiro', 'Pão de batata com catupiry', 'Pão de beterraba', 'Pão de cenoura', 'Pão de ervas', 'Pão de forma tradicional', 'Pão de fubá recheado com goiabada', 'Pão de maça', 'Pão de mandioca', 'Pão de milho', 'Pão integral', 'Rosca estrela'];
  private receitas = ['Receita de : Beliscao de goiabada','Receita de : Biscoito amanteigado','Receita de : Pão caseiro','Receita de : Pão de batata com catupiry','Receita de : Pão de beterraba','Receita de : Pão de cenoura','Receita de : Pão de ervas','Receita de : Pão de forma tradicional','Receita de : Pão de fubá recheado com goiabada','Receita de : Pão de maça','Receita de : Pão de mandioca','Receita de : Pão de milho','Receita de : Pão integral','Receita de : Rosca estrela'];
  public titulo = 'Pao de Cenoura';
  public conteudo = 'ini';
  public image = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, public conexao: ConexaoProvider) {
  }

  ionViewDidLoad() {
    this.conexao.setBanco(1);
    this.conexao.setAtributos(1);
    console.log(this.conexao.getConteudo());
  }
  ionViewDidEnter() {

  }

}
