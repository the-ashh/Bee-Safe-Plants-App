import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { BarcodeData } from '../home/home';
//import { PlantInfo } from '../home/home';

//var result = BarcodeData;
//var text = PlantInfo.details
@Component({
    selector: 'page-NotInDatabase',
    templateUrl: '../NotInDatabase/NotInDatabase.html'
})

export class NotInDatabase {
   
    constructor(private nav: NavController, navParams: NavParams) {

    }

    back() {
        this.nav.pop();
    }
}

