import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-receita',
  templateUrl: 'receita.html',
})
export class ReceitaPage {
  private imagens = ['assets/imgs/beliscao-goiabada.jpg','assets/imgs/biscoito-amanteigado.jpg','assets/imgs/pao-caseiro.jpg','assets/imgs/pao-batata.jpg','assets/imgs/pao-beterraba.jpg','assets/imgs/pao-cenoura.jpg','assets/imgs/pao-ervas.jpg','assets/imgs/pao-forma.jpg','assets/imgs/pao-fuba.jpg','assets/imgs/pao-maca.jpg','assets/imgs/pao-mandioca.jpg','assets/imgs/pao-milho.jpg','assets/imgs/pao-integral.jpg','assets/imgs/rosca-estrela.jpg'];
  private receitaPg = ['Beliscão de goiaba', 'Biscoito amanteigado', 'Pão caseiro', 'Pão de batata com catupiry', 'Pão de beterraba', 'Pão de cenoura', 'Pão de ervas', 'Pão de forma tradicional', 'Pão de fubá recheado com goiabada', 'Pão de maça', 'Pão de mandioca', 'Pão de milho', 'Pão integral', 'Rosca estrela'];
  private receitas = ['Receita de : Beliscao de goiabada','Receita de : Biscoito amanteigado','Receita de : Pão caseiro','Receita de : Pão de batata com catupiry','Receita de : Pão de beterraba','Receita de : Pão de cenoura','Receita de : Pão de ervas','Receita de : Pão de forma tradicional','Receita de : Pão de fubá recheado com goiabada','Receita de : Pão de maça','Receita de : Pão de mandioca','Receita de : Pão de milho','Receita de : Pão integral','Receita de : Rosca estrela'];
  public titulo = 'ini';
  public conteudo = 'ini';
  public image = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  ionViewDidLoad() {

    // Or to get a key/value pair
    this.storage.get(this.receitaPg[1]).then((receitas: string) => {
      this.titulo = this.receitaPg[0];//trocar por outra var com numero da pagina escohlida
      this.conteudo = receitas;
      this.imagens[this.image];
      console.log('Resultado: ', this.conteudo);
    });

  }
  ionViewDidEnter() {
    // set a key/value
    this.storage.set(this.receitaPg[1], this.receitas[1]);

  }

}
