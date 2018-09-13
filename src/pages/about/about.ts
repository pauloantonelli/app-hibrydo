import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public face = ['https://www.facebook.com/weslly.akatsuka','https://facebook.com/pauloantonelli','https://www.facebook.com/groups/javascriptbrazil/','https://www.facebook.com/groups/189190078516884/'];
  public twit = ['https://www.linkedin.com/in/weslly-akatuka-de-oliveira-19b0a156/?originalSubdomain=br','https://twitter.com/pauloantonelli','https://twitter.com/nodejs','https://twitter.com/typescriptlang'];
  public links = ['https://github.com/wesllyakatsuka','https://github.com/pauloantonelli','https://www.google.com/','https://medium.com'];
  public whats = ['https://api.whatsapp.com/send?phone=5511969817979&text=Oi Weslly','https://api.whatsapp.com/send?phone=5511983334275&text=Oi Paulo','https://api.whatsapp.com/send?phone=5511996240801&text=Oi Silmeire','https://api.whatsapp.com/send?phone=5511988843789&text=Oi Ronaldo'];
  public nomes = ['Professor Weslly Akatuka', 'Paulo Antonelli','Silmeire', 'Ronaldo'];
  constructor(public navCtrl: NavController) {

  }
  abrirFace(face){
    window.open(this.face[face]);
  }
  abrirTwit(twit){
    window.open(this.twit[twit]);
  }
  abrirLink(links){
    window.open(this.links[links]);
  }
  abrirWhats(whats){
    window.open(this.whats[whats]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }

}
