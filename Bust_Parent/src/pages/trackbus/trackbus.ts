import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { Geolocation } from '@ionic-native/geolocation';

/**
 * Generated class for the TrackbusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trackbus',
  templateUrl: 'trackbus.html',
})
export class TrackbusPage {

  lat: any;
  long: any;
  status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private geo: Geolocation) {
    this.platform.ready().then(() => {

      var options = {
        timeout: 5000
  };

  this.geo.getCurrentPosition(options).then(resp => {
    this.lat = (resp.coords.latitude);
    this.long = (resp.coords.longitude);
    this.status = ("OK");

  }).catch(() => {
    this.status = ("Error to get location")
  });

  let watch = this.geo.watchPosition();
    watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
      data.coords.latitude
      data.coords.longitude
    });

});
}

  first(){
    this.navCtrl.push(FirstPage);
  }


}
