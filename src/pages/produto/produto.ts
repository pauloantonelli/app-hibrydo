import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ReceitaPage } from '../receita/receita';
import { IngredientePage } from '../ingrediente/ingrediente';
import { RelatorioCustoPage } from '../relatorio-custo/relatorio-custo';

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {
  public item = ['Receita','Ver/Editar', 'Calculos','Ingredientes','Relatório de Custo', 'Ver'];
  public pg = [ReceitaPage,IngredientePage,RelatorioCustoPage];
  public produto = "Beliscao de Goiabada";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  itemSelected(pg: string) {
    this.navCtrl.push(pg);
  }
  ionViewDidEnter() {
  
  }

}
