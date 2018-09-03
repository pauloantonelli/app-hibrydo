import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from '../contact/contact';

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  public item = ['Receita','Ver/Editar', 'Calculos','Ingredientes','Relatio de Custo', 'Ver'];
  public pg = [HomePage,ContactPage];
  public produto = "Beliscao de Goiabada";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(pg: string) {
    this.navCtrl.push(pg);
  }
  ionViewDidEnter() {
    
  }

}
