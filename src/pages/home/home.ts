import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { ScanPage } from '../scan/scan';
import { NavController } from 'ionic-angular';

var plantData: PlantInfo[] = new Array(9)

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public nav: NavController) {
		plantData[0] = new PlantInfo('092852066051', 1);
		plantData[1] = new PlantInfo('092852000826', 1);
		plantData[2] = new PlantInfo('096619394494', 1);
		plantData[3] = new PlantInfo('022532358817', 1);
		plantData[4] = new PlantInfo('046731582415', 2);
		plantData[5] = new PlantInfo('096619183289', 2);
		plantData[6] = new PlantInfo('087684001004', 2);
		plantData[7] = new PlantInfo('46731', 2);
		plantData[8] = new PlantInfo('99993', 2);
	}

	click() {
		BarcodeScanner.scan()
			.then((result) => {
				if (!result.cancelled) {
					const barcodeData = new BarcodeData(result.text, result.format);
					this.scanDetails(barcodeData);
				}
				else {

					this.nav.push(ScanPage, { details: 'at least it switched pages' })
				}
			})

			.catch((err) => {
				alert(err);
			})
	}

	scanDetails(details) {
		console.log("scanDetails ()");
		var isSafe = 0;
		for (var index = 0; index < plantData.length; index++) {
			if (plantData[index].barcode == details.text) {
				isSafe = plantData[index].beeSafe;
				if (plantData[index].beeSafe == 2) {
					this.nav.push(ScanPage, { details: 'This plant is safe for bees.' });
				}
				else if (plantData[index].beeSafe == 1) {
					this.nav.push(ScanPage, { details: 'This plant is NOT safe for bees.' });
				}
				else {
					this.nav.push(ScanPage, { details: 'This plant is not in our database yet.' });
				}
			}

			else if (plantData[index].barcode == details.text.substring(1, 5)) {
				isSafe = plantData[index].beeSafe;
				if (plantData[index].beeSafe == 2) {
					this.nav.push(ScanPage, { details: 'This plant is safe for bees.' });
				}
				else if (plantData[index].beeSafe == 1) {
					this.nav.push(ScanPage, { details: 'This plant is NOT safe for bees.' });
				}
				else {
					this.nav.push(ScanPage, { details: 'This plant is not in our database yet.' });
				}
			}
		}

	}

	fakeScan() {
		console.log("FaceScan Click");
		this.scanDetails(new BarcodeData('barcode', 'FAKE_FORMAT'));
	}

}

export class BarcodeData {
	constructor(
		public text: String,
		public format: String
	) { }
}

export class PlantInfo {
	constructor(
		public barcode: String,
		public beeSafe: number
	) { }
}

export function click(){
	
}

