import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ConexaoProvider, Ingredientes } from '../../providers/conexao/conexao';
import { RotasProvider } from '../../providers/rotas/rotas';
import { ComprasProvider } from '../../providers/compras/compras';
import { LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-compras',
  templateUrl: 'compras.html',
})
export class ComprasPage {
  public titulo = this.rota.compraIngrediente;
  public btnAtualizar;
  public logo = 'assets/imgs/logo-2.png';
  public valorCompras: Ingredientes;
  public chave: string;
  public totCompras: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public conexao: ConexaoProvider, public compraProvider: ComprasProvider, public rota: RotasProvider, public toast: ToastController, public loadingCtrl: LoadingController) {
    this.valorCompras = new Ingredientes();
    this.chave = 'Compras';
  }
  ionViewDidLoad() {
    this.detectMudancaIngrediente();
  } 
  ionViewDidEnter() { 
    this.detectMudancaIngrediente();
  }
  verCompras(chave: string){
    return this.compraProvider.verCompras(chave);
  }
  salvarCompras(chave: string, compras: Ingredientes){
    this.compraProvider.salvarCompra(chave, compras);
    //this.mensagem('Atualizado com sucesso!');
    this.presentLoading('Atualizando');
  }
  detectMudancaIngrediente(){
    //RECUPERA OS DADOS RELATIVO AOS INGREDIENTES DA RECEITA
    this.verCompras(this.chave).then((resultado: Ingredientes) => {
      if (resultado == undefined) {
        this.salvarCompras(this.chave, this.valorCompras);
      } else {
        this.valorCompras = resultado;
      }
    })
      .catch((e) => {
        console.error(e);
      })
  }
  //TOASTER, ALTERNATIVA AO LOADING
  mensagem(msg: string){
    this.toast.create({
      message: msg,
      duration: 3000,
      position: 'center'
    }).present();
  }
  //ATUALIZA O CARD COM OS DADOS E MOSTRA ANIMACAO DE ATUALIZACAO
  presentLoading(msg: string) {
    const loader = this.loadingCtrl.create({
      content: msg,
      duration: 3000
    });
    loader.present().then(()=>{
      this.detectMudancaIngrediente();
    })
  }
}
