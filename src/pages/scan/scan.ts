import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { BarcodeData } from '../home/home';
//import { PlantInfo } from '../home/home';

//var result = BarcodeData;
//var text = PlantInfo.details
@Component({
    selector: 'page-scan',
    templateUrl: '../scan/scan.html'
})

export class ScanPage {
   message: string
   color: string
   
   // barcodeData: BarcodeData;

    constructor(private nav: NavController, navParams: NavParams) {
        this.message = navParams.get('details');
        this.color = '#' + navParams.get('pancakes');
    }

    back() {
        this.nav.pop();
    }
}