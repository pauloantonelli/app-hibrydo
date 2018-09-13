import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngredientePage } from './ingrediente';

@NgModule({
  declarations: [
    IngredientePage,
  ],
  imports: [
    IonicPageModule.forChild(IngredientePage),
  ],
})
export class IngredientePageModule {}
