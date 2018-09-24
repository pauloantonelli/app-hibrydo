import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ConexaoProvider, Ingredientes } from '../../providers/conexao/conexao';
import { RotasProvider } from '../../providers/rotas/rotas';
import { ComprasProvider } from '../../providers/compras/compras';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public conexao: ConexaoProvider, public compraProvider: ComprasProvider, public rota: RotasProvider, public toast: ToastController) {
    this.valorCompras = new Ingredientes();
    this.chave = 'Compras';
  }
  ionViewDidLoad() {
    this.verCompras(this.chave).then((resultado)=>{
      if(resultado == undefined){
        this.salvarCompras(this.chave, this.valorCompras);
      }else{
        this.valorCompras = resultado;
      }
    })
    .catch((e)=>{
      console.error(e);
    })
  } 
  ionViewDidEnter() {
    this.detectMudancaIngrediente();
    this.totCompras = 'O peso total é: ' + (Number(this.valorCompras.farinhaTrigo) + Number(this.valorCompras.fareloTrigo));
  }
  verCompras(chave: string){
    return this.compraProvider.verCompras(chave);
  }
  salvarCompras(chave: string, compras: Ingredientes){
    this.compraProvider.salvarCompra(chave, compras);
    this.mensagem('Atualizado com sucesso!');
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
  mensagem(msg: string){
    this.toast.create({
      message: msg,
      duration: 3000,
      position: 'center'
    }).present();
  }
}
