import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ComprasPage } from '../compras/compras';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ComprasPage;
  tab3Root = AboutPage;
  constructor() {
    
  }
}
