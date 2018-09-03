import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RelatorioCustoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-relatorio-custo',
  templateUrl: 'relatorio-custo.html',
})
export class RelatorioCustoPage {
  public texts = ['Relatório de custos'];
  public totCustos = [4.80, 4.68, 12.48, 2.53, 20.24+"%", 2, 2, 3];
  public totais = [151.50, 15];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatorioCustoPage');
  }

}
