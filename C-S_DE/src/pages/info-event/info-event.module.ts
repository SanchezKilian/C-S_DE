import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoEventPage } from './info-event';

@NgModule({
  declarations: [
    InfoEventPage,
  ],
  imports: [
    IonicPageModule.forChild(InfoEventPage),
  ],
})
export class InfoEventPageModule {}
