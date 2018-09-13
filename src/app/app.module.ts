import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { HomePage } from '../pages/home/home';
import { ComprasPageModule } from '../pages/compras/compras.module';
import { AboutPage } from '../pages/about/about';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProdutoPageModule } from '../pages/produto/produto.module';
import { ReceitaPageModule } from '../pages/receita/receita.module';
import { IngredientePageModule } from '../pages/ingrediente/ingrediente.module';

import { PaoCenouraPageModule } from '../pages/pao-cenoura/pao-cenoura.module';
import { PaoBeterrabaPageModule } from '../pages/pao-beterraba/pao-beterraba.module';
import { PaoCaseiroPageModule } from '../pages/pao-caseiro/pao-caseiro.module';
import { PaoFormaTradicionalPageModule } from '../pages/pao-forma-tradicional/pao-forma-tradicional.module';
import { PaoMacaPageModule } from '../pages/pao-maca/pao-maca.module';
import { PaoIntegralPageModule } from '../pages/pao-integral/pao-integral.module';
import { PaoBatataCatupiryPageModule } from '../pages/pao-batata-catupiry/pao-batata-catupiry.module';
import { PaoErvasPageModule } from '../pages/pao-ervas/pao-ervas.module';
import { PaoFubaRecheadoGoiabadaPageModule } from '../pages/pao-fuba-recheado-goiabada/pao-fuba-recheado-goiabada.module';
import { PaoMandiocaPageModule } from '../pages/pao-mandioca/pao-mandioca.module';
import { RoscaEstrelaPageModule } from '../pages/rosca-estrela/rosca-estrela.module';
import { PaoMilhoPageModule } from '../pages/pao-milho/pao-milho.module';
import { BeliscaoGoiabadaPageModule } from '../pages/beliscao-goiabada/beliscao-goiabada.module';
import { BiscoitoAmantegadoPageModule } from '../pages/biscoito-amantegado/biscoito-amantegado.module';


import { ConexaoProvider } from '../providers/conexao/conexao';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'principalBD',
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
      storeName   : 'receitas', // Should be alphanumeric, with underscores.
    }),
    ComprasPageModule,
    ProdutoPageModule,
    ReceitaPageModule,
    IngredientePageModule,
    //paginas dos paes
    PaoCenouraPageModule,
    PaoBeterrabaPageModule,
    PaoCaseiroPageModule,
    PaoFormaTradicionalPageModule,
    PaoMacaPageModule,
    PaoIntegralPageModule,
    PaoBatataCatupiryPageModule,
    PaoErvasPageModule,
    PaoFubaRecheadoGoiabadaPageModule,
    PaoMandiocaPageModule,
    RoscaEstrelaPageModule,
    PaoMilhoPageModule,
    BeliscaoGoiabadaPageModule,
    BiscoitoAmantegadoPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConexaoProvider
  ]
})
export class AppModule {}
