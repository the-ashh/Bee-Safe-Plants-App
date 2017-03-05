import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-GoodPlant',
    templateUrl: '../GoodPlant/GoodPlant.html'
})

export class GoodPlant {
    constructor(private nav: NavController, navParams: NavParams) {

    }
    back() {
        this.nav.pop();
    }
}