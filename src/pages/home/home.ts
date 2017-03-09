import { Component } from '@angular/core';
import { BarcodeScanner } from 'ionic-native';
import { BadPlant } from '../BadPlant/BadPlant';
import { GoodPlant } from '../GoodPlant/GoodPlant';
import { NotInDatabase } from '../NotInDatabase/NotInDatabase';
import { NavController } from 'ionic-angular';

var plantData: PlantInfo[] = new Array(10)


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	scanned_barcode: string;
	
	constructor(public nav: NavController) {
		plantData[0] = new PlantInfo('092852066051', 1);
		plantData[1] = new PlantInfo('092852000826', 1);
		plantData[2] = new PlantInfo('096619394490', 2);
		plantData[3] = new PlantInfo('022532358817', 1);
		plantData[4] = new PlantInfo('046731582415', 2);
		plantData[5] = new PlantInfo('096619183289', 2);
		plantData[6] = new PlantInfo('087684001004', 2);
		plantData[7] = new PlantInfo('046731', 2);
		plantData[8] = new PlantInfo('099993', 2);
		plantData[9] = new PlantInfo('028000463687', 2)
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

	scanDetails(barcode) 
	{
		var isSafe = 0;
		if (barcode.text.length > 12) {
			this.scanned_barcode = barcode.text.substring(1,);
		}
		else {
			this.scanned_barcode = barcode.text
		}
		for (var index = 0; index < plantData.length; index++) 
		{
			if (plantData[index].barcode.includes(this.scanned_barcode)) 
			{
				isSafe = plantData[index].beeSafe;
				if (plantData[index].beeSafe == 2) 
				{
					this.nav.push(GoodPlant, {});
					return;
				}
				else if (plantData[index].beeSafe == 1) 
				{
					this.nav.push(BadPlant, {});
					return;
				}
			}

			else if (this.scanned_barcode.includes(plantData[index].barcode)) 
			{
				isSafe = plantData[index].beeSafe;
				if (plantData[index].beeSafe == 2) 
				{
					this.nav.push(GoodPlant, {});
					return;
				}
				else if (plantData[index].beeSafe == 1) 
				{
					this.nav.push(BadPlant, {});
					return;
				}
			}

		}
		this.nav.push(NotInDatabase, barcode.text);
	}

	fakeScan() 
	{
		console.log("FaceScan Click");
		this.scanDetails(new BarcodeData('099993450060', 'FAKE_FORMAT'));
	}

}

export class BarcodeData 
{
	constructor(
		public text: String,
		public format: String
	) { }
}

export class PlantInfo
{
	constructor(
		public barcode: string,
		public beeSafe: number
	) { }
}
export class text_color 
{
	constructor(
		public after_scan_color: String
	) { }
}
export function click() 
{

}