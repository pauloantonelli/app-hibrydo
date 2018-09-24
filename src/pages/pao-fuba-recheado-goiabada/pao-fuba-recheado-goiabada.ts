import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ConexaoProvider, Ingredientes } from '../../providers/conexao/conexao';
import { ReceitasProvider } from '../../providers/receitas/receitas';
import { ComprasProvider } from '../../providers/compras/compras';
import { RotasProvider } from '../../providers/rotas/rotas';

@IonicPage()
@Component({
  selector: 'page-pao-fuba-recheado-goiabada',
  templateUrl: 'pao-fuba-recheado-goiabada.html',
})
export class PaoFubaRecheadoGoiabadaPage {
  public pagina = this.rota.pgNome;
  public titulo = this.rota.compraIngrediente;
  public imagem = this.rota.img;
  public receitasIni: string = 'Clique em editar e escreva a técnica de preparo do ' + this.pagina[8];
  public conteudoCard;
  public textoEdicao;
  public conteudoField;
  public textField;
  public btnEdit;
  public btnSalv;
  public btnAtualizar;
  public logo = 'assets/imgs/logo-2.png';
  public chave: string;
  public chaveReceita: string = 'Tecnica de preparo ' + this.pagina[8];
  public totCompras: any;
  public valorCompras: Ingredientes;
  constructor(public navCtrl: NavController, public navParams: NavParams, public conexao: ConexaoProvider, public compraProvider: ComprasProvider, public receitaProvider: ReceitasProvider, public toast: ToastController, public rota: RotasProvider) {
    this.valorCompras = new Ingredientes();
    this.chave = 'Pao de Fuba com Goiabada';
    this.btnSalv = 'none';
    this.textField = 'none';
  }
  ionViewDidLoad() {
    this.detectaMudancaReceita();
    this.detectMudancaIngrediente();
  }
  ionViewDidEnter() {
    //PEGAR DADOS EXTERNOS E RELACIONALOS...[FAZER AS FUNCOES]
    //this.valorIngrediente(this.chave)
    this.totCompras = 'O peso total é: ' + (Number(this.valorCompras.farinhaTrigo) + Number(this.valorCompras.acucar));
  }
  valorIngrediente(chave: string) {//PEGA OS VALORES RELATIVOS AOS INGREDIENTE DO BANCO
    return this.receitaProvider.verIngredientes(chave);
  }
  valorReceita(chave: string) {//PEGA OS VALORES RELATIVOS AOS INGREDIENTE DO BANCO
    return this.receitaProvider.verReceitas(chave);
  }
  salvarIngrediente(chave: string, compras: Ingredientes) {//SALVA OS VALORES RELATIVOS AOS INGREDIENTE DO BANCO
    this.receitaProvider.salvarIngredientes(chave, compras);
    this.mensagem('Atualizado com sucesso!');
  }
  salvarReceita(chave: string, receita: string) {//SALVA OS VALORES RELATIVOS AOS INGREDIENTE DO BANCO
    this.receitaProvider.salvarReceitas(chave, receita);
    this.mensagem('Atualizado com sucesso!');
  }
  //METODOS AUXILIARES DE EXPERIENCIA
  editarReceita() {
    this.conteudoField = 'none';
    this.textField = 'block';
    this.btnEdit = 'none';
    this.btnSalv = 'block';
  }
  posEdicaoReceita() {
    this.detectaMudancaReceita();
    this.conteudoField = 'block';
    this.textField = 'none';
    this.btnEdit = 'block';
    this.btnSalv = 'none';
  }
  detectaMudancaReceita(){
        //RECUPERA OS DADOS RELATIVO A TECNICA DE PREPARO DA RECEITA
        this.valorReceita(this.chaveReceita).then((resultado: any) => {
          if (resultado.receita == undefined || resultado.receita == "") {//RECUPEROU E REPASSOU O DADO MESMO COM ESSE 'ERRO'
            this.salvarReceita(this.chaveReceita, this.receitasIni);
            this.conteudoCard = this.receitasIni;
          } else {
            this.conteudoCard = resultado.receita;//RECUPEROU E REPASSOU O DADO MESMO COM ESSE 'ERRO'
          }
        })
          .catch((e) => {
            console.error(e);
          })
  }
  detectMudancaIngrediente(){
    //RECUPERA OS DADOS RELATIVO AOS INGREDIENTES DA RECEITA
    this.valorIngrediente(this.chave).then((resultado: Ingredientes) => {
      if (resultado == undefined) {
        this.salvarIngrediente(this.chave, this.valorCompras);
      } else {
        this.valorCompras = resultado;
      }
    })
      .catch((e) => {
        console.error(e);
      })
  }
  mensagem(msg: string) {
    this.toast.create({
      message: msg,
      duration: 3000,
      position: 'center'
    }).present();
  }
}