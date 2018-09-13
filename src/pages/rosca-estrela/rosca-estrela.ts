import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoscaEstrelaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rosca-estrela',
  templateUrl: 'rosca-estrela.html',
})
export class RoscaEstrelaPage {
  public item = ['Receita','Ver/Editar', 'Calculos','Ingredientes','Relatório de Custo', 'Ver'];
  //public pg = [ReceitaPage,IngredientePage,RelatorioCustoPage];
  public produto = "Beliscao de Goiabada";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(pg: string) {
    this.navCtrl.push(pg);
  }
  ionViewDidEnter() {
    
  }
}
