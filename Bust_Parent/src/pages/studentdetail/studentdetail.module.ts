import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentdetailPage } from './studentdetail';

@NgModule({
  declarations: [
    StudentdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentdetailPage),
  ],
})
export class StudentdetailPageModule {}
