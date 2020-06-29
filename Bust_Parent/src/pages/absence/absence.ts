import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,App } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';
import { Storage } from '@ionic/storage';
import { FirstPage } from '../first/first';
import { PostProvider } from '../../providers/post-provider';

/**
 * Generated class for the AbsencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-absence',
  templateUrl: 'absence.html',
})
export class AbsencePage {
  message:any;
  users: any =[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage, private sms: SMS,public toastCtrl: ToastController, private postPvdr: PostProvider, private callSvc: CallNumber) {
    this.message = '';
  }

  ionViewDidLoad() {
    this.users = [];
    this.loaduser();
    }

    loaduser(){
      let body ={
        aksi: 'get_user'
      };
  
      this.postPvdr.postData(body, 'student_aksi.php').subscribe(data =>{
        for(let user of data.result){
          this.users.push(user);
        }
      });
    }

    send() {
      this.sms.send('0135951629', this.message).then(() => {
        let successToast = this.toastCtrl.create({
          message: "Text message sent successfully",
          duration: 3000
        })
        successToast.present();
      }, (error) => {
        let errorToast = this.toastCtrl.create({
          message: "Text message not sent",
          duration: 3000
        })
        errorToast.present();
      });
    }

    call(){
      this.callSvc.callNumber('0135951629', true).then(()=>{
        console.log('worked')
      }).catch((err)=>{
        alert(JSON.stringify(err))
      });
    }

  student(){
    this.navCtrl.push(FirstPage);
  }

}
