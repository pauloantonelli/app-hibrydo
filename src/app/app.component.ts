import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      /*dbProvider.criarBanco()
      .then(()=>{
        //alert('banco criado com sucesso');
        this.openHomePage(splashScreen);
      })
      .catch(()=>{
        alert("erro ao criar banco");
        this.openHomePage(splashScreen);
      })*/
    });
  }
  /*private openHomePage(splashScreen: SplashScreen){
    splashScreen.hide();
    this.rootPage = TabsPage;
  }*/
}
