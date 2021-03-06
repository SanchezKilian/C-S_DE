import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {Firebase} from '@ionic-native/firebase';
import { DatePicker } from '@ionic-native/date-picker';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NouveauComptePage } from '../pages/nouveau-compte/nouveau-compte';
import { CreatEventPage } from '../pages/creat-event/creat-event';
import { ProfilPage } from '../pages/profil/profil';
import { InfoEventPage } from '../pages/info-event/info-event';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NouveauComptePage,
    CreatEventPage,
    ProfilPage,
    InfoEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NouveauComptePage,
    CreatEventPage,
    ProfilPage,
    InfoEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
