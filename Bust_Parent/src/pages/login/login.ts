import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

import { RegisterPage } from '../register/register';
import { FirstPage } from '../first/first';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  penjaga_username: string;
  penjaga_password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.penjaga_username != null && this.penjaga_password != null ){
      let body = {
        penjaga_username: this.penjaga_username,
        penjaga_password: this.penjaga_password,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
        var alertpesan = data.msg;
        if(data.success){
          this.storage.set('session_storage', data.result);
          this.navCtrl.setRoot(FirstPage);
          const toast = this.toastCtrl.create({
            message: 'Login Succesful',
            duration: 3000
          });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }

      });

    }else{
      const toast = this.toastCtrl.create({
        message: 'username or password invalid',
        duration: 3000
      });
      toast.present();
    }
  }

  formRegister(){
    this.navCtrl.push(RegisterPage);
  }

}
