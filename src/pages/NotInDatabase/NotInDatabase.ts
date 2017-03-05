import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

