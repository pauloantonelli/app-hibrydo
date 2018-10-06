import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Ingredientes } from '../../providers/conexao/conexao';

@Injectable()
export class ReceitasProvider {

  constructor(public nativeStorage: NativeStorage) {
  }
  //NATIVE STORAGE
  public setIngredientes(chave: string, itens: Ingredientes) {
    this.nativeStorage.setItem(chave, { receitas: itens.receitas, peso: itens.peso, unidade: itens.unidade, preco: itens.preco, farinhaTrigo: itens.farinhaTrigo, precoFarinhaTrigo: itens.precoFarinhaTrigo, farinhaTrigoIntegral: itens.farinhaTrigoIntegral, precoFarinhaTrigoIntegral: itens.precoFarinhaTrigoIntegral, fareloTrigo: itens.fareloTrigo, precoFareloTrigo: itens.precoFareloTrigo, aveiaFlocosGrossos: itens.aveiaFlocosGrossos, precoAveiaFlocosGrossos: itens.precoAveiaFlocosGrossos, leite: itens.leite, precoLeite: itens.precoLeite, acucar: itens.acucar, precoAcucar: itens.precoAcucar, sal: itens.sal, precoSal: itens.precoSal, precoAgua: itens.precoAgua, oleo: itens.oleo, precoOleo: itens.precoOleo, ovo: itens.ovo, precoOvo: itens.precoOvo, fermentoBiologico: itens.fermentoBiologico, precoFermentoBiologico: itens.precoFermentoBiologico, fermentoQuimico: itens.fermentoQuimico, precoFermentoQuimico: itens.precoFermentoQuimico, cenoura: itens.cenoura, precoCenoura: itens.precoCenoura, goiabada: itens.goiabada, precoGoiabada: itens.precoGoiabada, beterraba: itens.beterraba, precoBeterraba: itens.precoBeterraba, maca: itens.maca, precoMaca: itens.precoMaca, uva: itens.uva, precoUva: itens.precoUva, limao: itens.limao, precoLimao: itens.precoLimao, batata: itens.batata, precoBatata: itens.precoBatata, mandioca: itens.mandioca, precoMandioca: itens.precoMandioca, cebola: itens.cebola, precoCebola: itens.precoCebola, alho: itens.alho, precoAlho: itens.precoAlho, cheiroVerde: itens.cheiroVerde, precoCheiroVerde: itens.precoCheiroVerde, manjericao: itens.manjericao, precoManjericao: itens.precoManjericao, alecrim: itens.alecrim, precoAlecrim: itens.precoAlecrim, oregano: itens.oregano, precoOregano: itens.precoOregano, ervaDoce: itens.ervaDoce, precoErvaDoce: itens.precoErvaDoce, azeitonaVerde: itens.azeitonaVerde, precoAzeitonaVerde: itens.precoAzeitonaVerde, margarina: itens.margarina, precoMargarina: itens.precoMargarina, cocoRalado: itens.cocoRalado, precoCocoRalado: itens.precoCocoRalado, leiteCoco: itens.leiteCoco, precoLeiteCoco: itens.precoLeiteCoco, fuba: itens.fuba, precoFuba: itens.precoFuba, requeijaoCatupiry: itens.requeijaoCatupiry, precoRequeijaoCatupiry: itens.precoRequeijaoCatupiry, canelaPo: itens.canelaPo, precoCanelaPo: itens.precoCanelaPo, canelaBastao: itens.canelaBastao, precoCanelaBastao: itens.precoCanelaBastao, presunto: itens.presunto, precoPresunto: itens.precoPresunto, mussarela: itens.mussarela, precoMussarela: itens.precoMussarela, embalagem: itens.embalagem, precoEmbalagem: itens.precoEmbalagem })
      .then(
        () => console.log(chave, ' atualizados'),
        error => console.error('Erro ao gravar ', error)
      );
  }
  public getAllIngredientes(chave: string) {
    return this.nativeStorage.getItem(chave)
      .then((data: Ingredientes) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
  public setPreparo(chave: string, receita: string){
    this.nativeStorage.setItem(chave,{ receita })
    .then(()=>{
      //console.log(chave, 'atualizado');
      console.log(receita);
    })
    .catch((e)=>{
      console.error(e);
    })
  }
  public getPreparo(chave: string){
    return this.nativeStorage.getItem(chave)
    .then((data)=>{
      console.log(data);
      return data;
    })
    .catch((e)=>{
      console.error(e);
    })
  }
  salvarIngredientes(chave: string, itens: Ingredientes) {
    return this.setIngredientes(chave, itens);
  }
  verIngredientes(chave: string) {
    return this.getAllIngredientes(chave);
  }
  salvarReceitas(chave: string, receita: string) {
    return this.setPreparo(chave, receita);
  }
  verReceitas(chave: string) {
    return this.getPreparo(chave);
  }
  zerarBanco(){
    console.log('banco apagado');
    return this.nativeStorage.clear();
  }
}
