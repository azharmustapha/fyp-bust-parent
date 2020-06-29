import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController  } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { HomePage } from '../home/home';
import { FirstPage } from '../first/first';

/**
 * Generated class for the StudentregistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-studentregist',
  templateUrl: 'studentregist.html',
})
export class StudentregistPage {
  
  pelajar_nama: string = "";
  pelajar_id: string = "";
  sekolah_nama: string = "";
  full_name: string = "";
  penjaga_phone: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, private postPvdr: PostProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentregistPage');

    const confirm = this.alertCtrl.create({
      title: 'CONFIRM ALERT',
      message: "Please alert that student from certain school only can register",
      buttons: [
        {
          text: 'No',
          handler: () => {
            this.navCtrl.push(FirstPage);
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
   confirm.present();
  }

  addStudentregist(){
    console.log(this.pelajar_nama)

    // validation 
    if(this.pelajar_nama==""){
      const toast = this.toastCtrl.create({
        message: 'Student Name is required',
        duration: 3000
      });
      toast.present();

    }else if(this.pelajar_id==""){
      const toast = this.toastCtrl.create({
        message: 'Student ID is required (Identificational Card)',
        duration: 3000
      });
      toast.present();

    }else if(this.sekolah_nama==""){
      const toast = this.toastCtrl.create({
        message: 'School Name is required',
        duration: 3000
      });
      toast.present();

    }else if(this.full_name==""){
      const toast = this.toastCtrl.create({
        message: 'Parent Name is required',
        duration: 3000
      });
      toast.present();

    }else if(this.penjaga_phone==""){
      const toast = this.toastCtrl.create({
        message: 'Parent Phone Number is required',
        duration: 3000
      });
      toast.present();

    }else{

      let body ={
        pelajar_nama: this.pelajar_nama,
        pelajar_id: this.pelajar_id,
        sekolah_nama: this.sekolah_nama,
        full_name: this.full_name,
        penjaga_phone: this.penjaga_phone,
        aksi: 'add_studentregis'
      };

      this.postPvdr.postData(body, 'student_aksi.php').subscribe((data) =>{
        var alertpesan = data.msg;
        if(data.success){
          this.navCtrl.popToRoot();
          this.navCtrl.setRoot(HomePage);
          const toast = this.toastCtrl.create({
            message: 'Student Register Succesful',
            duration: 3000
          });
          toast.present();
        }
        else{
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
         });
          toast.present();
        }

      });

    }

  }

  first(){
    this.navCtrl.push(FirstPage);
  }

}