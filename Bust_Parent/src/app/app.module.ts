import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { StudentregistPage } from '../pages/studentregist/studentregist';
import { StudentdetailPage } from '../pages/studentdetail/studentdetail';
import { TrackstudentPage } from '../pages/trackstudent/trackstudent';
import { TrackbusPage } from '../pages/trackbus/trackbus';
import { FirstPage } from '../pages/first/first';
import { AbsencePage } from '../pages/absence/absence';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SMS } from '@ionic-native/sms'
import { Geolocation } from '@ionic-native/geolocation';
import { CallNumber } from '@ionic-native/call-number';

import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    StudentregistPage,
    StudentdetailPage,
    TrackstudentPage,
    TrackbusPage,
    FirstPage,
    AbsencePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    StudentregistPage,
    StudentdetailPage,
    TrackstudentPage,
    TrackbusPage,
    FirstPage,
    AbsencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    SMS,
    CallNumber,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
