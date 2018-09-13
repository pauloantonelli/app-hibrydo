import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }
  gotoPage(pg:string, prod:number){
    console.log(prod);
    this.navCtrl.push(pg);
  }

}
