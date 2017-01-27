import { Component } from '@angular/core';
import {BarcodeScanner} from 'ionic-native';
import {ScanPage} from '../scan/scan';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public nav: NavController) {
  }

 click() {
BarcodeScanner.scan()
.then((result) => {
if (!result.cancelled) {
const barcodeData = new BarcodeData(result.text, result.format);
this.scanDetails(barcodeData);
}
})
.catch((err) => {
alert(err);
})
}

scanDetails(details) {
	console.log("scanDetails ()");
this.nav.push(ScanPage, {details: details});
}

fakeScan() {
	console.log("FaceScan Click");
    this.scanDetails(new BarcodeData('FAKE SCAN', 'FAKE_FORMAT'));
}

}

export class BarcodeData {
	constructor(
		public text: String,
		public format: String
		){}
}

  
