import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';
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

import { ConexaoProvider } from '../providers/conexao/conexao';
import { RotasProvider } from '../providers/rotas/rotas';
import { CalculosProvider } from '../providers/calculos/calculos';
import { NativeStorage } from '@ionic-native/native-storage';
import { ComprasProvider } from '../providers/compras/compras';
import { ReceitasProvider } from '../providers/receitas/receitas';

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
      name: 'listaReceitas',
    }),
    ComprasPageModule,
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
    RoscaEstrelaPageModule
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
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    ConexaoProvider,
    RotasProvider,
    CalculosProvider,
    ComprasProvider,
    ReceitasProvider
  ]
})
export class AppModule {}
