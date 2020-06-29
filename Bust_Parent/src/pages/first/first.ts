import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { StudentregistPage } from '../studentregist/studentregist';
import { TrackstudentPage } from '../trackstudent/trackstudent';
import { TrackbusPage } from '../trackbus/trackbus';
import { LoginPage } from '../login/login';
import { AbsencePage } from '../absence/absence';


/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  homepage(){
    this.navCtrl.setRoot(HomePage);
  }

  studentregist() {
    this.navCtrl.setRoot(StudentregistPage);
  }

  trackstudent(){
    this.navCtrl.push(TrackstudentPage);
  }

  trackbus(){
    this.navCtrl.push(TrackbusPage);
  }

  logout(){
    this.storage.clear();
    this.appCtrl.getRootNav().setRoot(LoginPage);
  }

  absence(){
    this.navCtrl.push(AbsencePage);
  }

}
