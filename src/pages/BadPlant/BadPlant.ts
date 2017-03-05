import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { BarcodeData } from '../home/home';
//import { PlantInfo } from '../home/home';

//var result = BarcodeData;
//var text = PlantInfo.details
@Component({
    selector: 'page-BadPlant',
    templateUrl: '../BadPlant/BadPlant.html'
})

export class BadPlant {

    constructor(private nav: NavController, navParams: NavParams) {
        
    }

    back() {
        this.nav.pop();
    }
}