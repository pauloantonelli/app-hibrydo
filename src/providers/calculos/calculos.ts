import { Injectable } from '@angular/core';
import { ConexaoProvider } from '../conexao/conexao';
import { RotasProvider } from '../rotas/rotas';

@Injectable()
export class CalculosProvider {
  
  //calcular os valores dos produtos com os ingredientes das receitas
  constructor(public conexao: ConexaoProvider, public rota: RotasProvider) {
    /*this.verCompras().then((resultado)=>{
      let calc = resultado;
    })
    .catch((erro)=>{
      console.log(erro);
    })*/
  }
  verCustosReceitas(chave: string){
    //return this.conexao.getCusto(chave);
  }
  verCompras() {
    //return this.conexao.getCompras();
  }
}
