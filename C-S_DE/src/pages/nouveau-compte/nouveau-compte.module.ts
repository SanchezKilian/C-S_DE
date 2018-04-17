import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NouveauComptePage } from './nouveau-compte';

@NgModule({
  declarations: [
    NouveauComptePage,
  ],
  imports: [
    IonicPageModule.forChild(NouveauComptePage),
  ],
})
export class NouveauComptePageModule {}
