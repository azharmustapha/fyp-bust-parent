import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { PostProvider } from '../../providers/post-provider';
import { SMS } from '@ionic-native/sms';

/**
 * Generated class for the StudentdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentdetail',
  templateUrl: 'studentdetail.html',
})
export class StudentdetailPage {

  users: any =[];
  pelajar_id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private appCtrl: App, private postPvdr: PostProvider, private sms: SMS) {
  }

  ionViewDidLoad() {
    this.users = [];
    this.pelajar_id = this.navParams.get('pelajar_id');
    this.single();
  }

  single(){
    let body ={
      pelajar_id : this.pelajar_id,
      aksi : 'get_datasingle'
    };

    this.postPvdr.postData(body, 'student_aksi.php').subscribe(data =>{
      for(let user of data.result){
        this.users.push(user);
        console.log(data.result)
      }
    });
  }

  homepage(){
    this.storage.clear();
    this.appCtrl.getRootNav().setRoot(HomePage);
  }

  sendSMS(){
    var options: {
      replaceLineBreaks: true,
      android: {
        intent: 'INTENT'
      }
    }
    this.sms.send('0135951629', 'Emergency', options).then(() => {
      console.log('worked');
    }).catch((err) => {
      alert(JSON.stringify(err))
    });
  }

}
