import { Injectable } from '@angular/core';

@Injectable()
export class ConexaoProvider {
    //atributos
    public titulo;
    public receitas;
    public itens;
    public compra;
    //construtor
    constructor() {
    }
    //metodos especiais receitas
}
export class Receita {
    id: string;
    peso: number;
    unidade: number;
    preco: number;
}
export class Compras {
    ingrediente: Ingredientes;
    preco: number;
}
export class Ingredientes {
    id: string;
    receitas: string;
    peso: number;
    unidade: number;
    preco: number;
    farinhaTrigo: number;
    precoFarinhaTrigo: number;
    farinhaTrigoIntegral: number;
    precoFarinhaTrigoIntegral: number;
    fareloTrigo: number;
    precoFareloTrigo: number;
    aveiaFlocosGrossos: number;
    precoAveiaFlocosGrossos: number;
    leite: number;
    precoLeite: number;
    acucar: number;
    precoAcucar: number;
    sal: number;
    precoSal: number;
    precoAgua: number;
    oleo: number;
    precoOleo: number;
    ovo: number;
    precoOvo: number;
    fermentoBiologico: number;
    precoFermentoBiologico: number;
    fermentoQuimico: number;
    precoFermentoQuimico: number;
    cenoura: number;
    precoCenoura: number;
    goiabada: number;
    precoGoiabada: number;
    beterraba: number;
    precoBeterraba: number;
    maca: number;
    precoMaca: number;
    uva: number;
    precoUva: number;
    limao: number;
    precoLimao: number;
    batata: number;
    precoBatata: number;
    mandioca: number;
    precoMandioca: number;
    cebola: number;
    precoCebola: number;
    cebolinha: number;
    precoCebolinha: number;
    alho: number;
    precoAlho: number;
    cheiroVerde: number;
    precoCheiroVerde: number;
    manjericao: number;
    precoManjericao: number;
    alecrim: number;
    precoAlecrim: number;
    oregano: number;
    precoOregano: number;
    ervaDoce: number;
    precoErvaDoce: number;
    azeitonaVerde: number;
    precoAzeitonaVerde: number;
    margarina: number;
    precoMargarina: number;
    cocoRalado: number;
    precoCocoRalado: number;
    leiteCoco: number;
    precoLeiteCoco: number;
    fuba: number;
    precoFuba: number;
    requeijaoCatupiry: number;
    precoRequeijaoCatupiry: number;
    canelaPo: number;
    precoCanelaPo: number;
    canelaBastao: number;
    precoCanelaBastao: number;
    presunto: number;
    precoPresunto: number;
    mussarela: number;
    precoMussarela: number;
    embalagem: number;
    precoEmbalagem: number;
}