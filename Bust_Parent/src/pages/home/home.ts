import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { StudentdetailPage } from '../studentdetail/studentdetail';
import { FirstPage } from '../first/first';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any =[];

  constructor(public navCtrl: NavController, private postPvdr: PostProvider) {
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

  studentdetail(id){
    this.navCtrl.push(StudentdetailPage, {
      'pelajar_id' : id
    })
    console.log(id)
  }

  first(){
    this.navCtrl.push(FirstPage);
  }

}
