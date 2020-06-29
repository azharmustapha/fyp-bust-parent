import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { LoginPage } from '../pages/login/login';
import { FirstPage } from '../pages/first/first';

//import { RegisterPage } from '../pages/register/register';
//import { ListPage } from '../pages/list/list';
//import { platformBrowser } from '@angular/platform-browser';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController;

  rootPage: any;

  //pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storage: Storage) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.storage.get('session_storage').then((res)=>{
      if(res == null){
        this.rootPage = LoginPage;
      }else{
        this.rootPage = FirstPage;
      }
    });
  } 
}
