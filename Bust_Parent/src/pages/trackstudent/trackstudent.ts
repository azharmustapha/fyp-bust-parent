import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Observable } from 'rxjs/Observable';
import { FirstPage } from '../first/first';


/**
 * Generated class for the TrackstudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trackstudent',
  templateUrl: 'trackstudent.html',
})
export class TrackstudentPage {

  users: any =[];
  data:Observable<any>;
  items:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    this.users = [];
    this.loadqr();
  }

  loadqr(){
    let body ={
      aksi: 'get_attendance'
    };

    this.postPvdr.postData(body, 'qr_aksi.php').subscribe(data =>{
      for(let user of data.result){
        this.users.push(user);
      }
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    let body ={
      aksi: 'get_attendance'
    };

    this.postPvdr.postData(body, 'qr_aksi.php').subscribe(data =>{
      for(let user of data.result){
        this.users.shift(user);
        this.users.push(user);
        refresher.complete();
      }
    });
  }

  first(){
    this.navCtrl.push(FirstPage);
  }
}
