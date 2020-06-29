import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentregistPage } from './studentregist';

@NgModule({
  declarations: [
    StudentregistPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentregistPage),
  ],
})
export class StudentregistPageModule {}
