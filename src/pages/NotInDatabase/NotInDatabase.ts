import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-NotInDatabase',
    templateUrl: '../NotInDatabase/NotInDatabase.html'
})

export class NotInDatabase {
   barcode: String;
    constructor(private nav: NavController, navParams: NavParams) {
        this.barcode = navParams.data;
    }

    back() {
        this.nav.pop();
    }
}

