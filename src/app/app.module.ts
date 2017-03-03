import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScanPage } from '../pages/scan/scan';
import { BadPlant } from '../pages/BadPlant/BadPlant';
import { GoodPlant } from '../pages/GoodPlant/GoodPlant';
import { NotInDatabase } from '../pages/NotInDatabase/NotInDatabase';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScanPage,
    BadPlant,
    GoodPlant,
    NotInDatabase
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScanPage,
    BadPlant,
    GoodPlant,
    NotInDatabase
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
