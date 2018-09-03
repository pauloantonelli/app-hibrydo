import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProdutoPage } from '../produto/produto';
import { RelatorioCustoPage } from '../relatorio-custo/relatorio-custo';
import { CustosFixosPage } from '../custos-fixos/custos-fixos';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ProdutoPage;
  tab5Root = RelatorioCustoPage;
  tab6Root = CustosFixosPage;
  constructor() {

  }
}
