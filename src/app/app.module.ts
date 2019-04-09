import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { config } from '../../firebase-config'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AutenticaProvider } from '../providers/autentica/autentica';

@NgModule({
  declarations: [
    MyApp,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticaProvider
  ]
})
export class AppModule {}
