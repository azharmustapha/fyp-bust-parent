import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  penjaga_username: string = "";
  penjaga_password: string = "";
  confirm_password: string = "";
  penjaga_fullname: string = "";
  penjaga_phone: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  addRegister(){
    console.log(this.penjaga_fullname)

    // validation 
    if(this.penjaga_fullname==""){
        const toast = this.toastCtrl.create({
          message: 'Name is required',
          duration: 3000
        });
        toast.present();
      
      
    }else if(this.penjaga_phone==""){
        const toast = this.toastCtrl.create({
          message: 'Mobile Number is required',
          duration: 3000
        });
        toast.present();
      

    }else if(this.penjaga_username==""){
        const toast = this.toastCtrl.create({
          message: 'Username is required',
          duration: 3000
        });
        toast.present();
      

    }else if(this.penjaga_password==""){
        const toast = this.toastCtrl.create({
          message: 'Password is required',
          duration: 3000
        });
        toast.present();
      

    }else if(this.penjaga_password!=this.confirm_password){
        const toast = this.toastCtrl.create({
          message: 'Invalid Password',
          duration: 3000
        });
        toast.present();

      }else{

        let body ={
          penjaga_fullname: this.penjaga_fullname,
          penjaga_phone: this.penjaga_phone,
          penjaga_username: this.penjaga_username,
          penjaga_password: this.penjaga_password,
          aksi: 'add_register'
        };

        this.postPvdr.postData(body, 'file_aksi.php').subscribe((data) =>{
          var alertpesan = data.msg;
          if(data.success){
            this.navCtrl.pop();
            const toast = this.toastCtrl.create({
              message: 'Register Succesful',
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

      }
      

  }

  formLogin(){
    this.navCtrl.pop();
  }

}
